import {NextRequest, NextResponse} from 'next/server'
import {createClient, type SanityClient} from '@sanity/client'
import {htmlToBlocks, normalizeBlock} from '@sanity/block-tools'
import {JSDOM} from 'jsdom'
import {marked} from 'marked'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type PortableTextBlock = Record<string, unknown>

type GhostPostInput = {
  id?: string
  uuid?: string
  title?: string
  slug?: string
  html?: string
  markdown?: string
  status?: string
  published_at?: string | null
  updated_at?: string | null
  feature_image?: string | null
  feature_image_alt?: string | null
  excerpt?: string | null
  custom_excerpt?: string | null
}

type GhostApiResponse = {
  posts: Array<{
    id: string
    slug: string
    status: string
    published_at: string | null
    updated_at: string | null
  }>
}

const blockContentType = {
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Code', value: 'code'},
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                name: 'href',
                title: 'URL',
                type: 'url',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'image',
      name: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    },
  ],
} as unknown

const allowedStatuses = new Set(['draft', 'published', 'scheduled'])

const htmlParser = (html: string) => new JSDOM(`<body>${html}</body>`).window.document

marked.setOptions({gfm: true, breaks: true, async: false})

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization') || ''
    const token = authHeader.replace(/^[Bb]earer\s+/u, '')
    const ghostApiKey = process.env.GHOST_API_KEY

    if (!ghostApiKey) {
      console.error('[ghost-bridge] Missing GHOST_API_KEY environment variable')
      return NextResponse.json(
        {
          errors: [
            {
              message: 'Internal Server Error',
              context: 'Ghost bridge is not configured with a GHOST_API_KEY',
            },
          ],
        },
        {status: 500},
      )
    }

    if (!token || token !== ghostApiKey) {
      return NextResponse.json(
        {
          errors: [
            {
              message: 'Unauthorized',
              context: 'Missing or invalid Ghost API key',
            },
          ],
        },
        {status: 401},
      )
    }

    const env = getEnvConfig()

    let payload: unknown
    try {
      payload = await request.json()
    } catch (error) {
      console.error('[ghost-bridge] Failed to parse JSON payload', error)
      return NextResponse.json(
        {
          errors: [
            {
              message: 'Invalid JSON payload',
              context: 'Request body could not be parsed as JSON',
            },
          ],
        },
        {status: 400},
      )
    }

    const posts = Array.isArray((payload as {posts?: GhostPostInput[]}).posts)
      ? ((payload as {posts: GhostPostInput[]}).posts || [])
      : []

    if (posts.length === 0) {
      return NextResponse.json(
        {
          errors: [
            {
              message: 'No posts provided',
              context: 'Expected `posts` array in request body',
            },
          ],
        },
        {status: 400},
      )
    }

    const sanityClient = createWriteClient(env)
    const results: GhostApiResponse['posts'] = []
    const failures: Array<{message: string; context?: Record<string, unknown>}> = []

    for (const post of posts) {
      try {
        const created = await upsertSanityPost({post, sanityClient})
        results.push(created)
      } catch (error) {
        console.error('[ghost-bridge] Failed to upsert post', {
          error,
          postId: post.id,
          slug: post.slug,
        })
        failures.push({
          message: error instanceof Error ? error.message : 'Unknown error',
          context: {
            postId: post.id,
            slug: post.slug,
          },
        })
      }
    }

    if (failures.length > 0) {
      return NextResponse.json({errors: failures}, {status: 500})
    }

    return NextResponse.json<GhostApiResponse>(
      {
        posts: results,
      },
      {status: 201},
    )
  } catch (error) {
    console.error('[ghost-bridge] Unexpected failure', error)
    return NextResponse.json(
      {
        errors: [
          {
            message: 'Internal Server Error',
            context: 'An unexpected error occurred while processing the request',
          },
        ],
      },
      {status: 500},
    )
  }
}

function getEnvConfig() {
  const {SANITY_PROJECT_ID, SANITY_DATASET, SANITY_WRITE_TOKEN, NEXT_PUBLIC_SANITY_API_VERSION} =
    process.env

  const missing = [
    ['SANITY_PROJECT_ID', SANITY_PROJECT_ID],
    ['SANITY_DATASET', SANITY_DATASET],
    ['SANITY_WRITE_TOKEN', SANITY_WRITE_TOKEN],
  ].filter(([, value]) => !value)

  if (missing.length > 0) {
    const message = `Missing required environment variables: ${missing
      .map(([key]) => key)
      .join(', ')}`
    console.error('[ghost-bridge] Configuration error', message)
    throw new Error(message)
  }

  return {
    projectId: SANITY_PROJECT_ID as string,
    dataset: SANITY_DATASET as string,
    apiVersion: NEXT_PUBLIC_SANITY_API_VERSION || '2025-10-30',
    token: SANITY_WRITE_TOKEN as string,
  }
}

function createWriteClient(env: {
  projectId: string
  dataset: string
  apiVersion: string
  token: string
}) {
  return createClient({
    projectId: env.projectId,
    dataset: env.dataset,
    apiVersion: env.apiVersion,
    token: env.token,
    useCdn: false,
    perspective: 'published',
  })
}

async function upsertSanityPost({
  post,
  sanityClient,
}: {
  post: GhostPostInput
  sanityClient: SanityClient
}): Promise<GhostApiResponse['posts'][number]> {
  if (!post.title && !post.slug) {
    throw new Error('Missing `title` or `slug` for Ghost post')
  }

  const html = resolveHtml(post)
  const bodyBlocks = html ? convertHtmlToPortableText(html) : []

  const status = normalizeStatus(post.status)
  const publishedAt = post.published_at || (status === 'published' ? new Date().toISOString() : null)

  const slug = slugify(post.slug || post.title || post.uuid || '')
  const excerpt = resolveExcerpt(post, html)
  const documentId = buildDocumentId(post)

  const mainImage = post.feature_image
    ? await uploadImageFromUrl({
        url: post.feature_image,
        alt: post.feature_image_alt ?? undefined,
        sanityClient,
      })
    : undefined

  const baseDoc = {
    _type: 'post',
    title: post.title || slug,
    slug: {current: slug},
    body: bodyBlocks,
    publishedAt,
    status,
    excerpt,
  }

  const docWithImage = mainImage ? {...baseDoc, mainImage} : baseDoc
  const draftDoc = documentId ? {...docWithImage, _id: documentId} : docWithImage

  const storedDoc = documentId
    ? await sanityClient.createOrReplace(draftDoc as any)
    : await sanityClient.create(draftDoc as any)

  const stored = storedDoc as {
    _id: string
    publishedAt?: string | null
    _updatedAt?: string | null
    _createdAt?: string | null
  }

  return {
    id: stored._id,
    slug,
    status,
    published_at: stored.publishedAt ?? publishedAt ?? null,
    updated_at: stored._updatedAt ?? stored._createdAt ?? null,
  }
}

function resolveHtml(post: GhostPostInput) {
  if (post.html && post.html.trim().length > 0) {
    return post.html
  }

  if (post.markdown && post.markdown.trim().length > 0) {
    return marked.parse(post.markdown, {async: false}) as string
  }

  return ''
}

function convertHtmlToPortableText(html: string) {
  const nodes = htmlToBlocks(html, blockContentType as any, {
    parseHtml: htmlParser,
  }) as any[]

  return nodes
    .filter((block) => Boolean(block))
    .map((block) => normalizeBlock(block as any)) as PortableTextBlock[]
}

function normalizeStatus(status?: string | null) {
  if (!status) {
    return 'draft'
  }

  const normalized = status.toLowerCase()
  return allowedStatuses.has(normalized) ? normalized : 'draft'
}

function resolveExcerpt(post: GhostPostInput, html: string) {
  if (post.custom_excerpt && post.custom_excerpt.length > 0) {
    return post.custom_excerpt
  }

  if (post.excerpt && post.excerpt.length > 0) {
    return post.excerpt
  }

  const plainText = stripHtml(html)
  return plainText.slice(0, 280)
}

function stripHtml(html: string) {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function slugify(input: string) {
  const value = input
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  return value.length > 0 ? value.slice(0, 96) : `post-${Date.now()}`
}

function buildDocumentId(post: GhostPostInput) {
  if (post.id) {
    return `ghost-post-${post.id}`
  }

  if (post.uuid) {
    return `ghost-post-${post.uuid}`
  }

  return undefined
}

async function uploadImageFromUrl({
  url,
  alt,
  sanityClient,
}: {
  url: string
  alt?: string
  sanityClient: SanityClient
}) {
  try {
    const response = await fetch(url, {cache: 'no-store'})
    if (!response.ok) {
      throw new Error(`Failed to fetch image. HTTP ${response.status}`)
    }

    const contentType = response.headers.get('content-type') || undefined
    const buffer = Buffer.from(await response.arrayBuffer())
    const filename = extractFilename(url)

    const asset = await sanityClient.assets.upload('image', buffer, {
      filename,
      contentType,
    })

    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
      ...(alt ? {alt} : {}),
    }
  } catch (error) {
    console.error('[ghost-bridge] Failed to upload image', {error, url})
    return undefined
  }
}

function extractFilename(url: string) {
  try {
    const {pathname} = new URL(url)
    const segments = pathname.split('/')
    const last = segments.pop() || 'image'
    return last || 'image'
  } catch (error) {
    console.error('[ghost-bridge] Failed to derive filename from URL', {error, url})
    return 'image'
  }
}


import type {Metadata} from 'next'
import {getSanityImageUrl} from './sanity-image'
import type {SanityImageObject} from './sanity'

/**
 * Convert Sanity SEO object to Next.js Metadata
 * Replaces DatoCMS's toNextMetadata function
 */

interface SanitySEO {
  title?: string
  description?: string
  image?: SanityImageObject
  noIndex?: boolean
}

interface GenerateMetadataOptions {
  seo?: SanitySEO
  title?: string
  description?: string
  image?: SanityImageObject
  path?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lanas.dev'
const siteName = 'lanas.dev'
const defaultTitle = 'lanas.dev - Headless Shopify & eCommerce Entwicklung'
const defaultDescription =
  'Professionelle Shopify und eCommerce Entwicklung mit Fokus auf Headless Commerce. Portfolio, Blog und Projekte.'

export function generateMetadata(options: GenerateMetadataOptions): Metadata {
  const {seo, title, description, image, path = '', type = 'website', publishedTime, modifiedTime, author} = options

  // Prioritize SEO fields, then fallback to direct options, then defaults
  const finalTitle = seo?.title || title || defaultTitle
  const finalDescription = seo?.description || description || defaultDescription
  const finalImage = seo?.image || image

  // Generate full URL
  const url = `${siteUrl}${path}`

  // Generate OG image URL
  const ogImage = finalImage
    ? getSanityImageUrl(finalImage, {width: 1200, height: 630, quality: 90})
    : `${siteUrl}/og-image.jpg` // Fallback OG image

  const metadata: Metadata = {
    title: finalTitle,
    description: finalDescription,
    robots: seo?.noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
      locale: 'de_DE',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: finalDescription,
      images: [ogImage],
      creator: '@MatthiasWebDev',
    },
    alternates: {
      canonical: url,
    },
  }

  // Add article-specific metadata
  if (type === 'article' && publishedTime) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: author ? [author] : undefined,
    }
  }

  return metadata
}

/**
 * Generate metadata for blog posts
 */
export function generatePostMetadata(post: {
  title: string
  excerpt?: string
  mainImage?: SanityImageObject
  seo?: SanitySEO
  publishedAt?: string
  author?: {name: string}
  slug: {current: string}
}) {
  return generateMetadata({
    seo: post.seo,
    title: post.title,
    description: post.excerpt,
    image: post.mainImage,
    path: `/blog/${post.slug.current}`,
    type: 'article',
    publishedTime: post.publishedAt,
    author: post.author?.name,
  })
}

/**
 * Generate metadata for projects
 */
export function generateProjectMetadata(project: {
  title: string
  description?: string
  image?: SanityImageObject
  seo?: SanitySEO
  slug: {current: string}
}) {
  return generateMetadata({
    seo: project.seo,
    title: `${project.title} - Projekt`,
    description: project.description,
    image: project.image,
    path: `/projekt/${project.slug.current}`,
    type: 'website',
  })
}

/**
 * Generate metadata for static pages
 */
export function generatePageMetadata(page: {
  title: string
  description?: string
  image?: SanityImageObject
  seo?: SanitySEO
  path: string
}) {
  return generateMetadata({
    seo: page.seo,
    title: page.title,
    description: page.description,
    image: page.image,
    path: page.path,
    type: 'website',
  })
}

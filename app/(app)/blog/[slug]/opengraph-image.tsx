import { ImageResponse } from 'next/og'
import { client } from '@/sanity/lib/client'
import { renderOGImage } from '@/lib/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const QUERY = `*[_type == "post" && slug.current == $slug][0] {
  title,
  excerpt,
  mainImage {
    asset-> {
      url,
      metadata { palette }
    }
  },
  seo {
    title,
    description,
    image {
      asset-> {
        url,
        metadata { palette }
      }
    }
  }
}`

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await client.fetch(QUERY, { slug })

  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#1a1a1a',
            color: 'white',
            fontSize: 48,
          }}
        >
          Post not found
        </div>
      ),
      { width: 1200, height: 630 }
    )
  }

  const title = post.seo?.title || post.title
  const description = post.seo?.description || post.excerpt
  const coverImage = post.seo?.image || post.mainImage
  const coverImageUrl = coverImage?.asset?.url
  const palette = coverImage?.asset?.metadata?.palette

  return renderOGImage({
    title,
    description,
    coverImageUrl,
    palette,
  })
}


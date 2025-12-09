import { ImageResponse } from 'next/og'
import { client } from '@/sanity/lib/client'
import { renderOGImage } from '@/lib/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Blog - Lanas'

const QUERY = `*[_type == "siteSettings" && _id == "siteSettings"][0] {
  blogOg {
    title,
    description,
    image {
      asset-> {
        url,
        metadata { palette }
      }
    }
  },
  defaultOgImage {
    asset-> {
      url,
      metadata { palette }
    }
  }
}`

export default async function Image() {
  const settings = await client.fetch(QUERY)
  
  const blogOg = settings?.blogOg
  const coverImage = blogOg?.image || settings?.defaultOgImage
  const coverImageUrl = coverImage?.asset?.url
  const palette = coverImage?.asset?.metadata?.palette

  const title = blogOg?.title || 'Blog'
  const description = blogOg?.description || 'Aktuelle Artikel und Insights'

  return renderOGImage({
    title,
    description,
    coverImageUrl,
    palette,
  })
}


import { ImageResponse } from 'next/og'
import { client } from '@/sanity/lib/client'
import { renderOGImage } from '@/lib/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Projekte - Lanas'

const QUERY = `*[_type == "siteSettings" && _id == "siteSettings"][0] {
  projektOg {
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
  
  const projektOg = settings?.projektOg
  const coverImage = projektOg?.image || settings?.defaultOgImage
  const coverImageUrl = coverImage?.asset?.url
  const palette = coverImage?.asset?.metadata?.palette

  const title = projektOg?.title || 'Projekte'
  const description = projektOg?.description || 'Unsere erfolgreich umgesetzten Projekte'

  return renderOGImage({
    title,
    description,
    coverImageUrl,
    palette,
  })
}


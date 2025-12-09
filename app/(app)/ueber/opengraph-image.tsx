import { ImageResponse } from 'next/og'
import { client } from '@/sanity/lib/client'
import { renderOGImage } from '@/lib/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Über uns - Lanas'

const QUERY = `{
  "about": *[_type == "about" && _id == "about"][0] {
    title,
    description,
    image {
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
  },
  "settings": *[_type == "siteSettings" && _id == "siteSettings"][0] {
    ueberOg {
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
  }
}`

export default async function Image() {
  const data = await client.fetch(QUERY)
  
  const about = data?.about
  const settings = data?.settings
  const ueberOg = settings?.ueberOg

  // Priority: ueberOg > about.seo > about defaults > settings defaults
  const title = ueberOg?.title || about?.seo?.title || about?.title || 'Über uns'
  const description = ueberOg?.description || about?.seo?.description || about?.description
  const coverImage = ueberOg?.image || about?.seo?.image || about?.image || settings?.defaultOgImage
  const coverImageUrl = coverImage?.asset?.url
  const palette = coverImage?.asset?.metadata?.palette

  return renderOGImage({
    title,
    description,
    coverImageUrl,
    palette,
  })
}


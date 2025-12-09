import { ImageResponse } from 'next/og'
import { client } from '@/sanity/lib/client'
import { renderOGImage } from '@/lib/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Lanas - Webdesign & Entwicklung'

const QUERY = `{
  "home": *[_type == "home" && _id == "home"][0] {
    title,
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
    title,
    description,
    homeOg {
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
  
  const home = data?.home
  const settings = data?.settings
  const homeOg = settings?.homeOg

  // Priority: homeOg > home.seo > settings defaults
  const title = homeOg?.title || home?.seo?.title || home?.title || settings?.title || 'Lanas'
  const description = homeOg?.description || home?.seo?.description || settings?.description
  const coverImage = homeOg?.image || home?.seo?.image || settings?.defaultOgImage
  const coverImageUrl = coverImage?.asset?.url
  const palette = coverImage?.asset?.metadata?.palette

  return renderOGImage({
    title,
    description,
    coverImageUrl,
    palette,
  })
}


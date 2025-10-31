import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import {client} from '@/sanity/lib/client'
import type {SanityImageObject} from './sanity'

// Get a pre-configured url-builder
const builder = imageUrlBuilder(client)

/**
 * Generate image URL from Sanity image object
 */
export function urlFor(source: SanityImageObject | null | undefined) {
  if (!source?.asset) return builder.image({} as any)
  return builder.image(source)
}

/**
 * SanityImage component - replaces DatoImage
 * Provides similar functionality to DatoCMS's responsive images
 */
interface SanityImageProps {
  image: SanityImageObject | null | undefined
  alt?: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  quality?: number
  aspectRatio?: string
}

export function SanityImage({
  image,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  sizes,
  quality = 90,
  aspectRatio,
}: SanityImageProps) {
  if (!image?.asset) {
    return null
  }

  const imageAlt = alt || image.alt || ''
  const lqip = image.asset.metadata?.lqip
  const dimensions = image.asset.metadata?.dimensions

  // Build the image URL
  let imageUrl = urlFor(image).quality(quality)

  // Apply width and height if provided
  if (width && !fill) {
    imageUrl = imageUrl.width(width)
  }
  if (height && !fill) {
    imageUrl = imageUrl.height(height)
  }

  // Apply aspect ratio if provided (e.g., "16:9", "3:1")
  if (aspectRatio && !fill) {
    const [w, h] = aspectRatio.split(':').map(Number)
    imageUrl = imageUrl.size(width || 1200, Math.round(((width || 1200) * h) / w))
  }

  // Apply hotspot and crop if available
  if (image.hotspot || image.crop) {
    imageUrl = imageUrl.fit('crop')
  }

  const finalUrl = imageUrl.url()

  if (fill) {
    return (
      <Image
        src={finalUrl}
        alt={imageAlt}
        fill
        className={className}
        priority={priority}
        sizes={sizes || '100vw'}
        quality={quality}
        placeholder={lqip ? 'blur' : 'empty'}
        blurDataURL={lqip}
      />
    )
  }

  return (
    <Image
      src={finalUrl}
      alt={imageAlt}
      width={width || dimensions?.width || 1200}
      height={height || dimensions?.height || 675}
      className={className}
      priority={priority}
      sizes={sizes}
      quality={quality}
      placeholder={lqip ? 'blur' : 'empty'}
      blurDataURL={lqip}
    />
  )
}

/**
 * Simple image URL generator for use in CSS or other contexts
 */
export function getSanityImageUrl(
  image: SanityImageObject | null | undefined,
  options?: {
    width?: number
    height?: number
    quality?: number
    format?: 'jpg' | 'png' | 'webp'
    aspectRatio?: string
  }
) {
  if (!image?.asset) return ''

  let imageUrl = urlFor(image)

  if (options?.width) imageUrl = imageUrl.width(options.width)
  if (options?.height) imageUrl = imageUrl.height(options.height)
  if (options?.quality) imageUrl = imageUrl.quality(options.quality)
  if (options?.format) imageUrl = imageUrl.format(options.format)

  if (options?.aspectRatio) {
    const [w, h] = options.aspectRatio.split(':').map(Number)
    imageUrl = imageUrl.size(
      options.width || 1200,
      Math.round(((options.width || 1200) * h) / w)
    )
  }

  return imageUrl.url()
}

/**
 * Get responsive srcSet for an image
 */
export function getSanitySrcSet(
  image: SanityImageObject | null | undefined,
  widths: number[] = [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
) {
  if (!image?.asset) return ''

  return widths
    .map((width) => {
      const url = urlFor(image).width(width).url()
      return `${url} ${width}w`
    })
    .join(', ')
}

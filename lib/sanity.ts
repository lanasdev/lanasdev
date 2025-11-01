import {client} from '@/sanity/lib/client'
import type {SanityImageSource} from '@sanity/image-url/lib/types/types'

// Common image projection
const imageProjection = `
  asset->{
    _id,
    url,
    metadata {
      lqip,
      dimensions {
        width,
        height,
        aspectRatio
      }
    }
  },
  alt,
  hotspot,
  crop
`

// Common SEO projection
const seoProjection = `
  seo {
    title,
    description,
    image {
      ${imageProjection}
    },
    noIndex
  }
`

// Portable Text projections for handling references
const portableTextProjection = `
  ...,
  markDefs[]{
    ...,
    _type == "internalProjectLink" => {
      "slug": @.reference->slug.current,
      "title": @.reference->title
    },
    _type == "internalPostLink" => {
      "slug": @.reference->slug.current,
      "title": @.reference->title
    },
    _type == "internalTestimonialLink" => {
      "slug": @.reference->slug.current,
      "name": @.reference->name
    }
  },
  _type == "image" => {
    ${imageProjection}
  }
`

/**
 * Fetch homepage data (projects, posts, home content)
 */
export async function getHomepageData() {
  const query = `{
    "home": *[_type == "home" && _id == "home"][0] {
      title,
      subheading,
      heroinfo,
      titleAbout,
      textAbout[]{${portableTextProjection}},
      imageAbout {
        ${imageProjection}
      },
      titleTechstack,
      logosTechstack[] {
        ${imageProjection}
      },
      _updatedAt
    },
    "projects": *[_type == "project"] | order(position asc, _createdAt desc) [0...6] {
      _id,
      title,
      slug,
      description,
      image {
        ${imageProjection}
      },
      video {
        asset-> {
          playbackId,
          thumbTime
        }
      },
      _createdAt
    },
    "posts": *[_type == "post"] | order(publishedAt desc) [0...6] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage {
        ${imageProjection}
      },
      author-> {
        name,
        role,
        image {
          ${imageProjection}
        }
      }
    }
  }`

  return await client.fetch(query)
}

/**
 * Fetch all project slugs for static generation
 */
export async function getAllProjectSlugs() {
  const query = `*[_type == "project" && defined(slug.current)]{
    "slug": slug.current
  }`

  return await client.fetch<Array<{slug: string}>>(query)
}

/**
 * Fetch single project by slug
 */
export async function getProjectBySlug(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    clientname,
    liveurl,
    _createdAt,
    position,
    classname,
    image {
      ${imageProjection}
    },
    video,
    content[]{${portableTextProjection}},
    "otherprojects": otherprojects[]-> {
      _id,
      title,
      slug,
      description,
      image {
        ${imageProjection}
      }
    },
    color1,
    color2,
    gradientdirection,
    ${seoProjection}
  }`

  return await client.fetch(query, {slug})
}

/**
 * Fetch all post slugs for static generation
 */
export async function getAllPostSlugs() {
  const query = `*[_type == "post" && defined(slug.current)]{
    "slug": slug.current
  }`

  return await client.fetch<Array<{slug: string}>>(query)
}

/**
 * Fetch single post by slug
 */
export async function getPostBySlug(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage {
      ${imageProjection}
    },
    author-> {
      name,
      role,
      image {
        ${imageProjection}
      }
    },
    body[]{${portableTextProjection}},
    ${seoProjection}
  }`

  return await client.fetch(query, {slug})
}

/**
 * Fetch all posts except the current one (for "Other Posts" section)
 */
export async function getOtherPosts(currentSlug: string) {
  const query = `*[_type == "post" && slug.current != $currentSlug] | order(publishedAt desc) [0...4] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage {
      ${imageProjection}
    },
    author-> {
      name,
      role
    }
  }`

  return await client.fetch(query, {currentSlug})
}

/**
 * Fetch about page data
 */
export async function getAboutPage() {
  const query = `*[_type == "about" && _id == "about"][0] {
    title,
    description,
    image {
      ${imageProjection}
    },
    content[]{${portableTextProjection}},
    ${seoProjection},
    _updatedAt
  }`

  return await client.fetch(query)
}

/**
 * Fetch impressum page data
 */
export async function getImpressumPage() {
  const query = `*[_type == "impressum" && _id == "impressum"][0] {
    title,
    content[]{${portableTextProjection}},
    _updatedAt
  }`

  return await client.fetch(query)
}

/**
 * Fetch all testimonials
 */
export async function getAllTestimonials() {
  const query = `*[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    name,
    slug,
    title,
    company,
    content,
    image {
      ${imageProjection}
    }
  }`

  return await client.fetch(query)
}

/**
 * Fetch data for sitemap generation
 */
export async function getSitemapData() {
  const query = `{
    "projects": *[_type == "project" && defined(slug.current)] {
      "slug": slug.current,
      "_updatedAt": _updatedAt
    },
    "posts": *[_type == "post" && defined(slug.current)] {
      "slug": slug.current,
      "_updatedAt": _updatedAt
    },
    "home": *[_type == "home" && _id == "home"][0] {
      "_updatedAt": _updatedAt
    },
    "impressum": *[_type == "impressum" && _id == "impressum"][0] {
      "_updatedAt": _updatedAt
    }
  }`

  return await client.fetch(query)
}

/**
 * Fetch recent projects (for navbar or other components)
 */
export async function getRecentProjects(limit = 5) {
  const query = `*[_type == "project"] | order(position asc, _createdAt desc) [0...${limit}] {
    _id,
    title,
    slug,
    image {
      ${imageProjection}
    }
  }`

  return await client.fetch(query)
}

/**
 * Type helper for Sanity image objects
 */
export type SanityImageObject = {
  asset: {
    _id: string
    url: string
    metadata: {
      lqip: string
      dimensions: {
        width: number
        height: number
        aspectRatio: number
      }
    }
  }
  alt?: string
  hotspot?: {
    x: number
    y: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

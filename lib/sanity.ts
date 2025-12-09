import { draftMode } from "next/headers";
import type { QueryParams } from "next-sanity";

import { sanityFetch } from "@/sanity/lib/live";

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
`;

// Common SEO projection
const seoProjection = `
  seo {
    title,
    description,
    image {
      ${imageProjection}
    },
    indexing
  }
`;

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
`;

type LiveConfig = {
  perspective: "published" | "previewDrafts";
  stega: boolean;
};

type PortableTextValue = Array<Record<string, unknown>>;

type ImpressumPage = {
  title?: string;
  content?: PortableTextValue;
  _updatedAt?: string;
};

type SiteSettings = {
  title?: string;
  description?: string;
  siteUrl?: string;
  defaultOgImage?: SanityImageObject;
  homeOg?: {
    title?: string;
    description?: string;
    image?: SanityImageObject;
  };
  blogOg?: {
    title?: string;
    description?: string;
    image?: SanityImageObject;
  };
  projektOg?: {
    title?: string;
    description?: string;
    image?: SanityImageObject;
  };
  ueberOg?: {
    title?: string;
    description?: string;
    image?: SanityImageObject;
  };
};

type HomepageData = {
  home: {
    title?: string;
    subheading?: string;
    heroinfo?: string;
    titleAbout?: string;
    textAbout?: PortableTextValue;
    imageAbout?: SanityImageObject;
    titleTechstack?: string;
    logosTechstack?: Array<SanityImageObject>;
    seo?: {
      title?: string;
      description?: string;
      image?: SanityImageObject;
      indexing?: string;
    };
    _updatedAt?: string;
  } | null;
  projects: Array<{
    _id: string;
    title: string;
    slug: { current: string };
    description?: string;
    image?: SanityImageObject;
    video?: {
      asset?: {
        playbackId?: string;
        thumbTime?: number;
      };
    };
    _createdAt?: string;
  }>;
  posts: Array<{
    _id: string;
    title: string;
    slug: { current: string };
    excerpt?: string;
    publishedAt?: string;
    mainImage?: SanityImageObject;
    author?: {
      name?: string;
      role?: string;
      image?: SanityImageObject;
    } | null;
  }>;
};

async function resolveLiveConfig(): Promise<LiveConfig> {
  try {
    const store = await draftMode();

    if (store.isEnabled) {
      return { perspective: "previewDrafts", stega: true };
    }
  } catch (_error) {
    // draftMode() throws when no request context is available (eg. build time)
  }

  return { perspective: "published", stega: false };
}

async function fetchSanityData<T>(query: string, params?: QueryParams) {
  const { perspective, stega } = await resolveLiveConfig();
  const { data } = await sanityFetch({
    query,
    params,
    perspective,
    stega,
  });

  return data as T;
}

/**
 * Fetch site settings
 */
export async function getSiteSettings(): Promise<SiteSettings | null> {
  const query = `*[_type == "siteSettings" && _id == "siteSettings"][0] {
    title,
    description,
    siteUrl,
    defaultOgImage {
      ${imageProjection}
    },
    homeOg {
      title,
      description,
      image {
        ${imageProjection}
      }
    },
    blogOg {
      title,
      description,
      image {
        ${imageProjection}
      }
    },
    projektOg {
      title,
      description,
      image {
        ${imageProjection}
      }
    },
    ueberOg {
      title,
      description,
      image {
        ${imageProjection}
      }
    }
  }`;

  return fetchSanityData<SiteSettings | null>(query);
}

/**
 * Fetch homepage data (projects, posts, home content)
 */
export async function getHomepageData(): Promise<HomepageData> {
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
      ${seoProjection},
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
  }`;

  return fetchSanityData<HomepageData>(query);
}

/**
 * Fetch all project slugs for static generation
 */
export async function getAllProjectSlugs() {
  const query = `*[_type == "project" && defined(slug.current)]{
    "slug": slug.current
  }`;

  return fetchSanityData<Array<{ slug: string }>>(query);
}

/**
 * Fetch single project by slug
 */
export async function getProjectBySlug(slug: string): Promise<{
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  clientname?: string;
  liveurl?: string;
  _createdAt?: string;
  position?: number;
  classname?: string;
  image?: SanityImageObject;
  video?: {
    asset?: {
      playbackId?: string;
      thumbTime?: number;
    };
  };
  content?: PortableTextValue;
  otherprojects?: Array<{
    _id: string;
    title: string;
    slug: { current: string };
    description?: string;
    image?: SanityImageObject;
  }>;
  color1?: unknown;
  color2?: unknown;
  gradientdirection?: string;
  seo?: {
    title?: string;
    description?: string;
    image?: SanityImageObject;
    indexing?: string;
  };
} | null> {
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
  }`;

  return fetchSanityData(query, { slug });
}

/**
 * Fetch all post slugs for static generation
 */
export async function getAllPostSlugs() {
  const query = `*[_type == "post" && defined(slug.current)]{
    "slug": slug.current
  }`;

  return fetchSanityData<Array<{ slug: string }>>(query);
}

/**
 * Fetch single post by slug
 */
export async function getPostBySlug(slug: string): Promise<{
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt?: string;
  mainImage?: SanityImageObject;
  author?: {
    name: string;
    role?: string;
    image?: SanityImageObject;
  };
  body?: Array<unknown>;
  seo?: {
    title?: string;
    description?: string;
    image?: SanityImageObject;
    indexing?: string;
  };
} | null> {
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
  }`;

  return fetchSanityData(query, { slug });
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
  }`;

  return fetchSanityData(query, { currentSlug });
}

/**
 * Fetch about page data
 */
export async function getAboutPage(): Promise<{
  title: string;
  description?: string;
  image?: SanityImageObject;
  content?: PortableTextValue;
  seo?: {
    title?: string;
    description?: string;
    image?: SanityImageObject;
    indexing?: string;
  };
  _updatedAt?: string;
} | null> {
  const query = `*[_type == "about" && _id == "about"][0] {
    title,
    description,
    image {
      ${imageProjection}
    },
    content[]{${portableTextProjection}},
    ${seoProjection},
    _updatedAt
  }`;

  return fetchSanityData(query);
}

/**
 * Fetch impressum page data
 */
export async function getImpressumPage(): Promise<ImpressumPage | null> {
  const query = `*[_type == "impressum" && _id == "impressum"][0] {
    title,
    content[]{${portableTextProjection}},
    _updatedAt
  }`;

  return fetchSanityData<ImpressumPage | null>(query);
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
  }`;

  return fetchSanityData(query);
}

/**
 * Fetch data for sitemap generation
 */
export async function getSitemapData(): Promise<{
  projects: Array<{
    slug: string;
    _updatedAt: string;
  }>;
  posts: Array<{
    slug: string;
    _updatedAt: string;
  }>;
  home?: {
    _updatedAt: string;
  };
  impressum?: {
    _updatedAt: string;
  };
}> {
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
  }`;

  return fetchSanityData(query);
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
  }`;

  return fetchSanityData(query);
}

/**
 * Type helper for Sanity image objects
 */
export type SanityImageObject = {
  asset: {
    _id: string;
    url: string;
    metadata: {
      lqip: string;
      dimensions: {
        width: number;
        height: number;
        aspectRatio: number;
      };
    };
  };
  alt?: string;
  hotspot?: {
    x: number;
    y: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
};

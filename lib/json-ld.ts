import type { FaqItem } from "./subscription-faq";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://lan.as";

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Lanas Webdesign",
    url: SITE_URL,
    description:
      "Webdesign-Agentur für blitzschnelle Shopify Shops und Headless E-Commerce.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "DE",
    },
    sameAs: [
      process.env.NEXT_PUBLIC_GITHUB_URL,
      process.env.NEXT_PUBLIC_INSTAGRAM_URL,
      process.env.NEXT_PUBLIC_TWITTER_URL,
    ].filter(Boolean),
  };
}

export function getArticleJsonLd(post: {
  title: string;
  excerpt?: string;
  publishedAt?: string;
  _updatedAt?: string;
  slug: { current: string };
  author?: { name?: string };
  mainImage?: { asset?: { url?: string } };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post._updatedAt || post.publishedAt,
    url: `${SITE_URL}/blog/${post.slug.current}`,
    author: post.author?.name
      ? { "@type": "Person", name: post.author.name }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: "Lanas Webdesign",
      url: SITE_URL,
    },
  };
}

export function getBreadcrumbJsonLd(
  items: Array<{ name: string; url?: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };
}

export function getFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

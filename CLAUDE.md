# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a German-language portfolio/agency website built with Next.js 16, targeting the ecommerce industry with a focus on headless Shopify. The site uses Sanity.io for content management, featuring projects, blog posts, and testimonials. The site is deployed on Vercel.

## Development Commands

```bash
# Start development server with Turbopack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Format code with Prettier
pnpm prettier --write .
```

## Architecture

### Next.js App Router Structure

This project uses the Next.js App Router with the following structure:

- `app/` - All pages and layouts using App Router conventions
  - `page.tsx` - Homepage with hero, projects grid, blog list, and sections
  - `layout.tsx` - Root layout with Navbar, Footer, and global styles
  - `blog/[slug]/page.tsx` - Dynamic blog post pages (SSG with revalidation)
  - `projekt/[slug]/page.tsx` - Dynamic project pages (SSG with revalidation)
  - `kontakt/page.tsx` - Contact page
  - `ueber/page.tsx` - About page
  - `danke/page.tsx` - Thank you page (redirect after contact form submission)
  - `studio/[[...tool]]/page.tsx` - Sanity Studio for content management
- `components/` - Reusable React components (both shared and shadcn/ui components)
- `lib/` - Utility functions and shared logic
- `sanity/` - Sanity configuration and schema definitions
- `public/` - Static assets including fonts

### Sanity.io Integration

All content is fetched from Sanity.io via GROQ:

- **Data Fetching**: Use utility functions from `lib/sanity.ts` with GROQ queries
- **Image Handling**: Use `<SanityImage>` component from `lib/sanity-image.tsx` for responsive images
- **Rich Text**: Use `<PortableTextRenderer>` component for Portable Text content
- **Revalidation**: Pages use `export const revalidate = 300` (5 minutes) for ISR
- **Static Generation**: Blog and project pages use `generateStaticParams()` for SSG
- **Sanity Studio**: Mounted at `/studio` route for content editing

Example GROQ query pattern:
```typescript
import { getHomepageData } from "@/lib/sanity";

const data = await getHomepageData();
const { projects, posts, home } = data;
```

Available query functions in `lib/sanity.ts`:
- `getHomepageData()` - Homepage content, projects, and posts
- `getProjectBySlug(slug)` - Single project
- `getAllProjectSlugs()` - For static generation
- `getPostBySlug(slug)` - Single blog post
- `getAllPostSlugs()` - For static generation
- `getOtherPosts(currentSlug)` - Related posts
- `getAboutPage()` - About page content
- `getImpressumPage()` - Impressum content
- `getSitemapData()` - For sitemap generation

### Sanity Schema Structure

Sanity schemas are defined in `sanity/schemaTypes/`:

**Collections:**
- `project` - Portfolio projects with images, videos, content, related projects
- `post` - Blog posts with cover images, authors, categories, Portable Text content
- `testimonial` - Client testimonials
- `author` - Blog post authors
- `category` - Blog categories

**Singletons:**
- `home` - Homepage content (hero, about section, tech stack)
- `about` - About page content
- `impressum` - Legal/impressum page content

### Contact Form Flow

The contact form (`components/Contactform.tsx` or `components/Contact.tsx`) uses Server Actions:

1. Form submission triggers `submitForm()` action in `app/actions.ts`
2. Validates data with Zod schema
3. Stores submission in Vercel Postgres database
4. Sends to Formspree for notification
5. Sends confirmation email via Resend to the user
6. Redirects to `/danke` page

### Styling System

- **Framework**: Tailwind CSS v4
- **Component Library**: shadcn/ui components in `components/ui/`
- **Custom Font**: GeneralSans variable font loaded locally
- **Utilities**: `cn()` function from `lib/utils.ts` for conditional class merging
- **Animations**: Uses `motion` (formerly Framer Motion) for animations
- **Theme**: Custom color system via CSS variables, defined in Tailwind config

### Key Dependencies

- **Next.js 16** with React 19
- **sanity** & **next-sanity** - Sanity.io CMS integration
- **@sanity/image-url** - Sanity image URL builder
- **@portabletext/react** - Portable Text rendering
- **motion** - Animation library (successor to Framer Motion)
- **@radix-ui** - Headless UI primitives for shadcn/ui
- **zod** - Schema validation
- **react-hook-form** - Form state management
- **@vercel/postgres** - Database for contact form submissions
- **resend** - Email sending service
- **@calcom/embed-react** - Cal.com booking integration

## Environment Variables

Required environment variables (see `.env.local`):

- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` - Sanity dataset (usually 'production')
- `NEXT_PUBLIC_SANITY_API_VERSION` - API version (defaults to '2025-10-30')
- `RESEND_API_KEY` - Resend email service key
- `FORMSPREE_ID` - Formspree form ID
- Vercel Postgres connection strings (auto-configured on Vercel)

## Code Patterns

### Path Aliases

Use `@/` prefix for imports (maps to project root):
```typescript
import { getHomepageData } from "@/lib/sanity";
import Navbar from "@/app/Navbar";
import { Button } from "@/components/ui/button";
import { SanityImage } from "@/lib/sanity-image";
```

### SEO and Metadata

Pages use `generateMetadata()` for dynamic SEO with helpers from `lib/sanity-metadata.ts`:
```typescript
import { generatePostMetadata } from "@/lib/sanity-metadata";

export async function generateMetadata(props: MetadataProps): Promise<Metadata> {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);

  if (!post) return {};

  return generatePostMetadata({
    ...post,
    slug: { current: params.slug },
  });
}
```

Available metadata helpers:
- `generateMetadata(options)` - Generic metadata generator
- `generatePostMetadata(post)` - For blog posts
- `generateProjectMetadata(project)` - For projects
- `generatePageMetadata(page)` - For static pages

### Image Optimization

Images are handled through Sanity's image pipeline:
```typescript
import { SanityImage } from "@/lib/sanity-image";

<SanityImage
  image={project.image}
  alt={project.title}
  width={1920}
  aspectRatio="3:1"
  className="object-cover"
  priority
/>
```

Available image utilities:
- `<SanityImage>` - Main component for rendering images
- `urlFor(image)` - Generate image URLs
- `getSanityImageUrl(image, options)` - Simple URL generation
- `getSanitySrcSet(image, widths)` - Generate srcSet for responsive images

### Portable Text Rendering

Use the Portable Text renderer for rich text content:
```typescript
import { PortableTextRenderer } from "@/components/PortableTextRenderer";

<PortableTextRenderer value={post.body} />
```

The renderer supports:
- Standard formatting (headings, paragraphs, lists, blockquotes)
- Images embedded in content
- Internal links to projects, posts, and testimonials
- External links

### Language

All user-facing content is in German. Page titles, descriptions, and UI text should be in German.

## Redirects

The following redirects are configured in `next.config.js`:
- `/about` → `/ueber`
- `/project/:slug` → `/projekt/:slug`
- `/meet` → Cal.com booking link
- Brand affiliate links for SimpleAnalytics and Netcup

## Content Management

Access the Sanity Studio at `/studio` to:
- Create and edit projects, blog posts, testimonials
- Manage homepage, about page, and impressum content
- Upload and manage images
- Configure SEO settings for each page

Singleton documents (Home, About, Impressum) are configured to prevent creation/deletion.

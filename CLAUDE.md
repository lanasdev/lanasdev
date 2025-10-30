# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a German-language portfolio/agency website built with Next.js 16, targeting the ecommerce industry with a focus on headless Shopify. The site uses DatoCMS for content management, featuring projects, blog posts, and testimonials. The site is deployed on Vercel.

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
- `components/` - Reusable React components (both shared and shadcn/ui components)
- `lib/` - Utility functions and shared logic
- `public/` - Static assets including fonts

### DatoCMS Integration

All content is fetched from DatoCMS via GraphQL:

- **Data Fetching**: Use `performRequest()` from `lib/datocms.ts` with GraphQL queries
- **Image Handling**: Use `<DatoImage>` component from `react-datocms` for responsive images
- **Rich Text**: Use `<StructuredText>` component with custom renderers for blocks and inline records
- **Revalidation**: Pages use `export const revalidate = 300` (5 minutes) for ISR
- **Static Generation**: Blog and project pages use `generateStaticParams()` for SSG

Example GraphQL query pattern:
```typescript
const QUERY = gql`
  query getName {
    allProjects {
      title
      slug
      image {
        responsiveImage(imgixParams: { auto: format }) {
          ...responsiveImageFragment
        }
      }
    }
  }
  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    base64
  }
`;

const { data } = await performRequest({ query });
```

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
- **react-datocms** - DatoCMS integration with responsive images
- **motion** - Animation library (successor to Framer Motion)
- **@radix-ui** - Headless UI primitives for shadcn/ui
- **zod** - Schema validation
- **react-hook-form** - Form state management
- **@vercel/postgres** - Database for contact form submissions
- **resend** - Email sending service
- **@calcom/embed-react** - Cal.com booking integration

## Environment Variables

Required environment variables (see `.env.local`):

- `NEXT_DATOCMS_API_TOKEN` - DatoCMS API token
- `RESEND_API_KEY` - Resend email service key
- `FORMSPREE_ID` - Formspree form ID
- Vercel Postgres connection strings (auto-configured on Vercel)

## Code Patterns

### Path Aliases

Use `@/` prefix for imports (maps to project root):
```typescript
import { performRequest } from "@/lib/datocms";
import Navbar from "@/app/Navbar";
import { Button } from "@/components/ui/button";
```

### SEO and Metadata

Pages use `generateMetadata()` for dynamic SEO:
```typescript
export async function generateMetadata(props: MetadataProps): Promise<Metadata> {
  const params = await props.params;
  const { data } = await performRequest({ query, variables: { eq: params.slug } });
  return toNextMetadata(data.post.seoFallback || []);
}
```

### Image Optimization

- DatoCMS images use Imgix parameters via `responsiveImage(imgixParams: { auto: format, ar: "3:1" })`
- Always include the `responsiveImageFragment` for complete image data
- Use `<ClickableImage>` component for expandable images in content

### Language

All user-facing content is in German. Page titles, descriptions, and UI text should be in German.

## Redirects

The following redirects are configured in `next.config.js`:
- `/about` → `/ueber`
- `/project/:slug` → `/projekt/:slug`
- `/meet` → Cal.com booking link
- Brand affiliate links for SimpleAnalytics and Netcup

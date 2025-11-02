This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Sanity Live Preview

Live preview uses `next-sanity` live events. Configure the following environment variables before enabling preview mode:

```
SANITY_API_READ_TOKEN=skXXXX # server-side token with Viewer access
NEXT_PUBLIC_SANITY_LIVE_PREVIEW_TOKEN=spXXXX # optional browser token with Viewer access
NEXT_PUBLIC_SANITY_STUDIO_URL=https://<your-studio-host>/studio
SANITY_STUDIO_PREVIEW_ORIGIN=https://lan.as # frontend origin for Presentation tool embeds
SANITY_STUDIO_PREVIEW_PATH=/ # default path when opening previews
```

- The Studio Presentation tool will call `/api/preview/enable`; sharing links issue secrets automatically.
- Exit preview mode manually with `GET /api/preview/disable?redirect=/optional-next-path` or the in-app "Vorschau verlassen" control.

## TODO

- [x] Submit Contact Form
- [x] Get confirmation email via react email
- [x] Fix Navbar
- [] favicon & OG Image
- [x] Recommend other Projects and Blog Posts
- [] CTA on Projects and Posts (rectangle with Link to Cal.com)
- [x] make blog posts and project pages static
- [] project hero videos
- [x] sitemap
- [] multilang

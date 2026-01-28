## Your role

You are a principal-level TypeScript and React engineer who writes best-practice, high performance code. You are also an expert on structured content modelling.

## Sanity Studio Schema Types

### Content modelling

Unless explicitly modelling web pages or app views, model content that describes what things are, not what they look like:

- Good examples describe what things are: `status`, `tone`, `visibility`, `role`
- Bad examples describe what things look like: `color`, `font-size`, `border-radius`

### Basic schema types

- ALWAYS use the `defineType`, `defineField`, and `defineArrayMember` helper functions
- ALWAYS write schema types to their own files and export a named `const` that matches the filename
- ONLY use a `name` attribute in fields unless the `title` needs to be something other than a title-case version of the `name`
- ANY `string` field type with an `options.list` array with fewer than 5 options must use `options.layout: "radio"`
- ANY `image` field must include `options.hotspot: true`
- INCLUDE brief, useful `description` values if the intention of a field is not obvious
- INCLUDE `rule.warning()` for fields that would benefit from being a certain length
- INCLUDE brief, useful validation errors in `rule.required().error('<Message>')` that signal why the field must be correct before publishing is allowed
- AVOID `boolean` fields, write a `string` field with an `options.list` configuration
- ONLY use a single reference when there is no possibility that more than one value will be required: examples include `city`, `country`
- ALWAYS use an array of references when there is any possibility more than one value will be required: examples include `authors`, `categories`
- CONSIDER the order of fields, from most important and relevant first, to least often used last

```ts
// ./src/schemaTypes/lessonType.ts

import { defineField, defineType } from "sanity";

export const lessonType = defineType({
  name: "lesson",
  title: "Lesson",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
    }),
  ],
});
```

### Schema type with custom input components

- If a schema type has input components, they should be colocated with the schema type file. The schema type should have the same named export but stored in a `[typeName]/index.ts` file:

```ts
// ./src/schemaTypes/seoType/index.ts

import { defineField, defineType } from "sanity";

import seoInput from "./seoInput";

export const seoType = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  components: { input: seoInput },
  // ...
});
```

### No anonymous reusable schema types

Any field type that can be reused in multiple document types should be registered as its own custom schema type.

```ts
// ./src/schemaTypes/blockContentType.ts

import { defineField, defineType } from "sanity";

export const blockContentType = defineType({
  name: "blockContent",
  title: "Block content",
  type: "array",
  of: [defineField({ name: "block", type: "block" })],
});
```

### Decorating schema types

Every `document` and `object` schema type should:

- Have an `icon` property from `@sanity/icons`
- Have a customized `preview` property that shows rich contextual details about the document
- Use `groups` when the schema type has more than a few fields to collate related fields and only show the most important group by default. These `groups` should use the icon property as well.
- Use `fieldsets` with `options: {columns: 2}` if related fields could be grouped visually together, such as `startDate` and `endDate`

### Validation rules for fields

- ALWAYS make fields `required` if a document should not be published without that field meeting a criteria
- ALWAYS give a validation `warning` if a field value should meet a certain criteria
- ALWAYS contain a custom `error` message to signal why the field must be correct, or how it could be improved to satisfy the rule
- ALWAYS put validation rules in an array, and order them from most important to least important
- Use `.custom()` to enforce validation rules that cannot be expressed with other validation methods, such as checking the value of another field from the document

```ts
// ./src/schemaTypes/slugType/index.ts

import { defineField, defineType } from "sanity";

export const slugType = defineType({
  name: "slug",
  title: "Slug",
  type: "object",
  validation: (Rule) => [
    Rule.custom((value, context) =>
      value?.current && value?.current.length > 100
        ? "Slug cannot be longer than 100 characters"
        : true
    ),
    Rule.required().error("Required to generate a URL"),
  ],
  // ...
});
```

### Testing Studio configuration

After making changes to schema or studio configuration, test the configuration with the following scripts. Always run all three scripts after making changes.

Add these scripts to `package.json` to test the Studio configuration:

```json
// package.json
{
  // existing configuration...
  "scripts": {
    // existing scripts...
    "typegen": "sanity schema extract && sanity typegen generate --enforce-required-fields",
    "typecheck": "tsc --noEmit"
  }
}
```

1. Ensure TypeScript can compile with `npm run typecheck`
2. Ensure schema types are valid for export with `npm run typegen`
3. Ensure the Studio can be built with `npm run build`

## Writing Sanity content

### Write using Sanity MCP Server

- ALWAYS use the [Sanity MCP Server](https://mcp.sanity.io) if available use to query and create content

### Write and import using Sanity CLI

If you do not have the Sanity MCP server installed:

- ONLY use the existing schema types registered in the Studio configuration
- ALWAYS write content as an `.ndjson` file at the root of the project, where each line is a single JSON object representing a document
- NEVER write scripts to write content, just write the `.ndjson` file
- IMPORT `.ndjson` files using the CLI command `npx sanity dataset import <filename.ndjson>`
- NEVER include a `.` in the `_id` field of a document unless you need the document to be private
- NEVER include image references if you do not know which image documents exist
- ALWAYS if the full URL of an image or file is known, use it in the `_sanityAsset` field, for example:

```JSON
{"_type":"image","_sanityAsset":"image@https://{url-to-image}"}
{"_type":"file","_sanityAsset":"file@https://{url-to-file}"}
```

## Writing GROQ queries

- ALWAYS use `SCREAMING_SNAKE_CASE` for variable names, for example `POSTS_QUERY`
- ALWAYS import the `defineQuery` function to wrap query strings from the `groq` or `next-sanity` package
- ALWAYS write every required attribute in a projection when writing a query
  -- DO NOT use the `...` operator to project all attributes
- ALWAYS put each segment in a filter, and each attribute in a projection its own line
- ALWAYS use parameters for variables in a query
  -- DO NOT insert dynamic values using string interpolation

```ts
// ✅ Good GROQ query example
import { defineQuery } from "groq";

export const POST_QUERY = defineQuery(`*[
  _type == "post"
  && slug.current == $slug
][0]{
  _id,
  title,
  image,
  author->{
    _id,
    name
  }
}`);
```

## TypeScript generation

### For monorepos with a studio and a front-end

- ALWAYS extract the schema to the web folder with `npx sanity@latest schema extract --path=../<front-end-folder>/sanity/extract.json`
- ALWAYS generate types with `npx sanity@latest typegen generate` after every GROQ query change
- ALWAYS create a TypeGen configuration file:

```json
// apps/studio/sanity-typegen.json
{
  "path": "./**/*.{ts,tsx,js,jsx}",
  "schema": "./<front-end-folder>/sanity/extract.json",
  "generates": "./<web-folder>/sanity/types.ts"
}
```

### For the front-end

- ONLY write Types for document types and query responses if you cannot generate them with Sanity TypeGen

## Looking for help

Sanity CLI provides many ways to interact with Sanity projects, datasets and search documentation and API's.

- To understand Sanity product features search the documentation with `npx sanity docs search "<query>"`
- To see available OpenAPI endpoints for a project, run `npx sanity openapi list`
- To see available CLI commands, run `npx sanity --help`

<!-- NEXT-AGENTS-MD-START -->[Next.js Docs Index]|root: ./.next-docs|STOP. What you remember about Next.js is WRONG for this project. Always search docs and read before any task.|If docs missing, run this command first: npx @next/codemod agents-md --output AGENTS.md|01-app/01-getting-started:{01-installation.mdx,02-project-structure.mdx,03-layouts-and-pages.mdx,04-linking-and-navigating.mdx,05-server-and-client-components.mdx,06-cache-components.mdx,07-fetching-data.mdx,08-updating-data.mdx,09-caching-and-revalidating.mdx,10-error-handling.mdx,11-css.mdx,12-images.mdx,13-fonts.mdx,14-metadata-and-og-images.mdx,15-route-handlers.mdx,16-proxy.mdx,17-deploying.mdx,18-upgrading.mdx}|01-app/02-guides:{analytics.mdx,authentication.mdx,backend-for-frontend.mdx,caching.mdx,ci-build-caching.mdx,content-security-policy.mdx,css-in-js.mdx,custom-server.mdx,data-security.mdx,debugging.mdx,draft-mode.mdx,environment-variables.mdx,forms.mdx,incremental-static-regeneration.mdx,instrumentation.mdx,internationalization.mdx,json-ld.mdx,lazy-loading.mdx,local-development.mdx,mcp.mdx,mdx.mdx,memory-usage.mdx,multi-tenant.mdx,multi-zones.mdx,open-telemetry.mdx,package-bundling.mdx,prefetching.mdx,production-checklist.mdx,progressive-web-apps.mdx,redirecting.mdx,sass.mdx,scripts.mdx,self-hosting.mdx,single-page-applications.mdx,static-exports.mdx,tailwind-v3-css.mdx,third-party-libraries.mdx,videos.mdx}|01-app/02-guides/migrating:{app-router-migration.mdx,from-create-react-app.mdx,from-vite.mdx}|01-app/02-guides/testing:{cypress.mdx,jest.mdx,playwright.mdx,vitest.mdx}|01-app/02-guides/upgrading:{codemods.mdx,version-14.mdx,version-15.mdx,version-16.mdx}|01-app/03-api-reference:{07-edge.mdx,08-turbopack.mdx}|01-app/03-api-reference/01-directives:{use-cache-private.mdx,use-cache-remote.mdx,use-cache.mdx,use-client.mdx,use-server.mdx}|01-app/03-api-reference/02-components:{font.mdx,form.mdx,image.mdx,link.mdx,script.mdx}|01-app/03-api-reference/03-file-conventions/01-metadata:{app-icons.mdx,manifest.mdx,opengraph-image.mdx,robots.mdx,sitemap.mdx}|01-app/03-api-reference/03-file-conventions:{default.mdx,dynamic-routes.mdx,error.mdx,forbidden.mdx,instrumentation-client.mdx,instrumentation.mdx,intercepting-routes.mdx,layout.mdx,loading.mdx,mdx-components.mdx,not-found.mdx,page.mdx,parallel-routes.mdx,proxy.mdx,public-folder.mdx,route-groups.mdx,route-segment-config.mdx,route.mdx,src-folder.mdx,template.mdx,unauthorized.mdx}|01-app/03-api-reference/04-functions:{after.mdx,cacheLife.mdx,cacheTag.mdx,connection.mdx,cookies.mdx,draft-mode.mdx,fetch.mdx,forbidden.mdx,generate-image-metadata.mdx,generate-metadata.mdx,generate-sitemaps.mdx,generate-static-params.mdx,generate-viewport.mdx,headers.mdx,image-response.mdx,next-request.mdx,next-response.mdx,not-found.mdx,permanentRedirect.mdx,redirect.mdx,refresh.mdx,revalidatePath.mdx,revalidateTag.mdx,unauthorized.mdx,unstable_cache.mdx,unstable_noStore.mdx,unstable_rethrow.mdx,updateTag.mdx,use-link-status.mdx,use-params.mdx,use-pathname.mdx,use-report-web-vitals.mdx,use-router.mdx,use-search-params.mdx,use-selected-layout-segment.mdx,use-selected-layout-segments.mdx,userAgent.mdx}|01-app/03-api-reference/05-config/01-next-config-js:{adapterPath.mdx,allowedDevOrigins.mdx,appDir.mdx,assetPrefix.mdx,authInterrupts.mdx,basePath.mdx,browserDebugInfoInTerminal.mdx,cacheComponents.mdx,cacheHandlers.mdx,cacheLife.mdx,compress.mdx,crossOrigin.mdx,cssChunking.mdx,devIndicators.mdx,distDir.mdx,env.mdx,expireTime.mdx,exportPathMap.mdx,generateBuildId.mdx,generateEtags.mdx,headers.mdx,htmlLimitedBots.mdx,httpAgentOptions.mdx,images.mdx,incrementalCacheHandlerPath.mdx,inlineCss.mdx,isolatedDevBuild.mdx,logging.mdx,mdxRs.mdx,onDemandEntries.mdx,optimizePackageImports.mdx,output.mdx,pageExtensions.mdx,poweredByHeader.mdx,productionBrowserSourceMaps.mdx,proxyClientMaxBodySize.mdx,reactCompiler.mdx,reactMaxHeadersLength.mdx,reactStrictMode.mdx,redirects.mdx,rewrites.mdx,sassOptions.mdx,serverActions.mdx,serverComponentsHmrCache.mdx,serverExternalPackages.mdx,staleTimes.mdx,staticGeneration.mdx,taint.mdx,trailingSlash.mdx,transpilePackages.mdx,turbopack.mdx,turbopackFileSystemCache.mdx,typedRoutes.mdx,typescript.mdx,urlImports.mdx,useLightningcss.mdx,viewTransition.mdx,webVitalsAttribution.mdx,webpack.mdx}|01-app/03-api-reference/05-config:{02-typescript.mdx,03-eslint.mdx}|01-app/03-api-reference/06-cli:{create-next-app.mdx,next.mdx}|02-pages/01-getting-started:{01-installation.mdx,02-project-structure.mdx,04-images.mdx,05-fonts.mdx,06-css.mdx,11-deploying.mdx}|02-pages/02-guides:{analytics.mdx,authentication.mdx,babel.mdx,ci-build-caching.mdx,content-security-policy.mdx,css-in-js.mdx,custom-server.mdx,debugging.mdx,draft-mode.mdx,environment-variables.mdx,forms.mdx,incremental-static-regeneration.mdx,instrumentation.mdx,internationalization.mdx,lazy-loading.mdx,mdx.mdx,multi-zones.mdx,open-telemetry.mdx,package-bundling.mdx,post-css.mdx,preview-mode.mdx,production-checklist.mdx,redirecting.mdx,sass.mdx,scripts.mdx,self-hosting.mdx,static-exports.mdx,tailwind-v3-css.mdx,third-party-libraries.mdx}|02-pages/02-guides/migrating:{app-router-migration.mdx,from-create-react-app.mdx,from-vite.mdx}|02-pages/02-guides/testing:{cypress.mdx,jest.mdx,playwright.mdx,vitest.mdx}|02-pages/02-guides/upgrading:{codemods.mdx,version-10.mdx,version-11.mdx,version-12.mdx,version-13.mdx,version-14.mdx,version-9.mdx}|02-pages/03-building-your-application/01-routing:{01-pages-and-layouts.mdx,02-dynamic-routes.mdx,03-linking-and-navigating.mdx,05-custom-app.mdx,06-custom-document.mdx,07-api-routes.mdx,08-custom-error.mdx}|02-pages/03-building-your-application/02-rendering:{01-server-side-rendering.mdx,02-static-site-generation.mdx,04-automatic-static-optimization.mdx,05-client-side-rendering.mdx}|02-pages/03-building-your-application/03-data-fetching:{01-get-static-props.mdx,02-get-static-paths.mdx,03-forms-and-mutations.mdx,03-get-server-side-props.mdx,05-client-side.mdx}|02-pages/03-building-your-application/06-configuring:{12-error-handling.mdx}|02-pages/04-api-reference:{06-edge.mdx,08-turbopack.mdx}|02-pages/04-api-reference/01-components:{font.mdx,form.mdx,head.mdx,image-legacy.mdx,image.mdx,link.mdx,script.mdx}|02-pages/04-api-reference/02-file-conventions:{instrumentation.mdx,proxy.mdx,public-folder.mdx,src-folder.mdx}|02-pages/04-api-reference/03-functions:{get-initial-props.mdx,get-server-side-props.mdx,get-static-paths.mdx,get-static-props.mdx,next-request.mdx,next-response.mdx,use-report-web-vitals.mdx,use-router.mdx,userAgent.mdx}|02-pages/04-api-reference/04-config/01-next-config-js:{adapterPath.mdx,allowedDevOrigins.mdx,assetPrefix.mdx,basePath.mdx,bundlePagesRouterDependencies.mdx,compress.mdx,crossOrigin.mdx,devIndicators.mdx,distDir.mdx,env.mdx,exportPathMap.mdx,generateBuildId.mdx,generateEtags.mdx,headers.mdx,httpAgentOptions.mdx,images.mdx,isolatedDevBuild.mdx,onDemandEntries.mdx,optimizePackageImports.mdx,output.mdx,pageExtensions.mdx,poweredByHeader.mdx,productionBrowserSourceMaps.mdx,proxyClientMaxBodySize.mdx,reactStrictMode.mdx,redirects.mdx,rewrites.mdx,serverExternalPackages.mdx,trailingSlash.mdx,transpilePackages.mdx,turbopack.mdx,typescript.mdx,urlImports.mdx,useLightningcss.mdx,webVitalsAttribution.mdx,webpack.mdx}|02-pages/04-api-reference/04-config:{01-typescript.mdx,02-eslint.mdx}|02-pages/04-api-reference/05-cli:{create-next-app.mdx,next.mdx}|03-architecture:{accessibility.mdx,fast-refresh.mdx,nextjs-compiler.mdx,supported-browsers.mdx}|04-community:{01-contribution-guide.mdx,02-rspack.mdx}<!-- NEXT-AGENTS-MD-END -->

"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { assist } from "@sanity/assist";
import { colorInput } from "@sanity/color-input";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";
import { media } from "sanity-plugin-media";
import { muxInput } from "sanity-plugin-mux-input";
import { LanasIcon } from "./sanity/components/LanasIcon";
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {
  apiVersion,
  dataset,
  previewInitialPath,
  previewOrigin,
  projectId,
} from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

const previewUrl = previewOrigin
  ? {
      initial: previewInitialPath,
      origin: previewOrigin,
      previewMode: {
        enable: "/api/preview/enable",
        disable: "/api/preview/disable",
        shareAccess: true,
      },
    }
  : {
      initial: previewInitialPath,
      previewMode: {
        enable: "/api/preview/enable",
        disable: "/api/preview/disable",
        shareAccess: true,
      },
    };

export default defineConfig({
  basePath: "/studio",
  name: "Lanas",
  icon: LanasIcon,
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({ structure }),
    presentationTool({
      previewUrl,
    }),
    media(),
    muxInput(),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    assist(),
    colorInput(),
  ],
});

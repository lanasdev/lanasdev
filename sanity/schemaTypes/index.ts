import type { SchemaTypeDefinition } from "sanity";
import { aboutType } from "./aboutType";
import { authorType } from "./authorType";
import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { homeType } from "./homeType";
import { impressumType } from "./impressumType";
import { ogConfigType } from "./ogConfigType";
import { postType } from "./postType";
import { projectType } from "./projectType";
import { seoType } from "./seoType";
import { siteSettingsType } from "./siteSettingsType";
import { testimonialType } from "./testimonialType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Object types
    blockContentType,
    seoType,
    ogConfigType,

    // Document types
    categoryType,
    postType,
    authorType,
    projectType,
    testimonialType,
    homeType,
    aboutType,
    impressumType,
    siteSettingsType,
  ],
};

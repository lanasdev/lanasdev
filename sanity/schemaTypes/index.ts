import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {projectType} from './projectType'
import {testimonialType} from './testimonialType'
import {homeType} from './homeType'
import {aboutType} from './aboutType'
import {impressumType} from './impressumType'
import {seoType} from './seoType'
import {ogConfigType} from './ogConfigType'
import {siteSettingsType} from './siteSettingsType'

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
}

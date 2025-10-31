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

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    projectType,
    testimonialType,
    homeType,
    aboutType,
    impressumType,
  ],
}

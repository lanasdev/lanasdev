import type {StructureResolver} from 'sanity/structure'
import {HomeIcon, InfoOutlineIcon, DocumentIcon, CogIcon} from '@sanity/icons'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Settings
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
      // Singletons
      S.listItem()
        .title('Home Page')
        .icon(HomeIcon)
        .child(
          S.document()
            .schemaType('home')
            .documentId('home')
        ),
      S.listItem()
        .title('About Page')
        .icon(InfoOutlineIcon)
        .child(
          S.document()
            .schemaType('about')
            .documentId('about')
        ),
      S.listItem()
        .title('Impressum')
        .icon(DocumentIcon)
        .child(
          S.document()
            .schemaType('impressum')
            .documentId('impressum')
        ),
      S.divider(),
      // Collections
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('post').title('Blog Posts'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.divider(),
      S.documentTypeListItem('author').title('Authors'),
      S.documentTypeListItem('category').title('Categories'),
      S.divider(),
      // Everything else (excluding our defined types and singletons)
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && ![
          'siteSettings',
          'home',
          'about',
          'impressum',
          'project',
          'post',
          'testimonial',
          'category',
          'author'
        ].includes(item.getId()!),
      ),
    ])

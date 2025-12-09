import {SearchIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const seoType = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  icon: SearchIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'SEO Title',
      type: 'string',
      description: 'Override the page title for search engines and social media',
      validation: (Rule) => [
        Rule.max(60).warning('Titles over 60 characters may be truncated in search results'),
      ],
    }),
    defineField({
      name: 'description',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      description: 'Brief description for search engines and social media',
      validation: (Rule) => [
        Rule.max(160).warning('Descriptions over 160 characters may be truncated in search results'),
      ],
    }),
    defineField({
      name: 'image',
      title: 'OG Image',
      type: 'image',
      description: 'Social sharing image (1200x630px recommended)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'indexing',
      title: 'Indexing',
      type: 'string',
      initialValue: 'index',
      description: 'Control whether search engines should index this page',
      options: {
        list: [
          {title: 'Index (allow search engines)', value: 'index'},
          {title: 'No index (hide from search engines)', value: 'noindex'},
        ],
        layout: 'radio',
      },
    }),
  ],
})


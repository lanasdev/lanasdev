import {ImageIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const ogConfigType = defineType({
  name: 'ogConfig',
  title: 'Open Graph Configuration',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'OG Title',
      type: 'string',
      description: 'Override title for social media cards',
    }),
    defineField({
      name: 'description',
      title: 'OG Description',
      type: 'text',
      rows: 2,
      description: 'Override description for social media cards',
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      description: 'Background image for the OG card (will be overlaid with dark gradient)',
      options: {
        hotspot: true,
      },
    }),
  ],
})


import {CogIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      description: 'Default site title used across the site',
      validation: (Rule) => Rule.required().error('Site title is required'),
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 3,
      description: 'Default site description used for SEO',
    }),
    defineField({
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
      description: 'Primary URL of your site (e.g., https://lan.as)',
      validation: (Rule) => Rule.required().error('Site URL is required'),
    }),
    defineField({
      name: 'defaultOgImage',
      title: 'Default OG Image',
      type: 'image',
      description: 'Fallback image for social sharing when no specific image is set',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'homeOg',
      title: 'Home Page OG',
      type: 'ogConfig',
      description: 'Open Graph settings for the homepage',
    }),
    defineField({
      name: 'blogOg',
      title: 'Blog Index OG',
      type: 'ogConfig',
      description: 'Open Graph settings for the blog listing page',
    }),
    defineField({
      name: 'projektOg',
      title: 'Projects Index OG',
      type: 'ogConfig',
      description: 'Open Graph settings for the projects listing page',
    }),
    defineField({
      name: 'ueberOg',
      title: 'About Page OG',
      type: 'ogConfig',
      description: 'Open Graph settings for the about (über) page',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'siteUrl',
    },
    prepare() {
      return {
        title: 'Site Settings',
        subtitle: 'Global SEO and OG configuration',
      }
    },
  },
})


import {RocketIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: RocketIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'clientname',
      title: 'Client Name',
      type: 'string',
    }),
    defineField({
      name: 'liveurl',
      title: 'Live URL',
      type: 'url',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'number',
      description: 'Used for ordering projects',
    }),
    defineField({
      name: 'classname',
      title: 'CSS Class Name',
      type: 'string',
      description: 'Custom CSS class for styling',
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'video',
      title: 'Project Video',
      type: 'object',
      description: 'Video information (Mux or custom)',
      fields: [
        {
          name: 'url',
          title: 'Video URL',
          type: 'url',
        },
        {
          name: 'thumbnailUrl',
          title: 'Thumbnail URL',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
              {
                title: 'Internal Project Link',
                name: 'internalProjectLink',
                type: 'object',
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    to: [{type: 'project'}],
                  },
                ],
              },
              {
                title: 'Internal Post Link',
                name: 'internalPostLink',
                type: 'object',
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    to: [{type: 'post'}],
                  },
                ],
              },
              {
                title: 'Internal Testimonial Link',
                name: 'internalTestimonialLink',
                type: 'object',
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    to: [{type: 'testimonial'}],
                  },
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'otherprojects',
      title: 'Related Projects',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'project'}],
        }),
      ],
    }),
    defineField({
      name: 'color1',
      title: 'Gradient Color 1',
      type: 'color',
    }),
    defineField({
      name: 'color2',
      title: 'Gradient Color 2',
      type: 'color',
    }),
    defineField({
      name: 'gradientdirection',
      title: 'Gradient Direction',
      type: 'string',
      options: {
        list: [
          {title: 'To Right', value: 'to-r'},
          {title: 'To Left', value: 'to-l'},
          {title: 'To Bottom', value: 'to-b'},
          {title: 'To Top', value: 'to-t'},
          {title: 'To Bottom Right', value: 'to-br'},
          {title: 'To Bottom Left', value: 'to-bl'},
          {title: 'To Top Right', value: 'to-tr'},
          {title: 'To Top Left', value: 'to-tl'},
        ],
      },
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'SEO Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'SEO Description',
          type: 'text',
          rows: 3,
        },
        {
          name: 'image',
          title: 'OG Image',
          type: 'image',
        },
        {
          name: 'noIndex',
          title: 'No Index',
          type: 'boolean',
          description: 'Prevent search engines from indexing this page',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'clientname',
      media: 'image',
    },
  },
  orderings: [
    {
      title: 'Position',
      name: 'positionAsc',
      by: [{field: 'position', direction: 'asc'}],
    },
    {
      title: 'Created Date',
      name: 'createdAtDesc',
      by: [{field: '_createdAt', direction: 'desc'}],
    },
  ],
})

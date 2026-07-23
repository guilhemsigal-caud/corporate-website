import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Blog post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title (EN)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      placeholder: 'Ex: Guilhem Sigal',
    }),
    defineField({
      name: 'language',
      title: 'Primary language',
      description: 'Which language the main title/excerpt/content fields are written in. Used for legacy migrated posts that only exist in one language.',
      type: 'string',
      options: {list: ['en', 'fr']},
      initialValue: 'en',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sourceUrl',
      title: 'Original source URL',
      description: 'Where this post was migrated from, for reference.',
      type: 'url',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'Publishers',
          'Advertisers',
          'Technology',
          'Research',
          'Product',
          'Blog',
          'Press',
          'Presse',
          'Press Release',
          'Communiqué',
          'Tribune',
          'Tech',
          'Témoignages',
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Read time (EN)',
      type: 'string',
      placeholder: '8 min read',
    }),
    defineField({
      name: 'accent',
      title: 'Accent color (hex)',
      type: 'string',
      placeholder: '#5b8cff',
      initialValue: '#5b8cff',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt (EN)',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content (EN)',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
          ],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
              {title: 'Underline', value: 'underline'},
              {title: 'Strike', value: 'strike-through'},
              {title: 'Code', value: 'code'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {name: 'href', type: 'url', title: 'URL'},
                  {name: 'blank', type: 'boolean', title: 'Open in new tab', initialValue: true},
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {name: 'alt', type: 'string', title: 'Alt text'},
            {name: 'caption', type: 'string', title: 'Caption'},
          ],
        },
        {
          type: 'object',
          name: 'videoEmbed',
          title: 'Video embed',
          fields: [{name: 'url', type: 'url', title: 'Embed URL (e.g. YouTube)'}],
          preview: {select: {subtitle: 'url'}, prepare: ({subtitle}) => ({title: 'Video embed', subtitle})},
        },
      ],
    }),
    defineField({
      name: 'fr',
      title: 'French translation',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Title (FR)', type: 'string'}),
        defineField({name: 'excerpt', title: 'Excerpt (FR)', type: 'text', rows: 3}),
        defineField({name: 'readTime', title: 'Read time (FR)', type: 'string', placeholder: '8 min de lecture'}),
        defineField({
          name: 'content',
          title: 'Content (FR)',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H2', value: 'h2'},
                {title: 'H3', value: 'h3'},
                {title: 'H4', value: 'h4'},
                {title: 'Quote', value: 'blockquote'},
              ],
              marks: {
                decorators: [
                  {title: 'Bold', value: 'strong'},
                  {title: 'Italic', value: 'em'},
                  {title: 'Underline', value: 'underline'},
                  {title: 'Strike', value: 'strike-through'},
                  {title: 'Code', value: 'code'},
                ],
                annotations: [
                  {
                    name: 'link',
                    type: 'object',
                    title: 'Link',
                    fields: [
                      {name: 'href', type: 'url', title: 'URL'},
                      {name: 'blank', type: 'boolean', title: 'Open in new tab', initialValue: true},
                    ],
                  },
                ],
              },
            },
            {
              type: 'image',
              options: {hotspot: true},
              fields: [
                {name: 'alt', type: 'string', title: 'Alt text'},
                {name: 'caption', type: 'string', title: 'Caption'},
              ],
            },
            {
              type: 'object',
              name: 'videoEmbed',
              title: 'Video embed',
              fields: [{name: 'url', type: 'url', title: 'Embed URL (e.g. YouTube)'}],
              preview: {select: {subtitle: 'url'}, prepare: ({subtitle}) => ({title: 'Video embed', subtitle})},
            },
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'author', media: 'coverImage'},
  },
})

import {defineField, defineType} from 'sanity'

export const richTextSection = defineType({
  name: 'richTextSection',
  title: 'Rich Text',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title (EN)', type: 'string'}),
    defineField({name: 'titleFr', title: 'Title (FR)', type: 'string'}),
    defineField({
      name: 'content',
      title: 'Content (EN)',
      type: 'array',
      of: [{
        type: 'block',
        styles: [
          {title: 'Normal', value: 'normal'},
          {title: 'H2', value: 'h2'},
          {title: 'H3', value: 'h3'},
        ],
        marks: {
          decorators: [
            {title: 'Bold', value: 'strong'},
            {title: 'Italic', value: 'em'},
            {title: 'Underline', value: 'underline'},
          ],
          annotations: [{
            name: 'link', type: 'object', title: 'Link',
            fields: [
              {name: 'href', type: 'url', title: 'URL'},
              {name: 'blank', type: 'boolean', title: 'Open in new tab', initialValue: true},
            ],
          }],
        },
      }, {type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'contentFr',
      title: 'Content (FR)',
      type: 'array',
      of: [{
        type: 'block',
        styles: [
          {title: 'Normal', value: 'normal'},
          {title: 'H2', value: 'h2'},
          {title: 'H3', value: 'h3'},
        ],
        marks: {
          decorators: [
            {title: 'Bold', value: 'strong'},
            {title: 'Italic', value: 'em'},
            {title: 'Underline', value: 'underline'},
          ],
          annotations: [{
            name: 'link', type: 'object', title: 'Link',
            fields: [
              {name: 'href', type: 'url', title: 'URL'},
              {name: 'blank', type: 'boolean', title: 'Open in new tab', initialValue: true},
            ],
          }],
        },
      }, {type: 'image', options: {hotspot: true}}],
    }),
    defineField({name: 'maxWidth', title: 'Max width', type: 'string', options: {list: ['narrow', 'normal', 'wide']}, initialValue: 'normal'}),
  ],
  preview: {select: {title: 'title'}, prepare: ({title}) => ({title: `Rich Text — ${title ?? '...'}`})},
})

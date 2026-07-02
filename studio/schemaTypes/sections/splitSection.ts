import {defineField, defineType} from 'sanity'

export const splitSection = defineType({
  name: 'splitSection',
  title: 'Split (text + visual)',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string'}),
    defineField({name: 'eyebrowFr', title: 'Eyebrow (FR)', type: 'string'}),
    defineField({name: 'title', title: 'Title (EN)', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'titleFr', title: 'Title (FR)', type: 'string'}),
    defineField({name: 'description', title: 'Description (EN)', type: 'text', rows: 3}),
    defineField({name: 'descriptionFr', title: 'Description (FR)', type: 'text', rows: 3}),
    defineField({
      name: 'bullets',
      title: 'Bullet points (EN)',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'bulletsFr',
      title: 'Bullet points (FR)',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'cta',
      title: 'CTA button',
      type: 'object',
      fields: [
        {name: 'label', title: 'Label (EN)', type: 'string'},
        {name: 'labelFr', title: 'Label (FR)', type: 'string'},
        {name: 'href', title: 'Link', type: 'string'},
      ],
    }),
    defineField({name: 'accentColor', title: 'Accent color (hex)', type: 'string', initialValue: '#5b8cff'}),
    defineField({name: 'reverse', title: 'Reverse layout (visual on left)', type: 'boolean', initialValue: false}),
    defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}}),
  ],
  preview: {select: {title: 'title'}, prepare: ({title}) => ({title: `Split — ${title}`})},
})

import {defineField, defineType} from 'sanity'

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', title: 'Eyebrow (small text above title)', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'titleFr', title: 'Title (FR)', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2}),
    defineField({name: 'subtitleFr', title: 'Subtitle (FR)', type: 'text', rows: 2}),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA',
      type: 'object',
      fields: [
        {name: 'label', title: 'Label (EN)', type: 'string'},
        {name: 'labelFr', title: 'Label (FR)', type: 'string'},
        {name: 'href', title: 'Link', type: 'string'},
      ],
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary CTA',
      type: 'object',
      fields: [
        {name: 'label', title: 'Label (EN)', type: 'string'},
        {name: 'labelFr', title: 'Label (FR)', type: 'string'},
        {name: 'href', title: 'Link', type: 'string'},
      ],
    }),
    defineField({name: 'accentColor', title: 'Accent color (hex)', type: 'string', initialValue: '#5b8cff'}),
  ],
  preview: {select: {title: 'title'}, prepare: ({title}) => ({title: `Hero — ${title}`})},
})

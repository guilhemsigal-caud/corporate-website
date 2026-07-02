import {defineField, defineType} from 'sanity'

export const ctaBannerSection = defineType({
  name: 'ctaBannerSection',
  title: 'CTA Banner',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string'}),
    defineField({name: 'eyebrowFr', title: 'Eyebrow (FR)', type: 'string'}),
    defineField({name: 'title', title: 'Title (EN)', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'titleFr', title: 'Title (FR)', type: 'string'}),
    defineField({name: 'description', title: 'Description (EN)', type: 'text', rows: 2}),
    defineField({name: 'descriptionFr', title: 'Description (FR)', type: 'text', rows: 2}),
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
  ],
  preview: {select: {title: 'title'}, prepare: ({title}) => ({title: `CTA — ${title}`})},
})

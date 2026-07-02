import {defineField, defineType} from 'sanity'

export const statsSection = defineType({
  name: 'statsSection',
  title: 'Stats / KPIs',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title (EN)', type: 'string'}),
    defineField({name: 'titleFr', title: 'Title (FR)', type: 'string'}),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'value', title: 'Value (e.g. +40%)', type: 'string'},
          {name: 'label', title: 'Label (EN)', type: 'string'},
          {name: 'labelFr', title: 'Label (FR)', type: 'string'},
        ],
        preview: {select: {title: 'value', subtitle: 'label'}},
      }],
    }),
    defineField({name: 'accentColor', title: 'Accent color (hex)', type: 'string', initialValue: '#5b8cff'}),
  ],
  preview: {select: {title: 'title'}, prepare: ({title}) => ({title: `Stats — ${title ?? 'KPIs'}`})},
})

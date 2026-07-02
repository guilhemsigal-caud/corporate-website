import {defineType, defineField, defineArrayMember} from 'sanity'

const kpisArray = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'array',
    of: [
      defineArrayMember({
        type: 'object',
        preview: {select: {title: 'label', subtitle: 'value'}},
        fields: [
          {name: 'label', title: 'Label', type: 'string'},
          {name: 'value', title: 'Value', type: 'string'},
        ],
      }),
    ],
  })

export const galleryItemType = defineType({
  name: 'galleryItem',
  title: 'Gallery Item',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Formats', value: 'formats'},
          {title: 'Industries', value: 'industries'},
          {title: 'Innovations', value: 'innovations'},
          {title: 'Technologies', value: 'technologies'},
        ],
        layout: 'radio',
      },
      validation: (R) => R.required(),
    }),
    defineField({name: 'description', title: 'Description (EN)', type: 'text', rows: 3}),
    defineField({
      name: 'accent',
      title: 'Accent Color',
      type: 'string',
      description: 'Hex color, e.g. #07e2dc',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    kpisArray('kpis', 'KPIs (EN)'),
    defineField({
      name: 'demos',
      title: 'Demos',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          preview: {select: {title: 'label', subtitle: 'url'}},
          fields: [
            {name: 'label', title: 'Label', type: 'string'},
            {name: 'url', title: 'Demo URL', type: 'url'},
            {name: 'scriptUrl', title: 'Embed Script URL (optional)', type: 'url'},
          ],
        }),
      ],
    }),
    defineField({
      name: 'fr',
      title: 'French Version',
      type: 'object',
      fields: [
        {name: 'description', title: 'Description (FR)', type: 'text', rows: 3},
        kpisArray('kpis', 'KPIs (FR)'),
      ],
    }),
  ],
  orderings: [
    {
      title: 'Category, then Name',
      name: 'categoryName',
      by: [
        {field: 'category', direction: 'asc'},
        {field: 'name', direction: 'asc'},
      ],
    },
  ],
  preview: {
    select: {title: 'name', subtitle: 'category'},
  },
})

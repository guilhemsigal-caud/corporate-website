import {defineField, defineType} from 'sanity'

export const teamMemberType = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string', validation: R => R.required()}),
    defineField({name: 'role', title: 'Job Title', type: 'string', validation: R => R.required()}),
    defineField({
      name: 'group',
      title: 'Group',
      type: 'string',
      options: {
        list: [
          {title: 'Global team', value: 'global'},
          {title: 'Europe team', value: 'europe'},
          {title: 'US team', value: 'us'},
        ],
        layout: 'radio',
      },
      validation: R => R.required(),
    }),
    defineField({name: 'order', title: 'Order (within group)', type: 'number', initialValue: 99}),
    defineField({name: 'photo', title: 'Photo', type: 'image', options: {hotspot: true}}),
    defineField({name: 'linkedin', title: 'LinkedIn URL', type: 'url'}),
  ],
  preview: {
    select: {title: 'name', subtitle: 'role', media: 'photo'},
  },
  orderings: [
    {
      title: 'Group then Order',
      name: 'groupOrder',
      by: [{field: 'group', direction: 'asc'}, {field: 'order', direction: 'asc'}],
    },
  ],
})

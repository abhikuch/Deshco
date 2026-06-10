import { defineField, defineType } from 'sanity';

export const step = defineType({
  name: 'step',
  title: 'How It Works Step',
  type: 'document',
  fields: [
    defineField({ name: 'step', title: 'Step Number', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'title', subtitle: 'step' },
  },
});

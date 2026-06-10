import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Site Title', type: 'string' }),
    defineField({ name: 'description', title: 'Meta Description', type: 'text', rows: 3 }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'address', title: 'Address', type: 'text', rows: 2 }),
    defineField({ name: 'whatsapp', title: 'WhatsApp URL', type: 'url' }),
    defineField({
      name: 'social',
      title: 'Social Links',
      type: 'object',
      fields: [
        defineField({ name: 'instagram', type: 'url' }),
        defineField({ name: 'facebook', type: 'url' }),
        defineField({ name: 'linkedin', type: 'url' }),
        defineField({ name: 'twitter', type: 'url' }),
        defineField({ name: 'youtube', type: 'url' }),
        defineField({ name: 'tiktok', type: 'url' }),
      ],
    }),
    defineField({
      name: 'hero',
      title: 'Homepage Hero',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', type: 'string' }),
        defineField({ name: 'headline', type: 'text', rows: 2 }),
        defineField({ name: 'subheadline', type: 'text', rows: 3 }),
        defineField({ name: 'cta', type: 'string' }),
        defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
});

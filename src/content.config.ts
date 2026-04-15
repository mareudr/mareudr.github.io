import { defineCollection, z } from 'astro:content';

const projectSchema = ({ image }: { image: () => any }) =>
  z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['conservacion', 'restauracion', 'original-work']),
    tags: z.array(z.string()).min(1),
    thumbnail: image(),
    images: z
      .array(
        z.object({
          src: image(),
          alt: z.string(),
          type: z.enum(['before', 'after', 'detail', 'process']).optional(),
        })
      )
      .min(1),
    client: z.string().optional(),
    featured: z.boolean().default(false),
    summary: z.string().max(200),
    comparison: z
      .object({
        enabled: z.boolean().default(false),
      })
      .optional(),
  });

const blogSchema = ({ image }: { image: () => any }) =>
  z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).min(1),
    thumbnail: image(),
    summary: z.string().max(200),
  });

const projectsEn = defineCollection({
  type: 'content',
  schema: projectSchema,
});

const projectsEs = defineCollection({
  type: 'content',
  schema: projectSchema,
});

const blogEn = defineCollection({
  type: 'content',
  schema: blogSchema,
});

const blogEs = defineCollection({
  type: 'content',
  schema: blogSchema,
});

export const collections = {
  'projects-en': projectsEn,
  'projects-es': projectsEs,
  'blog-en': blogEn,
  'blog-es': blogEs,
};

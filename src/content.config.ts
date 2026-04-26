import { defineCollection, z } from 'astro:content';

const articleSchema = z.object({
  title: z.string(),
  publishDate: z.date(),
  draft: z.boolean().optional().default(false),
});

const places = defineCollection({ schema: articleSchema });
const food = defineCollection({ schema: articleSchema });
const itineraries = defineCollection({ schema: articleSchema });

export const collections = { places, food, itineraries };

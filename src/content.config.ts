import { defineCollection, z } from 'astro:content';

const placesSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.date(),
  draft: z.boolean().optional().default(false),
  region: z.enum(['Kagoshima City', 'Satsuma Peninsula', 'Kirishima', 'The Islands']),
});

const foodSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.date(),
  draft: z.boolean().optional().default(false),
  category: z.string(),
});

const itinerariesSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.date(),
  draft: z.boolean().optional().default(false),
  days: z.number(),
});

const places = defineCollection({ schema: placesSchema });
const food = defineCollection({ schema: foodSchema });
const itineraries = defineCollection({ schema: itinerariesSchema });

export const collections = { places, food, itineraries };

import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const paletteSchema = z.object({
  bg: z.string(),
  surface: z.string(),
  text: z.string(),
  muted: z.string(),
  accent: z.string(),
  accentSoft: z.string(),
  border: z.string(),
});

const audios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/audios' }),
  schema: ({ image }) =>
    z.object({
      issue: z.string(),
      series: z.string(),
      code: z.string(),
      title: z.string(),
      subtitle: z
        .object({
          es: z.string(),
          en: z.string(),
        })
        .optional(),
      category: z.object({
        slug: z.string(),
        es: z.string(),
        en: z.string(),
      }),
      description: z.object({
        es: z.string(),
        en: z.string(),
      }),
      publishedAt: z.coerce.date(),
      languages: z.array(z.enum(['es', 'en'])).default(['es', 'en']),
      cover: image(),
      coverAlt: z.object({
        es: z.string(),
        en: z.string(),
      }),
      youtubeUrl: z.string().url(),
      externalUrl: z.string().url().optional(),
      externalLabel: z
        .object({
          es: z.string(),
          en: z.string(),
        })
        .optional(),
      preferExternal: z.boolean().default(false),
      listeningNotes: z.object({
        es: z.array(z.string()),
        en: z.array(z.string()),
      }),
      keywords: z.array(z.string()).default([]),
      theme: z
        .object({
          name: z.string(),
          defaultMode: z.enum(['light', 'dark']).optional(),
          light: paletteSchema,
          dark: paletteSchema,
        })
        .optional(),
    }),
});

export const collections = { audios };

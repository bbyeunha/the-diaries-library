import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const hexColor = z.string().regex(/^#[0-9a-f]{6}$/i);
const publicationUrl = z.url({ protocol: /^https?$/ });

const paletteSchema = z.object({
  bg: hexColor,
  surface: hexColor,
  text: hexColor,
  muted: hexColor,
  accent: hexColor,
  accentSoft: hexColor,
  border: hexColor,
  link: hexColor.optional(),
});

const audios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/audios' }),
  schema: ({ image }) =>
    z.object({
      formulaRefs: z.array(z.object({ slug: z.string(), role: z.enum(['main', 'reinforcement', 'technique']), version: z.string().optional() })).default([]),
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
      duration: z.string().optional(),
      formula: z.string().optional(),
      languages: z.array(z.enum(['es', 'en'])).default(['es', 'en']),
      cover: image(),
      coverAlt: z.object({
        es: z.string(),
        en: z.string(),
      }),
      youtubeUrl: publicationUrl.optional(),
      externalUrl: publicationUrl.optional(),
      externalLabel: z
        .object({
          es: z.string(),
          en: z.string(),
        })
        .optional(),
      mode: z.enum(['full', 'summary']).default('full'),
      summaryNote: z.object({ es: z.string(), en: z.string() }).optional(),
      listeningNotes: z.object({
        es: z.array(z.string()),
        en: z.array(z.string()),
      }),
      keywords: z.array(z.string()).default([]),
      theme: z
        .object({
          name: z.string(),
          defaultMode: z.enum(['light', 'dark']).optional(),
          displayFont: z.enum(['cormorant', 'lora', 'georgia']).optional(),
          coverLayout: z.enum(['spread', 'framed']).default('spread'),
          light: paletteSchema,
          dark: paletteSchema,
        })
        .optional(),
    })
      .refine((entry) => entry.mode !== 'summary' || entry.externalUrl, {
        path: ['externalUrl'],
        message: 'Summary entries require a link to the full edition.',
      }),
});

export const collections = { audios };

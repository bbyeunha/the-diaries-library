import type { CollectionEntry } from 'astro:content';
import catalog from '../data/formulas.json';
import { withBase } from './site';

export const formulas = catalog.entries;
export const archiveCopy = catalog.archive;
export const formulaUrl = (slug: string) => withBase('/formulas/' + slug + '/');
export function relatedAudios(slug: string, audios: CollectionEntry<'audios'>[]) {
  return audios.filter(audio => audio.data.formulaRefs.some(ref => ref.slug === slug));
}
const images = import.meta.glob<{ default: ImageMetadata }>('../assets/formulas/*.jpg', { eager: true });
export function artwork(slug: string) {
  return images['../assets/formulas/' + slug + '.jpg'].default;
}

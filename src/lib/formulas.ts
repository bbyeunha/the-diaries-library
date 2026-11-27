import type { CollectionEntry } from 'astro:content';
import appliedArchitectures from '../data/applied-architectures.json';
import catalog from '../data/formulas.json';
import { withBase } from './site';

export { appliedArchitectures };
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

export const appliedCategory = { es: 'Arquitecturas aplicadas', en: 'Applied Architectures' };

export function appliedMethods(
  architecture: (typeof appliedArchitectures)[keyof typeof appliedArchitectures],
  audios: CollectionEntry<'audios'>[],
) {
  const refs = audios.flatMap(audio => audio.data.formulaRefs);
  return Object.entries(architecture.parts).map(([slug, description]) => {
    const method = formulas.find(formula => formula.slug === slug);
    if (!method) throw new Error('Unknown formula: ' + slug);

    const ref = refs.find(ref => ref.slug === slug);
    return { slug, name: ref?.version ? method.name + ' ' + ref.version : method.name, description };
  });
}

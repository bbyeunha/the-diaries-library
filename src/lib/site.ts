export const SITE = {
  name: 'The Diaries Library',
  signatureMark: 'the diaries.',
  tagline: "for everything you've ever wished for.",
  signature: 'made for myself, shared with love. ♡',
  youtubeUrl: 'https://www.youtube.com/@bbyeunha',
  youtubeHandle: '@bbyeunha',
  defaultLang: 'es' as const,
};

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}

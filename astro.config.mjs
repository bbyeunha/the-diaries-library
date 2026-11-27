import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bbyeunha.github.io',
  base: '/the-diaries-library',
  output: 'static',
  trailingSlash: 'ignore',
  image: {
    layout: 'constrained',
    responsiveStyles: true,
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});

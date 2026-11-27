# The Diaries Library

> *for everything you've ever wished for.*

Personal editorial archive for reading the complete benefits of audios published on YouTube ([@bbyeunha](https://www.youtube.com/@bbyeunha)). Built as a lightweight static site with **Astro** and **Markdown**.

---

## Development

```bash
npm install      # Install dependencies
npm run dev      # Start local dev server
npm run check    # Run Astro & TypeScript checks
npm run build    # Generate static site into dist/
npm run preview  # Preview production build locally
```

---

## Adding a New Entry

1. Place the entry's images inside `src/assets/audios/<slug>/`.
2. Create `src/content/audios/<slug>.md` with frontmatter metadata and the full Markdown benefits.
3. Commit and push to `main` — GitHub Actions builds and deploys the update automatically.

---

*made for myself, shared with love. ♡*

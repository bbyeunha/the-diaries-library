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
2. Create `src/content/audios/<slug>.md` with frontmatter and the benefits in Markdown. Set `mode: full` (the default) to publish the full text in the library. For a shorter edition, set `mode: summary`, write the summary in Markdown, and set `externalUrl` to the complete edition. Use `externalLabel` for bilingual link labels and `summaryNote` for an optional bilingual preface.
3. Optionally set a publication `theme` with a name and `light` and `dark` palettes. Each palette takes six-digit hex values for `bg`, `surface`, `text`, `muted`, `accent`, `accentSoft`, and `border`, plus an optional `link` color. Choose `displayFont` (`cormorant`, `lora`, or `georgia`) and `coverLayout` (`spread` or `framed`). Select the entry's own image with `cover` and add inline photographs through Markdown.
4. Commit and push to `main` — GitHub Actions builds and deploys the update automatically.

---

*made for myself, shared with love. ♡*

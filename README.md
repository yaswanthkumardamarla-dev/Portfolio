# Yaswanth's Portfolio ✏️

A hand-sketched personal portfolio built with [Next.js 16](https://nextjs.org), TypeScript, and Tailwind CSS 4 — featuring a paper-texture light/dark theme with wobbly, hand-drawn borders.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Dev helpers

If port 3000 is stuck (an old server still running), free it with:

```bash
npm run kill-port -- 3000     # kill whatever holds a port
npm run dev:clean             # free port 3000, then start dev
```

Or source the helper once to get a `k` command in your shell:

```bash
source scripts/dev-tools.sh
k 3000
```

To make `k` permanent, add that `source` line (with the full path to your
clone) to your `~/.zshrc` or `~/.bashrc`.

## Editing your content

**Everything shown on the site lives in one file: [`src/lib/data.ts`](src/lib/data.ts).**

Update these exports with your own details:

- `profile` — name, role, tagline, about paragraphs, email, location
- `socials` — GitHub / LinkedIn / other links
- `skillGroups` — your skill categories
- `projects` — your projects (with live/repo links)
- `experiences` — work history
- `education` — degrees

Entries marked `TODO` are placeholders. Also drop your resume at `public/resume.pdf` so the "Resume" button works.

## Structure

```
src/
├── app/            # layout (fonts, theme init), page, global styles
├── components/     # Navbar, Footer, ThemeToggle, SketchButton
├── sections/       # Hero, About, Skills, Projects, Experience, Contact
├── lib/            # data.ts (all content), utils.ts
└── types/          # shared TypeScript interfaces
```

## Theming

Dark (ink-blue paper) is the default; the toggle in the navbar switches to light (cream paper) and persists in `localStorage`. Colors are CSS variables in [`src/app/globals.css`](src/app/globals.css) — tweak `--ink`, `--accent`, etc. there. The "sketchy" look comes from the `.sketch-border`, `.sketch-card`, `.sketch-tag`, and `.sketch-underline` utility classes in the same file.

## Deploying

The site is fully static — deploy free on [Vercel](https://vercel.com/new) (recommended for Next.js) or Netlify.

```bash
npm run build   # verify it builds
```

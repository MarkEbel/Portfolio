# Portfolio website

Personal portfolio and résumé site built with React, TypeScript, and Vite. The homepage presents About plus the latest Experience, Project, and Blog; route-based collection pages hold the full content. It also includes a commuter heatmap page. Deployed to GitHub Pages at `/Portfolio/`.

## Scripts

| Command               | Purpose                                                                             |
| --------------------- | ----------------------------------------------------------------------------------- |
| `npm run dev`         | Vite dev server (`base` is `/Portfolio/`)                                           |
| `npm run build`       | Typecheck and production build into `dist/`                                         |
| `npm run preview`     | Serve the production build locally                                                  |
| `npm test`            | Playwright e2e on desktop and both phone viewports (builds then previews)           |
| `npm run test:chrome` | Desktop Chrome project only                                                         |
| `npm run test:mobile` | Phone projects only (Pixel 7 and Galaxy S8)                                         |
| `npm run test:ui`     | Playwright UI runner                                                                |
| `npm run lint`        | ESLint, Prettier check, TypeScript, and British English spelling on blogs           |
| `npm run lint:staged` | ESLint `--fix` and Prettier `--write` on staged files (used by the pre-commit hook) |
| `npm run format`      | Prettier write on the whole repo (app, e2e, configs, docs, GitHub, Cursor rules)    |

## End-to-end tests

Tests are in [`e2e/`](e2e/), configured by [`playwright.config.ts`](playwright.config.ts). They are **Chromium only**, across three viewports: Desktop Chrome, Pixel 7, and Galaxy S8. `layout.spec.ts` guards the responsive shell — no horizontal overflow, the sidebar must never overlap `<main>`, and on desktop the reading column is centred. `a11y.spec.ts` runs axe-core against WCAG 2.2 A/AA tags on home, a blog post, and the heatmap. That catches automated-detectable issues; it is not a full WCAG certificate.

Playwright starts a production preview (`vite preview` on port 4173) unless a server is already running locally. If a stale preview is still up, Playwright reuses it and you will be testing an old build, so kill it first.

First-time setup:

```sh
npm install
npx playwright install chromium
npm test
```

CI runs the same commands from `.github/workflows/ci.yml` (ESLint, Prettier, TypeScript, then Playwright) plus dependency review for **new** GitHub advisories. A successful push to `main` then builds `dist/` and deploys it to GitHub Pages. Set Pages source to **GitHub Actions**. Deploy is a static Vite `dist/` upload (`actions/deploy-pages`), not Jekyll. Deep links work because CI copies `index.html` to `404.html`; the app then canonicalises the path (for example `/Portfolio/Blogs` → `/Portfolio/blogs`). GitHub still serves the project under `/Portfolio/` only, so a host-level 404 for `/portfolio/` (wrong repo casing before any HTML loads) cannot be redirected from this repo. The live commit SHA is in `<meta name="app-version">` in the document head. Skip the advisory gate with `[skip dependency-review]` in the commit message or PR title/body. Reports are written to `playwright-report/` and `test-results/` (gitignored).

## Layout

Desktop keeps the reading column centred like a document, with route
navigation in the left sidebar. Phones hide that navigation and move between
pages through the homepage preview links instead. Every page below the home page
carries a labelled back link that names where it returns to: the page you
arrived from when that is known, otherwise the page's own parent. Main routes
are:

- `/Portfolio/` — About and latest-content previews
- `/Portfolio/experience` — complete experience and education timeline
- `/Portfolio/projects` — all projects
- `/Portfolio/blogs` — all blog entries
- `/Portfolio/blogs/:blogId` — an individual post

```
src/
├── app/                 App shell, home page, and router
├── features/            Feature-owned UI and styles
│   ├── about/
│   ├── blog/
│   ├── commute-heatmap/
│   ├── experience/
│   └── projects/
├── shared/              Reusable components, navigation, theme, and pages
├── styles/              Global styles
└── main.tsx             Browser entry point
e2e/                     Playwright specs and helpers
public/assets/           Images used on the site
```

Feature-specific components stay with their feature. Put genuinely reusable UI
under `shared/`, and keep app composition and routing under `app/`.

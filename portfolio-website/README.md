# Portfolio website

Personal portfolio and résumé site: About, Experience, Projects, Blogs, plus a commuter heatmap page. Built with React, TypeScript, and Vite. Deployed to GitHub Pages at `/Portfolio/`.

## Scripts

| Command                            | Purpose                                                                             |
| ---------------------------------- | ----------------------------------------------------------------------------------- |
| `npm run dev`                      | Vite dev server (`base` is `/Portfolio/`)                                           |
| `npm run build`                    | Typecheck and production build into `dist/`                                         |
| `npm run preview`                  | Serve the production build locally                                                  |
| `npm test` / `npm run test:chrome` | Playwright Chromium e2e (builds then previews)                                      |
| `npm run test:ui`                  | Playwright UI runner, Chromium only                                                 |
| `npm run lint`                     | ESLint, Prettier check, and TypeScript (`lint:eslint`, `lint:format`, `lint:types`) |
| `npm run lint:staged`              | ESLint `--fix` and Prettier `--write` on staged files (used by the pre-commit hook) |
| `npm run format`                   | Prettier write on the whole repo (app, e2e, configs, docs, GitHub, Cursor rules)    |

## End-to-end tests

Tests are in [`e2e/`](e2e/), configured by [`playwright.config.ts`](playwright.config.ts). They only use **Desktop Chrome**. Playwright starts a production preview (`vite preview` on port 4173) unless a server is already running locally.

First-time setup:

```sh
npm install
npx playwright install chromium
npm test
```

CI runs the same commands from `.github/workflows/ci.yml` (ESLint, Prettier, TypeScript, then Playwright). A successful push to `main` then builds `dist/` and deploys it to GitHub Pages. Set Pages source to **GitHub Actions**. The live commit SHA is in `<meta name="app-version">` in the document head. Reports are written to `playwright-report/` and `test-results/` (gitignored).

## Layout

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

# myOwnWebsite

Personal portfolio and résumé site: About, Experience, Projects, Blogs, plus a commuter heatmap page. Built with React, TypeScript, and Vite. Deployed to GitHub Pages at `/Portfolio/`.

## Scripts

| Command                            | Purpose                                                                             |
| ---------------------------------- | ----------------------------------------------------------------------------------- |
| `npm run dev`                      | Vite dev server (`base` is `/Portfolio/`)                                           |
| `npm run build`                    | Typecheck and production build into `dist/`                                         |
| `npm run preview`                  | Serve the production build locally                                                  |
| `npm run deploy`                   | Build and publish `dist/` with gh-pages                                             |
| `npm test` / `npm run test:chrome` | Playwright Chromium e2e (builds then previews)                                      |
| `npm run test:ui`                  | Playwright UI runner, Chromium only                                                 |
| `npm run lint`                     | ESLint, Prettier check, and TypeScript (`lint:eslint`, `lint:format`, `lint:types`) |
| `npm run lint:staged`              | ESLint `--fix` and Prettier `--write` on staged files (used by the pre-commit hook) |
| `npm run format`                   | Prettier write on `src/` and `e2e/`                                                 |

## End-to-end tests

Tests are in [`e2e/`](e2e/), configured by [`playwright.config.ts`](playwright.config.ts). They only use **Desktop Chrome**. Playwright starts a production preview (`vite preview` on port 4173) unless a server is already running locally.

First-time setup:

```sh
npm install
npx playwright install chromium
npm test
```

CI runs the same commands from `.github/workflows/ci.yml` (ESLint, Prettier, TypeScript, then Playwright). Reports are written to `playwright-report/` and `test-results/` (gitignored).

## Layout

```
src/               Application UI
e2e/               Playwright specs and helpers
public/assets/     Images used on the site
```

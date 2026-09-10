# Portfolio

This is a small **monorepo** for Mark Ebel's personal site: the React app, its Playwright tests, GitHub automation, and Cursor agent rules.

GitHub: [MarkEbel/Portfolio](https://github.com/MarkEbel/Portfolio)  
Live site: [markebel.github.io/Portfolio](https://markebel.github.io/Portfolio)

## Packages

| Path | What it is |
| --- | --- |
| [`myOwnWebsite/`](myOwnWebsite/README.md) | Vite + React + TypeScript site, hosted on GitHub Pages. Playwright Chromium tests live in `myOwnWebsite/e2e`. |

Add new apps or libraries as sibling folders and link them from this table.

## Tools

- **Vite 6** — dev server and production build
- **React 19 + TypeScript** — UI
- **React Router** — `/Portfolio`, blog posts, commuter heatmap
- **Playwright** — Chromium-only end-to-end tests (`npm test` in `myOwnWebsite`)
- **GitHub Actions** — `.github/workflows/ci.yml` runs ESLint, Prettier, TypeScript, and Chromium Playwright on push and pull request
- **Husky + lint-staged** — pre-commit auto-fixes staged files with ESLint and Prettier (CI still only checks)
- **Dependabot** — weekly grouped npm updates for `myOwnWebsite`
- **gh-pages** — `npm run deploy` from `myOwnWebsite` publishes `dist/`

## Local commands

```sh
cd myOwnWebsite
npm install          # also installs the Husky pre-commit hook
npx playwright install chromium
npm run dev          # site at /Portfolio/
npm run lint         # eslint, prettier check, tsc
npm test             # build, preview, Chromium e2e
npm run test:ui      # Playwright UI mode
```

## Cursor / agents

Project guidance for Cursor lives in [`.cursor/rules/`](.cursor/rules/) and [`AGENTS.md`](AGENTS.md). When a chat settles a convention for this repo, update those files so later sessions keep it.

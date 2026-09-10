# Portfolio

This is a small **monorepo** for Mark Ebel's personal site: the React app, its Playwright tests, GitHub automation, and Cursor agent rules.

GitHub: [MarkEbel/Portfolio](https://github.com/MarkEbel/Portfolio)  
Live site: [markebel.github.io/Portfolio](https://markebel.github.io/Portfolio)

## Packages

| Path                                                | What it is                                                                                                             |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| [`portfolio-website/`](portfolio-website/README.md) | Vite + React + TypeScript portfolio hosted on GitHub Pages, with Chromium Playwright tests in `portfolio-website/e2e`. |

Add new apps or libraries as sibling folders and link them from this table.

## Tools

- **Vite 8** — dev server and production build
- **React 19 + TypeScript** — UI
- **React Router** — `/Portfolio`, blog posts, commuter heatmap
- **Playwright** — Chromium-only end-to-end tests across desktop and two phone viewports (`npm test` in `portfolio-website`), including axe-core WCAG 2.2 AA scans (not a full audit)
- **cspell** — British English on blog copy, part of `npm run lint` and the CI quality job
- **GitHub Actions** — `.github/workflows/ci.yml` runs ESLint, Prettier, TypeScript, Chromium Playwright, and dependency review (fails only on **new** GitHub advisories vs the PR base or previous `main` commit). On `main`, after those jobs succeed, it deploys `portfolio-website/dist` to GitHub Pages. Put `[skip dependency-review]` in the commit message (or PR title/body) to skip that job only. When you lock `main`, require `CI / quality`, `CI / e2e`, and `CI / dependency-review` — not `CI / deploy`.
- **Husky + lint-staged** — pre-commit auto-fixes staged files with ESLint and Prettier, and spell-checks staged blog files (CI still only checks)
- **Dependabot** — weekly grouped npm updates for `portfolio-website`. PRs (including majors) get GitHub auto-merge enabled; they squash-merge after required checks on `main` pass.
- **GitHub Pages** — live site is published from the CI `deploy` job. In the repo **Settings → Pages**, set the source to **GitHub Actions** (not the `gh-pages` branch). Do not require reviewers on the `github-pages` environment, or deploys will wait for a click. The deployed commit is in `<meta name="app-version">` (View Source).

## Local commands

```sh
cd portfolio-website
npm install          # also installs the Husky pre-commit hook
npx playwright install chromium
npm run dev          # site at /Portfolio/
npm run lint         # eslint, prettier check, tsc
npm test             # build, preview, Chromium e2e
npm run test:ui      # Playwright UI mode
```

## Cursor / agents

Project guidance for Cursor lives in [`.cursor/rules/`](.cursor/rules/) and [`AGENTS.md`](AGENTS.md). When a chat settles a convention for this repo, update those files so later sessions keep it.

# Agent workflows

Coding standards live in [`.cursor/rules/`](.cursor/rules/). Cursor should load those automatically. Extend this file when a repeatable workflow appears (for example: how we review PRs, or how we add a new package to the monorepo).

GitHub remote: `https://github.com/MarkEbel/Portfolio.git`

## End-to-end tests

Browser tests are Playwright, Chromium only, in `portfolio-website/e2e`. Three viewports: Desktop Chrome, Pixel 7, and Galaxy S8.

```sh
cd portfolio-website
npx playwright install chromium   # once per machine
npm test                          # local + CI command, all three viewports
npm run test:chrome               # desktop only
npm run test:mobile               # phones only
npm run test:ui
```

CI (`npm run lint` in `portfolio-website`) matches Contact's GUI quality gates as far as this repo has them:

- `lint:eslint` — ESLint
- `lint:format` — Prettier `--check` on the whole repo (use `npm run format` to fix)
- `lint:types` — `tsc -b`
- `lint:spelling` — cspell British English on blog copy (`src/features/blog`)

Pre-commit (Husky in `portfolio-website/.husky`) runs `lint:staged`, which **fixes** staged files with ESLint `--fix` and Prettier `--write`. GitHub Actions still **checks** only. Skip the hook with a `noprecommit` file at the repo root or in `portfolio-website/`.

GitHub Actions (`.github/workflows/ci.yml`) runs those jobs plus Chromium Playwright and dependency review. A `deploy` job then publishes GitHub Pages **only** on `push` to `main`, and **only** if `quality`, `e2e`, and `dependency-review` succeed. Dependency review fails only on **new** GitHub advisories (existing ones on `main` are allowed). Skip it with `[skip dependency-review]` in the commit message or PR title/body — do not use `[skip ci]`. When branch protection is enabled, require `CI / quality`, `CI / e2e`, and `CI / dependency-review`; do not require `CI / deploy`. Do not add Firefox, Checkmarx, Crowdin, or Docker jobs unless asked.

Renovate (`renovate.json`) opens weekly grouped npm PRs for `portfolio-website` and squash-merges them as `renovate[bot]` after required checks on `main` pass. That merge is a normal `push`, so `CI` / `deploy` run. Do not require pull request reviews on `main`, or Renovate will wait forever. Install the [Renovate GitHub App](https://github.com/apps/renovate) on this repo; deleting `.github/dependabot.yml` is what stops Dependabot version updates.

## TypeScript version ceiling

Keep `typescript` on 6.x. TypeScript 7.0 is the native port and ships no programmatic API, so `typescript-eslint` caps its peer range at `typescript@">=4.8.4 <6.1.0"` and `npm ci` fails to resolve the tree — which breaks `quality`, `e2e`, and `deploy` at the install step. `renovate.json` therefore ignores TypeScript major updates. Lift the ceiling only once `typescript-eslint` declares support for TypeScript 7.1's new API ([tracking issue](https://github.com/typescript-eslint/typescript-eslint/issues/10940)). Do not work around this with `--legacy-peer-deps` or `overrides`; ESLint then crashes at runtime on missing compiler APIs.

## Cursor rules

When a chat agrees a convention for this repository, add or update a focused `.mdc` file under `.cursor/rules/` instead of only mentioning it in the conversation.

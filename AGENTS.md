# Agent workflows

Coding standards live in [`.cursor/rules/`](.cursor/rules/). Cursor should load those automatically. Extend this file when a repeatable workflow appears (for example: how we review PRs, or how we add a new package to the monorepo).

GitHub remote: `https://github.com/MarkEbel/Portfolio.git`

## End-to-end tests

Browser tests are Playwright, Chromium only, in `myOwnWebsite/e2e`.

```sh
cd myOwnWebsite
npx playwright install chromium   # once per machine
npm test                          # local + CI command
npm run test:ui
```

CI (`npm run lint` in `myOwnWebsite`) matches Contact's GUI quality gates as far as this repo has them:

- `lint:eslint` — ESLint
- `lint:format` — Prettier `--check` on the whole repo (use `npm run format` to fix)
- `lint:types` — `tsc -b`

Pre-commit (Husky in `myOwnWebsite/.husky`) runs `lint:staged`, which **fixes** staged files with ESLint `--fix` and Prettier `--write`. GitHub Actions still **checks** only. Skip the hook with a `noprecommit` file at the repo root or in `myOwnWebsite/`.

GitHub Actions (`.github/workflows/ci.yml`) runs those jobs plus Chromium Playwright. Do not add Firefox, Checkmarx, Crowdin, or Docker jobs unless asked.

## Cursor rules

When a chat agrees a convention for this repository, add or update a focused `.mdc` file under `.cursor/rules/` instead of only mentioning it in the conversation.

# Agent workflows

Coding standards live in [`.cursor/rules/`](.cursor/rules/). Cursor should load those automatically. Extend this file when a repeatable workflow appears (for example: how we review PRs, or how we add a new package to the monorepo).

GitHub remote: `https://github.com/MarkEbel/Portfolio.git`

## End-to-end tests

Browser tests are Playwright, Chromium only, in `portfolio-website/e2e`.

```sh
cd portfolio-website
npx playwright install chromium   # once per machine
npm test                          # local + CI command
npm run test:ui
```

CI (`npm run lint` in `portfolio-website`) matches Contact's GUI quality gates as far as this repo has them:

- `lint:eslint` — ESLint
- `lint:format` — Prettier `--check` on the whole repo (use `npm run format` to fix)
- `lint:types` — `tsc -b`

Pre-commit (Husky in `portfolio-website/.husky`) runs `lint:staged`, which **fixes** staged files with ESLint `--fix` and Prettier `--write`. GitHub Actions still **checks** only. Skip the hook with a `noprecommit` file at the repo root or in `portfolio-website/`.

GitHub Actions (`.github/workflows/ci.yml`) runs those jobs plus Chromium Playwright and dependency review. A `deploy` job then publishes GitHub Pages **only** on `push` to `main`, and **only** if `quality`, `e2e`, and `dependency-review` succeed. Dependency review fails only on **new** GitHub advisories (existing ones on `main` are allowed). Skip it with `[skip dependency-review]` in the commit message or PR title/body — do not use `[skip ci]`. When branch protection is enabled, require `CI / quality`, `CI / e2e`, and `CI / dependency-review`; do not require `CI / deploy`. Do not add Firefox, Checkmarx, Crowdin, or Docker jobs unless asked.

Dependabot pull requests (including major updates) enable GitHub auto-merge via `.github/workflows/dependabot-auto-merge.yml` (`gh pr merge --auto --squash`). GitHub merges only after required status checks on `main` pass. This matches [Automating Dependabot with GitHub Actions](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/automate-dependabot-with-actions). Do not require pull request reviews on `main` unless you also auto-approve, or Dependabot will wait forever.

## Cursor rules

When a chat agrees a convention for this repository, add or update a focused `.mdc` file under `.cursor/rules/` instead of only mentioning it in the conversation.

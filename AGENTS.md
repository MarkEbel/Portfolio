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

Do not add Firefox or WebKit projects unless the owner asks.

## Cursor rules

When a chat agrees a convention for this repository, add or update a focused `.mdc` file under `.cursor/rules/` instead of only mentioning it in the conversation.

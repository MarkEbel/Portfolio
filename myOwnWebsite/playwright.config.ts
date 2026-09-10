import { defineConfig, devices } from "@playwright/test";

const previewOrigin = "http://127.0.0.1:4173";
const previewUrl = `${previewOrigin}/Portfolio/`;

export default defineConfig({
  testDir: "./e2e",
  expect: {
    timeout: process.env.CI ? 45000 : 15000,
  },
  timeout: process.env.CI ? 120000 : 30000,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  outputDir: "test-results",
  reporter: process.env.CI
    ? [
        ["list"],
        ["github"],
        ["html", { outputFolder: "playwright-report", open: "never" }],
        ["junit", { outputFile: "test-results/junit.xml" }],
      ]
    : [
        ["list"],
        ["html", { outputFolder: "playwright-report", open: "never" }],
        ["junit", { outputFile: "test-results/junit.xml" }],
      ],
  use: {
    baseURL: previewOrigin,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "npm run build && npx vite preview --host 127.0.0.1 --port 4173",
    url: previewUrl,
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});

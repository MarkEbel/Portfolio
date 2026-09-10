import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

const pages = [
  { name: "home", path: "/Portfolio/" },
  { name: "experience", path: "/Portfolio/experience" },
  { name: "projects", path: "/Portfolio/projects" },
  { name: "blogs", path: "/Portfolio/blogs" },
  {
    name: "blog post",
    path: "/Portfolio/blogs/leading-retrospective",
  },
  {
    name: "commuter heatmap",
    path: "/Portfolio/commuterHeatmap",
  },
];

async function scan(page: Page) {
  // Leaflet tiles and markers are third-party chrome; the rest of the page
  // still runs the WCAG 2.2 AA rule set.
  return new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag22aa"])
    .exclude(".leaflet-container")
    .analyze();
}

test.describe("accessibility", () => {
  for (const { name, path } of pages) {
    test(`${name} has no automated WCAG 2.2 AA violations`, async ({
      page,
    }) => {
      await page.goto(path);
      const results = await scan(page);
      expect(results.violations).toEqual([]);
    });
  }
});

import { expect, test } from "@playwright/test";
import { boxOf, horizontalOverflow, overlaps } from "./helpers/layout";
import { goToHome } from "./helpers/navigation";

const pages = [
  { name: "home", path: "/Portfolio/", heading: "Mark Ebel" },
  {
    name: "blog post",
    path: "/Portfolio/blogs/leading-retrospective",
    heading: "Leading My First Retrospective",
  },
  {
    name: "commuter heatmap",
    path: "/Portfolio/commuterHeatmap",
    heading: "London Commute Heatmap",
  },
];

test.describe("responsive layout", () => {
  for (const { name, path, heading } of pages) {
    test(`${name} fits the viewport width`, async ({ page }) => {
      await page.goto(path);
      await expect(page.getByRole("heading", { name: heading })).toBeVisible();

      expect(await horizontalOverflow(page)).toBeLessThanOrEqual(1);
    });
  }

  test("sidebar never overlaps the main content", async ({ page }) => {
    await goToHome(page);

    const sidebar = page.locator(".sidebar");
    const main = page.getByRole("main");
    await expect(sidebar).toBeVisible();
    await expect(main).toBeVisible();

    expect(overlaps(await boxOf(sidebar), await boxOf(main))).toBe(false);
  });

  test("contact links and theme toggle clear the main content", async ({
    page,
  }) => {
    await goToHome(page);

    const main = page.getByRole("main");
    const mainBox = await boxOf(main);

    for (const name of ["LinkedIn", "GitHub", "Email"]) {
      const link = page.getByRole("link", { name });
      await expect(link).toBeVisible();
      expect(overlaps(await boxOf(link), mainBox)).toBe(false);
    }

    const toggle = page.locator(".theme-toggle");
    await expect(toggle).toBeVisible();
    expect(overlaps(await boxOf(toggle), mainBox)).toBe(false);
  });
});

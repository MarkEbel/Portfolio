import { expect, test } from "@playwright/test";
import { boxOf, horizontalOverflow, overlaps } from "./helpers/layout";
import { goToHome } from "./helpers/navigation";

const pages = [
  { name: "home", path: "/Portfolio/", heading: "Mark Ebel" },
  {
    name: "experience",
    path: "/Portfolio/experience",
    heading: "Experience",
  },
  { name: "projects", path: "/Portfolio/projects", heading: "Projects" },
  { name: "blogs", path: "/Portfolio/blogs", heading: "Blogs" },
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

  test("reading column is centred on desktop", async ({ page }) => {
    const width = page.viewportSize()?.width ?? 0;
    test.skip(width <= 900, "the document column is a desktop layout");

    await goToHome(page);
    const mainBox = await boxOf(page.getByRole("main"));
    const columnCenter = mainBox.x + mainBox.width / 2;
    expect(Math.abs(columnCenter - width / 2)).toBeLessThan(16);
  });

  test("content thumbnails become widescreen banners on phones", async ({
    page,
  }) => {
    const width = page.viewportSize()?.width ?? 0;
    test.skip(width > 900, "phone viewports only");

    await goToHome(page);
    const image = page.getByRole("img", {
      name: "This site",
    });
    await expect(image).toBeVisible();

    const imageBox = await boxOf(image);
    expect(imageBox.width / imageBox.height).toBeCloseTo(16 / 9, 1);
  });

  test("promotion history forms a compact right-side block", async ({
    page,
  }) => {
    await page.goto("/Portfolio/experience");

    const itemBox = await boxOf(page.locator(".TimelineItem").first());
    const rolesBox = await boxOf(page.locator(".timeline-item-roles").first());
    const width = page.viewportSize()?.width ?? 0;

    expect(
      Math.abs(itemBox.x + itemBox.width - (rolesBox.x + rolesBox.width)),
    ).toBeLessThan(2);

    if (width > 900) {
      expect(rolesBox.x).toBeGreaterThan(itemBox.x);
      expect(rolesBox.width).toBeLessThan(itemBox.width);
    } else {
      expect(Math.abs(rolesBox.x - itemBox.x)).toBeLessThan(2);
    }
  });

  for (const { name, path, title, column } of [
    {
      name: "card",
      path: "/Portfolio/blogs",
      title: "Using Cursor close to the code",
      column: ".content-card__body",
    },
    {
      name: "post",
      path: "/Portfolio/blogs/using-cursor-locally",
      title: "Using Cursor Close to the Code",
      column: ".blogPost",
    },
  ]) {
    test(`blog date signs off the ${name} bottom right`, async ({ page }) => {
      await page.goto(path);

      const heading = page.getByRole("heading", { name: title });
      await expect(heading).toBeVisible();

      const columnBox = await boxOf(page.locator(column).first());
      const headingBox = await boxOf(heading);
      const dateBox = await boxOf(
        page.getByText("10 September 2026", { exact: true }),
      );

      // Below the title and copy, flush to the reading column's right edge,
      // while the text above it stays left aligned.
      expect(dateBox.y).toBeGreaterThan(headingBox.y + headingBox.height);
      expect(
        Math.abs(columnBox.x + columnBox.width - (dateBox.x + dateBox.width)),
      ).toBeLessThan(2);
      expect(dateBox.x).toBeGreaterThan(columnBox.x);
    });
  }
});

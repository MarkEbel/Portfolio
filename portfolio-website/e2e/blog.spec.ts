import { expect, test } from "@playwright/test";
import { goToHome } from "./helpers/navigation";

test.describe("blog post", () => {
  test("opens a blog from the home page and returns home", async ({ page }) => {
    await goToHome(page);

    await page
      .getByRole("heading", { name: "Leading my first retrospective" })
      .click();

    await expect(
      page.getByRole("heading", { name: "Leading My First Retrospective" }),
    ).toBeVisible();
    await expect(page.getByText("2 April 2025", { exact: true })).toBeVisible();
    await expect(
      page.getByRole("img", { name: "Retrospective meeting" }),
    ).toBeVisible();

    // Arriving from the preview skips the list, so the archive stays reachable.
    await expect(
      page.getByRole("link", { name: "See all blogs" }),
    ).toBeVisible();

    await page.getByRole("link", { name: "Back to home" }).click();
    await expect(
      page.getByRole("heading", { name: "Mark Ebel" }),
    ).toBeVisible();
  });

  test("opens a blog from the blogs list and returns to it", async ({
    page,
  }) => {
    await page.goto("/Portfolio/blogs");

    await expect(
      page.getByRole("heading", { name: "Blogs", exact: true }),
    ).toBeVisible();
    await expect(page.getByText("2 April 2025", { exact: true })).toBeVisible();

    await page
      .getByRole("heading", { name: "Leading my first retrospective" })
      .click();

    await expect(
      page.getByRole("heading", { name: "Leading My First Retrospective" }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "See all blogs" }),
    ).toBeHidden();

    await page.getByRole("link", { name: "Back to blogs" }).click();
    await expect(
      page.getByRole("heading", { name: "Blogs", exact: true }),
    ).toBeVisible();
  });

  test("returns to the blogs list when a post is opened directly", async ({
    page,
  }) => {
    await page.goto("/Portfolio/blogs/leading-retrospective");

    const back = page.getByRole("link", { name: "Back to blogs" });
    await expect(back).toBeVisible();

    await back.click();
    await expect(
      page.getByRole("heading", { name: "Blogs", exact: true }),
    ).toBeVisible();
  });
});

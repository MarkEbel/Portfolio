import { expect, test } from "@playwright/test";
import { goToHome } from "./helpers/navigation";

test.describe("blog post", () => {
  test("opens a blog from the home page and returns home", async ({ page }) => {
    await goToHome(page);

    await page
      .getByRole("heading", { name: "Using Cursor close to the code" })
      .click();

    await expect(
      page.getByRole("heading", { name: "Using Cursor Close to the Code" }),
    ).toBeVisible();
    await expect(
      page.getByText("10 September 2026", { exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("img", {
        name: "A cursor-shaped lamp beside a laptop and a developer's hand",
      }),
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

  test("links local AI articles to their official documentation", async ({
    page,
  }) => {
    await page.goto("/Portfolio/blogs/running-ai-locally");
    await expect(
      page.getByRole("link", { name: "vLLM Quickstart" }),
    ).toHaveAttribute(
      "href",
      "https://docs.vllm.ai/en/stable/getting_started/quickstart.html",
    );

    await page.goto("/Portfolio/blogs/using-cursor-locally");
    await expect(
      page.getByRole("link", { name: "Privacy Mode" }),
    ).toHaveAttribute("href", "https://cursor.com/privacy-overview");
    await expect(
      page.getByRole("link", { name: "local agent run modes" }),
    ).toHaveAttribute(
      "href",
      "https://cursor.com/docs/agent/security/run-modes",
    );
  });
});

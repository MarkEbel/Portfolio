import { expect, test } from "@playwright/test";
import { goToHome } from "./helpers/navigation";

test.describe("blog post", () => {
  test("opens a blog from the home page and returns to blogs", async ({
    page,
  }) => {
    await goToHome(page);

    await page
      .getByRole("heading", { name: "Leading my first retrospective" })
      .click();

    await expect(
      page.getByRole("heading", { name: "Leading My First Retrospective" }),
    ).toBeVisible();
    await expect(
      page.getByRole("img", { name: "Retrospective meeting" }),
    ).toBeVisible();

    await page.getByRole("button", { name: "Back to blogs" }).click();
    await expect(
      page.getByRole("heading", { name: "Blogs", exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Leading my first retrospective" }),
    ).toBeVisible();
  });
});

import { expect, test } from "@playwright/test";
import { goToHome } from "./helpers/navigation";

test.describe("blog post", () => {
  test("opens a blog from the home page and returns with back", async ({
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

    await page.getByRole("button", { name: "←" }).click();
    await expect(
      page.getByRole("heading", { name: "Mark Ebel" }),
    ).toBeVisible();
  });
});

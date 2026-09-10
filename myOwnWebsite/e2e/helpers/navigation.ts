import { expect, type Page } from "@playwright/test";

export async function goToHome(page: Page) {
  await page.goto("/Portfolio/");
  await expect(page.getByRole("heading", { name: "Mark Ebel" })).toBeVisible();
}

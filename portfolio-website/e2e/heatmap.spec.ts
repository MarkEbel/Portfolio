import { expect, test } from "@playwright/test";

test.describe("commuter heatmap", () => {
  test("loads the heatmap page controls", async ({ page }) => {
    await page.goto("/Portfolio/commuterHeatmap");

    await expect(
      page.getByRole("heading", { name: "London Commute Heatmap" }),
    ).toBeVisible();
    await expect(page.getByPlaceholder("Workplace (e.g. Bank)")).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Calculate Commutes" }),
    ).toBeVisible();
  });
});

import { expect, test } from "@playwright/test";
import { goToHome } from "./helpers/navigation";

test.describe("home page", () => {
  test("shows name, about, experience, projects, and blogs", async ({
    page,
  }) => {
    await goToHome(page);

    await expect(page.getByRole("heading", { name: "Full Stack Engineer" })).toBeVisible();
    await expect(page.getByLabel("about me")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Software Engineer" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Interactive Developer Portfolio" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Leading my first retrospective" }),
    ).toBeVisible();
  });

  test("shows section navigation", async ({ page }) => {
    await goToHome(page);

    await expect(page.getByText("About", { exact: true })).toBeVisible();
    await expect(page.getByText("Experience", { exact: true })).toBeVisible();
    await expect(page.getByText("Projects", { exact: true })).toBeVisible();
    await expect(page.getByText("Blogs", { exact: true })).toBeVisible();
  });

  test("theme toggle switches light and dark body classes", async ({
    page,
  }) => {
    await goToHome(page);

    const toggle = page.locator(".theme-toggle");
    const body = page.locator("body");
    await expect(toggle).toBeVisible();
    await expect(body).toHaveClass(/light-mode|dark-mode/);

    const initialClass = await body.getAttribute("class");
    await toggle.click();
    await expect(body).not.toHaveAttribute("class", initialClass ?? "");
    await expect(body).toHaveClass(/light-mode|dark-mode/);
  });
});

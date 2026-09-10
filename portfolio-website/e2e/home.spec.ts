import { expect, test } from "@playwright/test";
import { goToHome } from "./helpers/navigation";

test.describe("home page", () => {
  test("shows name, about, experience, projects, and blogs", async ({
    page,
  }) => {
    await goToHome(page);

    await expect(
      page.getByRole("heading", { name: "Full Stack Engineer" }),
    ).toBeVisible();
    await expect(page.getByLabel("about me")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Software Engineer" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Interactive Developer Portfolio" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Leading my first retrospective" }),
    ).toBeVisible();
  });

  test("shows route navigation", async ({ page }) => {
    await goToHome(page);

    const nav = page.getByRole("navigation", { name: "Primary navigation" });
    await expect(nav).toBeVisible();

    for (const label of ["About", "Experience", "Projects", "Blogs"]) {
      await expect(nav.getByText(label, { exact: true })).toBeVisible();
    }
  });

  test("links previews to full collections", async ({ page }) => {
    await goToHome(page);

    await expect(
      page.getByRole("heading", { name: "Latest experience" }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "See full experience" }),
    ).toHaveAttribute("href", "/Portfolio/experience");
    await expect(
      page.getByRole("link", { name: "See all projects" }),
    ).toHaveAttribute("href", "/Portfolio/projects");
    await expect(
      page.getByRole("link", { name: "See all blogs" }),
    ).toHaveAttribute("href", "/Portfolio/blogs");
  });

  test("opens full collections from navigation", async ({ page }) => {
    await goToHome(page);

    await page
      .getByRole("navigation", { name: "Primary navigation" })
      .getByRole("link", { name: "Experience" })
      .click();

    await expect(
      page.getByRole("heading", { name: "Experience", exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "BSc Computer Science" }),
    ).toBeVisible();
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

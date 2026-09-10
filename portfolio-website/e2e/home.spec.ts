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

  test("shows section navigation on desktop", async ({ page }) => {
    test.skip(
      (page.viewportSize()?.width ?? 0) <= 900,
      "the section nav is hidden once the shell stacks",
    );

    await goToHome(page);

    const nav = page.getByRole("navigation");
    await expect(nav).toBeVisible();

    for (const label of ["About", "Experience", "Projects", "Blogs"]) {
      await expect(nav.getByText(label, { exact: true })).toBeVisible();
    }
  });

  test("hides section navigation on phones", async ({ page }) => {
    test.skip((page.viewportSize()?.width ?? 0) > 900, "phone viewports only");

    await goToHome(page);

    await expect(
      page.getByRole("heading", { name: "Full Stack Engineer" }),
    ).toBeVisible();
    await expect(page.getByRole("navigation")).toBeHidden();
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

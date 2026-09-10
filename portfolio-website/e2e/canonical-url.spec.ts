import { expect, test } from "@playwright/test";

const cases = [
  {
    from: "/Portfolio/Blogs",
    heading: "Blogs",
    url: /\/Portfolio\/blogs$/,
  },
  {
    from: "/Portfolio/EXPERIENCE",
    heading: "Experience",
    url: /\/Portfolio\/experience$/,
  },
  {
    from: "/Portfolio/Projects",
    heading: "Projects",
    url: /\/Portfolio\/projects$/,
  },
  {
    from: "/Portfolio/Blogs/Leading-Retrospective",
    heading: "Leading My First Retrospective",
    url: /\/Portfolio\/blogs\/leading-retrospective$/,
  },
  {
    from: "/Portfolio/COMMUTERHEATMAP",
    heading: "London Commute Heatmap",
    url: /\/Portfolio\/commuterHeatmap$/,
  },
];

test.describe("canonical URLs", () => {
  for (const { from, heading, url } of cases) {
    test(`redirects ${from}`, async ({ page }) => {
      await page.goto(from);
      await expect(page).toHaveURL(url);
      await expect(
        page.getByRole("heading", { name: heading, exact: true }),
      ).toBeVisible();
    });
  }
});

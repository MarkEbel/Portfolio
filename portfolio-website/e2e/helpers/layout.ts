import type { Locator, Page } from "@playwright/test";

export interface Box {
  x: number;
  y: number;
  width: number;
  height: number;
}

export async function boxOf(locator: Locator): Promise<Box> {
  const box = await locator.boundingBox();

  if (!box) {
    throw new Error("Element has no bounding box, so it is not rendered");
  }

  return box;
}

/** Sub-pixel rounding means touching edges can report a fraction of overlap. */
export function overlaps(a: Box, b: Box, tolerance = 1): boolean {
  const horizontal =
    Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x);
  const vertical =
    Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y);

  return horizontal > tolerance && vertical > tolerance;
}

export function horizontalOverflow(page: Page): Promise<number> {
  return page.evaluate(() => {
    const root = document.documentElement;
    return root.scrollWidth - root.clientWidth;
  });
}

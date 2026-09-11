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

/**
 * The last line box of an inline element. `boundingBox` returns the union of
 * every line, which says nothing about one line once the text wraps.
 */
export async function lastLineOf(locator: Locator): Promise<Box> {
  const line = await locator.evaluate((element) => {
    const rects = Array.from(element.getClientRects());
    const last = rects[rects.length - 1];

    return last
      ? { x: last.x, y: last.y, width: last.width, height: last.height }
      : null;
  });

  if (!line) {
    throw new Error("Element has no line boxes, so it is not rendered");
  }

  return line;
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

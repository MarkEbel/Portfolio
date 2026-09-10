const SITE_PREFIX = "/Portfolio";

const firstSegments: Record<string, string> = {
  experience: "experience",
  projects: "projects",
  blogs: "blogs",
  commuterheatmap: "commuterHeatmap",
};

/**
 * Map a GitHub Pages path onto the canonical `/Portfolio/...` casing. Returns
 * the same string when the path is already canonical, or when it is not this
 * site (so a stray visit is left alone).
 *
 * GitHub Pages is case-sensitive on disk. Deep links still reach the app
 * because `404.html` is a copy of `index.html`; this then corrects the URL.
 */
export function canonicalPortfolioPath(pathname: string): string {
  const prefixMatch = pathname.match(/^\/portfolio(?=\/|$)/i);

  if (!prefixMatch) {
    return pathname;
  }

  const rest = pathname.slice(prefixMatch[0].length);
  const segments = rest.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `${SITE_PREFIX}/`;
  }

  const first = firstSegments[segments[0].toLowerCase()];

  if (!first) {
    return `${SITE_PREFIX}${rest}`;
  }

  if (first === "blogs" && segments.length > 1) {
    return `${SITE_PREFIX}/blogs/${segments.slice(1).join("/").toLowerCase()}`;
  }

  return `${SITE_PREFIX}/${first}`;
}

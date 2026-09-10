/**
 * Routes a back link may return to, with the word used in its label. Anything
 * outside this list is ignored, so a stale or hand-crafted history entry cannot
 * send someone somewhere unnamed.
 */
export const backTargets: Record<string, string> = {
  "/Portfolio/": "home",
  "/Portfolio/experience": "experience",
  "/Portfolio/projects": "projects",
  "/Portfolio/blogs": "blogs",
};

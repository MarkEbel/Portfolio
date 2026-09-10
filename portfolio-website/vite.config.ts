import { execSync } from "node:child_process";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

function resolveGitSha(): string {
  const fromEnv = process.env.VITE_GIT_SHA ?? process.env.GITHUB_SHA;
  if (fromEnv) {
    return fromEnv;
  }

  try {
    return execSync("git rev-parse HEAD", { encoding: "utf8" }).trim();
  } catch {
    return "unknown";
  }
}

function htmlAppVersion(sha: string): Plugin {
  return {
    name: "html-app-version",
    transformIndexHtml(html) {
      return html.replace(
        /<meta\s+name="app-version"\s+content="[^"]*"\s*\/?>/,
        `<meta name="app-version" content="${sha}" />`,
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), htmlAppVersion(resolveGitSha())],
  base: "/Portfolio/",
});

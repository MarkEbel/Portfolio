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

const productionCsp = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://*.tile.openstreetmap.org",
  "font-src 'self'",
  "connect-src 'self'",
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

function htmlHeadHardening(sha: string): Plugin {
  return {
    name: "html-head-hardening",
    transformIndexHtml: {
      order: "pre",
      handler(html, ctx) {
        let next = html.replace(
          /<meta\s+name="app-version"\s+content="[^"]*"\s*\/?>/,
          `<meta name="app-version" content="${sha}" />`,
        );

        // Vite HMR needs eval and a websocket; only stamp CSP on production HTML.
        if (ctx.server) {
          return next;
        }

        if (!next.includes('http-equiv="Content-Security-Policy"')) {
          next = next.replace(
            '<meta name="referrer" content="strict-origin-when-cross-origin" />',
            `<meta name="referrer" content="strict-origin-when-cross-origin" />\n    <meta http-equiv="Content-Security-Policy" content="${productionCsp}" />`,
          );
        }

        return next;
      },
    },
  };
}

export default defineConfig({
  plugins: [react(), htmlHeadHardening(resolveGitSha())],
  base: "/Portfolio/",
});

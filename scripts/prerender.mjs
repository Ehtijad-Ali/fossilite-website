// Bakes per-route head metadata into static HTML files after `vite build`.
//
// The site is a client-rendered SPA, so every URL served the same index.html
// with `<title>Fossilite AI</title>` and no description, canonical or
// structured data — all of it was written by JavaScript after hydration.
// Google executes JS and usually picks that up. Social scrapers do not: every
// guide shared to LinkedIn, Slack, X or WhatsApp previewed as "Fossilite AI"
// with no description and no image, which is most of the value of writing 36
// guides thrown away at the moment someone links to one.
//
// This is not server-side rendering — the body is still the empty SPA root and
// React hydrates over it exactly as before. Only the <head> is materialised,
// which is the part crawlers and scrapers actually read.
//
// Metadata is read from the same modules the app renders from, via a Vite SSR
// build, so a prerendered head cannot drift from what the page shows. Runs as
// part of `npm run build`.

import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import { build } from "vite";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ORIGIN = "https://fossilite.ai";
const SITE_NAME = "Fossilite";

// ── Load the content modules ─────────────────────────────────────────────────
// They use `import.meta.glob`, so they need Vite to resolve rather than a plain
// import. An SSR build into a temp directory is the cheapest way to get the
// real objects instead of re-parsing the TypeScript with regexes.

const tmp = join(root, "node_modules", ".prerender");

await build({
  root,
  logLevel: "error",
  configFile: false,
  build: {
    ssr: join(root, "scripts", "prerender-entry.ts"),
    outDir: tmp,
    emptyOutDir: true,
    rollupOptions: { output: { entryFileNames: "entry.mjs" } },
  },
});

const { ROUTES } = await import(pathToFileURL(join(tmp, "entry.mjs")).href);

// ── Head rendering ───────────────────────────────────────────────────────────

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const head = ({ path, title, description, keywords, type, jsonLd, image }) => {
  const url = `${ORIGIN}${path}`;
  const tags = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    keywords?.length ? `<meta name="keywords" content="${esc(keywords.join(", "))}" />` : "",
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:type" content="${esc(type ?? "website")}" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    image ? `<meta property="og:image" content="${esc(`${ORIGIN}${image}`)}" />` : "",
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    image ? `<meta name="twitter:image" content="${esc(`${ORIGIN}${image}`)}" />` : "",
  ].filter(Boolean);

  // JSON-LD carries the same data-seo-jsonld marker the runtime hook uses, so
  // when React hydrates it removes these rather than leaving two copies of the
  // Article schema on the page.
  for (const obj of jsonLd ?? []) {
    tags.push(
      `<script type="application/ld+json" data-seo-jsonld="true">${JSON.stringify(obj).replace(
        /</g,
        "\\u003c",
      )}</script>`,
    );
  }

  return tags.join("\n    ");
};

// ── Write one HTML file per route ────────────────────────────────────────────

const template = readFileSync(join(dist, "index.html"), "utf8");
if (!/<title>[^<]*<\/title>/.test(template)) {
  throw new Error("prerender: dist/index.html has no <title> to replace.");
}

let written = 0;
for (const route of ROUTES) {
  // The shell's <title> is the anchor; everything else is inserted with it.
  const html = template.replace(/<title>[^<]*<\/title>/, head(route));

  // "/" is dist/index.html; "/x/y" is dist/x/y/index.html, which every static
  // host resolves without a rewrite rule.
  const target =
    route.path === "/" ? join(dist, "index.html") : join(dist, route.path, "index.html");
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, html);
  written++;
}

rmSync(tmp, { recursive: true, force: true });
console.log(`prerender: ${written} routes with baked head metadata`);

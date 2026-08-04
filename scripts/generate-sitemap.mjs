// Generates public/sitemap.xml from the routes and the resource library.
//
// Guide slugs are read from the filenames in src/content/guides — the convention
// is that a guide's filename matches its `slug` field, so the sitemap can never
// drift from what's published. Category slugs are parsed out of categories.ts,
// and only categories that actually hold a guide are emitted.
//
// Runs as part of `npm run build`.

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const ORIGIN = "https://fossilite.ai";

const STATIC_ROUTES = [
  { path: "/", priority: "1.0", freq: "weekly" },
  { path: "/about", priority: "0.7", freq: "monthly" },
  { path: "/products", priority: "0.8", freq: "monthly" },
  { path: "/pricing", priority: "0.8", freq: "monthly" },
  { path: "/contact", priority: "0.6", freq: "monthly" },
  { path: "/resources", priority: "0.9", freq: "weekly" },
  { path: "/prompts", priority: "0.8", freq: "weekly" },
  { path: "/privacy", priority: "0.3", freq: "yearly" },
  { path: "/terms", priority: "0.3", freq: "yearly" },
  { path: "/cookies", priority: "0.3", freq: "yearly" },
];

const guidesDir = join(root, "src", "content", "guides");
const guideFiles = readdirSync(guidesDir).filter((f) => f.endsWith(".ts"));

const guides = guideFiles.map((file) => {
  const source = readFileSync(join(guidesDir, file), "utf8");
  const slug = file.replace(/\.ts$/, "");

  const declared = source.match(/slug:\s*"([^"]+)"/)?.[1];
  if (declared && declared !== slug) {
    throw new Error(
      `Sitemap: ${file} declares slug "${declared}" but the filename implies "${slug}". ` +
        `Rename the file or fix the slug so URLs stay predictable.`,
    );
  }

  return {
    slug,
    category: source.match(/category:\s*"([^"]+)"/)?.[1] ?? null,
    updated: source.match(/updated:\s*"([^"]+)"/)?.[1] ?? null,
  };
});

const usedCategories = [...new Set(guides.map((g) => g.category).filter(Boolean))];
const today = new Date().toISOString().slice(0, 10);

const url = ({ path, priority, freq, lastmod }) =>
  `  <url>\n` +
  `    <loc>${ORIGIN}${path}</loc>\n` +
  `    <lastmod>${lastmod ?? today}</lastmod>\n` +
  `    <changefreq>${freq}</changefreq>\n` +
  `    <priority>${priority}</priority>\n` +
  `  </url>`;

const body = [
  ...STATIC_ROUTES.map(url),
  ...usedCategories.map((c) =>
    url({ path: `/resources/category/${c}`, priority: "0.7", freq: "weekly" }),
  ),
  ...guides.map((g) =>
    url({ path: `/resources/${g.slug}`, priority: "0.8", freq: "monthly", lastmod: g.updated }),
  ),
].join("\n");

writeFileSync(
  join(root, "public", "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
);

writeFileSync(
  join(root, "public", "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`,
);

console.log(
  `sitemap: ${STATIC_ROUTES.length} static + ${usedCategories.length} categories + ${guides.length} guides`,
);

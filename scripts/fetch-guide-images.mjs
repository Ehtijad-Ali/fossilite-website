// Fetches one landscape hero image per guide from Unsplash.
//
//   UNSPLASH_KEY=xxx node scripts/fetch-guide-images.mjs
//
// Safe to re-run: guides that already have an image are skipped. Unsplash
// demo apps are capped at 50 requests/hour and each image costs two, so a
// full run needs a couple of passes.
// Pulls one landscape image per guide from Unsplash, converts to webp,
// and writes a credits manifest. Key comes from the environment.

import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const KEY = process.env.UNSPLASH_KEY;
if (!KEY) throw new Error("UNSPLASH_KEY not set");

const OUT = "src/assets/Images/guides";
fs.mkdirSync(OUT, { recursive: true });

// Queries lean abstract/architectural on purpose — literal "person at laptop"
// stock is what makes content sites look cheap.
const WANTED = [
  ["how-machine-learning-actually-works", "abstract data visualization dark blue"],
  ["neural-networks-explained", "abstract network nodes connections dark"],
  ["how-large-language-models-work", "abstract geometric light structure dark"],
  ["prompt-engineering-fundamentals", "minimal typography letterpress dark"],
  ["rag-explained", "library archive shelves dark moody"],
  ["what-is-artificial-intelligence", "abstract technology circuit dark blue"],
  ["ai-agents-explained", "abstract machinery mechanism dark"],
  ["building-your-first-ai-agent", "workshop tools dark minimal"],
  ["designing-agent-tools", "precision instruments tools flatlay dark"],
  ["building-agents-with-langchain", "chain links metal macro dark"],
  ["building-agents-with-langgraph", "graph structure geometric lines dark"],
  ["building-agents-with-crewai", "rowing crew team synchronised"],
  ["building-agents-with-autogen", "conversation abstract sound waves dark"],
  ["choosing-an-agent-framework", "crossroads paths aerial minimal"],
  ["agent-memory-and-context", "archive drawers index cards dark"],
  ["evaluating-ai-systems", "measurement gauges instruments dark"],
  ["data-cleaning-fundamentals", "sorting order grid pattern minimal"],
  ["python-for-data-work", "code screen dark minimal abstract"],
  ["cybersecurity-basics-for-builders", "server room dark blue racks"],
  ["api-integration-that-doesnt-break", "ethernet cables network rack blue"],
  ["deep-work-and-focus", "dim desk lamp night workspace minimal"],
  ["clear-writing-that-gets-read", "dark moody paper texture minimal"],
  ["learning-faster", "open book pages macro dark"],
  ["building-habits-that-stick", "repeating pattern architecture facade"],
  ["time-management-systems-compared", "long exposure light trails night"],
  ["automation-worth-building", "factory conveyor machinery abstract"],
  ["thinking-critically-about-evidence", "magnifying glass macro dark minimal"],
  ["validating-a-product-idea", "blueprint sketch drafting dark"],
  ["pricing-your-services", "abstract balance scales minimal dark"],
  ["finding-your-first-clients", "handshake alternative doorway light minimal"],
];

const seen = new Set();
const credits = [];
const failed = [];

const api = async (url) => {
  const r = await fetch(url, {
    headers: { Authorization: `Client-ID ${KEY}`, "Accept-Version": "v1" },
  });
  if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
  return r.json();
};

for (const [slug, query] of WANTED) {
  // Already have one? Leave it alone. Makes the script safe to re-run
  // after the hourly rate limit resets, fetching only what is missing.
  if (fs.existsSync(path.join(OUT, slug + ".webp"))) {
    console.log(`skip ${slug}`);
    continue;
  }
  try {
    const data = await api(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}` +
        `&orientation=landscape&per_page=8&content_filter=high`,
    );

    // Skip anything already used so the library doesn't repeat itself.
    const photo = (data.results || []).find((p) => !seen.has(p.id));
    if (!photo) {
      failed.push([slug, "no unused result"]);
      continue;
    }
    seen.add(photo.id);

    // Required by the Unsplash API terms: register the download so the
    // photographer gets credited with it. Fire and ignore the response body.
    if (photo.links?.download_location) {
      await api(photo.links.download_location).catch(() => {});
    }

    const src = `${photo.urls.raw}&w=1900&q=80&fm=jpg&fit=max`;
    const buf = Buffer.from(await (await fetch(src)).arrayBuffer());

    const dest = path.join(OUT, `${slug}.webp`);
    await sharp(buf)
      .resize(1600, null, { withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(dest);

    const meta = await sharp(dest).metadata();
    const kb = Math.round(fs.statSync(dest).size / 1024);

    credits.push({
      slug,
      id: photo.id,
      photographer: photo.user.name,
      profile: `https://unsplash.com/@${photo.user.username}`,
      page: photo.links.html,
      description: photo.description || photo.alt_description || "",
      file: `${meta.width}x${meta.height} ${kb}KB`,
    });

    console.log(`ok   ${slug.padEnd(38)} ${meta.width}x${meta.height} ${kb}KB  ${photo.user.name}`);
  } catch (e) {
    failed.push([slug, e.message]);
    console.log(`FAIL ${slug.padEnd(38)} ${e.message}`);
  }
}

fs.writeFileSync(
  path.join(OUT, "CREDITS.json"),
  JSON.stringify({ source: "Unsplash", licence: "https://unsplash.com/license", images: credits }, null, 2),
);

console.log(`\n${credits.length} saved, ${failed.length} failed`);
if (failed.length) console.log(failed.map(([s, e]) => `  ${s}: ${e}`).join("\n"));

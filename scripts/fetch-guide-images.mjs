// Fetches a hero image per guide from Unsplash, converts to webp, and records
// credits with the photo's own description so match quality is auditable.
//
//   UNSPLASH_KEY=xxx node scripts/fetch-guide-images.mjs          # fill gaps
//   UNSPLASH_KEY=xxx node scripts/fetch-guide-images.mjs --force  # replace all
//
// Request budget: one search per THEME (not per guide) returning 30 results,
// plus one download registration per image (required by Unsplash's API terms).
// That's ~5 + 30 = 35 requests for a full run, inside the 50/hour demo cap.
// Production access raises the cap to 5,000/hour.

import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const KEY = process.env.UNSPLASH_KEY;
if (!KEY) throw new Error("UNSPLASH_KEY not set");
const FORCE = process.argv.includes("--force");

const OUT = "src/assets/Images/guides";
fs.mkdirSync(OUT, { recursive: true });

/**
 * Themes, not puns.
 *
 * The first version of this script searched "chain links" for LangChain and
 * "rowing crew" for CrewAI — wordplay on the product names, which returned
 * images about entirely the wrong subject. Queries here describe what each
 * guide is ABOUT. `want` lists words we hope to find in a photo's own
 * description so candidates can be ranked rather than taken in search order,
 * and `avoid` demotes the stock-photo tropes that cheapen a page.
 */
const THEMES = [
  {
    query: "abstract data visualization network nodes dark blue",
    want: ["abstract", "network", "data", "digital", "blue", "dark", "technology", "pattern"],
    avoid: ["person", "man", "woman", "people", "hand", "face", "smiling"],
    guides: [
      "how-machine-learning-actually-works",
      "neural-networks-explained",
      "how-large-language-models-work",
      "what-is-artificial-intelligence",
      "ai-agents-explained",
      "building-your-first-ai-agent",
      "building-agents-with-langchain",
      "building-agents-with-langgraph",
      "evaluating-ai-systems",
    ],
  },
  {
    query: "server room data centre racks cables dark",
    want: ["server", "data", "centre", "center", "rack", "cable", "network", "dark"],
    avoid: ["person", "man", "woman", "engineer", "worker"],
    guides: [
      "cybersecurity-basics-for-builders",
      "api-integration-that-doesnt-break",
      "rag-explained",
      "agent-memory-and-context",
    ],
  },
  {
    query: "abstract architecture geometric facade minimal dark",
    want: ["architecture", "building", "geometric", "pattern", "structure", "facade", "minimal", "lines"],
    avoid: ["person", "people", "crowd"],
    guides: [
      "designing-agent-tools",
      "choosing-an-agent-framework",
      "building-agents-with-crewai",
      "building-agents-with-autogen",
      "data-cleaning-fundamentals",
      "building-habits-that-stick",
      "automation-worth-building",
    ],
  },
  {
    query: "desk workspace notebook laptop low light minimal",
    want: ["desk", "workspace", "laptop", "notebook", "table", "computer", "office", "book"],
    avoid: ["smiling", "handshake", "meeting"],
    guides: [
      "python-for-data-work",
      "deep-work-and-focus",
      "clear-writing-that-gets-read",
      "learning-faster",
      "time-management-systems-compared",
      "prompt-engineering-fundamentals",
    ],
  },
  {
    query: "long exposure light trails night abstract motion",
    want: ["light", "trail", "night", "motion", "long exposure", "abstract", "city", "blur"],
    avoid: ["person", "portrait", "smiling"],
    guides: [
      "thinking-critically-about-evidence",
      "validating-a-product-idea",
      "pricing-your-services",
      "finding-your-first-clients",
    ],
  },
];

const api = async (url) => {
  const r = await fetch(url, {
    headers: { Authorization: `Client-ID ${KEY}`, "Accept-Version": "v1" },
  });
  if (r.status === 403) {
    throw new Error(
      `rate limited (remaining: ${r.headers.get("x-ratelimit-remaining")}) — wait for the hourly reset`,
    );
  }
  if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
  return r.json();
};

/** Score a photo by how well its own description matches what we asked for. */
const score = (photo, want, avoid) => {
  const text = [photo.description, photo.alt_description, ...(photo.tags || []).map((t) => t.title)]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (!text) return 0; // undescribed photos are unscoreable — deprioritise them
  let s = 1;
  for (const w of want) if (text.includes(w)) s += 2;
  for (const a of avoid) if (text.includes(a)) s -= 4;
  if (photo.width / photo.height >= 1.4) s += 1; // crops better into a wide hero
  return s;
};

const credits = [];
const failed = [];
const used = new Set();

for (const theme of THEMES) {
  const pending = theme.guides.filter(
    (slug) => FORCE || !fs.existsSync(path.join(OUT, `${slug}.webp`)),
  );
  if (!pending.length) {
    console.log(`skip theme "${theme.query}" — all present`);
    continue;
  }

  let pool;
  try {
    const data = await api(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(theme.query)}` +
        `&orientation=landscape&per_page=30&content_filter=high`,
    );
    pool = (data.results || [])
      .map((p) => ({ p, s: score(p, theme.want, theme.avoid) }))
      .sort((a, b) => b.s - a.s);
  } catch (e) {
    pending.forEach((slug) => failed.push([slug, e.message]));
    console.log(`FAIL theme "${theme.query}": ${e.message}`);
    continue;
  }

  for (const slug of pending) {
    const pick = pool.find(({ p }) => !used.has(p.id));
    if (!pick) {
      failed.push([slug, "no unused candidate in theme"]);
      continue;
    }
    used.add(pick.p.id);
    const photo = pick.p;

    try {
      // Required by Unsplash API terms — credits the photographer with it.
      if (photo.links?.download_location) {
        await api(photo.links.download_location).catch(() => {});
      }

      const buf = Buffer.from(
        await (await fetch(`${photo.urls.raw}&w=1900&q=80&fm=jpg&fit=max`)).arrayBuffer(),
      );
      const dest = path.join(OUT, `${slug}.webp`);
      await sharp(buf)
        .resize(1600, null, { withoutEnlargement: true })
        .webp({ quality: 78 })
        .toFile(dest);

      const meta = await sharp(dest).metadata();
      const desc = photo.description || photo.alt_description || "(no description)";

      credits.push({
        slug,
        id: photo.id,
        photographer: photo.user.name,
        profile: `https://unsplash.com/@${photo.user.username}`,
        page: photo.links.html,
        // Recorded so match quality can be reviewed without opening 30 links.
        description: desc,
        matchScore: pick.s,
        file: `${meta.width}x${meta.height} ${Math.round(fs.statSync(dest).size / 1024)}KB`,
      });

      console.log(`ok  [${String(pick.s).padStart(2)}] ${slug.padEnd(36)} ${desc.slice(0, 58)}`);
    } catch (e) {
      failed.push([slug, e.message]);
      console.log(`FAIL ${slug.padEnd(36)} ${e.message}`);
    }
  }
}

// Merge with existing credits so partial runs accumulate rather than replace.
const file = path.join(OUT, "CREDITS.json");
const prev = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")).images ?? [] : [];
const merged = [...prev.filter((c) => !credits.some((n) => n.slug === c.slug)), ...credits].sort(
  (a, b) => a.slug.localeCompare(b.slug),
);

fs.writeFileSync(
  file,
  JSON.stringify(
    { source: "Unsplash", licence: "https://unsplash.com/license", images: merged },
    null,
    2,
  ),
);

console.log(`\n${credits.length} fetched, ${failed.length} failed, ${merged.length} total on disk`);
if (failed.length) console.log(failed.map(([s, e]) => `  ${s}: ${e}`).join("\n"));

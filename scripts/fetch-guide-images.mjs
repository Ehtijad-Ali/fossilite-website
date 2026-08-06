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
    // Business guides deliberately avoid the "team smiling in a meeting room"
    // register — it's the stock cliché that most cheapens a page.
    query: "modern office interior architecture empty minimal light",
    want: ["office", "interior", "building", "architecture", "minimal", "window", "desk", "light"],
    avoid: ["smiling", "handshake", "meeting", "group", "team", "portrait", "laughing"],
    guides: [
      "ai-for-customer-support",
      "ai-for-sales-teams",
      "ai-for-marketing-teams",
      "ai-for-hiring-and-hr",
      "measuring-ai-roi-in-business",
    ],
  },
  {
    query: "warehouse industrial interior structure",
    want: ["industrial", "warehouse", "logistics", "machinery", "conveyor", "factory", "pattern", "structure"],
    avoid: ["person", "worker", "smiling", "portrait"],
    guides: ["ai-for-operations-and-workflow"],
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

  // ── Themes for the business guides added in the 51-guide batch ────────────
  {
    query: "archive documents paper files stacked folders",
    want: ["paper", "document", "file", "folder", "archive", "stack", "record", "book"],
    avoid: ["person", "hand", "smiling", "portrait"],
    guides: ["ai-for-finance-teams", "document-processing-with-ai", "writing-an-ai-usage-policy"],
  },
  {
    query: "warehouse boxes shipping",
    want: ["warehouse", "box", "parcel", "shipping", "logistics", "shelf", "cardboard", "delivery"],
    avoid: ["person", "worker", "smiling", "portrait"],
    guides: ["ai-for-ecommerce"],
  },
  {
    query: "laptop screen code dark",
    want: ["screen", "code", "computer", "monitor", "display", "interface", "dark", "laptop"],
    avoid: ["person", "man", "woman", "hand", "face", "smiling"],
    guides: ["ai-for-saas-businesses", "building-a-business-website-with-ai"],
  },
  {
    query: "design sketch paper",
    want: ["sketch", "drawing", "design", "paper", "pen", "pencil", "wireframe", "interface"],
    // Sharing this theme with the branding guide handed it a fashion design
    // board. Product design and brand identity are different subjects and need
    // separate queries.
    avoid: ["smiling", "portrait", "meeting", "group", "fashion", "dress", "clothing"],
    guides: ["ai-in-product-design"],
  },
  {
    query: "letterpress type printing",
    want: ["letterpress", "type", "typography", "print", "printing", "letter", "ink", "press"],
    avoid: ["smiling", "portrait", "person", "fashion"],
    guides: ["building-your-brand-with-ai"],
  },
  {
    query: "padlock security chain metal abstract dark",
    want: ["lock", "padlock", "security", "chain", "metal", "key", "dark", "steel"],
    avoid: ["person", "hand", "smiling"],
    guides: ["data-privacy-and-ai"],
  },
  {
    // Empty rooms rather than the "engaged team in a workshop" cliché.
    query: "empty auditorium lecture hall seats architecture",
    want: ["auditorium", "seat", "hall", "chair", "row", "architecture", "empty", "interior"],
    avoid: ["crowd", "audience", "people", "smiling", "speaker"],
    guides: ["training-your-team-on-ai", "leading-an-ai-rollout"],
  },
  {
    query: "staircase geometric architecture perspective minimal concrete",
    want: ["staircase", "stair", "architecture", "geometric", "perspective", "concrete", "minimal", "structure"],
    avoid: ["person", "people", "crowd", "portrait"],
    guides: ["choosing-an-ai-vendor", "ai-for-startup-growth"],
  },
  {
    query: "microphone notebook recording desk interview close up",
    want: ["microphone", "notebook", "recording", "audio", "desk", "notes", "pen", "sound"],
    avoid: ["smiling", "portrait", "singer", "concert", "stage"],
    guides: ["customer-research-with-ai"],
  },
  {
    query: "concrete geometric blocks shadow",
    want: ["block", "geometric", "modular", "pattern", "shape", "abstract", "cube", "structure"],
    avoid: ["person", "child", "toy", "smiling"],
    guides: ["no-code-ai-for-business"],
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

/**
 * Tone penalty from the photo's dominant colour.
 *
 * Subject matching alone picked a bright orange-and-blue 3D render for the
 * no-code guide: a perfect keyword match (blocks, geometric, modular) on a
 * site whose pages are dark navy with gold. Every other hero sits around
 * luminance 70, so a bright saturated image doesn't read as a hero, it reads
 * as a mistake. Unsplash returns a dominant colour per photo, so this can be
 * judged before downloading anything.
 */
const tone = (hex) => {
  if (!/^#[0-9a-f]{6}$/i.test(hex || "")) return 0;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  const mx = Math.max(r, g, b);
  const sat = mx ? (mx - Math.min(r, g, b)) / mx : 0;
  let t = 0;
  if (lum < 110) t += 3; // matches the rest of the library
  if (lum > 170) t -= 4; // washes out against the navy page
  if (sat > 0.45) t -= 4; // loud colour fights the gold accent
  return t;
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
  return s + tone(photo.color);
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

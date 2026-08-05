# Resource Library — authoring & architecture

The library at `/resources` is structured content, not markup. A guide is a typed
object; the renderer guarantees every guide ships all required sections, and the
SEO layer derives structured data from the same object so schema can't drift from
the visible copy.

---

## Adding a guide

1. Create `src/content/guides/<slug>.ts`. **The filename must equal the `slug`
   field** — the sitemap generator enforces this and will fail the build otherwise.
2. Export a `Guide` object as the default export. TypeScript will tell you what's
   missing; every field in `src/content/types.ts` is required.
3. That's it. `src/content/index.ts` globs the directory, so there is no registry
   to update. The guide appears in the index, in category filters, in search, in
   the sitemap, and in related-guide resolution automatically.

`relatedGuides` and `internalLinks` may reference slugs that don't exist yet —
unresolved ones are filtered out at render time rather than becoming dead links.
Reference planned guides freely; they wire themselves up when published.

### Adding prompts

Append to `PROMPTS` in `src/content/prompts.ts`. Set `topic` to a guide slug and
the prompts appear in that guide's Prompts section as well as at `/prompts`.

---

## Editorial standard

The bar is *did the reader learn something they can use this week*. Concretely:

- **Every claim earns its place.** No sentence that would survive being deleted.
- **Never invent evidence.** This is the hard rule. `Example` is a discriminated
  union so the compiler enforces it:
  - `kind: "documented"` requires a `source` with a real URL. **Every figure in
    the example must appear in that source.** Verify the URL resolves — do not
    cite from memory, which is precisely the failure mode these guides warn
    about. If two sources disagree on a detail (a date, an amount), state only
    what you can confirm.
  - `kind: "illustration"` is a constructed teaching scenario. It renders with a
    visible disclaimer and **must contain no invented statistics** — no
    percentages, no currency amounts, no measured before/after. Describe the
    shape of the outcome qualitatively.
- **The same rule applies outside `examples`.** Advice sections must not smuggle
  in unsourced empirical claims ("most freelancers find their close rate barely
  moves"). Either cite it, or reframe it as something the reader should measure
  for themselves. Arithmetic illustrations ("if 99% of rows are one class,
  predicting that class scores 99%") are fine — they're definitional, not
  measurements.
- **Mistakes always carry the fix.** Never state a problem without the correction.
- **Technical accuracy over simplification.** Where a common explanation is wrong
  (calibration, hallucination, correlation vs cause), say the correct thing and
  explain why the common version misleads.
- **No filler transitions**, no "in today's fast-paced world", no restating the
  heading as the first sentence.
- Target 2,000–4,000 words. The structured format reaches this naturally when the
  content is real; if you're padding to hit it, the topic is too narrow.

### SEO fields

| Field | Target |
| --- | --- |
| `seoTitle` | 50–60 characters, primary keyword early |
| `metaDescription` | 140–160 characters, reads as a promise not a summary |
| `keywords[0]` | The primary keyword — should appear in `title` and `intro` |
| `faqs[].a` | Under ~60 words; FAQ rich results truncate beyond that |

Heading hierarchy is handled by the renderer: `h1` (title) → `h2` (sections) →
`h3` (concepts, mistakes, examples, FAQ questions). Don't put markup in content
strings.

---

## What's built

- `/resources` — library index: track → category browse, filter, search
- `/resources/category/:category` — crawlable per-category pages
- `/resources/:slug` — full guide with sticky contents rail
- `/prompts` — prompt library filtered by model and type
- JSON-LD: `Article`, `FAQPage`, `BreadcrumbList`, `CollectionPage`
- `public/sitemap.xml` + `robots.txt`, regenerated on every `npm run build`

---

## Known limits, in priority order

**1. Eager content glob (highest value).** `src/content/index.ts` imports all
guides eagerly. They're pinned to a `content` chunk in `vite.config.ts`, so the
landing page doesn't pay for them — but the library index still loads every guide
body just to render cards, and at 36 guides that chunk is 923 kB (303 kB
gzipped). Switch to `{ eager: false }` for bodies plus a build-generated
manifest holding only the listing fields (title, description, category, level,
readingTime, keywords, updated).

**2. The body is still not rendered server-side.** `scripts/prerender.mjs` bakes
the `<head>` — title, description, canonical, Open Graph, Twitter card and all
JSON-LD — into a static HTML file per route, so crawlers and social scrapers get
correct metadata without executing JavaScript. The `<body>` is still the empty
SPA root that React hydrates. That's fine for Google and for link previews;
a crawler that reads neither JS nor structured data sees no article text.
Full SSR is the remaining step, and it is a much larger change than the head.

**3. Newsletter signup is front-end only.** The subscribe form sets local state
and does not persist anywhere. Wire it to a real provider before promoting it.

**4. No per-page Open Graph image.** `og:image` is omitted rather than pointed
at a placeholder, so previews render as text-only cards. Guides with hero
photography already have an image worth using; wiring it through the
prerenderer needs the built asset URL, which the SSR entry doesn't currently
resolve.

---

## Backlog

Published (10): `how-machine-learning-actually-works`,
`how-large-language-models-work`, `prompt-engineering-fundamentals`,
`rag-explained`, `neural-networks-explained`, `python-for-data-work`,
`validating-a-product-idea`, `pricing-your-services`,
`clear-writing-that-gets-read`, `deep-work-and-focus`.

Next batches, ordered so that guides already cross-referenced by published ones
land first:

**Batch 3 — AI & Engineering**
- `what-is-artificial-intelligence` · `ai-agents-explained` ·
  `fine-tuning-vs-prompting` · `vector-search-explained` ·
  `evaluating-ai-systems` · `ai-security-basics` ·
  `choosing-a-model-for-your-task`

**Batch 4 — Data & building**
- `data-cleaning-fundamentals` · `sql-for-analysis` ·
  `reading-a-confusion-matrix` · `api-integration-that-doesnt-break` ·
  `no-code-tools-that-actually-scale` · `automation-worth-building` ·
  `web-development-in-build-order` · `ui-ux-first-principles` ·
  `cybersecurity-basics-for-builders`

**Batch 5 — Business & Growth**
- `starting-a-business-with-no-savings` · `finding-your-first-clients` ·
  `negotiation-fundamentals` · `building-a-portfolio-that-converts` ·
  `writing-sops-that-get-followed` · `customer-support-that-retains` ·
  `hiring-your-first-employee` · `managing-a-small-team` ·
  `scaling-without-breaking` · `brand-positioning-basics` ·
  `content-marketing-that-compounds` · `email-marketing-fundamentals` ·
  `seo-fundamentals` · `social-media-growth-honestly` ·
  `sales-funnels-explained` · `saas-metrics-that-matter` ·
  `reading-financial-statements`

**Batch 6 — Life & Career**
- `building-habits-that-stick` ·
  `goal-setting-that-survives-contact` · `time-management-systems-compared` ·
  `decision-making-under-uncertainty` · `problem-solving-frameworks` ·
  `thinking-critically-about-evidence` · `learning-faster` ·
  `emotional-intelligence-at-work` · `public-speaking-without-dread` ·
  `leading-without-authority` · `career-leverage-over-a-decade` ·
  `building-confidence-through-competence`

That's ~55 planned on top of the 7 published. Prompt coverage should expand
alongside — the target is 20 prompts per model per major topic, currently ~20
total across 7 topics.

// ─────────────────────────────────────────────────────────────────────────────
// Content model for the Fossilite Resource Library.
//
// Every guide is authored as structured data rather than free-form markup. That
// buys three things a blob of HTML can't:
//   1. The renderer guarantees every guide ships all required sections — a
//      missing FAQ or checklist is a type error, not a silent SEO gap.
//   2. JSON-LD (Article + FAQPage + BreadcrumbList) is derived, never
//      hand-maintained, so structured data can't drift from the visible copy.
//   3. Search, related-guide resolution and the sitemap read the same objects,
//      so nothing goes stale.
// ─────────────────────────────────────────────────────────────────────────────

export type Level = "Beginner" | "Intermediate" | "Advanced";

/** Top-level taxonomy. Slugs are URL segments — changing one breaks links. */
export interface Category {
  slug: string;
  name: string;
  /** Shown on the library index card. One sentence, no marketing filler. */
  blurb: string;
  /** Grouping used by the index page rail. */
  track: Track;
}

export type Track = "AI & Engineering" | "Business & Growth" | "Life & Career";

/** A named concept with a plain-language explanation. */
export interface Concept {
  term: string;
  /** Explain it as you would to a smart person outside the field. */
  explain: string;
  /** Optional concrete anchor — an analogy, a number, a snippet. */
  detail?: string;
}

/** One rung of the step-by-step learning path. */
export interface PathStep {
  title: string;
  /** What the reader actually does at this step. */
  body: string;
  /** Realistic time investment, e.g. "2–3 hours". */
  effort: string;
  /** How the reader knows they're done. */
  outcome: string;
}

/**
 * An example. Deliberately a discriminated union so that the distinction between
 * "this happened and here is the source" and "this is a teaching construct" is
 * enforced by the compiler rather than left to the author's conscience.
 *
 * A `documented` example MUST cite a primary or reputable secondary source, and
 * every figure in it must appear in that source. If you cannot point to the
 * number, it does not go in.
 *
 * An `illustration` is a constructed scenario used to make a mechanism visible.
 * It is rendered with an explicit disclaimer, and it must contain NO invented
 * statistics — no percentages, no currency amounts, no measured before/after.
 * Describe the shape of the outcome qualitatively instead.
 */
export type Example =
  | {
      kind: "documented";
      scenario: string;
      walkthrough: string;
      /** The observed result. Every figure here must be in the cited source. */
      result: string;
      source: { label: string; url: string };
    }
  | {
      kind: "illustration";
      scenario: string;
      walkthrough: string;
      /** Qualitative only — inventing a metric here defeats the point. */
      result: string;
    };

/** A mistake plus the correction. Never state a mistake without the fix. */
export interface Mistake {
  mistake: string;
  why: string;
  fix: string;
}

export interface Exercise {
  title: string;
  brief: string;
  /** How the reader grades their own work. */
  success: string;
  time: string;
}

export interface Faq {
  q: string;
  /** Kept under ~60 words: FAQ rich results truncate beyond that. */
  a: string;
}

export interface Tool {
  name: string;
  what: string;
  /** "Free", "Freemium", "Paid" — set honestly, readers notice. */
  cost: "Free" | "Freemium" | "Paid";
  url?: string;
}

export interface LearningResource {
  title: string;
  kind: "Course" | "Book" | "Paper" | "Docs" | "Video" | "Newsletter";
  note: string;
  url?: string;
}

/** Contextual cross-link. `slug` must resolve to a published guide. */
export interface InternalLink {
  slug: string;
  /** Natural anchor text — never "click here". */
  anchor: string;
  /** Where in the guide this link belongs, for the author's reference. */
  context: string;
}

export interface Guide {
  // ── Identity & SEO ────────────────────────────────────────────────────────
  slug: string;
  /** <title> — aim for 50–60 characters. */
  seoTitle: string;
  /** <meta name="description"> — aim for 140–160 characters. */
  metaDescription: string;
  /** <h1> — may differ from seoTitle; written for humans first. */
  title: string;
  /** Primary keyword first, then secondary. Used for on-page checks. */
  keywords: string[];

  // ── Classification ────────────────────────────────────────────────────────
  category: string;
  level: Level;
  /** ISO date — surfaced as dateModified in Article schema. */
  updated: string;
  author: string;
  /** Minutes. Computed at author time from the real word count. */
  readingTime: number;

  // ── Body (maps 1:1 to the required guide structure) ───────────────────────
  intro: string[];
  whyItMatters: string[];
  coreConcepts: Concept[];
  learningPath: PathStep[];
  examples: Example[];
  mistakes: Mistake[];
  bestPractices: string[];
  proTips: string[];
  businessApplications: string[];
  lifeApplications: string[];
  exercises: Exercise[];
  checklist: string[];
  faqs: Faq[];
  tools: Tool[];
  resources: LearningResource[];
  internalLinks: InternalLink[];
  relatedGuides: string[];
  conclusion: string[];
  cta: { headline: string; body: string; label: string; href: string };
}

// ─── Prompt library ──────────────────────────────────────────────────────────

export type PromptModel = "ChatGPT" | "Claude" | "Gemini";
export type PromptKind =
  | "Beginner"
  | "Advanced"
  | "Business"
  | "Productivity"
  | "Learning";

export interface Prompt {
  id: string;
  /** Topic slug this prompt belongs to — matches a guide or category slug. */
  topic: string;
  model: PromptModel;
  kind: PromptKind;
  title: string;
  /** The prompt itself. `[SQUARE BRACKETS]` mark user-supplied variables. */
  prompt: string;
  /** What the prompt does. */
  does: string;
  /** When to reach for it. */
  when: string;
  /** What good output looks like, so the reader can judge the result. */
  expect: string;
  /** One concrete lever that measurably improves the output. */
  tip: string;
}

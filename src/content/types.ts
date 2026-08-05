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

/**
 * A copyable code block. Rendered with a copy button and a language tag.
 *
 * Code here is teaching material, so it must actually run. Two rules:
 *   - No invented APIs. Every method, parameter and model ID must exist.
 *   - Show the whole thing. A snippet that omits imports or error handling
 *     teaches a beginner to write code that doesn't work.
 */
export interface CodeExample {
  title: string;
  /** Highlight.js-style language id — "python", "typescript", "bash", "json". */
  language: string;
  /** What this demonstrates and why it's worth copying. */
  intro: string;
  code: string;
  /** Optional call-out for the non-obvious line. */
  note?: string;
}

export interface Faq {
  q: string;
  /** Kept under ~60 words: FAQ rich results truncate beyond that. */
  a: string;
}

export interface Tool {
  name: string;
  what: string;
  /**
   * Set honestly, readers notice. "Varies" is for build-it-yourself
   * components and professional services where no list price exists —
   * don't use it to dodge saying "Paid".
   */
  cost: "Free" | "Freemium" | "Paid" | "Varies";
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

/**
 * A real, named person — never a company and never invented.
 *
 * Published as `Person` structured data, so it is a claim to readers and to
 * search engines about who stands behind the work. Search engines weigh
 * demonstrable expertise, and a byline nobody can verify undermines that
 * rather than helping.
 *
 * Everything past `name` is optional so an unconfirmed detail can be omitted
 * instead of guessed at. The renderer and the schema both skip what's absent.
 */
export interface Author {
  name: string;
  /** Job title as it would appear on LinkedIn. */
  role?: string;
  /** One or two sentences establishing why this person can write this. */
  bio?: string;
  /** LinkedIn or personal site — strengthens the Person schema. */
  url?: string;
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
  /** Import one from `content/authors.ts` — never write a byline inline. */
  author: Author;
  /** Minutes. Computed at author time from the real word count. */
  readingTime: number;

  /**
   * Optional hero photography. When absent — the default — the guide renders
   * a generated monograph plate derived from its slug, which is deterministic,
   * on-brand and carries no licensing question.
   *
   * Only set this with an image you have actually looked at and whose licence
   * permits commercial use. `credit` is required by most free-photo licences
   * even when attribution is described as optional.
   */
  heroImage?: { src: string; alt: string; credit?: string };

  // ── Body ──────────────────────────────────────────────────────────────────
  //
  // Only the first block is required. Everything after it is optional on
  // purpose: when every section is mandatory, every guide comes out the same
  // shape and length, and uniform shape across a whole library is the loudest
  // signal that nobody decided what each piece needed. Carry a section because
  // this guide has something to put in it. An empty array renders nothing and
  // drops out of the contents rail.

  intro: string[];
  coreConcepts: Concept[];
  examples: Example[];
  mistakes: Mistake[];
  faqs: Faq[];
  relatedGuides: string[];

  /** The stakes. Skip it when the title already answers "why should I care". */
  whyItMatters?: string[];
  /** A sequenced path. Only for guides someone works through over weeks. */
  learningPath?: PathStep[];
  /**
   * How to do it well. Rendered as one section with `proTips`, not two —
   * "Best practices" followed by "Professional tips" is the same section
   * printed twice under different names.
   *
   * Keep these to short, checkable rules.
   */
  bestPractices?: string[];
  /** Longer notes from doing the work. A paragraph each, not one-liners. */
  proTips?: string[];
  businessApplications?: string[];
  /** Only where it's genuinely true. Most technical guides have none. */
  lifeApplications?: string[];
  exercises?: Exercise[];
  /** Only guides where running code is the point carry these. */
  codeExamples?: CodeExample[];
  checklist?: string[];
  tools?: Tool[];
  resources?: LearningResource[];
  internalLinks?: InternalLink[];
  /**
   * Rendered as "Where to start" — the one thing to do this week, not a
   * summary. Every guide used to close with three paragraphs whose first two
   * restated the intro, which is the shape of a school essay rather than of
   * advice. If what you're about to write is a recap, leave it out.
   */
  conclusion?: string[];
  /**
   * Optional, and better left off than made generic. When 35 guides end with
   * the same button, it stops reading as an offer and starts reading as
   * furniture. Say something specific to this guide's reader or say nothing.
   */
  cta?: { headline: string; body: string; label: string; href: string };
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

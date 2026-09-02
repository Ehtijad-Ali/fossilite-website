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

/**
 * The scannable layer that sits above the long-form guide.
 *
 * A reader who wants the whole lesson in a minute reads only this, the story
 * and the calculator, and leaves. A reader who wants the depth carries on into
 * the guide below it. Both are legitimate, and before this existed only the
 * second one was served.
 *
 * The wrong/right pair is the load-bearing part. Naming what a business would
 * normally do, and why it fails, is what makes the right approach land — a
 * technique introduced without the failure it fixes is just vocabulary.
 */
export interface GuideBrief {
  /** Three lines, at most. The whole point, before anybody has scrolled. */
  inOneMinute: string;
  /** The presenting symptom, in the words a business owner would use. */
  problem: { headline: string; detail: string };
  /** What most businesses reach for, and why it does not work. */
  wrongApproach: { what: string; why: string };
  /** The technique, introduced as the fix rather than as a topic. */
  rightApproach: { what: string; why: string };
  /** Where this lands in a real company. */
  context: { where: string; decision: string; metric: string };
  /** One or two sentences. The thing to remember if nothing else. */
  takeaway: string;
}

/**
 * The six-stage sequence, played rather than printed: problem, data, model,
 * prediction, decision, result.
 *
 * It advances on its own once, then holds on the last stage and can be stepped
 * through by hand. It exists to teach the shape every one of these projects
 * has, which is the thing readers most reliably fail to picture.
 */
export interface Story {
  title: string;
  caption?: string;
  /** Exactly six, in order. The stage names are fixed across the library so
   *  the shape becomes familiar rather than novel each time. */
  stages: [StoryStage, StoryStage, StoryStage, StoryStage, StoryStage, StoryStage];
}

export interface StoryStage {
  /** Problem / Data / Model / Prediction / Decision / Result. */
  stage: string;
  label: string;
  detail: string;
}

/**
 * A calculator the reader drives with their own numbers.
 *
 * `compute` is a real function rather than an expression string: guide files
 * are TypeScript that gets compiled into the bundle, so the formula is
 * type-checked at build time and needs no evaluator at runtime.
 *
 * Outputs are computed from what the reader typed, so they are arithmetic on
 * the reader's own figures and not a claim about anybody's business. That is
 * what keeps this the right side of the no-invented-statistics rule.
 */
export interface Calculator {
  title: string;
  /** One line: what to do with it. */
  intro: string;
  inputs: CalcInput[];
  compute: (v: Record<string, number>) => CalcResult;
  /** Assumptions worth stating, so nobody over-reads the answer. */
  footnote?: string;
}

export interface CalcInput {
  id: string;
  label: string;
  min: number;
  max: number;
  step: number;
  /** Starting position. Pick something typical, not a round number. */
  value: number;
  prefix?: string;
  suffix?: string;
  help?: string;
}

export interface CalcResult {
  outputs: {
    label: string;
    value: string;
    tone?: "good" | "bad" | "neutral";
    note?: string;
    /** The one figure worth reading first, rendered larger. */
    hero?: boolean;
  }[];
  /** Optional live plot. Points are 0-100 in both axes, like `curve`. */
  plot?: {
    xLabel: string;
    yLabel: string;
    points: [number, number][];
    marker?: [number, number];
    markerLabel?: string;
  };
}

/**
 * A diagram, authored as data rather than as SVG markup.
 *
 * Two reasons it is data. The renderer paints it from theme tokens, so every
 * figure is correct in light and dark without the author thinking about it; and
 * a guide file stays readable, because a page of hand-written SVG in the middle
 * of prose is unreviewable.
 *
 * Series colours come from a validated categorical palette. Do NOT introduce
 * new hues here: the site's own gold and teal accents sit 14 units apart in
 * normal vision, which is below the legibility floor, and they were rejected
 * for this use for exactly that reason. Structure is drawn in ink; colour is
 * only ever spent on something the reader has to tell apart.
 *
 * `flow` is the workhorse and answers the question most guides need answered:
 * what goes in, what the model does, and what somebody does differently as a
 * result. The rest exist because a specific mechanism is clearer as a picture.
 */
/**
 * The frame that turns a chart into a worked business lesson.
 *
 * A finished chart shows an answer. This shows somebody being wrong first, which
 * is the part that teaches: the reader recognises the naive view as the thing
 * they would have done, and only then sees what it hides.
 *
 * So `wrong` and `right` are not captions. They are two states of the same
 * figure, and the reader switches between them.
 *
 * Everything here is one sentence. If a field needs a paragraph, the figure is
 * carrying too much and should be split.
 */
export interface DiagramLesson {
  /** What is going wrong, in the business's own words. */
  problem: string;
  /** The naive view: the toggle label, and what it misses. */
  wrong: { label: string; why: string };
  /** The informed view. */
  right: { label: string; why: string };
  /** What the reader has just discovered by switching. */
  discovery: string;
  /** What to do about it. Three at most. */
  decisions?: { tone: "protect" | "monitor" | "investigate"; label: string }[];
  /** One memorable sentence. */
  takeaway: string;
}

/** A short note pinned to a point on the plot, pointing at the insight. */
export interface PlotNote {
  x: number;
  y: number;
  text: string;
}

/**
 * One step of a running workflow.
 *
 * `actor` is the field that does the teaching. Most people who are wary of this
 * work are wary because they cannot see where the machine stops and a person
 * starts. Naming the actor on every step answers that before it is asked, and
 * it is why the badge is a word and not only a colour.
 *
 * `output` is the thing that physically moves to the next step. Keep it
 * concrete: a file, a score, a list of forty names. A step whose output cannot
 * be named is usually two steps, or is not really happening.
 */
export interface WorkflowStage {
  /** Who or what does this. Shown as a word, always, never colour alone. */
  actor: "system" | "model" | "rule" | "person";
  /** What happens, in the business's own language. */
  label: string;
  /** One line of detail. Why it is done this way, or what it costs. */
  detail?: string;
  /** What comes out and travels on. A file, a score, a list. */
  output?: string;
  /** Where it goes when this step cannot decide. The honest branch. */
  exception?: string;
}

/**
 * A workflow that plays itself.
 *
 * The `flow` figure is a project: how the thing got built, once. This is the
 * opposite and answers the question that actually decides whether a business
 * adopts anything, which is what happens on a Monday morning once it is live.
 *
 * It runs on its own when it scrolls into view, because the point is that a
 * reader who reads nothing else can watch it once and know what the guide is
 * about. That obliges the content to be self-contained: every stage has to make
 * sense without the surrounding prose.
 */
export interface WorkflowDiagram {
  kind: "workflow";
  title: string;
  caption?: string;
  /** What sets it off. "Every Monday, 07:00", or "The moment a quote is raised". */
  trigger: string;
  /** How long the automatic part takes, and what a person does to start it. */
  runtime?: string;
  /** Four to seven. Past that nobody watches it to the end. */
  stages: WorkflowStage[];
  /** Set when the last stage feeds the first. Drawn as a return arrow. */
  loop?: string;
  /** What the business is left holding. One sentence. */
  outcome: string;
}

export type Diagram =
  | WorkflowDiagram
  | {
      kind: "flow";
      title: string;
      /** One line under the figure. Say what to notice, not what it depicts. */
      caption?: string;
      steps: { label: string; note?: string; tone?: "input" | "model" | "output" }[];
    }
  | {
      kind: "matrix";
      title: string;
      caption?: string;
      lesson?: DiagramLesson;
      /** Row and column headings, e.g. what happened vs what we predicted. */
      rowLabel: string;
      colLabel: string;
      rows: [string, string];
      cols: [string, string];
      /** Exactly four, read left to right, top row first. */
      cells: [MatrixCell, MatrixCell, MatrixCell, MatrixCell];
    }
  | {
      kind: "bars";
      title: string;
      caption?: string;
      lesson?: DiagramLesson;
      /** Values are relative; the axis is deliberately unlabelled unless `unit`. */
      unit?: string;
      bars: { label: string; value: number; tone?: "accent" | "muted" | "good" | "bad" }[];
    }
  | {
      kind: "curve";
      title: string;
      caption?: string;
      xLabel: string;
      yLabel: string;
      /** Points are 0-100 in both axes; the renderer scales to the frame. */
      lesson?: DiagramLesson;
      /** What the figure shows BEFORE the reveal. When present, the reader gets
       *  a toggle and the chart actually changes rather than a caption saying
       *  it would. */
      naive?: { series: CurveSeries[]; notes?: PlotNote[] };
      series: CurveSeries[];      notes?: { x: number; y: number; text: string }[];
    }
  | {
      kind: "scatter";
      title: string;
      caption?: string;
      xLabel: string;
      yLabel: string;
      lesson?: DiagramLesson;
      /** The naive view: usually the same points with the distinction removed,
       *  which is exactly what sorting by one number looks like. */
      naive?: { groups: { name: string; points: [number, number][]; ring?: boolean }[]; notes?: PlotNote[] };
      /** Annotations pinned to the plot. Short: they point, they do not explain. */
      notes?: PlotNote[];
      /** Points are 0-100 in both axes. Three groups maximum: past three, the
       *  categorical palette cannot clear the all-pairs legibility floor. */
      groups: { name: string; points: [number, number][]; ring?: boolean }[];
    }
  | {
      kind: "tree";
      title: string;
      caption?: string;
      question: string;
      branches: {
        answer: string;
        outcome?: string;
        question?: string;
        sub?: { answer: string; outcome: string }[];
      }[];
    };

/** One line on a curve. A `band` carries its own lower edge so a range is a
 *  range rather than an area chart pretending to be one. */
export interface CurveSeries {
  name: string;
  points: [number, number][];
  dashed?: boolean;
  band?: { lower: [number, number][] };
}

export interface MatrixCell {
  label: string;
  note?: string;
  tone?: "good" | "bad" | "neutral";
}

/**
 * An end-to-end case study: one business problem carried from how it presents
 * to what changed, showing where AI or a model earns its place in the middle.
 *
 * Five stages on purpose. Most writing about AI in business skips straight from
 * the problem to the model, which is the part that matters least and the part a
 * business owner can do nothing with. The analysis and the rollout are where
 * these succeed or fail.
 *
 * Subject to the same honesty rule as `illustration` examples: the business is
 * constructed, so `impact` carries NO invented statistics. Describe the shape
 * of the change, not a percentage nobody measured.
 */
export interface CaseStudy {
  /** The business in a line. Constructed, never a real named company. */
  business: string;
  /** The problem in the owner's own words, before anybody has analysed it. */
  problem: string;
  /** How a BA breaks it down: what to look at, what to rule out, what to count. */
  analysis: string[];
  /** The AI or model approach, one stage at a time. */
  aiApproach: { step: string; detail: string }[];
  /** What actually gets put in front of people, and how it changes their day. */
  solution: string[];
  /** What changes for the business. Qualitative — see the honesty rule above. */
  impact: string[];
  /** What would have made this fail. Never publish a case study without one. */
  whatWouldHaveKilledIt: string;
}

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
  /**
   * One worked problem, end to end. Placed after the examples because it is the
   * same material at full length: a reader who only wants the mechanism stops
   * before it, and a reader who wants to see it done keeps going.
   */
  /**
   * Figures. Placed after the core concepts, because a diagram is worth more
   * once the reader has the vocabulary and is worth very little before it.
   */
  /**
   * The scannable layer. Rendered above everything else, because a reader who
   * only has a minute should get the whole lesson rather than the first
   * quarter of a long one.
   */
  brief?: GuideBrief;
  /** The six-stage animated sequence. Rendered under the brief. */
  story?: Story;
  /** A calculator the reader drives with their own figures. */
  calculator?: Calculator;
  diagrams?: Diagram[];
  caseStudy?: CaseStudy;
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

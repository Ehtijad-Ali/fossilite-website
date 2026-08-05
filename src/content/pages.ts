// ─────────────────────────────────────────────────────────────────────────────
// Head metadata for the fixed marketing routes.
//
// These pages had no title, description or canonical at all — every one of them
// served the bundle's default `<title>Fossilite AI</title>`, so five distinct
// pages were indistinguishable in search results and in link previews.
//
// It lives here rather than inside each view because the build-time
// prerenderer needs the same strings to bake into the static HTML, and two
// copies of a page description drift within a release or two.
// ─────────────────────────────────────────────────────────────────────────────

export interface PageMeta {
  /** Route path, exactly as registered in App.tsx. */
  path: string;
  /** <title> — aim for 50–60 characters. */
  title: string;
  /** <meta name="description"> — aim for 140–160 characters. */
  description: string;
}

export const PAGES: Record<string, PageMeta> = {
  home: {
    path: "/",
    title: "Fossilite — AI Systems Built to Survive Production",
    description:
      "We design and build AI systems for real operational load — agents, RAG and automation, architected by engineers and handed over with the code and the data.",
  },
  about: {
    path: "/about",
    title: "About Fossilite — Engineers First, AI Second",
    description:
      "How we work: map your operations, target the highest-friction work, architect before building, and prove the impact with numbers rather than adjectives.",
  },
  products: {
    path: "/products",
    title: "What We Build — AI Agents, RAG and Automation",
    description:
      "Production AI systems that connect to the stack you already run — OpenAI, Anthropic, Slack, GitHub, Notion and Google — built to survive real load.",
  },
  pricing: {
    path: "/pricing",
    title: "Pricing — AI Engagements from Pilot to Platform",
    description:
      "Three engagement tiers, from validating a first AI workflow to running several in production with a dedicated systems architect. No lock-in on code or data.",
  },
  contact: {
    path: "/contact",
    title: "Contact Fossilite — Talk to the Engineers",
    description:
      "Tell us what takes your team the most time and we'll say honestly whether AI helps. You own everything we deliver: code, data and models, fully documented.",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy — Fossilite",
    description:
      "How Fossilite collects, uses and protects personal data, and the rights you have over information we hold about you.",
  },
  terms: {
    path: "/terms",
    title: "Terms of Service — Fossilite",
    description:
      "The terms governing use of the Fossilite website and the services we provide, including scope, liability and intellectual property.",
  },
  cookies: {
    path: "/cookies",
    title: "Cookie Policy — Fossilite",
    description:
      "Which cookies the Fossilite website sets, what each one is for, and how to control them in your browser.",
  },
};

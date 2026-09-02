// SSR entry for scripts/prerender.mjs.
//
// Its only job is to expose the head metadata for every route as plain data,
// built from the same modules the app renders from. It imports no components,
// so bundling it costs nothing and it can't be broken by a rendering change.

import { activeCategories, categoryName, GUIDES } from "../src/content";
import { PAGES } from "../src/content/pages";
import { articleSchema, breadcrumbSchema, collectionSchema, faqSchema } from "../src/hooks/useSeo";

export interface PrerenderRoute {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  type?: "website" | "article";
  jsonLd?: object[];
}

const staticPages: PrerenderRoute[] = Object.values(PAGES).map((p) => ({
  path: p.path,
  title: p.title,
  description: p.description,
  jsonLd: p.path === "/" ? [] : [breadcrumbSchema([{ name: p.title, path: p.path }])],
}));

// These three mirror the strings their views pass to useSeo. They're duplicated
// rather than imported because importing the views would pull MUI, framer-motion
// and three.js into a build that only needs strings — if you change a title in
// the view, change it here.
const libraryTitle = "Resource Library: Free Guides on AI, Business & Skills";
const libraryDescription =
  "In-depth, free guides on artificial intelligence, machine learning, business and personal skills — written to teach, not to fill a page.";

const promptsTitle = "AI Prompt Library: ChatGPT, Claude & Gemini Prompts";
const promptsDescription =
  "A free library of tested prompts for ChatGPT, Claude and Gemini — each with what it does, when to use it, expected output and how to get better results.";

const collections: PrerenderRoute[] = [
  {
    path: "/resources",
    title: libraryTitle,
    description: libraryDescription,
    jsonLd: [
      collectionSchema(libraryTitle, libraryDescription, "/resources"),
      breadcrumbSchema([{ name: "Resources", path: "/resources" }]),
    ],
  },
  {
    // Kept in step with the sitemap by hand: this list and the sitemap's static
    // routes are separate, so a page added to one and not the other ships with
    // no baked title or preview card.
    path: "/resources/problems",
    title: "Start With the Problem | Fossilite Resource Library",
    description:
      "Find the guide by the problem you actually have. Cash tight while busy, customers leaving, forecasts always wrong, drowning in admin. Twelve common business problems, and what each one usually turns out to be.",
    jsonLd: [
      collectionSchema(
        "Start With the Problem",
        "Twelve common business problems, and the guides that address each one.",
        "/resources/problems",
      ),
      breadcrumbSchema([
        { name: "Resources", path: "/resources" },
        { name: "Start with the problem", path: "/resources/problems" },
      ]),
    ],
  },
  {
    path: "/prompts",
    title: promptsTitle,
    description: promptsDescription,
    jsonLd: [
      collectionSchema(
        "AI Prompt Library",
        "Tested prompts for ChatGPT, Claude and Gemini, with usage guidance for each.",
        "/prompts",
      ),
      breadcrumbSchema([{ name: "Prompts", path: "/prompts" }]),
    ],
  },
];

const categories: PrerenderRoute[] = activeCategories()
  .filter((c) => c.count > 0)
  .map((c) => {
    const path = `/resources/category/${c.slug}`;
    const title = `${c.name} Guides: Fossilite Resource Library`;
    const description = `${c.blurb} Free, in-depth guides with worked examples, exercises and checklists.`;
    return {
      path,
      title,
      description,
      jsonLd: [
        collectionSchema(title, description, path),
        breadcrumbSchema([
          { name: "Resources", path: "/resources" },
          { name: c.name, path },
        ]),
      ],
    };
  });

const guides: PrerenderRoute[] = GUIDES.map((g) => ({
  path: `/resources/${g.slug}`,
  title: g.seoTitle,
  description: g.metaDescription,
  keywords: g.keywords,
  type: "article" as const,
  jsonLd: [
    articleSchema(g),
    faqSchema(g.faqs),
    // Same trail GuideDetail emits at runtime, category rung included.
    breadcrumbSchema([
      { name: "Resources", path: "/resources" },
      { name: categoryName(g.category), path: `/resources/category/${g.category}` },
      { name: g.title, path: `/resources/${g.slug}` },
    ]),
  ],
}));

export const ROUTES: PrerenderRoute[] = [
  ...staticPages,
  ...collections,
  ...categories,
  ...guides,
];

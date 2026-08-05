import { useEffect } from "react";

import type { Author } from "../content/types";

// The canonical production origin. Guides are indexed against this regardless of
// which host serves the bundle, so canonical/OG URLs don't fragment across the
// GitHub Pages and Vercel deployments.
export const SITE_ORIGIN = "https://fossilite.ai";
const SITE_NAME = "Fossilite";

interface SeoOptions {
  title: string;
  description: string;
  /** Path only, e.g. "/resources/rag-explained". Origin is prepended. */
  path: string;
  /** Structured data objects. Rendered as one <script type="application/ld+json"> each. */
  jsonLd?: object[];
  type?: "website" | "article";
  keywords?: string[];
}

const upsertMeta = (selector: string, attrs: Record<string, string>) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
  return el;
};

const upsertLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
  return el;
};

/**
 * Manages document head for a route: title, description, canonical, Open Graph,
 * Twitter card and JSON-LD.
 *
 * Note on crawling: this is a client-rendered SPA, so the head is populated
 * after hydration. Google executes JS and picks this up; several other crawlers
 * and most social-preview scrapers do not. Pre-rendering the guide routes at
 * build time is the follow-up that makes this fully robust — see
 * docs/RESOURCE_LIBRARY.md.
 */
export const useSeo = ({
  title,
  description,
  path,
  jsonLd = [],
  type = "website",
  keywords,
}: SeoOptions) => {
  useEffect(() => {
    const url = `${SITE_ORIGIN}${path}`;

    document.title = title;
    upsertMeta('meta[name="description"]', { name: "description", content: description });
    if (keywords?.length) {
      upsertMeta('meta[name="keywords"]', { name: "keywords", content: keywords.join(", ") });
    }
    upsertLink("canonical", url);

    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: url });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: type });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: SITE_NAME });

    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });

    // Structured data is replaced wholesale on every route change — leaving a
    // previous page's Article schema behind is worse than having none.
    document.head
      .querySelectorAll('script[data-seo-jsonld="true"]')
      .forEach((n) => n.remove());
    jsonLd.forEach((obj) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.seoJsonld = "true";
      s.textContent = JSON.stringify(obj);
      document.head.appendChild(s);
    });

    return () => {
      document.head
        .querySelectorAll('script[data-seo-jsonld="true"]')
        .forEach((n) => n.remove());
    };
    // jsonLd is an inline array at every call site, so serialise it for the
    // dependency comparison rather than re-running on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, type, JSON.stringify(jsonLd), keywords?.join(",")]);
};

// ─── Schema builders ─────────────────────────────────────────────────────────

export const articleSchema = (g: {
  title: string;
  metaDescription: string;
  slug: string;
  updated: string;
  author: Author;
  keywords: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: g.title,
  description: g.metaDescription,
  datePublished: g.updated,
  dateModified: g.updated,
  // Person, not Organization. Google's guidance on people-first content asks
  // who wrote a piece, and a company name is not an answer to that. Optional
  // fields are dropped rather than emitted empty — a blank jobTitle in the
  // markup is worse than no jobTitle.
  author: {
    "@type": "Person",
    name: g.author.name,
    ...(g.author.role ? { jobTitle: g.author.role } : {}),
    ...(g.author.bio ? { description: g.author.bio } : {}),
    ...(g.author.url ? { url: g.author.url } : {}),
  },
  publisher: { "@type": "Organization", name: SITE_NAME },
  keywords: g.keywords.join(", "),
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_ORIGIN}/resources/${g.slug}`,
  },
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const breadcrumbSchema = (trail: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.name,
    item: `${SITE_ORIGIN}${t.path}`,
  })),
});

export const collectionSchema = (name: string, description: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name,
  description,
  url: `${SITE_ORIGIN}${path}`,
});

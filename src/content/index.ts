import type { Guide } from "./types";
import { CATEGORIES, categoryBySlug } from "./categories";

// Every file in ./guides is picked up automatically — adding a guide means
// adding one file, with no registry to remember to update.
//
// SCALING NOTE: this glob is eager, so the whole library ships in the Resources
// chunk. That's the right trade at the current library size (a few hundred KB,
// loaded once, on a route that is already lazy). Past roughly 30 guides it stops
// being reasonable and should move to `{ eager: false }` for guide bodies plus a
// build-generated manifest holding only the listing fields. See
// docs/RESOURCE_LIBRARY.md for the migration.
const modules = import.meta.glob<{ default: Guide }>("./guides/*.ts", {
  eager: true,
});

export const GUIDES: Guide[] = Object.values(modules)
  .map((m) => m.default)
  .sort((a, b) => b.updated.localeCompare(a.updated));

const BY_SLUG = new Map(GUIDES.map((g) => [g.slug, g]));

/**
 * The catalogue number printed on a guide's specimen plate.
 *
 * It has to be stable and unique. "PL." reads as a catalogue reference, and a
 * reference that renumbers itself when the reader filters the list is not one.
 * The card used to print its position in the current view, which meant the same
 * guide showed a different number on every filter and never agreed with the
 * number drawn into its own artwork.
 *
 * Assigned from the slugs sorted alphabetically rather than from GUIDES, which
 * is ordered by `updated` and so reshuffles every time anything is edited.
 * Three digits because there are more guides than two digits can hold, and the
 * old hash squeezed 131 of them into 99 slots: 37 numbers were shared, and five
 * guides at worst wore the same one.
 */
const PLATE_NUMBERS = new Map(
  GUIDES.map((g) => g.slug)
    .sort()
    .map((slug, i) => [slug, String(i + 1).padStart(3, "0")] as const),
);

export const plateNumber = (slug: string): string => PLATE_NUMBERS.get(slug) ?? "000";

export const guideBySlug = (slug: string): Guide | undefined => BY_SLUG.get(slug);

export const isPublished = (slug: string): boolean => BY_SLUG.has(slug);

/**
 * Related guides, resolved and filtered to what's actually published.
 * Authors reference planned guides by slug before they exist; unresolved slugs
 * are dropped rather than rendered as dead links. Falls back to same-category
 * guides so a card row is never sparse.
 */
export const relatedFor = (guide: Guide, limit = 3): Guide[] => {
  const picked = guide.relatedGuides
    .map((s) => BY_SLUG.get(s))
    .filter((g): g is Guide => !!g && g.slug !== guide.slug);

  if (picked.length >= limit) return picked.slice(0, limit);

  const seen = new Set(picked.map((g) => g.slug));
  const filler = GUIDES.filter(
    (g) => g.slug !== guide.slug && !seen.has(g.slug) && g.category === guide.category,
  );
  const anything = GUIDES.filter((g) => g.slug !== guide.slug && !seen.has(g.slug));

  return [...picked, ...filler, ...anything].slice(0, limit);
};

/** Internal links, filtered to published targets only. */
export const resolvedInternalLinks = (guide: Guide) =>
  (guide.internalLinks ?? []).filter((l) => BY_SLUG.has(l.slug));

/** Categories that actually hold published guides, with their counts. */
export const activeCategories = () =>
  CATEGORIES.map((c) => ({
    ...c,
    count: GUIDES.filter((g) => g.category === c.slug).length,
  })).filter((c) => c.count > 0);

export const guidesInCategory = (slug: string): Guide[] =>
  GUIDES.filter((g) => g.category === slug);

/**
 * Substring search across the fields a reader would plausibly search by.
 * Deliberately simple — at library scale this stays instant, and a fuzzy
 * matcher would surface confusing near-misses on technical terms.
 */
export const searchGuides = (query: string, pool: Guide[] = GUIDES): Guide[] => {
  const q = query.trim().toLowerCase();
  if (!q) return pool;
  return pool.filter((g) => {
    const haystack = [
      g.title,
      g.metaDescription,
      g.keywords.join(" "),
      categoryBySlug(g.category)?.name ?? "",
      g.intro[0] ?? "",
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
};

export * from "./types";
export * from "./categories";
export { PROMPTS, promptsForTopic, PROMPT_TOPICS } from "./prompts";
export { PROBLEMS } from "./problems";
export type { BusinessProblem } from "./problems";

// ─────────────────────────────────────────────────────────────────────────────
// Bylines.
//
// One object per real person, imported by the guides they wrote. Guides used to
// carry an inline "Fossilite" string each, which is how you end up with 36
// copies of a fact that should exist once.
//
// Nothing in here may be invented. The author block is published as `Person`
// structured data, so it is a claim to readers and to search engines about who
// stands behind the work — an unverifiable byline costs more credibility than
// it buys. `role`, `bio` and `url` are optional precisely so that an unconfirmed
// field can be left out rather than filled in with something plausible.
// ─────────────────────────────────────────────────────────────────────────────

import type { Author } from "./types";

export const PETER_NGUYEN: Author = {
  name: "Peter Nguyen",
  // TODO: add `role` and `bio` here and they appear on all 36 guides and in
  // every Article schema. The author block at the end of each guide stays
  // hidden until there's a bio. Suggested shape:
  //   role: "Founder, Fossilite AI",
  //   bio:  "One or two sentences on the work behind these guides.",
  //   url:  "https://www.linkedin.com/in/…",
};

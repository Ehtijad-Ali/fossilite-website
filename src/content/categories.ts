import type { Category, Track } from "./types";

// The full library taxonomy. Categories exist here from day one even before
// they hold published guides — the index only renders categories that do, so an
// empty category never becomes a thin page for a crawler to punish us for.
export const CATEGORIES: Category[] = [
  // ── AI & Engineering ──────────────────────────────────────────────────────
  { slug: "artificial-intelligence", name: "Artificial Intelligence", track: "AI & Engineering", blurb: "What AI actually is, what it isn't, and how to reason about it without the hype." },
  { slug: "machine-learning", name: "Machine Learning", track: "AI & Engineering", blurb: "How machines learn patterns from data: the concepts that survive every framework change." },
  { slug: "deep-learning", name: "Deep Learning", track: "AI & Engineering", blurb: "Neural networks from first principles: layers, gradients, and why depth helps." },
  { slug: "large-language-models", name: "Large Language Models", track: "AI & Engineering", blurb: "Tokens, context windows, and what a language model can and cannot know." },
  { slug: "prompt-engineering", name: "Prompt Engineering", track: "AI & Engineering", blurb: "Getting reliable output from models you don't control: a real engineering discipline." },
  { slug: "python", name: "Python", track: "AI & Engineering", blurb: "The language of modern data work, taught for people who need it to build things." },
  { slug: "data-science", name: "Data Science", track: "AI & Engineering", blurb: "Turning messy data into decisions people actually trust." },
  { slug: "automation", name: "Automation", track: "AI & Engineering", blurb: "Removing repeated work from your week without creating a fragile mess." },
  { slug: "no-code-tools", name: "No-Code Tools", track: "AI & Engineering", blurb: "Shipping working software before you can write a line of code." },
  { slug: "web-development", name: "Web Development", track: "AI & Engineering", blurb: "The stack behind every product you use, explained in build order." },
  { slug: "api-integration", name: "API Integration", track: "AI & Engineering", blurb: "Making two systems talk reliably: including when one of them fails." },
  { slug: "ui-ux", name: "UI / UX", track: "AI & Engineering", blurb: "Designing interfaces people understand without being told how." },
  { slug: "cybersecurity-basics", name: "Cybersecurity Basics", track: "AI & Engineering", blurb: "The defensive fundamentals every builder and business owner needs." },

  // ── Business & Growth ─────────────────────────────────────────────────────
  { slug: "business-analysis", name: "Business Analysis", track: "Business & Growth", blurb: "Working out what a business actually needs before anyone builds anything." },
  { slug: "requirements", name: "Requirements & Process", track: "Business & Growth", blurb: "Turning how work really happens into something a team can build against." },
  { slug: "business-strategy", name: "Business Strategy", track: "Business & Growth", blurb: "Choosing what to do, and what to deliberately not do." },
  { slug: "entrepreneurship", name: "Entrepreneurship", track: "Business & Growth", blurb: "Starting something real, with the smallest possible bet up front." },
  { slug: "marketing", name: "Marketing", track: "Business & Growth", blurb: "Getting the right people to find you and understand you fast." },
  { slug: "sales", name: "Sales", track: "Business & Growth", blurb: "Conversations that end in a decision: without pressure tactics." },
  { slug: "freelancing", name: "Freelancing", track: "Business & Growth", blurb: "Trading skill for income on your own terms, sustainably." },
  { slug: "personal-branding", name: "Personal Branding", track: "Business & Growth", blurb: "Becoming known for something specific, by the people who matter." },
  { slug: "startup-growth", name: "Startup Growth", track: "Business & Growth", blurb: "Finding a repeatable channel before you spend money scaling it." },
  { slug: "saas", name: "SaaS", track: "Business & Growth", blurb: "The economics and mechanics of software sold as a subscription." },
  { slug: "finance-basics", name: "Finance Basics", track: "Business & Growth", blurb: "Reading the numbers that decide whether you survive." },
  { slug: "customer-support", name: "Customer Support", track: "Business & Growth", blurb: "Answering customers well at volume, without losing the thread that keeps them." },
  { slug: "people-and-hiring", name: "People & Hiring", track: "Business & Growth", blurb: "Finding, choosing and keeping the people your business depends on." },

  // ── Life & Career ─────────────────────────────────────────────────────────
  { slug: "productivity", name: "Productivity", track: "Life & Career", blurb: "Getting meaningful work done without burning yourself out." },
  { slug: "time-management", name: "Time Management", track: "Life & Career", blurb: "Spending your hours on what actually moves your life forward." },
  { slug: "communication", name: "Communication", track: "Life & Career", blurb: "Being understood the first time, in writing and in person." },
  { slug: "leadership", name: "Leadership", track: "Life & Career", blurb: "Getting good outcomes through other people, without authority games." },
  { slug: "critical-thinking", name: "Critical Thinking", track: "Life & Career", blurb: "Reasoning clearly when the evidence is incomplete and the stakes are real." },
  { slug: "career-development", name: "Career Development", track: "Life & Career", blurb: "Building leverage over a decade, not just chasing the next title." },
];

export const TRACKS: Track[] = ["AI & Engineering", "Business & Growth", "Life & Career"];

export const categoryBySlug = (slug: string): Category | undefined =>
  CATEGORIES.find((c) => c.slug === slug);

export const categoryName = (slug: string): string =>
  categoryBySlug(slug)?.name ?? slug;

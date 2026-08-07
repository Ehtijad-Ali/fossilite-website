// ─────────────────────────────────────────────────────────────────────────────
// Seed data for the six system mockups.
//
// Everything visible in the mockups is derived from here rather than written
// into the markup: column counts, the onboarding percentage, the invoice
// totals, the chart geometry. That's what lets the panels actually respond
// when someone clicks a lead, completes a step or settles an invoice.
// ─────────────────────────────────────────────────────────────────────────────

export type Accent = "blue" | "orange" | "teal" | "purple" | "green";

export interface AccentSet {
  /** Main accent, used for the eyebrow, rule and card glow. */
  main: string;
  /** Softer tint for fills behind the accent. */
  soft: string;
}

export const ACCENTS: Record<Accent, AccentSet> = {
  blue: { main: "#3B82F6", soft: "rgba(59,130,246,0.14)" },
  orange: { main: "#F5A524", soft: "rgba(245,165,36,0.14)" },
  teal: { main: "#2DD4BF", soft: "rgba(45,212,191,0.14)" },
  purple: { main: "#8B5CF6", soft: "rgba(139,92,246,0.14)" },
  green: { main: "#4ADE80", soft: "rgba(74,222,128,0.14)" },
};

// ── 01 Lead CRM ──────────────────────────────────────────────────────────────

export const LEAD_STAGES = ["NEW", "CONTACTED", "QUALIFIED", "WON"] as const;
export type LeadStage = (typeof LEAD_STAGES)[number];

/** Dot colour per column header, matching the mockup. */
export const STAGE_DOT: Record<LeadStage, string> = {
  NEW: "#3B82F6",
  CONTACTED: "#F5A524",
  QUALIFIED: "#22C55E",
  WON: "#A855F7",
};

export interface Lead {
  id: string;
  name: string;
  segment: string;
  value: string;
  stage: LeadStage;
}

export const LEADS: Lead[] = [
  { id: "l1", name: "Ivy Cole", segment: "Fintech · Inbound", value: "$2.4k/mo", stage: "NEW" },
  { id: "l2", name: "Zora Lin", segment: "Fintech · Inbound", value: "$3.7k/mo", stage: "NEW" },
  { id: "l3", name: "Zora Lin", segment: "Fintech · Inbound", value: "$980/mo", stage: "NEW" },
  { id: "l4", name: "Kai Owens", segment: "E-com · Growth", value: "$980/mo", stage: "NEW" },
  { id: "l5", name: "Nora Diaz", segment: "SaaS · Series A", value: "$980/mo", stage: "NEW" },
  { id: "l6", name: "Nora Diaz", segment: "Agency · Referral", value: "$2.4k/mo", stage: "NEW" },

  { id: "l7", name: "Théo Marsh", segment: "E-com · Growth", value: "$3.7k/mo", stage: "CONTACTED" },
  { id: "l8", name: "Aria Patel", segment: "SaaS · Series A", value: "$2.4k/mo", stage: "CONTACTED" },
  { id: "l9", name: "Théo Marsh", segment: "SaaS · Series A", value: "$6.1k/mo", stage: "CONTACTED" },
  { id: "l10", name: "Aria Patel", segment: "SaaS · Series A", value: "$3.7k/mo", stage: "CONTACTED" },
  { id: "l11", name: "Ivy Cole", segment: "SaaS · Series A", value: "$6.1k/mo", stage: "CONTACTED" },
  { id: "l12", name: "Milo Chen", segment: "Fintech · Inbound", value: "$2.4k/mo", stage: "CONTACTED" },

  { id: "l13", name: "Milo Chen", segment: "E-com · Growth", value: "$980/mo", stage: "QUALIFIED" },
  { id: "l14", name: "Zora Lin", segment: "Agency · Referral", value: "$2.4k/mo", stage: "QUALIFIED" },
  { id: "l15", name: "Remy Okoye", segment: "Agency · Referral", value: "$3.7k/mo", stage: "QUALIFIED" },
  { id: "l16", name: "Ivy Cole", segment: "Fintech · Inbound", value: "$2.4k/mo", stage: "QUALIFIED" },
  { id: "l17", name: "Zora Lin", segment: "E-com · Growth", value: "$980/mo", stage: "QUALIFIED" },

  { id: "l18", name: "Nora Diaz", segment: "Fintech · Inbound", value: "$3.7k/mo", stage: "WON" },
  { id: "l19", name: "Zora Lin", segment: "Fintech · Inbound", value: "$6.1k/mo", stage: "WON" },
  { id: "l20", name: "Remy Okoye", segment: "E-com · Growth", value: "$6.1k/mo", stage: "WON" },
  { id: "l21", name: "Aria Patel", segment: "SaaS · Series A", value: "$980/mo", stage: "WON" },
];

/**
 * Header badge counts. The mockup shows 24 / 34 / 18 / 12 against far fewer
 * visible cards, which is how a real board behaves: the column is paginated.
 * These are the offsets between what's rendered and what's counted, so moving
 * a card still changes the badge by exactly one.
 */
export const LEAD_BACKLOG: Record<LeadStage, number> = {
  NEW: 18,
  CONTACTED: 28,
  QUALIFIED: 13,
  WON: 8,
};

// ── 02 Automated Onboarding ──────────────────────────────────────────────────

export interface OnboardingStep {
  id: string;
  label: string;
  done: boolean;
}

export const ONBOARDING_STEPS: OnboardingStep[] = [
  { id: "o1", label: "Welcome email sent", done: true },
  { id: "o2", label: "Contract signed", done: true },
  { id: "o3", label: "Kickoff call scheduled", done: true },
  { id: "o4", label: "Access & tools provisioned", done: true },
  { id: "o5", label: "Brand assets collected", done: false },
  { id: "o6", label: "Go-live checklist", done: false },
];

// ── 03 Projects & Tasks ──────────────────────────────────────────────────────

export const TASK_COLUMNS = ["TO DO", "IN PROGRESS", "DONE"] as const;
export type TaskColumn = (typeof TASK_COLUMNS)[number];

export const TASK_TINT: Record<TaskColumn, string> = {
  "TO DO": "#6366F1",
  "IN PROGRESS": "#F5A524",
  DONE: "#22C55E",
};

export const TASK_DOT: Record<TaskColumn, string> = {
  "TO DO": "#3B82F6",
  "IN PROGRESS": "#F5A524",
  DONE: "#22C55E",
};

export interface Task {
  id: string;
  title: string;
  column: TaskColumn;
}

export const TASKS: Task[] = [
  { id: "t1", title: "Design landing hero", column: "TO DO" },
  { id: "t2", title: "Client asset review", column: "TO DO" },
  { id: "t3", title: "Update SOP doc", column: "TO DO" },
  { id: "t4", title: "Payment gateway fix", column: "IN PROGRESS" },
  { id: "t5", title: "Onboarding flow v2", column: "IN PROGRESS" },
  { id: "t6", title: "QA pass, mobile", column: "IN PROGRESS" },
  { id: "t7", title: "Invoice automation", column: "DONE" },
  { id: "t8", title: "KPI dashboard v1", column: "DONE" },
];

// ── 04 Invoicing & Payments ──────────────────────────────────────────────────

export type InvoiceState = "PAID" | "PENDING" | "OVERDUE";

export const INVOICE_COLOR: Record<InvoiceState, string> = {
  PAID: "#22C55E",
  PENDING: "#F5A524",
  OVERDUE: "#EF4444",
};

export interface Invoice {
  id: string;
  client: string;
  amount: number;
  state: InvoiceState;
}

export const INVOICES: Invoice[] = [
  { id: "INV-2041", client: "Horizon Retail", amount: 4200, state: "PAID" },
  { id: "INV-2042", client: "Nimbus Cloud", amount: 6800, state: "OVERDUE" },
  { id: "INV-2043", client: "BrightPath Co", amount: 2150, state: "PENDING" },
  { id: "INV-2044", client: "Verve Studio", amount: 9400, state: "PAID" },
  { id: "INV-2045", client: "Atlas Fitness", amount: 3300, state: "OVERDUE" },
];

/**
 * The three headline tiles show the whole month, of which the five listed
 * invoices are the recent slice. These are the rest of the month's book, so
 * settling a listed invoice moves the totals by that invoice's own amount.
 */
export const INVOICE_BASE: Record<InvoiceState, number> = {
  PAID: 47800,
  PENDING: 12050,
  OVERDUE: -1450,
};

// ── 05 SOP Library ───────────────────────────────────────────────────────────

export interface SopCategory {
  name: string;
  count: number;
  color: string;
}

export const SOP_CATEGORIES: SopCategory[] = [
  { name: "Sales & CRM", count: 8, color: "#3B82F6" },
  { name: "Client Onboarding", count: 6, color: "#F5A524" },
  { name: "Project Delivery", count: 9, color: "#22C55E" },
  { name: "Finance & Invoicing", count: 5, color: "#8B5CF6" },
  { name: "Marketing", count: 7, color: "#EC4899" },
  { name: "Internal Ops", count: 7, color: "#22D3EE" },
];

// ── 06 KPI Dashboard ─────────────────────────────────────────────────────────

export interface Kpi {
  label: string;
  value: string;
  delta: string;
  good: boolean;
}

export const KPIS: Kpi[] = [
  { label: "REVENUE", value: "$142.8k", delta: "+18%", good: true },
  { label: "NEW CLIENTS", value: "36", delta: "+9%", good: true },
  { label: "CHURN", value: "2.1%", delta: "-0.4%", good: true },
  { label: "AVG DEAL", value: "$3.9k", delta: "+5%", good: true },
];

/** Revenue trend, normalised 0-1. Rises with a dip two thirds through. */
export const REVENUE_TREND = [0.06, 0.28, 0.24, 0.46, 0.62, 0.55, 0.8, 0.95];

/** Deals by stage, normalised 0-1, matching the four pipeline stages. */
export const DEALS_BY_STAGE = [
  { label: "New", v: 0.66 },
  { label: "Contact", v: 1.0 },
  { label: "Qualify", v: 0.52 },
  { label: "Won", v: 0.36 },
];

// ── Section copy ─────────────────────────────────────────────────────────────

export interface SystemMeta {
  n: number;
  title: string;
  /** Rendered on its own line under the title. */
  titleLine2?: string;
  fix: string;
  accent: Accent;
  caption: string;
}

export const SYSTEMS: SystemMeta[] = [
  {
    n: 1,
    title: "Lead",
    titleLine2: "CRM",
    fix: "Stops the leaks",
    accent: "blue",
    caption:
      "Stops leads slipping through the cracks. The cheapest revenue is the one you already almost had.",
  },
  {
    n: 2,
    title: "Automated",
    titleLine2: "Onboarding",
    fix: "Zero manual setup",
    accent: "orange",
    caption:
      "Replaces the coordinator role: new clients get a smooth start without you doing it manually each time.",
  },
  {
    n: 3,
    title: "Projects &",
    titleLine2: "Tasks Board",
    fix: "Total visibility",
    accent: "blue",
    caption: "Replaces status meetings. Everyone can see what's happening without asking.",
  },
  {
    n: 4,
    title: "Invoicing &",
    titleLine2: "Payments",
    fix: "Catches every leak",
    accent: "teal",
    caption:
      "Catches overdue invoices before they're forgotten. This is where money quietly leaks.",
  },
  {
    n: 5,
    title: "SOP",
    titleLine2: "Library",
    fix: "Write once, scale forever",
    accent: "purple",
    caption:
      "Write it once, stop re-explaining it forever. The difference between a business and a job.",
  },
  {
    n: 6,
    title: "KPI",
    titleLine2: "Dashboard",
    fix: "Decisions in seconds",
    accent: "green",
    caption: "Replaces 'let me check and get back to you'. Decisions on data, in seconds.",
  },
];

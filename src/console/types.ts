// ─────────────────────────────────────────────────────────────────────────────
// Business Operating System: domain model.
//
// These types are the contract between the UI and whatever eventually serves
// the data. They are written as they would come off a REST or GraphQL
// endpoint (ids, ISO dates, foreign keys by id) rather than as convenient view
// models, so replacing the mock layer in `api.ts` with real calls does not
// change a single component.
// ─────────────────────────────────────────────────────────────────────────────

export type Id = string;
/** ISO-8601 date, e.g. "2026-08-04". */
export type IsoDate = string;

// ── Lead CRM ─────────────────────────────────────────────────────────────────

export const LEAD_STAGES = ["New", "Contacted", "Qualified", "Won"] as const;
export type LeadStage = (typeof LEAD_STAGES)[number];

export type LeadSource = "Inbound" | "Referral" | "Outbound" | "Partner" | "Event";

export interface Lead {
  id: Id;
  name: string;
  company: string;
  industry: string;
  source: LeadSource;
  /** Monthly recurring value in whole currency units. */
  valueMrr: number;
  stage: LeadStage;
  owner: string;
  email: string;
  createdAt: IsoDate;
  lastTouchedAt: IsoDate;
  notes: string;
  /** Set once the lead is won and onboarding is opened. */
  clientId?: Id;
}

// ── Onboarding ───────────────────────────────────────────────────────────────

export interface OnboardingStep {
  id: Id;
  label: string;
  done: boolean;
  /** Who owns the step. Useful once this is wired to real assignments. */
  owner: string;
  completedAt?: IsoDate;
}

export type OnboardingStatus = "Not started" | "In progress" | "Blocked" | "Live";

export interface Onboarding {
  id: Id;
  clientId: Id;
  client: string;
  /** Traces back to the lead this came from, which is the flow's first link. */
  leadId?: Id;
  status: OnboardingStatus;
  startedAt: IsoDate;
  targetGoLive: IsoDate;
  steps: OnboardingStep[];
}

/** The standard workflow every new client runs through. */
export const ONBOARDING_TEMPLATE: { label: string; owner: string }[] = [
  { label: "Welcome email sent", owner: "Ops" },
  { label: "Contract signed", owner: "Sales" },
  { label: "Kickoff call scheduled", owner: "Delivery" },
  { label: "Access & tools provisioned", owner: "Ops" },
  { label: "Brand assets collected", owner: "Delivery" },
  { label: "Go-live checklist", owner: "Delivery" },
];

// ── Projects & Tasks ─────────────────────────────────────────────────────────

export const TASK_COLUMNS = ["To Do", "In Progress", "Done"] as const;
export type TaskColumn = (typeof TASK_COLUMNS)[number];

export type Priority = "Low" | "Medium" | "High";

export interface Project {
  id: Id;
  name: string;
  clientId: Id;
  client: string;
  /** Traces back to the onboarding that opened it. */
  onboardingId?: Id;
  startedAt: IsoDate;
}

export interface Task {
  id: Id;
  title: string;
  projectId: Id;
  client: string;
  assignee: string;
  column: TaskColumn;
  priority: Priority;
  dueDate: IsoDate;
  description: string;
}

// ── Invoicing & Payments ─────────────────────────────────────────────────────

export type InvoiceStatus = "Paid" | "Pending" | "Overdue";

export interface Invoice {
  id: Id;
  /** Human-facing number, e.g. "INV-2041". */
  number: string;
  clientId: Id;
  client: string;
  projectId?: Id;
  amount: number;
  status: InvoiceStatus;
  issuedAt: IsoDate;
  dueAt: IsoDate;
  paidAt?: IsoDate;
  lines: { description: string; qty: number; unit: number }[];
}

// ── SOP Library ──────────────────────────────────────────────────────────────

export type SopCategory =
  | "Sales & CRM"
  | "Client Onboarding"
  | "Project Delivery"
  | "Finance & Invoicing"
  | "Marketing"
  | "Internal Operations";

export const SOP_CATEGORIES: SopCategory[] = [
  "Sales & CRM",
  "Client Onboarding",
  "Project Delivery",
  "Finance & Invoicing",
  "Marketing",
  "Internal Operations",
];

export interface Sop {
  id: Id;
  title: string;
  category: SopCategory;
  owner: string;
  updatedAt: IsoDate;
  readMinutes: number;
  summary: string;
  /** Body as plain paragraphs. Markdown once there is a real editor. */
  body: string[];
}

// ── KPI ──────────────────────────────────────────────────────────────────────

export type Period = "30d" | "90d" | "12m";

export interface KpiSnapshot {
  period: Period;
  revenue: number;
  newClients: number;
  churnPct: number;
  avgDeal: number;
  /** Percentage change against the previous comparable period. */
  deltas: { revenue: number; newClients: number; churnPct: number; avgDeal: number };
  /** Revenue by bucket. Length varies with period. */
  trend: { label: string; value: number }[];
}

// ── Activity ─────────────────────────────────────────────────────────────────

/**
 * Every cross-system action appends one of these. It is what makes the flow
 * legible: a lead being won and an invoice being raised land in the same
 * stream, in order.
 */
export interface ActivityEntry {
  id: Id;
  at: number;
  system: "Lead CRM" | "Onboarding" | "Projects" | "Invoicing" | "SOP Library" | "KPI";
  message: string;
}

// ── Aggregate ────────────────────────────────────────────────────────────────

/** One request's worth of workspace state. Mirrors what a `GET /workspace` would return. */
export interface Workspace {
  leads: Lead[];
  onboardings: Onboarding[];
  projects: Project[];
  tasks: Task[];
  invoices: Invoice[];
  sops: Sop[];
  activity: ActivityEntry[];
}

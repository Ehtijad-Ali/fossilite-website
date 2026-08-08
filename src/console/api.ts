// ─────────────────────────────────────────────────────────────────────────────
// The API boundary.
//
// Every function here is async and returns what a real endpoint would return.
// The UI never touches `seed.ts` and never mutates state directly, so wiring a
// backend is a matter of replacing the bodies below with fetch calls. The
// signatures, the types and the components stay as they are.
//
// The commented endpoint above each function is the route it is standing in
// for. Latency is simulated so loading states are exercised in the POC rather
// than discovered later.
// ─────────────────────────────────────────────────────────────────────────────

import { seedWorkspace } from "./seed";
import {
  ActivityEntry,
  Id,
  Invoice,
  KpiSnapshot,
  Lead,
  LeadStage,
  ONBOARDING_TEMPLATE,
  Onboarding,
  Period,
  Project,
  Task,
  TaskColumn,
  Workspace,
} from "./types";

const LATENCY = 260;
const wait = <T,>(value: T, ms = LATENCY): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

const STORAGE_KEY = "fossilite.console.workspace.v1";

/**
 * Local persistence stands in for the database so a POC session survives a
 * refresh. `resetWorkspace` puts it back to the seed.
 */
const load = (): Workspace => {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as Workspace;
  } catch {
    /* fall through to seed */
  }
  return seedWorkspace();
};

let db: Workspace = load();

const persist = () => {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(db));
  } catch {
    /* storage unavailable; POC continues in memory */
  }
};

const logActivity = (system: ActivityEntry["system"], message: string) => {
  db.activity = [
    { id: `A-${Date.now()}`, at: Date.now(), system, message },
    ...db.activity,
  ].slice(0, 40);
};

const clone = <T,>(v: T): T => JSON.parse(JSON.stringify(v));
const today = () => new Date().toISOString().slice(0, 10);
const addDays = (days: number) => new Date(Date.now() + days * 864e5).toISOString().slice(0, 10);

// ── Workspace ────────────────────────────────────────────────────────────────

/** GET /workspace */
export const getWorkspace = () => wait(clone(db));

/** POST /workspace/reset — POC only. */
export const resetWorkspace = () => {
  db = seedWorkspace();
  persist();
  return wait(clone(db));
};

// ── Leads ────────────────────────────────────────────────────────────────────

/** PATCH /leads/:id { stage } */
export const setLeadStage = (id: Id, stage: LeadStage) => {
  const lead = db.leads.find((l) => l.id === id);
  if (lead && lead.stage !== stage) {
    lead.stage = stage;
    lead.lastTouchedAt = today();
    logActivity("Lead CRM", `${lead.company} moved to ${stage}`);
  }
  persist();
  return wait(clone(db));
};

/**
 * POST /leads/:id/convert
 *
 * The first link in the chain. Winning a lead opens an onboarding from the
 * standard template, which is what makes the six systems one flow rather than
 * six screens.
 */
export const convertLeadToClient = (id: Id) => {
  const lead = db.leads.find((l) => l.id === id);
  if (lead && !lead.clientId) {
    const clientId = `C-${String(db.onboardings.length + 1).padStart(2, "0")}`;
    lead.clientId = clientId;
    lead.stage = "Won";
    lead.lastTouchedAt = today();

    const onboarding: Onboarding = {
      id: `O-${String(db.onboardings.length + 1).padStart(2, "0")}`,
      clientId,
      client: lead.company,
      leadId: lead.id,
      status: "In progress",
      startedAt: today(),
      targetGoLive: addDays(30),
      steps: ONBOARDING_TEMPLATE.map((s, i) => ({
        id: `s${i}`,
        label: s.label,
        owner: s.owner,
        done: i === 0,
        completedAt: i === 0 ? today() : undefined,
      })),
    };
    db.onboardings = [onboarding, ...db.onboardings];
    logActivity("Lead CRM", `${lead.company} won, onboarding opened`);
  }
  persist();
  return wait(clone(db));
};

// ── Onboarding ───────────────────────────────────────────────────────────────

/** PATCH /onboardings/:id/steps/:stepId { done } */
export const setOnboardingStep = (id: Id, stepId: Id, done: boolean) => {
  const ob = db.onboardings.find((o) => o.id === id);
  const st = ob?.steps.find((s) => s.id === stepId);
  if (ob && st) {
    st.done = done;
    st.completedAt = done ? today() : undefined;
    const all = ob.steps.every((s) => s.done);
    ob.status = all ? "Live" : ob.status === "Live" ? "In progress" : ob.status;
    logActivity("Onboarding", `${ob.client}: ${st.label} ${done ? "completed" : "reopened"}`);
    if (all) logActivity("Onboarding", `${ob.client} went live`);
  }
  persist();
  return wait(clone(db));
};

/**
 * POST /onboardings/:id/project
 *
 * The second link: a completed onboarding opens the delivery project.
 */
export const createProjectFromOnboarding = (id: Id, name: string) => {
  const ob = db.onboardings.find((o) => o.id === id);
  if (ob && !db.projects.some((p) => p.onboardingId === id)) {
    const project: Project = {
      id: `P-${String(db.projects.length + 1).padStart(2, "0")}`,
      name,
      clientId: ob.clientId,
      client: ob.client,
      onboardingId: ob.id,
      startedAt: today(),
    };
    db.projects = [project, ...db.projects];
    logActivity("Projects", `Project opened for ${ob.client}: ${name}`);
  }
  persist();
  return wait(clone(db));
};

// ── Tasks ────────────────────────────────────────────────────────────────────

/** PATCH /tasks/:id { column } */
export const setTaskColumn = (id: Id, column: TaskColumn) => {
  const task = db.tasks.find((t) => t.id === id);
  if (task && task.column !== column) {
    task.column = column;
    logActivity("Projects", `${task.title} moved to ${column}`);
  }
  persist();
  return wait(clone(db));
};

/** POST /tasks */
export const createTask = (task: Omit<Task, "id">) => {
  const created: Task = { ...task, id: `T-${Date.now()}` };
  db.tasks = [created, ...db.tasks];
  logActivity("Projects", `Task created: ${created.title}`);
  persist();
  return wait(clone(db));
};

// ── Invoices ─────────────────────────────────────────────────────────────────

/** PATCH /invoices/:id { status: "Paid" } */
export const markInvoicePaid = (id: Id) => {
  const inv = db.invoices.find((i) => i.id === id);
  if (inv && inv.status !== "Paid") {
    inv.status = "Paid";
    inv.paidAt = today();
    logActivity("Invoicing", `${inv.number} marked paid for ${inv.client}`);
  }
  persist();
  return wait(clone(db));
};

/**
 * POST /projects/:id/invoice
 *
 * The third link: delivered work raises an invoice against the project.
 */
export const createInvoiceForProject = (projectId: Id, amount: number, description: string) => {
  const project = db.projects.find((p) => p.id === projectId);
  if (project) {
    const n = 2046 + db.invoices.filter((i) => i.number.startsWith("INV-")).length - 5;
    const invoice: Invoice = {
      id: `I-${Date.now()}`,
      number: `INV-${n}`,
      clientId: project.clientId,
      client: project.client,
      projectId: project.id,
      amount,
      status: "Pending",
      issuedAt: today(),
      dueAt: addDays(30),
      lines: [{ description, qty: 1, unit: amount }],
    };
    db.invoices = [invoice, ...db.invoices];
    logActivity("Invoicing", `${invoice.number} raised for ${project.client}`);
  }
  persist();
  return wait(clone(db));
};

// ── KPI ──────────────────────────────────────────────────────────────────────

const TREND: Record<Period, { label: string; value: number }[]> = {
  "30d": ["W1", "W2", "W3", "W4"].map((label, i) => ({ label, value: [28, 36, 33, 46][i] })),
  "90d": ["May", "Jun", "Jul"].map((label, i) => ({ label, value: [96, 118, 142][i] })),
  "12m": ["Q3", "Q4", "Q1", "Q2"].map((label, i) => ({ label, value: [212, 268, 301, 356][i] })),
};

/**
 * GET /kpi?period=…
 *
 * Revenue and average deal are computed from the live invoice book, so
 * settling an invoice in the Invoicing system moves the KPI card. The rest is
 * sample data until a warehouse exists.
 */
export const getKpis = (period: Period): Promise<KpiSnapshot> => {
  const paid = db.invoices.filter((i) => i.status === "Paid");
  const revenue = paid.reduce((a, i) => a + i.amount, 0);
  const avgDeal = paid.length ? Math.round(revenue / paid.length) : 0;
  const newClients = db.onboardings.length;

  return wait({
    period,
    revenue,
    newClients,
    churnPct: 2.1,
    avgDeal,
    deltas: { revenue: 18, newClients: 9, churnPct: -0.4, avgDeal: 5 },
    trend: TREND[period],
  });
};

/** GET /kpi/deals-by-stage */
export const getDealsByStage = () =>
  wait(
    (["New", "Contacted", "Qualified", "Won"] as LeadStage[]).map((stage) => ({
      label: stage,
      value: db.leads.filter((l) => l.stage === stage).length,
    })),
  );

// Named export kept so `Lead` stays referenced for consumers importing types
// from this module rather than reaching into types.ts.
export type { Lead };

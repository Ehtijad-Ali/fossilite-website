// Sample workspace data for the POC.
//
// This file is the only place that invents anything. When the backend exists,
// `api.ts` stops importing it and nothing else changes.

import {
  Invoice,
  Lead,
  Onboarding,
  ONBOARDING_TEMPLATE,
  Project,
  Sop,
  Task,
  Workspace,
} from "./types";

const step = (i: number, done: boolean, startedAt: string) => ({
  id: `s${i}`,
  label: ONBOARDING_TEMPLATE[i].label,
  owner: ONBOARDING_TEMPLATE[i].owner,
  done,
  completedAt: done ? startedAt : undefined,
});

const LEADS: Lead[] = [
  { id: "L-101", name: "Ivy Cole", company: "Northgate Fintech", industry: "Fintech", source: "Inbound", valueMrr: 2400, stage: "New", owner: "Peter Nguyen", email: "ivy.cole@northgate.io", createdAt: "2026-07-28", lastTouchedAt: "2026-08-02", notes: "Downloaded the RAG guide, asked about document extraction volumes." },
  { id: "L-102", name: "Zora Lin", company: "Meridian Capital", industry: "Fintech", source: "Inbound", valueMrr: 3700, stage: "New", owner: "Peter Nguyen", email: "z.lin@meridiancap.com", createdAt: "2026-07-30", lastTouchedAt: "2026-08-03", notes: "Reconciliation across two ledgers. Finance-led, no engineering yet." },
  { id: "L-103", name: "Kai Owens", company: "Rowan & Co", industry: "E-commerce", source: "Outbound", valueMrr: 980, stage: "New", owner: "Sam Reyes", email: "kai@rowanco.shop", createdAt: "2026-08-01", lastTouchedAt: "2026-08-01", notes: "Catalogue of 40k SKUs, attribute coverage is poor." },
  { id: "L-104", name: "Nora Diaz", company: "Kestrel SaaS", industry: "SaaS", source: "Referral", valueMrr: 980, stage: "New", owner: "Sam Reyes", email: "nora@kestrel.app", createdAt: "2026-08-02", lastTouchedAt: "2026-08-04", notes: "Referred by Verve. Wants in-product search over customer workspaces." },

  { id: "L-105", name: "Théo Marsh", company: "Lumen Retail", industry: "E-commerce", source: "Inbound", valueMrr: 3700, stage: "Contacted", owner: "Peter Nguyen", email: "theo.marsh@lumen.retail", createdAt: "2026-07-20", lastTouchedAt: "2026-08-05", notes: "Discovery call done. Support deflection is the priority, 4k tickets/mo." },
  { id: "L-106", name: "Aria Patel", company: "Vantage Labs", industry: "SaaS", source: "Event", valueMrr: 6100, stage: "Contacted", owner: "Sam Reyes", email: "a.patel@vantagelabs.ai", createdAt: "2026-07-18", lastTouchedAt: "2026-08-04", notes: "Met at the ops summit. Procurement will want a DPA early." },
  { id: "L-107", name: "Milo Chen", company: "Arcadia Group", industry: "Fintech", source: "Partner", valueMrr: 2400, stage: "Contacted", owner: "Peter Nguyen", email: "milo.chen@arcadia.group", createdAt: "2026-07-25", lastTouchedAt: "2026-08-03", notes: "Partner intro. Invoice processing, 900 docs a month." },

  { id: "L-108", name: "Remy Okoye", company: "Atlas Fitness", industry: "Agency", source: "Referral", valueMrr: 3700, stage: "Qualified", owner: "Sam Reyes", email: "remy@atlasfitness.co", createdAt: "2026-07-10", lastTouchedAt: "2026-08-05", notes: "Budget confirmed. Wants a pilot on one process before committing." },
  { id: "L-109", name: "Hana Ito", company: "BrightPath Co", industry: "Professional services", source: "Inbound", valueMrr: 6100, stage: "Qualified", owner: "Peter Nguyen", email: "hana.ito@brightpath.co", createdAt: "2026-07-05", lastTouchedAt: "2026-08-06", notes: "Proposal sent. Decision expected within the fortnight." },

  { id: "L-110", name: "Nora Diaz", company: "Horizon Retail", industry: "E-commerce", source: "Referral", valueMrr: 3700, stage: "Won", owner: "Peter Nguyen", email: "nora.diaz@horizonretail.com", createdAt: "2026-06-14", lastTouchedAt: "2026-07-02", notes: "Signed. Document processing and support triage.", clientId: "C-01" },
  { id: "L-111", name: "Ivy Cole", company: "Nimbus Cloud", industry: "SaaS", source: "Inbound", valueMrr: 6100, stage: "Won", owner: "Sam Reyes", email: "ivy@nimbus.cloud", createdAt: "2026-05-30", lastTouchedAt: "2026-06-18", notes: "Signed. Retrieval over their own workspace.", clientId: "C-02" },
  { id: "L-112", name: "Aria Patel", company: "Verve Studio", industry: "Agency", source: "Referral", valueMrr: 980, stage: "Won", owner: "Peter Nguyen", email: "aria@vervestudio.design", createdAt: "2026-06-02", lastTouchedAt: "2026-06-25", notes: "Signed. Small scope: reporting automation.", clientId: "C-03" },
];

const ONBOARDINGS: Onboarding[] = [
  {
    id: "O-01", clientId: "C-01", client: "Horizon Retail", leadId: "L-110",
    status: "In progress", startedAt: "2026-07-04", targetGoLive: "2026-08-15",
    steps: [0, 1, 2, 3].map((i) => step(i, true, "2026-07-10")).concat([4, 5].map((i) => step(i, false, ""))),
  },
  {
    id: "O-02", clientId: "C-02", client: "Nimbus Cloud", leadId: "L-111",
    status: "Live", startedAt: "2026-06-20", targetGoLive: "2026-07-18",
    steps: [0, 1, 2, 3, 4, 5].map((i) => step(i, true, "2026-07-16")),
  },
  {
    id: "O-03", clientId: "C-03", client: "Verve Studio", leadId: "L-112",
    status: "Blocked", startedAt: "2026-06-28", targetGoLive: "2026-08-08",
    steps: [0, 1].map((i) => step(i, true, "2026-07-02")).concat([2, 3, 4, 5].map((i) => step(i, false, ""))),
  },
];

const PROJECTS: Project[] = [
  { id: "P-01", name: "Document processing pipeline", clientId: "C-01", client: "Horizon Retail", onboardingId: "O-01", startedAt: "2026-07-12" },
  { id: "P-02", name: "Workspace retrieval", clientId: "C-02", client: "Nimbus Cloud", onboardingId: "O-02", startedAt: "2026-06-26" },
  { id: "P-03", name: "Reporting automation", clientId: "C-03", client: "Verve Studio", onboardingId: "O-03", startedAt: "2026-07-06" },
];

const TASKS: Task[] = [
  { id: "T-01", title: "Design landing hero", projectId: "P-03", client: "Verve Studio", assignee: "Sam Reyes", column: "To Do", priority: "Medium", dueDate: "2026-08-12", description: "First screen for the reporting portal. Needs the new chart tokens." },
  { id: "T-02", title: "Client asset review", projectId: "P-01", client: "Horizon Retail", assignee: "Dana Whitfield", column: "To Do", priority: "Low", dueDate: "2026-08-14", description: "Check the brand pack against what the go-live checklist expects." },
  { id: "T-03", title: "Update SOP doc", projectId: "P-01", client: "Horizon Retail", assignee: "Peter Nguyen", column: "To Do", priority: "Low", dueDate: "2026-08-18", description: "Extraction runbook is a version behind the pipeline." },
  { id: "T-04", title: "Payment gateway fix", projectId: "P-02", client: "Nimbus Cloud", assignee: "Dana Whitfield", column: "In Progress", priority: "High", dueDate: "2026-08-08", description: "Retries are firing a fresh idempotency key per attempt." },
  { id: "T-05", title: "Onboarding flow v2", projectId: "P-01", client: "Horizon Retail", assignee: "Sam Reyes", column: "In Progress", priority: "Medium", dueDate: "2026-08-11", description: "Collapse the two asset-collection steps into one." },
  { id: "T-06", title: "QA pass, mobile", projectId: "P-03", client: "Verve Studio", assignee: "Dana Whitfield", column: "In Progress", priority: "High", dueDate: "2026-08-09", description: "Board columns overflow below 380px." },
  { id: "T-07", title: "Invoice automation", projectId: "P-01", client: "Horizon Retail", assignee: "Peter Nguyen", column: "Done", priority: "High", dueDate: "2026-08-01", description: "Extraction into the ledger with a review queue for low confidence." },
  { id: "T-08", title: "KPI dashboard v1", projectId: "P-02", client: "Nimbus Cloud", assignee: "Sam Reyes", column: "Done", priority: "Medium", dueDate: "2026-07-29", description: "Revenue trend and stage breakdown against the live warehouse." },
];

const line = (description: string, qty: number, unit: number) => ({ description, qty, unit });

const INVOICES: Invoice[] = [
  { id: "I-01", number: "INV-2041", clientId: "C-01", client: "Horizon Retail", projectId: "P-01", amount: 4200, status: "Paid", issuedAt: "2026-07-01", dueAt: "2026-07-31", paidAt: "2026-07-22", lines: [line("Discovery and process mapping", 1, 2400), line("Extraction pilot", 1, 1800)] },
  { id: "I-02", number: "INV-2042", clientId: "C-02", client: "Nimbus Cloud", projectId: "P-02", amount: 6800, status: "Overdue", issuedAt: "2026-06-20", dueAt: "2026-07-20", lines: [line("Retrieval build, sprint 1", 1, 4400), line("Evaluation harness", 1, 2400)] },
  { id: "I-03", number: "INV-2043", clientId: "C-03", client: "BrightPath Co", projectId: "P-03", amount: 2150, status: "Pending", issuedAt: "2026-07-24", dueAt: "2026-08-23", lines: [line("Reporting automation, phase 1", 1, 2150)] },
  { id: "I-04", number: "INV-2044", clientId: "C-03", client: "Verve Studio", projectId: "P-03", amount: 9400, status: "Paid", issuedAt: "2026-07-02", dueAt: "2026-08-01", paidAt: "2026-07-28", lines: [line("Reporting portal build", 1, 7600), line("Handover and documentation", 1, 1800)] },
  { id: "I-05", number: "INV-2045", clientId: "C-01", client: "Atlas Fitness", amount: 3300, status: "Overdue", issuedAt: "2026-06-14", dueAt: "2026-07-14", lines: [line("Pilot engagement", 1, 3300)] },
];

const sop = (id: string, title: string, category: Sop["category"], owner: string, updatedAt: string, readMinutes: number, summary: string, body: string[]): Sop =>
  ({ id, title, category, owner, updatedAt, readMinutes, summary, body });

const SOPS: Sop[] = [
  sop("S-01", "Qualifying an inbound lead", "Sales & CRM", "Peter Nguyen", "2026-07-28", 4, "The five questions that decide whether a lead moves to Qualified, and what disqualifies one outright.", ["Every inbound lead gets the same five questions before it moves out of Contacted. The point is not to score the lead, it is to find the reason to say no early.", "Ask what they have already tried. A prospect who has not attempted the manual version rarely has the process knowledge the build needs.", "Disqualify on: no named owner, no budget holder identified, or a process that is under active review. None of these are permanent, so set a follow-up rather than closing the record."]),
  sop("S-02", "Writing the discovery brief", "Sales & CRM", "Sam Reyes", "2026-07-11", 6, "What goes into the pre-call brief, and where each part comes from.", ["The brief exists so the call is spent on their situation rather than on facts you could have looked up.", "Pull the company basics, their public tooling, prior conversations from the CRM, and any support history. Keep it to one page.", "The last line is always the single question you most need answered. If you cannot write it, you are not ready for the call."]),
  sop("S-03", "New client kickoff", "Client Onboarding", "Dana Whitfield", "2026-08-01", 5, "Running the kickoff so the first two weeks do not stall.", ["Kickoff has one job: leave with a named owner on their side and a date for access.", "Walk the process end to end on the call, with their documents open. Assumptions surface here or they surface in week four.", "Book the go-live checklist review at kickoff, not later. A date in the calendar is what keeps the middle from drifting."]),
  sop("S-04", "Access and tools provisioning", "Client Onboarding", "Dana Whitfield", "2026-07-19", 3, "The access checklist, in the order that avoids waiting on procurement twice.", ["Request everything in one pass. Two separate access requests to the same IT team costs a week.", "Least privilege by default. A named service account, scoped to the systems in the statement of work.", "Record what was granted in the onboarding record so offboarding is not archaeology."]),
  sop("S-05", "Sprint planning", "Project Delivery", "Sam Reyes", "2026-07-30", 4, "How work enters a sprint and what keeps the board honest.", ["Nothing enters In Progress without an assignee and a due date. A task with neither is a wish.", "Cap work in progress per person. The board is a queue, not a display case.", "Anything blocked for more than two days goes on the call agenda, not into a comment nobody reads."]),
  sop("S-06", "Handover and documentation", "Project Delivery", "Peter Nguyen", "2026-08-04", 7, "What a client receives at handover, and the standard it has to meet.", ["The test is whether a competent engineer who has never seen the project can run it from the documentation alone.", "Handover includes the code, the data, the evaluation set and the runbook. Not a recording of a call.", "Walk the manual fallback explicitly. When the automation is down, someone has to do the work."]),
  sop("S-07", "Raising an invoice", "Finance & Invoicing", "Peter Nguyen", "2026-07-08", 3, "When an invoice is raised, what it must reference, and who approves it.", ["Invoices are raised against a delivered milestone, never against elapsed time.", "Every line references the statement of work item it settles. A line nobody can trace becomes a query and then a delay.", "Approval sits with someone other than whoever created it. That separation is a control, not a formality."]),
  sop("S-08", "Chasing an overdue account", "Finance & Invoicing", "Dana Whitfield", "2026-07-26", 4, "The escalation ladder for late payment, with timings.", ["Day one past due is a reminder, not a chase. Most overdue invoices are an internal routing problem at their end.", "At fourteen days, move from email to the person who signed. At thirty, pause new work and say so in writing.", "Record every contact against the invoice. If this ever goes further, the record is the case."]),
  sop("S-09", "Publishing a guide", "Marketing", "Peter Nguyen", "2026-08-05", 5, "The editorial bar for anything published under the Fossilite name.", ["Every claim is either sourced or labelled as a constructed illustration. There is no third category.", "No em dashes. Use a colon, a full stop, a comma or parentheses.", "If a piece could have been written by someone who has never done the work, it does not go out."]),
  sop("S-10", "Case study approval", "Marketing", "Sam Reyes", "2026-07-15", 3, "Getting a client's sign-off before their name appears anywhere.", ["Written approval before publication, every time, including for a logo on the site.", "Send the exact wording, not a summary of it. Approval of a paraphrase is not approval.", "Keep the approval with the client record so it can be found without asking them again."]),
  sop("S-11", "Weekly operations review", "Internal Operations", "Dana Whitfield", "2026-08-02", 4, "The standing agenda, in the order that keeps it to thirty minutes.", ["Overdue invoices first. It is the shortest item and the one most likely to be skipped if left to the end.", "Then blocked tasks, then onboarding past target date, then anything new.", "Decisions get an owner and a date in the meeting. Anything without both is not a decision."]),
  sop("S-12", "Tool access review", "Internal Operations", "Peter Nguyen", "2026-06-30", 3, "The quarterly sweep of who can reach what.", ["List every integration and every service account, with the human who owns it.", "Anything with no named owner is switched off. If that breaks something, you have found an undocumented dependency worth knowing about.", "Check that leavers are actually gone, not just marked inactive."]),
];

export const seedWorkspace = (): Workspace => ({
  leads: LEADS.map((l) => ({ ...l })),
  onboardings: ONBOARDINGS.map((o) => ({ ...o, steps: o.steps.map((s) => ({ ...s })) })),
  projects: PROJECTS.map((p) => ({ ...p })),
  tasks: TASKS.map((t) => ({ ...t })),
  invoices: INVOICES.map((i) => ({ ...i, lines: i.lines.map((l) => ({ ...l })) })),
  sops: SOPS.map((s) => ({ ...s })),
  activity: [
    { id: "A-03", at: Date.now() - 1000 * 60 * 60 * 5, system: "Invoicing", message: "INV-2044 marked paid for Verve Studio" },
    { id: "A-02", at: Date.now() - 1000 * 60 * 60 * 26, system: "Projects", message: "KPI dashboard v1 moved to Done" },
    { id: "A-01", at: Date.now() - 1000 * 60 * 60 * 50, system: "Onboarding", message: "Nimbus Cloud went live" },
  ],
});

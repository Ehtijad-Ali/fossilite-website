/** The six systems, in flow order. Shared by the tab rail, the sidebar and the
 *  overview so the ordering can never disagree between them. */
export interface SystemTab {
  path: string;
  label: string;
  short: string;
  color: string;
}

export const SYSTEM_TABS: SystemTab[] = [
  { path: "/console/leads", label: "Lead CRM", short: "Leads", color: "#3B82F6" },
  { path: "/console/onboarding", label: "Onboarding", short: "Onboarding", color: "#F5A524" },
  { path: "/console/projects", label: "Projects & Tasks", short: "Projects", color: "#6366F1" },
  { path: "/console/invoicing", label: "Invoicing", short: "Invoicing", color: "#2DD4BF" },
  { path: "/console/sops", label: "SOP Library", short: "SOPs", color: "#8B5CF6" },
  { path: "/console/kpi", label: "KPI Dashboard", short: "KPI", color: "#4ADE80" },
];

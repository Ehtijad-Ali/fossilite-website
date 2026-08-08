import { FC } from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { useSharedTokens } from "../../theme/sharedTokens";
import { FONT_DISPLAY } from "../../theme/fonts";
import { useWorkspace } from "../../console/store";
import { SYSTEM_TABS } from "./nav";
import { Card, Label, Stat, Tag, TONE, ViewHeader, money } from "./ui";

const ago = (at: number) => {
  const mins = Math.round((Date.now() - at) / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.round(hrs / 24)}d ago`;
};

export const Overview: FC = () => {
  const T = useSharedTokens();
  const { data } = useWorkspace();

  const leads = data?.leads ?? [];
  const invoices = data?.invoices ?? [];
  const tasks = data?.tasks ?? [];
  const obs = data?.onboardings ?? [];

  const paid = invoices.filter((i) => i.status === "Paid").reduce((a, i) => a + i.amount, 0);
  const overdue = invoices.filter((i) => i.status === "Overdue").reduce((a, i) => a + i.amount, 0);

  return (
    <Box>
      <ViewHeader
        eyebrow="Business Operating System"
        title="Dashboard"
        sub="One workspace for the six systems. Each one hands off to the next, so a lead that closes ends up as revenue on the KPI board without anyone re-keying it."
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, minmax(0,1fr))" },
          gap: "12px",
          mb: "22px",
        }}
      >
        <Stat label="Open leads" value={String(leads.filter((l) => l.stage !== "Won").length)} accent={TONE.New} />
        <Stat label="Onboarding" value={String(obs.filter((o) => o.status !== "Live").length)} accent={TONE.Pending} />
        <Stat label="Paid revenue" value={money(paid)} accent={TONE.Paid} />
        <Stat label="Overdue" value={money(overdue)} accent={TONE.Overdue} />
      </Box>

      {/* ── The flow, as clickable stops ── */}
      <Card sx={{ mb: "22px" }}>
        <Label>The flow</Label>
        <Typography sx={{ fontSize: "13.5px", color: T.secondaryText, mt: "6px", mb: "16px", maxWidth: "640px" }}>
          Work moves left to right. Each step is a system, and each handover happens inside the product rather than
          in someone's inbox.
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
          {SYSTEM_TABS.map((s, i) => (
            <Box key={s.path} sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Box
                component={Link}
                to={s.path}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  px: "13px",
                  py: "9px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  border: `0.5px solid ${T.border}`,
                  backgroundColor: T.cardBgAlt,
                  transition: "border-color 0.2s ease, transform 0.2s ease",
                  "&:hover": { borderColor: s.color, transform: "translateY(-1px)" },
                }}
              >
                <Box sx={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: s.color }} />
                <Typography sx={{ fontSize: "12.5px", color: T.primaryText, whiteSpace: "nowrap" }}>
                  {s.label}
                </Typography>
              </Box>
              {i < SYSTEM_TABS.length - 1 && (
                <Typography sx={{ color: T.mutedText, fontSize: "13px" }} aria-hidden>
                  →
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Card>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1.15fr 1fr" }, gap: "12px" }}>
        <Card>
          <Label>Needs attention</Label>
          <Box sx={{ mt: "12px", display: "flex", flexDirection: "column" }}>
            {[
              ...invoices.filter((i) => i.status === "Overdue").map((i) => ({
                k: `${i.number} overdue`,
                v: `${i.client} · ${money(i.amount)}`,
                tone: TONE.Overdue,
                to: "/console/invoicing",
              })),
              ...obs.filter((o) => o.status === "Blocked").map((o) => ({
                k: `${o.client} blocked`,
                v: `Onboarding started ${o.startedAt}`,
                tone: TONE.Blocked,
                to: "/console/onboarding",
              })),
              ...tasks
                .filter((t) => t.column !== "Done" && t.dueDate < new Date().toISOString().slice(0, 10))
                .map((t) => ({ k: t.title, v: `${t.client} · due ${t.dueDate}`, tone: TONE.Pending, to: "/console/projects" })),
            ]
              .slice(0, 6)
              .map((row, i) => (
                <Box
                  key={i}
                  component={Link}
                  to={row.to}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    py: "11px",
                    borderTop: i === 0 ? "none" : `0.5px solid ${T.border}`,
                    textDecoration: "none",
                    "&:hover .k": { color: "#C3A87C" },
                  }}
                >
                  <Box sx={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: row.tone, flexShrink: 0 }} />
                  <Box sx={{ minWidth: 0, flex: 1 }}>
                    <Typography className="k" sx={{ fontSize: "13.5px", color: T.primaryText, lineHeight: 1.3 }}>
                      {row.k}
                    </Typography>
                    <Typography sx={{ fontSize: "11.5px", color: T.mutedText }}>{row.v}</Typography>
                  </Box>
                </Box>
              ))}
          </Box>
        </Card>

        <Card>
          <Label>Recent activity</Label>
          <Box sx={{ mt: "12px", display: "flex", flexDirection: "column" }}>
            {(data?.activity ?? []).slice(0, 8).map((a, i) => (
              <Box
                key={a.id}
                sx={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                  py: "10px",
                  borderTop: i === 0 ? "none" : `0.5px solid ${T.border}`,
                }}
              >
                <Box sx={{ flexShrink: 0, mt: "1px" }}>
                  <Tag text={a.system} color={T.mutedText} />
                </Box>
                <Box sx={{ minWidth: 0, flex: 1 }}>
                  <Typography sx={{ fontSize: "13px", color: T.primaryText, lineHeight: 1.4 }}>
                    {a.message}
                  </Typography>
                  <Typography sx={{ fontSize: "11px", color: T.mutedText }}>{ago(a.at)}</Typography>
                </Box>
              </Box>
            ))}
            {(data?.activity ?? []).length === 0 && (
              <Typography sx={{ fontSize: "13px", color: T.mutedText, py: "16px" }}>
                Nothing yet. Move a lead and it appears here.
              </Typography>
            )}
          </Box>
        </Card>
      </Box>

      <Card sx={{ mt: "12px" }}>
        <Typography sx={{ fontFamily: FONT_DISPLAY, fontSize: "17px", fontWeight: 500, color: T.headline }}>
          This is a proof of concept
        </Typography>
        <Typography sx={{ fontSize: "13.5px", color: T.secondaryText, mt: "8px", lineHeight: 1.7, maxWidth: "700px" }}>
          Data is local to your browser session and resets when you clear it. Every interaction goes through an API
          layer that is currently backed by sample data, so connecting a real backend does not change any of these
          screens. The{" "}
          <Box component={Link} to="/console/architecture" sx={{ color: "#C3A87C", textDecoration: "none" }}>
            System Design view
          </Box>{" "}
          sets out how.
        </Typography>
      </Card>
    </Box>
  );
};

export default Overview;

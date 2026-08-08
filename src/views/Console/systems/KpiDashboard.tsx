import { FC, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import { useSharedTokens } from "../../../theme/sharedTokens";
import { getDealsByStage, getKpis } from "../../../console/api";
import { KpiSnapshot, Period } from "../../../console/types";
import { useWorkspace } from "../../../console/store";
import { Card, Label, Stat, TONE, ViewHeader, money } from "../ui";

const PERIODS: { id: Period; label: string }[] = [
  { id: "30d", label: "30 days" },
  { id: "90d", label: "90 days" },
  { id: "12m", label: "12 months" },
];

export const KpiDashboard: FC = () => {
  const T = useSharedTokens();
  const { data } = useWorkspace();
  const [period, setPeriod] = useState<Period>("90d");
  const [kpi, setKpi] = useState<KpiSnapshot | null>(null);
  const [stages, setStages] = useState<{ label: string; value: number }[]>([]);

  // Re-fetch whenever the period changes or the workspace mutates, so settling
  // an invoice in another system is reflected here without a reload.
  useEffect(() => {
    let alive = true;
    getKpis(period).then((k) => alive && setKpi(k));
    getDealsByStage().then((s) => alive && setStages(s));
    return () => {
      alive = false;
    };
  }, [period, data]);

  const maxTrend = Math.max(1, ...(kpi?.trend.map((t) => t.value) ?? [1]));
  const maxStage = Math.max(1, ...stages.map((s) => s.value));

  const points =
    kpi?.trend.map((t, i, arr) => ({
      x: 6 + (i / Math.max(1, arr.length - 1)) * 88,
      y: 92 - (t.value / maxTrend) * 76,
    })) ?? [];
  const path = points.map((p, i) => `${i ? "L" : "M"}${p.x} ${p.y}`).join(" ");

  return (
    <Box>
      <ViewHeader
        eyebrow="System 06"
        title="KPI Dashboard"
        sub="Revenue and average deal are computed from the live invoice book, so anything you settle in Invoicing shows up here."
        right={
          <Box sx={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {PERIODS.map((p) => (
              <Box
                key={p.id}
                component="button"
                type="button"
                onClick={() => setPeriod(p.id)}
                sx={{
                  px: "13px",
                  py: "8px",
                  borderRadius: "99px",
                  fontSize: "12px",
                  fontFamily: "Prompt",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  color: period === p.id ? T.ctaPrimaryText : T.secondaryText,
                  backgroundColor: period === p.id ? T.ctaPrimaryBg : "transparent",
                  border: `0.5px solid ${period === p.id ? "transparent" : T.border}`,
                }}
              >
                {p.label}
              </Box>
            ))}
          </Box>
        }
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, minmax(0,1fr))" },
          gap: "12px",
          mb: "18px",
        }}
      >
        <Stat label="Revenue" value={kpi ? money(kpi.revenue) : "—"} delta={kpi ? `+${kpi.deltas.revenue}%` : undefined} />
        <Stat label="New clients" value={kpi ? String(kpi.newClients) : "—"} delta={kpi ? `+${kpi.deltas.newClients}%` : undefined} />
        <Stat label="Churn" value={kpi ? `${kpi.churnPct}%` : "—"} delta={kpi ? `${kpi.deltas.churnPct}%` : undefined} />
        <Stat label="Avg deal" value={kpi ? money(kpi.avgDeal) : "—"} delta={kpi ? `+${kpi.deltas.avgDeal}%` : undefined} />
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1.2fr 1fr" }, gap: "12px", mb: "18px" }}>
        <Card>
          <Label>Revenue trend</Label>
          <Typography sx={{ fontSize: "12px", color: T.mutedText, mt: "4px", mb: "10px" }}>
            Paid invoices by bucket, {PERIODS.find((p) => p.id === period)?.label}
          </Typography>
          <Box component="svg" viewBox="0 0 100 100" preserveAspectRatio="none" sx={{ width: "100%", height: "180px" }}>
            <path d={`${path} L94 92 L6 92 Z`} fill="#C3A87C" opacity="0.12" />
            <path
              d={path}
              fill="none"
              stroke="#C3A87C"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
            {points.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="1.8" fill="#C3A87C" vectorEffect="non-scaling-stroke" />
            ))}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: "6px" }}>
            {kpi?.trend.map((t) => (
              <Typography key={t.label} sx={{ fontSize: "10px", color: T.mutedText }}>
                {t.label}
              </Typography>
            ))}
          </Box>
        </Card>

        <Card>
          <Label>Deals by stage</Label>
          <Typography sx={{ fontSize: "12px", color: T.mutedText, mt: "4px", mb: "14px" }}>
            Live count from the CRM
          </Typography>
          <Box sx={{ display: "flex", alignItems: "flex-end", gap: "12px", height: "150px" }}>
            {stages.map((s) => (
              <Box key={s.label} sx={{ flex: 1, textAlign: "center", minWidth: 0 }}>
                <Typography sx={{ fontSize: "12px", fontWeight: 700, color: T.headline, mb: "6px" }}>
                  {s.value}
                </Typography>
                <Box
                  sx={{
                    height: `${Math.max(4, (s.value / maxStage) * 110)}px`,
                    borderRadius: "6px 6px 0 0",
                    backgroundColor: TONE[s.label] ?? "#C3A87C",
                    opacity: 0.85,
                    transition: "height 0.45s cubic-bezier(0.4,0,0.2,1)",
                  }}
                />
              </Box>
            ))}
          </Box>
          <Box sx={{ display: "flex", gap: "12px", mt: "8px" }}>
            {stages.map((s) => (
              <Typography key={s.label} sx={{ flex: 1, textAlign: "center", fontSize: "10.5px", color: T.mutedText, minWidth: 0 }}>
                {s.label}
              </Typography>
            ))}
          </Box>
        </Card>
      </Box>

      <Card>
        <Label>Performance indicators</Label>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, minmax(0,1fr))" },
            gap: "18px",
            mt: "14px",
          }}
        >
          {[
            {
              k: "Onboardings live",
              v: `${(data?.onboardings ?? []).filter((o) => o.status === "Live").length} of ${(data?.onboardings ?? []).length}`,
            },
            {
              k: "Tasks past due",
              v: String(
                (data?.tasks ?? []).filter(
                  (t) => t.column !== "Done" && t.dueDate < new Date().toISOString().slice(0, 10),
                ).length,
              ),
            },
            {
              k: "Overdue value",
              v: money((data?.invoices ?? []).filter((i) => i.status === "Overdue").reduce((a, i) => a + i.amount, 0)),
            },
          ].map((row) => (
            <Box key={row.k}>
              <Label>{row.k}</Label>
              <Typography sx={{ fontSize: "20px", fontWeight: 600, color: T.headline, mt: "4px" }}>
                {row.v}
              </Typography>
            </Box>
          ))}
        </Box>
      </Card>
    </Box>
  );
};

export default KpiDashboard;

import { FC } from "react";
import { Box, Typography } from "@mui/material";

// ── Palette (light product surfaces on the cream hero) ────────────────────────
const C = {
  navy: "#001932",
  card: "#ffffff",
  cardBorder: "rgba(0,25,50,0.08)",
  inner: "#FBFAF7",
  innerBorder: "rgba(0,25,50,0.07)",
  muted: "#8b8f96",
  faint: "#b9bdc4",
  green: "#2EA96B",
  greenBg: "rgba(46,169,107,0.12)",
  tan: "#C3A87C",
  sidebarActive: "rgba(0,25,50,0.05)",
  chart: "#001932",
};

// ── Tiny inline icons ─────────────────────────────────────────────────────────
const Ico: FC<{ d: string }> = ({ d }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d={d} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ICONS = {
  overview: "M4 4h7v7H4zM13 4h7v4h-7zM13 11h7v9h-7zM4 13h7v7H4z",
  workflows: "M4 6h6M4 12h10M4 18h7M18 4v16",
  agents: "M12 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM6 12h12v6H6zM9 12V9m6 3V9M9 15h.01M15 15h.01",
  documents: "M6 3h8l4 4v14H6zM14 3v4h4",
  analytics: "M4 20V10M10 20V4M16 20v-7M22 20H2",
  integrations: "M8 8V5a2 2 0 0 1 4 0v3m4 0h3v4m-3 8h3v-4M8 16H5v-4",
  settings: "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.3 1a7 7 0 0 0-1.7-1l-.3-2.5H10.4l-.3 2.5a7 7 0 0 0-1.7 1l-2.3-1-2 3.4L6 11a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.3-1a7 7 0 0 0 1.7 1l.3 2.5h3.9l.3-2.5a7 7 0 0 0 1.7-1l2.3 1 2-3.4-2-1.5c.06-.32.1-.65.1-1Z",
};

const SIDEBAR = [
  { label: "Overview", icon: ICONS.overview, active: true },
  { label: "Workflows", icon: ICONS.workflows },
  { label: "AI Agents", icon: ICONS.agents },
  { label: "Documents", icon: ICONS.documents },
  { label: "Analytics", icon: ICONS.analytics },
  { label: "Integrations", icon: ICONS.integrations },
  { label: "Settings", icon: ICONS.settings },
];

const STATS = [
  { label: "Total Workflows", value: "24", delta: "+13% this month" },
  { label: "Tasks Processed", value: "12,543", delta: "+18% this month" },
  { label: "Success Rate", value: "98.7%", delta: "+2.4% this month" },
];

const ACTIVITY = [
  { title: "Invoice Extracted", time: "2 min ago" },
  { title: "Document Processed", time: "5 min ago" },
  { title: "AI Agent Executed", time: "12 min ago" },
  { title: "Workflow Completed", time: "24 min ago" },
];

const FloatCard: FC<{ children: React.ReactNode; sx?: object; delay?: string }> = ({ children, sx, delay = "0s" }) => (
  <Box
    sx={{
      position: "absolute",
      zIndex: 3,
      backgroundColor: C.card,
      border: `0.5px solid ${C.cardBorder}`,
      borderRadius: "14px",
      boxShadow: "0 16px 40px rgba(0,25,50,0.14)",
      px: "14px",
      py: "11px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      animation: `floatBob 5s ease-in-out ${delay} infinite`,
      "@keyframes floatBob": {
        "0%,100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-8px)" },
      },
      ...sx,
    }}
  >
    {children}
  </Box>
);

export const DashboardMockup: FC = () => {
  return (
    <Box sx={{ position: "relative", width: "100%", maxWidth: "620px", mx: "auto" }}>
      {/* ── Main dashboard card ── */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          backgroundColor: C.card,
          border: `0.5px solid ${C.cardBorder}`,
          borderRadius: "18px",
          boxShadow: "0 30px 80px rgba(0,25,50,0.16)",
          overflow: "hidden",
          display: "flex",
          minHeight: { xs: "440px", sm: "520px" },
        }}
      >
        {/* Sidebar */}
        <Box
          sx={{
            width: { xs: "0px", sm: "128px" },
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            borderRight: `0.5px solid ${C.innerBorder}`,
            p: "16px 10px",
            gap: "2px",
            flexShrink: 0,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "7px", px: "8px", mb: "16px" }}>
            <Box sx={{ width: "18px", height: "18px", borderRadius: "6px", background: C.navy, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Box sx={{ width: "7px", height: "7px", borderRadius: "50%", border: "1.5px solid #fff" }} />
            </Box>
            <Typography sx={{ fontSize: "12px", fontWeight: 700, color: C.navy, letterSpacing: "0.02em" }}>Fossilite</Typography>
          </Box>

          {SIDEBAR.map((item) => (
            <Box
              key={item.label}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
                px: "8px",
                py: "7px",
                borderRadius: "8px",
                color: item.active ? C.navy : C.muted,
                backgroundColor: item.active ? C.sidebarActive : "transparent",
                fontWeight: item.active ? 600 : 400,
              }}
            >
              <Ico d={item.icon} />
              <Typography sx={{ fontSize: "11px", color: "inherit", fontWeight: "inherit" }}>{item.label}</Typography>
            </Box>
          ))}
        </Box>

        {/* Main content */}
        <Box sx={{ flex: 1, p: { xs: "16px", sm: "18px" }, minWidth: 0, display: "flex", flexDirection: "column" }}>
          {/* Top bar */}
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: "14px" }}>
            <Typography sx={{ fontSize: "14px", fontWeight: 700, color: C.navy, fontFamily: "Prompt" }}>Dashboard</Typography>
            <Box sx={{ display: "flex", gap: "6px" }}>
              {[0, 1].map((i) => (
                <Box key={i} sx={{ width: "24px", height: "24px", borderRadius: "7px", border: `0.5px solid ${C.innerBorder}`, display: "flex", alignItems: "center", justifyContent: "center", color: C.muted }}>
                  <Box sx={{ width: "10px", height: "10px", borderRadius: "50%", border: `1.5px solid ${C.faint}` }} />
                </Box>
              ))}
            </Box>
          </Box>

          {/* Stat cards */}
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", mb: "12px" }}>
            {STATS.map((s) => (
              <Box key={s.label} sx={{ backgroundColor: C.inner, border: `0.5px solid ${C.innerBorder}`, borderRadius: "10px", p: "11px" }}>
                <Typography sx={{ fontSize: "9px", color: C.muted, letterSpacing: "0.02em", mb: "6px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.label}</Typography>
                <Typography sx={{ fontSize: { xs: "15px", sm: "18px" }, fontWeight: 700, color: C.navy, lineHeight: 1, fontFamily: "Prompt" }}>{s.value}</Typography>
                <Typography sx={{ fontSize: "8.5px", color: C.green, mt: "5px" }}>{s.delta}</Typography>
              </Box>
            ))}
          </Box>

          {/* Chart + activity */}
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1.3fr 1fr" }, gap: "8px", flex: 1, minHeight: 0 }}>
            {/* Processing Trend */}
            <Box sx={{ backgroundColor: C.inner, border: `0.5px solid ${C.innerBorder}`, borderRadius: "10px", p: "12px", display: "flex", flexDirection: "column" }}>
              <Typography sx={{ fontSize: "10px", fontWeight: 600, color: C.navy, mb: "8px" }}>Processing Trend</Typography>
              <Box sx={{ position: "relative", width: "100%", flex: 1, minHeight: "90px" }}>
                <svg viewBox="0 0 300 110" width="100%" height="100%" preserveAspectRatio="none" style={{ display: "block" }}>
                  <defs>
                    <linearGradient id="dashArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={C.navy} stopOpacity="0.16" />
                      <stop offset="100%" stopColor={C.navy} stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[25, 50, 75].map((y) => (
                    <line key={y} x1="0" y1={y} x2="300" y2={y} stroke={C.innerBorder} strokeWidth="0.6" />
                  ))}
                  <path
                    d="M0,88 C30,72 46,96 74,74 C104,50 120,80 150,52 C182,24 198,60 226,40 C256,18 274,46 300,28 L300,110 L0,110 Z"
                    fill="url(#dashArea)"
                  />
                  <path
                    d="M0,88 C30,72 46,96 74,74 C104,50 120,80 150,52 C182,24 198,60 226,40 C256,18 274,46 300,28"
                    fill="none"
                    stroke={C.chart}
                    strokeWidth="2"
                    strokeLinecap="round"
                    style={{ strokeDasharray: 640, strokeDashoffset: 640, animation: "dashDraw 2.4s ease-out 0.4s forwards" }}
                  />
                  <circle cx="300" cy="28" r="3" fill={C.chart} />
                </svg>
                <style>{`@keyframes dashDraw{to{stroke-dashoffset:0}}`}</style>
              </Box>
            </Box>

            {/* Recent Activity */}
            <Box sx={{ backgroundColor: C.inner, border: `0.5px solid ${C.innerBorder}`, borderRadius: "10px", p: "12px", display: "flex", flexDirection: "column" }}>
              <Typography sx={{ fontSize: "10px", fontWeight: 600, color: C.navy, mb: "10px" }}>Recent Activity</Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "9px", flex: 1, justifyContent: "space-between" }}>
                {ACTIVITY.map((a) => (
                  <Box key={a.title} sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Box sx={{ width: "20px", height: "20px", borderRadius: "6px", backgroundColor: C.greenBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: C.green }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </Box>
                    <Box sx={{ minWidth: 0, flex: 1 }}>
                      <Typography sx={{ fontSize: "9.5px", fontWeight: 600, color: C.navy, lineHeight: 1.2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{a.title}</Typography>
                      <Typography sx={{ fontSize: "8px", color: C.muted }}>{a.time}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ── Floating cards ── */}
      <FloatCard delay="0s" sx={{ top: "-20px", right: { xs: "8px", sm: "40px" } }}>
        <Box sx={{ width: "26px", height: "26px", borderRadius: "8px", background: C.navy, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M12 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM6 12h12v6H6zM9 15h.01M15 15h.01" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "9px", color: C.muted, lineHeight: 1.2 }}>AI Agents Running</Typography>
          <Typography sx={{ fontSize: "12px", fontWeight: 700, color: C.navy, lineHeight: 1.2 }}>12 Active</Typography>
        </Box>
      </FloatCard>

      <FloatCard delay="1.2s" sx={{ bottom: "34px", left: { xs: "-6px", sm: "-28px" } }}>
        <Box>
          <Typography sx={{ fontSize: "9px", color: C.muted, lineHeight: 1.2 }}>Accuracy Rate</Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: 700, color: C.navy, lineHeight: 1.2 }}>98.7%</Typography>
        </Box>
        <svg width="42" height="20" viewBox="0 0 42 20" fill="none">
          <path d="M1 15 L9 11 L17 13 L25 6 L33 9 L41 2" stroke={C.green} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </FloatCard>

      <FloatCard delay="0.6s" sx={{ bottom: "-16px", right: { xs: "4px", sm: "24px" } }}>
        <Box sx={{ width: "26px", height: "26px", borderRadius: "8px", backgroundColor: C.greenBg, display: "flex", alignItems: "center", justifyContent: "center", color: C.green }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M4 18 L10 12 L14 15 L20 7" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 7h5v5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "9px", color: C.muted, lineHeight: 1.2 }}>Tasks Completed</Typography>
          <Typography sx={{ fontSize: "13px", fontWeight: 700, color: C.navy, lineHeight: 1.2 }}>2,543</Typography>
          <Typography sx={{ fontSize: "8px", color: C.green }}>+10% this week</Typography>
        </Box>
      </FloatCard>
    </Box>
  );
};

export default DashboardMockup;

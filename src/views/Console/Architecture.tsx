import { FC } from "react";
import { Box, Typography } from "@mui/material";

import { useSharedTokens } from "../../theme/sharedTokens";
import { FONT_DISPLAY, FONT_MONO } from "../../theme/fonts";
import { Card, Label, Tag, ViewHeader } from "./ui";
import { SYSTEM_TABS } from "./nav";

const GOLD = "#C3A87C";

const Tier: FC<{ title: string; note: string; tone?: string; children?: React.ReactNode }> = ({
  title,
  note,
  tone,
  children,
}) => {
  const T = useSharedTokens();
  return (
    <Box
      sx={{
        border: `0.5px solid ${tone ?? T.border}`,
        borderRadius: "12px",
        backgroundColor: T.cardBgAlt,
        px: "18px",
        py: "14px",
        textAlign: "center",
        width: "100%",
      }}
    >
      <Typography sx={{ fontFamily: FONT_MONO, fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", color: tone ?? T.mutedText }}>
        {note}
      </Typography>
      <Typography sx={{ fontSize: "15px", fontWeight: 600, color: T.headline, mt: "4px" }}>{title}</Typography>
      {children}
    </Box>
  );
};

const Arrow: FC = () => {
  const T = useSharedTokens();
  return (
    <Typography aria-hidden sx={{ color: T.mutedText, fontSize: "16px", lineHeight: 1, py: "6px" }}>
      ↓
    </Typography>
  );
};

export const Architecture: FC = () => {
  const T = useSharedTokens();

  const flow = [
    { step: "Lead created", system: "Lead CRM", detail: "POST /leads" },
    { step: "Lead qualified and won", system: "Lead CRM", detail: "PATCH /leads/:id { stage }" },
    { step: "Client onboarding starts", system: "Onboarding", detail: "POST /leads/:id/convert" },
    { step: "Project is created", system: "Projects", detail: "POST /onboardings/:id/project" },
    { step: "Tasks are assigned", system: "Projects", detail: "POST /tasks" },
    { step: "Invoice is generated", system: "Invoicing", detail: "POST /projects/:id/invoice" },
    { step: "Payment is recorded", system: "Invoicing", detail: "PATCH /invoices/:id { status }" },
    { step: "KPI dashboard updates", system: "KPI", detail: "GET /kpi?period=…" },
  ];

  return (
    <Box>
      <ViewHeader
        eyebrow="System Design"
        title="Architecture"
        sub="How the POC is put together and what changes when a real backend arrives. Short version: the screens do not."
      />

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "0.9fr 1.1fr" }, gap: "12px", mb: "12px" }}>
        {/* ── Stack ── */}
        <Card>
          <Label>Request path</Label>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: "14px" }}>
            <Tier title="User" note="Browser" />
            <Arrow />
            <Tier title="Authentication" note="Session" tone={GOLD}>
              <Typography sx={{ fontSize: "11px", color: T.mutedText, mt: "4px" }}>
                Demo gate today. Token exchange later.
              </Typography>
            </Tier>
            <Arrow />
            <Tier title="Business Operating System" note="React app" tone={GOLD}>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: "5px", justifyContent: "center", mt: "9px" }}>
                {SYSTEM_TABS.map((s) => (
                  <Tag key={s.path} text={s.short} color={s.color} />
                ))}
              </Box>
            </Tier>
            <Arrow />
            <Tier title="API layer" note="console/api.ts" tone="#3B82F6">
              <Typography sx={{ fontSize: "11px", color: T.mutedText, mt: "4px" }}>
                The seam. Mock now, fetch later.
              </Typography>
            </Tier>
            <Arrow />
            <Tier title="Backend service" note="Not built yet" />
            <Arrow />
            <Tier title="Database" note="Not built yet" />
          </Box>
        </Card>

        {/* ── Flow ── */}
        <Card>
          <Label>How the systems hand off</Label>
          <Typography sx={{ fontSize: "13px", color: T.secondaryText, mt: "6px", mb: "14px" }}>
            Each row is a real action in the POC. The endpoint on the right is the call it will become.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {flow.map((f, i) => (
              <Box
                key={f.step}
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "22px 1fr" },
                  gap: "12px",
                  alignItems: "start",
                  py: "11px",
                  borderTop: i === 0 ? "none" : `0.5px solid ${T.border}`,
                }}
              >
                <Typography
                  sx={{ fontFamily: FONT_MONO, fontSize: "11px", color: T.mutedText, display: { xs: "none", sm: "block" }, pt: "2px" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </Typography>
                <Box sx={{ minWidth: 0 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                    <Typography sx={{ fontSize: "13.5px", color: T.primaryText, fontWeight: 500 }}>
                      {f.step}
                    </Typography>
                    <Tag
                      text={f.system}
                      color={SYSTEM_TABS.find((s) => s.label.startsWith(f.system) || s.short === f.system)?.color}
                    />
                  </Box>
                  <Typography sx={{ fontFamily: FONT_MONO, fontSize: "11.5px", color: T.mutedText, mt: "3px" }}>
                    {f.detail}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Card>
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0,1fr))" }, gap: "12px" }}>
        <Card>
          <Label>What is real today</Label>
          <Box component="ul" sx={{ pl: "18px", mt: "10px", mb: 0 }}>
            {[
              "Typed domain model shared by every screen",
              "Async API layer with latency and loading states",
              "State flows one way: action, response, re-render",
              "Cross-system handovers that actually fire",
              "Session persistence so a refresh keeps your work",
            ].map((t) => (
              <Typography component="li" key={t} sx={{ fontSize: "13px", color: T.secondaryText, lineHeight: 1.7, mb: "5px" }}>
                {t}
              </Typography>
            ))}
          </Box>
        </Card>

        <Card>
          <Label>What is mocked</Label>
          <Box component="ul" sx={{ pl: "18px", mt: "10px", mb: 0 }}>
            {[
              "Sample data in console/seed.ts",
              "sessionStorage standing in for a database",
              "The sign-in check, which runs in the browser",
              "Churn and the period deltas on the KPI board",
            ].map((t) => (
              <Typography component="li" key={t} sx={{ fontSize: "13px", color: T.secondaryText, lineHeight: 1.7, mb: "5px" }}>
                {t}
              </Typography>
            ))}
          </Box>
        </Card>

        <Card>
          <Label>To connect a backend</Label>
          <Box component="ol" sx={{ pl: "18px", mt: "10px", mb: 0 }}>
            {[
              "Replace each function body in console/api.ts with a fetch. Signatures stay.",
              "Drop the import of seed.ts. Nothing else references it.",
              "Point auth.signIn at a token endpoint and move the route guard server-side.",
              "Add optimistic updates in store.tsx if latency needs hiding.",
            ].map((t) => (
              <Typography component="li" key={t} sx={{ fontSize: "13px", color: T.secondaryText, lineHeight: 1.7, mb: "5px" }}>
                {t}
              </Typography>
            ))}
          </Box>
        </Card>
      </Box>

      <Card sx={{ mt: "12px" }}>
        <Typography sx={{ fontFamily: FONT_DISPLAY, fontSize: "16px", fontWeight: 500, color: T.headline }}>
          Why the API layer is a separate file
        </Typography>
        <Typography sx={{ fontSize: "13.5px", color: T.secondaryText, mt: "8px", lineHeight: 1.75, maxWidth: "760px" }}>
          No component imports sample data and no component mutates state. Every screen calls an action on the store,
          the store calls the API, and the API returns the updated workspace. That is the same shape a client has
          against a real server that returns the resource it changed, so the swap is one file rather than a rewrite.
          It is also why the loading and busy states already exist: they were needed the moment the calls became
          asynchronous, not added afterwards.
        </Typography>
      </Card>
    </Box>
  );
};

export default Architecture;

import { FC, useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";

import { useSharedTokens } from "../../../theme/sharedTokens";
import { useWorkspace } from "../../../console/store";
import { LEAD_STAGES, Lead, LeadStage } from "../../../console/types";
import {
  Btn,
  Card,
  Drawer,
  Field,
  Label,
  Row,
  SearchIcon,
  Stat,
  Tag,
  TONE,
  ViewHeader,
  boardSx,
  columnSx,
  money,
} from "../ui";

export const LeadCrm: FC = () => {
  const T = useSharedTokens();
  const { data, busy, setLeadStage, convertLead } = useWorkspace();
  const [q, setQ] = useState("");
  const [source, setSource] = useState<string>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const leads = data?.leads ?? [];
  const sources = useMemo(() => ["All", ...new Set(leads.map((l) => l.source))], [leads]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return leads.filter(
      (l) =>
        (source === "All" || l.source === source) &&
        (!needle ||
          `${l.name} ${l.company} ${l.industry} ${l.owner}`.toLowerCase().includes(needle)),
    );
  }, [leads, q, source]);

  const open = leads.find((l) => l.id === openId) ?? null;
  const pipelineValue = filtered.filter((l) => l.stage !== "Won").reduce((a, l) => a + l.valueMrr, 0);
  const wonValue = filtered.filter((l) => l.stage === "Won").reduce((a, l) => a + l.valueMrr, 0);

  return (
    <Box>
      <ViewHeader
        eyebrow="System 01"
        title="Lead CRM"
        sub="Every lead, the stage it sits in and what it is worth. Winning a lead opens onboarding automatically, which is where the flow starts."
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, minmax(0,1fr))" },
          gap: "12px",
          mb: "18px",
        }}
      >
        <Stat label="Open leads" value={String(filtered.filter((l) => l.stage !== "Won").length)} />
        <Stat label="Pipeline MRR" value={money(pipelineValue)} accent={TONE.Contacted} />
        <Stat label="Won MRR" value={money(wonValue)} accent={TONE.Won} />
        <Stat label="Qualified" value={String(filtered.filter((l) => l.stage === "Qualified").length)} accent={TONE.Qualified} />
      </Box>

      <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", mb: "18px" }}>
        <Box sx={{ flex: "1 1 240px", minWidth: 0 }}>
          <Field value={q} onChange={setQ} placeholder="Search name, company, industry…" label="Search leads" icon={<SearchIcon />} />
        </Box>
        <Box sx={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
          {sources.map((s) => (
            <Box
              key={s}
              component="button"
              type="button"
              onClick={() => setSource(s)}
              sx={{
                px: "12px",
                py: "8px",
                borderRadius: "99px",
                fontSize: "12px",
                fontFamily: "Prompt",
                cursor: "pointer",
                whiteSpace: "nowrap",
                color: source === s ? T.ctaPrimaryText : T.secondaryText,
                backgroundColor: source === s ? T.ctaPrimaryBg : "transparent",
                border: `0.5px solid ${source === s ? "transparent" : T.border}`,
              }}
            >
              {s}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={boardSx(4)}>
        {LEAD_STAGES.map((stage) => {
          const items = filtered.filter((l) => l.stage === stage);
          return (
            <Card key={stage} sx={{ ...columnSx, backgroundColor: T.cardBgAlt }} pad="12px">
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: "12px" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "7px" }}>
                  <Box sx={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: TONE[stage] }} />
                  <Label>{stage}</Label>
                </Box>
                <Typography sx={{ fontSize: "11px", fontWeight: 700, color: T.mutedText }}>{items.length}</Typography>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: "9px", minHeight: "80px" }}>
                {items.map((l) => (
                  <LeadCard key={l.id} lead={l} onOpen={() => setOpenId(l.id)} />
                ))}
                {items.length === 0 && (
                  <Typography sx={{ fontSize: "12px", color: T.mutedText, py: "14px" }}>Nothing here.</Typography>
                )}
              </Box>
            </Card>
          );
        })}
      </Box>

      <Drawer open={!!open} onClose={() => setOpenId(null)} title={open?.company ?? ""}>
        {open && (
          <>
            <Box sx={{ display: "flex", gap: "8px", mb: "16px", flexWrap: "wrap" }}>
              <Tag text={open.stage} />
              <Tag text={open.source} color={T.mutedText} />
            </Box>

            <Row k="Contact">{open.name}</Row>
            <Row k="Email">{open.email}</Row>
            <Row k="Industry">{open.industry}</Row>
            <Row k="Deal value">{money(open.valueMrr)}/mo</Row>
            <Row k="Owner">{open.owner}</Row>
            <Row k="Created">{open.createdAt}</Row>
            <Row k="Last touched">{open.lastTouchedAt}</Row>
            {open.clientId && <Row k="Client ID">{open.clientId}</Row>}

            <Box sx={{ mt: "18px" }}>
              <Label>Notes</Label>
              <Typography sx={{ fontSize: "13.5px", lineHeight: 1.7, color: T.secondaryText, mt: "6px" }}>
                {open.notes}
              </Typography>
            </Box>

            <Box sx={{ mt: "22px" }}>
              <Label>Move to stage</Label>
              <Box sx={{ display: "flex", gap: "7px", flexWrap: "wrap", mt: "8px" }}>
                {LEAD_STAGES.map((s) => (
                  <Btn
                    key={s}
                    disabled={busy || s === open.stage}
                    onClick={() => setLeadStage(open.id, s as LeadStage)}
                  >
                    {s}
                  </Btn>
                ))}
              </Box>
            </Box>

            {open.stage === "Won" && !open.clientId && (
              <Box sx={{ mt: "20px" }}>
                <Btn variant="primary" full disabled={busy} onClick={() => convertLead(open.id)}>
                  Convert to client and open onboarding
                </Btn>
                <Typography sx={{ fontSize: "12px", color: T.mutedText, mt: "8px", lineHeight: 1.6 }}>
                  Creates the client record and starts the standard six-step onboarding.
                </Typography>
              </Box>
            )}
            {open.clientId && (
              <Typography sx={{ fontSize: "12.5px", color: T.mutedText, mt: "20px", lineHeight: 1.6 }}>
                Converted. Onboarding for this client is in the Onboarding system.
              </Typography>
            )}
          </>
        )}
      </Drawer>
    </Box>
  );
};

const LeadCard: FC<{ lead: Lead; onOpen: () => void }> = ({ lead, onOpen }) => {
  const T = useSharedTokens();
  return (
    <Box
      component="button"
      type="button"
      onClick={onOpen}
      aria-label={`Open ${lead.company}`}
      sx={{
        textAlign: "left",
        width: "100%",
        p: "11px 12px",
        borderRadius: "10px",
        border: `0.5px solid ${T.border}`,
        backgroundColor: T.cardBg,
        cursor: "pointer",
        transition: "border-color 0.18s ease, transform 0.18s ease",
        "&:hover": { borderColor: "#C3A87C", transform: "translateY(-1px)" },
        "&:focus-visible": { outline: "2px solid #C3A87C", outlineOffset: "2px" },
      }}
    >
      <Typography
        sx={{
          fontSize: "13px",
          fontWeight: 600,
          color: T.headline,
          lineHeight: 1.3,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {lead.company}
      </Typography>
      <Typography
        sx={{ fontSize: "11px", color: T.mutedText, mt: "2px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
      >
        {lead.name} · {lead.industry}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "6px", mt: "9px" }}>
        <Tag text={lead.source} color={T.mutedText} />
        <Typography sx={{ fontSize: "12px", fontWeight: 700, color: "#22C55E", whiteSpace: "nowrap" }}>
          {money(lead.valueMrr)}/mo
        </Typography>
      </Box>
    </Box>
  );
};

export default LeadCrm;

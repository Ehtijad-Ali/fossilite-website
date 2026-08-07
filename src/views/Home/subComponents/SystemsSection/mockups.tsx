import { FC, useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";

import {
  DEALS_BY_STAGE,
  INVOICE_BASE,
  INVOICE_COLOR,
  INVOICES,
  Invoice,
  InvoiceState,
  KPIS,
  LEAD_BACKLOG,
  LEAD_STAGES,
  LEADS,
  Lead,
  LeadStage,
  ONBOARDING_STEPS,
  REVENUE_TREND,
  SOP_CATEGORIES,
  STAGE_DOT,
  TASK_COLUMNS,
  TASK_DOT,
  TASK_TINT,
  TASKS,
  Task,
  TaskColumn,
} from "./data";
import { FONT_MONO as MONO } from "../../../../theme/fonts";
import { Panel, Pill, Skin } from "./Panel";

/** Column header used by both board mockups. */
const ColumnHead: FC<{ label: string; dot: string; count: number; skin: Skin }> = ({
  label,
  dot,
  count,
  skin,
}) => (
  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: "10px" }}>
    <Box sx={{ display: "flex", alignItems: "center", gap: "6px", minWidth: 0 }}>
      <Box sx={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: dot, flexShrink: 0 }} />
      <Typography
        sx={{
          fontFamily: MONO,
          fontSize: "9.5px",
          letterSpacing: "0.1em",
          fontWeight: 700,
          color: skin.body,
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </Typography>
    </Box>
    <Typography sx={{ fontSize: "10px", fontWeight: 700, color: skin.muted }}>{count}</Typography>
  </Box>
);

const Column: FC<{ skin: Skin; children: React.ReactNode; sx?: object }> = ({ skin, children, sx }) => (
  <Box
    sx={{
      backgroundColor: skin.surface,
      border: `1px solid ${skin.border}`,
      borderRadius: "12px",
      p: "10px",
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      ...sx,
    }}
  >
    {children}
  </Box>
);

/**
 * Board wrapper. On a phone this is a swipeable row of fixed-width columns,
 * which is how a real kanban behaves at that size and, more practically, the
 * only way each card gets enough width to be readable. Two columns on a 360px
 * screen left about ten pixels for the segment label, and the page-level
 * `overflow-wrap: break-word` then broke it one character per line.
 *
 * From md up it becomes the ordinary grid.
 */
const boardSx = (cols: number) => ({
  display: { xs: "flex", md: "grid" },
  gridTemplateColumns: { md: `repeat(${cols}, minmax(0,1fr))` },
  gap: "10px",
  overflowX: { xs: "auto", md: "visible" },
  scrollSnapType: { xs: "x mandatory", md: "none" },
  WebkitOverflowScrolling: "touch",
  pb: { xs: "8px", md: 0 },
  // Bleed to the panel edge so the last column doesn't look clipped mid-swipe.
  mx: { xs: "-16px", md: 0 },
  px: { xs: "16px", md: 0 },
  scrollbarWidth: "none" as const,
  "&::-webkit-scrollbar": { display: "none" },
});

const columnSx = {
  flex: { xs: "0 0 208px", md: "initial" },
  scrollSnapAlign: { xs: "start", md: "none" },
};

// ── 01 Lead CRM ──────────────────────────────────────────────────────────────

export const LeadCrmMockup: FC<{ accent: string; skin: Skin; onToggle: () => void }> = ({
  accent,
  skin,
  onToggle,
}) => {
  const [leads, setLeads] = useState<Lead[]>(LEADS);

  // Clicking a lead advances it a stage, which is what the board is for. The
  // header badges and the "active leads" count are computed, so they move with it.
  const advance = (id: string) =>
    setLeads((prev) =>
      prev.map((l) => {
        if (l.id !== id) return l;
        const i = LEAD_STAGES.indexOf(l.stage);
        return i < LEAD_STAGES.length - 1 ? { ...l, stage: LEAD_STAGES[i + 1] } : l;
      }),
    );

  const byStage = useMemo(
    () =>
      LEAD_STAGES.reduce(
        (acc, s) => ({ ...acc, [s]: leads.filter((l) => l.stage === s) }),
        {} as Record<LeadStage, Lead[]>,
      ),
    [leads],
  );
  const total = leads.length + Object.values(LEAD_BACKLOG).reduce((a, b) => a + b, 0);

  return (
    <Panel
      title="Lead Pipeline"
      subtitle={`Live view · ${total} active leads`}
      accent={accent}
      skin={skin}
      onToggle={onToggle}
    >
      <Box sx={boardSx(4)}>
        {LEAD_STAGES.map((stage) => (
          <Column key={stage} skin={skin} sx={columnSx}>
            <ColumnHead
              label={stage}
              dot={STAGE_DOT[stage]}
              count={byStage[stage].length + LEAD_BACKLOG[stage]}
              skin={skin}
            />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {byStage[stage].map((l) => (
                <Box
                  key={l.id}
                  component="button"
                  type="button"
                  onClick={() => advance(l.id)}
                  disabled={stage === "WON"}
                  aria-label={
                    stage === "WON" ? `${l.name}, won` : `Advance ${l.name} out of ${stage.toLowerCase()}`
                  }
                  sx={{
                    textAlign: "left",
                    width: "100%",
                    p: "9px 10px",
                    borderRadius: "9px",
                    border: `1px solid ${skin.border}`,
                    backgroundColor: skin.raised,
                    cursor: stage === "WON" ? "default" : "pointer",
                    transition: "transform 0.18s ease, border-color 0.18s ease",
                    "&:hover": stage === "WON" ? {} : { borderColor: accent, transform: "translateY(-1px)" },
                    "&:focus-visible": { outline: `2px solid ${accent}`, outlineOffset: "2px" },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: skin.title,
                      lineHeight: 1.3,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {l.name}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "6px",
                      mt: "3px",
                    }}
                  >
                    {/* nowrap + ellipsis rather than letting it wrap: in a tight
                        column the page-level break-word will otherwise split
                        this one character per line. */}
                    <Typography
                      sx={{
                        fontSize: "9.5px",
                        color: skin.muted,
                        minWidth: 0,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {l.segment}
                    </Typography>
                    <Pill text={l.value} color="#22C55E" />
                  </Box>
                </Box>
              ))}
            </Box>
          </Column>
        ))}
      </Box>
    </Panel>
  );
};

// ── 02 Automated Onboarding ──────────────────────────────────────────────────

export const OnboardingMockup: FC<{ accent: string; skin: Skin; onToggle: () => void }> = ({
  accent,
  skin,
  onToggle,
}) => {
  const [steps, setSteps] = useState(ONBOARDING_STEPS);
  const pct = Math.round((steps.filter((s) => s.done).length / steps.length) * 100);
  const toggle = (id: string) =>
    setSteps((prev) => prev.map((s) => (s.id === id ? { ...s, done: !s.done } : s)));

  return (
    <Panel
      title="Client Onboarding"
      subtitle="New client · Horizon Retail"
      accent={accent}
      skin={skin}
      onToggle={onToggle}
    >
      <Box
        sx={{
          backgroundColor: skin.surface,
          border: `1px solid ${skin.border}`,
          borderRadius: "14px",
          p: { xs: "14px", sm: "18px" },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", mb: "10px" }}>
          <Typography sx={{ fontSize: "13px", fontWeight: 700, color: skin.title }}>
            Setup progress
          </Typography>
          <Typography sx={{ fontSize: "13px", fontWeight: 700, color: accent }}>{pct}%</Typography>
        </Box>

        <Box sx={{ height: "10px", borderRadius: "99px", backgroundColor: skin.track, overflow: "hidden", mb: "14px" }}>
          <Box
            sx={{
              height: "100%",
              width: `${pct}%`,
              borderRadius: "99px",
              background: `linear-gradient(90deg, ${accent}, ${accent}cc)`,
              transition: "width 0.45s cubic-bezier(0.4,0,0.2,1)",
            }}
          />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {steps.map((s) => (
            <Box
              key={s.id}
              component="button"
              type="button"
              onClick={() => toggle(s.id)}
              aria-pressed={s.done}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                p: "4px 2px",
                cursor: "pointer",
                borderRadius: "8px",
                "&:hover": { backgroundColor: skin.track },
                "&:focus-visible": { outline: `2px solid ${accent}`, outlineOffset: "2px" },
              }}
            >
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  flexShrink: 0,
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: s.done ? "#22C55E" : "transparent",
                  border: s.done ? "none" : `1.5px solid ${skin.muted}55`,
                  transition: "background-color 0.25s ease",
                }}
              >
                {s.done && (
                  <Box component="svg" viewBox="0 0 24 24" sx={{ width: "12px", height: "12px" }}>
                    <path d="M5 13l4 4L19 7" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </Box>
                )}
              </Box>
              <Typography
                sx={{
                  flex: 1,
                  fontSize: "12.5px",
                  color: s.done ? skin.body : skin.muted,
                  minWidth: 0,
                }}
              >
                {s.label}
              </Typography>
              <Pill text={s.done ? "DONE" : "PENDING"} color={s.done ? "#22C55E" : "#94A3B8"} solid={s.done} />
            </Box>
          ))}
        </Box>
      </Box>
    </Panel>
  );
};

// ── 03 Projects & Tasks ──────────────────────────────────────────────────────

export const ProjectsMockup: FC<{ accent: string; skin: Skin; onToggle: () => void }> = ({
  accent,
  skin,
  onToggle,
}) => {
  const [tasks, setTasks] = useState<Task[]>(TASKS);
  const advance = (id: string) =>
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id !== id) return t;
        const i = TASK_COLUMNS.indexOf(t.column);
        return i < TASK_COLUMNS.length - 1 ? { ...t, column: TASK_COLUMNS[i + 1] } : t;
      }),
    );

  return (
    <Panel
      title="Projects Board"
      subtitle="Sprint 14 · 6 members"
      accent={accent}
      skin={skin}
      onToggle={onToggle}
    >
      <Box sx={boardSx(3)}>
        {TASK_COLUMNS.map((col) => {
          const items = tasks.filter((t) => t.column === col);
          return (
            <Column key={col} skin={skin} sx={columnSx}>
              <ColumnHead label={col} dot={TASK_DOT[col]} count={items.length} skin={skin} />
              <Box sx={{ display: "flex", flexDirection: "column", gap: "9px", minHeight: "120px" }}>
                {items.map((t) => (
                  <Box
                    key={t.id}
                    component="button"
                    type="button"
                    onClick={() => advance(t.id)}
                    disabled={col === "DONE"}
                    aria-label={col === "DONE" ? `${t.title}, done` : `Move ${t.title} forward`}
                    sx={{
                      textAlign: "left",
                      width: "100%",
                      p: "10px",
                      borderRadius: "10px",
                      border: `1px solid ${skin.border}`,
                      backgroundColor: skin.raised,
                      cursor: col === "DONE" ? "default" : "pointer",
                      transition: "transform 0.18s ease, border-color 0.18s ease",
                      "&:hover": col === "DONE" ? {} : { borderColor: accent, transform: "translateY(-1px)" },
                      "&:focus-visible": { outline: `2px solid ${accent}`, outlineOffset: "2px" },
                    }}
                  >
                    <Pill text="TASK" color={TASK_TINT[col]} solid />
                    <Typography
                      sx={{ fontSize: "12px", color: skin.title, mt: "7px", fontWeight: 500, lineHeight: 1.35 }}
                    >
                      {t.title}
                    </Typography>
                    <Box sx={{ display: "flex", gap: "3px", mt: "8px", justifyContent: "flex-end" }}>
                      {[0, 1, 2].map((i) => (
                        <Box
                          key={i}
                          sx={{
                            width: "14px",
                            height: "14px",
                            borderRadius: "50%",
                            border: `1.5px solid ${TASK_TINT[col]}`,
                            backgroundColor: skin.raised,
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Column>
          );
        })}
      </Box>
    </Panel>
  );
};

// ── 04 Invoicing & Payments ──────────────────────────────────────────────────

const money = (n: number) => `$${n.toLocaleString("en-US")}`;

export const InvoicingMockup: FC<{ accent: string; skin: Skin; onToggle: () => void }> = ({
  accent,
  skin,
  onToggle,
}) => {
  const [invoices, setInvoices] = useState<Invoice[]>(INVOICES);

  // Settling an invoice moves its amount from its old bucket into PAID, so the
  // three headline tiles are always the sum of the book rather than fixed text.
  const settle = (id: string) =>
    setInvoices((prev) => prev.map((i) => (i.id === id ? { ...i, state: "PAID" } : i)));

  const totals = useMemo(() => {
    const t: Record<InvoiceState, number> = { ...INVOICE_BASE };
    for (const i of invoices) t[i.state] += i.amount;
    return t;
  }, [invoices]);
  const billed = totals.PAID + totals.PENDING + totals.OVERDUE;

  return (
    <Panel
      title="Invoicing & Payments"
      subtitle={`This month · ${money(billed)} billed`}
      accent={accent}
      skin={skin}
      onToggle={onToggle}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(3, minmax(0,1fr))" },
          gap: "10px",
          mb: "12px",
        }}
      >
        {(["PAID", "PENDING", "OVERDUE"] as InvoiceState[]).map((s) => (
          <Box
            key={s}
            sx={{
              backgroundColor: skin.surface,
              border: `1px solid ${skin.border}`,
              borderLeft: `3px solid ${INVOICE_COLOR[s]}`,
              borderRadius: "12px",
              p: "12px 14px",
            }}
          >
            <Typography
              sx={{
                fontFamily: MONO,
                fontSize: "9px",
                letterSpacing: "0.1em",
                fontWeight: 700,
                color: INVOICE_COLOR[s],
              }}
            >
              {s}
            </Typography>
            <Typography sx={{ fontSize: { xs: "18px", sm: "21px" }, fontWeight: 700, color: skin.title, mt: "2px" }}>
              {money(totals[s])}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          backgroundColor: skin.surface,
          border: `1px solid ${skin.border}`,
          borderRadius: "12px",
          p: { xs: "12px", sm: "16px" },
        }}
      >
        <Typography sx={{ fontSize: "12.5px", fontWeight: 700, color: skin.title, mb: "10px" }}>
          Recent invoices
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {invoices.map((inv, i) => (
            <Box
              key={inv.id}
              component={inv.state === "PAID" ? "div" : "button"}
              {...(inv.state === "PAID"
                ? {}
                : { type: "button", onClick: () => settle(inv.id), "aria-label": `Mark ${inv.id} paid` })}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr auto", sm: "78px 1fr auto 74px" },
                alignItems: "center",
                gap: "8px",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                borderTop: i === 0 ? "none" : `1px solid ${skin.border}`,
                p: "9px 4px",
                cursor: inv.state === "PAID" ? "default" : "pointer",
                borderRadius: "6px",
                "&:hover": inv.state === "PAID" ? {} : { backgroundColor: skin.track },
                "&:focus-visible": { outline: `2px solid ${accent}`, outlineOffset: "-2px" },
              }}
            >
              <Typography
                sx={{ fontFamily: MONO, fontSize: "10.5px", color: skin.muted, display: { xs: "none", sm: "block" } }}
              >
                {inv.id}
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: skin.body,
                  minWidth: 0,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {inv.client}
              </Typography>
              <Typography
                sx={{
                  fontSize: "12.5px",
                  fontWeight: 700,
                  color: skin.title,
                  textAlign: "right",
                  whiteSpace: "nowrap",
                }}
              >
                {money(inv.amount)}
              </Typography>
              {/* On a phone the row is two columns, so the status drops onto its
                  own line at the right rather than fighting the amount for the
                  second column, which is what it did before. */}
              <Box sx={{ justifySelf: "end", gridColumn: { xs: "1 / -1", sm: "auto" } }}>
                <Pill text={inv.state} color={INVOICE_COLOR[inv.state]} solid />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Panel>
  );
};

// ── 05 SOP Library ───────────────────────────────────────────────────────────

export const SopMockup: FC<{ accent: string; skin: Skin; onToggle: () => void }> = ({
  accent,
  skin,
  onToggle,
}) => {
  const [q, setQ] = useState("");
  const shown = SOP_CATEGORIES.filter((c) => c.name.toLowerCase().includes(q.trim().toLowerCase()));
  const docs = SOP_CATEGORIES.reduce((a, c) => a + c.count, 0);

  return (
    <Panel
      title="SOP Library"
      subtitle={`${docs} documents · ${SOP_CATEGORIES.length} categories`}
      accent={accent}
      skin={skin}
      onToggle={onToggle}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "9px",
          backgroundColor: skin.surface,
          border: `1px solid ${skin.border}`,
          borderRadius: "10px",
          px: "12px",
          mb: "12px",
          "&:focus-within": { borderColor: accent },
        }}
      >
        <Box component="svg" viewBox="0 0 24 24" sx={{ width: "15px", height: "15px", flexShrink: 0 }}>
          <circle cx="11" cy="11" r="7" fill="none" stroke={skin.muted} strokeWidth="2" />
          <path d="M20 20l-3.5-3.5" stroke={skin.muted} strokeWidth="2" strokeLinecap="round" />
        </Box>
        <Box
          component="input"
          value={q}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQ(e.target.value)}
          placeholder="Search SOPs..."
          aria-label="Search standard operating procedures"
          sx={{
            flex: 1,
            minWidth: 0,
            border: "none",
            outline: "none",
            background: "transparent",
            py: "11px",
            fontSize: "12.5px",
            fontFamily: "Prompt",
            color: skin.title,
            "&::placeholder": { color: skin.muted },
          }}
        />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0,1fr))", md: "repeat(3, minmax(0,1fr))" },
          gap: "10px",
          minHeight: "150px",
        }}
      >
        {shown.map((c) => (
          <Box
            key={c.name}
            sx={{
              position: "relative",
              backgroundColor: skin.surface,
              border: `1px solid ${skin.border}`,
              borderRadius: "12px",
              p: "13px",
              transition: "border-color 0.2s ease, transform 0.2s ease",
              "&:hover": { borderColor: c.color, transform: "translateY(-2px)" },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "11px",
                right: "11px",
                width: "11px",
                height: "13px",
                borderRadius: "2px",
                border: `1.5px solid ${c.color}66`,
              }}
            />
            <Box
              sx={{
                width: "28px",
                height: "28px",
                borderRadius: "8px",
                backgroundColor: c.color,
                display: "grid",
                placeItems: "center",
                mb: "10px",
              }}
            >
              <Box sx={{ width: "11px", height: "11px", borderRadius: "3px", backgroundColor: "#fff" }} />
            </Box>
            <Typography sx={{ fontSize: "12.5px", fontWeight: 700, color: skin.title, lineHeight: 1.3 }}>
              {c.name}
            </Typography>
            <Typography sx={{ fontSize: "10.5px", color: skin.muted, mt: "2px" }}>
              {c.count} documents
            </Typography>
          </Box>
        ))}
        {shown.length === 0 && (
          <Typography sx={{ fontSize: "12.5px", color: skin.muted, gridColumn: "1 / -1", py: "22px" }}>
            No category matches "{q}".
          </Typography>
        )}
      </Box>
    </Panel>
  );
};

// ── 06 KPI Dashboard ─────────────────────────────────────────────────────────

export const KpiMockup: FC<{ accent: string; skin: Skin; onToggle: () => void }> = ({
  accent,
  skin,
  onToggle,
}) => {
  const line = REVENUE_TREND.map((v, i) => {
    const x = 6 + (i / (REVENUE_TREND.length - 1)) * 88;
    const y = 92 - v * 78;
    return { x, y };
  });
  const path = line.map((p, i) => `${i ? "L" : "M"}${p.x} ${p.y}`).join(" ");

  return (
    <Panel
      title="KPI Overview"
      subtitle="Q3 performance · Live"
      accent={accent}
      skin={skin}
      onToggle={onToggle}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, minmax(0,1fr))", md: "repeat(4, minmax(0,1fr))" },
          gap: "10px",
          mb: "12px",
        }}
      >
        {KPIS.map((k) => (
          <Box
            key={k.label}
            sx={{
              backgroundColor: skin.surface,
              border: `1px solid ${skin.border}`,
              borderRadius: "12px",
              p: "12px",
            }}
          >
            <Typography
              sx={{ fontFamily: MONO, fontSize: "8.5px", letterSpacing: "0.1em", color: skin.muted }}
            >
              {k.label}
            </Typography>
            <Typography sx={{ fontSize: { xs: "18px", sm: "21px" }, fontWeight: 700, color: skin.title, mt: "3px" }}>
              {k.value}
            </Typography>
            <Box sx={{ mt: "5px" }}>
              <Pill text={k.delta} color="#22C55E" />
            </Box>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.15fr 1fr" },
          gap: "10px",
        }}
      >
        <Box
          sx={{
            backgroundColor: skin.surface,
            border: `1px solid ${skin.border}`,
            borderRadius: "12px",
            p: "14px",
          }}
        >
          <Typography sx={{ fontSize: "12px", fontWeight: 700, color: skin.title, mb: "8px" }}>
            Revenue trend
          </Typography>
          <Box component="svg" viewBox="0 0 100 100" preserveAspectRatio="none" sx={{ width: "100%", height: "140px" }}>
            <path d={`${path} L94 92 L6 92 Z`} fill={accent} opacity="0.12" />
            <path
              d={path}
              fill="none"
              stroke={accent}
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
            {line.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="1.6" fill={accent} vectorEffect="non-scaling-stroke" />
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: skin.surface,
            border: `1px solid ${skin.border}`,
            borderRadius: "12px",
            p: "14px",
          }}
        >
          <Typography sx={{ fontSize: "12px", fontWeight: 700, color: skin.title, mb: "8px" }}>
            Deals by stage
          </Typography>
          <Box sx={{ display: "flex", alignItems: "flex-end", gap: "10px", height: "116px" }}>
            {DEALS_BY_STAGE.map((d) => (
              <Box key={d.label} sx={{ flex: 1, textAlign: "center", minWidth: 0 }}>
                <Box
                  sx={{
                    height: `${d.v * 96}px`,
                    borderRadius: "5px 5px 0 0",
                    backgroundColor: accent, opacity: 0.75,
                    transition: "height 0.5s cubic-bezier(0.4,0,0.2,1)",
                  }}
                />
              </Box>
            ))}
          </Box>
          <Box sx={{ display: "flex", gap: "10px", mt: "6px" }}>
            {DEALS_BY_STAGE.map((d) => (
              <Typography
                key={d.label}
                sx={{ flex: 1, textAlign: "center", fontSize: "9px", color: skin.muted, minWidth: 0 }}
              >
                {d.label}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Panel>
  );
};

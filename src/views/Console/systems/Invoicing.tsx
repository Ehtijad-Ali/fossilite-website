import { FC, useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";

import { useSharedTokens } from "../../../theme/sharedTokens";
import { FONT_MONO } from "../../../theme/fonts";
import { useWorkspace } from "../../../console/store";
import { InvoiceStatus } from "../../../console/types";
import { Btn, Card, Drawer, Field, Label, Row, SearchIcon, Stat, Tag, TONE, ViewHeader, money } from "../ui";

const STATUSES: (InvoiceStatus | "All")[] = ["All", "Paid", "Pending", "Overdue"];

export const Invoicing: FC = () => {
  const T = useSharedTokens();
  const { data, busy, markPaid } = useWorkspace();
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<InvoiceStatus | "All">("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const invoices = data?.invoices ?? [];

  const totals = useMemo(
    () =>
      invoices.reduce(
        (a, i) => ({ ...a, [i.status]: (a[i.status] ?? 0) + i.amount }),
        {} as Record<InvoiceStatus, number>,
      ),
    [invoices],
  );

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return invoices.filter(
      (i) =>
        (status === "All" || i.status === status) &&
        (!needle || `${i.number} ${i.client}`.toLowerCase().includes(needle)),
    );
  }, [invoices, q, status]);

  const open = invoices.find((i) => i.id === openId) ?? null;
  const billed = (totals.Paid ?? 0) + (totals.Pending ?? 0) + (totals.Overdue ?? 0);

  return (
    <Box>
      <ViewHeader
        eyebrow="System 04"
        title="Invoicing & Payments"
        sub="What has been billed, what has landed and what has not. Marking an invoice paid moves the revenue figure on the KPI dashboard."
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(3, minmax(0,1fr))" },
          gap: "12px",
          mb: "18px",
        }}
      >
        <Stat label="Paid" value={money(totals.Paid ?? 0)} accent={TONE.Paid} />
        <Stat label="Pending" value={money(totals.Pending ?? 0)} accent={TONE.Pending} />
        <Stat label="Overdue" value={money(totals.Overdue ?? 0)} accent={TONE.Overdue} />
      </Box>

      <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", mb: "18px" }}>
        <Box sx={{ flex: "1 1 240px", minWidth: 0 }}>
          <Field value={q} onChange={setQ} placeholder="Search number or client…" label="Search invoices" icon={<SearchIcon />} />
        </Box>
        <Box sx={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
          {STATUSES.map((s) => (
            <Box
              key={s}
              component="button"
              type="button"
              onClick={() => setStatus(s)}
              sx={{
                px: "12px",
                py: "8px",
                borderRadius: "99px",
                fontSize: "12px",
                fontFamily: "Prompt",
                cursor: "pointer",
                color: status === s ? T.ctaPrimaryText : T.secondaryText,
                backgroundColor: status === s ? T.ctaPrimaryBg : "transparent",
                border: `0.5px solid ${status === s ? "transparent" : T.border}`,
              }}
            >
              {s}
            </Box>
          ))}
        </Box>
      </Box>

      <Card pad="0">
        <Box sx={{ px: { xs: "16px", sm: "20px" }, py: "14px", borderBottom: `0.5px solid ${T.border}` }}>
          <Typography sx={{ fontSize: "14px", fontWeight: 600, color: T.headline }}>
            Recent invoices
          </Typography>
          <Typography sx={{ fontSize: "12px", color: T.mutedText, mt: "2px" }}>
            {filtered.length} of {invoices.length} · {money(billed)} billed
          </Typography>
        </Box>

        <Box sx={{ overflowX: "auto" }}>
          <Box sx={{ minWidth: "620px" }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "96px 1fr 110px 100px 110px",
                gap: "10px",
                px: { xs: "16px", sm: "20px" },
                py: "10px",
                borderBottom: `0.5px solid ${T.border}`,
                backgroundColor: T.surfaceSubtle,
              }}
            >
              {["Number", "Client", "Amount", "Status", "Due"].map((h) => (
                <Label key={h}>{h}</Label>
              ))}
            </Box>

            {filtered.map((inv) => (
              <Box
                key={inv.id}
                component="button"
                type="button"
                onClick={() => setOpenId(inv.id)}
                aria-label={`Open ${inv.number}`}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "96px 1fr 110px 100px 110px",
                  gap: "10px",
                  alignItems: "center",
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  borderBottom: `0.5px solid ${T.border}`,
                  px: { xs: "16px", sm: "20px" },
                  py: "12px",
                  cursor: "pointer",
                  "&:hover": { backgroundColor: T.surfaceSubtle },
                  "&:focus-visible": { outline: "2px solid #C3A87C", outlineOffset: "-2px" },
                }}
              >
                <Typography sx={{ fontFamily: FONT_MONO, fontSize: "11.5px", color: T.mutedText }}>
                  {inv.number}
                </Typography>
                <Typography
                  sx={{ fontSize: "13.5px", color: T.primaryText, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  {inv.client}
                </Typography>
                <Typography sx={{ fontSize: "13.5px", fontWeight: 600, color: T.headline, whiteSpace: "nowrap" }}>
                  {money(inv.amount)}
                </Typography>
                <Box><Tag text={inv.status} solid /></Box>
                <Typography sx={{ fontSize: "12px", color: inv.status === "Overdue" ? TONE.Overdue : T.mutedText }}>
                  {inv.dueAt}
                </Typography>
              </Box>
            ))}

            {filtered.length === 0 && (
              <Typography sx={{ fontSize: "13px", color: T.mutedText, p: "26px 20px" }}>
                No invoices match that filter.
              </Typography>
            )}
          </Box>
        </Box>
      </Card>

      <Drawer open={!!open} onClose={() => setOpenId(null)} title={open?.number ?? ""}>
        {open && (
          <>
            <Box sx={{ mb: "16px" }}><Tag text={open.status} solid /></Box>
            <Row k="Client">{open.client}</Row>
            <Row k="Amount">{money(open.amount)}</Row>
            <Row k="Issued">{open.issuedAt}</Row>
            <Row k="Due">{open.dueAt}</Row>
            {open.paidAt && <Row k="Paid">{open.paidAt}</Row>}
            {open.projectId && <Row k="Project">{open.projectId}</Row>}

            <Box sx={{ mt: "20px" }}>
              <Label>Lines</Label>
              <Box sx={{ mt: "8px" }}>
                {open.lines.map((l, n) => (
                  <Box
                    key={n}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "12px",
                      py: "9px",
                      borderBottom: `0.5px solid ${T.border}`,
                    }}
                  >
                    <Typography sx={{ fontSize: "13px", color: T.secondaryText, minWidth: 0 }}>
                      {l.description}
                    </Typography>
                    <Typography sx={{ fontSize: "13px", color: T.primaryText, whiteSpace: "nowrap" }}>
                      {money(l.qty * l.unit)}
                    </Typography>
                  </Box>
                ))}
                <Box sx={{ display: "flex", justifyContent: "space-between", pt: "12px" }}>
                  <Typography sx={{ fontSize: "13px", fontWeight: 600, color: T.headline }}>Total</Typography>
                  <Typography sx={{ fontSize: "15px", fontWeight: 700, color: T.headline }}>
                    {money(open.amount)}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {open.status !== "Paid" && (
              <Box sx={{ mt: "22px" }}>
                <Btn variant="primary" full disabled={busy} onClick={() => markPaid(open.id)}>
                  Mark as paid
                </Btn>
                <Typography sx={{ fontSize: "12px", color: T.mutedText, mt: "8px", lineHeight: 1.6 }}>
                  Moves {money(open.amount)} into paid revenue and updates the KPI dashboard.
                </Typography>
              </Box>
            )}
          </>
        )}
      </Drawer>
    </Box>
  );
};

export default Invoicing;

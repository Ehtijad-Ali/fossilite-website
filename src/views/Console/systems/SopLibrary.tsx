import { FC, useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";

import { useSharedTokens } from "../../../theme/sharedTokens";
import { FONT_DISPLAY } from "../../../theme/fonts";
import { useWorkspace } from "../../../console/store";
import { SOP_CATEGORIES, SopCategory } from "../../../console/types";
import { Card, Drawer, Field, Label, Row, SearchIcon, Stat, Tag, ViewHeader } from "../ui";

const CATEGORY_COLOR: Record<SopCategory, string> = {
  "Sales & CRM": "#3B82F6",
  "Client Onboarding": "#F5A524",
  "Project Delivery": "#22C55E",
  "Finance & Invoicing": "#8B5CF6",
  Marketing: "#EC4899",
  "Internal Operations": "#22D3EE",
};

export const SopLibrary: FC = () => {
  const T = useSharedTokens();
  const { data } = useWorkspace();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<SopCategory | "All">("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const sops = data?.sops ?? [];

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return sops.filter(
      (s) =>
        (cat === "All" || s.category === cat) &&
        (!needle || `${s.title} ${s.summary} ${s.owner} ${s.category}`.toLowerCase().includes(needle)),
    );
  }, [sops, q, cat]);

  const open = sops.find((s) => s.id === openId) ?? null;
  const countFor = (c: SopCategory) => sops.filter((s) => s.category === c).length;

  return (
    <Box>
      <ViewHeader
        eyebrow="System 05"
        title="SOP Library"
        sub="The written-down version of how the work gets done. Every other system points back here when something needs explaining once rather than repeatedly."
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, minmax(0,1fr))" },
          gap: "12px",
          mb: "18px",
        }}
      >
        <Stat label="Documents" value={String(sops.length)} />
        <Stat label="Categories" value={String(SOP_CATEGORIES.length)} />
        <Stat label="Showing" value={String(filtered.length)} />
        <Stat label="Owners" value={String(new Set(sops.map((s) => s.owner)).size)} />
      </Box>

      <Box sx={{ mb: "14px" }}>
        <Field value={q} onChange={setQ} placeholder="Search SOPs by title, summary or owner…" label="Search SOPs" icon={<SearchIcon />} />
      </Box>

      <Box sx={{ display: "flex", gap: "7px", flexWrap: "wrap", mb: "20px" }}>
        {(["All", ...SOP_CATEGORIES] as (SopCategory | "All")[]).map((c) => (
          <Box
            key={c}
            component="button"
            type="button"
            onClick={() => setCat(c)}
            sx={{
              px: "13px",
              py: "8px",
              borderRadius: "99px",
              fontSize: "12px",
              fontFamily: "Prompt",
              cursor: "pointer",
              whiteSpace: "nowrap",
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              color: cat === c ? T.ctaPrimaryText : T.secondaryText,
              backgroundColor: cat === c ? T.ctaPrimaryBg : "transparent",
              border: `0.5px solid ${cat === c ? "transparent" : T.border}`,
            }}
          >
            {c !== "All" && (
              <Box sx={{ width: "7px", height: "7px", borderRadius: "2px", backgroundColor: CATEGORY_COLOR[c] }} />
            )}
            {c}
            {c !== "All" && (
              <Box component="span" sx={{ opacity: 0.6 }}>{countFor(c)}</Box>
            )}
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0,1fr))", lg: "repeat(3, minmax(0,1fr))" },
          gap: "12px",
        }}
      >
        {filtered.map((s) => (
          <Box
            key={s.id}
            component="button"
            type="button"
            onClick={() => setOpenId(s.id)}
            aria-label={`Open ${s.title}`}
            sx={{
              textAlign: "left",
              p: "16px",
              borderRadius: "14px",
              border: `0.5px solid ${T.border}`,
              backgroundColor: T.cardBg,
              boxShadow: T.boxShadow,
              cursor: "pointer",
              minWidth: 0,
              transition: "border-color 0.2s ease, transform 0.2s ease",
              "&:hover": { borderColor: CATEGORY_COLOR[s.category], transform: "translateY(-2px)" },
              "&:focus-visible": { outline: "2px solid #C3A87C", outlineOffset: "2px" },
            }}
          >
            <Box
              sx={{
                width: "30px",
                height: "30px",
                borderRadius: "8px",
                backgroundColor: CATEGORY_COLOR[s.category],
                display: "grid",
                placeItems: "center",
                mb: "12px",
              }}
            >
              <Box sx={{ width: "11px", height: "13px", borderRadius: "2px", border: "1.5px solid #fff" }} />
            </Box>
            <Typography sx={{ fontSize: "14.5px", fontWeight: 600, color: T.headline, lineHeight: 1.3 }}>
              {s.title}
            </Typography>
            <Typography
              sx={{
                fontSize: "12.5px",
                color: T.secondaryText,
                mt: "6px",
                lineHeight: 1.6,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {s.summary}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px", mt: "12px" }}>
              <Tag text={s.category} color={CATEGORY_COLOR[s.category]} />
              <Typography sx={{ fontSize: "11px", color: T.mutedText, whiteSpace: "nowrap" }}>
                {s.readMinutes} min
              </Typography>
            </Box>
          </Box>
        ))}

        {filtered.length === 0 && (
          <Card sx={{ gridColumn: "1 / -1" }}>
            <Label>No match</Label>
            <Typography sx={{ fontSize: "14px", color: T.secondaryText, mt: "8px" }}>
              Nothing matches "{q}"{cat !== "All" ? ` in ${cat}` : ""}.
            </Typography>
          </Card>
        )}
      </Box>

      <Drawer open={!!open} onClose={() => setOpenId(null)} title={open?.title ?? ""}>
        {open && (
          <>
            <Box sx={{ mb: "16px" }}>
              <Tag text={open.category} color={CATEGORY_COLOR[open.category]} />
            </Box>
            <Row k="Owner">{open.owner}</Row>
            <Row k="Updated">{open.updatedAt}</Row>
            <Row k="Read time">{open.readMinutes} min</Row>

            <Typography
              sx={{
                fontFamily: FONT_DISPLAY,
                fontSize: "16px",
                fontWeight: 500,
                color: T.headline,
                mt: "22px",
                mb: "10px",
              }}
            >
              {open.summary}
            </Typography>

            {open.body.map((p, n) => (
              <Typography key={n} sx={{ fontSize: "14px", lineHeight: 1.8, color: T.secondaryText, mb: "14px" }}>
                {p}
              </Typography>
            ))}
          </>
        )}
      </Drawer>
    </Box>
  );
};

export default SopLibrary;

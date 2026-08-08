import { FC, useMemo, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useSharedTokens } from "../../theme/sharedTokens";
import { PageHero } from "../../components";
import { PROMPTS, guideBySlug } from "../../content";
import type { Prompt, PromptKind, PromptModel } from "../../content/types";
import { useSeo, collectionSchema, breadcrumbSchema } from "../../hooks/useSeo";

const MONO = 'ui-monospace, SFMono-Regular, Menlo, "Roboto Mono", monospace';
type T = ReturnType<typeof useSharedTokens>;

const MODELS: PromptModel[] = ["ChatGPT", "Claude", "Gemini"];
const KINDS: PromptKind[] = ["Beginner", "Advanced", "Business", "Productivity", "Learning"];

const Pill: FC<{ label: string; active: boolean; onClick: () => void; T: T }> = ({ label, active, onClick, T }) => (
  <Box
    component="button"
    type="button"
    onClick={onClick}
    sx={{
      px: "14px", py: "7px", borderRadius: "99px", cursor: "pointer", font: "inherit",
      fontFamily: "Prompt", fontSize: "12.5px", fontWeight: 500,
      border: `0.5px solid ${active ? "transparent" : T.border}`,
      backgroundColor: active ? T.ctaPrimaryBg : "transparent",
      color: active ? T.ctaPrimaryText : T.secondaryText,
      transition: "all 0.2s ease",
      "&:hover": active ? {} : { borderColor: "#C3A87C", color: T.primaryText },
    }}
  >
    {label}
  </Box>
);

const PromptBlock: FC<{ p: Prompt; T: T }> = ({ p, T }) => {
  const [copied, setCopied] = useState(false);
  const guide = guideBySlug(p.topic);

  const copy = () => {
    navigator.clipboard?.writeText(p.prompt).then(
      () => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      },
      () => { /* clipboard blocked — text remains selectable */ },
    );
  };

  return (
    <Box
      sx={{
        p: { xs: "22px", md: "28px" }, borderRadius: "16px",
        border: `0.5px solid ${T.border}`, backgroundColor: T.cardBg,
        boxShadow: T.boxShadow, mb: "18px",
        transition: "border-color 0.25s ease",
        "&:hover": { borderColor: "#C3A87C" },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", mb: "14px" }}>
        <Box>
          <Typography sx={{ fontFamily: MONO, fontSize: "9.5px", letterSpacing: "0.12em", textTransform: "uppercase", color: T.mutedText, mb: "6px" }}>
            {p.model} · {p.kind}
          </Typography>
          <Typography component="h2" sx={{ fontSize: "18px", fontWeight: 600, fontFamily: "Prompt", color: T.headline, lineHeight: 1.3 }}>
            {p.title}
          </Typography>
        </Box>
        <Button
          onClick={copy}
          sx={{
            flexShrink: 0, px: "15px", py: "7px", borderRadius: "8px", textTransform: "none",
            border: `0.5px solid ${copied ? "#C3A87C" : T.border}`,
            color: copied ? "#C3A87C" : T.secondaryText, fontSize: "12px", fontFamily: "Prompt", minWidth: 0,
            "&:hover": { borderColor: "#C3A87C" },
          }}
        >
          {copied ? "Copied" : "Copy"}
        </Button>
      </Box>

      <Box
        component="pre"
        sx={{
          fontFamily: MONO, fontSize: "12.5px", lineHeight: 1.75, color: T.primaryText,
          backgroundColor: T.surfaceSubtle, border: `0.5px solid ${T.border}`,
          borderRadius: "10px", p: "16px", m: "0 0 18px", whiteSpace: "pre-wrap",
          wordBreak: "break-word", overflowX: "auto",
        }}
      >
        {p.prompt}
      </Box>

      {([
        ["What it does", p.does],
        ["When to use it", p.when],
        ["Expected output", p.expect],
        ["Tip", p.tip],
      ] as const).map(([k, v]) => (
        <Box key={k} sx={{ display: "flex", gap: "12px", mb: "9px", flexDirection: { xs: "column", sm: "row" } }}>
          <Typography sx={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.08em", textTransform: "uppercase", color: T.mutedText, minWidth: "130px", pt: "3px" }}>
            {k}
          </Typography>
          <Typography sx={{ fontSize: "14.5px", lineHeight: 1.7, color: T.secondaryText }}>{v}</Typography>
        </Box>
      ))}

      {guide && (
        <Typography
          component={Link}
          to={`/resources/${guide.slug}`}
          sx={{
            display: "inline-block", mt: "10px", fontSize: "13.5px", color: "#C3A87C",
            textDecoration: "none", fontFamily: "Prompt",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Read the guide: {guide.title} →
        </Typography>
      )}
    </Box>
  );
};

export const Prompts: FC = () => {
  const T = useSharedTokens();
  const [model, setModel] = useState<PromptModel | "all">("all");
  const [kind, setKind] = useState<PromptKind | "all">("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROMPTS.filter((p) => model === "all" || p.model === model)
      .filter((p) => kind === "all" || p.kind === kind)
      .filter((p) => !q || `${p.title} ${p.does} ${p.when} ${p.prompt}`.toLowerCase().includes(q));
  }, [model, kind, query]);

  useSeo({
    title: "AI Prompt Library: ChatGPT, Claude & Gemini Prompts",
    description:
      "A free library of tested prompts for ChatGPT, Claude and Gemini — each with what it does, when to use it, expected output and how to get better results.",
    path: "/prompts",
    jsonLd: [
      collectionSchema(
        "AI Prompt Library",
        "Tested prompts for ChatGPT, Claude and Gemini, with usage guidance for each.",
        "/prompts",
      ),
      breadcrumbSchema([{ name: "Prompts", path: "/prompts" }]),
    ],
  });

  return (
    <Box sx={{ backgroundColor: T.bg }}>
      <PageHero
        eyebrow="Prompt Library"
        title="Prompts that"
        titleAccent="earn their place."
        subtitle="Every prompt here explains what it does, when to reach for it, what good output looks like, and one specific way to improve the result. Replace anything in [SQUARE BRACKETS]."
      />

      {/* Filters */}
      <Box sx={{ px: { xs: "24px", sm: "48px", lg: "80px" }, pt: { xs: "40px", md: "56px" } }}>
        <Box sx={{ maxWidth: "900px", mx: "auto" }}>
          <Typography sx={{ fontFamily: MONO, fontSize: "9.5px", letterSpacing: "0.14em", textTransform: "uppercase", color: T.mutedText, mb: "10px" }}>
            Model
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px", mb: "24px" }}>
            <Pill label="All models" active={model === "all"} onClick={() => setModel("all")} T={T} />
            {MODELS.map((m) => (
              <Pill key={m} label={m} active={model === m} onClick={() => setModel(m)} T={T} />
            ))}
          </Box>

          <Typography sx={{ fontFamily: MONO, fontSize: "9.5px", letterSpacing: "0.14em", textTransform: "uppercase", color: T.mutedText, mb: "10px" }}>
            Type
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px", mb: "24px" }}>
            <Pill label="All types" active={kind === "all"} onClick={() => setKind("all")} T={T} />
            {KINDS.map((k) => (
              <Pill key={k} label={k} active={kind === k} onClick={() => setKind(k)} T={T} />
            ))}
          </Box>

          <Box
            sx={{
              display: "flex", alignItems: "center", gap: "8px", px: "14px", py: "10px",
              borderRadius: "10px", border: `0.5px solid ${T.border}`, backgroundColor: T.cardBg,
              mb: "8px", "&:focus-within": { borderColor: "#C3A87C" },
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke={T.secondaryText} strokeWidth="1.7" />
              <path d="m20 20-3.2-3.2" stroke={T.secondaryText} strokeWidth="1.7" strokeLinecap="round" />
            </svg>
            <Box
              component="input"
              value={query}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
              placeholder="Search prompts…"
              sx={{
                flex: 1, border: "none", outline: "none", background: "transparent",
                color: T.primaryText, fontSize: "13.5px", fontFamily: "Prompt",
                "&::placeholder": { color: T.placeholder },
              }}
            />
          </Box>

          <Typography sx={{ fontSize: "12.5px", color: T.mutedText, fontFamily: MONO, mb: "28px" }}>
            {filtered.length} PROMPT{filtered.length === 1 ? "" : "S"}
          </Typography>
        </Box>
      </Box>

      {/* List */}
      <Box sx={{ px: { xs: "24px", sm: "48px", lg: "80px" }, pb: { xs: "80px", md: "120px" } }}>
        <Box sx={{ maxWidth: "900px", mx: "auto" }}>
          {filtered.length > 0 ? (
            filtered.map((p) => <PromptBlock key={p.id} p={p} T={T} />)
          ) : (
            <Box sx={{ textAlign: "center", py: "60px" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: 600, color: T.headline, fontFamily: "Prompt", mb: "8px" }}>
                Nothing matches those filters
              </Typography>
              <Typography sx={{ fontSize: "14px", color: T.secondaryText }}>
                Try clearing the model or type filter.
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Prompts;

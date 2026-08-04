import { FC, useEffect, useMemo, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link, Navigate, useParams } from "react-router-dom";
import { useSharedTokens } from "../../theme/sharedTokens";
import { FONT_DISPLAY } from "../../theme/fonts";
import {
  guideBySlug,
  relatedFor,
  resolvedInternalLinks,
  categoryName,
  promptsForTopic,
} from "../../content";
import type { Guide } from "../../content/types";
import {
  useSeo,
  articleSchema,
  faqSchema,
  breadcrumbSchema,
} from "../../hooks/useSeo";

const MONO = 'ui-monospace, SFMono-Regular, Menlo, "Roboto Mono", monospace';
const GOLD = "#C3A87C";
type T = ReturnType<typeof useSharedTokens>;

/** Corner brackets — the monograph specimen-plate motif used across the site. */
const Corners: FC<{ color?: string; inset?: string }> = ({ color = GOLD, inset = "12px" }) => (
  <>
    {[
      { top: inset, left: inset, borderTop: `1px solid ${color}`, borderLeft: `1px solid ${color}` },
      { top: inset, right: inset, borderTop: `1px solid ${color}`, borderRight: `1px solid ${color}` },
      { bottom: inset, left: inset, borderBottom: `1px solid ${color}`, borderLeft: `1px solid ${color}` },
      { bottom: inset, right: inset, borderBottom: `1px solid ${color}`, borderRight: `1px solid ${color}` },
    ].map((pos, i) => (
      <Box key={i} sx={{ position: "absolute", width: "14px", height: "14px", pointerEvents: "none", zIndex: 2, ...pos }} />
    ))}
  </>
);

// Section ids double as the table-of-contents anchors and the h2 targets.
const SECTIONS = [
  { id: "introduction", label: "Introduction" },
  { id: "why-it-matters", label: "Why this matters" },
  { id: "core-concepts", label: "Core concepts" },
  { id: "learning-path", label: "Learning path" },
  { id: "examples", label: "Real-world examples" },
  { id: "mistakes", label: "Common mistakes" },
  { id: "best-practices", label: "Best practices" },
  { id: "pro-tips", label: "Professional tips" },
  { id: "business-applications", label: "Business applications" },
  { id: "life-applications", label: "Life applications" },
  { id: "code", label: "Code examples" },
  { id: "exercises", label: "Practical exercises" },
  { id: "checklist", label: "Checklist" },
  { id: "prompts", label: "Prompts" },
  { id: "faq", label: "FAQ" },
  { id: "tools", label: "Recommended tools" },
  { id: "resources", label: "Learning resources" },
  { id: "related", label: "Related guides" },
  { id: "conclusion", label: "Conclusion" },
] as const;

// ─── Reading hooks ───────────────────────────────────────────────────────────

/** Scroll progress through the article body, 0–1. Drives the top filament. */
const useReadingProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0);
    };
    const onScroll = () => {
      // rAF-throttled: scroll fires far more often than we can usefully paint.
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return progress;
};

/**
 * Which section is currently being read. Picks the last heading whose top has
 * passed the reading line, rather than using IntersectionObserver ratios —
 * sections here vary enormously in height, and ratio-based observers flicker
 * badly between a short heading block and a very long one.
 */
const useActiveSection = (ids: readonly string[]) => {
  const [active, setActive] = useState(ids[0] ?? "");
  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const line = window.innerHeight * 0.25;
      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [ids]);
  return active;
};

// ─── Small shared pieces ─────────────────────────────────────────────────────

/**
 * Section heading, styled as a monograph plate marker: a gold rule, a numbered
 * eyebrow, then the display-serif title. The number ties the body back to the
 * contents rail and gives long guides a sense of place.
 */
const H2: FC<{ id: string; index?: number; children: React.ReactNode; T: T }> = ({
  id, index, children, T,
}) => (
  <Box sx={{ mt: { xs: "60px", md: "80px" }, mb: "22px", scrollMarginTop: "120px" }} id={id}>
    <Box
      sx={{
        height: "1px",
        background: `linear-gradient(90deg, ${GOLD}, ${T.border} 45%, transparent)`,
        mb: "22px",
      }}
    />
    {index !== undefined && (
      <Typography
        sx={{
          fontFamily: MONO, fontSize: "10px", letterSpacing: "0.16em",
          color: GOLD, mb: "10px",
        }}
      >
        {String(index).padStart(2, "0")}
      </Typography>
    )}
    <Typography
      component="h2"
      sx={{
        fontSize: { xs: "27px", md: "34px" },
        fontWeight: 500,
        fontFamily: FONT_DISPLAY,
        letterSpacing: "-0.025em",
        lineHeight: 1.12,
        color: T.headline,
      }}
    >
      {children}
    </Typography>
  </Box>
);

const H3: FC<{ children: React.ReactNode; T: T }> = ({ children, T }) => (
  <Typography
    component="h3"
    sx={{
      fontSize: { xs: "17px", md: "19px" },
      fontWeight: 600,
      fontFamily: "Prompt",
      letterSpacing: "-0.01em",
      color: T.headline,
      mb: "8px",
    }}
  >
    {children}
  </Typography>
);

const P: FC<{ children: React.ReactNode; T: T }> = ({ children, T }) => (
  <Typography sx={{ fontSize: "16px", lineHeight: 1.85, color: T.secondaryText, mb: "18px" }}>
    {children}
  </Typography>
);

const Card: FC<{ children: React.ReactNode; T: T; accent?: boolean }> = ({ children, T, accent }) => (
  <Box
    sx={{
      p: { xs: "20px", md: "26px" },
      borderRadius: "14px",
      border: `0.5px solid ${accent ? "#C3A87C" : T.border}`,
      backgroundColor: T.cardBg,
      boxShadow: T.boxShadow,
      mb: "16px",
    }}
  >
    {children}
  </Box>
);

const Label: FC<{ children: React.ReactNode; T: T; tone?: "good" | "bad" }> = ({ children, T, tone }) => (
  <Typography
    component="span"
    sx={{
      display: "inline-block",
      fontFamily: MONO,
      fontSize: "9.5px",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: tone === "bad" ? "#C08A5E" : tone === "good" ? "#5E9E92" : T.mutedText,
      mb: "6px",
    }}
  >
    {children}
  </Typography>
);

const Bullets: FC<{ items: string[]; T: T }> = ({ items, T }) => (
  <Box component="ul" sx={{ pl: 0, m: 0, listStyle: "none" }}>
    {items.map((t) => (
      <Box
        key={t}
        component="li"
        sx={{ display: "flex", gap: "12px", alignItems: "flex-start", mb: "14px" }}
      >
        <Box
          sx={{
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            backgroundColor: "#C3A87C",
            flexShrink: 0,
            mt: "10px",
          }}
        />
        <Typography sx={{ fontSize: "15.5px", lineHeight: 1.8, color: T.secondaryText }}>{t}</Typography>
      </Box>
    ))}
  </Box>
);

// ─── FAQ accordion ───────────────────────────────────────────────────────────

const FaqList: FC<{ faqs: Guide["faqs"]; T: T }> = ({ faqs, T }) => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Box sx={{ borderTop: `0.5px solid ${T.border}` }}>
      {faqs.map((f, i) => (
        <Box key={f.q} sx={{ borderBottom: `0.5px solid ${T.border}` }}>
          <Box
            component="button"
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            sx={{
              width: "100%", background: "none", border: "none", cursor: "pointer",
              textAlign: "left", display: "flex", justifyContent: "space-between",
              alignItems: "center", gap: "18px", py: "20px", font: "inherit",
              color: T.primaryText, transition: "color 0.2s ease",
              "&:hover": { color: "#C3A87C" },
            }}
          >
            <Typography component="h3" sx={{ fontSize: "16px", fontWeight: 500, fontFamily: "Prompt", color: "inherit" }}>
              {f.q}
            </Typography>
            <Box
              sx={{
                flexShrink: 0, fontFamily: MONO, fontSize: "18px", lineHeight: 1,
                transform: open === i ? "rotate(45deg)" : "none",
                transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              +
            </Box>
          </Box>
          {open === i && (
            <Typography sx={{ fontSize: "15.5px", lineHeight: 1.8, color: T.secondaryText, pb: "22px", pr: { md: "48px" } }}>
              {f.a}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
};

// ─── Interactive checklist ───────────────────────────────────────────────────

/**
 * Tickable checklist with a live count. State is per-visit and deliberately not
 * persisted — a checklist that remembers a half-finished pass from three weeks
 * ago is worse than one that starts clean.
 */
const Checklist: FC<{ items: string[]; T: T }> = ({ items, T }) => {
  const [done, setDone] = useState<Set<number>>(new Set());
  const toggle = (i: number) =>
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  const complete = done.size === items.length;

  return (
    <Box
      sx={{
        position: "relative",
        p: { xs: "24px 20px", md: "30px 28px" },
        borderRadius: "16px",
        border: `0.5px solid ${complete ? GOLD : T.border}`,
        backgroundColor: T.cardBg,
        backgroundImage: T.isDark
          ? "radial-gradient(110% 90% at 0% 0%, rgba(195,168,124,0.07) 0%, transparent 60%)"
          : "radial-gradient(110% 90% at 0% 0%, rgba(195,168,124,0.12) 0%, transparent 60%)",
        boxShadow: T.boxShadow,
        transition: "border-color 0.4s ease",
      }}
    >
      <Corners inset="10px" />

      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", mb: "18px" }}>
        <Typography sx={{ fontFamily: MONO, fontSize: "9.5px", letterSpacing: "0.14em", textTransform: "uppercase", color: T.mutedText }}>
          {complete ? "All clear" : "Tick as you go"}
        </Typography>
        <Typography sx={{ fontFamily: MONO, fontSize: "11px", color: complete ? GOLD : T.mutedText, transition: "color 0.3s ease" }}>
          {done.size} / {items.length}
        </Typography>
      </Box>

      <Box sx={{ height: "1px", backgroundColor: T.border, mb: "18px", overflow: "hidden" }}>
        <Box
          sx={{
            height: "100%",
            width: `${(done.size / items.length) * 100}%`,
            backgroundColor: GOLD,
            transition: "width 0.35s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
      </Box>

      {items.map((item, i) => {
        const checked = done.has(i);
        return (
          <Box
            key={item}
            component="button"
            type="button"
            onClick={() => toggle(i)}
            aria-pressed={checked}
            sx={{
              display: "flex", gap: "13px", alignItems: "flex-start", width: "100%",
              textAlign: "left", background: "none", border: "none", font: "inherit",
              cursor: "pointer", p: "7px 0",
              "&:hover .cl-box": { borderColor: GOLD },
            }}
          >
            <Box
              className="cl-box"
              sx={{
                width: "17px", height: "17px", borderRadius: "5px", flexShrink: 0, mt: "2px",
                display: "flex", alignItems: "center", justifyContent: "center",
                border: `1px solid ${checked ? GOLD : T.border}`,
                backgroundColor: checked ? GOLD : "transparent",
                transition: "background-color 0.22s ease, border-color 0.22s ease",
              }}
            >
              <Box
                component="svg"
                viewBox="0 0 24 24"
                fill="none"
                sx={{
                  width: "11px", height: "11px",
                  opacity: checked ? 1 : 0,
                  transform: checked ? "scale(1)" : "scale(0.5)",
                  transition: "opacity 0.2s ease, transform 0.2s cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                <path d="M20 6 9 17l-5-5" stroke={T.isDark ? "#0e1a2b" : "#ffffff"} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
              </Box>
            </Box>
            <Typography
              sx={{
                fontSize: "15px", lineHeight: 1.7,
                color: checked ? T.mutedText : T.secondaryText,
                textDecoration: checked ? "line-through" : "none",
                textDecorationColor: "rgba(195,168,124,0.5)",
                transition: "color 0.22s ease",
              }}
            >
              {item}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

// ─── Copyable code block ─────────────────────────────────────────────────────

const CodeBlock: FC<{ ex: NonNullable<Guide["codeExamples"]>[number]; T: T }> = ({ ex, T }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(ex.code).then(
      () => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      },
      () => { /* clipboard blocked — the code stays selectable */ },
    );
  };
  return (
    <Box sx={{ mb: "26px" }}>
      <H3 T={T}>{ex.title}</H3>
      <Typography sx={{ fontSize: "15px", lineHeight: 1.75, color: T.secondaryText, mb: "14px" }}>
        {ex.intro}
      </Typography>

      <Box
        sx={{
          position: "relative",
          borderRadius: "12px",
          overflow: "hidden",
          border: `0.5px solid ${T.border}`,
          // Code always sits on the dark monograph plate, in both site themes —
          // syntax reads better on a fixed dark ground than on cream.
          backgroundColor: "#0e1a2b",
        }}
      >
        <Box
          sx={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            px: "14px", py: "9px", borderBottom: "0.5px solid rgba(195,168,124,0.18)",
          }}
        >
          <Typography sx={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(240,232,214,0.55)" }}>
            {ex.language}
          </Typography>
          <Button
            onClick={copy}
            sx={{
              px: "12px", py: "3px", minWidth: 0, borderRadius: "6px", textTransform: "none",
              fontSize: "11.5px", fontFamily: "Prompt",
              color: copied ? "#C3A87C" : "rgba(240,232,214,0.7)",
              border: `0.5px solid ${copied ? "#C3A87C" : "rgba(240,232,214,0.18)"}`,
              "&:hover": { borderColor: "#C3A87C", backgroundColor: "rgba(195,168,124,0.08)" },
            }}
          >
            {copied ? "Copied" : "Copy"}
          </Button>
        </Box>

        <Box
          component="pre"
          sx={{
            m: 0, p: "16px", overflowX: "auto",
            fontFamily: MONO, fontSize: "12.5px", lineHeight: 1.7,
            color: "#e8e2d6", whiteSpace: "pre",
          }}
        >
          <code>{ex.code}</code>
        </Box>
      </Box>

      {ex.note && (
        <Typography sx={{ fontSize: "14px", lineHeight: 1.7, color: T.mutedText, mt: "10px", pl: "14px", borderLeft: `2px solid ${T.border}` }}>
          {ex.note}
        </Typography>
      )}
    </Box>
  );
};

// ─── Copyable prompt block ───────────────────────────────────────────────────

const PromptCard: FC<{ p: ReturnType<typeof promptsForTopic>[number]; T: T }> = ({ p, T }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(p.prompt).then(
      () => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      },
      () => { /* clipboard blocked — the text is selectable regardless */ },
    );
  };
  return (
    <Card T={T}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "14px", mb: "10px" }}>
        <Box>
          <Label T={T}>{p.model} · {p.kind}</Label>
          <H3 T={T}>{p.title}</H3>
        </Box>
        <Button
          onClick={copy}
          sx={{
            flexShrink: 0, px: "14px", py: "6px", borderRadius: "8px", textTransform: "none",
            border: `0.5px solid ${copied ? "#C3A87C" : T.border}`, color: copied ? "#C3A87C" : T.secondaryText,
            fontSize: "12px", fontFamily: "Prompt", minWidth: 0,
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
          borderRadius: "10px", p: "16px", m: "0 0 16px", whiteSpace: "pre-wrap",
          wordBreak: "break-word", overflowX: "auto",
        }}
      >
        {p.prompt}
      </Box>
      {([
        ["What it does", p.does],
        ["When to use it", p.when],
        ["Expected output", p.expect],
        ["Tip for better results", p.tip],
      ] as const).map(([k, v]) => (
        <Box key={k} sx={{ display: "flex", gap: "12px", mb: "8px", flexDirection: { xs: "column", sm: "row" } }}>
          <Typography sx={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.08em", textTransform: "uppercase", color: T.mutedText, minWidth: "140px", pt: "3px" }}>
            {k}
          </Typography>
          <Typography sx={{ fontSize: "14.5px", lineHeight: 1.7, color: T.secondaryText }}>{v}</Typography>
        </Box>
      ))}
    </Card>
  );
};

// ─── Page ────────────────────────────────────────────────────────────────────

export const GuideDetail: FC = () => {
  const { slug = "" } = useParams();
  const T = useSharedTokens();
  const guide = guideBySlug(slug);
  const progress = useReadingProgress();

  const related = useMemo(() => (guide ? relatedFor(guide) : []), [guide]);
  const links = useMemo(() => (guide ? resolvedInternalLinks(guide) : []), [guide]);
  const prompts = useMemo(() => (guide ? promptsForTopic(guide.slug) : []), [guide]);

  // Computed before the early return so the scroll-spy hook below is never
  // called conditionally.
  const shown = useMemo(
    () =>
      SECTIONS.filter(
        (s) =>
          (s.id !== "prompts" || prompts.length > 0) &&
          (s.id !== "code" || (guide?.codeExamples?.length ?? 0) > 0),
      ),
    [guide, prompts.length],
  );
  const sectionIds = useMemo(() => shown.map((s) => s.id), [shown]);
  const activeSection = useActiveSection(sectionIds);

  const jsonLd = useMemo(
    () =>
      guide
        ? [
            articleSchema(guide),
            faqSchema(guide.faqs),
            breadcrumbSchema([
              { name: "Resources", path: "/resources" },
              { name: categoryName(guide.category), path: `/resources/category/${guide.category}` },
              { name: guide.title, path: `/resources/${guide.slug}` },
            ]),
          ]
        : [],
    [guide],
  );

  useSeo({
    title: guide?.seoTitle ?? "Guide not found — Fossilite",
    description: guide?.metaDescription ?? "",
    path: `/resources/${slug}`,
    type: "article",
    keywords: guide?.keywords,
    jsonLd,
  });

  // Unknown slug: send readers to the library rather than a dead end.
  if (!guide) return <Navigate to="/resources" replace />;

  // Section numbering is derived from what's actually rendered, so a guide
  // without code examples doesn't leave a gap in the sequence.
  // Widened to string: SECTIONS is `as const`, so the inferred key would be a
  // literal union and `num()` takes the plain id passed at each call site.
  const order = new Map<string, number>(shown.map((s, i) => [s.id, i + 1]));
  const num = (id: string) => order.get(id);

  return (
    <Box sx={{ backgroundColor: T.bg }}>
      {/* Reading progress — a gold filament pinned under the navbar. */}
      <Box
        sx={{
          position: "fixed", top: 0, left: 0, right: 0, height: "2px",
          zIndex: 1300, pointerEvents: "none",
          backgroundColor: "transparent",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: `${progress * 100}%`,
            background: `linear-gradient(90deg, rgba(195,168,124,0.35), ${GOLD})`,
            boxShadow: progress > 0.01 ? `0 0 12px rgba(195,168,124,0.55)` : "none",
            transition: "width 0.12s linear",
          }}
        />
      </Box>

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <Box
        sx={{
          position: "relative", overflow: "hidden",
          px: { xs: "24px", sm: "48px", lg: "80px" },
          pt: { xs: "116px", sm: "140px", md: "160px" },
          pb: { xs: "48px", md: "68px" },
          borderBottom: `0.5px solid ${T.border}`,
        }}
      >
        <Box
          sx={{
            position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
            backgroundImage: `linear-gradient(${T.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${T.gridLine} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, #000 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, #000 40%, transparent 100%)",
          }}
        />
        {/* Warm corner wash — the same raking-light treatment as the cards. */}
        <Box
          sx={{
            position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
            background: T.isDark
              ? "radial-gradient(70% 60% at 15% 0%, rgba(195,168,124,0.10) 0%, transparent 60%)"
              : "radial-gradient(70% 60% at 15% 0%, rgba(195,168,124,0.16) 0%, transparent 60%)",
          }}
        />
        <Box sx={{ position: "relative", zIndex: 1, maxWidth: "820px", mx: "auto" }}>
          {/* Breadcrumb */}
          <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", mb: "22px" }}>
            {[
              { name: "Resources", to: "/resources" },
              { name: categoryName(guide.category), to: `/resources/category/${guide.category}` },
            ].map((c) => (
              <Box key={c.to} sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Typography
                  component={Link}
                  to={c.to}
                  sx={{
                    fontSize: "11.5px", fontFamily: MONO, letterSpacing: "0.08em",
                    textTransform: "uppercase", color: T.mutedText, textDecoration: "none",
                    "&:hover": { color: "#C3A87C" },
                  }}
                >
                  {c.name}
                </Typography>
                <Box sx={{ color: T.fadedText, fontSize: "11px" }}>/</Box>
              </Box>
            ))}
            <Typography sx={{ fontSize: "11.5px", fontFamily: MONO, letterSpacing: "0.08em", textTransform: "uppercase", color: "#C3A87C" }}>
              {guide.level}
            </Typography>
          </Box>

          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "36px", sm: "48px", md: "58px" },
              fontWeight: 500, lineHeight: 1.04, letterSpacing: "-0.025em",
              color: T.headline, fontFamily: FONT_DISPLAY, mb: "22px",
            }}
          >
            {guide.title}
          </Typography>

          <Typography sx={{ fontSize: { xs: "16px", sm: "18px" }, lineHeight: 1.75, color: T.secondaryText, maxWidth: "660px", mb: "26px" }}>
            {guide.metaDescription}
          </Typography>

          {/* Specimen-plate spec strip: bracketed, mono-labelled, hairline-divided */}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: "20px", sm: "0" },
              px: { xs: "20px", sm: "26px" },
              py: "20px",
              borderRadius: "14px",
              border: `0.5px solid ${T.border}`,
              backgroundColor: T.cardBg,
              backgroundImage: T.isDark
                ? "linear-gradient(180deg, rgba(195,168,124,0.05), transparent 70%)"
                : "linear-gradient(180deg, rgba(195,168,124,0.08), transparent 70%)",
              boxShadow: T.boxShadow,
            }}
          >
            <Corners inset="9px" />
            {[
              ["Author", guide.author],
              ["Updated", new Date(guide.updated).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })],
              ["Reading time", `${guide.readingTime} min`],
              ["Sections", String(shown.length)],
            ].map(([k, v], i) => (
              <Box
                key={k}
                sx={{
                  flex: { sm: 1 },
                  minWidth: { xs: "44%", sm: 0 },
                  pl: { sm: i === 0 ? 0 : "22px" },
                  borderLeft: { xs: "none", sm: i === 0 ? "none" : `0.5px solid ${T.border}` },
                }}
              >
                <Typography sx={{ fontFamily: MONO, fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", color: T.mutedText, mb: "5px" }}>
                  {k}
                </Typography>
                <Typography sx={{ fontSize: "13.5px", color: T.primaryText, fontFamily: "Prompt", fontWeight: 500, lineHeight: 1.3 }}>
                  {v}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── Body + sticky contents rail ────────────────────────────────────── */}
      <Box sx={{ px: { xs: "24px", sm: "48px", lg: "80px" }, py: { xs: "40px", md: "56px" } }}>
        <Box
          sx={{
            maxWidth: "1180px", mx: "auto", display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "220px 1fr" },
            gap: { xs: "0", lg: "64px" }, alignItems: "start",
          }}
        >
          {/* Contents */}
          <Box sx={{ display: { xs: "none", lg: "block" }, position: "sticky", top: "110px" }}>
            <Typography sx={{ fontFamily: MONO, fontSize: "9.5px", letterSpacing: "0.14em", textTransform: "uppercase", color: T.mutedText, mb: "14px" }}>
              Contents
            </Typography>
            <Box component="nav" sx={{ position: "relative", display: "flex", flexDirection: "column" }}>
              {/* Track the rail sits on; the active marker rides it. */}
              <Box sx={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "1px", backgroundColor: T.border }} />
              {shown.map((s, i) => {
                const active = activeSection === s.id;
                return (
                  <Box
                    key={s.id}
                    component="a"
                    href={`#${s.id}`}
                    sx={{
                      position: "relative",
                      display: "flex", alignItems: "baseline", gap: "9px",
                      pl: "16px", py: "6px", textDecoration: "none",
                      transition: "color 0.25s ease",
                      color: active ? T.headline : T.secondaryText,
                      "&::before": {
                        content: '""',
                        position: "absolute", left: 0, top: "6px", bottom: "6px",
                        width: "2px", marginLeft: "-0.5px",
                        backgroundColor: GOLD,
                        transform: active ? "scaleY(1)" : "scaleY(0)",
                        transformOrigin: "center",
                        transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
                      },
                      "&:hover": { color: T.headline },
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontFamily: MONO, fontSize: "9px", flexShrink: 0,
                        color: active ? GOLD : T.mutedText,
                        transition: "color 0.25s ease",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </Box>
                    <Box
                      component="span"
                      sx={{
                        fontSize: "12.5px", lineHeight: 1.45,
                        fontWeight: active ? 600 : 400,
                        transition: "font-weight 0.2s ease",
                      }}
                    >
                      {s.label}
                    </Box>
                  </Box>
                );
              })}
            </Box>

            {/* Percentage read — quiet, but it makes long guides feel navigable. */}
            <Box sx={{ mt: "22px", pt: "16px", borderTop: `0.5px solid ${T.border}` }}>
              <Typography sx={{ fontFamily: MONO, fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", color: T.mutedText, mb: "8px" }}>
                Progress
              </Typography>
              <Box sx={{ height: "2px", backgroundColor: T.border, borderRadius: "2px", overflow: "hidden" }}>
                <Box sx={{ height: "100%", width: `${progress * 100}%`, backgroundColor: GOLD, transition: "width 0.12s linear" }} />
              </Box>
              <Typography sx={{ fontFamily: MONO, fontSize: "10px", color: T.mutedText, mt: "7px" }}>
                {Math.round(progress * 100)}%
              </Typography>
            </Box>
          </Box>

          {/* Article */}
          <Box component="article" sx={{ maxWidth: "720px" }}>
            <Box id="introduction" sx={{ scrollMarginTop: "120px" }}>
              {guide.intro.map((p, i) => (
                <Typography
                  key={i}
                  sx={{
                    fontSize: i === 0 ? { xs: "18px", md: "19.5px" } : "16.5px",
                    lineHeight: i === 0 ? 1.72 : 1.85,
                    color: i === 0 ? T.primaryText : T.secondaryText,
                    mb: "22px",
                    // Drop cap on the opening paragraph only. Serif, gold, and
                    // sized to sit on the third baseline.
                    ...(i === 0 && {
                      "&::first-letter": {
                        float: "left",
                        fontFamily: FONT_DISPLAY,
                        fontSize: "58px",
                        lineHeight: 0.82,
                        fontWeight: 500,
                        color: GOLD,
                        paddingRight: "12px",
                        paddingTop: "6px",
                      },
                    }),
                  }}
                >
                  {p}
                </Typography>
              ))}
            </Box>

            <H2 id="why-it-matters" index={num("why-it-matters")} T={T}>Why this matters</H2>
            {guide.whyItMatters.map((p, i) => <P key={i} T={T}>{p}</P>)}

            <H2 id="core-concepts" index={num("core-concepts")} T={T}>Core concepts, explained simply</H2>
            {guide.coreConcepts.map((c) => (
              <Card key={c.term} T={T}>
                <H3 T={T}>{c.term}</H3>
                <Typography sx={{ fontSize: "15.5px", lineHeight: 1.8, color: T.secondaryText, mb: c.detail ? "12px" : 0 }}>
                  {c.explain}
                </Typography>
                {c.detail && (
                  <Typography sx={{ fontSize: "14.5px", lineHeight: 1.75, color: T.mutedText, pl: "14px", borderLeft: `2px solid ${T.border}` }}>
                    {c.detail}
                  </Typography>
                )}
              </Card>
            ))}

            <H2 id="learning-path" index={num("learning-path")} T={T}>Step-by-step learning path</H2>
            {guide.learningPath.map((s, i) => (
              <Box key={s.title} sx={{ display: "flex", gap: "18px", mb: "26px" }}>
                <Typography sx={{ fontFamily: MONO, fontSize: "12px", color: "#C3A87C", pt: "3px", flexShrink: 0, width: "26px" }}>
                  {String(i + 1).padStart(2, "0")}
                </Typography>
                <Box>
                  <H3 T={T}>{s.title}</H3>
                  <Typography sx={{ fontSize: "15.5px", lineHeight: 1.8, color: T.secondaryText, mb: "10px" }}>{s.body}</Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: "18px" }}>
                    {[["Effort", s.effort], ["You'll know you're done when", s.outcome]].map(([k, v]) => (
                      <Box key={k} sx={{ maxWidth: "420px" }}>
                        <Label T={T}>{k}</Label>
                        <Typography sx={{ fontSize: "13.5px", color: T.primaryText, lineHeight: 1.6 }}>{v}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            ))}

            <H2 id="examples" index={num("examples")} T={T}>Examples</H2>
            <P T={T}>
              Cases marked <strong>Documented</strong> happened, and every figure in them appears in
              the linked source. Cases marked <strong>Illustration</strong> are constructed to make a
              failure shape recognisable — they describe no specific organisation and contain no
              measured results.
            </P>
            {guide.examples.map((e) => (
              <Card key={e.scenario} T={T}>
                {e.kind === "documented" ? (
                  <Label T={T} tone="good">Documented case</Label>
                ) : (
                  <Label T={T}>Illustration — constructed, not a real engagement</Label>
                )}
                <H3 T={T}>{e.scenario}</H3>
                <Typography sx={{ fontSize: "15.5px", lineHeight: 1.8, color: T.secondaryText, mb: "14px" }}>{e.walkthrough}</Typography>
                <Label T={T} tone={e.kind === "documented" ? "good" : undefined}>
                  {e.kind === "documented" ? "Result" : "What to take from it"}
                </Label>
                <Typography sx={{ fontSize: "15px", lineHeight: 1.75, color: T.primaryText }}>{e.result}</Typography>
                {e.kind === "documented" && (
                  <Typography
                    component="a"
                    href={e.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: "inline-block", mt: "14px", pt: "12px", borderTop: `0.5px solid ${T.border}`,
                      fontSize: "13px", lineHeight: 1.6, color: T.mutedText, textDecoration: "none",
                      "&:hover": { color: "#C3A87C" },
                    }}
                  >
                    Source: {e.source.label} ↗
                  </Typography>
                )}
              </Card>
            ))}

            <H2 id="mistakes" index={num("mistakes")} T={T}>Common mistakes</H2>
            {guide.mistakes.map((m) => (
              <Card key={m.mistake} T={T}>
                <Label T={T} tone="bad">Mistake</Label>
                <H3 T={T}>{m.mistake}</H3>
                <Typography sx={{ fontSize: "15px", lineHeight: 1.8, color: T.secondaryText, mb: "14px" }}>{m.why}</Typography>
                <Label T={T} tone="good">The fix</Label>
                <Typography sx={{ fontSize: "15px", lineHeight: 1.8, color: T.primaryText }}>{m.fix}</Typography>
              </Card>
            ))}

            <H2 id="best-practices" index={num("best-practices")} T={T}>Best practices</H2>
            <Bullets items={guide.bestPractices} T={T} />

            <H2 id="pro-tips" index={num("pro-tips")} T={T}>Professional tips</H2>
            <Bullets items={guide.proTips} T={T} />

            <H2 id="business-applications" index={num("business-applications")} T={T}>Business applications</H2>
            <Bullets items={guide.businessApplications} T={T} />

            <H2 id="life-applications" index={num("life-applications")} T={T}>Life applications</H2>
            <Bullets items={guide.lifeApplications} T={T} />

            {guide.codeExamples && guide.codeExamples.length > 0 && (
              <>
                <H2 id="code" index={num("code")} T={T}>Code examples</H2>
                <P T={T}>
                  Runnable examples you can copy and adapt. They use the current Anthropic
                  Python SDK — install with <code>pip install anthropic</code> and set{" "}
                  <code>ANTHROPIC_API_KEY</code> in your environment before running.
                </P>
                {guide.codeExamples.map((ex) => <CodeBlock key={ex.title} ex={ex} T={T} />)}
              </>
            )}

            <H2 id="exercises" index={num("exercises")} T={T}>Practical exercises</H2>
            {guide.exercises.map((e) => (
              <Card key={e.title} T={T}>
                <H3 T={T}>{e.title}</H3>
                <Typography sx={{ fontSize: "15.5px", lineHeight: 1.8, color: T.secondaryText, mb: "12px" }}>{e.brief}</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "22px" }}>
                  <Box sx={{ maxWidth: "420px" }}>
                    <Label T={T} tone="good">Success looks like</Label>
                    <Typography sx={{ fontSize: "13.5px", color: T.primaryText, lineHeight: 1.6 }}>{e.success}</Typography>
                  </Box>
                  <Box>
                    <Label T={T}>Time</Label>
                    <Typography sx={{ fontSize: "13.5px", color: T.primaryText, lineHeight: 1.6 }}>{e.time}</Typography>
                  </Box>
                </Box>
              </Card>
            ))}

            <H2 id="checklist" index={num("checklist")} T={T}>Checklist</H2>
            <Checklist items={guide.checklist} T={T} />

            {prompts.length > 0 && (
              <>
                <H2 id="prompts" index={num("prompts")} T={T}>Prompts for this topic</H2>
                <P T={T}>
                  Ready-to-use prompts with what each one does, when to reach for it, and how to
                  improve the result. Replace anything in [SQUARE BRACKETS].
                </P>
                {prompts.map((p) => <PromptCard key={p.id} p={p} T={T} />)}
              </>
            )}

            <H2 id="faq" index={num("faq")} T={T}>Frequently asked questions</H2>
            <FaqList faqs={guide.faqs} T={T} />

            <H2 id="tools" index={num("tools")} T={T}>Recommended tools</H2>
            {guide.tools.map((t) => (
              <Box key={t.name} sx={{ display: "flex", gap: "16px", py: "14px", borderBottom: `0.5px solid ${T.border}`, alignItems: "flex-start" }}>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    component={t.url ? "a" : "span"}
                    {...(t.url ? { href: t.url, target: "_blank", rel: "noopener noreferrer" } : {})}
                    sx={{
                      fontSize: "15px", fontWeight: 600, fontFamily: "Prompt", color: T.headline,
                      textDecoration: "none", "&:hover": t.url ? { color: "#C3A87C" } : {},
                    }}
                  >
                    {t.name}
                  </Typography>
                  <Typography sx={{ fontSize: "14.5px", lineHeight: 1.7, color: T.secondaryText, mt: "3px" }}>{t.what}</Typography>
                </Box>
                <Typography sx={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.08em", textTransform: "uppercase", color: T.mutedText, flexShrink: 0, pt: "4px" }}>
                  {t.cost}
                </Typography>
              </Box>
            ))}

            <H2 id="resources" index={num("resources")} T={T}>Learning resources</H2>
            {guide.resources.map((r) => (
              <Box key={r.title} sx={{ py: "14px", borderBottom: `0.5px solid ${T.border}` }}>
                <Box sx={{ display: "flex", gap: "10px", alignItems: "baseline", flexWrap: "wrap" }}>
                  <Typography
                    component={r.url ? "a" : "span"}
                    {...(r.url ? { href: r.url, target: "_blank", rel: "noopener noreferrer" } : {})}
                    sx={{
                      fontSize: "15px", fontWeight: 600, fontFamily: "Prompt", color: T.headline,
                      textDecoration: "none", "&:hover": r.url ? { color: "#C3A87C" } : {},
                    }}
                  >
                    {r.title}
                  </Typography>
                  <Typography sx={{ fontFamily: MONO, fontSize: "9.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: T.mutedText }}>
                    {r.kind}
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: "14.5px", lineHeight: 1.7, color: T.secondaryText, mt: "3px" }}>{r.note}</Typography>
              </Box>
            ))}

            {links.length > 0 && (
              <Box sx={{ mt: "36px", p: "22px", borderRadius: "14px", border: `0.5px solid ${T.border}`, backgroundColor: T.cardBgAlt }}>
                <Label T={T}>Keep reading</Label>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", mt: "6px" }}>
                  {links.map((l) => (
                    <Typography
                      key={l.slug}
                      component={Link}
                      to={`/resources/${l.slug}`}
                      sx={{ fontSize: "15px", color: T.primaryText, textDecoration: "none", "&:hover": { color: "#C3A87C" } }}
                    >
                      → {l.anchor}
                    </Typography>
                  ))}
                </Box>
              </Box>
            )}

            <H2 id="related" index={num("related")} T={T}>Related guides</H2>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: "16px" }}>
              {related.map((r) => (
                <Box
                  key={r.slug}
                  component={Link}
                  to={`/resources/${r.slug}`}
                  sx={{
                    p: "20px", borderRadius: "14px", textDecoration: "none",
                    border: `0.5px solid ${T.border}`, backgroundColor: T.cardBg,
                    transition: "border-color 0.25s ease, transform 0.25s ease",
                    "&:hover": { borderColor: "#C3A87C", transform: "translateY(-2px)" },
                  }}
                >
                  <Label T={T}>{categoryName(r.category)}</Label>
                  <Typography sx={{ fontSize: "16px", fontWeight: 600, fontFamily: "Prompt", color: T.headline, lineHeight: 1.35, mb: "6px" }}>
                    {r.title}
                  </Typography>
                  <Typography sx={{ fontSize: "13.5px", lineHeight: 1.65, color: T.secondaryText }}>
                    {r.metaDescription}
                  </Typography>
                </Box>
              ))}
            </Box>

            <H2 id="conclusion" index={num("conclusion")} T={T}>Conclusion</H2>
            {guide.conclusion.map((p, i) => <P key={i} T={T}>{p}</P>)}

            {/* CTA */}
            <Box
              sx={{
                mt: "44px", p: { xs: "28px", md: "40px" }, borderRadius: "18px",
                border: `1px solid ${T.gridBorder}`, backgroundColor: T.cardBgAlt,
                boxShadow: T.boxShadow, textAlign: "center",
              }}
            >
              <Typography sx={{ fontSize: { xs: "22px", md: "28px" }, fontWeight: 500, fontFamily: FONT_DISPLAY, color: T.headline, letterSpacing: "-0.02em", mb: "12px" }}>
                {guide.cta.headline}
              </Typography>
              <Typography sx={{ fontSize: "15px", lineHeight: 1.75, color: T.secondaryText, maxWidth: "460px", mx: "auto", mb: "24px" }}>
                {guide.cta.body}
              </Typography>
              <Button
                component={Link}
                to={guide.cta.href}
                sx={{
                  px: "26px", py: "12px", borderRadius: "9px", textTransform: "none",
                  backgroundColor: T.ctaPrimaryBg, color: T.ctaPrimaryText, fontSize: "14px", fontWeight: 500,
                  "&:hover": { backgroundColor: T.ctaPrimaryHover, transform: "translateY(-2px)" },
                  transition: "background-color 0.25s ease, transform 0.2s ease",
                }}
              >
                {guide.cta.label}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GuideDetail;

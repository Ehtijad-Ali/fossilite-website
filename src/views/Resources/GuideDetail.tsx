import { FC, useMemo, useState } from "react";
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
type T = ReturnType<typeof useSharedTokens>;

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
  { id: "exercises", label: "Practical exercises" },
  { id: "checklist", label: "Checklist" },
  { id: "prompts", label: "Prompts" },
  { id: "faq", label: "FAQ" },
  { id: "tools", label: "Recommended tools" },
  { id: "resources", label: "Learning resources" },
  { id: "related", label: "Related guides" },
  { id: "conclusion", label: "Conclusion" },
] as const;

// ─── Small shared pieces ─────────────────────────────────────────────────────

const H2: FC<{ id: string; children: React.ReactNode; T: T }> = ({ id, children, T }) => (
  <Typography
    component="h2"
    id={id}
    sx={{
      scrollMarginTop: "120px",
      fontSize: { xs: "26px", md: "32px" },
      fontWeight: 500,
      fontFamily: FONT_DISPLAY,
      letterSpacing: "-0.02em",
      lineHeight: 1.15,
      color: T.headline,
      mt: { xs: "56px", md: "72px" },
      mb: "20px",
      pt: "28px",
      borderTop: `0.5px solid ${T.border}`,
    }}
  >
    {children}
  </Typography>
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

  const related = useMemo(() => (guide ? relatedFor(guide) : []), [guide]);
  const links = useMemo(() => (guide ? resolvedInternalLinks(guide) : []), [guide]);
  const prompts = useMemo(() => (guide ? promptsForTopic(guide.slug) : []), [guide]);

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

  const shown = SECTIONS.filter((s) => s.id !== "prompts" || prompts.length > 0);

  return (
    <Box sx={{ backgroundColor: T.bg }}>
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <Box
        sx={{
          position: "relative", overflow: "hidden",
          px: { xs: "24px", sm: "48px", lg: "80px" },
          pt: { xs: "116px", sm: "140px", md: "160px" },
          pb: { xs: "40px", md: "56px" },
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

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px", pt: "20px", borderTop: `0.5px solid ${T.border}` }}>
            {[
              ["Author", guide.author],
              ["Updated", new Date(guide.updated).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })],
              ["Read", `${guide.readingTime} min`],
            ].map(([k, v]) => (
              <Box key={k}>
                <Typography sx={{ fontFamily: MONO, fontSize: "9.5px", letterSpacing: "0.12em", textTransform: "uppercase", color: T.mutedText, mb: "3px" }}>
                  {k}
                </Typography>
                <Typography sx={{ fontSize: "13.5px", color: T.primaryText, fontFamily: "Prompt", fontWeight: 500 }}>{v}</Typography>
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
            <Box component="nav" sx={{ display: "flex", flexDirection: "column", gap: "9px", borderLeft: `0.5px solid ${T.border}`, pl: "16px" }}>
              {shown.map((s) => (
                <Typography
                  key={s.id}
                  component="a"
                  href={`#${s.id}`}
                  sx={{
                    fontSize: "13px", color: T.secondaryText, textDecoration: "none",
                    lineHeight: 1.5, transition: "color 0.2s ease",
                    "&:hover": { color: "#C3A87C" },
                  }}
                >
                  {s.label}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Article */}
          <Box component="article" sx={{ maxWidth: "720px" }}>
            <Box id="introduction" sx={{ scrollMarginTop: "120px" }}>
              {guide.intro.map((p, i) => (
                <Typography
                  key={i}
                  sx={{
                    fontSize: i === 0 ? "18px" : "16px",
                    lineHeight: 1.85,
                    color: i === 0 ? T.primaryText : T.secondaryText,
                    mb: "20px",
                  }}
                >
                  {p}
                </Typography>
              ))}
            </Box>

            <H2 id="why-it-matters" T={T}>Why this matters</H2>
            {guide.whyItMatters.map((p, i) => <P key={i} T={T}>{p}</P>)}

            <H2 id="core-concepts" T={T}>Core concepts, explained simply</H2>
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

            <H2 id="learning-path" T={T}>Step-by-step learning path</H2>
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

            <H2 id="examples" T={T}>Examples</H2>
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

            <H2 id="mistakes" T={T}>Common mistakes</H2>
            {guide.mistakes.map((m) => (
              <Card key={m.mistake} T={T}>
                <Label T={T} tone="bad">Mistake</Label>
                <H3 T={T}>{m.mistake}</H3>
                <Typography sx={{ fontSize: "15px", lineHeight: 1.8, color: T.secondaryText, mb: "14px" }}>{m.why}</Typography>
                <Label T={T} tone="good">The fix</Label>
                <Typography sx={{ fontSize: "15px", lineHeight: 1.8, color: T.primaryText }}>{m.fix}</Typography>
              </Card>
            ))}

            <H2 id="best-practices" T={T}>Best practices</H2>
            <Bullets items={guide.bestPractices} T={T} />

            <H2 id="pro-tips" T={T}>Professional tips</H2>
            <Bullets items={guide.proTips} T={T} />

            <H2 id="business-applications" T={T}>Business applications</H2>
            <Bullets items={guide.businessApplications} T={T} />

            <H2 id="life-applications" T={T}>Life applications</H2>
            <Bullets items={guide.lifeApplications} T={T} />

            <H2 id="exercises" T={T}>Practical exercises</H2>
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

            <H2 id="checklist" T={T}>Checklist</H2>
            <Card T={T} accent>
              {guide.checklist.map((c) => (
                <Box key={c} sx={{ display: "flex", gap: "12px", alignItems: "flex-start", mb: "12px" }}>
                  <Box
                    sx={{
                      width: "15px", height: "15px", borderRadius: "4px", flexShrink: 0, mt: "3px",
                      border: `1px solid ${T.border}`, backgroundColor: T.surfaceSubtle,
                    }}
                  />
                  <Typography sx={{ fontSize: "15px", lineHeight: 1.7, color: T.secondaryText }}>{c}</Typography>
                </Box>
              ))}
            </Card>

            {prompts.length > 0 && (
              <>
                <H2 id="prompts" T={T}>Prompts for this topic</H2>
                <P T={T}>
                  Ready-to-use prompts with what each one does, when to reach for it, and how to
                  improve the result. Replace anything in [SQUARE BRACKETS].
                </P>
                {prompts.map((p) => <PromptCard key={p.id} p={p} T={T} />)}
              </>
            )}

            <H2 id="faq" T={T}>Frequently asked questions</H2>
            <FaqList faqs={guide.faqs} T={T} />

            <H2 id="tools" T={T}>Recommended tools</H2>
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

            <H2 id="resources" T={T}>Learning resources</H2>
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

            <H2 id="related" T={T}>Related guides</H2>
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

            <H2 id="conclusion" T={T}>Conclusion</H2>
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

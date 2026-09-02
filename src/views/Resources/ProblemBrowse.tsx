// ─────────────────────────────────────────────────────────────────────────────
// "Start with the problem" — the library entered from the symptom rather than
// from the subject.
//
// The existing index is organised by category (Data Science, Automation, Deep
// Learning), which is right for somebody who already knows what they are
// looking for and no help at all to an owner who only knows that cash is tight.
// This page is the other door.
//
// Every problem resolves its slugs through `guideBySlug` and silently drops
// anything unpublished, so a renamed guide shortens a list instead of shipping
// a dead link.
// ─────────────────────────────────────────────────────────────────────────────
import { FC, useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useSharedTokens } from "../../theme/sharedTokens";
import { FONT_DISPLAY } from "../../theme/fonts";
import { PROBLEMS } from "../../content/problems";
import { guideBySlug } from "../../content";
import { useSeo, breadcrumbSchema } from "../../hooks/useSeo";

const MONO = 'ui-monospace, SFMono-Regular, Menlo, "Roboto Mono", monospace';
const GOLD = "#C3A87C";
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

const useReveal = (i: number) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    if (typeof IntersectionObserver === "undefined") { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, [seen]);
  return {
    ref,
    sx: {
      opacity: seen ? 1 : 0,
      transform: seen ? "none" : "translateY(16px)",
      transition: `opacity 560ms ${EASE} ${(i % 4) * 70}ms, transform 560ms ${EASE} ${(i % 4) * 70}ms`,
    },
  };
};

const ProblemCard: FC<{ p: (typeof PROBLEMS)[number]; i: number }> = ({ p, i }) => {
  const T = useSharedTokens();
  const { ref, sx } = useReveal(i);
  const [hover, setHover] = useState(false);
  const guides = p.slugs.map(guideBySlug).filter((g): g is NonNullable<typeof g> => !!g);
  if (!guides.length) return null;

  return (
    <Box
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{
        p: { xs: "22px", md: "28px" }, borderRadius: "16px",
        border: `0.5px solid ${hover ? `${GOLD}88` : T.border}`,
        backgroundColor: T.cardBg, boxShadow: T.boxShadow,
        ...sx,
        // After the spread, so the reveal transition does not clobber the hover
        // one. Both are listed here because the card animates on both counts.
        transition: `${sx.transition}, border-color 300ms ${EASE}, box-shadow 300ms ${EASE}`,
        ...(hover ? { transform: "translateY(-3px)" } : {}),
      }}
    >
      <Typography sx={{ fontFamily: MONO, fontSize: "9.5px", letterSpacing: "0.14em", textTransform: "uppercase", color: T.mutedText, mb: "12px" }}>
        You might be saying
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "18px", md: "21px" }, fontWeight: 500, fontFamily: FONT_DISPLAY,
          color: T.headline, lineHeight: 1.35, letterSpacing: "-0.02em", mb: "14px",
        }}
      >
        &ldquo;{p.said}&rdquo;
      </Typography>

      <Box sx={{ display: "flex", alignItems: "flex-start", gap: "10px", mb: "10px" }}>
        <Box sx={{ width: "18px", height: "1px", backgroundColor: GOLD, mt: "10px", flexShrink: 0 }} />
        <Typography sx={{ fontSize: "14.5px", fontWeight: 600, color: GOLD, lineHeight: 1.5 }}>
          {p.reallyIs}
        </Typography>
      </Box>
      <Typography sx={{ fontSize: "14.5px", lineHeight: 1.75, color: T.secondaryText, mb: "20px" }}>
        {p.note}
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "2px", pt: "16px", borderTop: `0.5px solid ${T.border}` }}>
        {guides.map((g, n) => (
          <Box
            key={g.slug}
            component={Link}
            to={`/resources/${g.slug}`}
            sx={{
              display: "flex", alignItems: "baseline", gap: "12px",
              py: "10px", textDecoration: "none", borderRadius: "8px",
              transition: `background-color 200ms ${EASE}, padding 200ms ${EASE}`,
              "&:hover": { backgroundColor: T.surfaceSubtle, px: "10px" },
              "&:hover .arrow": { transform: "translateX(3px)", opacity: 1 },
            }}
          >
            <Typography sx={{ fontFamily: MONO, fontSize: "10px", color: T.mutedText, flexShrink: 0, pt: "2px" }}>
              {String(n + 1).padStart(2, "0")}
            </Typography>
            <Typography sx={{ fontSize: "15px", color: T.primaryText, lineHeight: 1.5, flex: 1 }}>
              {g.title}
            </Typography>
            <Typography
              className="arrow"
              sx={{ color: GOLD, fontSize: "14px", flexShrink: 0, opacity: 0.5, transition: `all 200ms ${EASE}` }}
            >
              →
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const ProblemBrowse: FC = () => {
  const T = useSharedTokens();
  useSeo({
    title: "Start With the Problem | Fossilite Resource Library",
    description:
      "Find the guide by the problem you actually have. Cash tight while busy, customers leaving, forecasts always wrong, drowning in admin. Twelve common business problems, and what each one usually turns out to be.",
    path: "/resources/problems",
    keywords: ["business problems ai", "which ai for my business", "ai for small business problems"],
    jsonLd: [
      breadcrumbSchema([
        { name: "Resources", path: "/resources" },
        { name: "Start with the problem", path: "/resources/problems" },
      ]),
    ],
  });

  return (
    <Box sx={{ backgroundColor: T.bg, minHeight: "100vh", pt: { xs: "110px", md: "140px" }, pb: { xs: "80px", md: "120px" } }}>
      <Box sx={{ maxWidth: "1080px", mx: "auto", px: { xs: "20px", md: "40px" } }}>
        <Box
          component={Link}
          to="/resources"
          sx={{
            fontFamily: MONO, fontSize: "10.5px", letterSpacing: "0.14em", textTransform: "uppercase",
            color: T.mutedText, textDecoration: "none", display: "inline-block", mb: "26px",
            transition: `color 200ms ${EASE}`, "&:hover": { color: GOLD },
          }}
        >
          ← All resources
        </Box>

        <Typography
          component="h1"
          sx={{
            fontSize: { xs: "34px", md: "54px" }, fontWeight: 500, fontFamily: FONT_DISPLAY,
            letterSpacing: "-0.03em", lineHeight: 1.06, color: T.headline, mb: "20px",
          }}
        >
          Start with the problem
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16.5px", md: "18.5px" }, lineHeight: 1.75, color: T.secondaryText,
            maxWidth: "60ch", mb: { xs: "44px", md: "60px" },
          }}
        >
          Nobody wakes up needing a classification model. They wake up knowing that cash is
          tight, or that the forecast was wrong again. Find the sentence that sounds like your
          week, and start there.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: { xs: "18px", md: "22px" },
          }}
        >
          {PROBLEMS.map((p, i) => <ProblemCard key={p.id} p={p} i={i} />)}
        </Box>

        <Typography sx={{ fontSize: "14.5px", lineHeight: 1.8, color: T.mutedText, mt: "48px", maxWidth: "60ch" }}>
          None of these quite it? The{" "}
          <Box component={Link} to="/resources" sx={{ color: GOLD, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
            full library
          </Box>{" "}
          is searchable and organised by subject, which is the better door if you already know
          what you are looking for.
        </Typography>
      </Box>
    </Box>
  );
};

export default ProblemBrowse;

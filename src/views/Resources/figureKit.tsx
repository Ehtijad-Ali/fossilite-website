// ──────────────────────────────────────────────────────────────────────────────
// Shared furniture for every figure in the resource library.
//
// This lives apart from GuideDiagram so a second renderer can use the same
// palette, the same motion rules and the same frame without importing back
// into the file that renders it.
//
// The colour rules are the load-bearing part. Structure is drawn in ink and
// colour is only spent where the reader has to tell two things apart. The
// site's gold and teal sit ~14 units apart in normal vision, under the
// legibility floor, so they are chrome here and never encoding.
// ──────────────────────────────────────────────────────────────────────────────
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useSharedTokens } from "../../theme/sharedTokens";

export const MONO = 'ui-monospace, SFMono-Regular, Menlo, "Roboto Mono", monospace';
export const GOLD = "#C3A87C";
export const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export type T = ReturnType<typeof useSharedTokens>;

/** Validated categorical steps. Slots 1-3 clear the all-pairs floors in both modes. */
export const series = (T: T) =>
  T.isDark ? ["#3987e5", "#d95926", "#199e70"] : ["#2a78d6", "#eb6834", "#1baf7a"];

/** Named shorthands for the two outcome hues, taken from the validated set. */
export const good = (T: T) => series(T)[2];
export const bad = (T: T) => series(T)[1];

export const toneColor = (T: T, tone?: string) => {
  const [s1, s2, s3] = series(T);
  if (tone === "good") return s3;
  if (tone === "bad") return s2;
  if (tone === "accent" || tone === "model") return s1;
  if (tone === "input" || tone === "output") return T.secondaryText;
  return T.mutedText;
};

// ─── Motion plumbing ─────────────────────────────────────────────────────────

export const useReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
    const on = () => setReduced(m.matches);
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, []);
  return reduced;
};

/** Fires once, when the figure has scrolled far enough in to be worth watching. */
export const useInView = <E extends HTMLElement>() => {
  const ref = useRef<E | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    if (typeof IntersectionObserver === "undefined") { setSeen(true); return; }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } },
      { threshold: 0.25, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen]);
  return { ref, seen };
};

/** One place that decides whether a thing has arrived yet, and how late. */
export const enter = (on: boolean, reduced: boolean, i = 0, dist = 10) => ({
  opacity: on || reduced ? 1 : 0,
  transform: on || reduced ? "none" : `translateY(${dist}px)`,
  transition: reduced ? "none" : `opacity 520ms ${EASE} ${i * 70}ms, transform 520ms ${EASE} ${i * 70}ms`,
});


export const Figure: FC<{ title: string; caption?: string; T: T; children: ReactNode }> = ({
  title, caption, T, children,
}) => {
  const reduced = useReducedMotion();
  const { ref, seen } = useInView<HTMLDivElement>();
  return (
    <Box
      component="figure"
      ref={ref}
      sx={{
        m: 0, mb: "28px", p: { xs: "18px", md: "26px" },
        borderRadius: "14px",
        border: `0.5px solid ${T.border}`,
        backgroundColor: T.cardBg,
        boxShadow: T.boxShadow,
        // Not `overflow: hidden` — tooltips sit above their mark and would be
        // clipped by the frame. The hairline below is inset, so it needs none.
        position: "relative",
        ...enter(seen, reduced, 0, 14),
      }}
    >
      {/* The gold hairline that runs across the top of a plate, drawn in. */}
      <Box
        aria-hidden
        sx={{
          position: "absolute", top: 0, left: 0, height: "1px",
          width: seen || reduced ? "100%" : "0%",
          background: `linear-gradient(90deg, ${GOLD}, ${T.border} 55%, transparent)`,
          transition: reduced ? "none" : `width 900ms ${EASE} 80ms`,
        }}
      />
      <Typography
        sx={{
          fontFamily: MONO, fontSize: "9.5px", letterSpacing: "0.12em",
          textTransform: "uppercase", color: GOLD, mb: "12px",
        }}
      >
        Figure
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "16px", md: "17.5px" }, fontWeight: 600, fontFamily: "Prompt",
          color: T.headline, mb: "20px", lineHeight: 1.35, letterSpacing: "-0.01em",
        }}
      >
        {title}
      </Typography>
      {/* Wide figures scroll inside their own frame; the page never scrolls sideways. */}
      <Box sx={{ overflowX: "auto", overflowY: "visible" }}>{children}</Box>
      {caption ? (
        <Typography
          component="figcaption"
          sx={{
            fontSize: "13.5px", lineHeight: 1.7, color: T.mutedText,
            mt: "18px", pt: "14px", borderTop: `0.5px solid ${T.border}`,
          }}
        >
          {caption}
        </Typography>
      ) : null}
    </Box>
  );
};


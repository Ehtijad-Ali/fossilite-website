import { FC, useCallback, useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";

import { useSharedTokens } from "../../../../theme/sharedTokens";
import { FONT_DISPLAY, FONT_MONO } from "../../../../theme/fonts";
import { sectionFrameSx } from "../../_kit/frame";

import { ACCENTS, SYSTEMS } from "./data";
import { skinFor } from "./Panel";
import {
  InvoicingMockup,
  KpiMockup,
  LeadCrmMockup,
  OnboardingMockup,
  ProjectsMockup,
  SopMockup,
} from "./mockups";

const GOLD = "#C3A87C";

/** The four corner brackets used on plates across the site. */
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

/**
 * The six-system showcase.
 *
 * One system on screen at a time, chosen from the segmented rail. Each panel
 * is a working miniature rather than a screenshot: leads and tasks advance
 * when clicked, onboarding steps recompute the percentage, settling an
 * invoice moves money between the three totals, and the SOP search filters.
 *
 * Chrome is built from the shared tokens so the section follows the site in
 * both themes. The per-system accents stay, because they are doing a job:
 * they tell you which of the six you are looking at. Everything around them
 * is the monograph language, gold rules and corner brackets included.
 */
export const SystemsSection: FC = () => {
  const T = useSharedTokens();
  const [i, setI] = useState(0);
  const [overrides, setOverrides] = useState<(boolean | null)[]>(() => SYSTEMS.map(() => null));
  const railRef = useRef<HTMLDivElement>(null);

  const sys = SYSTEMS[i];
  const accent = ACCENTS[sys.accent];

  // Panels follow the site theme until someone flips one, then that choice
  // sticks for that system.
  const light = overrides[i] ?? !T.isDark;
  const skin = skinFor(light);
  const toggle = useCallback(
    () => setOverrides((prev) => prev.map((v, n) => (n === i ? !(v ?? !T.isDark) : v))),
    [i, T.isDark],
  );

  const go = useCallback((n: number) => setI((n + SYSTEMS.length) % SYSTEMS.length), []);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") { e.preventDefault(); go(i + 1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); go(i - 1); }
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [i, go]);

  const Mockup = [LeadCrmMockup, OnboardingMockup, ProjectsMockup, InvoicingMockup, SopMockup, KpiMockup][i];

  return (
    <Box
      component="section"
      aria-label="The six systems"
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: T.bg,
        px: { xs: "20px", sm: "40px", lg: "72px" },
        py: { xs: "56px", md: "88px" },
        borderTop: `0.5px solid ${T.border}`,
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: `linear-gradient(${T.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${T.gridLine} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "linear-gradient(180deg, #000 0%, #000 62%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(180deg, #000 0%, #000 62%, transparent 100%)",
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: "-14%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "820px",
          maxWidth: "110%",
          height: "460px",
          pointerEvents: "none",
          background: `radial-gradient(ellipse at center, ${accent.soft} 0%, transparent 68%)`,
          transition: "background 0.5s ease",
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1180px",
          mx: "auto",
          ...sectionFrameSx,
          borderColor: T.border,
          backgroundColor: T.isDark ? "transparent" : T.cardBg,
          boxShadow: T.boxShadow,
        }}
      >
        {/* ── Segmented rail ── */}
        <Box
          ref={railRef}
          role="tablist"
          aria-label="Choose a system"
          sx={{ display: "flex", justifyContent: "center", gap: { xs: "6px", sm: "10px" }, mb: "26px" }}
        >
          {SYSTEMS.map((s, n) => {
            // Filled segments take the CURRENT accent, so the rail recolours as
            // you move: three blue on system three, five purple on system five.
            const on = n <= i;
            return (
              <Box
                key={s.n}
                component="button"
                type="button"
                role="tab"
                id={`system-tab-${s.n}`}
                aria-selected={n === i}
                aria-controls="system-panel"
                aria-label={`System ${String(s.n).padStart(2, "0")}: ${s.title} ${s.titleLine2 ?? ""}`.trim()}
                onClick={() => go(n)}
                sx={{
                  width: { xs: "34px", sm: "68px" },
                  height: "4px",
                  border: "none",
                  borderRadius: "99px",
                  p: 0,
                  cursor: "pointer",
                  backgroundColor: on ? accent.main : T.border,
                  boxShadow: n === i ? `0 0 12px ${accent.main}88` : "none",
                  transition: "background-color 0.35s ease, box-shadow 0.35s ease",
                  "&:hover": { backgroundColor: on ? accent.main : T.mutedText },
                  "&:focus-visible": { outline: `2px solid ${accent.main}`, outlineOffset: "4px" },
                }}
              />
            );
          })}
        </Box>

        {/* ── Heading ── */}
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: FONT_MONO,
            fontSize: { xs: "10.5px", sm: "11.5px" },
            letterSpacing: "0.14em",
            fontWeight: 600,
            color: accent.main,
            mb: "18px",
            transition: "color 0.4s ease",
          }}
        >
          SYSTEM {String(sys.n).padStart(2, "0")}
          <Box component="span" sx={{ color: T.mutedText }}> / 06</Box>
        </Typography>

        <Typography
          component="h2"
          sx={{
            textAlign: "center",
            fontFamily: FONT_DISPLAY,
            fontWeight: 500,
            fontSize: { xs: "38px", sm: "54px", md: "64px" },
            lineHeight: 1.04,
            letterSpacing: "-0.025em",
            color: T.headline,
          }}
        >
          {sys.title}
          {sys.titleLine2 && (
            <>
              <br />
              {sys.titleLine2}
            </>
          )}
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            fontFamily: FONT_MONO,
            fontSize: "9.5px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: T.mutedText,
            mt: "16px",
          }}
        >
          The fix
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: FONT_DISPLAY,
            fontSize: { xs: "21px", sm: "27px" },
            fontWeight: 500,
            letterSpacing: "-0.01em",
            color: accent.main,
            mt: "6px",
            mb: { xs: "28px", md: "38px" },
            transition: "color 0.4s ease",
          }}
        >
          {sys.fix}
        </Typography>

        {/* ── Working panel ── */}
        <Box
          key={i}
          id="system-panel"
          role="tabpanel"
          aria-labelledby={`system-tab-${sys.n}`}
          sx={{ position: "relative", animation: "sysIn 0.45s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          <Corners color={accent.main} inset="-6px" />
          <Mockup accent={accent.main} skin={skin} onToggle={toggle} />
        </Box>

        {/* ── Caption ── */}
        <Box
          aria-hidden
          sx={{
            width: "100%",
            height: "1px",
            mx: "auto",
            mt: { xs: "34px", md: "46px" },
            mb: "22px",
            background: `linear-gradient(90deg, transparent, ${accent.main}, transparent)`,
            transition: "background 0.4s ease",
          }}
        />
        <Typography
          sx={{
            textAlign: "center",
            maxWidth: "720px",
            mx: "auto",
            fontSize: { xs: "16.5px", sm: "19px" },
            lineHeight: 1.65,
            color: T.secondaryText,
          }}
        >
          {sys.caption}
        </Typography>

        {/* ── Prev / next ── */}
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "14px", mt: "30px" }}>
          {([["Previous system", -1], ["Next system", 1]] as const).map(([label, dir]) => (
            <Box
              key={label}
              component="button"
              type="button"
              onClick={() => go(i + dir)}
              aria-label={label}
              sx={{
                display: "grid",
                placeItems: "center",
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                cursor: "pointer",
                color: T.secondaryText,
                backgroundColor: "transparent",
                border: `0.5px solid ${T.border}`,
                transition: "border-color 0.2s ease, color 0.2s ease, transform 0.2s ease",
                "&:hover": { borderColor: accent.main, color: T.primaryText, transform: "translateY(-1px)" },
                "&:focus-visible": { outline: `2px solid ${accent.main}`, outlineOffset: "3px" },
              }}
            >
              <Box
                component="svg"
                viewBox="0 0 24 24"
                sx={{ width: "17px", height: "17px", transform: dir === -1 ? "rotate(180deg)" : "none" }}
              >
                <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </Box>
            </Box>
          ))}
        </Box>

        <Typography
          sx={{
            textAlign: "center",
            fontFamily: FONT_MONO,
            fontSize: "9.5px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: T.mutedText,
            mt: "18px",
          }}
        >
          Every panel is live. Move a lead, complete a step, settle an invoice.
          {/* The boards scroll sideways on a phone and nothing else says so. */}
          <Box component="span" sx={{ display: { xs: "block", md: "none" }, mt: "5px" }}>
            Swipe the board to see every column.
          </Box>
        </Typography>
      </Box>

      <Box component="style">{`@keyframes sysIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}`}</Box>
    </Box>
  );
};

export default SystemsSection;

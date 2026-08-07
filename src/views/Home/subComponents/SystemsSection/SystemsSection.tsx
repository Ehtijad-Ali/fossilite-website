import { FC, useCallback, useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";

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

const MONO = 'ui-monospace, SFMono-Regular, Menlo, "Roboto Mono", monospace';

/**
 * The six-system showcase.
 *
 * One system is on screen at a time, selected by the segmented bar at the top.
 * Each panel is a working miniature rather than a screenshot: leads and tasks
 * advance when clicked, onboarding steps complete and recompute the
 * percentage, settling an invoice moves money between the three totals, and
 * the SOP search filters. Every count on screen is derived from state.
 */
export const SystemsSection: FC = () => {
  const [i, setI] = useState(0);
  // Panel theme is per-system, so switching away and back keeps what you chose.
  const [lightMap, setLightMap] = useState<boolean[]>(() => SYSTEMS.map(() => true));
  const railRef = useRef<HTMLDivElement>(null);

  const sys = SYSTEMS[i];
  const accent = ACCENTS[sys.accent];
  const skin = skinFor(lightMap[i]);
  const toggle = useCallback(
    () => setLightMap((prev) => prev.map((v, n) => (n === i ? !v : v))),
    [i],
  );

  const go = useCallback((n: number) => setI((n + SYSTEMS.length) % SYSTEMS.length), []);

  // Arrow keys move between systems while the rail has focus within it.
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

  const Mockup = [
    LeadCrmMockup,
    OnboardingMockup,
    ProjectsMockup,
    InvoicingMockup,
    SopMockup,
    KpiMockup,
  ][i];

  return (
    <Box
      component="section"
      aria-label="The six systems"
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0A1628",
        px: { xs: "20px", sm: "40px", lg: "72px" },
        py: { xs: "56px", md: "88px" },
      }}
    >
      {/* Blueprint grid, fading out toward the bottom. */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(120,160,220,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(120,160,220,0.07) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "linear-gradient(180deg, #000 0%, #000 62%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(180deg, #000 0%, #000 62%, transparent 100%)",
        }}
      />
      {/* Accent wash behind the heading, recoloured per system. */}
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

      <Box sx={{ position: "relative", zIndex: 1, maxWidth: "1120px", mx: "auto" }}>
        {/* ── Segmented stepper ── */}
        <Box
          ref={railRef}
          role="tablist"
          aria-label="Choose a system"
          sx={{ display: "flex", justifyContent: "center", gap: { xs: "6px", sm: "10px" }, mb: "26px" }}
        >
          {SYSTEMS.map((s, n) => {
            // Every filled segment takes the CURRENT system's accent, so the
            // whole rail recolours as you move through: five purple bars on the
            // SOP system, six green on the KPI one.
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
                  width: { xs: "38px", sm: "72px" },
                  height: "4px",
                  border: "none",
                  borderRadius: "99px",
                  p: 0,
                  cursor: "pointer",
                  backgroundColor: on ? accent.main : "rgba(140,165,200,0.24)",
                  boxShadow: n === i ? `0 0 12px ${accent.main}99` : "none",
                  transition: "background-color 0.35s ease, box-shadow 0.35s ease",
                  "&:hover": { backgroundColor: on ? accent.main : "rgba(140,165,200,0.5)" },
                  "&:focus-visible": { outline: `2px solid ${accent.main}`, outlineOffset: "4px" },
                }}
              />
            );
          })}
        </Box>

        {/* ── Heading block ── */}
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: MONO,
            fontSize: { xs: "12px", sm: "14px" },
            letterSpacing: "0.08em",
            fontWeight: 700,
            color: accent.main,
            mb: "18px",
            transition: "color 0.4s ease",
          }}
        >
          SYSTEM {String(sys.n).padStart(2, "0")}
          <Box component="span" sx={{ color: "rgba(150,172,205,0.65)" }}> / 06</Box>
        </Typography>

        <Typography
          component="h2"
          sx={{
            textAlign: "center",
            fontFamily: "Prompt",
            fontWeight: 700,
            fontSize: { xs: "38px", sm: "56px", md: "68px" },
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            color: "#FFFFFF",
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
            fontFamily: MONO,
            fontSize: "11px",
            letterSpacing: "0.14em",
            color: "rgba(150,172,205,0.7)",
            mt: "14px",
          }}
        >
          THE FIX
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "20px", sm: "26px" },
            fontWeight: 500,
            fontFamily: "Prompt",
            color: accent.main,
            mt: "6px",
            mb: { xs: "28px", md: "38px" },
            transition: "color 0.4s ease",
          }}
        >
          {sys.fix}
        </Typography>

        {/* ── The working panel ── */}
        <Box
          key={i}
          id="system-panel"
          role="tabpanel"
          aria-labelledby={`system-tab-${sys.n}`}
          sx={{ animation: "sysIn 0.45s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          <Mockup accent={accent.main} skin={skin} onToggle={toggle} />
        </Box>

        {/* ── Caption ── */}
        <Box
          aria-hidden
          sx={{
            width: "58px",
            height: "3px",
            borderRadius: "99px",
            backgroundColor: accent.main,
            mx: "auto",
            mt: { xs: "32px", md: "44px" },
            mb: "20px",
            transition: "background-color 0.4s ease",
          }}
        />
        <Typography
          sx={{
            textAlign: "center",
            maxWidth: "760px",
            mx: "auto",
            fontSize: { xs: "17px", sm: "21px" },
            lineHeight: 1.55,
            color: "rgba(214,226,243,0.92)",
          }}
        >
          {sys.caption}
        </Typography>

        {/* ── Prev / next ── */}
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "14px", mt: "32px" }}>
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
                color: "#D6E2F3",
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(150,172,205,0.28)",
                transition: "border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease",
                "&:hover": { borderColor: accent.main, backgroundColor: "rgba(255,255,255,0.08)", transform: "translateY(-1px)" },
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

        <Typography sx={{ textAlign: "center", fontSize: "12px", color: "rgba(150,172,205,0.6)", mt: "16px" }}>
          Every panel is live. Move a lead, complete a step, settle an invoice.
        </Typography>
      </Box>

      <Box component="style">{`@keyframes sysIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}`}</Box>
    </Box>
  );
};

export default SystemsSection;

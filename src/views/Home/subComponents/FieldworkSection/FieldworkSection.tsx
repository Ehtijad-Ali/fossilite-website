import { FC, useEffect, useRef, useState } from "react";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import { FONT_DISPLAY, FONT_MONO } from "../../../../theme/fonts";
import { sectionFrameSx } from "../../_kit/frame";

// dark-navy monograph palette (site is dark-first)
const BG = "#0b1524";
const PLATE_BG = "radial-gradient(120% 130% at 60% 0%, #16273f 0%, #0e1c30 55%, #0a1220 100%)";
const INK = "#F4ECDD";
const GOLD = "#C3A87C";
const LINE = "rgba(244,236,221,0.4)";
const MUTED = "rgba(244,236,221,0.5)";
const CARD_BG = "rgba(255,255,255,0.02)";
const CARD_BORDER = "rgba(244,236,221,0.12)";

const PHRASES = [
  { title: "We dig deep.", desc: "We read the traces your operation already leaves — every process, handoff and bottleneck." },
  { title: "We build smart.", desc: "Then we engineer systems around what the evidence actually shows, not guesswork." },
  { title: "We evolve.", desc: "And we keep refining — because a production system is never finished." },
];

// ── reveal-on-scroll ──────────────────────────────────────────────────────────
function useReveal(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const Corners: FC = () => (
  <>
    {[
      { top: 14, left: 14, bt: 1, bl: 1 },
      { top: 14, right: 14, bt: 1, br: 1 },
      { bottom: 14, left: 14, bb: 1, bl: 1 },
      { bottom: 14, right: 14, bb: 1, br: 1 },
    ].map((c, i) => (
      <Box key={i} sx={{
        position: "absolute", width: "16px", height: "16px", zIndex: 3, pointerEvents: "none",
        top: c.top, bottom: c.bottom, left: c.left, right: c.right,
        borderTop: c.bt ? `1.5px solid ${GOLD}` : undefined,
        borderBottom: c.bb ? `1.5px solid ${GOLD}` : undefined,
        borderLeft: c.bl ? `1.5px solid ${GOLD}` : undefined,
        borderRight: c.br ? `1.5px solid ${GOLD}` : undefined,
      }} />
    ))}
  </>
);

// The real footprint (footprint.svg), inlined as vector paths so it can be
// recoloured (cream / gold) and share the trail's coordinate system. Source art
// is a 200×200 glyph centred ~(100,108); we scale it down and rotate it to point
// along the trail.
const FP_SCALE = 0.13;
const Footprint: FC<{ x: number; y: number; angle: number; show: boolean; latest?: boolean; delay: number }> = ({
  x, y, angle, show, latest, delay,
}) => (
  <g transform={`translate(${x} ${y}) rotate(${angle + 90})`}>
    <g
      style={{
        opacity: show ? (latest ? 1 : 0.82) : 0,
        transform: `scale(${show ? (latest ? 1.16 : 1) : 0.4})`,
        transformBox: "fill-box",
        transformOrigin: "center",
        transition: `opacity 0.35s ease ${delay}ms, transform 0.4s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms`,
      }}
    >
      <g
        transform={`scale(${FP_SCALE}) translate(-100 -108)`}
        stroke={latest ? GOLD : INK}
        strokeWidth={13}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <ellipse cx={100} cy={145} rx={43} ry={53} />
        <path d="M62 112 C62 78 79 60 100 60 C121 60 138 78 138 112" />
        <path d="M100 60V18" />
        <path d="M70 90L30 38" />
        <path d="M130 90L170 38" />
      </g>
    </g>
  </g>
);

// ── specimen plate — animated fossil-footprint trail ──────────────────────────
const SpecimenPlate: FC = () => {
  const { ref, visible } = useReveal(0.25);
  // trail from bottom-left to top-right (spans a tall 400×400 plate)
  const A = { x: 64, y: 344 }, B = { x: 344, y: 92 };
  const angle = (Math.atan2(B.y - A.y, B.x - A.x) * 180) / Math.PI;
  const stations = [0.06, 0.28, 0.5, 0.72, 0.92].map((t, i) => ({
    x: A.x + (B.x - A.x) * t,
    y: A.y + (B.y - A.y) * t,
    label: `ST 0${i + 1}`,
  }));

  // Walking loop: footprints land one after another (ST01 → ST05), hold, then
  // the trail clears and the walk begins again.
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const id = setInterval(() => {
      setStep((s) => (s > stations.length ? 0 : s + 1)); // …→5 (all)→6 (hold)→0 (reset)
    }, 560);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return (
    <Box ref={ref} sx={{
      position: "relative", borderRadius: "16px", overflow: "hidden",
      height: { xs: "420px", sm: "520px", md: "660px" },
      background: PLATE_BG, border: `0.5px solid rgba(195,168,124,0.22)`,
      boxShadow: "0 24px 60px rgba(0,20,45,0.3)",
    }}>
      <Corners />
      <Box component="svg" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet"
        sx={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        {/* scale bar */}
        <g stroke={MUTED} strokeWidth={1} fill="none">
          <line x1={30} y1={46} x2={78} y2={46} />
          <line x1={30} y1={42} x2={30} y2={50} />
          <line x1={78} y1={42} x2={78} y2={50} />
        </g>
        <text x={30} y={38} fill={MUTED} fontSize={7} fontFamily={FONT_MONO} letterSpacing="1">0 — 1 m</text>

        {/* dotted trail */}
        <line
          x1={A.x} y1={A.y} x2={B.x} y2={B.y}
          stroke={LINE} strokeWidth={1} strokeDasharray="1 5" strokeLinecap="round"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.9s ease 0.2s" }}
        />

        {/* footprints + station labels — land one at a time, then loop */}
        {stations.map((s, i) => {
          const shown = step > i;
          const isLatest = step === i + 1; // the freshest print gets a brief emphasis
          return (
            <g key={s.label}>
              <Footprint x={s.x} y={s.y} angle={angle} show={shown} latest={isLatest} delay={0} />
              <text
                x={s.x + 6} y={s.y + 18} fill={MUTED} fontSize={6.5} fontFamily={FONT_MONO} letterSpacing="0.5"
                style={{ opacity: shown ? 0.7 : 0, transition: "opacity 0.4s ease" }}
              >
                {s.label}
              </text>
            </g>
          );
        })}

        {/* Fossilite bone / hourglass mark, faint, top-right */}
        <g stroke={LINE} strokeWidth={1} fill="none" transform="translate(356 64)"
          opacity={visible ? 0.4 : 0} style={{ transition: "opacity 0.8s ease 1.4s" }}>
          <path d="M-7 -13 C 3 -8 3 -3 0 0 C 3 3 3 8 -7 13" />
          <path d="M7 -13 C -3 -8 -3 -3 0 0 C -3 3 -3 8 7 13" />
        </g>

        {/* N arrow — bottom-right */}
        <g stroke={MUTED} strokeWidth={1} fill="none">
          <line x1={362} y1={322} x2={362} y2={298} />
          <path d="M358 303 l4 -6 l4 6" />
        </g>
        <text x={362} y={338} fill={MUTED} fontSize={7} fontFamily={FONT_MONO} textAnchor="middle">N</text>
      </Box>

      {/* caption */}
      <Box sx={{ position: "absolute", left: "22px", bottom: "20px", right: "22px", zIndex: 4, pointerEvents: "none" }}>
        <Typography sx={{ fontFamily: FONT_MONO, fontSize: "10px", color: MUTED, letterSpacing: "0.06em", lineHeight: 1.7 }}>
          SPECIMEN SK-71 · CAMPANIAN, 76–71 MYA
          <br />
          — reconstructed from traces. So are businesses.
        </Typography>
      </Box>
    </Box>
  );
};

// ── phrase card ───────────────────────────────────────────────────────────────
const PhraseCard: FC<{ title: string; desc: string; index: number }> = ({ title, desc, index }) => {
  const { ref, visible } = useReveal(0.4);
  return (
    <Box
      ref={ref}
      sx={{
        position: "relative", overflow: "hidden",
        border: `0.5px solid ${CARD_BORDER}`,
        backgroundColor: CARD_BG,
        borderRadius: "16px",
        px: { xs: "26px", md: "38px" },
        py: { xs: "28px", md: "36px" },
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateX(-28px)",
        transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1), border-color 0.3s ease, background-color 0.3s ease",
        "&:hover": {
          borderColor: "rgba(195,168,124,0.35)",
          backgroundColor: "rgba(255,255,255,0.03)",
          "& .fw-bar": { transform: "scaleY(1)" },
        },
      }}
    >
      {/* gold left accent bar */}
      <Box className="fw-bar" sx={{
        position: "absolute", left: 0, top: "18%", bottom: "18%", width: "2px",
        backgroundColor: GOLD, transformOrigin: "center",
        transform: "scaleY(0.35)", transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
      }} />
      <Box sx={{ display: "flex", alignItems: "center", gap: "12px", mb: "14px" }}>
        <Typography sx={{ fontFamily: FONT_MONO, fontSize: "10px", color: GOLD, letterSpacing: "0.16em" }}>
          {`0${index + 1}`}
        </Typography>
        <Box sx={{ width: "26px", height: "0.5px", backgroundColor: "rgba(244,236,221,0.2)" }} />
      </Box>
      <Typography sx={{ fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: { xs: "30px", md: "42px" }, color: INK, lineHeight: 1, mb: "14px" }}>
        {title}
      </Typography>
      <Typography sx={{ fontFamily: "Prompt", fontSize: "13.5px", color: "rgba(244,236,221,0.62)", lineHeight: 1.7, maxWidth: "360px" }}>
        {desc}
      </Typography>
    </Box>
  );
};

// ── Section ───────────────────────────────────────────────────────────────────
export const FieldworkSection: FC = () => (
  <Box sx={{
    backgroundColor: BG,
    px: { xs: "24px", sm: "48px", lg: "80px" },
    py: { xs: "80px", sm: "110px", md: "150px" },
    position: "relative", overflow: "hidden",
  }}>
    <Box sx={{
      position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
      backgroundImage: "linear-gradient(rgba(195,168,124,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(195,168,124,0.04) 1px, transparent 1px)",
      backgroundSize: "64px 64px",
    }} />

    <Box sx={{ position: "relative", zIndex: 1, maxWidth: "1240px", mx: "auto", ...sectionFrameSx }}>
      <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
        {/* left: content — a tight, centred stack of the three phrases */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Box sx={{
            display: "flex", flexDirection: "column",
            gap: { xs: "18px", md: "22px" },
            justifyContent: "center",
          }}>
            {PHRASES.map((p, i) => (
              <PhraseCard key={p.title} title={p.title} desc={p.desc} index={i} />
            ))}
          </Box>
        </Grid>

        {/* right: the specimen plate */}
        <Grid size={{ xs: 12, md: 7 }}>
          <SpecimenPlate />
        </Grid>
      </Grid>
    </Box>
  </Box>
);

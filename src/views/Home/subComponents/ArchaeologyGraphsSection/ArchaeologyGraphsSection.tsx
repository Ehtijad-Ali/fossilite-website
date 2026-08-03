import { FC, useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useThemeMode } from "../../../../theme/theme";
import { FONT_DISPLAY } from "../../../../theme/fonts";
import { sectionFrameSx } from "../../_kit/frame";

// ── Design tokens (site cream/navy palette + earthy archaeology accents) ─────
const getT = (isDark: boolean) => ({
  bg:              isDark ? "#0e1a2b" : "#FFF4E3",
  panelBg:         isDark ? "#13233a" : "#FBF3E4",
  panelBorder:     isDark ? "#263b57" : "#d9c9b0",
  panelBorderHover:isDark ? "#BBC0C6" : "#001932",
  headline:        isDark ? "#FFF4E3" : "#001932",
  headlineFaded:   isDark ? "#3a3a3a" : "#BBC0C6",
  body:            isDark ? "#BBC0C6" : "#4a4a6a",
  eyebrow:         isDark ? "#BBC0C6" : "#4a4a6a",
  divider:         isDark ? "#263b57" : "#d9c9b0",
  boxShadow:       isDark ? "none" : "0 6px 28px rgba(0,25,50,0.07)",
  gridLineBg:      isDark ? "rgba(187,192,198,0.025)" : "rgba(0,25,50,0.035)",
  topGlow:         isDark
    ? "linear-gradient(90deg, transparent, rgba(187,192,198,0.14), transparent)"
    : "linear-gradient(90deg, transparent, rgba(0,25,50,0.22), transparent)",
  // canvas internals
  grid:      isDark ? "rgba(187,192,198,0.08)" : "rgba(0,25,50,0.07)",
  axis:      isDark ? "rgba(187,192,198,0.28)" : "rgba(0,25,50,0.22)",
  labelText: isDark ? "rgba(187,192,198,0.75)" : "rgba(0,25,50,0.55)",
  ink:       isDark ? "#FFF4E3" : "#001932",
  pillBg:    isDark ? "rgba(10,14,20,0.92)" : "rgba(0,25,50,0.90)",
  pillText:  "#FFF4E3",
  // archaeology accents (read on both cream and charcoal)
  terracotta: "#C1683C",
  ochre:      "#D8A24A",
  tan:        "#C3A87C",
  teal:       "#2E8B84",
  bone:       isDark ? "#BBC0C6" : "#9a8867",
});
type Tok = ReturnType<typeof getT>;

// ── small math helpers ───────────────────────────────────────────────────────
const clamp01 = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
// deterministic pseudo-random in [0,1) from two seeds
const frac = (x: number) => x - Math.floor(x);
const rand2 = (a: number, b: number) => frac(Math.sin(a * 12.9898 + b * 78.233) * 43758.5453);

// ── reduced-motion preference ────────────────────────────────────────────────
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
    const on = () => setReduced(m.matches);
    m.addEventListener?.("change", on);
    return () => m.removeEventListener?.("change", on);
  }, []);
  return reduced;
}

// ── one-shot reveal-on-scroll ────────────────────────────────────────────────
function useReveal(threshold = 0.15) {
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

// ── active-while-in-view (pauses animation when scrolled away) ────────────────
function useActiveInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setActive(e.isIntersecting), { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, active };
}

// ── crisp DPR-correct canvas that survives 0px-at-mount (mobile / SPA) ───────
type Draw = (ctx: CanvasRenderingContext2D, w: number, h: number, dpr: number, elapsed: number) => void;
function useCanvasLoop(active: boolean, reduced: boolean, draw: Draw) {
  const ref = useRef<HTMLCanvasElement>(null);
  const size = useRef({ w: 1, h: 1, dpr: 1 });
  const drawRef = useRef(draw);
  drawRef.current = draw;

  // sizing
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const measure = () => {
      const r = c.getBoundingClientRect();
      if (!r.width || !r.height) return;
      const dpr = window.devicePixelRatio || 1;
      const w = Math.max(1, Math.round(r.width * dpr));
      const h = Math.max(1, Math.round(r.height * dpr));
      if (c.width !== w || c.height !== h) { c.width = w; c.height = h; }
      size.current = { w, h, dpr };
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(c);
    window.addEventListener("resize", measure);
    return () => { ro.disconnect(); window.removeEventListener("resize", measure); };
  }, []);

  // animation
  useEffect(() => {
    const c = ref.current;
    const ctx = c?.getContext("2d");
    if (!c || !ctx) return;
    if (!active && !reduced) return;
    let raf = 0;
    const start = performance.now();
    let stopped = false;
    const frame = (now: number) => {
      const { w, h, dpr } = size.current;
      if (w > 1 && h > 1) {
        drawRef.current(ctx, w, h, dpr, reduced ? 1e7 : now - start);
        if (reduced) { stopped = true; return; }   // one settled frame is enough
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => { if (!stopped) cancelAnimationFrame(raf); };
  }, [active, reduced]);

  return ref;
}

// shared canvas element
const Canvas: FC<{ innerRef: React.RefObject<HTMLCanvasElement> }> = ({ innerRef }) => (
  <Box component="canvas" ref={innerRef} sx={{ width: "100%", height: "100%", display: "block" }} />
);

// ═══ GRAPH 1 — Artifact clustering (unsupervised embeddings) ══════════════════
const CLUSTERS = [
  { x: 0.28, y: 0.66, label: "Pottery", key: "terracotta" as const },
  { x: 0.72, y: 0.70, label: "Bone",    key: "ochre" as const },
  { x: 0.52, y: 0.30, label: "Tool",    key: "teal" as const },
];
interface CPoint { tx: number; ty: number; c: number; seed: number }

const GraphClusters: FC<{ active: boolean; reduced: boolean; T: Tok }> = ({ active, reduced, T }) => {
  const data = useRef<CPoint[]>();
  if (!data.current) {
    const pts: CPoint[] = [];
    CLUSTERS.forEach((cl, ci) => {
      const n = 11;
      for (let i = 0; i < n; i++) {
        const a = rand2(ci + 1, i + 3), b = rand2(i + 7, ci + 2);
        pts.push({
          tx: clamp01(cl.x + (a - 0.5) * 0.20),
          ty: clamp01(cl.y + (b - 0.5) * 0.20),
          c: ci,
          seed: ci * 53 + i * 7 + 1,
        });
      }
    });
    data.current = pts;
  }

  const ref = useCanvasLoop(active, reduced, (ctx, w, h, dpr, elapsed) => {
    ctx.clearRect(0, 0, w, h);
    const pL = 16 * dpr, pR = 16 * dpr, pT = 14 * dpr, pB = 14 * dpr;
    const pw = w - pL - pR, ph = h - pT - pB;
    const X = (nx: number) => pL + nx * pw;
    const Y = (ny: number) => pT + ny * ph;

    // faint grid
    ctx.strokeStyle = T.grid;
    ctx.lineWidth = 1 * dpr;
    for (let i = 1; i < 5; i++) {
      ctx.beginPath(); ctx.moveTo(pL, pT + (ph * i) / 5); ctx.lineTo(pL + pw, pT + (ph * i) / 5); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(pL + (pw * i) / 5, pT); ctx.lineTo(pL + (pw * i) / 5, pT + ph); ctx.stroke();
    }

    const cycle = 5200;
    const ci = reduced ? 0 : Math.floor(elapsed / cycle);
    const tp = reduced ? 1 : (elapsed % cycle) / cycle;
    const gather = reduced ? 1 : easeOutCubic(clamp01(tp / 0.5));
    const colorFor = (c: number) => T[CLUSTERS[c].key];

    // spokes from centroid → point (appear as they gather)
    ctx.lineWidth = 1 * dpr;
    for (const p of data.current!) {
      const cl = CLUSTERS[p.c];
      const sx = 0.1 + rand2(p.seed, ci) * 0.8;
      const sy = 0.12 + rand2(p.seed + 31, ci) * 0.74;
      const px = lerp(sx, p.tx, gather), py = lerp(sy, p.ty, gather);
      ctx.strokeStyle = colorFor(p.c);
      ctx.globalAlpha = 0.16 * gather;
      ctx.beginPath(); ctx.moveTo(X(cl.x), Y(cl.y)); ctx.lineTo(X(px), Y(py)); ctx.stroke();
    }
    ctx.globalAlpha = 1;

    // points
    for (const p of data.current!) {
      const sx = 0.1 + rand2(p.seed, ci) * 0.8;
      const sy = 0.12 + rand2(p.seed + 31, ci) * 0.74;
      const jitter = reduced ? 0 : Math.sin(elapsed * 0.002 + p.seed) * 0.006 * gather;
      const px = lerp(sx, p.tx + jitter, gather);
      const py = lerp(sy, p.ty - jitter, gather);
      const x = X(px), y = Y(py), r = 3.4 * dpr;
      ctx.globalAlpha = 0.4 + 0.6 * gather;
      const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, r * 0.1, x, y, r);
      g.addColorStop(0, "rgba(255,255,255,0.65)");
      g.addColorStop(0.35, colorFor(p.c));
      g.addColorStop(1, colorFor(p.c));
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;

    // cluster labels
    const la = reduced ? 1 : clamp01((gather - 0.55) / 0.45);
    if (la > 0.01) {
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.font = `600 ${11 * dpr}px Prompt, system-ui, sans-serif`;
      for (const cl of CLUSTERS) {
        const label = cl.label;
        const tw = ctx.measureText(label).width;
        const dotGap = 12 * dpr;
        const padX = 9 * dpr, hh = 20 * dpr;
        const bw = tw + dotGap + padX * 2, x = X(cl.x), y = Y(cl.y) - 26 * dpr;
        ctx.globalAlpha = la;
        ctx.fillStyle = T.pillBg;
        const lx = x - bw / 2, ly = y - hh / 2, rr = hh / 2;
        ctx.beginPath();
        ctx.moveTo(lx + rr, ly);
        ctx.arcTo(lx + bw, ly, lx + bw, ly + hh, rr);
        ctx.arcTo(lx + bw, ly + hh, lx, ly + hh, rr);
        ctx.arcTo(lx, ly + hh, lx, ly, rr);
        ctx.arcTo(lx, ly, lx + bw, ly, rr);
        ctx.closePath(); ctx.fill();
        ctx.fillStyle = T[cl.key];
        ctx.beginPath(); ctx.arc(lx + padX + 3 * dpr, y, 3 * dpr, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = T.pillText;
        ctx.fillText(label, x + dotGap / 2, y + 0.5 * dpr);
      }
      ctx.globalAlpha = 1;
    }
  });

  return <Canvas innerRef={ref} />;
};

// ═══ GRAPH 2 — Excavation depth vs. model accuracy ═══════════════════════════
const GraphStrata: FC<{ active: boolean; reduced: boolean; T: Tok }> = ({ active, reduced, T }) => {
  const acc = useRef<number[]>();
  if (!acc.current) {
    const N = 46, out: number[] = [];
    for (let i = 0; i < N; i++) {
      const base = 0.62 + (0.965 - 0.62) * easeOutCubic(i / (N - 1));
      out.push(clamp01(base + (rand2(i + 5, 9) - 0.5) * 0.02));
    }
    acc.current = out;
  }

  const ref = useCanvasLoop(active, reduced, (ctx, w, h, dpr, elapsed) => {
    ctx.clearRect(0, 0, w, h);
    const pL = 34 * dpr, pR = 14 * dpr, pT = 16 * dpr, pB = 26 * dpr;
    const pw = w - pL - pR, ph = h - pT - pB;
    const A0 = 0.58, A1 = 1.0;
    const N = acc.current!.length;
    const X = (i: number) => pL + (i / (N - 1)) * pw;
    const Yv = (v: number) => pT + (1 - (v - A0) / (A1 - A0)) * ph;

    // strata bands (excavation context) — deposit in over first 900ms
    const bandsA = reduced ? 1 : clamp01(elapsed / 900);
    const bandColors = [T.terracotta, T.ochre, T.tan, T.teal, T.bone];
    const nb = bandColors.length;
    for (let i = 0; i < nb; i++) {
      const y0 = pT + (ph * i) / nb, bh = ph / nb;
      ctx.globalAlpha = 0.13 * bandsA;
      ctx.fillStyle = bandColors[i];
      ctx.fillRect(pL, y0, pw, bh);
      ctx.globalAlpha = 0.5 * bandsA;
      ctx.strokeStyle = T.grid; ctx.lineWidth = 1 * dpr;
      ctx.setLineDash([3 * dpr, 4 * dpr]);
      ctx.beginPath(); ctx.moveTo(pL, y0); ctx.lineTo(pL + pw, y0); ctx.stroke();
      ctx.setLineDash([]);
    }
    ctx.globalAlpha = 1;

    // y ticks
    ctx.fillStyle = T.labelText;
    ctx.font = `${9.5 * dpr}px Prompt, system-ui, sans-serif`;
    ctx.textAlign = "right"; ctx.textBaseline = "middle";
    [0.6, 0.8, 1.0].forEach((v) => ctx.fillText(v.toFixed(1), pL - 6 * dpr, Yv(v)));
    // x label
    ctx.textAlign = "center"; ctx.textBaseline = "bottom";
    ctx.fillText("Excavation depth →", pL + pw / 2, h - 6 * dpr);

    // accuracy reveal
    const cycle = 5200;
    const tp = reduced ? 1 : (elapsed % cycle) / cycle;
    const rev = reduced ? 1 : easeInOut(clamp01(tp / 0.55));
    const fx = pL + rev * pw;

    const pts: [number, number][] = [];
    for (let i = 0; i < N; i++) {
      if (X(i) <= fx) pts.push([X(i), Yv(acc.current![i])]);
    }
    // interpolate tip
    if (pts.length && pts.length < N) {
      const i = pts.length; const x0 = X(i - 1), x1 = X(i);
      const t = (fx - x0) / (x1 - x0 || 1);
      pts.push([fx, lerp(Yv(acc.current![i - 1]), Yv(acc.current![i]), clamp01(t))]);
    }

    if (pts.length > 1) {
      // area fill
      const grad = ctx.createLinearGradient(0, pT, 0, pT + ph);
      grad.addColorStop(0, "rgba(193,104,60,0.28)");
      grad.addColorStop(1, "rgba(193,104,60,0.0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(pts[0][0], pT + ph);
      for (const [x, y] of pts) ctx.lineTo(x, y);
      ctx.lineTo(pts[pts.length - 1][0], pT + ph);
      ctx.closePath(); ctx.fill();

      // line
      ctx.strokeStyle = T.terracotta;
      ctx.lineWidth = 2 * dpr;
      ctx.lineJoin = "round";
      ctx.beginPath();
      pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
      ctx.stroke();

      // moving tip
      const [tx, ty] = pts[pts.length - 1];
      ctx.fillStyle = T.terracotta;
      ctx.beginPath(); ctx.arc(tx, ty, 4 * dpr, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      ctx.beginPath(); ctx.arc(tx - 1 * dpr, ty - 1 * dpr, 1.6 * dpr, 0, Math.PI * 2); ctx.fill();
    }
  });

  return <Canvas innerRef={ref} />;
};

// ═══ GRAPH 3 — Radiocarbon regression ════════════════════════════════════════
interface SPoint { x: number; noisy: number; seed: number }
const GraphCarbon: FC<{ active: boolean; reduced: boolean; T: Tok }> = ({ active, reduced, T }) => {
  const K = 2.3;
  const curve = (nx: number) => Math.exp(-K * nx);
  const data = useRef<SPoint[]>();
  if (!data.current) {
    const out: SPoint[] = [];
    for (let i = 0; i < 16; i++) {
      const x = 0.05 + rand2(i + 2, 4) * 0.9;
      const noisy = clamp01(curve(x) + (rand2(i + 11, 6) - 0.5) * 0.14);
      out.push({ x, noisy, seed: i * 13 + 3 });
    }
    data.current = out;
  }

  const ref = useCanvasLoop(active, reduced, (ctx, w, h, dpr, elapsed) => {
    ctx.clearRect(0, 0, w, h);
    const pL = 30 * dpr, pR = 14 * dpr, pT = 16 * dpr, pB = 26 * dpr;
    const pw = w - pL - pR, ph = h - pT - pB;
    const X = (nx: number) => pL + nx * pw;
    const Y = (v: number) => pT + (1 - v) * ph;

    // grid
    ctx.strokeStyle = T.grid; ctx.lineWidth = 1 * dpr;
    for (let i = 1; i < 4; i++) {
      ctx.beginPath(); ctx.moveTo(pL, pT + (ph * i) / 4); ctx.lineTo(pL + pw, pT + (ph * i) / 4); ctx.stroke();
    }
    // axes labels
    ctx.fillStyle = T.labelText;
    ctx.font = `${9.5 * dpr}px Prompt, system-ui, sans-serif`;
    ctx.textAlign = "center"; ctx.textBaseline = "bottom";
    ctx.fillText("Age →", pL + pw / 2, h - 6 * dpr);
    ctx.save();
    ctx.translate(11 * dpr, pT + ph / 2); ctx.rotate(-Math.PI / 2);
    ctx.textBaseline = "middle";
    ctx.fillText("Isotope", 0, 0);
    ctx.restore();

    const cycle = 5000;
    const ci = reduced ? 0 : Math.floor(elapsed / cycle);
    const tp = reduced ? 1 : (elapsed % cycle) / cycle;
    const drawLen = reduced ? 1 : easeInOut(clamp01(tp / 0.5));
    const settle = reduced ? 1 : easeOutCubic(clamp01((tp - 0.12) / 0.5));

    const steps = 60;
    // confidence band (progressive)
    const band = 0.07;
    ctx.fillStyle = "rgba(46,139,132,0.16)";
    ctx.beginPath();
    for (let i = 0; i <= steps; i++) {
      const nx = (i / steps) * drawLen;
      ctx.lineTo(X(nx), Y(clamp01(curve(nx) + band)));
    }
    for (let i = steps; i >= 0; i--) {
      const nx = (i / steps) * drawLen;
      ctx.lineTo(X(nx), Y(clamp01(curve(nx) - band)));
    }
    ctx.closePath(); ctx.fill();

    // residual lines + sample points
    for (const p of data.current!) {
      if (p.x > drawLen) continue;
      const originY = 0.08 + rand2(p.seed, ci) * 0.84;
      const vy = lerp(originY, p.noisy, settle);
      const x = X(p.x), y = Y(vy);
      // residual to curve
      ctx.strokeStyle = T.teal;
      ctx.globalAlpha = 0.28 * settle;
      ctx.lineWidth = 1 * dpr;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, Y(curve(p.x))); ctx.stroke();
      ctx.globalAlpha = 1;
      // point
      const r = 3.2 * dpr;
      ctx.fillStyle = T.teal;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      ctx.beginPath(); ctx.arc(x - r * 0.3, y - r * 0.3, r * 0.4, 0, Math.PI * 2); ctx.fill();
    }

    // fitted decay curve on top (progressive)
    ctx.strokeStyle = T.ink;
    ctx.globalAlpha = 0.9;
    ctx.lineWidth = 2 * dpr;
    ctx.lineJoin = "round";
    ctx.beginPath();
    for (let i = 0; i <= steps; i++) {
      const nx = (i / steps) * drawLen;
      const x = X(nx), y = Y(curve(nx));
      i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
    }
    ctx.stroke();
    ctx.globalAlpha = 1;
  });

  return <Canvas innerRef={ref} />;
};

// ── panel meta ────────────────────────────────────────────────────────────────
const PANELS = [
  {
    tag: "Unsupervised · embeddings",
    title: "Artifact clustering",
    desc: "Finds group themselves by material and form in a learned latent space — pottery, bone and tool separate without a single label.",
    Graph: GraphClusters,
  },
  {
    tag: "Stratigraphy · confidence",
    title: "Depth vs. accuracy",
    desc: "Every layer excavated adds context. Model confidence climbs as stratigraphic evidence accumulates with depth.",
    Graph: GraphStrata,
  },
  {
    tag: "Regression · dating",
    title: "Radiocarbon regression",
    desc: "A fitted decay curve turns isotope counts into an age estimate — with a confidence band around every prediction.",
    Graph: GraphCarbon,
  },
] as const;

// ── Section ───────────────────────────────────────────────────────────────────
export const ArchaeologyGraphsSection: FC = () => {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";
  const T = getT(isDark);
  const reduced = usePrefersReducedMotion();
  const { ref: activeRef, active } = useActiveInView(0.1);
  const { ref: headRef, visible: headVisible } = useReveal(0.2);

  return (
    <Box
      id="case-studies"
      ref={activeRef}
      sx={{
        backgroundColor: T.bg,
        borderTop: `0.5px solid ${T.divider}`,
        px: { xs: "24px", sm: "48px", lg: "80px" },
        py: { xs: "80px", sm: "100px", md: "130px" },
        position: "relative", overflow: "hidden",
        transition: "background-color 0.5s ease, border-color 0.4s ease",
      }}
    >
      {/* background grid */}
      <Box sx={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: `
          linear-gradient(${T.gridLineBg} 1px, transparent 1px),
          linear-gradient(90deg, ${T.gridLineBg} 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />

      <Box sx={{ position: "relative", zIndex: 1, maxWidth: "1240px", mx: "auto", ...sectionFrameSx }}>
        {/* header */}
        <Box
          ref={headRef}
          sx={{
            textAlign: "center", maxWidth: "680px", mx: "auto",
            mb: { xs: "48px", md: "72px" },
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? "none" : "translateY(24px)",
            transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <Typography sx={{
            fontSize: "11px", color: T.eyebrow, letterSpacing: "0.10em",
            textTransform: "uppercase", fontWeight: 500, mb: "18px", fontFamily: "Prompt",
          }}>
            ✦ Method
          </Typography>
          <Typography sx={{
            fontSize: { xs: "30px", sm: "42px", md: "52px" },
            fontWeight: 500, color: T.headline, lineHeight: 1.06,
            letterSpacing: "-0.02em", fontFamily: FONT_DISPLAY, mb: "18px",
          }}>
            Machine learning, read like a{" "}
            <Box component="span" sx={{ color: T.headlineFaded }}>dig site.</Box>
          </Typography>
          <Typography sx={{
            fontSize: { xs: "14px", sm: "16px" }, color: T.body,
            lineHeight: 1.8, fontFamily: "Prompt",
          }}>
            Every model we run follows the discipline of an excavation — layered,
            measured and dated. These are the graphs behind the work, moving in
            real time.
          </Typography>
        </Box>

        {/* panels */}
        <Box sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "repeat(3, 1fr)" },
          gap: { xs: "24px", md: "28px" },
        }}>
          {PANELS.map(({ tag, title, desc, Graph }, i) => (
            <Box
              key={title}
              sx={{
                position: "relative",
                borderRadius: "16px", overflow: "hidden",
                border: `0.5px solid ${T.panelBorder}`,
                backgroundColor: T.panelBg,
                boxShadow: T.boxShadow,
                opacity: headVisible ? 1 : 0,
                transform: headVisible ? "none" : "translateY(28px)",
                transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 110}ms,
                             transform 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 110}ms,
                             border-color 0.3s ease, background-color 0.5s ease`,
                "&:hover": { borderColor: T.panelBorderHover },
              }}
            >
              {/* canvas well */}
              <Box sx={{
                position: "relative",
                height: { xs: "220px", md: "236px" },
                borderBottom: `0.5px solid ${T.divider}`,
              }}>
                <Box sx={{
                  position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
                  width: "60%", height: "1px", background: T.topGlow, zIndex: 2,
                }} />
                <Graph active={active} reduced={reduced} T={T} />
              </Box>
              {/* caption */}
              <Box sx={{ p: "20px 20px 24px" }}>
                <Typography sx={{
                  fontSize: "10.5px", color: T.eyebrow, letterSpacing: "0.08em",
                  textTransform: "uppercase", fontWeight: 600, mb: "8px", fontFamily: "Prompt",
                }}>
                  {tag}
                </Typography>
                <Typography sx={{
                  fontSize: "20px", fontWeight: 500, color: T.headline,
                  mb: "8px", fontFamily: FONT_DISPLAY, letterSpacing: "-0.01em",
                }}>
                  {title}
                </Typography>
                <Typography sx={{
                  fontSize: "13.5px", color: T.body, lineHeight: 1.7, fontFamily: "Prompt",
                }}>
                  {desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

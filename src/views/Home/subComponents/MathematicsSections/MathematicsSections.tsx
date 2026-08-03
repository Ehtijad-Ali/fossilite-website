import { FC, useEffect, useRef, useState } from "react";
import { Box, Grid2 as Grid, Stack, Typography } from "@mui/material";
import { useThemeMode } from "../../../../theme/theme";
import { FONT_DISPLAY } from "../../../../theme/fonts";
import { sectionFrameSx } from "../../_kit/frame";

// ═══ Theme tokens (page level — respects cream/charcoal site theme) ══════════
const getT = (isDark: boolean) => ({
  bg:            isDark ? "#0e1a2b" : "#FFF4E3",
  headline:      isDark ? "#FFF4E3" : "#001932",
  headlineFaded: isDark ? "#3a3a3a" : "#BBC0C6",
  body:          isDark ? "#BBC0C6" : "#4a4a6a",
  eyebrow:       isDark ? "#BBC0C6" : "#4a4a6a",
  divider:       isDark ? "#263b57" : "#d9c9b0",
  gridLineBg:    isDark ? "rgba(187,192,198,0.025)" : "rgba(0,25,50,0.035)",
  specLabel:     isDark ? "#8a8a8a" : "#9a8867",
  specValue:     isDark ? "#FFF4E3" : "#001932",
});
type Tok = ReturnType<typeof getT>;

// The graph "plate" is always a dark navy monograph panel (matches the reference
// specimen cards), regardless of the surrounding light/dark page theme.
const GOLD = "#C3A87C";
const PLATE_BG =
  "radial-gradient(120% 130% at 50% 0%, #1a2c47 0%, #101d31 55%, #0a1220 100%)";
const PLATE_BORDER = "rgba(195,168,124,0.22)";
const PLATE_SHADOW = "0 24px 60px rgba(0,20,45,0.30)";
const MONO = 'ui-monospace, SFMono-Regular, Menlo, "Roboto Mono", monospace';

// ═══ math + colour helpers ════════════════════════════════════════════════════
const clamp01 = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const byte = (v: number) => (v < 0 ? 0 : v > 255 ? 255 : Math.round(v));
const frac = (x: number) => x - Math.floor(x);
const rand2 = (a: number, b: number) => frac(Math.sin(a * 12.9898 + b * 78.233) * 43758.5453);

type RGB = [number, number, number];
type Stop = [number, RGB];
function ramp(stops: Stop[], t: number): RGB {
  t = clamp01(t);
  for (let i = 0; i < stops.length - 1; i++) {
    const [p0, c0] = stops[i], [p1, c1] = stops[i + 1];
    if (t <= p1) {
      const k = (t - p0) / (p1 - p0 || 1);
      return [lerp(c0[0], c1[0], k), lerp(c0[1], c1[1], k), lerp(c0[2], c1[2], k)];
    }
  }
  return stops[stops.length - 1][1];
}

// light direction for surface shading
const LX = 0.35, LY = -0.55, LZ = 0.76;

// ═══ tiny camera: rotate (yaw about vertical, pitch tilt) + weak perspective ══
type Proj = (x: number, y: number, z: number) => { ux: number; uy: number; depth: number };
function makeProjector(yaw: number, pitch: number): Proj {
  const cyy = Math.cos(yaw), syy = Math.sin(yaw);
  const cpp = Math.cos(pitch), spp = Math.sin(pitch);
  const dist = 6;
  return (x, y, z) => {
    const X = x * cyy - y * syy;
    const Y = x * syy + y * cyy;
    const Y2 = Y * cpp - z * spp;
    const Z2 = Y * spp + z * cpp;
    const persp = dist / (dist + Y2);
    return { ux: X * persp, uy: -Z2 * persp, depth: Y2 };
  };
}
interface Fit { s: number; bx: number; by: number; cx: number; cy: number }
interface SurfaceAPI { toScreen: (x: number, y: number, z: number) => { sx: number; sy: number; depth: number } }

// ═══ solid gradient surface via painter's algorithm ══════════════════════════
function drawSurface(
  ctx: CanvasRenderingContext2D, proj: Proj,
  f: (x: number, y: number) => number,
  stops: Stop[], zAmp: number, dpr: number, w: number, h: number,
  fit: { current: Fit },
): SurfaceAPI {
  const n = 24, D = 1.6;
  const g = (i: number) => -D + 2 * D * (i / n);
  const P: { z: number; hz: number; pr: ReturnType<Proj> }[][] = [];
  const wx: number[][] = [], wy: number[][] = [], wz: number[][] = [];
  let hmin = Infinity, hmax = -Infinity;
  let uminX = Infinity, umaxX = -Infinity, uminY = Infinity, umaxY = -Infinity;
  for (let i = 0; i <= n; i++) {
    P[i] = []; wx[i] = []; wy[i] = []; wz[i] = [];
    for (let j = 0; j <= n; j++) {
      const x = g(i), y = g(j), fv = f(x, y);
      if (fv < hmin) hmin = fv;
      if (fv > hmax) hmax = fv;
      const z = fv * zAmp;
      const pr = proj(x, y, z);
      if (pr.ux < uminX) uminX = pr.ux; if (pr.ux > umaxX) umaxX = pr.ux;
      if (pr.uy < uminY) uminY = pr.uy; if (pr.uy > umaxY) umaxY = pr.uy;
      P[i][j] = { z, hz: fv, pr };
      wx[i][j] = x; wy[i][j] = y; wz[i][j] = z;
    }
  }
  // auto-fit transform (smoothed so slow rotation doesn't jitter)
  const bw = Math.max(1e-3, umaxX - uminX), bh = Math.max(1e-3, umaxY - uminY);
  const padX = 24 * dpr, padTop = 36 * dpr, padBottom = 42 * dpr;
  const targetS = Math.min((w - 2 * padX) / bw, (h - padTop - padBottom) / bh);
  const F = fit.current;
  const k = F.s === 0 ? 1 : 0.12;
  F.s += (targetS - F.s) * k;
  F.bx += ((uminX + umaxX) / 2 - F.bx) * k;
  F.by += ((uminY + umaxY) / 2 - F.by) * k;
  F.cx += (w / 2 - F.cx) * k;
  F.cy += ((padTop + (h - padBottom)) / 2 - F.cy) * k;
  const toScr = (ux: number, uy: number) => ({ sx: F.cx + (ux - F.bx) * F.s, sy: F.cy + (uy - F.by) * F.s });

  const span = hmax - hmin || 1;
  const cells: { pts: { sx: number; sy: number }[]; depth: number; col: string }[] = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const a = P[i][j], b = P[i + 1][j], c = P[i + 1][j + 1], d = P[i][j + 1];
      const depth = (a.pr.depth + b.pr.depth + c.pr.depth + d.pr.depth) / 4;
      const hz = (a.hz + b.hz + c.hz + d.hz) / 4;
      // face normal → directional light (world-space edges)
      const ex = wx[i + 1][j] - wx[i][j], ey = wy[i + 1][j] - wy[i][j], ez = wz[i + 1][j] - wz[i][j];
      const gx = wx[i][j + 1] - wx[i][j], gy = wy[i][j + 1] - wy[i][j], gz = wz[i][j + 1] - wz[i][j];
      let nx = ey * gz - ez * gy, ny = ez * gx - ex * gz, nz = ex * gy - ey * gx;
      const nl = Math.hypot(nx, ny, nz) || 1; nx /= nl; ny /= nl; nz /= nl;
      const light = clamp01(0.5 + 0.7 * (nx * LX + ny * LY + nz * LZ));
      const [rr, gg, bb] = ramp(stops, (hz - hmin) / span);
      const fct = 0.42 + 0.7 * light;
      cells.push({
        pts: [toScr(a.pr.ux, a.pr.uy), toScr(b.pr.ux, b.pr.uy), toScr(c.pr.ux, c.pr.uy), toScr(d.pr.ux, d.pr.uy)],
        depth,
        col: `rgb(${byte(rr * fct)},${byte(gg * fct)},${byte(bb * fct)})`,
      });
    }
  }
  cells.sort((p, q) => q.depth - p.depth);
  ctx.lineWidth = 0.5 * dpr;
  ctx.strokeStyle = "rgba(255,244,227,0.05)";
  for (const c of cells) {
    ctx.beginPath();
    ctx.moveTo(c.pts[0].sx, c.pts[0].sy);
    ctx.lineTo(c.pts[1].sx, c.pts[1].sy);
    ctx.lineTo(c.pts[2].sx, c.pts[2].sy);
    ctx.lineTo(c.pts[3].sx, c.pts[3].sy);
    ctx.closePath();
    ctx.fillStyle = c.col;
    ctx.fill();
    ctx.stroke();
  }
  return {
    toScreen: (x, y, z) => {
      const pr = proj(x, y, z);
      const s = toScr(pr.ux, pr.uy);
      return { sx: s.sx, sy: s.sy, depth: pr.depth };
    },
  };
}

function glowDot(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, color: string) {
  const g = ctx.createRadialGradient(x, y, 0, x, y, r * 2.4);
  g.addColorStop(0, color);
  g.addColorStop(0.4, color);
  g.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = g;
  ctx.beginPath(); ctx.arc(x, y, r * 2.4, 0, Math.PI * 2); ctx.fill();
  const s = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, r * 0.1, x, y, r);
  s.addColorStop(0, "rgba(255,255,255,0.9)");
  s.addColorStop(0.5, color);
  s.addColorStop(1, color);
  ctx.fillStyle = s;
  ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
}

// ═══ shared hooks ═════════════════════════════════════════════════════════════
function usePrefersReducedMotion() {
  const [r, setR] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setR(m.matches);
    const on = () => setR(m.matches);
    m.addEventListener?.("change", on);
    return () => m.removeEventListener?.("change", on);
  }, []);
  return r;
}
function useReveal(threshold = 0.18) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, visible };
}
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
type Draw = (ctx: CanvasRenderingContext2D, w: number, h: number, dpr: number, elapsed: number, yaw: number, pitch: number) => void;
// Orbit-controlled canvas: auto-rotates in 3D, and can be grabbed and spun with
// the pointer (with inertia). Auto-rotation resumes shortly after release.
function useSurfaceCanvas(active: boolean, reduced: boolean, draw: Draw) {
  const ref = useRef<HTMLCanvasElement>(null);
  const size = useRef({ w: 1, h: 1, dpr: 1 });
  const orbit = useRef({ yaw: 0.5, pitch: -0.92, vYaw: 0, vPitch: 0, dragging: false, px: 0, py: 0, hold: 0 });
  const drawRef = useRef(draw);
  drawRef.current = draw;
  const clampPitch = (p: number) => Math.max(-1.45, Math.min(-0.12, p));

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

  useEffect(() => {
    const c = ref.current;
    const ctx = c?.getContext("2d");
    if (!c || !ctx || !active) return;
    let raf = 0;
    const start = performance.now();
    const frame = (now: number) => {
      const { w, h, dpr } = size.current;
      if (w > 1 && h > 1) {
        const o = orbit.current;
        if (!o.dragging) {
          o.yaw += o.vYaw;
          o.pitch = clampPitch(o.pitch + o.vPitch);
          o.vYaw *= 0.93; o.vPitch *= 0.9;
          if (!reduced) {
            if (o.hold > 0) o.hold -= 1;
            else if (Math.abs(o.vYaw) < 0.001) o.yaw += 0.006; // auto-orbit
          }
        }
        const bob = o.dragging || reduced ? 0 : Math.sin(now * 0.0004) * 0.05;
        drawRef.current(ctx, w, h, dpr, now - start, o.yaw, o.pitch + bob);
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [active, reduced]);

  const onDown = (e: React.PointerEvent) => {
    const o = orbit.current;
    o.dragging = true; o.px = e.clientX; o.py = e.clientY; o.vYaw = 0; o.vPitch = 0;
    ref.current?.setPointerCapture(e.pointerId);
  };
  const onMove = (e: React.PointerEvent) => {
    const o = orbit.current;
    if (!o.dragging) return;
    const dx = e.clientX - o.px, dy = e.clientY - o.py;
    o.px = e.clientX; o.py = e.clientY;
    const dYaw = dx * 0.008, dPitch = dy * 0.006;
    o.yaw += dYaw; o.pitch = clampPitch(o.pitch + dPitch);
    o.vYaw = dYaw; o.vPitch = dPitch;
  };
  const onUp = (e: React.PointerEvent) => {
    const o = orbit.current;
    o.dragging = false; o.hold = 80;
    try { ref.current?.releasePointerCapture(e.pointerId); } catch { /* noop */ }
  };

  return { ref, onDown, onMove, onUp };
}

// canvas element wired for orbit interaction
const OrbitCanvas: FC<{
  ctl: ReturnType<typeof useSurfaceCanvas>;
}> = ({ ctl }) => (
  <Box
    component="canvas"
    ref={ctl.ref}
    onPointerDown={ctl.onDown}
    onPointerMove={ctl.onMove}
    onPointerUp={ctl.onUp}
    onPointerCancel={ctl.onUp}
    sx={{
      width: "100%", height: "100%", display: "block",
      touchAction: "none", cursor: "grab", "&:active": { cursor: "grabbing" },
    }}
  />
);

// ═══ GRAPH A — Gradient descent on a 3D loss surface ═════════════════════════
const LOSS_RAMP: Stop[] = [
  [0, [16, 30, 52]], [0.4, [31, 78, 107]], [0.72, [195, 168, 124]], [1, [240, 232, 214]],
];
const dips = [
  { x: -0.55, y: -0.35, a: 1.15, s: 0.5 },
  { x: 0.7, y: 0.5, a: 1.55, s: 0.62 },
  { x: 0.15, y: -0.85, a: 0.8, s: 0.34 },
];
const fLoss = (x: number, y: number) => {
  let v = 0.18 * (x * x + y * y);
  for (const d of dips) v -= d.a * Math.exp(-((x - d.x) ** 2 + (y - d.y) ** 2) / d.s);
  return v;
};
const gradLoss = (x: number, y: number) => {
  const h = 0.012;
  return {
    gx: (fLoss(x + h, y) - fLoss(x - h, y)) / (2 * h),
    gy: (fLoss(x, y + h) - fLoss(x, y - h)) / (2 * h),
  };
};
const argminLoss = () => {
  let best = { x: 0, y: 0, z: Infinity };
  for (let i = 0; i <= 40; i++) for (let j = 0; j <= 40; j++) {
    const x = -1.6 + 3.2 * (i / 40), y = -1.6 + 3.2 * (j / 40), z = fLoss(x, y);
    if (z < best.z) best = { x, y, z };
  }
  return best;
};

const GradientGraph: FC<{ active: boolean; reduced: boolean }> = ({ active, reduced }) => {
  const zAmp = 0.72;
  const m = useRef<{ x: number; y: number; vx: number; vy: number; age: number; trail: [number, number][]; run: number }>();
  const reset = () => {
    const run = (m.current?.run ?? 0) + 1;
    m.current = {
      x: -1.35 + rand2(run, 3) * 2.7,
      y: -1.35 + rand2(run, 8) * 2.7,
      vx: 0, vy: 0, age: 0, trail: [], run,
    };
  };
  if (!m.current) reset();
  const fit = useRef<Fit>({ s: 0, bx: 0, by: 0, cx: 0, cy: 0 });

  const ctl = useSurfaceCanvas(active, reduced, (ctx, w, h, dpr, _elapsed, yaw, pitch) => {
    ctx.clearRect(0, 0, w, h);
    const proj = makeProjector(yaw, pitch);
    const api = drawSurface(ctx, proj, fLoss, LOSS_RAMP, zAmp, dpr, w, h, fit);

    if (reduced) {
      const p = argminLoss();
      const s = api.toScreen(p.x, p.y, p.z * zAmp);
      glowDot(ctx, s.sx, s.sy, 5 * dpr, "#F0E6D2");
      return;
    }

    // step optimizer
    const st = m.current!;
    const { gx, gy } = gradLoss(st.x, st.y);
    st.vx = 0.82 * st.vx - 0.06 * gx;
    st.vy = 0.82 * st.vy - 0.06 * gy;
    st.x = Math.max(-1.55, Math.min(1.55, st.x + st.vx));
    st.y = Math.max(-1.55, Math.min(1.55, st.y + st.vy));
    st.trail.push([st.x, st.y]);
    if (st.trail.length > 64) st.trail.shift();
    st.age++;
    if (st.age > 340 || (Math.hypot(st.vx, st.vy) < 6e-4 && st.age > 70)) reset();

    // trail
    if (st.trail.length > 1) {
      ctx.strokeStyle = "rgba(240,230,214,0.55)";
      ctx.lineWidth = 1.6 * dpr; ctx.lineJoin = "round";
      ctx.beginPath();
      st.trail.forEach(([x, y], i) => {
        const s = api.toScreen(x, y, fLoss(x, y) * zAmp + 0.02);
        i ? ctx.lineTo(s.sx, s.sy) : ctx.moveTo(s.sx, s.sy);
      });
      ctx.stroke();
    }
    // marker
    const ms = api.toScreen(st.x, st.y, fLoss(st.x, st.y) * zAmp + 0.02);
    glowDot(ctx, ms.sx, ms.sy, 5 * dpr, "#F0E6D2");
  });

  return <OrbitCanvas ctl={ctl} />;
};

// ═══ GRAPH B — Confidence surface + threshold plane ══════════════════════════
const CONF_RAMP: Stop[] = [
  [0, [18, 40, 52]], [0.4, [46, 139, 132]], [0.72, [216, 162, 74]], [1, [240, 232, 214]],
];
const peaks = [
  { x: -0.4, y: 0.35, a: 0.95, s: 0.5 },
  { x: 0.6, y: -0.45, a: 1.05, s: 0.6 },
  { x: 0.2, y: 0.6, a: 0.6, s: 0.4 },
];
const fConf = (x: number, y: number) => {
  let v = 0.12;
  for (const p of peaks) v += p.a * Math.exp(-((x - p.x) ** 2 + (y - p.y) ** 2) / p.s);
  return Math.min(1.15, v);
};
const SAMPLES = Array.from({ length: 15 }, (_, i) => {
  const x = -1.35 + rand2(i + 2, 5) * 2.7;
  const y = -1.35 + rand2(i + 9, 4) * 2.7;
  return { x, y, seed: i * 7 + 1 };
});

const ConfidenceGraph: FC<{ active: boolean; reduced: boolean }> = ({ active, reduced }) => {
  const zAmp = 0.95;
  const THRESH = 0.62;
  const fit = useRef<Fit>({ s: 0, bx: 0, by: 0, cx: 0, cy: 0 });

  const ctl = useSurfaceCanvas(active, reduced, (ctx, w, h, dpr, elapsed, yaw, pitch) => {
    ctx.clearRect(0, 0, w, h);
    const proj = makeProjector(yaw, pitch);
    const api = drawSurface(ctx, proj, fConf, CONF_RAMP, zAmp, dpr, w, h, fit);

    // translucent threshold plane
    const D = 1.55, tz = THRESH * zAmp;
    const c1 = api.toScreen(-D, -D, tz), c2 = api.toScreen(D, -D, tz), c3 = api.toScreen(D, D, tz), c4 = api.toScreen(-D, D, tz);
    ctx.beginPath();
    ctx.moveTo(c1.sx, c1.sy); ctx.lineTo(c2.sx, c2.sy);
    ctx.lineTo(c3.sx, c3.sy); ctx.lineTo(c4.sx, c4.sy); ctx.closePath();
    ctx.fillStyle = "rgba(195,168,124,0.12)";
    ctx.fill();
    ctx.strokeStyle = "rgba(195,168,124,0.5)";
    ctx.lineWidth = 1 * dpr; ctx.setLineDash([5 * dpr, 5 * dpr]);
    ctx.stroke(); ctx.setLineDash([]);

    // samples dropping onto the surface
    const cycle = 5200;
    const settle = reduced ? 1 : easeOutCubic(clamp01((elapsed % cycle) / (cycle * 0.5)));
    const drawn = SAMPLES.map((p) => {
      const target = fConf(p.x, p.y) * zAmp;
      const z = lerp(target + 1.25, target, settle);
      return { ...p, z, target, s: api.toScreen(p.x, p.y, z + 0.03) };
    }).sort((a, b) => b.s.depth - a.s.depth);

    for (const p of drawn) {
      const below = p.target < tz;
      const color = below ? "#D8A24A" : "#7FD8CE";
      // stem to surface
      const base = api.toScreen(p.x, p.y, fConf(p.x, p.y) * zAmp);
      ctx.strokeStyle = below ? "rgba(216,162,74,0.4)" : "rgba(127,216,206,0.35)";
      ctx.lineWidth = 1 * dpr;
      ctx.beginPath(); ctx.moveTo(p.s.sx, p.s.sy); ctx.lineTo(base.sx, base.sy); ctx.stroke();
      glowDot(ctx, p.s.sx, p.s.sy, 3.6 * dpr, color);
    }
  });

  return <OrbitCanvas ctl={ctl} />;
};

// ═══ shared UI — corner brackets + the monograph "plate" ═════════════════════
const Corners: FC = () => (
  <>
    {[
      { top: 12, left: 12, bt: 1, bl: 1 },
      { top: 12, right: 12, bt: 1, br: 1 },
      { bottom: 12, left: 12, bb: 1, bl: 1 },
      { bottom: 12, right: 12, bb: 1, br: 1 },
    ].map((c, i) => (
      <Box key={i} sx={{
        position: "absolute", width: "15px", height: "15px", zIndex: 3, pointerEvents: "none",
        top: c.top, bottom: c.bottom, left: c.left, right: c.right,
        borderTop: c.bt ? `1.5px solid ${GOLD}` : undefined,
        borderBottom: c.bb ? `1.5px solid ${GOLD}` : undefined,
        borderLeft: c.bl ? `1.5px solid ${GOLD}` : undefined,
        borderRight: c.br ? `1.5px solid ${GOLD}` : undefined,
      }} />
    ))}
  </>
);

const Plate: FC<{ plateLabel: string; figCaption: string; children: React.ReactNode }> = ({
  plateLabel, figCaption, children,
}) => (
  <Box sx={{
    position: "relative", borderRadius: "16px", overflow: "hidden",
    height: { xs: "340px", sm: "400px", md: "460px" },
    background: PLATE_BG, border: `0.5px solid ${PLATE_BORDER}`, boxShadow: PLATE_SHADOW,
  }}>
    <Corners />
    <Box sx={{
      position: "absolute", top: "18px", left: "50%", transform: "translateX(-50%)",
      width: "55%", height: "1px", zIndex: 2,
      background: "linear-gradient(90deg, transparent, rgba(195,168,124,0.5), transparent)",
    }} />
    <Typography sx={{
      position: "absolute", top: "16px", left: "20px", zIndex: 4,
      fontFamily: MONO, fontSize: "10px", letterSpacing: "0.12em",
      color: "rgba(240,232,214,0.7)", pointerEvents: "none",
    }}>
      {plateLabel}
    </Typography>
    <Box component="span" sx={{
      position: "absolute", top: "14px", right: "18px", zIndex: 4,
      display: "inline-flex", alignItems: "center", gap: "6px", pointerEvents: "none",
    }}>
      <Box sx={{ width: "6px", height: "6px", borderRadius: "50%", background: "#7FD8CE",
        animation: "mgPulse 2s ease-in-out infinite",
        "@keyframes mgPulse": { "0%,100%": { opacity: 1 }, "50%": { opacity: 0.3 } } }} />
      <Typography component="span" sx={{ fontFamily: MONO, fontSize: "9.5px", letterSpacing: "0.14em", color: "rgba(240,232,214,0.6)" }}>
        LIVE
      </Typography>
    </Box>
    {children}
    <Typography sx={{
      position: "absolute", bottom: "14px", left: "20px", right: "132px", zIndex: 4,
      fontFamily: MONO, fontSize: "10px", letterSpacing: "0.06em",
      color: "rgba(240,232,214,0.5)", pointerEvents: "none",
    }}>
      {figCaption}
    </Typography>
    <Typography sx={{
      position: "absolute", bottom: "14px", right: "18px", zIndex: 4,
      fontFamily: MONO, fontSize: "9.5px", letterSpacing: "0.12em", textTransform: "uppercase",
      color: "rgba(240,232,214,0.42)", pointerEvents: "none",
    }}>
      drag to rotate
    </Typography>
  </Box>
);

// ═══ reusable section shell ═══════════════════════════════════════════════════
interface Spec { k: string; v: string }
interface SectionProps {
  index: string;
  kicker: string;
  title: string;
  titleFaded: string;
  body: string;
  specs: Spec[];
  plateLabel: string;
  figCaption: string;
  reverse?: boolean;
  Graph: FC<{ active: boolean; reduced: boolean }>;
}

const MathSection: FC<SectionProps> = ({
  index, kicker, title, titleFaded, body, specs, plateLabel, figCaption, reverse, Graph,
}) => {
  const { mode } = useThemeMode();
  const T: Tok = getT(mode === "dark");
  const reduced = usePrefersReducedMotion();
  const { ref: activeRef, active } = useActiveInView(0.12);
  const { ref: revealRef, visible } = useReveal(0.2);

  const anim = (d: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : "translateY(26px)",
    transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${d}ms, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${d}ms`,
  });

  return (
    <Box ref={activeRef} sx={{
      backgroundColor: T.bg,
      borderTop: `0.5px solid ${T.divider}`,
      px: { xs: "24px", sm: "48px", lg: "80px" },
      py: { xs: "80px", sm: "100px", md: "130px" },
      position: "relative", overflow: "hidden",
      transition: "background-color 0.5s ease, border-color 0.4s ease",
    }}>
      <Box sx={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: `linear-gradient(${T.gridLineBg} 1px, transparent 1px), linear-gradient(90deg, ${T.gridLineBg} 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      <Box ref={revealRef} sx={{ position: "relative", zIndex: 1, maxWidth: "1240px", mx: "auto", ...sectionFrameSx }}>
        <Grid container spacing={{ xs: 6, md: 10, lg: 12 }} alignItems="center" direction={reverse ? "row-reverse" : "row"}>
          {/* text */}
          <Grid size={{ xs: 12, md: 5 }}>
            {/* numbered eyebrow */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "14px", mb: "22px", ...anim(0) }}>
              <Typography sx={{ fontFamily: MONO, fontSize: "11px", color: T.eyebrow, fontWeight: 500 }}>{index}</Typography>
              <Box sx={{ width: "48px", height: "0.5px", backgroundColor: T.divider }} />
              <Typography sx={{ fontSize: "11px", color: T.eyebrow, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500, fontFamily: "Prompt" }}>{kicker}</Typography>
            </Box>

            <Typography sx={{
              fontSize: { xs: "30px", sm: "38px", md: "46px" }, fontWeight: 500,
              color: T.headline, lineHeight: 1.08, letterSpacing: "-0.02em",
              fontFamily: FONT_DISPLAY, mb: "18px", ...anim(80),
            }}>
              {title}{" "}
              <Box component="span" sx={{ color: T.headlineFaded, fontStyle: "italic", fontWeight: 500 }}>
                {titleFaded}
              </Box>
            </Typography>

            <Typography sx={{ fontSize: "15px", color: T.body, lineHeight: 1.85, maxWidth: "440px", fontFamily: "Prompt", ...anim(160) }}>
              {body}
            </Typography>

            {/* spec rows */}
            <Box sx={{ mt: "30px", pt: "22px", borderTop: `0.5px solid ${T.divider}`, ...anim(240) }}>
              {specs.map((s, i) => (
                <Box key={s.k} sx={{
                  display: "flex", justifyContent: "space-between", alignItems: "baseline",
                  py: "10px", borderBottom: i < specs.length - 1 ? `0.5px solid ${T.divider}` : "none",
                }}>
                  <Typography sx={{ fontFamily: MONO, fontSize: "10.5px", letterSpacing: "0.08em", textTransform: "uppercase", color: T.specLabel }}>
                    {s.k}
                  </Typography>
                  <Typography sx={{ fontSize: "13px", color: T.specValue, fontFamily: "Prompt", fontWeight: 500 }}>
                    {s.v}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* plate */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={anim(120)}>
              <Plate plateLabel={plateLabel} figCaption={figCaption}>
                <Graph active={active} reduced={reduced} />
              </Plate>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

// ═══ exported sections ════════════════════════════════════════════════════════
export const GradientDescentSection: FC = () => (
  <MathSection
    index="05"
    kicker="The Mathematics"
    title="Every model rolls"
    titleFaded="downhill."
    body="Learning is optimisation. The model measures its error as a surface and takes the steepest step down, again and again, until the loss settles at the bottom. Watch the descent trace its path across the landscape."
    specs={[
      { k: "Method", v: "Gradient descent" },
      { k: "Update", v: "θ ← θ − η∇L" },
      { k: "Momentum", v: "0.82" },
    ]}
    plateLabel="PL. 05 · LOSS SURFACE — LIVE"
    figCaption="Fig. — each step follows the steepest downhill gradient."
    Graph={GradientGraph}
  />
);

export const ConfidenceFieldSection: FC = () => (
  <MathSection
    index="08"
    kicker="Uncertainty"
    title="A surface of"
    titleFaded="confidence."
    body="Every prediction carries a probability. We render it as a landscape — peaks where the model is sure, valleys where it isn't. Samples that fall below the threshold plane are the ones we route to a human. AI drafts; a person decides."
    specs={[
      { k: "Estimate", v: "P(y | x)" },
      { k: "Threshold", v: "0.95 → human" },
      { k: "Review", v: "Human-in-the-loop" },
    ]}
    plateLabel="PL. 08 · CONFIDENCE FIELD — LIVE"
    figCaption="Fig. — points below the plane are flagged for review."
    reverse
    Graph={ConfidenceGraph}
  />
);

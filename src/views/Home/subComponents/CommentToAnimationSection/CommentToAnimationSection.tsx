import { FC, useState, useRef, useEffect, useCallback } from "react";
import { Box, Grid2 as Grid, Stack, Typography } from "@mui/material";
import { useThemeMode } from "../../../../theme/theme";
import { FONT_DISPLAY } from "../../../../theme/fonts";
import { sectionFrameSx } from "../../_kit/frame";

// ── Design tokens (site cream/navy palette) ──────────────────────────────────
const getTokens = (isDark: boolean) => ({
  bg:            isDark ? "#0e1a2b" : "#FFF4E3",
  headline:      isDark ? "#FFF4E3" : "#001932",
  headlineFaded: isDark ? "#3a3a3a" : "#BBC0C6",
  body:          isDark ? "#BBC0C6" : "#4a4a6a",
  eyebrow:       isDark ? "#BBC0C6" : "#4a4a6a",
  divider:       isDark ? "#263b57" : "#d9c9b0",
  cardBg:        isDark ? "#101d31" : "#FBF3E4",
  cardBorder:    isDark ? "#263b57" : "#d9c9b0",
  cardBorderHover: isDark ? "#BBC0C6" : "#001932",
  inputBg:       isDark ? "#0e1a2b" : "#fdf6ec",
  inputBorder:   isDark ? "#263b57" : "#d9c9b0",
  inputFocus:    isDark ? "#BBC0C6" : "#001932",
  inputText:     isDark ? "#FFF4E3" : "#001932",
  placeholder:   isDark ? "#3a3a3a" : "#BBC0C6",
  ctaBg:         isDark ? "#FFF4E3" : "#001932",
  ctaText:       isDark ? "#001932" : "#FFF4E3",
  ctaHover:      isDark ? "#e0d8cc" : "#0a2a4a",
  hint:          isDark ? "#8a8a8a" : "#9a9384",
  topGlow:       isDark
    ? "linear-gradient(90deg, transparent, rgba(187,192,198,0.14), transparent)"
    : "linear-gradient(90deg, transparent, rgba(0,25,50,0.22), transparent)",
  boxShadow:     isDark
    ? "none"
    : "0 6px 28px rgba(0,25,50,0.07)",
  gridLine:      isDark ? "rgba(187,192,198,0.025)" : "rgba(0,25,50,0.035)",
  // link line + label pill (theme-aware so it reads on cream and charcoal)
  link:          isDark ? "rgba(187,192,198,0.16)" : "rgba(0,25,50,0.12)",
  pillBg:        isDark ? "rgba(10,14,20,0.92)" : "rgba(0,25,50,0.90)",
  pillText:      "#FFF4E3",
  nodeRim:       isDark ? "rgba(0,0,0,0.35)" : "rgba(0,25,50,0.28)",
});

// Vibrant glossy node palette (matches the reference graph — reads on both themes)
const NODE_PALETTE = [
  "#E1C23B", // gold
  "#17B9A6", // teal
  "#4C86E8", // blue
  "#C9524E", // brick red
  "#2FA451", // green
  "#9B4DD6", // purple
  "#E0559B", // magenta
];

// Force-directed layout constants
const MAX_NODES = 150;    // guard against pathological long comments
const MAX_SCALE = 2.4;    // cap zoom-in for tiny (1-word) graphs

// ── Deterministic hash so the same comment always yields the same animation ──
function hash(str: string) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Lighten (amt>0) / darken (amt<0) a #rrggbb toward white/black.
function shade(hex: string, amt: number) {
  const n = parseInt(hex.slice(1), 16);
  let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  const t = amt < 0 ? 0 : 255;
  const p = Math.abs(amt);
  r = Math.round((t - r) * p) + r;
  g = Math.round((t - g) * p) + g;
  b = Math.round((t - b) * p) + b;
  return `rgb(${r},${g},${b})`;
}

interface GraphNode {
  x: number; y: number; vx: number; vy: number;
  r: number; color: string; hub: boolean; label?: string;
}
interface Graph {
  nodes: GraphNode[];
  links: [number, number][];
}

// Turn a comment into a graph. Words become labelled "hub" spheres; the longer
// a word, the more satellite nodes bloom around it — the animation always
// reflects what was actually typed, and the same comment grows the same shape.
function buildGraph(text: string): Graph {
  const words = text.trim().split(/\s+/).filter(Boolean).slice(0, 12);
  if (!words.length) return { nodes: [], links: [] };

  const rnd = mulberry32(hash(text));
  const nodes: GraphNode[] = [];
  const links: [number, number][] = [];
  const cx = 0.5, cy = 0.5;

  words.forEach((word, wi) => {
    if (nodes.length >= MAX_NODES) return;
    const angle = (wi / words.length) * Math.PI * 2 + rnd() * 0.6;
    const radius = 0.1 + rnd() * 0.18;
    const hubId = nodes.length;
    nodes.push({
      x: cx + Math.cos(angle) * radius,
      y: cy + Math.sin(angle) * radius,
      vx: 0, vy: 0,
      r: 9 + Math.min(word.length, 10) * 1.1,
      color: NODE_PALETTE[hash(word) % NODE_PALETTE.length],
      hub: true,
      label: word.length > 16 ? word.slice(0, 15) + "…" : word,
    });

    // satellites: one per character (bounded)
    const sats = Math.min(word.length, 12);
    for (let s = 0; s < sats; s++) {
      if (nodes.length >= MAX_NODES) break;
      const sa = (s / sats) * Math.PI * 2;
      const sr = 0.035 + rnd() * 0.045;
      const sid = nodes.length;
      nodes.push({
        x: nodes[hubId].x + Math.cos(sa) * sr,
        y: nodes[hubId].y + Math.sin(sa) * sr,
        vx: 0, vy: 0,
        r: 3 + rnd() * 2.4,
        color: nodes[hubId].color,
        hub: false,
      });
      links.push([hubId, sid]);
    }
  });

  // cross-link hubs into a loose central cluster
  const hubIds = nodes.map((n, i) => (n.hub ? i : -1)).filter((i) => i >= 0);
  for (let i = 1; i < hubIds.length; i++) {
    links.push([hubIds[0], hubIds[i]]);
    if (i > 1 && rnd() > 0.5) links.push([hubIds[i - 1], hubIds[i]]);
  }

  return { nodes, links };
}

// ── Shared: fires once when element enters viewport ──────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ── Animated reveal wrapper (matches other Home sections) ────────────────────
interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  from?: "bottom" | "left" | "right" | "scale";
}
const Reveal: FC<RevealProps> = ({ children, delay = 0, from = "bottom" }) => {
  const { ref, visible } = useInView();
  const base = {
    bottom: { transform: "translateY(28px)", opacity: 0 },
    left:   { transform: "translateX(-32px)", opacity: 0 },
    right:  { transform: "translateX(32px)",  opacity: 0 },
    scale:  { transform: "scale(0.93)",        opacity: 0 },
  }[from];
  return (
    <Box
      ref={ref}
      sx={{
        transition: `opacity 0.78s cubic-bezier(0.22,1,0.36,1) ${delay}ms,
                     transform 0.78s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        ...(visible ? { opacity: 1, transform: "none" } : base),
      }}
    >
      {children}
    </Box>
  );
};

// ── Section label ────────────────────────────────────────────────────────────
const SectionLabel: FC<{ label: string; index: string; T: ReturnType<typeof getTokens> }> = ({
  label, index, T,
}) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: "12px", mb: "24px" }}>
    <Typography sx={{
      fontSize: "11px", color: T.eyebrow, fontWeight: 500,
      letterSpacing: "0.08em", fontFamily: "Prompt", transition: "color 0.4s ease",
    }}>
      {index}
    </Typography>
    <Box sx={{ flex: 1, height: "0.5px", backgroundColor: T.divider, transition: "background-color 0.4s ease" }} />
    <Typography sx={{
      fontSize: "11px", color: T.eyebrow, letterSpacing: "0.10em",
      textTransform: "uppercase", fontWeight: 500, transition: "color 0.4s ease",
    }}>
      {label}
    </Typography>
  </Box>
);

// ── Canvas force-directed network (glossy spheres + labels + drag/click) ─────
const NetworkCanvas: FC<{ text: string; T: ReturnType<typeof getTokens> }> = ({ text, T }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<Graph & { t: number }>({ nodes: [], links: [], t: 0 });
  const rafRef = useRef(0);
  const dprRef = useRef(1);
  const dragRef = useRef(-1);        // index of node being dragged, -1 = none
  const pointerRef = useRef({ down: false, moved: false, x: 0, y: 0, dx: 0, dy: 0 });
  // auto-fit transform (device px): screen = (raw - c)*s + centre. Recomputed each
  // frame so the whole graph always fits inside the card, however long the comment.
  const fitRef = useRef({ s: 0, cx: 0, cy: 0, cxScreen: 0, cyScreen: 0, W: 1, H: 1 });
  const snapRef = useRef(true);      // snap the fit (no easing) right after a rebuild

  // theme-driven colors read fresh each frame without restarting the loop
  const tokRef = useRef(T);
  tokRef.current = T;

  // rebuild graph whenever the committed text changes
  useEffect(() => {
    const g = buildGraph(text);
    stateRef.current = { ...g, t: 0 };
    dragRef.current = -1;
    snapRef.current = true;
  }, [text]);

  // map a raw node coord (device px) through the current fit transform
  const toScreen = (rawX: number, rawY: number) => {
    const F = fitRef.current;
    return {
      x: (rawX - F.cx) * F.s + F.cxScreen,
      y: (rawY - F.cy) * F.s + F.cyScreen,
    };
  };
  // invert: css pointer → normalised node coord
  const toNorm = (cssX: number, cssY: number) => {
    const F = fitRef.current;
    const dpr = dprRef.current;
    const rawX = (cssX * dpr - F.cxScreen) / F.s + F.cx;
    const rawY = (cssY * dpr - F.cyScreen) / F.s + F.cy;
    return { nx: rawX / F.W, ny: rawY / F.H };
  };

  // hit-test in CSS pixels through the fit transform
  const nodeAt = (cssX: number, cssY: number) => {
    const { nodes } = stateRef.current;
    const dpr = dprRef.current, F = fitRef.current;
    let best = -1, bestD = Infinity;
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      const sc = toScreen(n.x * F.W, n.y * F.H);
      const d = Math.hypot(cssX - sc.x / dpr, cssY - sc.y / dpr);
      const hitR = (n.r * F.s) / dpr + 8;
      if (d < hitR && d < bestD) { best = i; bestD = d; }
    }
    return best;
  };

  const tick = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) { rafRef.current = requestAnimationFrame(tick); return; }
    const W = canvas.width, H = canvas.height;
    const dpr = dprRef.current;
    const tok = tokRef.current;
    const st = stateRef.current;
    st.t += 1;

    const { nodes, links } = st;

    // ── physics ───────────────────────────────────────────────
    // repulsion
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d2 = dx * dx + dy * dy + 0.0001;
        const f = 0.00009 / d2;
        const d = Math.sqrt(d2);
        a.vx += (dx / d) * f; a.vy += (dy / d) * f;
        b.vx -= (dx / d) * f; b.vy -= (dy / d) * f;
      }
    }
    // springs
    for (const [i, j] of links) {
      const a = nodes[i], b = nodes[j];
      if (!a || !b) continue;
      const dx = b.x - a.x, dy = b.y - a.y;
      const d = Math.sqrt(dx * dx + dy * dy) || 0.0001;
      const target = 0.055;
      const f = (d - target) * 0.02;
      a.vx += (dx / d) * f; a.vy += (dy / d) * f;
      b.vx -= (dx / d) * f; b.vy -= (dy / d) * f;
    }
    // gravity to center + damping (skip the node being dragged)
    for (let i = 0; i < nodes.length; i++) {
      if (i === dragRef.current) continue;
      const n = nodes[i];
      n.vx += (0.5 - n.x) * 0.004;
      n.vy += (0.5 - n.y) * 0.004;
      n.vx *= 0.85; n.vy *= 0.85;
      n.x += n.vx; n.y += n.vy;
    }

    // ── auto-fit: scale + centre so every node fits inside the card ──
    const F = fitRef.current;
    if (nodes.length) {
      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      for (const n of nodes) {
        const rx = n.x * W, ry = n.y * H, rad = n.r * dpr;
        if (rx - rad < minX) minX = rx - rad;
        if (rx + rad > maxX) maxX = rx + rad;
        if (ry - rad < minY) minY = ry - rad;
        if (ry + rad > maxY) maxY = ry + rad;
      }
      const bw = Math.max(1, maxX - minX), bh = Math.max(1, maxY - minY);
      // generous, fixed padding leaves room for label pills (extra at bottom)
      const padX = 26 * dpr, padTop = 20 * dpr, padBottom = 40 * dpr;
      const targetS = Math.min(
        MAX_SCALE,
        (W - 2 * padX) / bw,
        (H - padTop - padBottom) / bh,
      );
      const targetCx = (minX + maxX) / 2;
      const targetCy = (minY + maxY) / 2;
      const targetCxS = W / 2;
      const targetCyS = (padTop + (H - padBottom)) / 2;
      const k = snapRef.current ? 1 : 0.12;   // snap on rebuild, ease otherwise
      F.s  += (targetS  - F.s)  * k;
      F.cx += (targetCx - F.cx) * k;
      F.cy += (targetCy - F.cy) * k;
      F.cxScreen += (targetCxS - F.cxScreen) * k;
      F.cyScreen += (targetCyS - F.cyScreen) * k;
      snapRef.current = false;
    }
    F.W = W; F.H = H;
    const s = F.s;
    const mapX = (nx: number) => (nx * W - F.cx) * s + F.cxScreen;
    const mapY = (ny: number) => (ny * H - F.cy) * s + F.cyScreen;

    // ── draw ──────────────────────────────────────────────────
    ctx.clearRect(0, 0, W, H);

    // links
    ctx.lineWidth = Math.max(0.6, 0.8 * dpr * s);
    ctx.strokeStyle = tok.link;
    for (const [i, j] of links) {
      const a = nodes[i], b = nodes[j];
      if (!a || !b) continue;
      ctx.beginPath();
      ctx.moveTo(mapX(a.x), mapY(a.y));
      ctx.lineTo(mapX(b.x), mapY(b.y));
      ctx.stroke();
    }

    // glossy spheres
    for (const n of nodes) {
      const pulse = n.hub ? 1 + Math.sin(st.t * 0.05 + n.x * 10) * 0.06 : 1;
      const x = mapX(n.x), y = mapY(n.y), r = n.r * dpr * s * pulse;

      // soft contact shadow (hubs only, keeps it cheap)
      if (n.hub) {
        ctx.save();
        ctx.shadowColor = "rgba(0,0,0,0.28)";
        ctx.shadowBlur = r * 0.8;
        ctx.shadowOffsetY = r * 0.4;
      }
      const grad = ctx.createRadialGradient(x - r * 0.32, y - r * 0.34, r * 0.12, x, y, r * 1.05);
      grad.addColorStop(0, shade(n.color, 0.5));
      grad.addColorStop(0.45, n.color);
      grad.addColorStop(1, shade(n.color, -0.4));
      ctx.beginPath();
      ctx.fillStyle = grad;
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
      if (n.hub) ctx.restore();

      // defining rim so the sphere reads on the cream background
      ctx.beginPath();
      ctx.lineWidth = Math.max(0.75, 0.9 * dpr);
      ctx.strokeStyle = tok.nodeRim;
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.stroke();

      // specular highlight
      ctx.beginPath();
      ctx.fillStyle = "rgba(255,255,255,0.6)";
      ctx.arc(x - r * 0.34, y - r * 0.34, r * 0.26, 0, Math.PI * 2);
      ctx.fill();
    }

    // labels (drawn last so they sit above the spheres, like the reference)
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const labelPx = Math.max(9 * dpr, Math.min(13 * dpr, 12 * dpr * s));
    ctx.font = `600 ${labelPx}px Prompt, system-ui, sans-serif`;
    for (const n of nodes) {
      if (!n.hub || !n.label) continue;
      const x = mapX(n.x);
      const y = mapY(n.y) + n.r * dpr * s + labelPx * 0.9 + 4 * dpr;
      const padX = labelPx * 0.6, h = labelPx + 8 * dpr;
      const w = ctx.measureText(n.label).width + padX * 2;
      const rr = h / 2;
      // pill
      ctx.beginPath();
      ctx.fillStyle = tok.pillBg;
      const lx = x - w / 2, ly = y - h / 2;
      ctx.moveTo(lx + rr, ly);
      ctx.arcTo(lx + w, ly, lx + w, ly + h, rr);
      ctx.arcTo(lx + w, ly + h, lx, ly + h, rr);
      ctx.arcTo(lx, ly + h, lx, ly, rr);
      ctx.arcTo(lx, ly, lx + w, ly, rr);
      ctx.closePath();
      ctx.fill();
      // text in the node color
      ctx.fillStyle = n.color;
      ctx.fillText(n.label, x, y + 0.5 * dpr);
    }

    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  // keep canvas resolution crisp — a ResizeObserver catches the case (common on
  // mobile / SPA re-entry) where the card measures 0px at mount and only gets
  // its real size a frame or two later, so the canvas never stays blank.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return; // not laid out yet — wait for next observation
      const dpr = window.devicePixelRatio || 1;
      const w = Math.max(1, Math.round(rect.width * dpr));
      const h = Math.max(1, Math.round(rect.height * dpr));
      dprRef.current = dpr;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        snapRef.current = true; // re-fit the graph to the new size immediately
      }
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener("resize", resize);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  // ── pointer interaction: drag a node · click empty space to ripple ─────────
  const relPos = (e: React.PointerEvent) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    return { rect, x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const onPointerDown = (e: React.PointerEvent) => {
    const { x, y } = relPos(e);
    const hit = nodeAt(x, y);
    pointerRef.current = { down: true, moved: false, x, y, dx: 0, dy: 0 };
    if (hit >= 0) {
      dragRef.current = hit;
      canvasRef.current!.setPointerCapture(e.pointerId);
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!pointerRef.current.down) return;
    const { x, y } = relPos(e);
    const p = pointerRef.current;
    if (Math.hypot(x - p.x, y - p.y) > 4) p.moved = true;
    if (dragRef.current >= 0) {
      const n = stateRef.current.nodes[dragRef.current];
      if (n) {
        const { nx, ny } = toNorm(x, y);
        n.x = nx; n.y = ny; n.vx = 0; n.vy = 0;
      }
    }
  };

  const endPointer = (e: React.PointerEvent) => {
    const p = pointerRef.current;
    if (dragRef.current < 0 && p.down && !p.moved) {
      // click on empty space → gentle ripple that pushes nearby nodes outward
      const { x, y } = relPos(e);
      const { nx: px, ny: py } = toNorm(x, y);
      for (const n of stateRef.current.nodes) {
        const dx = n.x - px, dy = n.y - py;
        const d = Math.hypot(dx, dy) || 0.0001;
        const f = Math.min(0.03, 0.004 / (d * d + 0.02));
        n.vx += (dx / d) * f; n.vy += (dy / d) * f;
      }
    }
    dragRef.current = -1;
    pointerRef.current.down = false;
    try { canvasRef.current?.releasePointerCapture(e.pointerId); } catch { /* no capture */ }
  };

  return (
    <Box
      component="canvas"
      ref={canvasRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endPointer}
      onPointerCancel={endPointer}
      sx={{
        width: "100%", height: "100%", display: "block",
        touchAction: "none", cursor: "grab",
        "&:active": { cursor: "grabbing" },
      }}
    />
  );
};

// ── Main component ───────────────────────────────────────────────────────────
export const CommentToAnimationSection: FC = () => {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";
  const T = getTokens(isDark);

  const [draft, setDraft] = useState("");
  const [committed, setCommitted] = useState("AI Agents RAG Fine-Tuning");

  const submit = () => {
    const v = draft.trim();
    if (v) setCommitted(v);
  };

  return (
    <Box sx={{
      backgroundColor: T.bg,
      px: { xs: "24px", sm: "48px", lg: "80px" },
      py: { xs: "80px", sm: "100px", md: "130px" },
      position: "relative", overflow: "hidden",
      transition: "background-color 0.5s ease",
    }}>
      {/* Subtle background grid */}
      <Box sx={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: `
          linear-gradient(${T.gridLine} 1px, transparent 1px),
          linear-gradient(90deg, ${T.gridLine} 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />

      <Box sx={{ position: "relative", zIndex: 1, maxWidth: "1320px", mx: "auto", ...sectionFrameSx }}>
        <Grid container spacing={{ xs: 9, sm: 10, md: 12, lg: 14 }} alignItems="center">

          {/* Left: content + input */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal from="left" delay={0}>
              <SectionLabel label="Interactive" index="07" T={T} />
            </Reveal>

            <Stack direction="column" gap={3}>
              <Reveal from="left" delay={80}>
                <Typography sx={{
                  fontSize: { xs: "30px", sm: "38px", md: "46px" },
                  fontWeight: 500, color: T.headline,
                  lineHeight: 1.06, letterSpacing: "-0.02em", fontFamily: FONT_DISPLAY,
                  transition: "color 0.4s ease",
                }}>
                  Type anything.{" "}
                  <Box component="span" sx={{ color: T.headlineFaded, transition: "color 0.4s ease" }}>
                    Watch it become a living network.
                  </Box>
                </Typography>
              </Reveal>

              <Reveal from="left" delay={160}>
                <Typography sx={{
                  fontSize: "15px", color: T.body, lineHeight: 1.85, maxWidth: "440px",
                  transition: "color 0.4s ease",
                }}>
                  Each word becomes a hub; each letter blooms into orbiting nodes —
                  a glimpse of how Fossilite turns raw input into connected,
                  structured knowledge. Drag a node to pull the graph around, or
                  click the space to send a ripple through it.
                </Typography>
              </Reveal>

              <Reveal from="left" delay={240}>
                <Box
                  component="textarea"
                  value={draft}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDraft(e.target.value)}
                  onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
                    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) submit();
                  }}
                  placeholder="Write something…"
                  rows={4}
                  sx={{
                    width: "100%", resize: "none", borderRadius: "12px",
                    backgroundColor: T.inputBg,
                    border: `0.5px solid ${T.inputBorder}`,
                    px: "16px", py: "12px",
                    fontSize: "14px", fontFamily: "Prompt", color: T.inputText,
                    outline: "none", lineHeight: 1.6,
                    transition: "border-color 0.3s ease, background-color 0.5s ease",
                    "&::placeholder": { color: T.placeholder },
                    "&:focus": { borderColor: T.inputFocus },
                  }}
                />
              </Reveal>

              <Reveal from="left" delay={320}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
                  <Typography sx={{ fontSize: "12px", color: T.hint, fontFamily: "Prompt" }}>
                    ⌘ / Ctrl + Enter
                  </Typography>
                  <Box
                    component="button"
                    onClick={submit}
                    sx={{
                      borderRadius: "10px", border: "none", cursor: "pointer",
                      backgroundColor: T.ctaBg, color: T.ctaText,
                      px: "20px", py: "10px",
                      fontSize: "14px", fontWeight: 500, fontFamily: "Prompt",
                      transition: "background-color 0.3s ease, transform 0.15s ease",
                      "&:hover": { backgroundColor: T.ctaHover },
                      "&:active": { transform: "scale(0.96)" },
                    }}
                  >
                    Animate
                  </Box>
                </Box>
              </Reveal>

              {committed && (
                <Reveal from="left" delay={380}>
                  <Typography sx={{
                    fontSize: "12px", color: T.hint, fontFamily: "Prompt",
                    whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                  }}>
                    Now showing:{" "}
                    <Box component="span" sx={{ color: T.body }}>{committed}</Box>
                  </Typography>
                </Reveal>
              )}
            </Stack>
          </Grid>

          {/* Right: animation card */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Reveal from="right" delay={120}>
              <Box sx={{
                position: "relative",
                borderRadius: "16px", overflow: "hidden",
                border: `0.5px solid ${T.cardBorder}`,
                backgroundColor: T.cardBg,
                boxShadow: T.boxShadow,
                height: { xs: "400px", sm: "480px", md: "560px" },
                transition: "border-color 0.3s ease, background-color 0.5s ease",
                "&:hover": { borderColor: T.cardBorderHover },
              }}>
                {/* Top glow line */}
                <Box sx={{
                  position: "absolute", top: 0, left: "50%",
                  transform: "translateX(-50%)",
                  width: "60%", height: "1px", background: T.topGlow, zIndex: 2,
                }} />
                <NetworkCanvas text={committed} T={T} />
                {/* interaction hint */}
                <Typography sx={{
                  position: "absolute", top: "12px", right: "16px", zIndex: 3,
                  fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase",
                  color: T.hint, fontFamily: "Prompt", pointerEvents: "none",
                }}>
                  drag · click
                </Typography>
              </Box>
            </Reveal>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

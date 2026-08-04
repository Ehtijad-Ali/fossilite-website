import { FC, useMemo } from "react";
import { Box, Typography } from "@mui/material";
import type { Guide } from "../../content/types";
import { categoryBySlug } from "../../content";

const MONO = 'ui-monospace, SFMono-Regular, Menlo, "Roboto Mono", monospace';
const GOLD = "#C3A87C";

/**
 * Procedurally generated hero artwork for a guide.
 *
 * Why generated rather than photographic: the site's visual language is the
 * monograph specimen plate — gold linework on dark navy. Stock photography
 * fights that, and it's the visual signature of low-effort content sites.
 * Generated plates are also deterministic (same guide, same art, forever),
 * weigh nothing, and carry no licensing question.
 *
 * If a guide supplies `heroImage`, that wins — see GuideHero below.
 */

// ─── Deterministic randomness ────────────────────────────────────────────────

/** FNV-1a. Stable across runs and platforms, unlike hashing on object identity. */
const hashString = (s: string): number => {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
};

/** mulberry32 — small, fast, good enough for decorative geometry. */
const makeRng = (seed: number) => {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

// Each track gets its own accent so the library reads as a series with
// sections, rather than 30 interchangeable plates.
const TRACK_TINT: Record<string, string> = {
  "AI & Engineering": "#7FD8CE",
  "Business & Growth": "#D8A24A",
  "Life & Career": "#9BA7D8",
};

const W = 1200;
const H = 520;

interface Node {
  x: number;
  y: number;
  r: number;
}

/**
 * A contour field with a node lattice over it — the same "measured specimen"
 * idea as the home page's loss-surface plates, reduced to static linework.
 */
const buildPlate = (seed: number) => {
  const rng = makeRng(seed);

  // Two or three gaussian centres define the field's shape.
  const peakCount = 2 + Math.floor(rng() * 2);
  const peaks = Array.from({ length: peakCount }, () => ({
    x: 0.18 + rng() * 0.64,
    y: 0.2 + rng() * 0.6,
    amp: 0.6 + rng() * 0.8,
    spread: 0.05 + rng() * 0.09,
  }));

  const field = (nx: number, ny: number) =>
    peaks.reduce(
      (sum, p) =>
        sum + p.amp * Math.exp(-(((nx - p.x) ** 2 + (ny - p.y) ** 2) / p.spread)),
      0,
    );

  // Contour rows: sample the field along horizontal slices and displace the
  // line vertically by its value. Cheap, and reads as a topographic section.
  const rows = 26;
  const cols = 60;
  const contours: string[] = [];
  for (let r = 0; r < rows; r++) {
    const ny = (r + 0.5) / rows;
    let d = "";
    for (let c = 0; c <= cols; c++) {
      const nx = c / cols;
      const lift = field(nx, ny) * 46;
      const x = nx * W;
      const y = ny * H - lift;
      d += c === 0 ? `M${x.toFixed(1)},${y.toFixed(1)}` : `L${x.toFixed(1)},${y.toFixed(1)}`;
    }
    contours.push(d);
  }

  // Nodes sit on the field's high ground, so they cluster where the contours
  // bunch — the lattice looks derived from the surface rather than scattered.
  const nodes: Node[] = [];
  let attempts = 0;
  while (nodes.length < 9 && attempts < 400) {
    attempts++;
    const nx = 0.08 + rng() * 0.84;
    const ny = 0.12 + rng() * 0.76;
    if (field(nx, ny) < 0.35) continue;
    const x = nx * W;
    const y = ny * H - field(nx, ny) * 46;
    if (nodes.some((n) => Math.hypot(n.x - x, n.y - y) < 90)) continue;
    nodes.push({ x, y, r: 2.2 + rng() * 2.6 });
  }

  // Connect near neighbours only — a fully-connected graph reads as noise.
  const links: [Node, Node][] = [];
  nodes.forEach((a, i) =>
    nodes.slice(i + 1).forEach((b) => {
      if (Math.hypot(a.x - b.x, a.y - b.y) < 300) links.push([a, b]);
    }),
  );

  return { contours, nodes, links };
};

// ─── The plate ───────────────────────────────────────────────────────────────

export const GuidePlate: FC<{ guide: Guide; height?: Record<string, string> | string }> = ({
  guide,
  height,
}) => {
  const seed = useMemo(() => hashString(guide.slug), [guide.slug]);
  const { contours, nodes, links } = useMemo(() => buildPlate(seed), [seed]);

  const category = categoryBySlug(guide.category);
  const tint = TRACK_TINT[category?.track ?? ""] ?? GOLD;
  const plateNo = String((seed % 99) + 1).padStart(2, "0");

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: height ?? { xs: "180px", sm: "230px", md: "290px" },
        borderRadius: "16px",
        overflow: "hidden",
        border: "0.5px solid rgba(195,168,124,0.22)",
        boxShadow: "0 24px 60px rgba(0,20,45,0.30)",
        background: "radial-gradient(120% 130% at 50% 0%, #1a2c47 0%, #101d31 55%, #0a1220 100%)",
      }}
    >
      <Box
        component="svg"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
      >
        <defs>
          <linearGradient id={`fade-${seed}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={tint} stopOpacity="0.40" />
            <stop offset="55%" stopColor={GOLD} stopOpacity="0.22" />
            <stop offset="100%" stopColor={GOLD} stopOpacity="0.04" />
          </linearGradient>
          <radialGradient id={`glow-${seed}`} cx="50%" cy="0%" r="80%">
            <stop offset="0%" stopColor={tint} stopOpacity="0.16" />
            <stop offset="100%" stopColor={tint} stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width={W} height={H} fill={`url(#glow-${seed})`} />

        {/* Measurement grid, very quiet — it reads as plate stock, not as a chart. */}
        <g stroke="rgba(240,232,214,0.05)" strokeWidth="1">
          {Array.from({ length: 12 }, (_, i) => (
            <line key={`v${i}`} x1={(i * W) / 12} y1="0" x2={(i * W) / 12} y2={H} />
          ))}
          {Array.from({ length: 5 }, (_, i) => (
            <line key={`h${i}`} x1="0" y1={(i * H) / 5} x2={W} y2={(i * H) / 5} />
          ))}
        </g>

        <g fill="none" stroke={`url(#fade-${seed})`} strokeWidth="1.1">
          {contours.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>

        <g stroke={tint} strokeOpacity="0.30" strokeWidth="0.8">
          {links.map(([a, b], i) => (
            <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
          ))}
        </g>

        <g>
          {nodes.map((n, i) => (
            <g key={i}>
              <circle cx={n.x} cy={n.y} r={n.r * 3.4} fill={tint} opacity="0.13" />
              <circle cx={n.x} cy={n.y} r={n.r} fill={tint} opacity="0.9" />
            </g>
          ))}
        </g>
      </Box>

      {/* Corner brackets */}
      {[
        { top: 12, left: 12, borderTop: 1, borderLeft: 1 },
        { top: 12, right: 12, borderTop: 1, borderRight: 1 },
        { bottom: 12, left: 12, borderBottom: 1, borderLeft: 1 },
        { bottom: 12, right: 12, borderBottom: 1, borderRight: 1 },
      ].map((c, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute", width: "15px", height: "15px", zIndex: 2, pointerEvents: "none",
            top: c.top, bottom: c.bottom, left: c.left, right: c.right,
            borderTop: c.borderTop ? `1.5px solid ${GOLD}` : undefined,
            borderBottom: c.borderBottom ? `1.5px solid ${GOLD}` : undefined,
            borderLeft: c.borderLeft ? `1.5px solid ${GOLD}` : undefined,
            borderRight: c.borderRight ? `1.5px solid ${GOLD}` : undefined,
          }}
        />
      ))}

      <Typography
        sx={{
          position: "absolute", top: "16px", left: "22px", zIndex: 3, pointerEvents: "none",
          fontFamily: MONO, fontSize: "10px", letterSpacing: "0.14em",
          color: "rgba(240,232,214,0.72)",
        }}
      >
        PL. {plateNo} · {(category?.name ?? guide.category).toUpperCase()}
      </Typography>

      <Typography
        sx={{
          position: "absolute", bottom: "14px", left: "22px", right: "22px", zIndex: 3,
          pointerEvents: "none", fontFamily: MONO, fontSize: "9.5px", letterSpacing: "0.08em",
          color: "rgba(240,232,214,0.45)",
        }}
      >
        Fig. — {guide.level.toLowerCase()} · {guide.readingTime} min · {guide.keywords[0]}
      </Typography>
    </Box>
  );
};

/**
 * Hero visual for a guide. Uses `heroImage` when a guide supplies one, and
 * falls back to the generated plate otherwise — so real photography can be
 * dropped in per-guide later without touching this file's callers.
 */
export const GuideHero: FC<{ guide: Guide; height?: Record<string, string> | string }> = ({
  guide,
  height,
}) => {
  if (!guide.heroImage) return <GuidePlate guide={guide} height={height} />;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: height ?? { xs: "180px", sm: "230px", md: "290px" },
        borderRadius: "16px",
        overflow: "hidden",
        border: "0.5px solid rgba(195,168,124,0.22)",
        boxShadow: "0 24px 60px rgba(0,20,45,0.30)",
        backgroundColor: "#0a1220",
      }}
    >
      <Box
        component="img"
        src={guide.heroImage.src}
        alt={guide.heroImage.alt}
        loading="lazy"
        sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      {/* Navy wash so photography sits inside the monograph palette rather
          than punching a hole in it. */}
      <Box
        sx={{
          position: "absolute", inset: 0,
          background:
            "linear-gradient(180deg, rgba(10,18,32,0.30) 0%, rgba(10,18,32,0.10) 40%, rgba(10,18,32,0.75) 100%)",
        }}
      />
      {guide.heroImage.credit && (
        <Typography
          sx={{
            position: "absolute", bottom: "12px", right: "18px", zIndex: 2,
            fontFamily: MONO, fontSize: "9px", letterSpacing: "0.06em",
            color: "rgba(240,232,214,0.55)",
          }}
        >
          {guide.heroImage.credit}
        </Typography>
      )}
    </Box>
  );
};

export default GuidePlate;

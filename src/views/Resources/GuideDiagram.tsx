// ─────────────────────────────────────────────────────────────────────────────
// Figures for the resource library.
//
// Authored as data in the guide files and painted here, for two reasons. Every
// figure picks up the light and dark palettes from the theme without the author
// thinking about it, and a guide file stays readable instead of carrying a page
// of hand-written SVG in the middle of the prose.
//
// Only `curve` and `scatter` are drawn in SVG. Everything else is laid out in
// HTML, because a row of boxes with long labels has to wrap on a phone and a
// fixed viewBox cannot do that.
//
// On colour: structure is drawn in ink, and colour is only spent where the
// reader has to tell two things apart. The site's own gold and teal accents are
// deliberately NOT used for that — they sit ~14 units apart in normal vision,
// under the legibility floor, so they are chrome here and never encoding. The
// series hues below are a validated categorical set, checked all-pairs against
// both the light and the dark card surface.
//
// On motion: figures draw themselves once, when scrolled into view, and then
// stay put. Anything that loops competes with the prose for attention. Every
// transition is skipped outright under prefers-reduced-motion — the figure is
// simply already finished, never a degraded version of itself.
//
// On tooltips: they carry NAMES and NOTES, not numbers. The curve and scatter
// figures are schematic — their axes deliberately have no numeric ticks, since
// the businesses are constructed — so a tooltip reading "74" would invent a
// statistic the guides take care not to claim. `bars` is the one exception, and
// its values are arithmetic the caption already shows.
// ─────────────────────────────────────────────────────────────────────────────
import { FC, useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useSharedTokens } from "../../theme/sharedTokens";
import type { Diagram } from "../../content/types";

const MONO = 'ui-monospace, SFMono-Regular, Menlo, "Roboto Mono", monospace';
const GOLD = "#C3A87C";
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

type T = ReturnType<typeof useSharedTokens>;

/** Validated categorical steps. Slots 1-3 clear the all-pairs floors in both modes. */
const series = (T: T) =>
  T.isDark ? ["#3987e5", "#d95926", "#199e70"] : ["#2a78d6", "#eb6834", "#1baf7a"];

const toneColor = (T: T, tone?: string) => {
  const [s1, s2, s3] = series(T);
  if (tone === "good") return s3;
  if (tone === "bad") return s2;
  if (tone === "accent" || tone === "model") return s1;
  if (tone === "input" || tone === "output") return T.secondaryText;
  return T.mutedText;
};

// ─── Motion plumbing ─────────────────────────────────────────────────────────

const useReducedMotion = () => {
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
const useInView = <E extends HTMLElement>() => {
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
const enter = (on: boolean, reduced: boolean, i = 0, dist = 10) => ({
  opacity: on || reduced ? 1 : 0,
  transform: on || reduced ? "none" : `translateY(${dist}px)`,
  transition: reduced ? "none" : `opacity 520ms ${EASE} ${i * 70}ms, transform 520ms ${EASE} ${i * 70}ms`,
});

// ─── Shared furniture ────────────────────────────────────────────────────────

const Tip: FC<{ x: number; y: number; title: string; note?: string; T: T }> = ({ x, y, title, note, T }) => (
  // Flips on both axes near an edge. The vertical flip is not cosmetic: the
  // plot sits in a horizontally scrollable box, and a box that scrolls on one
  // axis computes the other to `auto` too, so a tooltip reaching above the
  // frame gets clipped rather than overflowing. Below the mark it stays inside.
  <Box
    sx={{
      position: "absolute", left: `${x}%`, top: `${y}%`,
      transform: `translate(${x > 62 ? "-100%" : "0"}, ${y < 30 ? "22%" : "-118%"})`,
      pointerEvents: "none", zIndex: 3,
      px: "11px", py: "8px", borderRadius: "8px", maxWidth: "230px",
      backgroundColor: T.isDark ? "#0b1728" : "#001932",
      border: `0.5px solid ${T.isDark ? "#2f4b6a" : "rgba(255,255,255,0.12)"}`,
      boxShadow: "0 10px 30px rgba(0,0,0,0.28)",
    }}
  >
    <Typography sx={{ fontSize: "12.5px", fontWeight: 600, color: "#FFF4E3", lineHeight: 1.35 }}>
      {title}
    </Typography>
    {note ? (
      <Typography sx={{ fontSize: "11.5px", color: "#BBC0C6", lineHeight: 1.5, mt: "3px" }}>{note}</Typography>
    ) : null}
  </Box>
);

const Figure: FC<{ title: string; caption?: string; T: T; children: React.ReactNode }> = ({
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

const Legend: FC<{
  items: { name: string; color: string; dashed?: boolean; band?: boolean }[];
  T: T; active?: number | null; onHover?: (i: number | null) => void;
}> = ({ items, T, active, onHover }) => (
  <Box sx={{ display: "flex", flexWrap: "wrap", gap: "16px", mt: "16px" }}>
    {items.map((it, i) => (
      <Box
        key={it.name}
        onMouseEnter={() => onHover?.(i)}
        onMouseLeave={() => onHover?.(null)}
        sx={{
          display: "flex", alignItems: "center", gap: "7px",
          cursor: onHover ? "default" : undefined,
          opacity: active == null || active === i ? 1 : 0.42,
          transition: `opacity 200ms ${EASE}`,
        }}
      >
        <Box
          sx={{
            width: "14px", height: it.dashed ? 0 : "9px",
            borderRadius: it.dashed ? 0 : "2px",
            // The swatch has to match what the chart actually paints, so a band
            // gets the same washed-out fill it has in the plot.
            backgroundColor: it.dashed ? "transparent" : it.color,
            opacity: it.band ? 0.3 : 1,
            borderTop: it.dashed ? `2px dashed ${it.color}` : "none",
            flexShrink: 0,
          }}
        />
        <Typography sx={{ fontSize: "12.5px", color: T.secondaryText }}>{it.name}</Typography>
      </Box>
    ))}
  </Box>
);

// ─── flow ────────────────────────────────────────────────────────────────────
// The workhorse. What goes in, what it does, what somebody does differently.

const Flow: FC<{ d: Extract<Diagram, { kind: "flow" }>; T: T }> = ({ d, T }) => {
  const reduced = useReducedMotion();
  const { ref, seen } = useInView<HTMLDivElement>();
  const [hover, setHover] = useState<number | null>(null);
  return (
    <Figure title={d.title} caption={d.caption} T={T}>
      {/* A grid, not a wrapping flex row. Flex sized every card to its own text,
          which left them ragged, and the arrows between them were separate
          elements that dangled at the end of a wrapped row pointing at nothing.
          Grid gives equal widths, equal heights per row, and the arrow now lives
          inside its card, so it can never be stranded in a gap. */}
      <Box
        ref={ref}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 186px), 1fr))",
          gap: "10px", py: "4px",
        }}
      >
        {d.steps.map((s, i) => {
          const isModel = s.tone === "model";
          const accent = toneColor(T, "model");
          return (
            <Box
              key={s.label}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              sx={{
                position: "relative", height: "100%",
                p: "14px 16px", borderRadius: "10px",
                border: `0.5px solid ${isModel ? accent : T.border}`,
                borderLeft: isModel ? `2px solid ${accent}` : undefined,
                backgroundColor: T.surfaceSubtle,
                ...enter(seen, reduced, i, 12),
                boxShadow: hover === i ? `0 8px 24px ${T.isDark ? "rgba(0,0,0,0.4)" : "rgba(0,25,50,0.10)"}` : "none",
                ...(reduced ? {} : {
                  transition: `opacity 520ms ${EASE} ${i * 70}ms, transform 320ms ${EASE}, box-shadow 320ms ${EASE}`,
                  transform: hover === i && seen ? "translateY(-3px)" : (seen ? "none" : "translateY(12px)"),
                }),
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", mb: "7px" }}>
                <Typography
                  sx={{
                    fontFamily: MONO, fontSize: "9px", letterSpacing: "0.1em",
                    textTransform: "uppercase", color: isModel ? accent : T.mutedText,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                  {isModel ? " · model" : ""}
                </Typography>
                {i < d.steps.length - 1 && (
                  <Box aria-hidden sx={{ color: T.mutedText, fontSize: "13px", lineHeight: 1, flexShrink: 0 }}>
                    →
                  </Box>
                )}
              </Box>
              <Typography sx={{ fontSize: "13.5px", lineHeight: 1.45, color: T.primaryText, fontWeight: 500 }}>
                {s.label}
              </Typography>
              {s.note ? (
                <Typography sx={{ fontSize: "12px", lineHeight: 1.5, color: T.mutedText, mt: "6px" }}>
                  {s.note}
                </Typography>
              ) : null}
            </Box>
          );
        })}
      </Box>
    </Figure>
  );
};

// ─── matrix ──────────────────────────────────────────────────────────────────

const Matrix: FC<{ d: Extract<Diagram, { kind: "matrix" }>; T: T }> = ({ d, T }) => {
  const reduced = useReducedMotion();
  const { ref, seen } = useInView<HTMLDivElement>();
  const [hover, setHover] = useState<number | null>(null);
  return (
    <Figure title={d.title} caption={d.caption} T={T}>
      <Box ref={ref} sx={{ minWidth: "440px", py: "4px" }}>
        <Typography sx={{ fontFamily: MONO, fontSize: "9.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: T.mutedText, mb: "8px", pl: "128px" }}>
          {d.colLabel}
        </Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: "120px 1fr 1fr", gap: "8px" }}>
          <Box />
          {d.cols.map((c, i) => (
            <Typography key={c} sx={{ fontSize: "13px", fontWeight: 600, color: T.headline, pb: "4px", ...enter(seen, reduced, i) }}>
              {c}
            </Typography>
          ))}
          {[0, 1].map((r) => (
            <Box key={r} sx={{ display: "contents" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ fontSize: "13px", fontWeight: 600, color: T.headline, pr: "10px", ...enter(seen, reduced, r) }}>
                  {d.rows[r]}
                </Typography>
              </Box>
              {[0, 1].map((c) => {
                const idx = r * 2 + c;
                const cell = d.cells[idx];
                const col = cell.tone === "neutral" || !cell.tone ? T.border : toneColor(T, cell.tone);
                return (
                  <Box
                    key={c}
                    onMouseEnter={() => setHover(idx)}
                    onMouseLeave={() => setHover(null)}
                    sx={{
                      p: "14px 15px", borderRadius: "10px",
                      border: `0.5px solid ${hover === idx ? col : T.border}`,
                      borderLeft: `2px solid ${col}`,
                      backgroundColor: T.surfaceSubtle,
                      ...enter(seen, reduced, idx + 1),
                      ...(reduced ? {} : {
                        transition: `opacity 520ms ${EASE} ${(idx + 1) * 70}ms, transform 300ms ${EASE}, border-color 260ms ${EASE}, box-shadow 300ms ${EASE}`,
                        transform: hover === idx && seen ? "translateY(-3px)" : (seen ? "none" : "translateY(10px)"),
                      }),
                      boxShadow: hover === idx ? `0 8px 24px ${T.isDark ? "rgba(0,0,0,0.4)" : "rgba(0,25,50,0.10)"}` : "none",
                    }}
                  >
                    <Typography sx={{ fontSize: "13.5px", fontWeight: 500, color: T.primaryText, lineHeight: 1.4 }}>
                      {cell.label}
                    </Typography>
                    {cell.note ? (
                      <Typography sx={{ fontSize: "12px", lineHeight: 1.5, color: T.mutedText, mt: "5px" }}>
                        {cell.note}
                      </Typography>
                    ) : null}
                  </Box>
                );
              })}
            </Box>
          ))}
        </Box>
        <Typography sx={{ fontFamily: MONO, fontSize: "9.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: T.mutedText, mt: "10px" }}>
          {d.rowLabel} ↓
        </Typography>
      </Box>
    </Figure>
  );
};

// ─── bars ────────────────────────────────────────────────────────────────────
// Horizontal, so the labels are readable without rotating anybody's head.

const Bars: FC<{ d: Extract<Diagram, { kind: "bars" }>; T: T }> = ({ d, T }) => {
  const reduced = useReducedMotion();
  const { ref, seen } = useInView<HTMLDivElement>();
  const max = Math.max(...d.bars.map((b) => b.value), 1);
  return (
    <Figure title={d.title} caption={d.caption} T={T}>
      <Box ref={ref} sx={{ display: "flex", flexDirection: "column", gap: "15px", py: "4px" }}>
        {d.bars.map((b, i) => (
          <Box key={b.label} sx={enter(seen, reduced, i)}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", mb: "6px", gap: "12px" }}>
              <Typography sx={{ fontSize: "13.5px", color: T.primaryText, lineHeight: 1.4 }}>{b.label}</Typography>
              <Typography sx={{ fontFamily: MONO, fontSize: "12px", color: T.secondaryText, flexShrink: 0 }}>
                {b.value}
                {d.unit ?? ""}
              </Typography>
            </Box>
            <Box sx={{ height: "10px", borderRadius: "5px", backgroundColor: T.surfaceSubtle, overflow: "hidden" }}>
              <Box
                sx={{
                  width: seen || reduced ? `${(b.value / max) * 100}%` : "0%",
                  height: "100%", borderRadius: "5px",
                  backgroundColor: toneColor(T, b.tone ?? "accent"),
                  transition: reduced ? "none" : `width 820ms ${EASE} ${i * 90 + 120}ms`,
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Figure>
  );
};

// ─── plot geometry, shared by curve and scatter ──────────────────────────────

const W = 640;
const H = 300;
const PAD = { l: 52, r: 20, t: 16, b: 44 };
const sx_ = (x: number) => PAD.l + (x / 100) * (W - PAD.l - PAD.r);
const sy_ = (y: number) => H - PAD.b - (y / 100) * (H - PAD.t - PAD.b);
const pctX = (px: number) => (px / W) * 100;
const pctY = (py: number) => (py / H) * 100;

const Axes: FC<{ xLabel: string; yLabel: string; T: T; on: boolean; reduced: boolean }> = ({
  xLabel, yLabel, T, on, reduced,
}) => (
  <g style={{ opacity: on || reduced ? 1 : 0, transition: reduced ? "none" : `opacity 420ms ${EASE}` }}>
    {[0, 25, 50, 75, 100].map((g) => (
      <line key={g} x1={PAD.l} x2={W - PAD.r} y1={sy_(g)} y2={sy_(g)} stroke={T.border} strokeWidth={0.5} />
    ))}
    <line x1={PAD.l} x2={W - PAD.r} y1={sy_(0)} y2={sy_(0)} stroke={T.mutedText} strokeWidth={1} />
    <line x1={PAD.l} x2={PAD.l} y1={sy_(0)} y2={PAD.t} stroke={T.mutedText} strokeWidth={1} />
    <text x={W - PAD.r} y={H - 12} textAnchor="end" fontSize={11} fill={T.mutedText} fontFamily={MONO}>
      {xLabel} →
    </text>
    <text
      x={-(PAD.t + (H - PAD.t - PAD.b) / 2)} y={14} transform="rotate(-90)"
      textAnchor="middle" fontSize={11} fill={T.mutedText} fontFamily={MONO}
    >
      {yLabel} →
    </text>
  </g>
);

// ─── curve ───────────────────────────────────────────────────────────────────

const Curve: FC<{ d: Extract<Diagram, { kind: "curve" }>; T: T }> = ({ d, T }) => {
  const cols = series(T);
  const reduced = useReducedMotion();
  const { ref, seen } = useInView<HTMLDivElement>();
  const [active, setActive] = useState<number | null>(null);
  const [tip, setTip] = useState<{ x: number; y: number; title: string; note?: string } | null>(null);
  const lines = d.series.map((s, i) => ({ s, i })).filter(({ s }) => !s.band);

  return (
    <Figure title={d.title} caption={d.caption} T={T}>
      <Box ref={ref} sx={{ minWidth: "460px", position: "relative" }}>
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-label={d.title} style={{ display: "block", overflow: "visible" }}>
          <Axes xLabel={d.xLabel} yLabel={d.yLabel} T={T} on={seen} reduced={reduced} />
          {d.series.map((s, i) => {
            const col = cols[i % cols.length];
            const path = s.points.map((p, j) => `${j === 0 ? "M" : "L"} ${sx_(p[0])} ${sy_(p[1])}`).join(" ");
            const dim = active != null && active !== i;
            if (s.band) {
              // A real range: down the upper edge, back along the lower one.
              const back = [...s.band.lower].reverse().map((p) => `L ${sx_(p[0])} ${sy_(p[1])}`).join(" ");
              return (
                <path
                  key={s.name} d={`${path} ${back} Z`} fill={col} stroke="none"
                  style={{
                    opacity: (seen || reduced ? (dim ? 0.06 : 0.16) : 0),
                    transition: reduced ? "none" : `opacity 700ms ${EASE} 260ms`,
                  }}
                />
              );
            }
            return (
              <path
                key={s.name} d={path} fill="none" stroke={col} strokeWidth={2}
                strokeLinecap="round" strokeLinejoin="round"
                strokeDasharray={s.dashed ? "6 5" : undefined}
                // pathLength normalises every line to 1, so one dashoffset value
                // draws any of them without measuring the DOM.
                {...(s.dashed || reduced ? {} : { pathLength: 1, strokeDasharray: 1 })}
                style={{
                  strokeDashoffset: s.dashed || reduced ? undefined : (seen ? 0 : 1),
                  opacity: s.dashed ? (seen || reduced ? (dim ? 0.25 : 1) : 0) : (dim ? 0.25 : 1),
                  transition: reduced
                    ? "none"
                    : `stroke-dashoffset 1150ms ${EASE} ${i * 160 + 180}ms, opacity 420ms ${EASE}`,
                }}
              />
            );
          })}
          {/* Hover targets sit on top, bigger than the mark they select. */}
          {lines.map(({ s, i }) =>
            s.points.map((p, j) => (
              <circle
                key={`${i}-${j}`} cx={sx_(p[0])} cy={sy_(p[1])} r={11}
                fill="transparent" style={{ cursor: "pointer" }}
                onMouseEnter={() => {
                  setActive(i);
                  setTip({ x: pctX(sx_(p[0])), y: pctY(sy_(p[1])), title: s.name, note: d.yLabel });
                }}
                onMouseLeave={() => { setActive(null); setTip(null); }}
              />
            )),
          )}
          {d.notes?.map((n) => (
            <g key={n.text} style={{ opacity: seen || reduced ? 1 : 0, transition: reduced ? "none" : `opacity 500ms ${EASE} 900ms` }}>
              <circle cx={sx_(n.x)} cy={sy_(n.y)} r={4} fill={T.cardBg} stroke={T.primaryText} strokeWidth={1.5} />
              <text
                x={sx_(n.x) + 9} y={sy_(n.y) - 8} fontSize={11.5} fill={T.primaryText}
                textAnchor={n.x > 62 ? "end" : "start"}
              >
                {n.text}
              </text>
            </g>
          ))}
        </svg>
        {tip ? <Tip {...tip} T={T} /> : null}
        {d.series.length > 1 ? (
          <Legend
            items={d.series.map((s, i) => ({
              name: s.name, color: cols[i % cols.length], dashed: s.dashed, band: !!s.band,
            }))}
            T={T} active={active} onHover={setActive}
          />
        ) : null}
      </Box>
    </Figure>
  );
};

// ─── scatter ─────────────────────────────────────────────────────────────────

const Scatter: FC<{ d: Extract<Diagram, { kind: "scatter" }>; T: T }> = ({ d, T }) => {
  const cols = series(T);
  const reduced = useReducedMotion();
  const { ref, seen } = useInView<HTMLDivElement>();
  const [active, setActive] = useState<number | null>(null);
  const [tip, setTip] = useState<{ x: number; y: number; title: string } | null>(null);
  let n = 0;
  return (
    <Figure title={d.title} caption={d.caption} T={T}>
      <Box ref={ref} sx={{ minWidth: "460px", position: "relative" }}>
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-label={d.title} style={{ display: "block", overflow: "visible" }}>
          <Axes xLabel={d.xLabel} yLabel={d.yLabel} T={T} on={seen} reduced={reduced} />
          {d.groups.map((g, i) => (
            <g key={g.name}>
              {g.points.map((p, j) => {
                const delay = (n++ % 26) * 26 + 220;
                const dim = active != null && active !== i;
                return (
                  <circle
                    key={j} cx={sx_(p[0])} cy={sy_(p[1])} r={5}
                    fill={g.ring ? "none" : cols[i % cols.length]}
                    stroke={g.ring ? cols[i % cols.length] : T.cardBg}
                    strokeWidth={g.ring ? 2 : 1.5}
                    style={{
                      transformOrigin: `${sx_(p[0])}px ${sy_(p[1])}px`,
                      transform: seen || reduced ? "scale(1)" : "scale(0)",
                      opacity: dim ? 0.22 : 1,
                      transition: reduced
                        ? "none"
                        : `transform 460ms ${EASE} ${delay}ms, opacity 260ms ${EASE}`,
                    }}
                  />
                );
              })}
              {/* Bigger invisible hit targets, so a 5px dot is still selectable. */}
              {g.points.map((p, j) => (
                <circle
                  key={`h${j}`} cx={sx_(p[0])} cy={sy_(p[1])} r={11} fill="transparent"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => { setActive(i); setTip({ x: pctX(sx_(p[0])), y: pctY(sy_(p[1])), title: g.name }); }}
                  onMouseLeave={() => { setActive(null); setTip(null); }}
                />
              ))}
            </g>
          ))}
        </svg>
        {tip ? <Tip {...tip} T={T} /> : null}
        {d.groups.length > 1 ? (
          <Legend
            items={d.groups.map((g, i) => ({ name: g.name, color: cols[i % cols.length] }))}
            T={T} active={active} onHover={setActive}
          />
        ) : null}
      </Box>
    </Figure>
  );
};

// ─── tree ────────────────────────────────────────────────────────────────────
// Laid out in HTML rather than SVG so long questions wrap on a phone.

const Tree: FC<{ d: Extract<Diagram, { kind: "tree" }>; T: T }> = ({ d, T }) => {
  const reduced = useReducedMotion();
  const { ref, seen } = useInView<HTMLDivElement>();
  const [hover, setHover] = useState<number | null>(null);

  const Outcome: FC<{ text: string }> = ({ text }) => (
    <Typography
      sx={{
        fontSize: "13px", color: T.primaryText, fontWeight: 500,
        p: "9px 13px", borderRadius: "8px",
        backgroundColor: T.surfaceSubtle, border: `0.5px solid ${T.border}`,
        display: "inline-block",
      }}
    >
      {text}
    </Typography>
  );
  const Q: FC<{ text: string }> = ({ text }) => (
    <Typography sx={{ fontSize: "13.5px", fontWeight: 600, color: T.headline, mb: "10px" }}>{text}</Typography>
  );

  return (
    <Figure title={d.title} caption={d.caption} T={T}>
      <Box ref={ref} sx={{ py: "4px" }}>
        <Box
          sx={{
            p: "15px 17px", borderRadius: "10px",
            border: `0.5px solid ${toneColor(T, "model")}`, mb: "14px",
            ...enter(seen, reduced, 0, 12),
          }}
        >
          <Typography sx={{ fontFamily: MONO, fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase", color: toneColor(T, "model"), mb: "6px" }}>
            Ask first
          </Typography>
          <Q text={d.question} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", pl: { xs: "10px", md: "22px" } }}>
          {d.branches.map((b, i) => (
            <Box
              key={b.answer}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              sx={{
                borderLeft: `2px solid ${hover === i ? GOLD : T.border}`,
                pl: { xs: "12px", md: "18px" }, py: "5px",
                ...enter(seen, reduced, i + 1, 10),
                ...(reduced ? {} : {
                  transition: `opacity 520ms ${EASE} ${(i + 1) * 70}ms, transform 520ms ${EASE} ${(i + 1) * 70}ms, border-color 260ms ${EASE}`,
                }),
              }}
            >
              <Typography sx={{ fontFamily: MONO, fontSize: "11px", color: GOLD, mb: "7px" }}>{b.answer}</Typography>
              {b.outcome ? <Outcome text={b.outcome} /> : null}
              {b.question ? (
                <>
                  <Q text={b.question} />
                  <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", pl: { xs: "10px", md: "16px" } }}>
                    {b.sub?.map((s) => (
                      <Box key={s.answer} sx={{ borderLeft: `2px solid ${T.border}`, pl: "14px" }}>
                        <Typography sx={{ fontFamily: MONO, fontSize: "11px", color: T.mutedText, mb: "6px" }}>
                          {s.answer}
                        </Typography>
                        <Outcome text={s.outcome} />
                      </Box>
                    ))}
                  </Box>
                </>
              ) : null}
            </Box>
          ))}
        </Box>
      </Box>
    </Figure>
  );
};

// ─── entry point ─────────────────────────────────────────────────────────────

export const GuideDiagram: FC<{ d: Diagram }> = ({ d }) => {
  const T = useSharedTokens();
  switch (d.kind) {
    case "flow": return <Flow d={d} T={T} />;
    case "matrix": return <Matrix d={d} T={T} />;
    case "bars": return <Bars d={d} T={T} />;
    case "curve": return <Curve d={d} T={T} />;
    case "scatter": return <Scatter d={d} T={T} />;
    case "tree": return <Tree d={d} T={T} />;
  }
};

export default GuideDiagram;

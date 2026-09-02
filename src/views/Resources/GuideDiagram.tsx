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
import type { Diagram, DiagramLesson } from "../../content/types";
import {
  MONO, GOLD, EASE, series, good, bad, toneColor,
  useReducedMotion, useInView, enter, Figure,
} from "./figureKit";
import type { T } from "./figureKit";
import { GuideWorkflow } from "./GuideWorkflow";

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

// --- The lesson frame -------------------------------------------------------
// Problem, the wrong view, the switch, the discovery, what to do, the takeaway.
//
// A finished chart shows an answer. This shows somebody being wrong first,
// which is the half that teaches: the reader recognises the naive view as the
// thing they would have done, and only then sees what it hides. So `wrong` and
// `right` are two states of the same figure, not two captions.

/** The cross / tick switch. Flipping it changes what is plotted. */
const ViewToggle: FC<{
  lesson: DiagramLesson; revealed: boolean; onChange: (r: boolean) => void; T: T;
}> = ({ lesson, revealed, onChange, T }) => {
  const opts = [
    { on: false, mark: "\u2715", label: lesson.wrong.label, col: bad(T) },
    { on: true, mark: "\u2713", label: lesson.right.label, col: good(T) },
  ];
  return (
    <Box
      role="tablist"
      aria-label="Compare the two views"
      sx={{
        display: "inline-flex", gap: "4px", p: "4px", borderRadius: "11px",
        border: `0.5px solid ${T.border}`, backgroundColor: T.surfaceSubtle, mb: "16px",
        maxWidth: "100%", flexWrap: { xs: "wrap", sm: "nowrap" },
      }}
    >
      {opts.map((o) => {
        const active = o.on === revealed;
        return (
          <Box
            key={o.label}
            component="button"
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(o.on)}
            sx={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              px: "14px", py: "9px", borderRadius: "8px", cursor: "pointer",
              border: `0.5px solid ${active ? `${o.col}88` : "transparent"}`,
              backgroundColor: active ? T.cardBg : "transparent",
              font: "inherit", fontSize: "13px", fontWeight: active ? 600 : 500,
              color: active ? T.headline : T.mutedText,
              transition: `all 260ms ${EASE}`,
              "&:hover": { color: T.primaryText },
            }}
          >
            <Box component="span" sx={{ color: o.col, fontWeight: 700, fontSize: "12px" }}>{o.mark}</Box>
            {o.label}
          </Box>
        );
      })}
    </Box>
  );
};

/** One sentence above the plot. What is going wrong. */
const ProblemStrip: FC<{ text: string; T: T }> = ({ text, T }) => (
  <Box sx={{ display: "flex", gap: "11px", alignItems: "stretch", mb: "15px" }}>
    <Box sx={{ width: "2px", borderRadius: "1px", backgroundColor: GOLD, flexShrink: 0 }} />
    <Typography sx={{ fontSize: "14.5px", lineHeight: 1.6, color: T.secondaryText }}>{text}</Typography>
  </Box>
);

/** Below the plot: why this view misleads, then the discovery and the decision. */
const LessonFoot: FC<{ lesson: DiagramLesson; revealed: boolean; T: T }> = ({ lesson, revealed, T }) => {
  const reduced = useReducedMotion();
  const side = revealed ? lesson.right : lesson.wrong;
  const col = revealed ? good(T) : bad(T);
  const chip = (tone: string) => (tone === "protect" ? good(T) : tone === "investigate" ? bad(T) : GOLD);
  const rise = (delay: number) => ({
    animation: reduced ? "none" : `lessonIn 440ms ${EASE} ${delay}ms both`,
    "@keyframes lessonIn": {
      from: { opacity: 0, transform: "translateY(7px)" },
      to: { opacity: 1, transform: "none" },
    },
  });
  return (
    <Box sx={{ mt: "18px" }}>
      <Box
        key={String(revealed)}
        sx={{
          p: "13px 15px", borderRadius: "10px",
          border: `0.5px solid ${T.border}`, borderLeft: `2px solid ${col}`,
          backgroundColor: T.surfaceSubtle, ...rise(0),
        }}
      >
        <Typography sx={{ fontSize: "14px", lineHeight: 1.65, color: T.primaryText }}>{side.why}</Typography>
      </Box>

      {revealed ? (
        <>
          <Box
            sx={{
              display: "flex", gap: "11px", alignItems: "flex-start", mt: "14px",
              p: "14px 16px", borderRadius: "10px",
              border: `0.5px solid ${GOLD}55`,
              backgroundColor: T.isDark ? "rgba(195,168,124,0.07)" : "rgba(195,168,124,0.10)",
              ...rise(90),
            }}
          >
            {/* Drawn rather than an emoji: it inherits the gold and stays crisp. */}
            <Box
              aria-hidden
              component="svg"
              viewBox="0 0 24 24"
              sx={{ width: "17px", height: "17px", flexShrink: 0, mt: "2px" }}
            >
              <path
                d="M12 3a6 6 0 0 0-3.3 11v2.2h6.6V14A6 6 0 0 0 12 3Z"
                fill="none" stroke={GOLD} strokeWidth="1.6" strokeLinejoin="round"
              />
              <path d="M9.6 20h4.8" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" />
            </Box>
            <Typography sx={{ fontSize: "14.5px", lineHeight: 1.6, color: T.headline, fontWeight: 500 }}>
              {lesson.discovery}
            </Typography>
          </Box>

          {lesson.decisions?.length ? (
            <Box sx={{ mt: "16px", ...rise(170) }}>
              <Typography sx={{ fontFamily: MONO, fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", color: T.mutedText, mb: "9px" }}>
                So what do you do?
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {lesson.decisions.map((d) => (
                  <Box
                    key={d.label}
                    sx={{
                      display: "inline-flex", alignItems: "center", gap: "9px",
                      px: "13px", py: "8px", borderRadius: "99px",
                      border: `0.5px solid ${chip(d.tone)}66`, backgroundColor: T.cardBg,
                    }}
                  >
                    {/* A dot AND the word: never colour alone. */}
                    <Box sx={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: chip(d.tone), flexShrink: 0 }} />
                    <Typography sx={{ fontFamily: MONO, fontSize: "9.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: chip(d.tone) }}>
                      {d.tone}
                    </Typography>
                    <Typography sx={{ fontSize: "13px", color: T.primaryText }}>{d.label}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ) : null}

          <Typography
            sx={{
              fontSize: { xs: "15px", md: "16.5px" }, lineHeight: 1.55, color: T.headline,
              fontWeight: 600, fontFamily: "Prompt", mt: "18px", pt: "15px",
              borderTop: `0.5px solid ${T.border}`, ...rise(240),
            }}
          >
            {lesson.takeaway}
          </Typography>
        </>
      ) : (
        <Typography sx={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: GOLD, mt: "14px" }}>
          Now switch to {lesson.right.label}
        </Typography>
      )}
    </Box>
  );
};

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
      {d.lesson ? <ProblemStrip text={d.lesson.problem} T={T} /> : null}
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
      {d.lesson ? <LessonFoot lesson={d.lesson} revealed T={T} /> : null}
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
      {d.lesson ? <ProblemStrip text={d.lesson.problem} T={T} /> : null}
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
      {d.lesson ? <LessonFoot lesson={d.lesson} revealed T={T} /> : null}
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
  const [revealed, setRevealed] = useState(!d.naive);
  const shownSeries = !revealed && d.naive ? d.naive.series : d.series;
  const shownNotes = !revealed && d.naive ? d.naive.notes : d.notes;
  const lines = shownSeries.map((s, i) => ({ s, i })).filter(({ s }) => !("band" in s && s.band));

  return (
    <Figure title={d.title} caption={d.caption} T={T}>
      {d.lesson ? <ProblemStrip text={d.lesson.problem} T={T} /> : null}
      {d.lesson && d.naive ? (
        <ViewToggle
          lesson={d.lesson} revealed={revealed}
          onChange={(r) => { setRevealed(r); setActive(null); setTip(null); }} T={T}
        />
      ) : null}
      <Box ref={ref} sx={{ minWidth: "460px", position: "relative" }}>
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-label={d.title} style={{ display: "block", overflow: "visible" }}>
          <Axes xLabel={d.xLabel} yLabel={d.yLabel} T={T} on={seen} reduced={reduced} />
          {shownSeries.map((s, i) => {
            const col = cols[i % cols.length];
            const band = "band" in s ? s.band : undefined;
            const path = s.points.map((p, j) => `${j === 0 ? "M" : "L"} ${sx_(p[0])} ${sy_(p[1])}`).join(" ");
            const dim = active != null && active !== i;
            if (band) {
              // A real range: down the upper edge, back along the lower one.
              const back = [...band.lower].reverse().map((p) => `L ${sx_(p[0])} ${sy_(p[1])}`).join(" ");
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
          {shownNotes?.map((n) => (
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
        {shownSeries.length > 1 ? (
          <Legend
            items={shownSeries.map((s, i) => ({
              name: s.name, color: cols[i % cols.length], dashed: s.dashed,
              band: "band" in s && !!s.band,
            }))}
            T={T} active={active} onHover={setActive}
          />
        ) : null}
      </Box>
      {d.lesson ? <LessonFoot lesson={d.lesson} revealed={revealed} T={T} /> : null}
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
  // Starts on the naive view where there is one, so the reader meets the
  // mistake before the answer. With no naive state there is nothing to switch.
  const [revealed, setRevealed] = useState(!d.naive);
  const shown = !revealed && d.naive ? d.naive.groups : d.groups;
  const notes = !revealed && d.naive ? d.naive.notes : d.notes;
  let n = 0;
  return (
    <Figure title={d.title} caption={d.caption} T={T}>
      {d.lesson ? <ProblemStrip text={d.lesson.problem} T={T} /> : null}
      {d.lesson && d.naive ? (
        <ViewToggle
          lesson={d.lesson} revealed={revealed}
          onChange={(r) => { setRevealed(r); setActive(null); setTip(null); }} T={T}
        />
      ) : null}
      <Box ref={ref} sx={{ minWidth: "460px", position: "relative" }}>
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-label={d.title} style={{ display: "block", overflow: "visible" }}>
          <Axes xLabel={d.xLabel} yLabel={d.yLabel} T={T} on={seen} reduced={reduced} />
          {shown.map((g, i) => (
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
          {notes?.map((nt) => (
            <g key={nt.text} style={{ opacity: seen || reduced ? 1 : 0, transition: reduced ? "none" : `opacity 500ms ${EASE} 800ms` }}>
              <circle cx={sx_(nt.x)} cy={sy_(nt.y)} r={4} fill={T.cardBg} stroke={T.primaryText} strokeWidth={1.5} />
              <text
                x={sx_(nt.x) + (nt.x > 62 ? -9 : 9)} y={sy_(nt.y) - 9} fontSize={11.5}
                fill={T.primaryText} textAnchor={nt.x > 62 ? "end" : "start"}
              >
                {nt.text}
              </text>
            </g>
          ))}
        </svg>
        {tip ? <Tip {...tip} T={T} /> : null}
        {shown.length > 1 ? (
          <Legend
            items={shown.map((g, i) => ({ name: g.name, color: cols[i % cols.length] }))}
            T={T} active={active} onHover={setActive}
          />
        ) : null}
      </Box>
      {d.lesson ? <LessonFoot lesson={d.lesson} revealed={revealed} T={T} /> : null}
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
    case "workflow": return <GuideWorkflow d={d} />;
    case "flow": return <Flow d={d} T={T} />;
    case "matrix": return <Matrix d={d} T={T} />;
    case "bars": return <Bars d={d} T={T} />;
    case "curve": return <Curve d={d} T={T} />;
    case "scatter": return <Scatter d={d} T={T} />;
    case "tree": return <Tree d={d} T={T} />;
  }
};

export default GuideDiagram;

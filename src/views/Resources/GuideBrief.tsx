// ─────────────────────────────────────────────────────────────────────────────
// The scannable layer: the whole lesson in about a minute, above the guide.
//
// Three pieces, in the order a business reader actually needs them.
//
//   GuideBriefBlock  the problem, what businesses get wrong, what works instead
//   GuideStory       the six-stage sequence, played rather than printed
//   GuideCalculator  the reader's own numbers, driving a live answer
//
// The wrong/right pair carries this. A technique introduced without the failure
// it fixes is vocabulary; introduced as the answer to something that has just
// been shown not to work, it lands. So the ✗ card is deliberately given the
// same visual weight as the ✓ one rather than being a footnote.
// ─────────────────────────────────────────────────────────────────────────────
import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useSharedTokens } from "../../theme/sharedTokens";
import type { Calculator, GuideBrief, Story } from "../../content/types";

const MONO = 'ui-monospace, SFMono-Regular, Menlo, "Roboto Mono", monospace';
const GOLD = "#C3A87C";
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

type T = ReturnType<typeof useSharedTokens>;

const good = (T: T) => (T.isDark ? "#199e70" : "#1baf7a");
const bad = (T: T) => (T.isDark ? "#d95926" : "#eb6834");
const blue = (T: T) => (T.isDark ? "#3987e5" : "#2a78d6");

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

const useInView = <E extends HTMLElement>(threshold = 0.25) => {
  const ref = useRef<E | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    if (typeof IntersectionObserver === "undefined") { setSeen(true); return; }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen, threshold]);
  return { ref, seen };
};

const Eyebrow: FC<{ children: React.ReactNode; color?: string }> = ({ children, color }) => (
  <Typography
    sx={{
      fontFamily: MONO, fontSize: "9.5px", letterSpacing: "0.14em",
      textTransform: "uppercase", color: color ?? GOLD, mb: "10px",
    }}
  >
    {children}
  </Typography>
);

// ─── 1-3 + 6-7: the brief ────────────────────────────────────────────────────

export const GuideBriefBlock: FC<{ b: GuideBrief }> = ({ b }) => {
  const T = useSharedTokens();
  const reduced = useReducedMotion();
  const { ref, seen } = useInView<HTMLDivElement>(0.1);
  const on = seen || reduced;

  const rise = (i: number) => ({
    opacity: on ? 1 : 0,
    transform: on ? "none" : "translateY(14px)",
    transition: reduced ? "none" : `opacity 560ms ${EASE} ${i * 90}ms, transform 560ms ${EASE} ${i * 90}ms`,
  });

  const Card: FC<{ tone: "bad" | "good"; kicker: string; what: string; why: string; i: number }> = ({
    tone, kicker, what, why, i,
  }) => {
    const col = tone === "good" ? good(T) : bad(T);
    return (
      <Box
        sx={{
          flex: "1 1 280px", p: { xs: "18px", md: "22px" }, borderRadius: "14px",
          border: `0.5px solid ${T.border}`, borderTop: `2px solid ${col}`,
          backgroundColor: T.cardBg, boxShadow: T.boxShadow, ...rise(i),
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px", mb: "10px" }}>
          <Box
            aria-hidden
            sx={{
              width: "20px", height: "20px", borderRadius: "50%", flexShrink: 0,
              display: "grid", placeItems: "center",
              backgroundColor: `${col}22`, color: col, fontSize: "12px", fontWeight: 700,
            }}
          >
            {tone === "good" ? "✓" : "✕"}
          </Box>
          <Typography sx={{ fontFamily: MONO, fontSize: "9.5px", letterSpacing: "0.14em", textTransform: "uppercase", color: col }}>
            {kicker}
          </Typography>
        </Box>
        <Typography sx={{ fontSize: "16px", fontWeight: 600, color: T.headline, lineHeight: 1.4, mb: "8px" }}>
          {what}
        </Typography>
        <Typography sx={{ fontSize: "14.5px", lineHeight: 1.7, color: T.secondaryText }}>{why}</Typography>
      </Box>
    );
  };

  return (
    <Box ref={ref} sx={{ mb: "8px" }}>
      {/* In one minute */}
      <Box
        sx={{
          p: { xs: "20px", md: "26px" }, borderRadius: "16px", mb: "16px",
          border: `0.5px solid ${GOLD}66`,
          background: T.isDark
            ? "linear-gradient(180deg, rgba(195,168,124,0.09), rgba(195,168,124,0.02))"
            : "linear-gradient(180deg, rgba(195,168,124,0.14), rgba(195,168,124,0.03))",
          ...rise(0),
        }}
      >
        <Eyebrow>In one minute</Eyebrow>
        <Typography
          sx={{
            fontSize: { xs: "17px", md: "19px" }, lineHeight: 1.6, color: T.headline,
            fontWeight: 500, letterSpacing: "-0.01em",
          }}
        >
          {b.inOneMinute}
        </Typography>
      </Box>

      {/* The problem */}
      <Box
        sx={{
          p: { xs: "18px", md: "22px" }, borderRadius: "14px", mb: "16px",
          border: `0.5px solid ${T.border}`, backgroundColor: T.surfaceSubtle, ...rise(1),
        }}
      >
        <Eyebrow color={T.mutedText}>The business problem</Eyebrow>
        <Typography sx={{ fontSize: { xs: "18px", md: "20px" }, fontWeight: 600, fontFamily: "Prompt", color: T.headline, lineHeight: 1.35, mb: "8px" }}>
          {b.problem.headline}
        </Typography>
        <Typography sx={{ fontSize: "15px", lineHeight: 1.75, color: T.secondaryText }}>
          {b.problem.detail}
        </Typography>
      </Box>

      {/* Wrong / right, side by side and equally weighted */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "16px", mb: "16px" }}>
        <Card tone="bad" kicker="What usually happens" what={b.wrongApproach.what} why={b.wrongApproach.why} i={2} />
        <Card tone="good" kicker="What works instead" what={b.rightApproach.what} why={b.rightApproach.why} i={3} />
      </Box>
    </Box>
  );
};

// ─── 6 + 7: context and takeaway, closing the scannable layer ────────────────

export const GuideBriefClose: FC<{ b: GuideBrief }> = ({ b }) => {
  const T = useSharedTokens();
  const reduced = useReducedMotion();
  const { ref, seen } = useInView<HTMLDivElement>(0.15);
  const on = seen || reduced;
  const rows: [string, string][] = [
    ["Where a company uses it", b.context.where],
    ["The decision it informs", b.context.decision],
    ["The metric that moves", b.context.metric],
  ];
  return (
    <Box ref={ref} sx={{ mb: "8px" }}>
      <Box
        sx={{
          p: { xs: "18px", md: "24px" }, borderRadius: "14px", mb: "16px",
          border: `0.5px solid ${T.border}`, backgroundColor: T.cardBg, boxShadow: T.boxShadow,
          opacity: on ? 1 : 0, transform: on ? "none" : "translateY(14px)",
          transition: reduced ? "none" : `opacity 560ms ${EASE}, transform 560ms ${EASE}`,
        }}
      >
        <Eyebrow>In the real world</Eyebrow>
        <Box sx={{ display: "grid", gap: "14px" }}>
          {rows.map(([k, v], i) => (
            <Box
              key={k}
              sx={{
                display: "grid", gridTemplateColumns: { xs: "1fr", sm: "180px 1fr" }, gap: { xs: "4px", sm: "18px" },
                pb: i < rows.length - 1 ? "14px" : 0,
                borderBottom: i < rows.length - 1 ? `0.5px solid ${T.border}` : "none",
              }}
            >
              <Typography sx={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: T.mutedText, pt: "3px" }}>
                {k}
              </Typography>
              <Typography sx={{ fontSize: "15px", lineHeight: 1.7, color: T.secondaryText }}>{v}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          p: { xs: "20px", md: "24px" }, borderRadius: "14px",
          borderLeft: `3px solid ${GOLD}`, border: `0.5px solid ${T.border}`,
          backgroundColor: T.surfaceSubtle,
          opacity: on ? 1 : 0, transform: on ? "none" : "translateY(14px)",
          transition: reduced ? "none" : `opacity 560ms ${EASE} 120ms, transform 560ms ${EASE} 120ms`,
        }}
      >
        <Eyebrow>The one thing to remember</Eyebrow>
        <Typography sx={{ fontSize: { xs: "16.5px", md: "18px" }, lineHeight: 1.6, color: T.headline, fontWeight: 500 }}>
          {b.takeaway}
        </Typography>
      </Box>
    </Box>
  );
};

// ─── 5: the animated sequence ────────────────────────────────────────────────

export const GuideStory: FC<{ s: Story }> = ({ s }) => {
  const T = useSharedTokens();
  const reduced = useReducedMotion();
  const { ref, seen } = useInView<HTMLDivElement>(0.3);
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [everPlayed, setEverPlayed] = useState(false);

  // Runs itself once, on arrival, then holds on the last stage. It does not
  // loop: a repeating animation beside prose is a distraction, not a teacher.
  useEffect(() => {
    if (!seen || reduced || everPlayed) return;
    setPlaying(true); setEverPlayed(true);
  }, [seen, reduced, everPlayed]);

  useEffect(() => {
    if (!playing) return;
    if (i >= s.stages.length - 1) { setPlaying(false); return; }
    const t = setTimeout(() => setI((n) => n + 1), 1250);
    return () => clearTimeout(t);
  }, [playing, i, s.stages.length]);

  const replay = useCallback(() => { setI(0); setPlaying(true); }, []);
  const active = reduced ? s.stages.length - 1 : i;

  return (
    <Box
      ref={ref}
      sx={{
        p: { xs: "18px", md: "26px" }, borderRadius: "16px", mb: "16px",
        border: `0.5px solid ${T.border}`, backgroundColor: T.cardBg, boxShadow: T.boxShadow,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px", flexWrap: "wrap", mb: "6px" }}>
        <Eyebrow>How it plays out</Eyebrow>
        <Box
          component="button"
          onClick={replay}
          sx={{
            font: "inherit", fontFamily: MONO, fontSize: "10.5px", letterSpacing: "0.08em",
            textTransform: "uppercase", cursor: "pointer", background: "none",
            border: `0.5px solid ${T.border}`, color: T.secondaryText,
            px: "12px", py: "6px", borderRadius: "7px",
            transition: `color 200ms ${EASE}, border-color 200ms ${EASE}`,
            "&:hover": { color: GOLD, borderColor: GOLD },
          }}
        >
          ↻ Replay
        </Box>
      </Box>
      <Typography sx={{ fontSize: { xs: "16px", md: "17.5px" }, fontWeight: 600, fontFamily: "Prompt", color: T.headline, mb: "20px", lineHeight: 1.35 }}>
        {s.title}
      </Typography>

      {/* The rail. Each stage lights as it arrives; earlier ones stay lit. */}
      <Box sx={{ position: "relative", mb: "20px" }}>
        <Box sx={{ position: "absolute", left: 0, right: 0, top: "13px", height: "2px", backgroundColor: T.border }} />
        <Box
          sx={{
            position: "absolute", left: 0, top: "13px", height: "2px", backgroundColor: GOLD,
            width: `${(active / (s.stages.length - 1)) * 100}%`,
            transition: reduced ? "none" : `width 900ms ${EASE}`,
          }}
        />
        <Box sx={{ position: "relative", display: "grid", gridTemplateColumns: `repeat(${s.stages.length}, 1fr)`, gap: "4px" }}>
          {s.stages.map((st, n) => {
            const done = n <= active;
            return (
              <Box
                key={st.stage}
                onClick={() => { setPlaying(false); setI(n); }}
                sx={{ cursor: "pointer", textAlign: "center" }}
              >
                <Box
                  sx={{
                    width: "28px", height: "28px", borderRadius: "50%", mx: "auto", mb: "9px",
                    display: "grid", placeItems: "center",
                    backgroundColor: done ? GOLD : T.cardBg,
                    border: `2px solid ${done ? GOLD : T.border}`,
                    color: done ? (T.isDark ? "#0e1a2b" : "#ffffff") : T.mutedText,
                    fontFamily: MONO, fontSize: "10px", fontWeight: 700,
                    transform: n === active && !reduced ? "scale(1.14)" : "scale(1)",
                    transition: reduced ? "none" : `all 420ms ${EASE}`,
                  }}
                >
                  {n + 1}
                </Box>
                <Typography
                  sx={{
                    fontFamily: MONO, fontSize: { xs: "8.5px", md: "9.5px" }, letterSpacing: "0.06em",
                    textTransform: "uppercase", lineHeight: 1.3,
                    color: n === active ? GOLD : done ? T.secondaryText : T.mutedText,
                    transition: reduced ? "none" : `color 300ms ${EASE}`,
                  }}
                >
                  {st.stage}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* The caption for whichever stage is lit. Fixed min height so the card
          does not jump about as the sequence advances. */}
      <Box
        sx={{
          p: "16px 18px", borderRadius: "12px", backgroundColor: T.surfaceSubtle,
          border: `0.5px solid ${T.border}`, minHeight: "104px",
        }}
      >
        {s.stages.map((st, n) =>
          n === active ? (
            <Box
              key={st.stage}
              sx={{
                animation: reduced ? "none" : "fadeUp 460ms both",
                "@keyframes fadeUp": {
                  from: { opacity: 0, transform: "translateY(8px)" },
                  to: { opacity: 1, transform: "none" },
                },
              }}
            >
              <Typography sx={{ fontSize: "15.5px", fontWeight: 600, color: T.headline, mb: "6px", lineHeight: 1.4 }}>
                {st.label}
              </Typography>
              <Typography sx={{ fontSize: "14.5px", lineHeight: 1.7, color: T.secondaryText }}>
                {st.detail}
              </Typography>
            </Box>
          ) : null,
        )}
      </Box>

      {s.caption ? (
        <Typography sx={{ fontSize: "13.5px", lineHeight: 1.7, color: T.mutedText, mt: "16px", pt: "14px", borderTop: `0.5px solid ${T.border}` }}>
          {s.caption}
        </Typography>
      ) : null}
    </Box>
  );
};

// ─── 4: the calculator ───────────────────────────────────────────────────────

const CW = 620, CH = 220, CP = { l: 46, r: 16, t: 14, b: 34 };
const cx_ = (x: number) => CP.l + (x / 100) * (CW - CP.l - CP.r);
const cy_ = (y: number) => CH - CP.b - (y / 100) * (CH - CP.t - CP.b);

export const GuideCalculator: FC<{ c: Calculator }> = ({ c }) => {
  const T = useSharedTokens();
  const reduced = useReducedMotion();
  const [vals, setVals] = useState<Record<string, number>>(
    () => Object.fromEntries(c.inputs.map((i) => [i.id, i.value])),
  );
  // Recomputed on every drag. The formula is a real function compiled with the
  // guide, so there is nothing to parse and nothing to sanitise.
  const res = useMemo(() => c.compute(vals), [c, vals]);

  return (
    <Box
      sx={{
        p: { xs: "18px", md: "26px" }, borderRadius: "16px", mb: "16px",
        border: `0.5px solid ${blue(T)}55`, backgroundColor: T.cardBg, boxShadow: T.boxShadow,
      }}
    >
      <Eyebrow color={blue(T)}>Try it with your numbers</Eyebrow>
      <Typography sx={{ fontSize: { xs: "16px", md: "17.5px" }, fontWeight: 600, fontFamily: "Prompt", color: T.headline, mb: "8px", lineHeight: 1.35 }}>
        {c.title}
      </Typography>
      <Typography sx={{ fontSize: "14.5px", lineHeight: 1.7, color: T.secondaryText, mb: "22px" }}>
        {c.intro}
      </Typography>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: "20px", md: "28px" } }}>
        {/* Inputs */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {c.inputs.map((inp) => (
            <Box key={inp.id}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", mb: "8px" }}>
                <Typography component="label" htmlFor={`ci-${inp.id}`} sx={{ fontSize: "14px", color: T.primaryText, lineHeight: 1.4 }}>
                  {inp.label}
                </Typography>
                <Typography sx={{ fontFamily: MONO, fontSize: "14px", fontWeight: 600, color: blue(T), flexShrink: 0 }}>
                  {inp.prefix ?? ""}{vals[inp.id].toLocaleString()}{inp.suffix ?? ""}
                </Typography>
              </Box>
              <Box
                component="input"
                id={`ci-${inp.id}`}
                type="range"
                min={inp.min} max={inp.max} step={inp.step} value={vals[inp.id]}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setVals((v) => ({ ...v, [inp.id]: Number(e.target.value) }))
                }
                sx={{
                  width: "100%", appearance: "none", height: "4px", borderRadius: "2px",
                  background: T.surfaceSubtle, outline: "none", cursor: "pointer",
                  "&::-webkit-slider-thumb": {
                    appearance: "none", width: "18px", height: "18px", borderRadius: "50%",
                    background: blue(T), cursor: "pointer", border: `2px solid ${T.cardBg}`,
                    boxShadow: `0 2px 8px ${T.isDark ? "rgba(0,0,0,0.5)" : "rgba(0,25,50,0.2)"}`,
                  },
                  "&::-moz-range-thumb": {
                    width: "18px", height: "18px", borderRadius: "50%", background: blue(T),
                    cursor: "pointer", border: `2px solid ${T.cardBg}`,
                  },
                }}
              />
              {inp.help ? (
                <Typography sx={{ fontSize: "12px", lineHeight: 1.5, color: T.mutedText, mt: "6px" }}>{inp.help}</Typography>
              ) : null}
            </Box>
          ))}
        </Box>

        {/* Outputs */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {res.outputs.map((o) => {
            const col = o.tone === "good" ? good(T) : o.tone === "bad" ? bad(T) : T.primaryText;
            return (
              <Box
                key={o.label}
                sx={{
                  p: o.hero ? "18px 20px" : "13px 16px", borderRadius: "12px",
                  backgroundColor: T.surfaceSubtle, border: `0.5px solid ${T.border}`,
                  borderLeft: o.hero ? `3px solid ${col}` : `0.5px solid ${T.border}`,
                }}
              >
                <Typography sx={{ fontFamily: MONO, fontSize: "9.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: T.mutedText, mb: "6px" }}>
                  {o.label}
                </Typography>
                <Typography
                  sx={{
                    fontSize: o.hero ? { xs: "26px", md: "31px" } : "17px",
                    fontWeight: 600, fontFamily: o.hero ? "Prompt" : undefined,
                    color: col, lineHeight: 1.15, letterSpacing: o.hero ? "-0.02em" : undefined,
                  }}
                >
                  {o.value}
                </Typography>
                {o.note ? (
                  <Typography sx={{ fontSize: "12.5px", lineHeight: 1.55, color: T.mutedText, mt: "7px" }}>{o.note}</Typography>
                ) : null}
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* Live plot, when the guide supplies one */}
      {res.plot ? (
        <Box sx={{ mt: "24px", overflowX: "auto" }}>
          <Box sx={{ minWidth: "440px" }}>
            <svg viewBox={`0 0 ${CW} ${CH}`} width="100%" role="img" aria-label={res.plot.xLabel + " against " + res.plot.yLabel} style={{ display: "block" }}>
              {[0, 50, 100].map((g) => (
                <line key={g} x1={CP.l} x2={CW - CP.r} y1={cy_(g)} y2={cy_(g)} stroke={T.border} strokeWidth={0.5} />
              ))}
              <line x1={CP.l} x2={CW - CP.r} y1={cy_(0)} y2={cy_(0)} stroke={T.mutedText} strokeWidth={1} />
              <line x1={CP.l} x2={CP.l} y1={cy_(0)} y2={CP.t} stroke={T.mutedText} strokeWidth={1} />
              <path
                d={res.plot.points.map((p, j) => `${j === 0 ? "M" : "L"} ${cx_(p[0])} ${cy_(p[1])}`).join(" ")}
                fill="none" stroke={blue(T)} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                style={{ transition: reduced ? "none" : `d 260ms ${EASE}` }}
              />
              {res.plot.marker ? (
                <g>
                  <line
                    x1={cx_(res.plot.marker[0])} x2={cx_(res.plot.marker[0])}
                    y1={cy_(0)} y2={cy_(res.plot.marker[1])}
                    stroke={GOLD} strokeWidth={1} strokeDasharray="3 4"
                  />
                  <circle cx={cx_(res.plot.marker[0])} cy={cy_(res.plot.marker[1])} r={5.5} fill={GOLD} stroke={T.cardBg} strokeWidth={2} />
                  {res.plot.markerLabel ? (
                    <text
                      x={cx_(res.plot.marker[0]) + (res.plot.marker[0] > 58 ? -9 : 9)}
                      y={cy_(res.plot.marker[1]) - 10}
                      fontSize={11.5} fill={T.primaryText}
                      textAnchor={res.plot.marker[0] > 58 ? "end" : "start"}
                    >
                      {res.plot.markerLabel}
                    </text>
                  ) : null}
                </g>
              ) : null}
              <text x={CW - CP.r} y={CH - 8} textAnchor="end" fontSize={10.5} fill={T.mutedText} fontFamily={MONO}>
                {res.plot.xLabel} →
              </text>
              <text
                x={-(CP.t + (CH - CP.t - CP.b) / 2)} y={12} transform="rotate(-90)"
                textAnchor="middle" fontSize={10.5} fill={T.mutedText} fontFamily={MONO}
              >
                {res.plot.yLabel} →
              </text>
            </svg>
          </Box>
        </Box>
      ) : null}

      {c.footnote ? (
        <Typography sx={{ fontSize: "12.5px", lineHeight: 1.65, color: T.mutedText, mt: "20px", pt: "14px", borderTop: `0.5px solid ${T.border}` }}>
          {c.footnote}
        </Typography>
      ) : null}
    </Box>
  );
};

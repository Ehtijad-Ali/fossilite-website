// ─────────────────────────────────────────────────────────────────────────────
// The workflow figure: a process that plays itself.
//
// The `flow` figure in GuideDiagram is a project. It shows how a thing got
// built, once. This is the opposite, and it answers the question that actually
// decides whether a business adopts anything: what happens on a Monday morning
// after it is live, and where does a person still sit in it.
//
// It runs on its own when it scrolls into view, because the whole point is that
// somebody who reads none of the prose can watch it once and come away knowing
// what the guide is about. That puts a real obligation on the content: every
// stage has to stand up without the paragraphs around it.
//
// Three decisions worth knowing about before editing:
//
// 1. Every stage names its actor as a WORD, not only as a colour. Most people
//    who are wary of this work are wary because they cannot see where the
//    machine stops and a person starts. The badge answers that on every row.
//    Colour is secondary here, which is why gold can sit next to green: nothing
//    is being distinguished by hue alone.
//
// 2. The chip between two stages is the thing that physically moves. Naming it
//    (a file, a score, forty names in order) is what makes the process legible
//    to somebody non-technical, far more than describing the step does.
//
// 3. The exception branch is drawn, not hidden. A workflow with no "what
//    happens when it is not sure" is a sales diagram, and reads as one.
//
// Motion: it plays once, then stops. Clicking any stage takes over and pauses,
// so a reader is never fighting the animation. Under prefers-reduced-motion the
// whole thing is simply already finished, with the controls gone.
// ─────────────────────────────────────────────────────────────────────────────
import { FC, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useSharedTokens } from "../../theme/sharedTokens";
import type { WorkflowDiagram, WorkflowStage } from "../../content/types";
import { MONO, GOLD, EASE, series, good, useReducedMotion, useInView, Figure } from "./figureKit";
import type { T } from "./figureKit";

/** How long each stage holds before the next one arrives. */
const BEAT = 1150;

/** Actor colours. Secondary encoding only: the word is always on the badge. */
const actorColor = (T: T, a: WorkflowStage["actor"]) =>
  a === "model" ? series(T)[0] : a === "person" ? good(T) : a === "rule" ? GOLD : T.mutedText;

const actorWord: Record<WorkflowStage["actor"], string> = {
  system: "automatic",
  model: "the model",
  rule: "your rule",
  person: "a person",
};

/** Small drawn glyphs. Never emoji: these inherit the actor colour and stay crisp. */
const ActorMark: FC<{ actor: WorkflowStage["actor"]; color: string }> = ({ actor, color }) => {
  const common = {
    fill: "none",
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <Box aria-hidden component="svg" viewBox="0 0 20 20" sx={{ width: "13px", height: "13px", flexShrink: 0 }}>
      {actor === "system" && (
        <>
          <ellipse cx="10" cy="5.5" rx="6" ry="2.4" {...common} />
          <path d="M4 5.5v9c0 1.3 2.7 2.4 6 2.4s6-1.1 6-2.4v-9" {...common} />
          <path d="M4 10c0 1.3 2.7 2.4 6 2.4s6-1.1 6-2.4" {...common} />
        </>
      )}
      {actor === "model" && (
        <>
          <path d="M6 5.5 14 10M6 14.5 14 10" {...common} />
          <circle cx="5" cy="5" r="1.9" {...common} />
          <circle cx="5" cy="15" r="1.9" {...common} />
          <circle cx="15" cy="10" r="2.1" {...common} />
        </>
      )}
      {actor === "rule" && (
        <>
          <path d="M4 10h4l3-4.5h5M11 14.5h5" {...common} />
          <path d="M14 3.5 16.5 5.5 14 7.5M14 12.5 16.5 14.5 14 16.5" {...common} />
        </>
      )}
      {actor === "person" && (
        <>
          <circle cx="10" cy="6.5" r="3" {...common} />
          <path d="M3.8 16.5c0-3.2 2.8-5 6.2-5s6.2 1.8 6.2 5" {...common} />
        </>
      )}
    </Box>
  );
};

/** The chip that travels between two stages. It names the thing that moves. */
const Payload: FC<{ text: string; on: boolean; reduced: boolean; T: T }> = ({ text, on, reduced, T }) => (
  <Box
    sx={{
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      ml: "-2px",
      my: "9px",
      px: "11px",
      py: "6px",
      borderRadius: "99px",
      border: `0.5px dashed ${T.border}`,
      backgroundColor: T.cardBg,
      opacity: on || reduced ? 1 : 0,
      transform: on || reduced ? "none" : "translateY(-6px)",
      transition: reduced ? "none" : `opacity 420ms ${EASE}, transform 420ms ${EASE}`,
    }}
  >
    <Box aria-hidden component="svg" viewBox="0 0 16 16" sx={{ width: "11px", height: "11px", flexShrink: 0 }}>
      <path
        d="M8 2v12M8 14l3.5-3.5M8 14 4.5 10.5"
        fill="none"
        stroke={GOLD}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Box>
    <Typography sx={{ fontSize: "12px", lineHeight: 1.4, color: T.secondaryText }}>{text}</Typography>
  </Box>
);

const Workflow: FC<{ d: WorkflowDiagram; T: T }> = ({ d, T }) => {
  const reduced = useReducedMotion();
  const { ref, seen } = useInView<HTMLDivElement>();
  const last = d.stages.length - 1;

  // -1 is "not started". `last` is the final stage. Anything past it means the
  // run has finished, which is what un-highlights the closing stage.
  const [step, setStep] = useState(-1);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!seen || reduced || !playing) return;
    if (step > last) return;
    const id = window.setTimeout(() => setStep((s) => s + 1), step < 0 ? 260 : BEAT);
    return () => window.clearTimeout(id);
  }, [seen, reduced, playing, step, last]);

  const done = reduced || step > last;
  const arrived = (i: number) => reduced || i <= step;
  const current = (i: number) => !reduced && i === step;

  const pick = (i: number) => {
    setPlaying(false);
    setStep(i);
  };
  const replay = () => {
    setStep(-1);
    setPlaying(true);
  };

  const progress = reduced ? 1 : Math.min(1, Math.max(0, (step + 1) / d.stages.length));

  return (
    <Figure title={d.title} caption={d.caption} T={T}>
      <Box ref={ref} sx={{ minWidth: { xs: "auto", sm: "460px" } }}>
        {/* What sets it off. Everything below happens because of this line. */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "10px 14px",
            p: "12px 15px",
            borderRadius: "10px",
            mb: "6px",
            border: `0.5px solid ${T.border}`,
            borderLeft: `2px solid ${GOLD}`,
            backgroundColor: T.surfaceSubtle,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "9px", minWidth: 0 }}>
            <Box aria-hidden component="svg" viewBox="0 0 20 20" sx={{ width: "14px", height: "14px", flexShrink: 0 }}>
              <circle cx="10" cy="10" r="7.2" fill="none" stroke={GOLD} strokeWidth="1.5" />
              <path d="M10 6v4.3l2.8 1.7" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" />
            </Box>
            <Typography
              sx={{
                fontFamily: MONO,
                fontSize: "9.5px",
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: GOLD,
              }}
            >
              Runs when
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "13.5px",
              lineHeight: 1.5,
              color: T.headline,
              fontWeight: 600,
              flex: "1 1 auto",
              minWidth: "160px",
            }}
          >
            {d.trigger}
          </Typography>
          {d.runtime ? (
            <Typography sx={{ fontSize: "12.5px", lineHeight: 1.5, color: T.mutedText }}>{d.runtime}</Typography>
          ) : null}
        </Box>

        {/* The transport control. Hidden outright when motion is off: there is
            nothing to replay, because the figure is already complete. */}
        {!reduced ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px", mb: "16px", pl: "1px" }}>
            <Box
              component="button"
              type="button"
              onClick={replay}
              aria-label={done ? "Play the workflow again" : "Restart the workflow"}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                px: "11px",
                py: "6px",
                borderRadius: "99px",
                cursor: "pointer",
                border: `0.5px solid ${T.border}`,
                backgroundColor: T.cardBg,
                font: "inherit",
                color: T.mutedText,
                transition: `all 240ms ${EASE}`,
                "&:hover": { color: T.headline, borderColor: `${GOLD}88` },
              }}
            >
              <Box aria-hidden component="svg" viewBox="0 0 16 16" sx={{ width: "11px", height: "11px" }}>
                <path d="M13.4 8a5.4 5.4 0 1 1-1.7-3.9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path
                  d="M13.6 1.9v3.2h-3.2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Box>
              <Typography
                sx={{
                  fontFamily: MONO,
                  fontSize: "9.5px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "inherit",
                }}
              >
                {done ? "Play again" : playing ? "Restart" : "Play"}
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                height: "2px",
                borderRadius: "1px",
                backgroundColor: T.border,
                overflow: "hidden",
                minWidth: "60px",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width: `${progress * 100}%`,
                  background: `linear-gradient(90deg, ${GOLD}, ${series(T)[0]})`,
                  transition: `width ${BEAT}ms linear`,
                }}
              />
            </Box>
            <Typography
              sx={{
                fontFamily: MONO,
                fontSize: "9.5px",
                letterSpacing: "0.1em",
                color: T.mutedText,
                flexShrink: 0,
              }}
            >
              {String(Math.max(0, Math.min(step + 1, d.stages.length))).padStart(2, "0")}/
              {String(d.stages.length).padStart(2, "0")}
            </Typography>
          </Box>
        ) : null}

        {/* The rail. Gutter carries the node and the connector; the card carries
            the words. The payload chip hangs off the connector between them. */}
        {d.stages.map((s, i) => {
          const col = actorColor(T, s.actor);
          const on = arrived(i);
          const now = current(i);
          const isLast = i === last;
          return (
            <Box key={s.label} sx={{ display: "grid", gridTemplateColumns: "26px 1fr", columnGap: "13px" }}>
              {/* gutter */}
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box
                  sx={{
                    width: "26px",
                    height: "26px",
                    borderRadius: "50%",
                    flexShrink: 0,
                    display: "grid",
                    placeItems: "center",
                    border: `1.5px solid ${on ? col : T.border}`,
                    backgroundColor: on ? (T.isDark ? `${col}22` : `${col}18`) : T.cardBg,
                    color: on ? col : T.mutedText,
                    transition: reduced ? "none" : `all 420ms ${EASE}`,
                    boxShadow: now ? `0 0 0 5px ${col}1f` : "none",
                  }}
                >
                  <Typography sx={{ fontFamily: MONO, fontSize: "10px", fontWeight: 700, color: "inherit" }}>
                    {i + 1}
                  </Typography>
                </Box>
                {!isLast || d.loop || s.output ? (
                  <Box
                    sx={{
                      flex: 1,
                      width: "2px",
                      backgroundColor: T.border,
                      position: "relative",
                      my: "5px",
                      borderRadius: "1px",
                      minHeight: "22px",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "1px",
                        backgroundColor: col,
                        transformOrigin: "top",
                        transform: `scaleY(${arrived(i + 1) || (isLast && done) ? 1 : 0})`,
                        transition: reduced ? "none" : `transform ${BEAT * 0.8}ms ${EASE}`,
                      }}
                    />
                  </Box>
                ) : null}
              </Box>

              {/* card */}
              <Box sx={{ pb: isLast ? 0 : "2px" }}>
                <Box
                  component="button"
                  type="button"
                  onClick={() => pick(i)}
                  aria-current={now ? "step" : undefined}
                  sx={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    font: "inherit",
                    cursor: "pointer",
                    p: "13px 15px",
                    borderRadius: "10px",
                    border: `0.5px solid ${now ? `${col}99` : T.border}`,
                    borderLeft: `2px solid ${on ? col : T.border}`,
                    backgroundColor: now ? T.cardBg : T.surfaceSubtle,
                    boxShadow: now ? `0 8px 26px ${T.isDark ? "rgba(0,0,0,0.42)" : "rgba(0,25,50,0.10)"}` : "none",
                    opacity: on ? 1 : 0.38,
                    transform: now && !reduced ? "translateY(-2px)" : "none",
                    transition: reduced ? "none" : `all 460ms ${EASE}`,
                    "&:hover": { borderColor: `${col}99` },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: "7px", mb: "7px" }}>
                    <ActorMark actor={s.actor} color={col} />
                    <Typography
                      sx={{
                        fontFamily: MONO,
                        fontSize: "9px",
                        letterSpacing: "0.13em",
                        textTransform: "uppercase",
                        color: col,
                      }}
                    >
                      {actorWord[s.actor]}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "14px", lineHeight: 1.45, color: T.primaryText, fontWeight: 600 }}>
                    {s.label}
                  </Typography>
                  {s.detail ? (
                    <Typography sx={{ fontSize: "12.5px", lineHeight: 1.55, color: T.mutedText, mt: "5px" }}>
                      {s.detail}
                    </Typography>
                  ) : null}

                  {/* The branch nobody puts in a sales diagram. */}
                  {s.exception ? (
                    <Box
                      sx={{
                        display: "flex",
                        gap: "9px",
                        alignItems: "flex-start",
                        mt: "10px",
                        pt: "9px",
                        borderTop: `0.5px dashed ${T.border}`,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: MONO,
                          fontSize: "9px",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: GOLD,
                          flexShrink: 0,
                          mt: "2px",
                        }}
                      >
                        If unsure
                      </Typography>
                      <Typography sx={{ fontSize: "12.5px", lineHeight: 1.55, color: T.secondaryText }}>
                        {s.exception}
                      </Typography>
                    </Box>
                  ) : null}
                </Box>

                {/* The closing stage still hands something over. That is what the
                    loop and the outcome plate below are about, so it gets a chip
                    like every other handover rather than being dropped. */}
                {s.output ? (
                  <Payload text={s.output} on={isLast ? done : arrived(i + 1)} reduced={reduced} T={T} />
                ) : isLast ? (
                  <Box sx={{ height: "4px" }} />
                ) : null}
              </Box>
            </Box>
          );
        })}

        {/* The return leg, when the result of this week trains next week. */}
        {d.loop ? (
          <Box sx={{ display: "grid", gridTemplateColumns: "26px 1fr", columnGap: "13px", mt: "6px" }}>
            <Box sx={{ display: "grid", placeItems: "center" }}>
              <Box
                aria-hidden
                component="svg"
                viewBox="0 0 20 20"
                sx={{
                  width: "17px",
                  height: "17px",
                  color: done ? GOLD : T.border,
                  transition: reduced ? "none" : `color 500ms ${EASE}`,
                }}
              >
                <path d="M15 6.5a6 6 0 1 0 1.4 5.2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path
                  d="M15.4 3v3.8h-3.8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Box>
            </Box>
            <Typography sx={{ fontSize: "12.5px", lineHeight: 1.55, color: T.mutedText, alignSelf: "center" }}>
              {d.loop}
            </Typography>
          </Box>
        ) : null}

        {/* What the business is actually left holding. */}
        <Box
          sx={{
            mt: "18px",
            p: "14px 16px",
            borderRadius: "10px",
            border: `0.5px solid ${done ? `${GOLD}55` : T.border}`,
            backgroundColor: done
              ? T.isDark
                ? "rgba(195,168,124,0.07)"
                : "rgba(195,168,124,0.10)"
              : T.surfaceSubtle,
            opacity: done ? 1 : 0.5,
            transition: reduced ? "none" : `all 560ms ${EASE}`,
          }}
        >
          <Typography
            sx={{
              fontFamily: MONO,
              fontSize: "9px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: T.mutedText,
              mb: "7px",
            }}
          >
            What changes
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14.5px", md: "15.5px" },
              lineHeight: 1.55,
              color: T.headline,
              fontWeight: 500,
              fontFamily: "Prompt",
            }}
          >
            {d.outcome}
          </Typography>
        </Box>
      </Box>
    </Figure>
  );
};

export const GuideWorkflow: FC<{ d: WorkflowDiagram }> = ({ d }) => {
  const T = useSharedTokens();
  return <Workflow d={d} T={T} />;
};

export default GuideWorkflow;

// src/pages/home/subComponents/ChatBoxSection.tsx
import { FC, useState, useEffect, useRef } from "react";
import { Box, Typography, TextField, InputAdornment, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useThemeMode } from "../../../../theme/theme";
import { FONT_DISPLAY } from "../../../../theme/fonts";
import { sectionFrameSx } from "../../_kit/frame";
import { replyFor } from "../../../../utils/assistantReplies";
import { scrollToSection } from "../../../../utils/scrollToSection";

type ChatMsg = { role: "user" | "bot"; text: string; action?: "contact" | "cases" };

// ─────────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────────

const SUGGESTIONS = [
  "How do I build a RAG pipeline?",
  "What is an AI agent?",
  "Explain LangChain in simple terms",
  "How does vector search work?",
];

const PARTICLE_LAYERS = [
  { count: 40, speed: 0.9,  maxR: 1.0, bright: 0.22 },
  { count: 25, speed: 0.5,  maxR: 1.6, bright: 0.35 },
  { count: 15, speed: 0.25, maxR: 2.4, bright: 0.50 },
];

const BEAMS = Array.from({ length: 8 }, (_, i) => ({
  angle:  (i / 8) * Math.PI * 2,
  length: Math.random() * 0.3 + 0.15,
  speed:  (Math.random() - 0.5) * 0.003,
  alpha:  Math.random() * 0.025 + 0.008,
  width:  Math.random() * 0.8 + 0.3,
}));

const RINGS = Array.from({ length: 5 }, (_, i) => ({
  r:     60 + i * 55,
  speed: (0.2 + i * 0.06) * (i % 2 ? 1 : -1),
  alpha: 0.012 + i * 0.006,
  thick: 0.6 + i * 0.1,
  phase: i * Math.PI * 0.4,
}));

// ─────────────────────────────────────────────────────────────────
// TOKENS
// ─────────────────────────────────────────────────────────────────

const TOKENS = {
  light: {
    bg:               "#FFF4E3",
    canvasDC:         "0,25,50",
    dotBase:          0.020, rippleMult: 0.05, glowMult: 0.25,
    lineBase:         0.04,  lineBoost:  0.10, partBright: 0.35, ringAlpha: 0.55,
    label:            "#BBC0C6",
    headline:         "#001932",
    sub:              "#4a4a6a",
    cardBg:           "#FFF4E3",
    cardBorderIdle:   "#d9c9b0",
    cardBorderFocus:  "#001932",
    cardShadow:       "0 8px 40px rgba(0,25,50,0.10)",
    focusShadow:      "0 12px 48px rgba(0,25,50,0.14)",
    inputBg:          "#FFF4E3",
    inputBorder:      "#d9c9b0",
    inputBorderHover: "#BBC0C6",
    inputBorderFocus: "#001932",
    inputText:        "#001932",
    placeholder:      "#BBC0C6",
    chipBorder:       "#d9c9b0",
    chipBorderHover:  "#001932",
    chipBgHover:      "#FFF4E3",
    chipText:         "#4a4a6a",
    btnActiveBg:      "#001932",
    btnActiveColor:   "#FFF4E3",
    btnActiveHover:   "#0a2a4a",
    btnIdleBg:        "#d9c9b0",
    btnIdleColor:     "#BBC0C6",
    star:             "#001932",
    conicGrad:        "conic-gradient(from 0deg,transparent,rgba(0,25,50,0.10) 20%,transparent 40%)",
    selection:        "rgba(0,25,50,0.15)",
  },
  dark: {
    bg:               "#0e1a2b",
    canvasDC:         "187,192,198",
    dotBase:          0.025, rippleMult: 0.08, glowMult: 0.40,
    lineBase:         0.07,  lineBoost:  0.18, partBright: 0.60, ringAlpha: 1.00,
    label:            "#BBC0C6",
    headline:         "#FFF4E3",
    sub:              "#BBC0C6",
    cardBg:           "#172b44",
    cardBorderIdle:   "#263b57",
    cardBorderFocus:  "#BBC0C6",
    cardShadow:       "none",
    focusShadow:      "0 0 0 1px rgba(187,192,198,0.12),0 12px 40px rgba(0,0,0,0.5)",
    inputBg:          "#0e1a2b",
    inputBorder:      "#263b57",
    inputBorderHover: "#3a3a3a",
    inputBorderFocus: "#BBC0C6",
    inputText:        "#FFF4E3",
    placeholder:      "#3a3a3a",
    chipBorder:       "#263b57",
    chipBorderHover:  "#BBC0C6",
    chipBgHover:      "#172b44",
    chipText:         "#BBC0C6",
    btnActiveBg:      "#FFF4E3",
    btnActiveColor:   "#001932",
    btnActiveHover:   "#e0d8cc",
    btnIdleBg:        "#263b57",
    btnIdleColor:     "#3a3a3a",
    star:             "#FFF4E3",
    conicGrad:        "conic-gradient(from 0deg,transparent,rgba(187,192,198,0.10) 20%,transparent 40%)",
    selection:        "rgba(187,192,198,0.25)",
  },
} as const;

// ─────────────────────────────────────────────────────────────────
// STAR ICON
// ─────────────────────────────────────────────────────────────────

const StarIcon: FC<{ color: string; delay?: string; reverse?: boolean }> = ({
  color, delay = "0s", reverse = false,
}) => (
  <Box
    component="span"
    sx={{
      display:    "inline-block",
      width:      "7px", height: "7px",
      background: color, opacity: 0.75, flexShrink: 0,
      clipPath:   "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",
      animation:  `spinStar 4s linear ${delay} infinite${reverse ? " reverse" : ""}`,
      transition: "background 0.4s ease",
      "@keyframes spinStar": { to: { transform: "rotate(360deg)" } },
    }}
  />
);

// ─────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────

export const ChatBoxSection: FC = () => {
  const { mode } = useThemeMode();
  const isLight  = mode === "light";
  const T        = isLight ? TOKENS.light : TOKENS.dark;

  const [focused, setFocused] = useState(false);
  const [value,   setValue]   = useState("");
  const [mounted, setMounted] = useState(false);

  // ── Live conversation state (frontend-only assistant) ──────────
  const [conversation, setConversation] = useState<ChatMsg[]>([]);
  const [typing,       setTyping]       = useState(false);
  const threadRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const replyTimer = useRef<number>(0);

  // Selecting a suggestion fills the composer (ChatGPT/Claude style) — the user
  // then presses send / Enter to submit. It does NOT auto-answer.
  const fillInput = (text: string) => {
    setValue(text);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return;
    setConversation((c) => [...c, { role: "user", text: trimmed }]);
    setValue("");
    setTyping(true);

    const { text: answer, action } = replyFor(trimmed);
    // Reply time scales a little with answer length so it feels considered.
    const delay = Math.min(1600, 750 + answer.length * 4);
    replyTimer.current = window.setTimeout(() => {
      setTyping(false);
      setConversation((c) => [...c, { role: "bot", text: answer, action }]);
    }, delay);
  };

  const resetChat = () => {
    clearTimeout(replyTimer.current);
    setConversation([]);
    setTyping(false);
    setValue("");
  };

  // Auto-scroll the thread to the newest message
  useEffect(() => {
    threadRef.current?.scrollTo({ top: threadRef.current.scrollHeight, behavior: "smooth" });
  }, [conversation, typing]);

  useEffect(() => () => clearTimeout(replyTimer.current), []);

  // ── Refs ──────────────────────────────────────────────────────
  const sectionRef  = useRef<HTMLDivElement>(null);
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const cardWrapRef = useRef<HTMLDivElement>(null); // measurement only
  const cardTiltRef = useRef<HTMLDivElement>(null); // transform only
  const smoothRef   = useRef({ x: 0.5, y: 0.5 });
  const targetRef   = useRef({ x: 0.5, y: 0.5 });
  const focusedRef  = useRef(false);
  const tokRef      = useRef(T);
  const rafRef      = useRef<number>(0);

  useEffect(() => { tokRef.current   = T;       }, [T]);
  useEffect(() => { focusedRef.current = focused; }, [focused]);
  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(id);
  }, []);

  // ── Canvas ────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx    = canvas.getContext("2d")!;
    let W = 0, H = 0, time = 0;

    const particles: {
      x: number; y: number; vx: number; vy: number;
      r: number; phase: number; layer: number;
      bright: number;
    }[] = [];

    PARTICLE_LAYERS.forEach((L, li) => {
      for (let i = 0; i < L.count; i++) {
        particles.push({
          x: Math.random(), y: Math.random(),
          vx: (Math.random() - 0.5) * L.speed * 2e-4,
          vy: (Math.random() - 0.5) * L.speed * 2e-4,
          r:  Math.random() * L.maxR + 0.3,
          phase: Math.random() * Math.PI * 2,
          layer: li, bright: L.bright,
        });
      }
    });

    const getSize = () => {
      // Use the canvas element's own bounding rect — not the section
      const r = canvas.getBoundingClientRect();
      W = canvas.width  = r.width  * devicePixelRatio;
      H = canvas.height = r.height * devicePixelRatio;
    };

    // ── KEY FIX: Mouse tracking on the CANVAS element, not the section ──
    // Canvas has pointer-events:none so these never fire from canvas clicks.
    // Instead we track on the section but use { passive: true } and never
    // call preventDefault() — so all downstream events reach the input.
    const section = sectionRef.current!;

    const onMouseMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      targetRef.current = {
        x: (e.clientX - r.left) / r.width,
        y: (e.clientY - r.top)  / r.height,
      };
    };
    const onMouseLeave = () => { targetRef.current = { x: 0.5, y: 0.5 }; };

    // ── passive:true is the key — never blocks pointer events ──
    section.addEventListener("mousemove",  onMouseMove,  { passive: true });
    section.addEventListener("mouseleave", onMouseLeave, { passive: true });
    window.addEventListener("resize", getSize, { passive: true });
    getSize();

    const draw = () => {
      const tk = tokRef.current;
      const dc = tk.canvasDC;
      time += 0.008;

      smoothRef.current.x += (targetRef.current.x - smoothRef.current.x) * 0.05;
      smoothRef.current.y += (targetRef.current.y - smoothRef.current.y) * 0.05;

      const { x: sx, y: sy } = smoothRef.current;
      const tiltX = (sy - 0.5) * 0.3;
      const tiltY = (sx - 0.5) * 0.3;
      const w  = W / devicePixelRatio;
      const h  = H / devicePixelRatio;
      const mx = sx * w, my = sy * h;
      const isFoc = focusedRef.current;

      // Card centre — read from cardWrapRef (measurement ref only)
      let ccx = w / 2, ccy = h / 2;
      const cw = cardWrapRef.current;
      const sr = sectionRef.current;
      if (cw && sr) {
        const cr  = cw.getBoundingClientRect();
        const srr = sr.getBoundingClientRect();
        ccx = cr.left + cr.width  / 2 - srr.left;
        ccy = cr.top  + cr.height / 2 - srr.top;
      }

      ctx.clearRect(0, 0, W, H);
      ctx.save();
      ctx.scale(devicePixelRatio, devicePixelRatio);

      // Vortex rings
      for (const rg of RINGS) {
        const a      = rg.speed * time + rg.phase;
        const scaleY = 0.32 + tiltX * 0.1;
        ctx.beginPath();
        ctx.ellipse(
          ccx + tiltY * rg.r * 0.15,
          ccy + tiltX * rg.r * 0.1,
          rg.r, rg.r * scaleY, a, 0, Math.PI * 2,
        );
        ctx.strokeStyle = `rgba(${dc},${(rg.alpha + (isFoc ? 0.015 : 0)) * tk.ringAlpha})`;
        ctx.lineWidth   = rg.thick;
        ctx.stroke();
        const dx = ccx + Math.cos(a * 1.8) * rg.r + tiltY * rg.r * 0.15;
        const dy = ccy + Math.sin(a * 1.8) * rg.r * scaleY + tiltX * rg.r * 0.1;
        ctx.beginPath(); ctx.arc(dx, dy, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dc},${rg.alpha * 7 * tk.ringAlpha})`; ctx.fill();
      }

      // Energy beams
      for (const b of BEAMS) {
        b.angle += b.speed + (isFoc ? 0.002 : 0);
        const len = (isFoc ? w * 0.45 : w * 0.3) * b.length;
        const x2  = ccx + Math.cos(b.angle) * len;
        const y2  = ccy + Math.sin(b.angle) * len;
        const grad = ctx.createLinearGradient(ccx, ccy, x2, y2);
        grad.addColorStop(0,   `rgba(${dc},${b.alpha * 2.5 * tk.ringAlpha})`);
        grad.addColorStop(0.4, `rgba(${dc},${b.alpha * tk.ringAlpha})`);
        grad.addColorStop(1,   `rgba(${dc},0)`);
        ctx.beginPath(); ctx.moveTo(ccx, ccy); ctx.lineTo(x2, y2);
        ctx.strokeStyle = grad;
        ctx.lineWidth   = b.width + (isFoc ? 0.4 : 0);
        ctx.stroke();
      }

      // Ripple dot grid
      const cols = 26, rows = 12, cw2 = w / cols, rh = h / rows;
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const bx     = c * cw2, by = r * rh;
          const distC  = Math.hypot(bx - ccx, by - ccy);
          const ripple = Math.sin(distC * 0.025 - time * 2.2) * 0.5 + 0.5;
          const wave   = Math.sin(c * 0.38 + time * 1.1) * 9 + Math.cos(r * 0.45 + time * 0.75) * 7;
          const persp  = 1 + tiltX * (r / rows - 0.5) * 0.5 + tiltY * (c / cols - 0.5) * 0.5;
          const x      = bx + tiltY * (bx - w / 2) * 0.04;
          const y      = by + wave * persp + tiltX * (by - h / 2) * 0.04;
          const glow   = Math.max(0, 1 - Math.hypot(x - mx, y - my) / 90);
          const fBoost = isFoc ? ripple * 0.12 : 0;
          ctx.beginPath();
          ctx.arc(x, y, 0.5 + glow * 2 + fBoost * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${dc},${tk.dotBase + ripple * tk.rippleMult + glow * tk.glowMult + fBoost})`;
          ctx.fill();
        }
      }

      // Particles + connections
      for (const p of particles) {
        p.x += p.vx + Math.sin(time + p.phase) * 6e-5;
        p.y += p.vy + Math.cos(time + p.phase * 0.7) * 5e-5;
        if (p.x < 0) p.x = 1; if (p.x > 1) p.x = 0;
        if (p.y < 0) p.y = 1; if (p.y > 1) p.y = 0;
      }

      const L0 = particles.filter(p => p.layer === 0);
      for (let i = 0; i < L0.length; i++) {
        const a = L0[i], ax = a.x * w, ay = a.y * h;
        const boost = Math.max(0, 1 - Math.hypot(ax - mx, ay - my) / 100);
        for (let j = i + 1; j < L0.length; j++) {
          const b = L0[j], bx2 = b.x * w, by2 = b.y * h;
          const d = Math.hypot(ax - bx2, ay - by2);
          if (d < 80) {
            ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx2, by2);
            ctx.strokeStyle = `rgba(${dc},${(1 - d / 80) * tk.lineBase + boost * tk.lineBoost})`;
            ctx.lineWidth = 0.4; ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        const px = p.x * w, py = p.y * h;
        const boost = Math.max(0, 1 - Math.hypot(px - mx, py - my) / 100);
        const ds    = 0.6 + p.layer * 0.2;
        ctx.beginPath();
        ctx.arc(px, py, (p.r + boost * 2.5) * ds, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dc},${(p.bright * tk.partBright + boost * 0.4) * ds})`;
        ctx.fill();
      }

      ctx.restore();

      // NOTE: the card's 3D tilt was removed. Re-transforming the card every
      // frame (perspective + rotate + translateZ) made clicks on the chips and
      // input unreliable — a click could land between frames as the card moved.
      // The canvas background, glow and focus states keep the section lively
      // while guaranteeing every control is clickable.

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      section.removeEventListener("mousemove",  onMouseMove);
      section.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", getSize);
    };
  }, []);

  const hasValue = value.trim().length > 0;

  // Suggestions the visitor hasn't asked yet — shown as persistent follow-ups.
  const askedSet = new Set(conversation.filter((m) => m.role === "user").map((m) => m.text));
  const remainingSuggestions = SUGGESTIONS.filter((s) => !askedSet.has(s));
  const started = conversation.length > 0 || typing;

  // ─────────────────────────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────────────────────────
  return (
    <Box
      ref={sectionRef}
      sx={{
        position:        "relative",
        backgroundColor: T.bg,
        px: { xs: "24px", sm: "48px", lg: "80px" },
        py: { xs: "72px", sm: "96px", md: "120px" },
        overflow: "hidden",
        // NO cursor property here — never override input cursor
        opacity:   mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(24px)",
        transitionProperty:       "background-color, opacity, transform",
        transitionDuration:       "0.5s, 0.7s, 0.7s",
        transitionTimingFunction: "ease, cubic-bezier(0.22,1,0.36,1), cubic-bezier(0.22,1,0.36,1)",
      }}
    >

      {/* Canvas — pointer-events:none, zIndex:0, never captures anything */}
      <canvas
        ref={canvasRef}
        style={{
          position:      "absolute",
          inset:         0,
          width:         "100%",
          height:        "100%",
          pointerEvents: "none",
          zIndex:        0,
          display:       "block",
        }}
      />

      <Box sx={{
        maxWidth: "1200px", mx: "auto", position: "relative", zIndex: 2, ...sectionFrameSx,
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: { xs: "44px", md: "56px", lg: "72px" },
        alignItems: "center",
      }}>

        {/* ══ LEFT — section copy ══ */}
        <Box>

        {/* Label */}
        <Typography sx={{
          fontSize: "11px", color: T.label, letterSpacing: "0.10em",
          textTransform: "uppercase", textAlign: "left", mb: "20px",
          fontWeight: 500, display: "flex", alignItems: "center",
          justifyContent: "flex-start", gap: "8px",
          opacity:   mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(12px)",
          transitionProperty:       "color, opacity, transform",
          transitionDuration:       "0.4s, 0.6s, 0.6s",
          transitionDelay:          "0s, 0.10s, 0.10s",
          transitionTimingFunction: "ease, cubic-bezier(0.22,1,0.36,1), cubic-bezier(0.22,1,0.36,1)",
        }}>
          <StarIcon color={T.star} delay="0s" />
          Ask anything
          <StarIcon color={T.star} delay="0.5s" reverse />
        </Typography>

        {/* Headline */}
        <Typography component="h2" sx={{
          fontSize: { xs: "36px", sm: "46px", md: "54px" }, fontWeight: 500,
          color: T.headline, textAlign: "left", lineHeight: 1.04,
          letterSpacing: "-0.02em", mb: "16px",
          fontFamily: FONT_DISPLAY,
          opacity:   mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(16px)",
          transitionProperty:       "color, opacity, transform",
          transitionDuration:       "0.4s, 0.65s, 0.65s",
          transitionDelay:          "0s, 0.18s, 0.18s",
          transitionTimingFunction: "ease, cubic-bezier(0.22,1,0.36,1), cubic-bezier(0.22,1,0.36,1)",
        }}>
          AI got you covered
        </Typography>

        {/* Sub-text */}
        <Typography sx={{
          fontSize: { xs: "15px", sm: "16px" }, color: T.sub,
          textAlign: "left", maxWidth: "460px",
          lineHeight: 1.75, mb: "0px",
          fontFamily: "Prompt", fontStyle: "italic",
          opacity:   mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(14px)",
          transitionProperty:       "color, opacity, transform",
          transitionDuration:       "0.4s, 0.65s, 0.65s",
          transitionDelay:          "0s, 0.26s, 0.26s",
          transitionTimingFunction: "ease, cubic-bezier(0.22,1,0.36,1), cubic-bezier(0.22,1,0.36,1)",
        }}>
          From repetitive tasks to disconnected operations, we build systems
          that simplify workflows and support how your business actually runs.
        </Typography>

        {/* Topics it's best at */}
        <Box sx={{ mt: "32px" }}>
          <Typography sx={{ fontSize: "10px", color: T.chipText, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, mb: "12px" }}>
            Best at answering
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["RAG pipelines", "AI agents", "LangChain", "Vector search"].map((t) => (
              <Box key={t} sx={{ px: "12px", py: "7px", borderRadius: "8px", border: `0.5px solid ${T.chipBorder}`, backgroundColor: T.cardBg }}>
                <Typography sx={{ fontSize: "12px", color: T.chipText, whiteSpace: "nowrap" }}>{t}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Why it's useful — fills the column to match the chat card height */}
        <Box sx={{ mt: "36px", pt: "32px", borderTop: `0.5px solid ${T.chipBorder}`, display: "flex", flexDirection: "column", gap: "20px" }}>
          {[
            { title: "Instant, grounded answers", sub: "Responses drawn from real sources — not guesswork." },
            { title: "Reviewed by engineers", sub: "100% of what we ship is checked by a human." },
            { title: "Built to run in production", sub: "Durable systems, not throwaway demos." },
          ].map((f) => (
            <Box key={f.title} sx={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <Box sx={{
                width: "30px", height: "30px", borderRadius: "9px", flexShrink: 0, mt: "1px",
                border: `0.5px solid ${T.chipBorder}`, backgroundColor: T.cardBg,
                display: "flex", alignItems: "center", justifyContent: "center", color: T.headline,
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "14px", fontWeight: 600, color: T.headline, fontFamily: "Prompt", lineHeight: 1.4 }}>{f.title}</Typography>
                <Typography sx={{ fontSize: "12.5px", color: T.sub, lineHeight: 1.5 }}>{f.sub}</Typography>
              </Box>
            </Box>
          ))}
        </Box>

        </Box>
        {/* ══ RIGHT — chat UI ══ */}
        <Box>

        {/* ── Card area ──────────────────────────────────────────────
            cardWrapRef  = outer div, used ONLY for getBoundingClientRect()
                           to find the card centre for the canvas loop.
            cardTiltRef  = inner div, receives style.transform every RAF.
                           It is a visual shell — no interactive children
                           are ever blocked because it uses CSS transform
                           (not pointer-events manipulation).
        ────────────────────────────────────────────────────────────── */}
        <Box
          ref={cardWrapRef}
          sx={{
            position: "relative",
            opacity:   mounted ? 1 : 0,
            transform: mounted ? "translateY(0) scale(1)" : "translateY(20px) scale(0.97)",
            transitionProperty:       "opacity, transform",
            transitionDuration:       "0.7s, 0.7s",
            transitionDelay:          "0.34s, 0.34s",
            transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* Tilt shell — only this gets rotateX/Y from the RAF loop */}
          <Box
            ref={cardTiltRef}
            sx={{ transformStyle: "preserve-3d", willChange: "transform" }}
          >
            {/* Card surface — a proper chat window (header / messages / composer) */}
            <Box sx={{
              background:   T.cardBg,
              border:       "0.5px solid",
              borderColor:  focused ? T.cardBorderFocus : T.cardBorderIdle,
              borderRadius: "18px",
              p:            0,
              display:      "flex",
              flexDirection:"column",
              height:       { xs: "460px", sm: "500px" },
              position:     "relative",
              overflow:     "hidden",
              transition:   "border-color 0.3s ease, background-color 0.5s ease, box-shadow 0.4s ease",
              boxShadow:    focused ? T.focusShadow : T.cardShadow,
              "&::before": focused ? {
                content:      '""',
                position:     "absolute",
                inset:        "-1px",
                borderRadius: "19px",
                background:   T.conicGrad,
                animation:    "borderSpin 3s linear infinite",
                zIndex:       0,
                "@keyframes borderSpin": { to: { transform: "rotate(360deg)" } },
              } : { content: '""', display: "none" },
            }}>
              {/* ── Window header (always visible) ── */}
              <Box sx={{
                position: "relative", zIndex: 1, flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "space-between",
                px: { xs: "16px", sm: "20px" }, py: "13px",
                borderBottom: `0.5px solid ${T.chipBorder}`,
                backgroundColor: T.cardBg,
              }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "9px" }}>
                  <Box sx={{
                    position: "relative", width: "30px", height: "30px", borderRadius: "50%",
                    backgroundColor: T.btnActiveBg, color: T.btnActiveColor,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M12 3v3m0 12v3M3 12h3m12 0h3M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <Box sx={{ position: "absolute", bottom: "-1px", right: "-1px", width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "#3BC77A", border: `2px solid ${T.cardBg}` }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "13px", fontWeight: 600, color: T.headline, lineHeight: 1.2 }}>Fossilite AI</Typography>
                    <Typography sx={{ fontSize: "10.5px", color: T.sub, lineHeight: 1.2 }}>Online · replies instantly</Typography>
                  </Box>
                </Box>
                {conversation.length > 0 && (
                  <Box
                    component="button"
                    type="button"
                    onClick={resetChat}
                    sx={{
                      display: "inline-flex", alignItems: "center", gap: "5px",
                      background: "none", border: `0.5px solid ${T.chipBorder}`, cursor: "pointer",
                      font: "inherit", fontFamily: "Prompt", fontSize: "11px", color: T.chipText,
                      px: "10px", py: "5px", borderRadius: "7px",
                      transition: "color 0.2s ease, border-color 0.2s ease",
                      "&:hover": { color: T.headline, borderColor: T.chipBorderHover },
                    }}
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M4 12a8 8 0 1 1 2.3 5.6M4 12V7m0 5h5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    New chat
                  </Box>
                )}
              </Box>

              {/* ── Messages area (empty-state greeting until first message) ── */}
              <Box
                ref={threadRef}
                sx={{
                  position: "relative", zIndex: 1, flex: 1, minHeight: 0, overflowY: "auto",
                  display: "flex", flexDirection: "column", gap: "10px",
                  px: { xs: "16px", sm: "20px" }, py: "18px",
                  "&::-webkit-scrollbar": { width: "5px" },
                  "&::-webkit-scrollbar-thumb": { backgroundColor: T.chipBorder, borderRadius: "3px" },
                }}
              >
                {conversation.length === 0 && !typing ? (
                  <Box sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: "14px", px: "16px" }}>
                    <Box sx={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: T.btnActiveBg, color: T.btnActiveColor, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3v3m0 12v3M3 12h3m12 0h3M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: "17px", fontWeight: 600, color: T.headline, fontFamily: "Prompt", mb: "5px" }}>
                        How can I help you build with AI?
                      </Typography>
                      <Typography sx={{ fontSize: "13px", color: T.sub, maxWidth: "300px", mx: "auto", lineHeight: 1.6 }}>
                        Pick a suggestion below or type your own question, then press send.
                      </Typography>
                    </Box>
                  </Box>
                ) : (
                  <>
                    {conversation.map((m, i) => {
                      const isBot = m.role === "bot";
                      if (!isBot) {
                        return (
                          <Box key={i} sx={{ display: "flex", justifyContent: "flex-end" }}>
                            <Box sx={{
                              maxWidth: "84%", px: "13px", py: "9px",
                              fontSize: "13.5px", lineHeight: 1.6,
                              borderRadius: "13px 13px 4px 13px",
                              backgroundColor: T.btnActiveBg, color: T.btnActiveColor,
                              animation: "chatIn 0.35s cubic-bezier(0.22,1,0.36,1)",
                              "@keyframes chatIn": { from: { opacity: 0, transform: "translateY(8px)" }, to: { opacity: 1, transform: "translateY(0)" } },
                            }}>
                              {m.text}
                            </Box>
                          </Box>
                        );
                      }
                      return (
                        <Box key={i} sx={{ display: "flex", gap: "8px", alignItems: "flex-start", animation: "chatIn 0.35s cubic-bezier(0.22,1,0.36,1)", "@keyframes chatIn": { from: { opacity: 0, transform: "translateY(8px)" }, to: { opacity: 1, transform: "translateY(0)" } } }}>
                          {/* Assistant avatar */}
                          <Box sx={{
                            width: "26px", height: "26px", borderRadius: "50%", flexShrink: 0, mt: "2px",
                            backgroundColor: T.btnActiveBg, color: T.btnActiveColor,
                            display: "flex", alignItems: "center", justifyContent: "center",
                          }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M12 3v3m0 12v3M3 12h3m12 0h3M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </Box>
                          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "8px", maxWidth: "84%" }}>
                            <Box sx={{
                              px: "13px", py: "9px", fontSize: "13.5px", lineHeight: 1.6,
                              borderRadius: "13px 13px 13px 4px",
                              backgroundColor: isLight ? "#ffffff" : "#242424",
                              color: T.headline, border: `0.5px solid ${T.chipBorder}`,
                            }}>
                              {m.text}
                            </Box>
                            {m.action && (
                              <Box
                                component="button"
                                type="button"
                                onClick={() => scrollToSection(m.action === "contact" ? "contact" : "case-studies")}
                                sx={{
                                  display: "inline-flex", alignItems: "center", gap: "7px",
                                  px: "13px", py: "8px", borderRadius: "8px", cursor: "pointer",
                                  font: "inherit", fontFamily: "Prompt", fontSize: "12.5px", fontWeight: 600,
                                  backgroundColor: T.btnActiveBg, color: T.btnActiveColor, border: "none",
                                  transition: "background-color 0.2s ease, transform 0.15s ease",
                                  "&:hover": { backgroundColor: T.btnActiveHover, transform: "translateY(-1px)" },
                                }}
                              >
                                {m.action === "contact" ? "Talk to the team" : "See our work"}
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" /></svg>
                              </Box>
                            )}
                          </Box>
                        </Box>
                      );
                    })}

                    {/* Typing indicator */}
                    {typing && (
                      <Box sx={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                        <Box sx={{
                          width: "26px", height: "26px", borderRadius: "50%", flexShrink: 0, mt: "2px",
                          backgroundColor: T.btnActiveBg, color: T.btnActiveColor,
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M12 3v3m0 12v3M3 12h3m12 0h3M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </Box>
                        <Box sx={{
                          display: "flex", gap: "4px", alignItems: "center",
                          px: "14px", py: "11px",
                          borderRadius: "13px 13px 13px 4px",
                          backgroundColor: isLight ? "#ffffff" : "#242424",
                          border: `0.5px solid ${T.chipBorder}`,
                        }}>
                          {[0, 1, 2].map((d) => (
                            <Box key={d} sx={{
                              width: "6px", height: "6px", borderRadius: "50%",
                              backgroundColor: T.sub,
                              animation: "cbTypingDot 1.2s ease-in-out infinite",
                              animationDelay: `${d * 0.18}s`,
                              "@keyframes cbTypingDot": {
                                "0%,60%,100%": { transform: "translateY(0)", opacity: 0.4 },
                                "30%": { transform: "translateY(-4px)", opacity: 1 },
                              },
                            }} />
                          ))}
                        </Box>
                      </Box>
                    )}
                  </>
                )}
              </Box>

              {/* ── Composer: suggestions (fill the input) + input row ── */}
              <Box sx={{
                position: "relative", zIndex: 1, flexShrink: 0,
                borderTop: `0.5px solid ${T.chipBorder}`, backgroundColor: T.cardBg,
                px: { xs: "14px", sm: "16px" }, py: "14px",
                display: "flex", flexDirection: "column", gap: "12px",
              }}>
                {/* Suggestions — selecting one fills the composer, then press send */}
                {!typing && remainingSuggestions.length > 0 && (
                  <Box>
                    <Typography sx={{
                      fontSize: "10px", color: T.chipText, letterSpacing: "0.1em",
                      textTransform: "uppercase", fontWeight: 600, mb: "9px",
                      display: "flex", alignItems: "center", gap: "6px",
                    }}>
                      <Box component="span" sx={{ width: "12px", height: "1px", backgroundColor: T.chipBorder }} />
                      {started ? "Ask a follow-up" : "Try asking"}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {remainingSuggestions.map((s) => (
                        <Box
                          key={s}
                          onClick={() => fillInput(s)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") fillInput(s); }}
                          sx={{
                            display: "flex", alignItems: "center", gap: "7px",
                            px: "12px", py: "7px",
                            border: `0.5px solid ${T.chipBorder}`,
                            borderRadius: "99px", cursor: "pointer", userSelect: "none",
                            backgroundColor: T.inputBg,
                            transition: "border-color 0.25s ease, background-color 0.25s ease, transform 0.2s cubic-bezier(0.34,1.56,0.64,1)",
                            "&:hover": { borderColor: T.chipBorderHover, backgroundColor: T.chipBgHover, transform: "translateY(-2px)", "& .chip-plus": { color: T.headline } },
                            "&:active": { transform: "scale(0.97)" },
                            "&:focus-visible": { outline: `2px solid ${T.cardBorderFocus}`, outlineOffset: "2px" },
                          }}
                        >
                          <Box component="span" className="chip-plus" sx={{ color: T.chipBorderHover, display: "flex", transition: "color 0.2s ease" }}>
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
                          </Box>
                          <Typography sx={{ fontSize: "12px", color: T.chipText, lineHeight: 1.4, whiteSpace: "nowrap" }}>{s}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                )}

                {/* Input row */}
                <Box sx={{ position: "relative" }}>
                <TextField
                  fullWidth
                  inputRef={inputRef}
                  placeholder="Message Fossilite AI…"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      send(value);
                    }
                  }}
                  variant="outlined"
                  inputProps={{ "aria-label": "Ask a question" }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius:    "10px",
                      backgroundColor: T.inputBg,
                      color:           T.inputText,
                      height:          { xs: "50px", sm: "54px" },
                      px:              "4px",
                      fontSize:        "14px",
                      transition:      "background-color 0.5s ease",
                      "& fieldset": {
                        borderColor: T.inputBorder,
                        borderWidth: "0.5px",
                        transition:  "border-color 0.25s ease",
                      },
                      "&:hover fieldset":       { borderColor: T.inputBorderHover },
                      "&.Mui-focused fieldset": { borderColor: T.inputBorderFocus, borderWidth: "0.5px" },
                    },
                    "& .MuiInputBase-input": {
                      color:      T.inputText,
                      fontSize:   "14px",
                      lineHeight: 1.5,
                      "&::placeholder": { color: T.placeholder, opacity: 1 },
                      "&::selection":   { background: T.selection },
                    },
                  }}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            disabled={!hasValue || typing}
                            onClick={() => send(value)}
                            aria-label="Send message"
                            sx={{
                              backgroundColor: T.btnActiveBg,
                              color:           T.btnActiveColor,
                              opacity:         hasValue ? 1 : 0.4,
                              borderRadius: "8px", width: 36, height: 36, mr: "2px",
                              transition: "all 0.2s cubic-bezier(0.34,1.56,0.64,1)",
                              transform:  hasValue ? "scale(1)" : "scale(0.92)",
                              "&:hover": {
                                backgroundColor: T.btnActiveHover,
                                transform: hasValue ? "scale(1.08)" : "scale(0.92)",
                              },
                              "&:active": { transform: "scale(0.95)" },
                              "&.Mui-disabled": {
                                backgroundColor: T.btnActiveBg,
                                color:           T.btnActiveColor,
                                opacity:         0.4,
                              },
                            }}
                          >
                            <SendIcon sx={{ fontSize: "16px" }} />
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Box>

              </Box>
            </Box>
          </Box>
        </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatBoxSection;
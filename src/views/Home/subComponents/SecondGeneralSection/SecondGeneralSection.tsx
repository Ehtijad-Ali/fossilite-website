import { FC, FormEvent, useEffect, useRef, useState } from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import { useSharedTokens } from "../../../../theme/sharedTokens";
import { FONT_DISPLAY, FONT_MONO } from "../../../../theme/fonts";

const GOLD = "#C3A87C";

// ── Tiny hook: fires once when element enters viewport ────────────────────────
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

// ── Animated reveal wrapper ───────────────────────────────────────────────────
interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  from?: "bottom" | "left" | "right" | "scale";
}
const Reveal: FC<RevealProps> = ({ children, delay = 0, from = "bottom" }) => {
  const { ref, visible } = useInView();
  const base = {
    bottom: { transform: "translateY(28px)", opacity: 0 },
    left:   { transform: "translateX(-28px)", opacity: 0 },
    right:  { transform: "translateX(28px)",  opacity: 0 },
    scale:  { transform: "scale(0.94)",        opacity: 0 },
  }[from];
  return (
    <Box
      ref={ref}
      sx={{
        transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}ms,
                     transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        ...(visible ? { opacity: 1, transform: "none" } : base),
      }}
    >
      {children}
    </Box>
  );
};

// ── Gold corner brackets (monograph plate) ────────────────────────────────────
const Corners: FC = () => (
  <>
    {[
      { top: 12, left: 12, bt: 1, bl: 1 },
      { top: 12, right: 12, bt: 1, br: 1 },
      { bottom: 12, left: 12, bb: 1, bl: 1 },
      { bottom: 12, right: 12, bb: 1, br: 1 },
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

const STEPS = [
  { n: "01", pre: "A ", strong: "20-minute call", post: " this week — we mostly listen." },
  { n: "02", pre: "A ", strong: "written build plan", post: " within 48 hours — scope, price, timeline." },
  { n: "03", pre: "",  strong: "Weekly demos", post: " of the real system from week three." },
];

// ── Main component ────────────────────────────────────────────────────────────
export const SecondGeneralSection: FC = () => {
  const T = useSharedTokens();

  // ── Contact form ──
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const handleChange = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const label = (text: string) => (
    <Typography sx={{ fontFamily: "Prompt", fontSize: "12.5px", fontWeight: 600, color: T.formTitle, mb: "4px" }}>
      {text}
    </Typography>
  );
  const fieldSx = {
    "& .MuiInput-root": { color: T.inputText, fontSize: "14px", fontFamily: "Prompt" },
    "& .MuiInput-input::placeholder": { color: T.placeholder, opacity: 1 },
    "& .MuiInput-underline:before": { borderBottomColor: T.inputBorder },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: GOLD },
    "& .MuiInput-underline:after": { borderBottomColor: GOLD },
  };

  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: T.bg,
        borderTop: `0.5px solid ${T.border}`,
        position: "relative",
        overflow: "hidden",
        px: { xs: "24px", sm: "48px", lg: "80px" },
        py: { xs: "100px", sm: "130px", md: "160px" },
        transition: "background-color 0.5s ease, border-color 0.5s ease",
      }}
    >
      {/* Background grid */}
      <Box sx={{
        position: "absolute", inset: 0,
        backgroundImage: `
          linear-gradient(${T.gridLine} 1px, transparent 1px),
          linear-gradient(90deg, ${T.gridLine} 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        zIndex: 0, pointerEvents: "none",
      }} />
      <Box sx={{
        position: "absolute", top: "40%", left: "30%",
        transform: "translate(-50%, -50%)",
        width: "620px", height: "420px", maxWidth: "80%",
        background: T.radialGlow, zIndex: 0, pointerEvents: "none",
      }} />

      <Box
        sx={{
          position: "relative", zIndex: 2,
          maxWidth: "1240px", mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: "48px", md: "80px" },
          alignItems: "center",
        }}
      >
        {/* LEFT — pitch + steps */}
        <Stack alignItems="flex-start" textAlign="left" gap={3}>
          <Reveal delay={0}>
            <Typography sx={{
              fontFamily: FONT_MONO, fontSize: "11px", color: GOLD,
              letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 500,
            }}>
              ✦ Let's talk
            </Typography>
          </Reveal>

          <Reveal delay={80}>
            <Typography sx={{
              fontSize: { xs: "40px", sm: "54px", md: "62px", lg: "70px" },
              fontWeight: 500, color: T.headline,
              lineHeight: 1.0, letterSpacing: "-0.02em", fontFamily: FONT_DISPLAY,
            }}>
              Start with an hour.
            </Typography>
          </Reveal>

          <Reveal delay={140}>
            <Box sx={{ width: "48px", height: "1.5px", backgroundColor: GOLD, mt: "4px" }} />
          </Reveal>

          <Reveal delay={200}>
            <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, color: T.subText, maxWidth: "440px", lineHeight: 1.8, fontFamily: "Prompt" }}>
              Tell us what's slowing your team down. Here's exactly what happens next:
            </Typography>
          </Reveal>

          {/* Steps card */}
          <Reveal delay={260}>
            <Box sx={{
              width: "100%", maxWidth: "480px",
              border: `0.5px solid ${T.border}`, borderRadius: "16px",
              backgroundColor: "rgba(255,255,255,0.02)",
              px: { xs: "20px", sm: "28px" }, py: "10px",
            }}>
              {STEPS.map((s, i) => (
                <Box key={s.n} sx={{
                  display: "flex", alignItems: "baseline", gap: "16px",
                  py: "16px",
                  borderBottom: i < STEPS.length - 1 ? `0.5px solid ${T.border}` : "none",
                }}>
                  <Typography sx={{ fontFamily: FONT_MONO, fontSize: "10.5px", color: GOLD, letterSpacing: "0.08em", flexShrink: 0 }}>
                    {s.n}
                  </Typography>
                  <Typography sx={{ fontFamily: "Prompt", fontSize: "14px", color: T.subText, lineHeight: 1.6 }}>
                    {s.pre}
                    <Box component="span" sx={{ color: T.headline, fontWeight: 600 }}>{s.strong}</Box>
                    {s.post}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Reveal>

          <Reveal delay={320}>
            <Typography sx={{ fontFamily: FONT_MONO, fontSize: "11px", color: T.mutedText, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Prefer email?{" "}
              <Box component="a" href="mailto:hello@fossilite.ai" sx={{ color: T.headline, textDecoration: "underline", textUnderlineOffset: "3px" }}>
                hello@fossilite.ai
              </Box>
            </Typography>
          </Reveal>
        </Stack>

        {/* RIGHT — contact form (monograph plate) */}
        <Reveal delay={200} from="right">
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              position: "relative",
              p: { xs: "28px", sm: "40px" },
              borderRadius: "18px",
              backgroundColor: "rgba(255,255,255,0.015)",
              border: `0.5px solid rgba(195,168,124,0.22)`,
              boxShadow: "0 24px 60px rgba(0,20,45,0.28)",
            }}
          >
            <Corners />
            {sent ? (
              <Stack alignItems="center" justifyContent="center" gap={1.5} sx={{ minHeight: "300px", textAlign: "center" }}>
                <Typography sx={{ fontFamily: FONT_DISPLAY, fontSize: "26px", color: T.formTitle }}>
                  Thanks — talk soon.
                </Typography>
                <Typography sx={{ fontFamily: "Prompt", fontSize: "14px", color: T.formSub, lineHeight: 1.7, maxWidth: "320px" }}>
                  We've got it. Expect a reply within one business day.
                </Typography>
              </Stack>
            ) : (
              <>
                <Typography sx={{ fontFamily: FONT_DISPLAY, fontSize: { xs: "22px", sm: "24px" }, fontWeight: 500, color: T.formTitle }}>
                  Tell us about your project
                </Typography>
                <Typography sx={{ fontFamily: "Prompt", fontSize: "13px", color: T.formSub, mt: "6px", mb: "26px", lineHeight: 1.6 }}>
                  Share a few details and we'll be in touch within one business day.
                </Typography>

                <Stack gap={2.5}>
                  <Box>
                    {label("Name *")}
                    <TextField required variant="standard" fullWidth placeholder="Your name"
                      value={form.name} onChange={handleChange("name")} sx={fieldSx} />
                  </Box>
                  <Box>
                    {label("Work email *")}
                    <TextField required type="email" variant="standard" fullWidth placeholder="you@company.com"
                      value={form.email} onChange={handleChange("email")} sx={fieldSx} />
                  </Box>
                  <Box>
                    {label("What's slowing your team down? *")}
                    <TextField required variant="standard" fullWidth multiline minRows={3}
                      placeholder="e.g. Our ops team re-types 400 supplier invoices a week…"
                      value={form.message} onChange={handleChange("message")} sx={fieldSx} />
                  </Box>

                  <Box
                    component="button"
                    type="submit"
                    sx={{
                      mt: "10px", width: "100%", cursor: "pointer", border: "none",
                      borderRadius: "10px", py: "15px",
                      backgroundColor: T.ctaPrimaryBg, color: T.ctaPrimaryText,
                      fontFamily: "Prompt", fontSize: "14px", fontWeight: 600,
                      display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
                      transition: "background-color 0.25s ease, transform 0.2s ease",
                      "&:hover": { backgroundColor: T.ctaPrimaryHover, transform: "translateY(-2px)" },
                      "&:active": { transform: "scale(0.98)" },
                    }}
                  >
                    Book the hour
                    <Box component="span" sx={{ opacity: 0.7 }}>›</Box>
                  </Box>

                  <Typography sx={{ fontFamily: "Prompt", fontSize: "12px", color: T.mutedText, textAlign: "center", lineHeight: 1.6, mt: "2px" }}>
                    No newsletter, no spam — just a reply within one business day.
                  </Typography>
                </Stack>
              </>
            )}
          </Box>
        </Reveal>
      </Box>
    </Box>
  );
};

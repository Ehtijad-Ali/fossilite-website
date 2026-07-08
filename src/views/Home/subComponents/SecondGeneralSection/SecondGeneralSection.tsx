import { FC, FormEvent, useEffect, useRef, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { RightArrow } from "../../../../assets/Icons";
import { useSharedTokens } from "../../../../theme/sharedTokens";

// ── Tiny hook: fires once when element enters viewport ────────────────────────
function useInView(threshold = 0.15) {
  const ref  = useRef<HTMLDivElement>(null);
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

// ── Animated counter ──────────────────────────────────────────────────────────
const AnimatedNumber: FC<{ target: string; color: string; visible: boolean; delay: number }> = ({
  target, color, visible, delay,
}) => {
  const [display, setDisplay] = useState("0");

  const numMatch = /^\d+/.test(target);
  const num      = numMatch ? parseInt(target, 10) : 0;
  const suffix   = target.replace(/^\d+/, "");

  useEffect(() => {
    if (!visible) return;
    if (!numMatch) { setDisplay(target); return; }

    let rafId: number;
    let start: number | null = null;
    const duration = 1200;

    const step = (ts: number) => {
      if (!start) start = ts;
      const prog  = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - prog, 3);
      setDisplay(`${Math.round(eased * num)}${suffix}`);
      if (prog < 1) { rafId = requestAnimationFrame(step); }
    };

    const timer = setTimeout(() => { rafId = requestAnimationFrame(step); }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafId);
    };
  }, [visible, target, delay, numMatch, num, suffix]);

  return (
    <Typography sx={{
      fontSize: { xs: "22px", sm: "28px" }, fontWeight: 500,
      color, lineHeight: 1,
      transition: "color 0.4s ease",
      fontVariantNumeric: "tabular-nums",
    }}>
      {display}
    </Typography>
  );
};

// ── Main component ────────────────────────────────────────────────────────────
export const SecondGeneralSection: FC = () => {
  const T = useSharedTokens();
  const isDark = T.isDark;

  const { ref: statsRef, visible: statsVisible } = useInView(0.3);

  const STATS = [
    { num: "50+",   label: "Clients shipped"   },
    { num: "12+",   label: "Countries"         },
    { num: "6 wks", label: "Avg. MVP delivery" },
  ];

  // ── Contact form ──
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const handleChange = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const inputSx = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: T.inputBg,
      borderRadius: "8px",
      color: T.inputText,
      fontSize: "14px",
      transition: "border-color 0.2s ease",
      "& fieldset": { borderColor: T.inputBorder, borderWidth: "0.5px" },
      "&:hover fieldset": { borderColor: T.inputHoverBorder },
      "&.Mui-focused fieldset": { borderColor: T.inputFocusBorder, borderWidth: "1px" },
    },
    "& .MuiInputLabel-root": { color: T.inputLabel, fontSize: "14px" },
    "& .MuiInputLabel-root.Mui-focused": { color: T.inputFocusBorder },
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

      {/* Centre radial glow */}
      <Box sx={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px", height: "400px",
        background: T.radialGlow,
        zIndex: 0, pointerEvents: "none",
        transition: "background 0.5s ease",
      }} />

      {/* Content — pitch on the left, contact form on the right */}
      <Box
        sx={{
          position: "relative", zIndex: 2,
          maxWidth: "1200px", mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: "56px", md: "72px" },
          alignItems: "center",
        }}
      >
        {/* LEFT — pitch + submit + stats */}
        <Stack alignItems="flex-start" textAlign="left" gap={4}>

          {/* Eyebrow */}
          <Reveal delay={0}>
            <Typography sx={{
              fontSize: "11px", color: T.eyebrow,
              letterSpacing: "0.10em", textTransform: "uppercase", fontWeight: 500,
              transition: "color 0.4s ease",
            }}>
              ✦ Let's talk
            </Typography>
          </Reveal>

          {/* Headline block */}
          <Box>
            <Reveal delay={80}>
              <Typography sx={{
                fontSize: { xs: "36px", sm: "48px", md: "56px", lg: "64px" },
                fontWeight: 600, color: T.headline,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                fontFamily: "Prompt",
                transition: "color 0.4s ease",
              }}>
                Ready to ship
              </Typography>
            </Reveal>

            <Reveal delay={160}>
              <Typography sx={{
                fontSize: { xs: "36px", sm: "48px", md: "56px", lg: "64px" },
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                fontFamily: "Prompt",
                ...(isDark
                  ? { color: "transparent", WebkitTextStroke: `1.5px ${T.headlineStroke}` }
                  : { color: T.headlineFaded }
                ),
                transition: "color 0.4s ease",
              }}>
                production AI?
              </Typography>
            </Reveal>
          </Box>

          {/* Subtext */}
          <Reveal delay={240}>
            <Typography sx={{
              fontSize: { xs: "14px", sm: "16px" }, color: T.subText,
              maxWidth: "480px",
              lineHeight: 1.8,
              fontFamily: "Prompt", fontStyle: "italic",
              transition: "color 0.4s ease",
            }}>
              Build systems that remove operational bottlenecks, reduce repetitive
              work, and support scalable execution across your business.
            </Typography>
          </Reveal>

          {/* Social proof strip — animated counters */}
          <Box
            ref={statsRef}
            sx={{
              mt: "8px", pt: "32px",
              borderTop: `0.5px solid ${T.statsDivider}`,
              width: "100%", maxWidth: "480px",
              display: "flex", justifyContent: "flex-start",
              gap: { xs: "28px", sm: "56px" },
              transition: "border-color 0.4s ease",
            }}
          >
            {STATS.map(({ num, label }, i) => (
              <Box
                key={label}
                textAlign="center"
                sx={{
                  opacity:   statsVisible ? 1 : 0,
                  transform: statsVisible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 100}ms,
                               transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 100}ms`,
                }}
              >
                <AnimatedNumber
                  target={num}
                  color={T.statsNum}
                  visible={statsVisible}
                  delay={i * 120}
                />
                <Typography sx={{
                  fontSize: "11px", color: T.statsLabel,
                  mt: "6px", letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  transition: "color 0.4s ease",
                }}>
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>

        </Stack>

        {/* RIGHT — contact form */}
        <Reveal delay={200} from="right">
          <Box component="form" onSubmit={handleSubmit} sx={{
            p: { xs: "24px", sm: "32px" },
            borderRadius: "16px",
            backgroundColor: T.formBg,
            border: `0.5px solid ${T.formBorder}`,
            transition: "background-color 0.4s ease, border-color 0.4s ease",
          }}>
            {sent ? (
              <Stack alignItems="center" justifyContent="center" gap={1.5} sx={{ minHeight: "260px", textAlign: "center" }}>
                <Typography sx={{ fontFamily: "Prompt", fontSize: "22px", color: T.formTitle }}>
                  Thanks for reaching out
                </Typography>
                <Typography sx={{ fontSize: "14px", color: T.formSub, lineHeight: 1.7, maxWidth: "320px" }}>
                  We've received your message and will get back to you shortly.
                </Typography>
              </Stack>
            ) : (
              <>
                <Typography sx={{ fontFamily: "Prompt", fontSize: { xs: "18px", sm: "20px" }, color: T.formTitle }}>
                  Tell us about your project
                </Typography>
                <Typography sx={{ fontSize: "13px", color: T.formSub, mt: "6px", mb: "24px", lineHeight: 1.6 }}>
                  Share a few details and we'll be in touch within one business day.
                </Typography>

                <Stack gap={2.5}>
                  <TextField
                    required label="Name" fullWidth size="small"
                    value={form.name} onChange={handleChange("name")} sx={inputSx}
                  />
                  <TextField
                    required type="email" label="Email" fullWidth size="small"
                    value={form.email} onChange={handleChange("email")} sx={inputSx}
                  />
                  <TextField
                    required label="Message" fullWidth multiline minRows={4}
                    value={form.message} onChange={handleChange("message")} sx={inputSx}
                  />

                  <Button
                    type="submit" fullWidth endIcon={<RightArrow />}
                    sx={{
                      mt: "4px", py: "13px",
                      backgroundColor: T.ctaPrimaryBg,
                      color:           T.ctaPrimaryText,
                      fontSize: "14px", fontWeight: 500,
                      textTransform: "none", borderRadius: "8px",
                      letterSpacing: "0.01em",
                      transition: "background-color 0.25s ease, transform 0.2s ease, box-shadow 0.2s ease",
                      boxShadow: isDark
                        ? "0 4px 20px rgba(255,244,227,0.12)"
                        : "0 4px 20px rgba(0,25,50,0.18)",
                      "&:hover": {
                        backgroundColor: T.ctaPrimaryHover,
                        transform: "translateY(-2px)",
                        boxShadow: isDark
                          ? "0 8px 32px rgba(255,244,227,0.18)"
                          : "0 8px 32px rgba(0,25,50,0.26)",
                      },
                      "&:active": { transform: "scale(0.97)" },
                      "& .MuiButton-endIcon svg": { filter: T.ctaPrimaryIcon },
                    }}
                  >
                    Work with us
                  </Button>
                </Stack>
              </>
            )}
          </Box>
        </Reveal>

      </Box>
    </Box>
  );
};
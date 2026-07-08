// src/pages/home/subComponents/Hero.tsx
import { FC } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RightArrow } from "../../../../assets/Icons";
import { motion } from "framer-motion";
import { useSharedTokens } from "../../../../theme/sharedTokens";
import { scrollToSection } from "../../../../utils/scrollToSection";
import { DashboardMockup } from "./DashboardMockup";

const TRUST = [
  {
    title: "Enterprise Ready",
    sub: "Secure & Scalable",
    icon: "M12 3 4 6v5c0 4.5 3.4 8.3 8 9.5 4.6-1.2 8-5 8-9.5V6l-8-3Z",
  },
  {
    title: "AI-Powered",
    sub: "Smart Automation",
    icon: "M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
  },
  {
    title: "Results Driven",
    sub: "Real Business Impact",
    icon: "M4 18 L10 12 L14 15 L20 7 M15 7h5v5",
  },
];

export const Hero: FC = () => {
  const T = useSharedTokens();
  const isLight = !T.isDark;
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: T.bg,
        transition: "background-color 0.4s ease",
        px: { xs: "24px", sm: "48px", lg: "80px" },
        pt: { xs: "120px", md: "150px" },
        pb: { xs: "72px", md: "110px" },
        fontFamily: "Prompt",
      }}
    >
      {/* Background grid + glow */}
      <Box sx={{
        position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(${T.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${T.gridLine} 1px, transparent 1px)`,
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(ellipse 90% 70% at 30% 20%, #000 30%, transparent 90%)",
        WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 30% 20%, #000 30%, transparent 90%)",
      }} />
      <Box sx={{
        position: "absolute", top: "-10%", right: "-5%", zIndex: 0, pointerEvents: "none",
        width: "620px", height: "620px", maxWidth: "80%",
        background: T.radialGlow,
      }} />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1320px",
          mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "1.05fr 1.1fr" },
          gap: { xs: "56px", md: "48px", lg: "64px" },
          alignItems: "center",
        }}
      >
        {/* ── LEFT: copy ── */}
        <Stack alignItems="flex-start" gap={{ xs: 3, md: "26px" }}>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Box sx={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              border: `0.5px solid ${T.pillBorder}`, borderRadius: "99px",
              px: "14px", py: "6px", backgroundColor: T.tagBg,
            }}>
              <Box sx={{
                width: "6px", height: "6px", borderRadius: "50%", backgroundColor: T.accent,
                animation: "pulse 2s ease-in-out infinite",
                "@keyframes pulse": { "0%,100%": { opacity: 1 }, "50%": { opacity: 0.25 } },
              }} />
              <Typography sx={{ fontSize: "11px", color: T.secondaryText, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>
                AI Solutions for Enterprises
              </Typography>
            </Box>
          </motion.div>

          {/* Headline */}
          <Box>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <Typography sx={{
                fontSize: { xs: "46px", sm: "60px", md: "58px", lg: "76px" },
                fontWeight: 600, lineHeight: 0.98, color: T.primaryText,
                letterSpacing: "-0.03em", fontFamily: "Prompt",
              }}>
                Build Operational
              </Typography>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.32 }}>
              <Typography sx={{
                fontSize: { xs: "46px", sm: "60px", md: "58px", lg: "76px" },
                fontWeight: 600, lineHeight: 0.98, letterSpacing: "-0.03em", fontFamily: "Prompt",
                ...(isLight ? { color: "#BBC0C6" } : { color: "transparent", WebkitTextStroke: "1px rgba(255,244,227,0.35)" }),
              }}>
                Intelligence.
              </Typography>
            </motion.div>
          </Box>

          {/* Subtext */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.46 }}>
            <Typography sx={{ fontSize: { xs: "15px", sm: "17px" }, color: T.secondaryText, maxWidth: "440px", lineHeight: 1.75 }}>
              We help enterprises automate workflows, extract insights, and build
              AI solutions that drive real, measurable impact.
            </Typography>
          </motion.div>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.58 }} style={{ width: "100%" }}>
            <Stack direction={{ xs: "column", sm: "row" }} gap={2} sx={{ width: { xs: "100%", sm: "auto" } }}>
              <Button
                onClick={() => navigate("/contact")}
                sx={{
                  px: "26px", py: "13px",
                  backgroundColor: T.ctaPrimaryBg, color: T.ctaPrimaryText,
                  fontSize: "14px", fontWeight: 500, textTransform: "none", borderRadius: "9px",
                  boxShadow: isLight ? "0 6px 20px rgba(0,25,50,0.18)" : "none",
                  transition: "transform 0.2s, background-color 0.3s, box-shadow 0.2s",
                  "&:hover": { backgroundColor: T.ctaPrimaryHover, transform: "translateY(-2px)", boxShadow: isLight ? "0 10px 30px rgba(0,25,50,0.26)" : "none" },
                  "&:active": { transform: "translateY(0)" },
                }}
              >
                Start Your Project
              </Button>
              <Button
                onClick={() => scrollToSection("case-studies")}
                endIcon={<RightArrow />}
                sx={{
                  px: "26px", py: "13px",
                  backgroundColor: "transparent", color: T.ctaSecText,
                  fontSize: "14px", textTransform: "none", borderRadius: "9px",
                  border: `0.5px solid ${T.ctaSecBorder}`,
                  transition: "color 0.2s, border-color 0.2s, transform 0.2s",
                  "&:hover": { color: T.ctaSecHoverText, borderColor: T.ctaSecHoverBorder, transform: "translateY(-2px)" },
                  "&:active": { transform: "translateY(0)" },
                }}
              >
                Book a Demo
              </Button>
            </Stack>
          </motion.div>

          {/* Trust features */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }} style={{ width: "100%" }}>
            <Stack
              direction="row"
              gap={{ xs: "18px", sm: "32px" }}
              flexWrap="wrap"
              sx={{ mt: { xs: "8px", md: "16px" }, pt: "28px", borderTop: `0.5px solid ${T.border}` }}
            >
              {TRUST.map((f) => (
                <Box key={f.title} sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Box sx={{
                    width: "34px", height: "34px", borderRadius: "9px", flexShrink: 0,
                    border: `0.5px solid ${T.pillBorder}`, backgroundColor: T.tagBg,
                    display: "flex", alignItems: "center", justifyContent: "center", color: T.accent,
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d={f.icon} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "12.5px", fontWeight: 600, color: T.primaryText, lineHeight: 1.3 }}>{f.title}</Typography>
                    <Typography sx={{ fontSize: "11px", color: T.secondaryText, lineHeight: 1.3 }}>{f.sub}</Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </motion.div>
        </Stack>

        {/* ── RIGHT: dashboard mockup ── */}
        <Box sx={{ transform: { xs: "none", lg: "translateX(40px)" } }}>
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <DashboardMockup />
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

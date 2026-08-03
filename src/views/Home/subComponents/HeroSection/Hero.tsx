import { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { scrollToSection } from "../../../../utils/scrollToSection";
import { FONT_DISPLAY, FONT_MONO } from "../../../../theme/fonts";

// The hero is the signature "monograph" plate — always dark navy + gold + cream,
// matching the reference regardless of the site's light/dark toggle.
const INK = "#F4ECDD";
const FADE = "#8b93a3";
const GOLD = "#C3A87C";
const BODY = "rgba(244,236,221,0.72)";
const META = "rgba(244,236,221,0.5)";
const BG = "radial-gradient(120% 130% at 50% 0%, #1c2e49 0%, #0f1c30 58%, #0a1119 100%)";
const CARD_BORDER = "rgba(195,168,124,0.20)";

const STATS = [
  { v: "50+", k: "Products shipped" },
  { v: "12", k: "Countries" },
  { v: "100%", k: "Human-reviewed" },
];

const Corners: FC = () => (
  <>
    {[
      { top: 16, left: 16, bt: 1, bl: 1 },
      { top: 16, right: 16, bt: 1, br: 1 },
      { bottom: 16, left: 16, bb: 1, bl: 1 },
      { bottom: 16, right: 16, bb: 1, br: 1 },
    ].map((c, i) => (
      <Box key={i} sx={{
        position: "absolute", width: "18px", height: "18px", zIndex: 2, pointerEvents: "none",
        top: c.top, bottom: c.bottom, left: c.left, right: c.right,
        borderTop: c.bt ? `1.5px solid ${GOLD}` : undefined,
        borderBottom: c.bb ? `1.5px solid ${GOLD}` : undefined,
        borderLeft: c.bl ? `1.5px solid ${GOLD}` : undefined,
        borderRight: c.br ? `1.5px solid ${GOLD}` : undefined,
      }} />
    ))}
  </>
);

const fade = (y: number, delay: number) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export const Hero: FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{
      position: "relative", overflow: "hidden", background: BG,
      px: { xs: "22px", sm: "48px", lg: "80px" },
      pt: { xs: "108px", md: "132px" },
      pb: { xs: "64px", md: "96px" },
    }}>
      {/* faint background grid + top glow */}
      <Box sx={{
        position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(195,168,124,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(195,168,124,0.05) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(ellipse 90% 80% at 50% 0%, #000 40%, transparent 92%)",
        WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 0%, #000 40%, transparent 92%)",
      }} />

      <Box sx={{ position: "relative", zIndex: 1, maxWidth: "1240px", mx: "auto" }}>
        {/* meta row */}
        <motion.div {...fade(-10, 0.05)}>
          <Box sx={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flexWrap: "wrap", gap: "10px", mb: { xs: "24px", md: "30px" },
          }}>
            <Typography sx={{ fontFamily: FONT_MONO, fontSize: "11px", letterSpacing: "0.18em", color: GOLD, textTransform: "uppercase" }}>
              AI · Technology · Consulting
            </Typography>
            <Typography sx={{ fontFamily: FONT_MONO, fontSize: "11px", letterSpacing: "0.14em", color: META, textTransform: "uppercase" }}>
              Monograph Nº 01 · Field work since 2024
            </Typography>
          </Box>
        </motion.div>

        {/* the plate */}
        <Box sx={{
          position: "relative", borderRadius: "20px",
          border: `1px solid ${CARD_BORDER}`,
          background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0))",
          px: { xs: "24px", sm: "44px", md: "64px" },
          py: { xs: "40px", sm: "56px", md: "72px" },
        }}>
          <Corners />

          {/* headline */}
          <motion.div {...fade(28, 0.15)}>
            <Typography sx={{
              fontFamily: FONT_DISPLAY, fontWeight: 500,
              fontSize: { xs: "52px", sm: "78px", md: "96px", lg: "116px" },
              lineHeight: 0.96, letterSpacing: "-0.02em", color: INK,
            }}>
              Build Operational
            </Typography>
          </motion.div>
          <motion.div {...fade(28, 0.26)}>
            <Typography sx={{
              fontFamily: FONT_DISPLAY, fontWeight: 500,
              fontSize: { xs: "52px", sm: "78px", md: "96px", lg: "116px" },
              lineHeight: 0.96, letterSpacing: "-0.02em", color: FADE,
              mb: { xs: "26px", md: "34px" },
            }}>
              Intelligence.
            </Typography>
          </motion.div>

          {/* rule + tagline */}
          <motion.div {...fade(16, 0.4)}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "18px", mb: "22px" }}>
              <Box sx={{ width: "52px", height: "1.5px", backgroundColor: GOLD }} />
              <Typography sx={{ fontFamily: FONT_DISPLAY, fontStyle: "italic", fontWeight: 500, fontSize: { xs: "17px", md: "20px" }, color: INK }}>
                From footprints to foresight.
              </Typography>
            </Box>
          </motion.div>

          {/* body */}
          <motion.div {...fade(14, 0.5)}>
            <Typography sx={{ fontFamily: "Prompt", fontSize: { xs: "15px", md: "16px" }, lineHeight: 1.75, color: BODY, maxWidth: "540px", mb: { xs: "30px", md: "38px" } }}>
              Every action leaves a data footprint. We read them — and turn them
              into your next move.
            </Typography>
          </motion.div>

          {/* CTAs */}
          <motion.div {...fade(12, 0.6)}>
            <Stack direction={{ xs: "column", sm: "row" }} gap={1.5} sx={{ mb: "22px" }}>
              <Box
                component="button"
                onClick={() => navigate("/contact")}
                sx={{
                  cursor: "pointer", border: "none", borderRadius: "10px",
                  backgroundColor: INK, color: "#0f1c30",
                  fontFamily: "Prompt", fontSize: "14px", fontWeight: 600,
                  px: "26px", py: "14px",
                  transition: "transform 0.2s ease, background-color 0.3s ease",
                  "&:hover": { backgroundColor: "#ffffff", transform: "translateY(-2px)" },
                  "&:active": { transform: "translateY(0)" },
                }}
              >
                Book the hour
              </Box>
              <Box
                component="button"
                onClick={() => scrollToSection("case-studies")}
                sx={{
                  cursor: "pointer", borderRadius: "10px",
                  border: `1px solid rgba(244,236,221,0.28)`, backgroundColor: "transparent",
                  color: INK, fontFamily: "Prompt", fontSize: "14px", fontWeight: 500,
                  px: "24px", py: "14px", display: "inline-flex", alignItems: "center", gap: "8px",
                  transition: "border-color 0.2s ease, transform 0.2s ease",
                  "&:hover": { borderColor: GOLD, transform: "translateY(-2px)" },
                  "&:active": { transform: "translateY(0)" },
                }}
              >
                See the work
                <Box component="span" sx={{ color: GOLD }}>›</Box>
              </Box>
            </Stack>
          </motion.div>

          {/* fine print */}
          <motion.div {...fade(10, 0.7)}>
            <Typography sx={{ fontFamily: FONT_MONO, fontSize: "10.5px", letterSpacing: "0.1em", color: META, textTransform: "uppercase" }}>
              Free scoping call · Written plan within 48 hours · No obligation
            </Typography>
          </motion.div>
        </Box>

        {/* stat band */}
        <motion.div {...fade(18, 0.8)}>
          <Box sx={{
            display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            mt: { xs: "16px", md: "0" },
            borderLeft: { sm: `0.5px solid rgba(244,236,221,0.12)` },
          }}>
            {STATS.map((s, i) => (
              <Box key={s.k} sx={{
                px: { xs: 0, sm: "32px" }, py: { xs: "18px", sm: "26px" },
                borderRight: { sm: `0.5px solid rgba(244,236,221,0.12)` },
                borderBottom: { xs: i < STATS.length - 1 ? `0.5px solid rgba(244,236,221,0.1)` : "none", sm: "none" },
              }}>
                <Typography sx={{ fontFamily: "Prompt", fontSize: { xs: "26px", md: "30px" }, fontWeight: 600, color: INK, lineHeight: 1, mb: "8px" }}>
                  {s.v}
                </Typography>
                <Typography sx={{ fontFamily: FONT_MONO, fontSize: "10.5px", letterSpacing: "0.1em", color: META, textTransform: "uppercase" }}>
                  {s.k}
                </Typography>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

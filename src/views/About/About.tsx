import { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSharedTokens } from "../../theme/sharedTokens";
import { PageHero } from "../../components";
import { useInView } from "../../hooks/useInView";

const VALUES = [
  {
    index: "01",
    title: "Engineers first",
    body: "Every system is architected by engineers and enhanced with AI — not the other way around. Reliability is a requirement, not a nice-to-have.",
  },
  {
    index: "02",
    title: "Ship what runs",
    body: "We build for production from day one. If it can't survive real operational load, it isn't done. Demos are easy; durable systems are the job.",
  },
  {
    index: "03",
    title: "Human in the loop",
    body: "100% of what we deliver is human reviewed. Automation removes friction; people keep judgement exactly where it matters most.",
  },
  {
    index: "04",
    title: "Measurable impact",
    body: "We start by mapping your operations and target the highest-friction work — then prove the impact with numbers, not adjectives.",
  },
];

const STATS = [
  { num: "50+", label: "Products shipped" },
  { num: "12", label: "Countries" },
  { num: "40–60%", label: "Faster delivery" },
  { num: "100%", label: "Human reviewed" },
];

const PROCESS = [
  {
    step: "01",
    title: "Map",
    body: "We start inside your operation — tracing where time leaks, where friction compounds, and which work is ripe for automation.",
  },
  {
    step: "02",
    title: "Design",
    body: "We architect the system before writing a line of code, choosing the simplest reliable path to the outcome you actually need.",
  },
  {
    step: "03",
    title: "Ship",
    body: "We build for production from day one — integrated with your stack, reviewed by engineers, and proven against real load.",
  },
  {
    step: "04",
    title: "Hand over",
    body: "You own the code, the data and the models. We document, transfer and support — no lock-in, no black boxes.",
  },
];

export const About: FC = () => {
  const T = useSharedTokens();
  const navigate = useNavigate();
  const { ref: valuesRef, visible: valuesVisible } = useInView(0.1);
  const { ref: processRef, visible: processVisible } = useInView(0.15);
  const { ref: statsRef, visible: statsVisible } = useInView(0.25);

  return (
    <Box sx={{ backgroundColor: T.bg }}>
      <PageHero
        eyebrow="About"
        title="AI-native, built for"
        titleAccent="what's next."
        subtitle="Fossilite is a remote-native software firm building production-grade AI systems for companies defining their industries. We reduce operational friction and automate the repetitive so teams can focus on the work that matters."
      >
        <Button
          onClick={() => navigate("/contact")}
          sx={{
            px: "24px", py: "12px",
            backgroundColor: T.ctaPrimaryBg, color: T.ctaPrimaryText,
            fontSize: "14px", fontWeight: 500, textTransform: "none", borderRadius: "9px",
            transition: "background-color 0.25s ease, transform 0.2s ease",
            "&:hover": { backgroundColor: T.ctaPrimaryHover, transform: "translateY(-2px)" },
          }}
        >
          Work with us
        </Button>
      </PageHero>

      {/* Mission */}
      <Box sx={{ px: { xs: "24px", sm: "48px", lg: "80px" }, py: { xs: "72px", md: "110px" }, borderBottom: `0.5px solid ${T.border}` }}>
        <Box sx={{ maxWidth: "860px", mx: "auto" }}>
          <Typography sx={{ fontSize: "11px", color: T.eyebrow, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, mb: "24px" }}>
            Our mission
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "24px", sm: "32px", md: "38px" },
              fontWeight: 500,
              color: T.headline,
              lineHeight: 1.35,
              letterSpacing: "-0.02em",
              fontFamily: "Prompt",
            }}
          >
            To make intelligent systems{" "}
            <Box component="span" sx={{ color: T.headlineFaded }}>
              the operational backbone of ambitious companies
            </Box>{" "}
            — reclaiming 21–35% of manual labour time through connected, reliable automation.
          </Typography>
        </Box>
      </Box>

      {/* Values */}
      <Box sx={{ px: { xs: "24px", sm: "48px", lg: "80px" }, py: { xs: "72px", md: "110px" } }}>
        <Box sx={{ maxWidth: "1180px", mx: "auto" }}>
          <Typography sx={{ fontSize: "11px", color: T.eyebrow, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, mb: "16px", textAlign: "center" }}>
            ✦ What we believe
          </Typography>
          <Typography sx={{ fontSize: { xs: "28px", sm: "40px" }, fontWeight: 500, color: T.headline, textAlign: "center", fontFamily: "Prompt", letterSpacing: "-0.02em", mb: { xs: "40px", md: "60px" } }}>
            Principles we build on.
          </Typography>

          <Box
            ref={valuesRef}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: "1px",
              backgroundColor: T.border,
              border: `1px solid ${T.gridBorder}`,
              borderRadius: "20px",
              overflow: "hidden",
              isolation: "isolate",
              boxShadow: T.boxShadow,
            }}
          >
            {VALUES.map((v, i) => (
              <Box
                key={v.index}
                sx={{
                  backgroundColor: T.bg,
                  p: { xs: "28px", sm: "40px" },
                  opacity: valuesVisible ? 1 : 0,
                  transform: valuesVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 90}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 90}ms, background-color 0.3s ease`,
                  "&:hover": { backgroundColor: T.surfaceSubtle },
                }}
              >
                <Typography sx={{ fontSize: "12px", color: T.accent, fontFamily: "Prompt", letterSpacing: "0.06em", mb: "18px" }}>
                  {v.index}
                </Typography>
                <Typography sx={{ fontSize: { xs: "19px", sm: "22px" }, fontWeight: 600, color: T.headline, fontFamily: "Prompt", mb: "12px" }}>
                  {v.title}
                </Typography>
                <Typography sx={{ fontSize: "14.5px", color: T.secondaryText, lineHeight: 1.75 }}>
                  {v.body}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* How we work */}
      <Box sx={{ px: { xs: "24px", sm: "48px", lg: "80px" }, pb: { xs: "72px", md: "110px" }, borderTop: `0.5px solid ${T.border}`, pt: { xs: "72px", md: "110px" } }}>
        <Box sx={{ maxWidth: "1180px", mx: "auto" }}>
          <Typography sx={{ fontSize: "11px", color: T.eyebrow, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, mb: "16px", textAlign: "center" }}>
            ✦ How we work
          </Typography>
          <Typography sx={{ fontSize: { xs: "28px", sm: "40px" }, fontWeight: 500, color: T.headline, textAlign: "center", fontFamily: "Prompt", letterSpacing: "-0.02em", mb: { xs: "40px", md: "60px" } }}>
            From friction to{" "}
            <Box component="span" sx={{ color: T.headlineFaded }}>finished system.</Box>
          </Typography>

          <Box
            ref={processRef}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
              gap: { xs: "20px", md: "24px" },
            }}
          >
            {PROCESS.map((p, i) => (
              <Box
                key={p.step}
                sx={{
                  position: "relative",
                  p: { xs: "28px", md: "28px 24px" },
                  borderRadius: "16px",
                  border: `0.5px solid ${T.border}`,
                  backgroundColor: T.cardBg,
                  boxShadow: T.boxShadow,
                  opacity: processVisible ? 1 : 0,
                  transform: processVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 90}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 90}ms, border-color 0.3s ease`,
                  "&:hover": { borderColor: T.accent },
                }}
              >
                <Box
                  sx={{
                    width: "40px", height: "40px", borderRadius: "11px",
                    border: `0.5px solid ${T.pillBorder}`, backgroundColor: T.surfaceSubtle,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: T.accent, fontFamily: "Prompt", fontSize: "14px", fontWeight: 600, mb: "18px",
                  }}
                >
                  {p.step}
                </Box>
                <Typography sx={{ fontSize: "18px", fontWeight: 600, color: T.headline, fontFamily: "Prompt", mb: "10px" }}>
                  {p.title}
                </Typography>
                <Typography sx={{ fontSize: "14px", color: T.secondaryText, lineHeight: 1.7 }}>
                  {p.body}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Stats band */}
      <Box sx={{ px: { xs: "24px", sm: "48px", lg: "80px" }, pb: { xs: "72px", md: "110px" } }}>
        <Box
          ref={statsRef}
          sx={{
            maxWidth: "1180px",
            mx: "auto",
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
            gap: "1px",
            backgroundColor: T.border,
            border: `1px solid ${T.gridBorder}`,
            borderRadius: "20px",
            overflow: "hidden",
            isolation: "isolate",
          }}
        >
          {STATS.map((s, i) => (
            <Box
              key={s.label}
              sx={{
                backgroundColor: T.cardBgAlt,
                p: { xs: "28px 20px", md: "40px 32px" },
                textAlign: "center",
                opacity: statsVisible ? 1 : 0,
                transform: statsVisible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.55s ease ${i * 80}ms, transform 0.55s ease ${i * 80}ms`,
              }}
            >
              <Typography sx={{ fontSize: { xs: "28px", md: "40px" }, fontWeight: 600, color: T.headline, fontFamily: "Prompt", lineHeight: 1, mb: "8px" }}>
                {s.num}
              </Typography>
              <Typography sx={{ fontSize: "12px", color: T.secondaryText, letterSpacing: "0.04em" }}>
                {s.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* CTA band */}
      <Box sx={{ px: { xs: "24px", sm: "48px", lg: "80px" }, pb: { xs: "80px", md: "120px" }, pt: { xs: "24px", md: "40px" } }}>
        <Box
          sx={{
            maxWidth: "1180px",
            mx: "auto",
            borderRadius: "24px",
            border: `1px solid ${T.gridBorder}`,
            backgroundColor: T.cardBgAlt,
            p: { xs: "40px 28px", md: "64px" },
            textAlign: "center",
            boxShadow: T.boxShadow,
          }}
        >
          <Typography sx={{ fontSize: { xs: "26px", sm: "38px" }, fontWeight: 600, color: T.headline, fontFamily: "Prompt", letterSpacing: "-0.02em", mb: "14px" }}>
            Let's build something durable.
          </Typography>
          <Typography sx={{ fontSize: "15px", color: T.secondaryText, lineHeight: 1.75, maxWidth: "480px", mx: "auto", mb: "30px" }}>
            Tell us where your operation slows down. We'll map the highest-friction work and show you what an AI-native system could reclaim.
          </Typography>
          <Button
            onClick={() => navigate("/contact")}
            sx={{
              px: "28px", py: "13px",
              backgroundColor: T.ctaPrimaryBg, color: T.ctaPrimaryText,
              fontSize: "14px", fontWeight: 500, textTransform: "none", borderRadius: "9px",
              transition: "background-color 0.25s ease, transform 0.2s ease",
              "&:hover": { backgroundColor: T.ctaPrimaryHover, transform: "translateY(-2px)" },
            }}
          >
            Start a conversation
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;

import { FC, useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useSharedTokens } from "../../../../theme/sharedTokens";

// ── Tiny hook: reveals once the element enters the viewport ───────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const TESTIMONIALS = [
  {
    quote:
      "Fossilite rebuilt the operational core of our platform around AI. What used to take our team days now runs in minutes — with human review where it matters.",
    name: "Amara Osei",
    role: "VP Operations, Cuebig",
    initials: "AO",
  },
  {
    quote:
      "The most engineering-first AI partner we've worked with. They shipped a production RAG pipeline in six weeks and it has been rock-solid ever since.",
    name: "Daniel Martins",
    role: "CTO, Martino Labs",
    initials: "DM",
  },
  {
    quote:
      "They didn't just automate tasks — they redesigned how our whole workflow connects. Measurable impact from the first sprint onward.",
    name: "Sofia Reyes",
    role: "Head of Product, Paperz",
    initials: "SR",
  },
];

const StarRow: FC<{ color: string }> = ({ color }) => (
  <Box sx={{ display: "flex", gap: "3px", mb: "18px" }}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Box
        key={i}
        component="span"
        sx={{
          width: "13px",
          height: "13px",
          backgroundColor: color,
          display: "inline-block",
          clipPath:
            "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",
        }}
      />
    ))}
  </Box>
);

export const TestimonialsSection: FC = () => {
  const T = useSharedTokens();

  return (
    <Box
      sx={{
        backgroundColor: T.bg,
        borderTop: `0.5px solid ${T.border}`,
        px: { xs: "24px", sm: "48px", lg: "80px" },
        py: { xs: "80px", sm: "100px", md: "130px" },
        transition: "background-color 0.4s ease, border-color 0.4s ease",
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: "center", maxWidth: "620px", mx: "auto", mb: { xs: "48px", md: "64px" } }}>
        <Typography
          sx={{
            fontSize: "11px",
            color: T.eyebrow,
            letterSpacing: "0.10em",
            textTransform: "uppercase",
            fontWeight: 600,
            mb: "16px",
          }}
        >
          ✦ Testimonials
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "32px", sm: "44px", md: "52px" },
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: T.headline,
            fontFamily: "Prompt",
          }}
        >
          Trusted by teams{" "}
          <Box component="span" sx={{ color: T.headlineFaded }}>
            who ship.
          </Box>
        </Typography>
      </Box>

      {/* Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: { xs: "20px", md: "24px" },
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard key={t.name} data={t} T={T} index={i} />
        ))}
      </Box>
    </Box>
  );
};

const TestimonialCard: FC<{
  data: (typeof TESTIMONIALS)[number];
  T: ReturnType<typeof useSharedTokens>;
  index: number;
}> = ({ data, T, index }) => {
  const { ref, visible } = useInView(0.2);

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        p: { xs: "28px", sm: "32px" },
        borderRadius: "18px",
        backgroundColor: T.cardBg,
        border: `0.5px solid ${T.border}`,
        boxShadow: T.boxShadow,
        display: "flex",
        flexDirection: "column",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 110}ms,
                     transform 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 110}ms,
                     border-color 0.3s ease, box-shadow 0.3s ease`,
        "&:hover": {
          borderColor: T.accent,
          boxShadow: T.isDark
            ? "0 20px 48px rgba(0,0,0,0.5)"
            : "0 20px 48px rgba(0,25,50,0.12)",
        },
      }}
    >
      {/* Ghost quote mark */}
      <Typography
        aria-hidden
        sx={{
          position: "absolute",
          top: "14px",
          right: "22px",
          fontSize: "72px",
          lineHeight: 1,
          fontFamily: "Georgia, serif",
          color: T.accent,
          opacity: 0.12,
          userSelect: "none",
        }}
      >
        ”
      </Typography>

      <StarRow color={T.gridBorder === "#001932" ? "#C3A87C" : T.accent} />

      <Typography
        sx={{
          fontSize: { xs: "15px", sm: "16px" },
          color: T.primaryText,
          lineHeight: 1.75,
          flex: 1,
          mb: "28px",
        }}
      >
        {data.quote}
      </Typography>

      {/* Author */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "12px", pt: "20px", borderTop: `0.5px solid ${T.border}` }}>
        <Box
          sx={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: T.surfaceSubtle,
            border: `0.5px solid ${T.border}`,
            color: T.primaryText,
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.02em",
          }}
        >
          {data.initials}
        </Box>
        <Box>
          <Typography sx={{ fontSize: "14px", fontWeight: 600, color: T.primaryText, lineHeight: 1.3 }}>
            {data.name}
          </Typography>
          <Typography sx={{ fontSize: "12px", color: T.secondaryText, lineHeight: 1.3 }}>
            {data.role}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialsSection;

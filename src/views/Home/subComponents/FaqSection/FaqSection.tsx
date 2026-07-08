import { FC, useState, useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useSharedTokens } from "../../../../theme/sharedTokens";

const FAQS = [
  {
    q: "What kind of AI systems do you build?",
    a: "We build production-grade AI systems: RAG pipelines, autonomous agents, workflow automation, and data-extraction tooling. Every system is engineered first and AI-enhanced — designed to run reliably in production, not just demo well.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most MVPs ship in around six weeks. We start by mapping your current operations, identify the highest-impact bottlenecks, then architect and deliver a system that integrates into how your business already works.",
  },
  {
    q: "Do you work with our existing stack?",
    a: "Yes. Our systems connect natively with the models and tools you already use — OpenAI, Anthropic, Slack, GitHub, Notion, Google, and more — so intelligence flows into your existing workflow rather than replacing it.",
  },
  {
    q: "Is everything human-reviewed?",
    a: "Always. 100% of what we ship is human reviewed. We combine structured systems thinking with intelligent automation, keeping human oversight exactly where it matters most.",
  },
  {
    q: "How do we get started?",
    a: "Reach out through the contact form below with a few details about your project. We'll get back to you within one business day to scope the work and outline next steps.",
  },
];

const FaqRow: FC<{
  item: (typeof FAQS)[number];
  open: boolean;
  onToggle: () => void;
  T: ReturnType<typeof useSharedTokens>;
}> = ({ item, open, onToggle, T }) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) setHeight(bodyRef.current.scrollHeight);
  }, [item.a]);

  return (
    <Box sx={{ borderBottom: `0.5px solid ${T.border}` }}>
      <Box
        component="button"
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        sx={{
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          py: { xs: "22px", md: "26px" },
          font: "inherit",
          color: T.primaryText,
          transition: "color 0.2s ease",
          "&:hover": { color: T.accent },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 500,
            color: "inherit",
            fontFamily: "Prompt",
            letterSpacing: "-0.01em",
          }}
        >
          {item.q}
        </Typography>

        {/* Animated +/- toggle */}
        <Box
          sx={{
            position: "relative",
            width: "20px",
            height: "20px",
            flexShrink: 0,
            "&::before, &::after": {
              content: '""',
              position: "absolute",
              backgroundColor: "currentColor",
              transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
            },
            "&::before": {
              top: "50%",
              left: 0,
              width: "100%",
              height: "1.5px",
              transform: "translateY(-50%)",
            },
            "&::after": {
              left: "50%",
              top: 0,
              width: "1.5px",
              height: "100%",
              transform: open ? "translateX(-50%) scaleY(0)" : "translateX(-50%) scaleY(1)",
              opacity: open ? 0 : 1,
            },
          }}
        />
      </Box>

      {/* Collapsible body */}
      <Box
        sx={{
          height: open ? `${height}px` : "0px",
          opacity: open ? 1 : 0,
          overflow: "hidden",
          transition: "height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease",
        }}
      >
        <Box ref={bodyRef} sx={{ pb: "26px", pr: { xs: 0, md: "48px" } }}>
          <Typography sx={{ fontSize: "15px", color: T.secondaryText, lineHeight: 1.8 }}>
            {item.a}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export const FaqSection: FC = () => {
  const T = useSharedTokens();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
      <Box
        sx={{
          maxWidth: "1100px",
          mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "0.85fr 1.15fr" },
          gap: { xs: "40px", md: "72px" },
          alignItems: "start",
        }}
      >
        {/* Left — heading */}
        <Box sx={{ position: { md: "sticky" }, top: { md: "120px" } }}>
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
            ✦ FAQ
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "32px", sm: "40px", md: "48px" },
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: T.headline,
              fontFamily: "Prompt",
              mb: "16px",
            }}
          >
            Questions,{" "}
            <Box component="span" sx={{ color: T.headlineFaded }}>
              answered.
            </Box>
          </Typography>
          <Typography sx={{ fontSize: "15px", color: T.secondaryText, lineHeight: 1.75, maxWidth: "320px" }}>
            Everything you need to know about how we work. Can't find what you're
            looking for? Reach out below.
          </Typography>
        </Box>

        {/* Right — accordion */}
        <Box sx={{ borderTop: `0.5px solid ${T.border}` }}>
          {FAQS.map((item, i) => (
            <FaqRow
              key={item.q}
              item={item}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              T={T}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FaqSection;

import { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSharedTokens } from "../../theme/sharedTokens";
import { FONT_DISPLAY } from "../../theme/fonts";
import { PageHero } from "../../components";
import { useInView } from "../../hooks/useInView";
import CodeImageOneLight from "../../assets/Images/CodeImages/CodeImageOneLight.gif";
import CodeImage3LightChat from "../../assets/Images/CodeImages/CodeImage3LightChat.gif";
import CodeImage4LightExtraction from "../../assets/Images/CodeImages/CodeImage4LightExtraction.gif";

interface Product {
  tag: string;
  title: string;
  body: string;
  bullets: string[];
  image: string;
}

const PRODUCTS: Product[] = [
  {
    tag: "Retrieval",
    title: "RAG Pipelines",
    body: "Production retrieval systems that ground language models in your data — with vector search, re-ranking and evaluation built in, not bolted on. Answers stay accurate, traceable and current as your knowledge base grows.",
    bullets: ["Grounded, cited answers", "Vector + hybrid search", "Continuous evaluation", "Automatic re-ranking", "Source-linked citations"],
    image: CodeImageOneLight,
  },
  {
    tag: "Autonomy",
    title: "AI Agents",
    body: "Goal-driven agents that plan, use tools and take action — wrapped in guardrails and human oversight so they're safe to run in production. They reason step by step, recover from failures and escalate to a human when it matters.",
    bullets: ["Tool use & memory", "Guardrails by default", "Human-in-the-loop control", "Multi-step planning", "Full action audit trail"],
    image: CodeImage3LightChat,
  },
  {
    tag: "Automation",
    title: "Workflow Automation",
    body: "Connected systems that turn fragmented, manual operations into streamlined workflows — reclaiming a third of your team's repetitive labour. Data flows automatically between your tools, with keyword extraction and enrichment at every step.",
    bullets: ["Native integrations", "Real-time processing", "Scalable execution", "Keyword extraction & tagging", "Automated data enrichment"],
    image: CodeImage4LightExtraction,
  },
];

const STATS = [
  { num: "50+", label: "Products shipped" },
  { num: "40–60%", label: "Faster delivery" },
  { num: "12", label: "Countries" },
  { num: "100%", label: "Human reviewed" },
];

const CAPABILITIES = [
  { title: "Production-grade", body: "Engineered to survive real operational load — not just a demo notebook.", icon: "M12 3 4 6v5c0 4.5 3.4 8.3 8 9.5 4.6-1.2 8-5 8-9.5V6l-8-3Z" },
  { title: "Human reviewed", body: "100% of what we ship is checked by an engineer before it goes live.", icon: "M9 12l2 2 4-4M12 3l7 3v5c0 4.5-3 8.5-7 9.5C8 19.5 5 15.5 5 11V6l7-3Z" },
  { title: "Native integrations", body: "Connects to OpenAI, Anthropic, Slack, GitHub, Notion, Google & more.", icon: "M8 8V5a2 2 0 0 1 4 0v3m4 0h3v4m-3 8h3v-4M8 16H5v-4" },
  { title: "Real-time processing", body: "Streaming pipelines that respond the moment data arrives.", icon: "M13 2 3 14h7l-1 8 10-12h-7l1-8Z" },
  { title: "Scalable by design", body: "Architected to grow with your team and your workload.", icon: "M3 17h4V9H3v8Zm7 0h4V4h-4v13Zm7 0h4v-6h-4v6Z" },
  { title: "You own everything", body: "Your code, your data, your models — fully handed over. No lock-in.", icon: "M8 10V7a4 4 0 0 1 8 0v3m-9 0h10v10H7V10Z" },
];

const Ico: FC<{ d: string; color: string }> = ({ d, color }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d={d} stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProductRow: FC<{ product: Product; index: number; T: ReturnType<typeof useSharedTokens> }> = ({ product, index, T }) => {
  const { ref, visible } = useInView(0.15);
  const reversed = index % 2 === 1;

  return (
    <Box
      ref={ref}
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: { xs: "32px", md: "64px" },
        alignItems: "center",
        py: { xs: "48px", md: "72px" },
      }}
    >
      {/* Text */}
      <Box
        sx={{
          order: { xs: 2, md: reversed ? 2 : 1 },
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : `translateX(${reversed ? "24px" : "-24px"})`,
          transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <Typography sx={{ fontSize: "11px", color: T.accent, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, mb: "16px" }}>
          {product.tag}
        </Typography>
        <Typography sx={{ fontSize: { xs: "28px", sm: "36px" }, fontWeight: 600, color: T.headline, fontFamily: FONT_DISPLAY, letterSpacing: "-0.02em", mb: "16px" }}>
          {product.title}
        </Typography>
        <Typography sx={{ fontSize: "15px", color: T.secondaryText, lineHeight: 1.8, mb: "24px", maxWidth: "440px" }}>
          {product.body}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {product.bullets.map((b) => (
            <Box key={b} sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Box sx={{ width: "16px", height: "16px", borderRadius: "5px", border: `0.5px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Box sx={{ width: "6px", height: "6px", borderRadius: "2px", backgroundColor: T.accent }} />
              </Box>
              <Typography sx={{ fontSize: "14px", color: T.secondaryText }}>{b}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Image */}
      <Box
        sx={{
          order: { xs: 1, md: reversed ? 1 : 2 },
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(28px) scale(0.97)",
          transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s",
        }}
      >
        <Box
          sx={{
            position: "relative",
            borderRadius: "18px",
            overflow: "hidden",
            border: `0.5px solid ${T.border}`,
            backgroundColor: T.cardBg,
            p: { xs: "20px", sm: "28px" },
            boxShadow: T.boxShadow,
            transition: "border-color 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              borderColor: T.accent,
              boxShadow: T.isDark ? "0 24px 56px rgba(0,0,0,0.5)" : "0 24px 56px rgba(0,25,50,0.14)",
            },
          }}
        >
          <Box component="img" src={product.image} alt={product.title} sx={{ width: "100%", display: "block", borderRadius: "10px", border: `0.5px solid ${T.border}` }} />
        </Box>
      </Box>
    </Box>
  );
};

export const Products: FC = () => {
  const T = useSharedTokens();
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: T.bg }}>
      <PageHero
        eyebrow="Products"
        title="Systems that do"
        titleAccent="the work."
        subtitle="From retrieval and agents to full workflow automation — every product is engineered for production and reviewed by humans before it ships."
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
          Start a project
        </Button>
      </PageHero>

      {/* Stats band */}
      <Box sx={{ px: { xs: "24px", sm: "48px", lg: "80px" }, py: { xs: "40px", md: "56px" }, borderBottom: `0.5px solid ${T.border}` }}>
        <Box sx={{
          maxWidth: "1180px", mx: "auto",
          display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
          gap: { xs: "24px", md: "16px" },
        }}>
          {STATS.map((s) => (
            <Box key={s.label} sx={{ textAlign: { xs: "left", md: "center" } }}>
              <Typography sx={{ fontSize: { xs: "26px", md: "34px" }, fontWeight: 600, color: T.headline, fontFamily: "Prompt", lineHeight: 1, mb: "6px" }}>
                {s.num}
              </Typography>
              <Typography sx={{ fontSize: "12px", color: T.secondaryText, letterSpacing: "0.04em" }}>{s.label}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ px: { xs: "24px", sm: "48px", lg: "80px" } }}>
        <Box
          sx={{
            maxWidth: "1180px",
            mx: "auto",
            "& > div:not(:last-of-type)": { borderBottom: `0.5px solid ${T.border}` },
          }}
        >
          {PRODUCTS.map((p, i) => (
            <ProductRow key={p.title} product={p} index={i} T={T} />
          ))}
        </Box>
      </Box>

      {/* Capabilities — what's built into every system */}
      <Box sx={{ px: { xs: "24px", sm: "48px", lg: "80px" }, py: { xs: "72px", md: "110px" }, borderTop: `0.5px solid ${T.border}` }}>
        <Box sx={{ maxWidth: "1180px", mx: "auto" }}>
          <Box sx={{ textAlign: "center", maxWidth: "600px", mx: "auto", mb: { xs: "40px", md: "56px" } }}>
            <Typography sx={{ fontSize: "11px", color: T.eyebrow, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, mb: "16px" }}>
              ✦ Built into every system
            </Typography>
            <Typography sx={{ fontSize: { xs: "28px", sm: "40px" }, fontWeight: 500, color: T.headline, fontFamily: FONT_DISPLAY, letterSpacing: "-0.02em" }}>
              Standard on{" "}
              <Box component="span" sx={{ color: T.headlineFaded }}>every build.</Box>
            </Typography>
          </Box>

          <Box sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
            gap: "1px",
            backgroundColor: T.border,
            border: `1px solid ${T.gridBorder}`,
            borderRadius: "20px",
            overflow: "hidden",
            isolation: "isolate",
            boxShadow: T.boxShadow,
          }}>
            {CAPABILITIES.map((c) => (
              <Box key={c.title} sx={{
                backgroundColor: T.bg, p: { xs: "28px", sm: "32px" },
                transition: "background-color 0.3s ease",
                "&:hover": { backgroundColor: T.surfaceSubtle, "& .cap-icon": { transform: "translateY(-3px)" } },
              }}>
                <Box className="cap-icon" sx={{
                  width: "44px", height: "44px", borderRadius: "11px",
                  border: `0.5px solid ${T.pillBorder}`, backgroundColor: T.surfaceSubtle,
                  display: "flex", alignItems: "center", justifyContent: "center", mb: "18px",
                  transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                }}>
                  <Ico d={c.icon} color={T.accent} />
                </Box>
                <Typography sx={{ fontSize: "17px", fontWeight: 600, color: T.headline, fontFamily: "Prompt", mb: "8px" }}>
                  {c.title}
                </Typography>
                <Typography sx={{ fontSize: "14px", color: T.secondaryText, lineHeight: 1.7 }}>
                  {c.body}
                </Typography>
              </Box>
            ))}
          </Box>
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
          <Typography sx={{ fontSize: { xs: "26px", sm: "38px" }, fontWeight: 600, color: T.headline, fontFamily: FONT_DISPLAY, letterSpacing: "-0.02em", mb: "14px" }}>
            Not sure which fits?
          </Typography>
          <Typography sx={{ fontSize: "15px", color: T.secondaryText, lineHeight: 1.75, maxWidth: "480px", mx: "auto", mb: "30px" }}>
            Tell us about your operation and we'll recommend the right system — and prove the impact before you commit.
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
            Book a free consultation
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Products;

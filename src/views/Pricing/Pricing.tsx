import { FC, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSharedTokens } from "../../theme/sharedTokens";
import { PageHero } from "../../components";
import { useInView } from "../../hooks/useInView";

interface Tier {
  name: string;
  blurb: string;
  monthly: number | null;
  yearly: number | null;
  custom?: boolean;
  featured?: boolean;
  features: string[];
  cta: string;
}

const TIERS: Tier[] = [
  {
    name: "Starter",
    blurb: "For teams validating a first AI workflow.",
    monthly: 2400,
    yearly: 2040,
    features: [
      "1 production AI workflow",
      "RAG or automation pipeline",
      "Standard integrations",
      "Human-reviewed delivery",
      "2 weeks of support",
    ],
    cta: "Start with Starter",
  },
  {
    name: "Growth",
    blurb: "For scaling AI across multiple operations.",
    monthly: 6800,
    yearly: 5780,
    featured: true,
    features: [
      "Up to 4 production workflows",
      "Autonomous agents + RAG",
      "Priority integrations & APIs",
      "Dedicated systems architect",
      "SLA-backed support",
      "Quarterly optimisation review",
    ],
    cta: "Choose Growth",
  },
  {
    name: "Enterprise",
    blurb: "For organisations operating AI at scale.",
    monthly: null,
    yearly: null,
    custom: true,
    features: [
      "Unlimited workflows",
      "Custom model orchestration",
      "On-prem / VPC deployment",
      "Security & compliance review",
      "Named engineering pod",
      "24/7 enterprise support",
    ],
    cta: "Talk to sales",
  },
];

const CheckMark: FC<{ color: string }> = ({ color }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
    <path d="M20 6 9 17l-5-5" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Feature comparison — values are boolean (✓/—) or a short string.
const COMPARE_GROUPS: { group: string; rows: { label: string; values: (boolean | string)[] }[] }[] = [
  {
    group: "Build",
    rows: [
      { label: "Production workflows", values: ["1", "Up to 4", "Unlimited"] },
      { label: "RAG pipelines", values: [true, true, true] },
      { label: "Autonomous agents", values: [false, true, true] },
      { label: "Custom model orchestration", values: [false, false, true] },
    ],
  },
  {
    group: "Integrate & deploy",
    rows: [
      { label: "Integrations", values: ["Standard", "Priority", "Custom"] },
      { label: "Deployment", values: ["Cloud", "Cloud", "On-prem / VPC"] },
      { label: "Security & compliance review", values: [false, false, true] },
    ],
  },
  {
    group: "Support",
    rows: [
      { label: "Dedicated systems architect", values: [false, true, "Named pod"] },
      { label: "Support", values: ["2 weeks", "SLA-backed", "24/7"] },
      { label: "Optimisation review", values: [false, "Quarterly", "Ongoing"] },
      { label: "Own your code & data", values: [true, true, true] },
    ],
  },
];

const PRICING_FAQS = [
  {
    q: "What counts as a single workflow?",
    a: "A workflow is one end-to-end system that automates a distinct operation — for example a RAG assistant, a document-processing pipeline, or an agent that handles a support queue. If you're unsure how your needs map to tiers, we'll scope it with you.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes. You can move up or down between tiers as your operation evolves — there's no penalty, and any annual credit carries over. Most teams start with Starter or Growth and scale from there.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No. Your tier price covers design, build, human review and the support window listed. Third-party model or infrastructure costs (e.g. OpenAI or Anthropic usage) are billed at cost and always transparent.",
  },
  {
    q: "What if none of the tiers fit?",
    a: "Then Enterprise is the starting point for a conversation, not a fixed package. We'll shape scope, deployment and support around how your organisation actually runs.",
  },
];

const PriceCard: FC<{ tier: Tier; yearly: boolean; index: number; T: ReturnType<typeof useSharedTokens>; onCta: () => void }> = ({
  tier, yearly, index, T, onCta,
}) => {
  const { ref, visible } = useInView(0.15);
  const price = yearly ? tier.yearly : tier.monthly;

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        p: { xs: "28px", sm: "34px" },
        borderRadius: "20px",
        backgroundColor: tier.featured ? (T.isDark ? "#101418" : "#ffffff") : T.cardBg,
        border: `${tier.featured ? "1.5px" : "0.5px"} solid ${tier.featured ? T.accent : T.border}`,
        boxShadow: tier.featured
          ? (T.isDark ? "0 24px 60px rgba(0,0,0,0.5)" : "0 24px 60px rgba(0,25,50,0.14)")
          : T.boxShadow,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 100}ms,
                     transform 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 100}ms,
                     border-color 0.3s ease, box-shadow 0.3s ease`,
      }}
    >
      {tier.featured && (
        <Box
          sx={{
            position: "absolute",
            top: "-13px",
            left: "50%",
            transform: "translateX(-50%)",
            px: "14px",
            py: "5px",
            borderRadius: "99px",
            backgroundColor: T.accent,
            color: T.ctaPrimaryText,
            fontSize: "10.5px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          Most popular
        </Box>
      )}

      <Typography sx={{ fontSize: "18px", fontWeight: 600, color: T.headline, fontFamily: "Prompt" }}>
        {tier.name}
      </Typography>
      <Typography sx={{ fontSize: "13.5px", color: T.secondaryText, lineHeight: 1.6, mt: "6px", minHeight: "40px" }}>
        {tier.blurb}
      </Typography>

      {/* Price */}
      <Box sx={{ display: "flex", alignItems: "baseline", gap: "6px", mt: "22px", mb: "24px" }}>
        {tier.custom ? (
          <Typography sx={{ fontSize: "38px", fontWeight: 600, color: T.headline, fontFamily: "Prompt", lineHeight: 1 }}>
            Custom
          </Typography>
        ) : (
          <>
            <Typography sx={{ fontSize: "40px", fontWeight: 600, color: T.headline, fontFamily: "Prompt", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>
              ${price?.toLocaleString()}
            </Typography>
            <Typography sx={{ fontSize: "13px", color: T.secondaryText }}>/mo</Typography>
          </>
        )}
      </Box>

      <Button
        onClick={onCta}
        fullWidth
        sx={{
          py: "12px",
          mb: "26px",
          fontSize: "14px",
          fontWeight: 500,
          textTransform: "none",
          borderRadius: "9px",
          transition: "transform 0.2s ease, background-color 0.25s ease, border-color 0.2s ease, color 0.2s ease",
          ...(tier.featured
            ? {
                backgroundColor: T.ctaPrimaryBg,
                color: T.ctaPrimaryText,
                "&:hover": { backgroundColor: T.ctaPrimaryHover, transform: "translateY(-2px)" },
              }
            : {
                backgroundColor: "transparent",
                color: T.headline,
                border: `0.5px solid ${T.border}`,
                "&:hover": { borderColor: T.accent, transform: "translateY(-2px)" },
              }),
        }}
      >
        {tier.cta}
      </Button>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "12px", pt: "22px", borderTop: `0.5px solid ${T.border}` }}>
        {tier.features.map((f) => (
          <Box key={f} sx={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <CheckMark color={T.accent} />
            <Typography sx={{ fontSize: "13.5px", color: T.secondaryText, lineHeight: 1.5 }}>{f}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const Pricing: FC = () => {
  const T = useSharedTokens();
  const navigate = useNavigate();
  const [yearly, setYearly] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const TIER_NAMES = TIERS.map((t) => t.name);

  return (
    <Box sx={{ backgroundColor: T.bg }}>
      <PageHero
        eyebrow="Pricing"
        title="Simple pricing for"
        titleAccent="serious AI."
        subtitle="Transparent engagement tiers that scale with your operation. No hidden fees — every plan ships production-grade, human-reviewed systems."
      >
        {/* Billing toggle */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            p: "5px",
            borderRadius: "99px",
            border: `0.5px solid ${T.border}`,
            backgroundColor: T.surfaceSubtle,
          }}
        >
          {(["Monthly", "Annual"] as const).map((opt) => {
            const active = (opt === "Annual") === yearly;
            return (
              <Box
                key={opt}
                component="button"
                type="button"
                onClick={() => setYearly(opt === "Annual")}
                sx={{
                  border: "none",
                  cursor: "pointer",
                  font: "inherit",
                  fontFamily: "Prompt",
                  fontSize: "13px",
                  fontWeight: 500,
                  px: "16px",
                  py: "8px",
                  borderRadius: "99px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: active ? T.ctaPrimaryBg : "transparent",
                  color: active ? T.ctaPrimaryText : T.secondaryText,
                  transition: "background-color 0.25s ease, color 0.25s ease",
                }}
              >
                {opt}
                {opt === "Annual" && (
                  <Box
                    component="span"
                    sx={{
                      fontSize: "10px",
                      fontWeight: 700,
                      px: "6px",
                      py: "2px",
                      borderRadius: "99px",
                      backgroundColor: active ? "rgba(255,255,255,0.18)" : T.accentGlow,
                      color: active ? T.ctaPrimaryText : T.accent,
                    }}
                  >
                    –15%
                  </Box>
                )}
              </Box>
            );
          })}
        </Box>
      </PageHero>

      {/* Tiers */}
      <Box sx={{ px: { xs: "24px", sm: "48px", lg: "80px" }, py: { xs: "64px", md: "96px" } }}>
        <Box
          sx={{
            maxWidth: "1180px",
            mx: "auto",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: { xs: "24px", md: "26px" },
            alignItems: "start",
          }}
        >
          {TIERS.map((tier, i) => (
            <PriceCard key={tier.name} tier={tier} yearly={yearly} index={i} T={T} onCta={() => navigate("/contact")} />
          ))}
        </Box>

        {/* Reassurance strip */}
        <Box
          sx={{
            maxWidth: "1180px",
            mx: "auto",
            mt: { xs: "40px", md: "56px" },
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: { xs: "20px", sm: "48px" },
            pt: "40px",
            borderTop: `0.5px solid ${T.border}`,
          }}
        >
          {[
            "100% human-reviewed",
            "6-week average delivery",
            "Cancel anytime",
            "Own your code & data",
          ].map((item) => (
            <Box key={item} sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <CheckMark color={T.accent} />
              <Typography sx={{ fontSize: "13px", color: T.secondaryText }}>{item}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Feature comparison */}
      <Box sx={{ px: { xs: "24px", sm: "48px", lg: "80px" }, py: { xs: "64px", md: "96px" }, borderTop: `0.5px solid ${T.border}` }}>
        <Box sx={{ maxWidth: "1180px", mx: "auto" }}>
          <Typography sx={{ fontSize: "11px", color: T.eyebrow, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, mb: "16px", textAlign: "center" }}>
            ✦ Compare plans
          </Typography>
          <Typography sx={{ fontSize: { xs: "28px", sm: "40px" }, fontWeight: 500, color: T.headline, textAlign: "center", fontFamily: "Prompt", letterSpacing: "-0.02em", mb: { xs: "36px", md: "52px" } }}>
            Everything, side by side.
          </Typography>

          <Box sx={{ overflowX: "auto", borderRadius: "20px", border: `1px solid ${T.gridBorder}`, boxShadow: T.boxShadow }}>
            <Box sx={{ minWidth: "680px" }}>
              {/* Header row */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1.4fr repeat(3, 1fr)",
                  backgroundColor: T.cardBgAlt,
                  borderBottom: `0.5px solid ${T.border}`,
                }}
              >
                <Box sx={{ p: { xs: "18px 20px", md: "22px 26px" } }} />
                {TIER_NAMES.map((name, i) => (
                  <Box key={name} sx={{ p: { xs: "18px 16px", md: "22px 20px" }, textAlign: "center", backgroundColor: TIERS[i].featured ? T.accentGlow : "transparent" }}>
                    <Typography sx={{ fontSize: { xs: "15px", md: "17px" }, fontWeight: 600, color: T.headline, fontFamily: "Prompt" }}>
                      {name}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {COMPARE_GROUPS.map((grp) => (
                <Box key={grp.group}>
                  <Box sx={{ px: { xs: "20px", md: "26px" }, py: "12px", backgroundColor: T.surfaceSubtle, borderBottom: `0.5px solid ${T.border}` }}>
                    <Typography sx={{ fontSize: "11px", color: T.eyebrow, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700 }}>
                      {grp.group}
                    </Typography>
                  </Box>
                  {grp.rows.map((row) => (
                    <Box
                      key={row.label}
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "1.4fr repeat(3, 1fr)",
                        borderBottom: `0.5px solid ${T.border}`,
                        "&:last-of-type": { borderBottom: "none" },
                        "&:hover": { backgroundColor: T.surfaceSubtle },
                        transition: "background-color 0.2s ease",
                      }}
                    >
                      <Box sx={{ p: { xs: "14px 20px", md: "16px 26px" }, display: "flex", alignItems: "center" }}>
                        <Typography sx={{ fontSize: "13.5px", color: T.primaryText, fontWeight: 500 }}>{row.label}</Typography>
                      </Box>
                      {row.values.map((v, i) => (
                        <Box
                          key={i}
                          sx={{
                            p: { xs: "14px 12px", md: "16px 20px" },
                            display: "flex", alignItems: "center", justifyContent: "center",
                            backgroundColor: TIERS[i].featured ? (T.isDark ? "rgba(255,255,255,0.02)" : "rgba(0,25,50,0.015)") : "transparent",
                          }}
                        >
                          {typeof v === "boolean" ? (
                            v ? (
                              <CheckMark color={T.accent} />
                            ) : (
                              <Box sx={{ width: "14px", height: "1.5px", borderRadius: "2px", backgroundColor: T.border }} />
                            )
                          ) : (
                            <Typography sx={{ fontSize: "13px", color: T.secondaryText, textAlign: "center", lineHeight: 1.4 }}>{v}</Typography>
                          )}
                        </Box>
                      ))}
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* FAQ */}
      <Box sx={{ px: { xs: "24px", sm: "48px", lg: "80px" }, py: { xs: "64px", md: "96px" }, borderTop: `0.5px solid ${T.border}` }}>
        <Box sx={{ maxWidth: "760px", mx: "auto" }}>
          <Typography sx={{ fontSize: "11px", color: T.eyebrow, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, mb: "16px", textAlign: "center" }}>
            ✦ Pricing questions
          </Typography>
          <Typography sx={{ fontSize: { xs: "28px", sm: "38px" }, fontWeight: 500, color: T.headline, textAlign: "center", fontFamily: "Prompt", letterSpacing: "-0.02em", mb: { xs: "32px", md: "48px" } }}>
            Good to know.
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {PRICING_FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <Box
                  key={f.q}
                  sx={{
                    borderRadius: "14px",
                    border: `0.5px solid ${open ? T.accent : T.border}`,
                    backgroundColor: T.cardBg,
                    boxShadow: T.boxShadow,
                    overflow: "hidden",
                    transition: "border-color 0.25s ease",
                  }}
                >
                  <Box
                    component="button"
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    sx={{
                      width: "100%", cursor: "pointer", font: "inherit", fontFamily: "Prompt",
                      border: "none", background: "transparent", textAlign: "left",
                      display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px",
                      p: { xs: "18px 20px", sm: "20px 24px" },
                    }}
                  >
                    <Typography sx={{ fontSize: { xs: "15px", sm: "16px" }, fontWeight: 600, color: T.headline, fontFamily: "Prompt" }}>
                      {f.q}
                    </Typography>
                    <Box
                      sx={{
                        flexShrink: 0, color: T.accent, display: "flex",
                        transform: open ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateRows: open ? "1fr" : "0fr",
                      transition: "grid-template-rows 0.32s cubic-bezier(0.22,1,0.36,1)",
                    }}
                  >
                    <Box sx={{ overflow: "hidden" }}>
                      <Typography sx={{ fontSize: "14px", color: T.secondaryText, lineHeight: 1.75, p: { xs: "0 20px 20px", sm: "0 24px 24px" } }}>
                        {f.a}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>

      {/* CTA band */}
      <Box sx={{ px: { xs: "24px", sm: "48px", lg: "80px" }, pb: { xs: "80px", md: "120px" }, pt: { xs: "8px", md: "16px" } }}>
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
            Still weighing it up?
          </Typography>
          <Typography sx={{ fontSize: "15px", color: T.secondaryText, lineHeight: 1.75, maxWidth: "480px", mx: "auto", mb: "30px" }}>
            Book a free scoping call and we'll recommend the right tier — and prove the impact before you commit to anything.
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

export default Pricing;

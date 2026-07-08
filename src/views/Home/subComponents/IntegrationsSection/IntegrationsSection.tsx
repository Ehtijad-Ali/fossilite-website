import { FC, useEffect, useRef, useState, ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { useSharedTokens } from "../../../../theme/sharedTokens";

// ── Reveal-on-scroll hook ─────────────────────────────────────────────────────
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

// ── Simple, clean monochrome marks (inherit currentColor) ─────────────────────
const S = 24;
const OpenAIMark = () => (
  <svg width={S} height={S} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6 6 0 0 0 4.98 4.18a5.98 5.98 0 0 0-3.99 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .52 4.91 6.05 6.05 0 0 0 6.51 2.9A6 6 0 0 0 19.02 19.8a5.98 5.98 0 0 0 3.99-2.9 6.05 6.05 0 0 0-.73-7.08Zm-9.02 12.6a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.78.78 0 0 0 .39-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.06v5.58a4.5 4.5 0 0 1-4.49 4.49ZM3.6 18.72a4.47 4.47 0 0 1-.54-3.01l.14.09 4.78 2.76a.78.78 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06L9.72 22.4a4.5 4.5 0 0 1-6.14-1.64ZM2.34 8.09a4.48 4.48 0 0 1 2.34-1.97v5.68a.77.77 0 0 0 .39.67l5.81 3.36-2.02 1.17a.07.07 0 0 1-.07 0l-4.83-2.79A4.5 4.5 0 0 1 2.34 8.1Zm16.6 3.86-5.84-3.4 2.02-1.16a.07.07 0 0 1 .07 0l4.83 2.79a4.49 4.49 0 0 1-.68 8.1v-5.67a.79.79 0 0 0-.4-.66Zm2.01-3.03-.14-.09-4.77-2.78a.78.78 0 0 0-.79 0L11.42 9.4V7.06a.07.07 0 0 1 .03-.06l4.83-2.79a4.49 4.49 0 0 1 6.67 4.65Zm-12.65 4.16-2.02-1.17a.07.07 0 0 1-.04-.05V6.28a4.49 4.49 0 0 1 7.37-3.45l-.14.08-4.78 2.76a.78.78 0 0 0-.39.68l-.01 6.72Zm1.1-2.36 2.6-1.5 2.6 1.5v3l-2.6 1.5-2.6-1.5v-3Z" />
  </svg>
);
const AnthropicMark = () => (
  <svg width={S} height={S} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M15.6 3h-3.2l5.3 18h3.3L15.6 3Zm-8.9 0L1 21h3.35l1.16-3.9h6.02l1.16 3.9h3.35L10.6 3H6.7Zm-.36 11 2.1-6.6 2.1 6.6H6.34Z" />
  </svg>
);
const SlackMark = () => (
  <svg width={S} height={S} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M5 15a2 2 0 1 1-2-2h2v2Zm1 0a2 2 0 1 1 4 0v5a2 2 0 1 1-4 0v-5ZM9 5a2 2 0 1 1 2-2v2H9Zm0 1a2 2 0 1 1 0 4H4a2 2 0 1 1 0-4h5ZM19 9a2 2 0 1 1 2 2h-2V9Zm-1 0a2 2 0 1 1-4 0V4a2 2 0 1 1 4 0v5ZM15 19a2 2 0 1 1-2 2v-2h2Zm0-1a2 2 0 1 1 0-4h5a2 2 0 1 1 0 4h-5Z" />
  </svg>
);
const GithubMark = () => (
  <svg width={S} height={S} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.4-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.28 5.69.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
  </svg>
);
const NotionMark = () => (
  <svg width={S} height={S} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.3 3.5 14.7 2.7c1.3-.1 1.6-.02 2.4.57l3.3 2.3c.55.4.73.5.73 0V2.8m-16.83.7v14.6c0 .8.4 1.1 1.3 1.05l11.9-.7c.9-.05 1-.6 1-1.25V6.35c0-.65-.25-1-.8-.95L5 6.15c-.6.05-.7.36-.7.85Zm11.35 1c.1.45 0 .9-.45.95l-.55.1v8.1c-.48.26-.92.4-1.28.4-.58 0-.73-.18-1.16-.72l-3.55-5.6v5.4l1.15.26s0 .67-.93.67l-2.56.15c-.07-.15 0-.53.26-.6l.67-.19V8.2l-.93-.08c-.08-.45.17-1.1.86-1.15l2.75-.18 3.78 5.8V7.45l-.96-.11c-.08-.55.32-.95.82-.99l2.56-.15Z" />
  </svg>
);
const GoogleMark = () => (
  <svg width={S} height={S} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 11v2.8h4.65c-.2 1.2-1.5 3.55-4.65 3.55A5.15 5.15 0 0 1 12 6.85c1.62 0 2.7.7 3.32 1.29l2.26-2.18C16.13 4.57 14.28 3.7 12 3.7 7.44 3.7 3.7 7.45 3.7 12s3.74 8.3 8.3 8.3c4.79 0 7.96-3.37 7.96-8.11 0-.55-.06-.97-.13-1.39H12Z" />
  </svg>
);
const FigmaMark = () => (
  <svg width={S} height={S} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8.5 24a3.75 3.75 0 0 0 3.75-3.75V16.5H8.5a3.75 3.75 0 1 0 0 7.5ZM4.75 12.25A3.75 3.75 0 0 1 8.5 8.5h3.75v7.5H8.5a3.75 3.75 0 0 1-3.75-3.75ZM4.75 4.75A3.75 3.75 0 0 1 8.5 1h3.75v7.5H8.5A3.75 3.75 0 0 1 4.75 4.75ZM12.25 1h3.75a3.75 3.75 0 1 1 0 7.5h-3.75V1ZM19.75 12.25a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
  </svg>
);
const ZapierMark = () => (
  <svg width={S} height={S} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M15 12a8.9 8.9 0 0 1-.36 2.5A8.9 8.9 0 0 1 12 14.86h-.02a8.9 8.9 0 0 1-2.62-.38A9 9 0 0 1 9 12c0-.86.12-1.7.36-2.5A8.9 8.9 0 0 1 12 9.14h.02c.9 0 1.78.13 2.62.38.24.8.36 1.63.36 2.48ZM23.4 9.43h-6.06l4.29-4.28a11.94 11.94 0 0 0-2.78-2.78L14.57 6.66V.6a12.06 12.06 0 0 0-5.14 0v6.06L5.15 2.37A11.9 11.9 0 0 0 3.1 4.14c-.4.4-.77.87-1.06 1.29l4.29 4.28H.27a12.06 12.06 0 0 0 0 5.15h6.06l-4.29 4.28c.62.86 1.36 1.6 2.22 2.22l4.29-4.29v6.07a12.1 12.1 0 0 0 5.14 0v-6.07l4.29 4.29a11.98 11.98 0 0 0 2.78-2.78l-4.29-4.29h6.06a12.06 12.06 0 0 0 0-5.13Z" />
  </svg>
);

interface Integration {
  name: string;
  mark: ReactNode;
}
const INTEGRATIONS: Integration[] = [
  { name: "OpenAI", mark: <OpenAIMark /> },
  { name: "Anthropic", mark: <AnthropicMark /> },
  { name: "Slack", mark: <SlackMark /> },
  { name: "GitHub", mark: <GithubMark /> },
  { name: "Notion", mark: <NotionMark /> },
  { name: "Google", mark: <GoogleMark /> },
  { name: "Figma", mark: <FigmaMark /> },
  { name: "Zapier", mark: <ZapierMark /> },
];

export const IntegrationsSection: FC = () => {
  const T = useSharedTokens();
  const { ref, visible } = useInView(0.15);

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
      <Box sx={{ maxWidth: "1120px", mx: "auto" }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", maxWidth: "600px", mx: "auto", mb: { xs: "48px", md: "64px" } }}>
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
            ✦ Integrations
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "32px", sm: "44px", md: "52px" },
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: T.headline,
              fontFamily: "Prompt",
              mb: "18px",
            }}
          >
            Plugs into your{" "}
            <Box component="span" sx={{ color: T.headlineFaded }}>
              stack.
            </Box>
          </Typography>
          <Typography sx={{ fontSize: "15px", color: T.secondaryText, lineHeight: 1.75 }}>
            Our systems connect natively with the models and tools your team already
            relies on — so intelligence flows into your existing workflow, not around it.
          </Typography>
        </Box>

        {/* Grid */}
        <Box
          ref={ref}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" },
            gap: "1px",
            backgroundColor: T.border,
            border: `1px solid ${T.gridBorder}`,
            borderRadius: "18px",
            overflow: "hidden",
            isolation: "isolate",
            boxShadow: T.boxShadow,
          }}
        >
          {INTEGRATIONS.map((item, i) => (
            <Box
              key={item.name}
              sx={{
                backgroundColor: T.bg,
                minHeight: { xs: "120px", md: "150px" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "14px",
                px: "16px",
                color: T.secondaryText,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(18px)",
                transition: `opacity 0.55s cubic-bezier(0.22,1,0.36,1) ${i * 60}ms,
                             transform 0.55s cubic-bezier(0.22,1,0.36,1) ${i * 60}ms,
                             color 0.3s ease, background-color 0.3s ease`,
                "&:hover": {
                  color: T.primaryText,
                  backgroundColor: T.surfaceSubtle,
                  "& .int-mark": { transform: "translateY(-3px) scale(1.08)" },
                },
              }}
            >
              <Box
                className="int-mark"
                sx={{
                  display: "flex",
                  transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                }}
              >
                {item.mark}
              </Box>
              <Typography sx={{ fontSize: "13px", fontWeight: 500, letterSpacing: "0.01em" }}>
                {item.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default IntegrationsSection;

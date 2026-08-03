import { FC, ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { useSharedTokens } from "../../theme/sharedTokens";
import { FONT_DISPLAY } from "../../theme/fonts";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  children?: ReactNode;
}

// Shared hero for all standalone routes — clears the fixed navbar, lays down the
// signature grid + radial glow, and animates its content in. Keeps every
// sub-page visually consistent with the home page.
export const PageHero: FC<PageHeroProps> = ({ eyebrow, title, titleAccent, subtitle, children }) => {
  const T = useSharedTokens();

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: T.bg,
        px: { xs: "24px", sm: "48px", lg: "80px" },
        pt: { xs: "128px", sm: "150px", md: "180px" },
        pb: { xs: "56px", sm: "72px", md: "96px" },
        borderBottom: `0.5px solid ${T.border}`,
        transition: "background-color 0.4s ease, border-color 0.4s ease",
      }}
    >
      {/* Background grid */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: `
            linear-gradient(${T.gridLine} 1px, transparent 1px),
            linear-gradient(90deg, ${T.gridLine} 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, #000 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />
      {/* Radial glow */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "760px",
          height: "460px",
          maxWidth: "100%",
          background: T.radialGlow,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1, maxWidth: "820px", mx: "auto", textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: "11px",
            color: "#C3A87C",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontWeight: 600,
            mb: "20px",
            animation: "phFade 0.7s cubic-bezier(0.22,1,0.36,1) both",
            "@keyframes phFade": { from: { opacity: 0, transform: "translateY(14px)" }, to: { opacity: 1, transform: "none" } },
          }}
        >
          ✦ {eyebrow}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "42px", sm: "60px", md: "76px" },
            fontWeight: 500,
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            color: T.headline,
            fontFamily: FONT_DISPLAY,
            animation: "phRise 0.8s cubic-bezier(0.22,1,0.36,1) 0.08s both",
            "@keyframes phRise": { from: { opacity: 0, transform: "translateY(26px)" }, to: { opacity: 1, transform: "none" } },
          }}
        >
          {title}
          {titleAccent && (
            <>
              {" "}
              <Box component="span" sx={{ color: T.headlineFaded }}>
                {titleAccent}
              </Box>
            </>
          )}
        </Typography>

        {subtitle && (
          <Typography
            sx={{
              fontSize: { xs: "15px", sm: "17px" },
              color: T.secondaryText,
              lineHeight: 1.75,
              maxWidth: "560px",
              mx: "auto",
              mt: "24px",
              animation: "phRise 0.8s cubic-bezier(0.22,1,0.36,1) 0.18s both",
            }}
          >
            {subtitle}
          </Typography>
        )}

        {children && (
          <Box
            sx={{
              mt: "36px",
              display: "flex",
              justifyContent: "center",
              animation: "phRise 0.8s cubic-bezier(0.22,1,0.36,1) 0.26s both",
            }}
          >
            {children}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PageHero;

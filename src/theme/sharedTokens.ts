// Centralized theme tokens to eliminate duplication across components
import { useThemeMode } from "./theme";

export const useSharedTokens = () => {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  return {
    isDark,
    // Core palette
    bg: isDark ? "#161616" : "#FFF4E3",
    bgAlt: isDark ? "#1a1a1a" : "#ffffff",
    bgAlt2: isDark ? "#1e1e1e" : "#fdf6ec",
    border: isDark ? "#2a2a2a" : "#d9c9b0",
    borderLight: isDark ? "#3a3a3a" : "#BBC0C6",
    
    // Text hierarchy
    primaryText: isDark ? "#FFF4E3" : "#001932",
    secondaryText: isDark ? "#BBC0C6" : "#4a4a6a",
    fadedText: isDark ? "#3a3a3a" : "#BBC0C6",
    mutedText: isDark ? "#8a8a8a" : "#9a9384",
    eyebrow: isDark ? "#BBC0C6" : "#4a4a6a",
    headline: isDark ? "#FFF4E3" : "#001932",
    headlineStroke: isDark ? "rgba(255,244,227,0.18)" : undefined,
    headlineFaded: isDark ? "#3a3a3a" : "#BBC0C6",
    subText: isDark ? "#BBC0C6" : "#4a4a6a",
    
    // Accents
    accent: isDark ? "#BBC0C6" : "#001932",
    accentGlow: isDark ? "rgba(187,192,198,0.08)" : "rgba(0,25,50,0.06)",
    
    // UI elements
    surfaceSubtle: isDark ? "#1e1e1e" : "#f0e8da",
    tagBg: isDark ? "#1e1e1e" : "#f5ede0",
    pillBorder: isDark ? "#2a2a2a" : "#d9c9b0",
    cardBg: isDark ? "#1a1a1a" : "#ffffff",
    cardBgAlt: isDark ? "#1e1e1e" : "#fdf6ec",
    stroke: isDark ? "rgba(187,192,198,0.10)" : "rgba(0,25,50,0.10)",
    glowTop: isDark
      ? "linear-gradient(90deg, transparent, rgba(187,192,198,0.12), transparent)"
      : "linear-gradient(90deg, transparent, rgba(0,25,50,0.10), transparent)",
    boxShadow: isDark
      ? "none"
      : "0 8px 40px rgba(0,25,50,0.06), 0 2px 8px rgba(0,0,0,0.04)",
    gridBorder: isDark ? "#FFF4E3" : "#001932",
    
    // CTAs
    ctaPrimaryBg: isDark ? "#FFF4E3" : "#001932",
    ctaPrimaryText: isDark ? "#001932" : "#FFF4E3",
    ctaPrimaryHover: isDark ? "#e0d8cc" : "#0a2a4a",
    ctaSecBorder: isDark ? "#2a2a2a" : "#d9c9b0",
    ctaSecText: isDark ? "#BBC0C6" : "#4a4a6a",
    ctaSecHoverText: isDark ? "#FFF4E3" : "#001932",
    ctaSecHoverBorder: isDark ? "#BBC0C6" : "#001932",
    
    // Form elements
    inputBg: "transparent",
    inputBorder: isDark ? "#2a2a2a" : "#d9c9b0",
    inputHoverBorder: isDark ? "#3a3a3a" : "#C3A87C",
    inputFocusBorder: isDark ? "#BBC0C6" : "#001932",
    inputText: isDark ? "#FFF4E3" : "#001932",
    inputLabel: isDark ? "#8a8a8a" : "#9a9384",
    inputColor: isDark ? "#FFF4E3" : "#001932",
    inputDivider: isDark ? "#2a2a2a" : "#d9c9b0",
    inputShadow: isDark ? "none" : "0 2px 8px rgba(0,25,50,0.05)",
    placeholder: isDark ? "#3a3a3a" : "#BBC0C6",
    
    // Contact form
    formBg: "transparent",
    formBorder: isDark ? "#2a2a2a" : "#d9c9b0",
    formTitle: isDark ? "#FFF4E3" : "#001932",
    formSub: isDark ? "#BBC0C6" : "#4a4a6a",
    
    // CTA icon filter
    ctaPrimaryIcon: isDark ? "none" : "invert(1)",
    
    // Footer specific
    tagline: isDark ? "#BBC0C6" : "#4a4a6a",
    colLabel: isDark ? "#FFF4E3" : "#001932",
    copyright: isDark ? "#BBC0C6" : "#4a4a6a",
    linkColor: isDark ? "#BBC0C6" : "#4a4a6a",
    linkHover: isDark ? "#FFF4E3" : "#001932",
    socialBorder: isDark ? "#2a2a2a" : "#d9c9b0",
    socialHoverBorder: isDark ? "#BBC0C6" : "#001932",
    socialHoverBg: isDark ? "#1e1e1e" : "#f0e8da",
    socialIconFilter: isDark ? "invert(1) brightness(0.85)" : "brightness(0)",
    socialOpacity: isDark ? 0.7 : 0.55,
    newsletterDesc: isDark ? "#BBC0C6" : "#4a4a6a",
    newsletterDisclaim: isDark ? "#3a3a3a" : "#BBC0C6",
    sendActiveBg: isDark ? "#FFF4E3" : "#001932",
    sendActiveIcon: isDark ? "#001932" : "#FFF4E3",
    sendActiveHover: isDark ? "#e0d8cc" : "#0a2a4a",
    sendIdleIcon: isDark ? "#3a3a3a" : "#BBC0C6",
    sendIdleHoverBg: isDark ? "#1e1e1e" : "#f0e8da",
    
    // Stats
    statsDivider: isDark ? "#2a2a2a" : "#d9c9b0",
    statsNum: isDark ? "#FFF4E3" : "#001932",
    statsLabel: isDark ? "#BBC0C6" : "#4a4a6a",
    
    // Grid/backgrounds
    gridLine: isDark ? "rgba(187,192,198,0.03)" : "rgba(0,25,50,0.04)",
    radialGlow: isDark
      ? "radial-gradient(ellipse at center, rgba(187,192,198,0.06) 0%, transparent 65%)"
      : "radial-gradient(ellipse at center, rgba(0,25,50,0.06) 0%, transparent 65%)",
    
    // Three.js particles
    particlePrimary: isDark ? 0xBBC0C6 : 0x001932,
    particleSecondary: isDark ? 0x3a3a3a : 0x3a5a7a,
    
    // Transitions
    transition: {
      fast: "0.2s ease",
      normal: "0.4s ease",
      slow: "0.6s ease",
    },
  };
};
import { FC, ReactNode, useState, useEffect, useRef } from "react";
import { Box, Grid2 as Grid, Stack, Typography } from "@mui/material";
import * as THREE from "three";
import { useSharedTokens } from "../../../../theme/sharedTokens";
import { useInView } from "../../../../hooks/useInView";

// ── Principle icons (inline SVG, inherit currentColor) ────────────────────────
const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
    <path d="m20 20-3.2-3.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);
const IconBlueprint = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);
const IconFunnel = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 5h18l-7 8v6l-4-2v-4L3 5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);
const IconRocket = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M9 12l3 3M15 4c3 1 5 3 6 6-3 3-7 5-9 5l-3-3c0-2 2-6 5-9 .3-.3.7-.6 1-1Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
    <circle cx="15" cy="10" r="1.4" fill="currentColor" />
  </svg>
);

const IconArrow: FC<{ color: string }> = ({ color }) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PRINCIPLES: { index: string; title: string; body: string; speed: number; icon: ReactNode }[] = [
  {
    index: "01", title: "Identify the Problem",
    body: "We listen closely to understand your workflows, operational challenges, and areas slowing your team down.",
    speed: 3.0, icon: <IconSearch />,
  },
  {
    index: "02", title: "Architect.",
    body: "Using proven workflows and implementation experience, we design a system tailored around your operational needs.",
    speed: 6.0, icon: <IconBlueprint />,
  },
  {
    index: "03", title: "Bottlenecks.",
    body: "We identify repetitive processes, inefficiencies, and manual dependencies that create friction in day-to-day operations.",
    speed: 1.5, icon: <IconFunnel />,
  },
  {
    index: "04", title: "Deliver.",
    body: "We deploy a custom-built solution designed to integrate smoothly into the way your business already operates.",
    speed: 4.5, icon: <IconRocket />,
  },
];

// ── Single principle card (own reveal-on-scroll) ──────────────────────────────
const PrincipleCard: FC<{
  principle: (typeof PRINCIPLES)[number];
  index: number;
  active: boolean;
  onHover: (i: number | null) => void;
  colors: {
    cardBg: string; cardHoverBg: string; accent: string; index: string;
    title: string; body: string; iconBg: string; iconBorder: string; border: string;
  };
}> = ({ principle, index, active, onHover, colors }) => {
  const { ref, visible } = useInView(0.2);

  return (
    <Box
      ref={ref}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      sx={{
        position: "relative",
        overflow: "hidden",
        p: { xs: "28px", sm: "36px" },
        height: "100%",
        backgroundColor: active ? colors.cardHoverBg : colors.cardBg,
        cursor: "default",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 90}ms,
                     transform 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 90}ms,
                     background-color 0.35s ease`,
      }}
    >
      {/* Left accent bar */}
      <Box sx={{
        position: "absolute", top: 0, left: 0, width: "4px", height: "100%",
        backgroundColor: colors.accent,
        transform: active ? "scaleY(1)" : "scaleY(0)",
        transformOrigin: "top",
        transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1)",
      }} />

      {/* Ghost number */}
      <Typography aria-hidden sx={{
        position: "absolute", right: "18px", bottom: "-10px",
        fontFamily: "Prompt", fontWeight: 700, lineHeight: 1,
        fontSize: { xs: "90px", sm: "120px" },
        color: colors.accent,
        opacity: active ? 0.08 : 0.035,
        transition: "opacity 0.35s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1)",
        transform: active ? "translateY(-6px)" : "translateY(0)",
        userSelect: "none", pointerEvents: "none",
      }}>
        {principle.index}
      </Typography>

      {/* Top row: icon + index label */}
      <Box sx={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", mb: "24px" }}>
        <Box sx={{
          width: "44px", height: "44px", borderRadius: "11px",
          display: "flex", alignItems: "center", justifyContent: "center",
          backgroundColor: colors.iconBg,
          border: `0.5px solid ${active ? colors.accent : colors.iconBorder}`,
          color: active ? colors.accent : colors.index,
          transition: "color 0.3s ease, border-color 0.3s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
          transform: active ? "translateY(-2px)" : "none",
        }}>
          {principle.icon}
        </Box>
        <Typography sx={{
          fontSize: "11px", fontFamily: "Prompt", letterSpacing: "0.08em",
          color: active ? colors.accent : colors.index, transition: "color 0.3s ease",
        }}>
          {principle.index}
        </Typography>
      </Box>

      <Typography sx={{
        position: "relative", zIndex: 1,
        fontSize: { xs: "18px", sm: "20px" }, fontWeight: 500,
        color: colors.title, mb: "12px", letterSpacing: "-0.01em",
        transition: "color 0.4s ease",
      }}>
        {principle.title}
      </Typography>

      <Typography sx={{
        position: "relative", zIndex: 1,
        fontSize: "14px", color: colors.body, lineHeight: 1.75,
        transition: "color 0.4s ease", maxWidth: "460px",
      }}>
        {principle.body}
      </Typography>

      {/* Hover reveal row */}
      <Box sx={{
        position: "relative", zIndex: 1,
        display: "flex", alignItems: "center", gap: "8px", mt: "20px",
        opacity: active ? 1 : 0,
        transform: active ? "translateX(0)" : "translateX(-8px)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
      }}>
        <Typography sx={{ fontSize: "12px", fontWeight: 500, color: colors.accent, letterSpacing: "0.04em" }}>
          Step {principle.index}
        </Typography>
        <IconArrow color={colors.accent} />
      </Box>
    </Box>
  );
};

export const FirstGeneralSection: FC = () => {
  const T = useSharedTokens();
  const isLight = !T.isDark;

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const hoveredIndexRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef  = useRef<THREE.WebGLRenderer | null>(null);
  const animationRef = useRef<number | null>(null);
  const materialsRef = useRef<THREE.PointsMaterial[]>([]);

  // ── Theme tokens from shared hook ────────────────────────────────────────
  const bgColor       = T.bg;
  const borderColor   = T.border;
  const eyebrowColor  = T.accent;
  const headlineColor = T.primaryText;
  const headlineFaded = T.fadedText;
  const subTextColor  = T.secondaryText;
  const gridGapColor  = T.border;
  const gridBorder    = T.primaryText;
  const cardBg        = T.bg;
  const cardHoverBg   = isLight ? "rgba(0,25,50,0.03)" : "rgba(255,244,227,0.03)";
  const indexColor    = T.mutedText;
  const titleColor    = T.primaryText;
  const bodyColor     = T.secondaryText;
  const accentColor   = T.accent;

  const cardColors = {
    cardBg, cardHoverBg, accent: accentColor, index: indexColor,
    title: titleColor, body: bodyColor,
    iconBg: T.surfaceSubtle, iconBorder: T.pillBorder, border: borderColor,
  };

  const defaultParticleColor = T.particlePrimary;
  const hoverParticleColor   = T.accent === "#001932" ? 0x001932 : 0xBBC0C6;

  const setHover = (i: number | null) => {
    hoveredIndexRef.current = i;
    setHoveredIndex(i);
  };

  // ── Three.js particle rings (scene built ONCE — hover read via ref) ───────
  useEffect(() => {
    if (!containerRef.current) return;

    const width  = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight || 500;

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const group = new THREE.Group();
    scene.add(group);

    const ringCount = 4;
    const particleSystems: THREE.Points[] = [];
    materialsRef.current = [];

    for (let r = 0; r < ringCount; r++) {
      const geometry  = new THREE.BufferGeometry();
      const count     = 400;
      const positions = new Float32Array(count * 3);
      const radius    = 10 + r * 4;

      for (let i = 0; i < count; i++) {
        const theta = (i / count) * Math.PI * 2;
        const rand  = (Math.random() - 0.5) * 1.5;
        positions[i * 3]     = Math.cos(theta) * radius + rand;
        positions[i * 3 + 1] = Math.sin(theta) * radius + rand;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 2;
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const material = new THREE.PointsMaterial({
        size: 0.15,
        color: defaultParticleColor,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      });

      materialsRef.current.push(material);
      const points = new THREE.Points(geometry, material);
      group.add(points);
      particleSystems.push(points);
    }

    const clock = new THREE.Clock();

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      const hovered = hoveredIndexRef.current;

      particleSystems.forEach((system, idx) => {
        const baseSpeed    = PRINCIPLES[idx].speed;
        const currentSpeed = hovered === idx ? baseSpeed * 2.5 : baseSpeed * 0.5;
        system.rotation.z  = t * 0.05 * currentSpeed * (idx % 2 === 0 ? 1 : -1);
        system.rotation.x  = Math.sin(t * 0.2) * 0.2;

        const material = materialsRef.current[idx];
        if (material) {
          if (hovered === idx) {
            material.size    = 0.25;
            material.opacity = 0.9;
            material.color.lerp(new THREE.Color(hoverParticleColor), 0.1);
          } else {
            material.size    = 0.12;
            material.opacity = isLight ? 0.35 : 0.40;
            material.color.lerp(new THREE.Color(defaultParticleColor), 0.05);
          }
        }
      });

      group.rotation.y = Math.sin(t * 0.1) * 0.3;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight || 500;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [T.isDark]);

  return (
    <Box id="solutions" sx={{
      backgroundColor: bgColor,
      borderTop:    `0.5px solid ${borderColor}`,
      borderBottom: `0.5px solid ${borderColor}`,
      px: { xs: "24px", sm: "48px", lg: "80px" },
      py: { xs: "80px", sm: "100px", md: "130px" },
      position: "relative", overflow: "hidden",
      transition: "background-color 0.4s ease, border-color 0.4s ease",
    }}>
      {/* Three.js background */}
      <Box ref={containerRef} sx={{
        position: "absolute", top: 0, left: 0,
        width: "100%", height: "100%",
        zIndex: 0, pointerEvents: "none",
        opacity: isLight ? 0.45 : 0.65,
        transition: "opacity 0.4s ease",
      }} />

      <Box sx={{ position: "relative", zIndex: 1 }}>
        {/* Header row */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "flex-end" }}
          gap={4}
          mb={{ xs: "56px", md: "72px" }}
        >
          <Box>
            <Typography sx={{
              fontSize: "11px", color: eyebrowColor,
              letterSpacing: "0.08em", textTransform: "uppercase",
              fontWeight: 600, mb: "16px",
              transition: "color 0.4s ease",
            }}>
              ✦ Why we're different
            </Typography>
            <Typography sx={{
              fontSize: { xs: "32px", sm: "44px", md: "56px" },
              fontWeight: 500, color: headlineColor,
              lineHeight: 1.1, letterSpacing: "-0.02em",
              fontFamily: "Prompt" , maxWidth: "520px",
              transition: "color 0.4s ease",
            }}>
              We consult and{" "}
              <Box component="span" sx={{ color: headlineFaded, transition: "color 0.4s ease" }}>
                We build.
              </Box>
            </Typography>
          </Box>

          <Typography sx={{
            fontSize: "15px", color: subTextColor,
            lineHeight: 1.75, maxWidth: "340px",
            transition: "color 0.4s ease",
          }}>
            We start by understanding how your operations work today — then
            identify where automation and intelligent systems can create
            measurable impact.
          </Typography>
        </Stack>

        {/* Principles grid */}
        <Grid container spacing={{ xs: "1px", md: "1px" }} sx={{
          backgroundColor: gridGapColor,
          border: `2px solid ${gridBorder}`,
          borderRadius: "16px",
          overflow: "hidden",
          isolation: "isolate",
          boxShadow: T.boxShadow,
          transition: "background-color 0.4s ease, border-color 0.4s ease",
        }}>
          {PRINCIPLES.map((p, i) => (
            <Grid key={p.index} size={{ xs: 12, sm: 6 }} sx={{ display: "flex" }}>
              <Box sx={{ width: "100%" }}>
                <PrincipleCard
                  principle={p}
                  index={i}
                  active={hoveredIndex === i}
                  onHover={setHover}
                  colors={cardColors}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

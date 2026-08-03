import { FC, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useThemeMode } from "../../../../theme/theme";
import { useInView } from "../../../../hooks/useInView";
import { scrollToSection } from "../../../../utils/scrollToSection";
import outfitVideo from "../../../../assets/videos/outfit.mp4";
import arTileVideo from "../../../../assets/videos/ar-tile.mp4";

// ── Theme tokens ─────────────────────────────────────────────────────────────
const getTokens = (isLight: boolean) => ({
  bg:            isLight ? "#FFF4E3" : "#0e1a2b",
  border:        isLight ? "#d9c9b0" : "#263b57",
  eyebrow:       isLight ? "#001932" : "#BBC0C6",
  headline:      isLight ? "#001932" : "#FFF4E3",
  headlineFaded: isLight ? "#BBC0C6" : "#3a3a3a",
  subText:       isLight ? "#4a4a6a" : "#BBC0C6",
  // Outer mockup card
  cardBorder:    isLight ? "#d9c9b0" : "#263b57",
  cardCorner:    "#C3A87C",            // warm tan corner accents
  cardHoverShadow: isLight
    ? "0 26px 60px rgba(0,25,50,0.16)"
    : "0 26px 60px rgba(0,0,0,0.55)",
  // Gold / tan accent
  gold:          "#C3A87C",
  goldSoftBg:    "rgba(195,168,124,0.14)",
  // Tag pill
  tagBg:         isLight ? "rgba(255,255,255,0.9)" : "rgba(22,22,22,0.85)",
  tagText:       isLight ? "#001932" : "#FFF4E3",
  tagBorder:     isLight ? "#e3ddd0" : "#263b57",
  // Caption
  captionTitle:  isLight ? "#001932" : "#FFF4E3",
  captionBody:   isLight ? "#4a4a6a" : "#BBC0C6",
  metricValue:   isLight ? "#001932" : "#FFF4E3",
  metricLabel:   isLight ? "#9a9384" : "#8a8a8a",
  linkColor:     isLight ? "#001932" : "#FFF4E3",
  // Placeholder
  placeholderBg: isLight ? "#ece3d4" : "#222",
});

const nasal = { fontFamily: "Prompt" };

// ── Corner brackets for the mockup cards ─────────────────────────────────────
const CardCorners: FC<{ color: string }> = ({ color }) => (
  <>
    <Box sx={{ position: "absolute", top: "12px", left: "12px", width: "16px", height: "16px", borderTop: `1.5px solid ${color}`, borderLeft: `1.5px solid ${color}`, zIndex: 3, pointerEvents: "none" }} />
    <Box sx={{ position: "absolute", top: "12px", right: "12px", width: "16px", height: "16px", borderTop: `1.5px solid ${color}`, borderRight: `1.5px solid ${color}`, zIndex: 3, pointerEvents: "none" }} />
    <Box sx={{ position: "absolute", bottom: "12px", left: "12px", width: "16px", height: "16px", borderBottom: `1.5px solid ${color}`, borderLeft: `1.5px solid ${color}`, zIndex: 3, pointerEvents: "none" }} />
    <Box sx={{ position: "absolute", bottom: "12px", right: "12px", width: "16px", height: "16px", borderBottom: `1.5px solid ${color}`, borderRight: `1.5px solid ${color}`, zIndex: 3, pointerEvents: "none" }} />
  </>
);

// ── Lazy, lightweight looping video ──────────────────────────────────────────
// Loads nothing until the card scrolls near the viewport (preload="none" + the
// src is only attached on intersection), then autoplays muted/looping. This
// keeps both videos off the initial page load so they never block first paint.
const LazyVideo: FC<{ src: string; radius?: string; T: ReturnType<typeof getTokens> }> = ({ src, radius, T }) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (inView) ref.current?.play().catch(() => {});
  }, [inView]);

  return (
    <Box
      component="video"
      ref={ref}
      src={inView ? src : undefined}
      muted
      loop
      playsInline
      preload="none"
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
        borderRadius: radius,
        backgroundColor: T.placeholderBg,
      }}
    />
  );
};

// ── Media well: zoom-on-hover video + gradient + play button + live badge ─────
const CardMedia: FC<{ src: string; tag: string; T: ReturnType<typeof getTokens> }> = ({ src, tag, T }) => (
  <Box sx={{ position: "relative", width: "100%", height: "100%", borderRadius: "10px", overflow: "hidden" }}>
    {/* zoom layer */}
    <Box className="cs-zoom" sx={{ width: "100%", height: "100%", transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)" }}>
      <LazyVideo src={src} radius="10px" T={T} />
    </Box>

    {/* category tag */}
    <Box sx={{
      position: "absolute", top: "16px", left: "16px", zIndex: 2,
      display: "inline-flex", alignItems: "center", gap: "6px",
      px: "10px", py: "5px", borderRadius: "99px",
      backgroundColor: T.tagBg, border: `0.5px solid ${T.tagBorder}`,
      backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)",
    }}>
      <Box sx={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: T.gold }} />
      <Typography sx={{ fontSize: "10.5px", fontWeight: 600, color: T.tagText, letterSpacing: "0.06em", textTransform: "uppercase" }}>
        {tag}
      </Typography>
    </Box>

    {/* live badge */}
    <Box sx={{
      position: "absolute", bottom: "16px", left: "16px", zIndex: 2,
      display: "inline-flex", alignItems: "center", gap: "6px",
      px: "9px", py: "4px", borderRadius: "99px",
      backgroundColor: "rgba(0,0,0,0.45)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)",
    }}>
      <Box sx={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#3BC77A", animation: "csPulse 2s ease-in-out infinite", "@keyframes csPulse": { "0%,100%": { opacity: 1 }, "50%": { opacity: 0.3 } } }} />
      <Typography sx={{ fontSize: "9.5px", fontWeight: 600, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        Live demo
      </Typography>
    </Box>

    {/* hover overlay + play */}
    <Box className="cs-overlay" sx={{
      position: "absolute", inset: 0, zIndex: 1, opacity: 0,
      background: "linear-gradient(180deg, rgba(0,25,50,0) 40%, rgba(0,25,50,0.35) 100%)",
      transition: "opacity 0.4s ease", pointerEvents: "none",
    }} />
    <Box className="cs-play" sx={{
      position: "absolute", top: "50%", left: "50%", zIndex: 2,
      transform: "translate(-50%,-50%) scale(0.8)", opacity: 0,
      width: "54px", height: "54px", borderRadius: "50%",
      backgroundColor: "rgba(255,255,255,0.92)",
      display: "flex", alignItems: "center", justifyContent: "center",
      transition: "opacity 0.35s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
      pointerEvents: "none",
      boxShadow: "0 8px 24px rgba(0,0,0,0.28)",
    }}>
      <Box component="span" sx={{
        width: 0, height: 0, ml: "3px",
        borderTop: "8px solid transparent", borderBottom: "8px solid transparent",
        borderLeft: "13px solid #001932",
      }} />
    </Box>
  </Box>
);

// ── Shared framed-mockup-card styling (now interactive) ───────────────────────
const cardFrame = (T: ReturnType<typeof getTokens>) => ({
  position: "relative" as const,
  width: "100%",
  border: `1px solid ${T.cardBorder}`,
  borderRadius: "16px",
  backgroundColor: T.bg,
  p: { xs: "16px", sm: "20px" },
  display: "flex",
  alignItems: "stretch",
  justifyContent: "center",
  cursor: "pointer",
  transition: "border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1)",
  "&:hover": {
    borderColor: T.gold,
    boxShadow: T.cardHoverShadow,
    transform: "translateY(-4px)",
    "& .cs-zoom": { transform: "scale(1.06)" },
    "& .cs-overlay": { opacity: 1 },
    "& .cs-play": { opacity: 1, transform: "translate(-50%,-50%) scale(1)" },
  },
});

// ── Arrow glyph ───────────────────────────────────────────────────────────────
const Arrow: FC<{ color: string }> = ({ color }) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Case-study caption (tag · title · body · metrics · CTA) ────────────────────
interface Metric { value: string; label: string }
const Caption: FC<{
  T: ReturnType<typeof getTokens>;
  title: string;
  body: string;
  metrics: Metric[];
}> = ({ T, title, body, metrics }) => {
  const { ref, visible } = useInView(0.2);
  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <Typography sx={{ ...nasal, fontSize: { xs: "18px", sm: "20px" }, fontWeight: 500, color: T.captionTitle, mb: "10px" }}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: "14px", color: T.captionBody, lineHeight: 1.75, width: "100%" }}>
        {body}
      </Typography>

      {/* Result metrics */}
      <Box sx={{
        display: "flex", flexWrap: "wrap", gap: "18px 28px",
        mt: "20px", pt: "20px", borderTop: `0.5px solid ${T.border}`,
      }}>
        {metrics.map((m) => (
          <Box key={m.label}>
            <Typography sx={{ ...nasal, fontSize: { xs: "20px", sm: "22px" }, fontWeight: 600, color: T.metricValue, lineHeight: 1, mb: "5px" }}>
              {m.value}
            </Typography>
            <Typography sx={{ fontSize: "11px", color: T.metricLabel, letterSpacing: "0.04em", textTransform: "uppercase" }}>
              {m.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* CTA */}
      <Box
        component="button"
        type="button"
        onClick={() => scrollToSection("contact")}
        sx={{
          mt: "22px", display: "inline-flex", alignItems: "center", gap: "8px",
          background: "none", border: "none", cursor: "pointer", p: 0, font: "inherit",
          fontFamily: "Prompt", fontSize: "13px", fontWeight: 500, color: T.linkColor,
          "& svg": { transition: "transform 0.25s ease" },
          "&:hover svg": { transform: "translateX(4px)" },
        }}
      >
        Start a project like this
        <Arrow color={T.linkColor} />
      </Box>
    </Box>
  );
};

// ── Main section ─────────────────────────────────────────────────────────────
export const CaseStudiesSection: FC = () => {
  const { mode } = useThemeMode();
  const isLight = mode === "light";
  const T = getTokens(isLight);

  // The floor card overflows upward (it's bottom-aligned to the shorter outfit
  // card), so its top sits higher than the header. Nudge the header down so its
  // top lines up with the floor card's top. The overflow amount scales with
  // viewport width, so we measure it rather than hardcode. Only applies when the
  // cards are side-by-side (md+, ≥900px); stacked layouts leave the header put.
  const headerRef = useRef<HTMLDivElement>(null);
  const floorCardRef = useRef<HTMLDivElement>(null);
  const outfitCardRef = useRef<HTMLDivElement>(null);
  const [headerShift, setHeaderShift] = useState(0);
  // The header subtext wraps within the left column (above the outfit card) so
  // it runs out to that container's edge before wrapping, without sliding under
  // the floor card on the right. Undefined → full width (stacked / mobile).
  const [subMaxWidth, setSubMaxWidth] = useState<string | undefined>(undefined);

  useLayoutEffect(() => {
    const measure = () => {
      const header = headerRef.current;
      const floor = floorCardRef.current;
      const outfit = outfitCardRef.current;
      if (!header || !floor || !outfit) return;
      if (window.innerWidth < 900) {
        setHeaderShift(0);
        setSubMaxWidth(undefined);
        return;
      }
      setHeaderShift((prev) => {
        const naturalTop = header.getBoundingClientRect().top - prev;
        const floorTop = floor.getBoundingClientRect().top;
        return Math.max(0, Math.round(floorTop - naturalTop));
      });
      setSubMaxWidth(`${Math.round(outfit.getBoundingClientRect().width)}px`);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (headerRef.current) ro.observe(headerRef.current);
    if (floorCardRef.current) ro.observe(floorCardRef.current);
    if (outfitCardRef.current) ro.observe(outfitCardRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <Box id="case-studies" sx={{
      backgroundColor: T.bg,
      borderTop: `0.5px solid ${T.border}`,
      px: { xs: "24px", sm: "48px", lg: "80px" },
      py: { xs: "80px", sm: "100px", md: "130px" },
      transition: "background-color 0.4s ease, border-color 0.4s ease",
    }}>
      {/* Header */}
      <Box ref={headerRef} sx={{ mb: { xs: "48px", md: "64px" }, transform: `translateY(${headerShift}px)` }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", mb: "16px" }}>
          <Typography sx={{
            fontSize: "11px", color: T.eyebrow,
            letterSpacing: "0.08em", textTransform: "uppercase",
            fontWeight: 600, transition: "color 0.4s ease",
          }}>
            ✦ Case Studies
          </Typography>
          <Box sx={{
            display: { xs: "none", sm: "inline-flex" }, alignItems: "center", gap: "8px",
            px: "12px", py: "6px", borderRadius: "99px",
            border: `0.5px solid ${T.tagBorder}`, backgroundColor: T.goldSoftBg,
          }}>
            <Box sx={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: T.gold }} />
            <Typography sx={{ fontSize: "11px", fontWeight: 500, color: T.eyebrow, letterSpacing: "0.03em" }}>
              2 featured projects
            </Typography>
          </Box>
        </Box>
        <Typography sx={{
          ...nasal, fontSize: { xs: "32px", sm: "44px", md: "52px" },
          fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.02em",
          color: T.headline, transition: "color 0.4s ease",
        }}>
          Real Results.{" "}
          <Box component="span" sx={{ color: T.headlineFaded, transition: "color 0.4s ease" }}>
            Real Impact.
          </Box>
        </Typography>
        <Typography sx={{
          fontSize: "15px", color: T.subText, lineHeight: 1.75,
          maxWidth: subMaxWidth, mt: "20px", transition: "color 0.4s ease",
        }}>
          Explore how we've helped businesses solve challenges, improve user
          experiences, and achieve measurable growth through strategy, design,
          and development.
        </Typography>
      </Box>

      {/* Two case studies — column widths mirror the design (874 : 368).
          Cards share a row whose height is set by the (shorter) outfit card;
          the taller floor card is pinned to the bottom of that row so it ends
          level with the outfit card and overflows *upward* — its top sits
          higher, while neither card's ratio or size changes. Captions live in
          a second row, sitting just below the bottom-aligned cards. */}
      <Box sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "874fr 368fr" },
        columnGap: { md: "40px", lg: "56px" },
        gridTemplateAreas: {
          xs: `"ocard" "ocap" "fcard" "fcap"`,
          md: `"ocard fcard" "ocap fcap"`,
        },
        alignItems: "start",
      }}>
        {/* Outfit card — in flow, so it defines the cards-row height */}
        <Box ref={outfitCardRef} sx={{ ...cardFrame(T), gridArea: "ocard", aspectRatio: "1000 / 542" }}>
          <CardCorners color={T.cardCorner} />
          <CardMedia src={outfitVideo} tag="AI · Fashion" T={T} />
        </Box>

        {/* Floor card — wrapper fills the row; the card is pinned to its bottom
            (md+) and overflows above. On xs it stacks normally. */}
        <Box sx={{ gridArea: "fcard", position: "relative", alignSelf: { md: "stretch" }, mt: { xs: "48px", md: 0 } }}>
          <Box ref={floorCardRef} sx={{
            ...cardFrame(T),
            aspectRatio: "368 / 664",
            position: { xs: "static", md: "absolute" },
            left: 0,
            right: 0,
            bottom: 0,
          }}>
            <CardCorners color={T.cardCorner} />
            <CardMedia src={arTileVideo} tag="AR · Retail" T={T} />
          </Box>
        </Box>

        {/* Captions — 28px below the bottom-aligned cards */}
        <Box sx={{ gridArea: "ocap", mt: "28px" }}>
          <Caption
            T={T}
            title="AI-Powered Outfit"
            body="AI analyzes user preferences, wardrobe selections, and style inputs to generate curated outfit combinations tailored to individual fashion choices and occasions."
            metrics={[
              { value: "+42%", label: "Engagement" },
              { value: "3.5×", label: "Faster styling" },
              { value: "12k+", label: "Outfits generated" },
            ]}
          />
        </Box>
        <Box sx={{ gridArea: "fcap", mt: "28px" }}>
          <Caption
            T={T}
            title="Floor Visualization"
            body="Customers take a photo of their room, and AR-Tile finds the best flooring match."
            metrics={[
              { value: "68%", label: "Fewer returns" },
              { value: "2.4×", label: "Conversion" },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

import { FC, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useThemeMode } from "../../../../theme/theme";
import outfitVideo from "../../../../assets/videos/outfit.mp4";
import arTileVideo from "../../../../assets/videos/ar-tile.mp4";

// ── Theme tokens ─────────────────────────────────────────────────────────────
const getTokens = (isLight: boolean) => ({
  bg:            isLight ? "#FFF4E3" : "#161616",
  border:        isLight ? "#d9c9b0" : "#2a2a2a",
  eyebrow:       isLight ? "#001932" : "#BBC0C6",
  headline:      isLight ? "#001932" : "#FFF4E3",
  headlineFaded: isLight ? "#BBC0C6" : "#3a3a3a",
  subText:       isLight ? "#4a4a6a" : "#BBC0C6",
  // Outer mockup card
  cardBorder:    isLight ? "#d9c9b0" : "#2a2a2a",
  cardCorner:    "#C3A87C",            // warm tan corner accents
  // Inner white panel (form)
  panelBg:       isLight ? "#ffffff" : "#1a1a1a",
  panelText:     isLight ? "#001932" : "#FFF4E3",
  panelSub:      isLight ? "#9a9384" : "#8a8a8a",
  panelLabel:    isLight ? "#9a9384" : "#8a8a8a",
  pillBorder:    isLight ? "#e3ddd0" : "#2a2a2a",
  pillText:      isLight ? "#3a3a3a" : "#BBC0C6",
  pillBg:        isLight ? "#ffffff" : "#161616",
  // Gold / tan accent
  gold:          "#C3A87C",
  goldSoftBg:    "rgba(195,168,124,0.14)",
  // Caption
  captionTitle:  isLight ? "#001932" : "#FFF4E3",
  captionBody:   isLight ? "#4a4a6a" : "#BBC0C6",
  // Placeholder
  placeholderBg: isLight ? "#ece3d4" : "#222",
  placeholderFg: isLight ? "#b6a98f" : "#555",
  // Phone chrome
  chromeBg:      isLight ? "#ffffff" : "#1a1a1a",
  chromeBorder:  isLight ? "#e3ddd0" : "#2a2a2a",
  phoneIcon:     "#2F6FE4",            // blue action icons in the top bar
  toggleBg:      isLight ? "#E9EFFB" : "#1e2a44",
  toggleIcon:    "#2F6FE4",
  addressBg:     isLight ? "#f3ede2" : "#222",
  addressText:   isLight ? "#6a6356" : "#BBC0C6",
});

const nasal = { fontFamily: "Prompt" };

// ── Corner brackets for the mockup cards ─────────────────────────────────────
const CardCorners: FC<{ color: string }> = ({ color }) => (
  <>
    <Box sx={{ position: "absolute", top: "12px", left: "12px", width: "16px", height: "16px", borderTop: `1.5px solid ${color}`, borderLeft: `1.5px solid ${color}` }} />
    <Box sx={{ position: "absolute", top: "12px", right: "12px", width: "16px", height: "16px", borderTop: `1.5px solid ${color}`, borderRight: `1.5px solid ${color}` }} />
    <Box sx={{ position: "absolute", bottom: "12px", left: "12px", width: "16px", height: "16px", borderBottom: `1.5px solid ${color}`, borderLeft: `1.5px solid ${color}` }} />
    <Box sx={{ position: "absolute", bottom: "12px", right: "12px", width: "16px", height: "16px", borderBottom: `1.5px solid ${color}`, borderRight: `1.5px solid ${color}` }} />
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

// ── Shared framed-mockup-card styling ─────────────────────────────────────────
// `ratio` (set per card) keeps the card's width:height proportion as it scales.
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
});

// ── Case-study caption (title + body) ─────────────────────────────────────────
const Caption: FC<{ T: ReturnType<typeof getTokens>; title: string; body: string }> = ({ T, title, body }) => (
  <>
    <Typography sx={{ ...nasal, fontSize: { xs: "18px", sm: "20px" }, fontWeight: 500, color: T.captionTitle, mb: "10px" }}>
      {title}
    </Typography>
    <Typography sx={{ fontSize: "14px", color: T.captionBody, lineHeight: 1.75, width: "100%" }}>
      {body}
    </Typography>
  </>
);

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
        <Typography sx={{
          fontSize: "11px", color: T.eyebrow,
          letterSpacing: "0.08em", textTransform: "uppercase",
          fontWeight: 600, mb: "16px", transition: "color 0.4s ease",
        }}>
          ✦ Case Studies
        </Typography>
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
          <LazyVideo src={outfitVideo} radius="10px" T={T} />
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
            <LazyVideo src={arTileVideo} radius="10px" T={T} />
          </Box>
        </Box>

        {/* Captions — 28px below the bottom-aligned cards */}
        <Box sx={{ gridArea: "ocap", mt: "28px" }}>
          <Caption
            T={T}
            title="AI-Powered Outfit"
            body="AI analyzes user preferences, wardrobe selections, and style inputs to generate curated outfit combinations tailored to individual fashion choices and occasions."
          />
        </Box>
        <Box sx={{ gridArea: "fcap", mt: "28px" }}>
          <Caption
            T={T}
            title="Floor Visualization"
            body="Customers take a photo of their room, and AR-Tile finds the best flooring match."
          />
        </Box>
      </Box>
    </Box>
  );
};

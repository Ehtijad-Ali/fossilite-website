import { FC, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useSharedTokens } from "../../theme/sharedTokens";
import { FONT_DISPLAY } from "../../theme/fonts";
import { PageHero } from "../../components";
import { useInView } from "../../hooks/useInView";
import {
  GUIDES,
  TRACKS,
  activeCategories,
  categoryBySlug,
  categoryName,
  plateNumber,
  searchGuides,
  PROMPTS,
} from "../../content";
import type { Guide, Track } from "../../content/types";
import { useSeo, collectionSchema, breadcrumbSchema } from "../../hooks/useSeo";
import { GuideHero } from "./GuidePlate";

const MONO = 'ui-monospace, SFMono-Regular, Menlo, "Roboto Mono", monospace';
type T = ReturnType<typeof useSharedTokens>;

const LEVEL_TINT: Record<Guide["level"], string> = {
  Beginner: "#5E9E92",
  Intermediate: "#C3A87C",
  Advanced: "#C08A5E",
};

const GOLD = "#C3A87C";

/**
 * Guide card, styled as a monograph specimen plate to match the site's
 * archaeological register: hairline rules, a plate number, corner brackets that
 * resolve on hover, and a gold filament that draws across the top edge.
 *
 * The restraint is deliberate — one accent colour, one gold hairline, generous
 * negative space. Everything animates from a single hover state on the parent
 * so the card reads as one object rather than a set of reacting parts.
 */
const GuideCard: FC<{ g: Guide; index: number; T: T }> = ({ g, index, T }) => {
  const { ref, visible } = useInView(0.1);
  const plate = plateNumber(g.slug);

  return (
    <Box
      ref={ref}
      component={Link}
      to={`/resources/${g.slug}`}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        overflow: "hidden",
        p: 0,
        borderRadius: "18px",
        border: `0.5px solid ${T.border}`,
        // A whisper of warmth in the corner rather than a flat fill — reads as
        // paper stock under raking light instead of a UI panel.
        backgroundColor: T.cardBg,
        backgroundImage: T.isDark
          ? "radial-gradient(120% 100% at 0% 0%, rgba(195,168,124,0.07) 0%, transparent 58%)"
          : "radial-gradient(120% 100% at 0% 0%, rgba(195,168,124,0.13) 0%, transparent 58%)",
        boxShadow: T.boxShadow,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${(index % 3) * 90}ms,
                     transform 0.6s cubic-bezier(0.22,1,0.36,1) ${(index % 3) * 90}ms,
                     border-color 0.35s ease, box-shadow 0.35s ease`,

        // Gold filament that draws left-to-right across the top edge on hover.
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "18px",
          right: "18px",
          height: "1px",
          background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
          transform: "scaleX(0)",
          transformOrigin: "left center",
          transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
        },

        "&:hover": {
          borderColor: T.isDark ? "rgba(195,168,124,0.42)" : "rgba(195,168,124,0.75)",
          transform: "translateY(-4px)",
          boxShadow: T.isDark
            ? "0 26px 56px rgba(0,0,0,0.5), 0 0 0 1px rgba(195,168,124,0.08)"
            : "0 26px 56px rgba(0,25,50,0.13), 0 2px 10px rgba(0,25,50,0.05)",
          "&::before": { transform: "scaleX(1)" },
          "& .gc-bracket": { opacity: 1 },
          "& .gc-title": { color: GOLD },
          "& .gc-arrow": { transform: "translateX(4px)" },
          "& .gc-rule": { width: "100%" },
        },
      }}
    >
      {/* Corner brackets — the specimen-plate tell, resolved only on hover */}
      {[
        { top: "10px", right: "10px", borderTop: `1px solid ${GOLD}`, borderRight: `1px solid ${GOLD}` },
        { bottom: "10px", left: "10px", borderBottom: `1px solid ${GOLD}`, borderLeft: `1px solid ${GOLD}` },
      ].map((pos, i) => (
        <Box
          key={i}
          className="gc-bracket"
          sx={{
            position: "absolute",
            width: "12px",
            height: "12px",
            opacity: 0,
            pointerEvents: "none",
            transition: "opacity 0.4s ease",
            ...pos,
          }}
        />
      ))}

      {/* Generated plate art — square-topped so it meets the card edge cleanly */}
      <Box
        sx={{
          "& > *": {
            borderRadius: 0,
            border: "none",
            borderBottom: `0.5px solid ${T.border}`,
            boxShadow: "none",
          },
        }}
      >
        <GuideHero guide={g} height="150px" />
      </Box>

      <Box sx={{ p: { xs: "20px 22px 18px", md: "22px 26px 20px" }, display: "flex", flexDirection: "column", flex: 1 }}>
      {/* Plate number + classification */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px", mb: "16px" }}>
        <Typography
          sx={{
            fontFamily: MONO, fontSize: "9.5px", letterSpacing: "0.16em",
            color: GOLD, flexShrink: 0,
          }}
        >
          PL. {plate}
        </Typography>
        <Box sx={{ width: "14px", height: "0.5px", backgroundColor: T.border, flexShrink: 0 }} />
        <Typography
          noWrap
          sx={{
            fontFamily: MONO, fontSize: "9.5px", letterSpacing: "0.11em",
            textTransform: "uppercase", color: T.mutedText, minWidth: 0,
          }}
        >
          {categoryName(g.category)}
        </Typography>
      </Box>

      {/* Title — display serif, the one place the card raises its voice */}
      <Typography
        component="h3"
        className="gc-title"
        sx={{
          fontSize: { xs: "21px", md: "23px" },
          fontWeight: 500,
          fontFamily: FONT_DISPLAY,
          color: T.headline,
          lineHeight: 1.16,
          letterSpacing: "-0.02em",
          mb: "12px",
          transition: "color 0.3s ease",
        }}
      >
        {g.title}
      </Typography>

      {/* Hairline that extends on hover */}
      <Box
        className="gc-rule"
        sx={{
          width: "34px", height: "0.5px", backgroundColor: GOLD, opacity: 0.5, mb: "14px",
          transition: "width 0.6s cubic-bezier(0.22,1,0.36,1)",
        }}
      />

      <Typography sx={{ fontSize: "14px", lineHeight: 1.72, color: T.secondaryText, flex: 1, mb: "20px" }}>
        {g.metaDescription}
      </Typography>

      {/* Footer — level, reading time, affordance */}
      <Box
        sx={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          gap: "12px", pt: "15px", borderTop: `0.5px solid ${T.border}`,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px", minWidth: 0 }}>
          <Box
            sx={{
              width: "5px", height: "5px", borderRadius: "50%", flexShrink: 0,
              backgroundColor: LEVEL_TINT[g.level],
              boxShadow: `0 0 0 2.5px ${LEVEL_TINT[g.level]}22`,
            }}
          />
          <Typography noWrap sx={{ fontFamily: MONO, fontSize: "9.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: T.mutedText }}>
            {g.level} · {g.readingTime} min
          </Typography>
        </Box>
        <Typography
          className="gc-arrow"
          sx={{
            fontSize: "13px", color: GOLD, fontFamily: "Prompt", fontWeight: 500,
            flexShrink: 0, transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          Read →
        </Typography>
      </Box>
      </Box>
    </Box>
  );
};

/**
 * The track switch: the primary filter, and the one this page was missing.
 *
 * Everything used to be one flat row of thirty-two category pills, which is a
 * wall rather than a filter. Tracks narrow the library to a field first, and
 * the category pills below then only offer what is inside it.
 *
 * The indicator is measured rather than assumed to be an equal fraction of the
 * width: "All" and "AI & Engineering" are very different lengths, and equal
 * segments would leave one cramped and the other swimming. It re-measures on
 * resize and after fonts load, since a webfont swap changes every width.
 */
const TrackSwitch: FC<{
  value: Track | "all";
  onChange: (t: Track | "all") => void;
  counts: Map<string, number>;
  total: number;
  T: ReturnType<typeof useSharedTokens>;
}> = ({ value, onChange, counts, total, T }) => {
  const options: { key: Track | "all"; label: string; count: number }[] = [
    { key: "all", label: "All", count: total },
    ...TRACKS.map((tr) => ({ key: tr as Track | "all", label: tr, count: counts.get(tr) ?? 0 })),
  ];
  const activeIdx = Math.max(0, options.findIndex((o) => o.key === value));
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const [ind, setInd] = useState({ left: 0, width: 0, ready: false });

  // Layout effect, so the indicator is in place on the first paint rather than
  // visibly sliding in from zero the moment the page appears.
  useLayoutEffect(() => {
    const measure = () => {
      const el = refs.current[activeIdx];
      if (el) setInd({ left: el.offsetLeft, width: el.offsetWidth, ready: true });
    };
    measure();
    window.addEventListener("resize", measure);
    // A webfont swapping in changes every label width under the indicator.
    const fonts = (document as Document & { fonts?: FontFaceSet }).fonts;
    fonts?.ready?.then(measure).catch(() => {});
    return () => window.removeEventListener("resize", measure);
  }, [activeIdx, options.length]);

  return (
    <Box
      role="tablist"
      aria-label="Filter by track"
      sx={{
        position: "relative", display: "inline-flex", alignItems: "center", gap: "2px",
        p: "5px", borderRadius: "13px",
        border: `0.5px solid ${T.border}`, backgroundColor: T.surfaceSubtle,
        overflowX: "auto", maxWidth: "100%",
        "&::-webkit-scrollbar": { display: "none" }, scrollbarWidth: "none",
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute", top: "5px", bottom: "5px",
          left: `${ind.left}px`, width: `${ind.width}px`,
          borderRadius: "9px", backgroundColor: T.cardBg,
          border: `0.5px solid ${GOLD}66`,
          boxShadow: T.isDark ? "0 2px 12px rgba(0,0,0,0.35)" : "0 2px 10px rgba(0,25,50,0.08)",
          opacity: ind.ready ? 1 : 0,
          transition: "left 0.42s cubic-bezier(0.22,1,0.36,1), width 0.42s cubic-bezier(0.22,1,0.36,1), opacity 0.2s ease",
          pointerEvents: "none",
        }}
      />
      {options.map((o, i) => {
        const active = o.key === value;
        return (
          <Box
            key={o.key}
            component="button"
            type="button"
            role="tab"
            aria-selected={active}
            ref={(el: HTMLButtonElement | null) => { refs.current[i] = el; }}
            onClick={() => onChange(o.key)}
            sx={{
              position: "relative", zIndex: 1, whiteSpace: "nowrap",
              display: "inline-flex", alignItems: "center", gap: "8px",
              px: { xs: "13px", md: "17px" }, py: "9px", borderRadius: "9px",
              border: "none", background: "none", cursor: "pointer", font: "inherit",
              fontFamily: "Prompt", fontSize: { xs: "12.5px", md: "13.5px" },
              fontWeight: active ? 600 : 500,
              color: active ? T.headline : T.secondaryText,
              transition: "color 0.25s ease",
              "&:hover": { color: T.primaryText },
            }}
          >
            {o.label}
            <Box
              component="span"
              sx={{
                fontFamily: MONO, fontSize: "9.5px",
                color: active ? GOLD : T.mutedText, transition: "color 0.25s ease",
              }}
            >
              {o.count}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

/**
 * The Resource Library index. Also serves /resources/category/:category — the
 * same view scoped to one category, which keeps filtering behaviour identical
 * between the browse and the crawlable category URLs.
 */
export const Resources: FC = () => {
  const T = useSharedTokens();
  const { category: routeCategory } = useParams();
  const scoped = routeCategory ? categoryBySlug(routeCategory) : undefined;

  const [category, setCategory] = useState<string>(routeCategory ?? "all");
  const [track, setTrack] = useState<Track | "all">("all");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(9);
  const [subEmail, setSubEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const cats = useMemo(() => activeCategories(), []);
  const trackOf = useMemo(() => new Map(cats.map((c) => [c.slug, c.track])), [cats]);

  /** Only the categories inside the chosen track. Thirty-two pills in one flat
   *  row is not a filter, it is a wall, so the track narrows it first. */
  const catsInTrack = useMemo(
    () => (track === "all" ? cats : cats.filter((c) => c.track === track)),
    [cats, track],
  );

  const trackCounts = useMemo(() => {
    const m = new Map<string, number>();
    for (const g of GUIDES) {
      const tr = trackOf.get(g.category);
      if (tr) m.set(tr, (m.get(tr) ?? 0) + 1);
    }
    return m;
  }, [trackOf]);

  const filtered = useMemo(() => {
    let pool = GUIDES;
    if (track !== "all") pool = pool.filter((g) => trackOf.get(g.category) === track);
    if (category !== "all") pool = pool.filter((g) => g.category === category);
    return searchGuides(query, pool);
  }, [track, category, query, trackOf]);

  /** Landing on /resources/category/:slug should select that category's track
   *  too, or the pill row would show a category the track filter excludes. */
  useEffect(() => {
    if (routeCategory) {
      const tr = trackOf.get(routeCategory);
      if (tr) setTrack(tr);
      setCategory(routeCategory);
    }
  }, [routeCategory, trackOf]);

  const pickTrack = (next: Track | "all") => {
    setTrack(next);
    setCategory("all");
    setVisible(9);
  };

  const shown = filtered.slice(0, visible);
  const hasEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(subEmail.trim());

  const title = scoped
    ? `${scoped.name} Guides: Fossilite Resource Library`
    : "Resource Library: Free Guides on AI, Business & Skills";
  const description = scoped
    ? `${scoped.blurb} Free, in-depth guides with worked examples, exercises and checklists.`
    : "In-depth, free guides on artificial intelligence, machine learning, business and personal skills — written to teach, not to fill a page.";
  const path = scoped ? `/resources/category/${scoped.slug}` : "/resources";

  useSeo({
    title,
    description,
    path,
    jsonLd: [
      collectionSchema(title, description, path),
      breadcrumbSchema(
        scoped
          ? [
              { name: "Resources", path: "/resources" },
              { name: scoped.name, path },
            ]
          : [{ name: "Resources", path: "/resources" }],
      ),
    ],
  });

  return (
    <Box sx={{ backgroundColor: T.bg }}>
      <PageHero
        eyebrow={scoped ? scoped.name : "Resource Library"}
        title={scoped ? scoped.name : "Learn it"}
        titleAccent={scoped ? "" : "properly."}
        subtitle={
          scoped
            ? scoped.blurb
            : "Free, in-depth guides on AI, business and the skills that compound. Every one is written to teach something you can use this week — no filler, no gated PDFs."
        }
      />

      {/* Library stats */}
      <Box sx={{ px: { xs: "24px", sm: "48px", lg: "80px" }, pt: { xs: "40px", md: "56px" } }}>
        <Box
          sx={{
            maxWidth: "1180px", mx: "auto", display: "flex", flexWrap: "wrap",
            gap: { xs: "26px", md: "56px" }, pb: "32px", borderBottom: `0.5px solid ${T.border}`,
          }}
        >
          {[
            ["Guides", String(GUIDES.length)],
            ["Categories", String(cats.length)],
            ["Prompts", String(PROMPTS.length)],
            ["Price", "Free"],
          ].map(([k, v]) => (
            <Box key={k}>
              <Typography sx={{ fontSize: { xs: "26px", md: "32px" }, fontWeight: 500, fontFamily: FONT_DISPLAY, color: T.headline, lineHeight: 1 }}>
                {v}
              </Typography>
              <Typography sx={{ fontFamily: MONO, fontSize: "9.5px", letterSpacing: "0.12em", textTransform: "uppercase", color: T.mutedText, mt: "6px" }}>
                {k}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* The other door into the library: by symptom rather than by subject.
          Sits above the track browse because somebody who does not already know
          the vocabulary needs it more than the taxonomy. */}
      {!scoped && (
        <Box sx={{ px: { xs: "24px", sm: "48px", lg: "80px" }, pt: { xs: "40px", md: "52px" } }}>
          <Box
            component={Link}
            to="/resources/problems"
            sx={{
              maxWidth: "1180px", mx: "auto", display: "flex", alignItems: "center",
              justifyContent: "space-between", gap: "24px", flexWrap: "wrap",
              p: { xs: "22px", md: "28px 32px" }, borderRadius: "16px", textDecoration: "none",
              border: `0.5px solid ${GOLD}55`,
              background: T.isDark
                ? "linear-gradient(120deg, rgba(195,168,124,0.10), rgba(195,168,124,0.02))"
                : "linear-gradient(120deg, rgba(195,168,124,0.15), rgba(195,168,124,0.03))",
              transition: "border-color 0.3s ease, transform 0.3s ease",
              "&:hover": { borderColor: GOLD, transform: "translateY(-2px)" },
              "&:hover .pb-arrow": { transform: "translateX(4px)" },
            }}
          >
            <Box sx={{ flex: "1 1 420px" }}>
              <Typography sx={{ fontFamily: MONO, fontSize: "9.5px", letterSpacing: "0.14em", textTransform: "uppercase", color: GOLD, mb: "10px" }}>
                Not sure where to start?
              </Typography>
              <Typography sx={{ fontSize: { xs: "20px", md: "25px" }, fontWeight: 500, fontFamily: FONT_DISPLAY, color: T.headline, lineHeight: 1.2, letterSpacing: "-0.02em", mb: "8px" }}>
                Start with the problem, not the topic
              </Typography>
              <Typography sx={{ fontSize: "14.5px", lineHeight: 1.7, color: T.secondaryText, maxWidth: "56ch" }}>
                Cash tight while you are busy. Customers leaving. Forecasts always wrong.
                Twelve problems businesses actually have, and where to read about each.
              </Typography>
            </Box>
            <Typography className="pb-arrow" sx={{ color: GOLD, fontSize: "22px", transition: "transform 0.3s ease", flexShrink: 0 }}>
              →
            </Typography>
          </Box>
        </Box>
      )}

      {/* The track browse that used to sit here is gone. It listed all 32
          categories grouped by track, which the track switch below now does
          in a fraction of the space and with live filtering rather than a
          page load per category. The crawlable /resources/category/:slug
          routes still exist and are still in the sitemap. */}
      {/* Filter + search */}
      <Box sx={{ px: { xs: "24px", sm: "48px", lg: "80px" }, pt: { xs: "28px", md: "40px" } }}>
        <Box sx={{ maxWidth: "1180px", mx: "auto" }}>
          <Box
            sx={{
              display: "flex", flexDirection: { xs: "column", lg: "row" },
              justifyContent: "space-between", alignItems: { xs: "stretch", lg: "center" },
              gap: "18px", mb: "22px",
            }}
          >
            <TrackSwitch
              value={track}
              onChange={pickTrack}
              counts={trackCounts}
              total={GUIDES.length}
              T={T}
            />

            <Box
              sx={{
                display: "flex", alignItems: "center", gap: "9px", px: "15px", py: "11px",
                borderRadius: "11px", border: `0.5px solid ${T.border}`, backgroundColor: T.cardBg,
                minWidth: { lg: "260px" }, transition: "border-color 0.25s ease",
                "&:focus-within": { borderColor: GOLD },
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke={T.secondaryText} strokeWidth="1.7" />
                <path d="m20 20-3.2-3.2" stroke={T.secondaryText} strokeWidth="1.7" strokeLinecap="round" />
              </svg>
              <Box
                component="input"
                value={query}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setQuery(e.target.value); setVisible(9); }}
                placeholder="Search guides…"
                sx={{
                  flex: 1, border: "none", outline: "none", background: "transparent",
                  color: T.primaryText, fontSize: "13.5px", fontFamily: "Prompt",
                  "&::placeholder": { color: T.placeholder },
                }}
              />
              {query ? (
                <Box
                  component="button"
                  type="button"
                  onClick={() => { setQuery(""); setVisible(9); }}
                  aria-label="Clear search"
                  sx={{
                    border: "none", background: "none", cursor: "pointer", p: 0, lineHeight: 1,
                    color: T.mutedText, fontSize: "15px", "&:hover": { color: GOLD },
                  }}
                >
                  ×
                </Box>
              ) : null}
            </Box>
          </Box>

          {/* Categories, narrowed to the chosen track. Keyed on the track so the
              row re-animates when it changes, which makes it obvious that the
              list underneath is now a different set. */}
          <Box key={track} sx={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
            {[
              {
                slug: "all",
                name: track === "all" ? "Everything" : "All of this track",
                // The track total, NOT `filtered.length` — that already has the
                // category filter applied, so this pill would count whichever
                // category happened to be selected.
                count: track === "all" ? GUIDES.length : (trackCounts.get(track) ?? 0),
              },
              ...catsInTrack,
            ].map((c, i) => {
              const active = category === c.slug;
              return (
                <Box
                  key={c.slug}
                  component="button"
                  type="button"
                  onClick={() => { setCategory(c.slug); setVisible(9); }}
                  sx={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    px: "14px", py: "8px", borderRadius: "99px", cursor: "pointer",
                    font: "inherit", fontFamily: "Prompt", fontSize: "13px", fontWeight: 500,
                    border: `0.5px solid ${active ? "transparent" : T.border}`,
                    backgroundColor: active ? T.ctaPrimaryBg : "transparent",
                    color: active ? T.ctaPrimaryText : T.secondaryText,
                    animation: `pillIn 420ms cubic-bezier(0.22,1,0.36,1) ${Math.min(i, 10) * 26}ms both`,
                    "@keyframes pillIn": {
                      from: { opacity: 0, transform: "translateY(6px)" },
                      to: { opacity: 1, transform: "none" },
                    },
                    transition: "background-color 0.22s ease, color 0.22s ease, border-color 0.22s ease",
                    "&:hover": active ? {} : { borderColor: GOLD, color: T.primaryText },
                  }}
                >
                  {c.name}
                  <Box
                    component="span"
                    sx={{
                      fontFamily: MONO, fontSize: "10px",
                      color: active ? T.ctaPrimaryText : T.mutedText, opacity: active ? 0.7 : 1,
                    }}
                  >
                    {c.count}
                  </Box>
                </Box>
              );
            })}
          </Box>

          <Typography sx={{ fontFamily: MONO, fontSize: "10.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: T.mutedText, mt: "20px" }}>
            {filtered.length} {filtered.length === 1 ? "guide" : "guides"}
            {track !== "all" ? ` in ${track}` : ""}
            {query ? ` matching “${query}”` : ""}
          </Typography>
        </Box>
      </Box>

      {/* Grid */}
      <Box sx={{ px: { xs: "24px", sm: "48px", lg: "80px" }, py: { xs: "32px", md: "44px" } }}>
        <Box sx={{ maxWidth: "1180px", mx: "auto" }}>
          {shown.length > 0 ? (
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" }, gap: { xs: "18px", md: "22px" } }}>
              {shown.map((g, i) => <GuideCard key={g.slug} g={g} index={i} T={T} />)}
            </Box>
          ) : (
            <Box sx={{ textAlign: "center", py: "60px" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: 600, color: T.headline, fontFamily: "Prompt", mb: "8px" }}>
                No guides match that yet
              </Typography>
              <Typography sx={{ fontSize: "14px", color: T.secondaryText }}>
                Try another category or search term — the library is growing every week.
              </Typography>
            </Box>
          )}

          {visible < filtered.length && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: { xs: "32px", md: "44px" } }}>
              <Button
                onClick={() => setVisible((v) => v + 6)}
                sx={{
                  px: "26px", py: "12px", borderRadius: "9px", textTransform: "none",
                  border: `0.5px solid ${T.ctaSecBorder}`, color: T.primaryText,
                  fontSize: "14px", fontWeight: 500,
                  transition: "border-color 0.2s ease, transform 0.2s ease",
                  "&:hover": { borderColor: "#C3A87C", transform: "translateY(-2px)" },
                }}
              >
                Load more guides
              </Button>
            </Box>
          )}
        </Box>
      </Box>

      {/* Subscribe */}
      <Box sx={{ px: { xs: "24px", sm: "48px", lg: "80px" }, pb: { xs: "80px", md: "120px" }, pt: { xs: "16px", md: "24px" } }}>
        <Box
          sx={{
            maxWidth: "1180px", mx: "auto", borderRadius: "24px",
            border: `1px solid ${T.gridBorder}`, backgroundColor: T.cardBgAlt,
            boxShadow: T.boxShadow, p: { xs: "36px 26px", md: "56px" }, textAlign: "center",
          }}
        >
          <Typography sx={{ fontSize: { xs: "26px", sm: "34px" }, fontWeight: 600, color: T.headline, fontFamily: FONT_DISPLAY, letterSpacing: "-0.02em", mb: "12px" }}>
            New guides, once a month
          </Typography>
          <Typography sx={{ fontSize: "15px", color: T.secondaryText, lineHeight: 1.7, maxWidth: "440px", mx: "auto", mb: "28px" }}>
            One email when new guides land. No drip sequences, no gated downloads, unsubscribe anytime.
          </Typography>

          {subscribed ? (
            <Box sx={{ display: "inline-flex", alignItems: "center", gap: "10px", px: "20px", py: "13px", borderRadius: "10px", border: "0.5px solid #C3A87C", backgroundColor: T.cardBg }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M20 6 9 17l-5-5" stroke="#C3A87C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <Typography sx={{ fontSize: "14px", color: T.headline, fontFamily: "Prompt" }}>You're subscribed — thanks!</Typography>
            </Box>
          ) : (
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: "10px", maxWidth: "440px", mx: "auto" }}>
              <Box
                component="input"
                value={subEmail}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubEmail(e.target.value)}
                onKeyDown={(e: React.KeyboardEvent) => { if (e.key === "Enter" && hasEmail) setSubscribed(true); }}
                placeholder="your@email.com"
                type="email"
                sx={{
                  flex: 1, px: "16px", py: "13px", borderRadius: "9px",
                  border: `0.5px solid ${T.inputBorder}`, backgroundColor: T.cardBg,
                  color: T.inputText, fontSize: "14px", fontFamily: "Prompt", outline: "none",
                  "&:focus": { borderColor: "#C3A87C" }, "&::placeholder": { color: T.placeholder },
                }}
              />
              <Button
                onClick={() => { if (hasEmail) setSubscribed(true); }}
                sx={{
                  px: "24px", py: "13px", borderRadius: "9px", textTransform: "none",
                  backgroundColor: T.ctaPrimaryBg, color: T.ctaPrimaryText, fontSize: "14px", fontWeight: 500,
                  transition: "background-color 0.25s ease, transform 0.2s ease",
                  "&:hover": { backgroundColor: T.ctaPrimaryHover, transform: "translateY(-2px)" },
                }}
              >
                Subscribe
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Resources;

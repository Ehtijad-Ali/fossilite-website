import { FC, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useSharedTokens } from "../../theme/sharedTokens";
import { FONT_DISPLAY } from "../../theme/fonts";
import { PageHero } from "../../components";

// ── Content model ─────────────────────────────────────────────────────────────
export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] };

export interface LegalSection {
  id: string;
  heading: string;
  blocks: LegalBlock[];
}

interface LegalLayoutProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

// Elegant, consistent layout for standalone legal documents. A sticky table of
// contents on the left (desktop) tracks the section in view; the article column
// renders headed prose and lists using the shared design tokens.
export const LegalLayout: FC<LegalLayoutProps> = ({
  eyebrow, title, titleAccent, subtitle, updated, intro, sections,
}) => {
  const T = useSharedTokens();
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ backgroundColor: T.bg }}>
      <PageHero eyebrow={eyebrow} title={title} titleAccent={titleAccent} subtitle={subtitle} />

      <Box sx={{ px: { xs: "24px", sm: "48px", lg: "80px" }, py: { xs: "56px", md: "88px" } }}>
        <Box
          sx={{
            maxWidth: "1120px",
            mx: "auto",
            display: "grid",
            // minmax(0, …) so a long unbreakable string — a URL in the policy
            // text — can't widen the column past the viewport. `1fr` alone
            // means `minmax(auto, 1fr)`, whose auto minimum is min-content.
            gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "240px minmax(0, 1fr)" },
            gap: { xs: "40px", md: "64px" },
            alignItems: "start",
          }}
        >
          {/* ── Table of contents (sticky on desktop) ── */}
          <Box
            component="nav"
            aria-label="On this page"
            sx={{
              display: { xs: "none", md: "block" },
              position: "sticky",
              top: "104px",
            }}
          >
            <Typography sx={{ fontSize: "11px", color: T.eyebrow, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700, mb: "16px" }}>
              On this page
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {sections.map((s) => {
                const active = activeId === s.id;
                return (
                  <Box
                    key={s.id}
                    component="button"
                    type="button"
                    onClick={() => scrollTo(s.id)}
                    sx={{
                      textAlign: "left", cursor: "pointer", font: "inherit", fontFamily: "Prompt",
                      border: "none", background: "transparent",
                      display: "flex", alignItems: "center", gap: "10px",
                      py: "7px", pl: "2px",
                      color: active ? T.headline : T.secondaryText,
                      fontSize: "13.5px", fontWeight: active ? 600 : 400,
                      transition: "color 0.2s ease",
                      "&:hover": { color: T.headline },
                    }}
                  >
                    <Box
                      sx={{
                        width: active ? "16px" : "8px",
                        height: "1.5px", borderRadius: "2px", flexShrink: 0,
                        backgroundColor: active ? T.accent : T.border,
                        transition: "width 0.25s ease, background-color 0.25s ease",
                      }}
                    />
                    {s.heading}
                  </Box>
                );
              })}
            </Box>
          </Box>

          {/* ── Article ── */}
          <Box sx={{ maxWidth: "720px" }}>
            {/* Last updated pill */}
            <Box
              sx={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                border: `0.5px solid ${T.border}`, borderRadius: "99px",
                px: "14px", py: "6px", mb: "28px", backgroundColor: T.cardBg,
              }}
            >
              <Box sx={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: T.accent }} />
              <Typography sx={{ fontSize: "12px", color: T.secondaryText, letterSpacing: "0.02em" }}>
                Last updated {updated}
              </Typography>
            </Box>

            {/* Intro */}
            <Typography sx={{ fontSize: { xs: "16px", sm: "18px" }, color: T.headline, lineHeight: 1.8, fontFamily: "Prompt", mb: { xs: "40px", md: "56px" }, fontWeight: 400 }}>
              {intro}
            </Typography>

            {/* Sections */}
            {sections.map((s, i) => (
              <Box
                key={s.id}
                id={s.id}
                sx={{
                  mb: { xs: "40px", md: "52px" },
                  scrollMarginTop: "104px",
                  "&:last-of-type": { mb: 0 },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "baseline", gap: "12px", mb: "16px" }}>
                  <Typography sx={{ fontSize: "13px", color: T.accent, fontFamily: "Prompt", fontWeight: 600, lineHeight: 1.3, flexShrink: 0 }}>
                    {String(i + 1).padStart(2, "0")}
                  </Typography>
                  <Typography component="h2" sx={{ fontSize: { xs: "20px", sm: "24px" }, fontWeight: 600, color: T.headline, fontFamily: FONT_DISPLAY, letterSpacing: "-0.01em", lineHeight: 1.3 }}>
                    {s.heading}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {s.blocks.map((b, bi) =>
                    b.type === "p" ? (
                      <Typography key={bi} sx={{ fontSize: "15px", color: T.secondaryText, lineHeight: 1.85 }}>
                        {b.text}
                      </Typography>
                    ) : (
                      <Box key={bi} component="ul" sx={{ listStyle: "none", m: 0, pl: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                        {b.items.map((item, ii) => (
                          <Box key={ii} component="li" sx={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                            <Box sx={{ width: "16px", height: "16px", borderRadius: "5px", border: `0.5px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, mt: "3px" }}>
                              <Box sx={{ width: "5px", height: "5px", borderRadius: "1.5px", backgroundColor: T.accent }} />
                            </Box>
                            <Typography sx={{ fontSize: "15px", color: T.secondaryText, lineHeight: 1.7 }}>{item}</Typography>
                          </Box>
                        ))}
                      </Box>
                    ),
                  )}
                </Box>
              </Box>
            ))}

            {/* Footer note */}
            <Box sx={{ mt: { xs: "48px", md: "64px" }, pt: "28px", borderTop: `0.5px solid ${T.border}` }}>
              <Typography sx={{ fontSize: "13.5px", color: T.secondaryText, lineHeight: 1.75 }}>
                Questions about this document? Email{" "}
                <Box component="a" href="mailto:hello@fossilite.ai" sx={{ color: T.headline, textDecoration: "none", fontWeight: 500, "&:hover": { color: T.accent } }}>
                  hello@fossilite.ai
                </Box>{" "}
                and a member of our team will help.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LegalLayout;

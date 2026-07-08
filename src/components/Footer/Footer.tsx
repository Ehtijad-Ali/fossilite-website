import { FC, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import logoLight from "../../assets/FossiliteLogoNavy.svg";
import logoDark from "../../assets/FossiliteLogo.svg";
import { useSharedTokens } from "../../theme/sharedTokens";
import {
  RightArrow,
  FacebookIcon,
  InstagramIcon,
  XIcon,
  LinkedInIcon,
} from "../../assets/Icons";
import { scrollToSection } from "../../utils/scrollToSection";
import fossiliteWordmark from "../../assets/Images/Featured/Fossilite.svg";

// ─── Data ─────────────────────────────────────────────────────────────────────
// A link is either a route (`to`) or an in-page section (`id`). Section links
// scroll to the matching element id — the same ids the Navbar uses — so the
// footer "Company" links behave identically to the header.

type NavLink = { label: string; to?: string; id?: string };
type NavGroup = { label: string; links: NavLink[] };

const NAV_GROUPS: NavGroup[] = [
  {
    label: "Company",
    links: [
      { label: "About Us",  id: "about"     },
      { label: "Products",  id: "products"  },
      { label: "Solutions", id: "solutions" },
      { label: "Resources", id: "resources" },
      { label: "Use Cases", id: "use-cases" },
    ],
  },
];

const SOCIAL_ITEMS = [
  { key: "facebook", label: "Facebook",  href: "https://facebook.com",  Icon: FacebookIcon  },
  { key: "linkedin", label: "LinkedIn",  href: "https://linkedin.com",  Icon: LinkedInIcon  },
  { key: "x",        label: "X",         href: "https://twitter.com",   Icon: XIcon         },
  { key: "insta",    label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

interface FooterLinkProps {
  link: NavLink;
  T: ReturnType<typeof useSharedTokens>;
  onSectionClick: (id: string) => void;
}
const FooterLink: FC<FooterLinkProps> = ({ link, T, onSectionClick }) => {
  const linkSx = {
    fontSize: "13px",
    color: T.linkColor,
    textDecoration: "none",
    lineHeight: 1,
    letterSpacing: "0.01em",
    transition: "color 0.2s ease",
    "&:hover": { color: T.linkHover },
  } as const;

  // In-page section link — scrolls just like the Navbar buttons.
  if (link.id) {
    return (
      <Box
        component="button"
        type="button"
        onClick={() => onSectionClick(link.id!)}
        sx={{
          ...linkSx,
          alignSelf: "flex-start", // shrink to text width so only the text is clickable
          textAlign: "left",
          p: 0,
          border: "none",
          background: "none",
          cursor: "pointer",
          font: "inherit",
        }}
      >
        {link.label}
      </Box>
    );
  }

  // Route link.
  return (
    <Box component={RouterLink} to={link.to!} sx={linkSx}>
      {link.label}
    </Box>
  );
};

interface ColLabelProps { children: string; T: ReturnType<typeof useSharedTokens> }
const ColLabel: FC<ColLabelProps> = ({ children, T }) => (
  <Typography sx={{
    fontSize: "10px",
    fontWeight: 600,
    color: T.colLabel,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    mb: "4px",
    transition: "color 0.4s ease",
  }}>
    {children}
  </Typography>
);

// ─── Main Footer ──────────────────────────────────────────────────────────────

export const Footer: FC = () => {
  const T = useSharedTokens();
  const isDark = T.isDark;
  const [email, setEmail] = useState("");
  const hasEmail = email.trim().length > 0;
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  // Section links live on the Home page. If the footer is viewed on another
  // route, navigate Home first, then scroll once the sections have mounted.
  const handleSectionClick = (id: string) => {
    if (location.pathname === "/") {
      scrollToSection(id);
    } else {
      navigate("/");
      requestAnimationFrame(() => requestAnimationFrame(() => scrollToSection(id)));
    }
  };

  const logo = isDark ? logoDark : logoLight;

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: T.bg,
        borderTop: `0.5px solid ${T.border}`,
        px: { xs: "24px", sm: "48px", lg: "80px" },
        transition: "background-color 0.4s ease, border-color 0.4s ease",
      }}
    >
      {/* ══ ROW 1 — Logo / Nav columns / Newsletter ══════════════════════ */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "220px 1fr 280px" },
          gap: { xs: "48px", sm: "40px", lg: "64px" },
          py: { xs: "56px", sm: "72px", md: "88px" },
          borderBottom: `0.5px solid ${T.border}`,
          alignItems: "start",
          transition: "border-color 0.4s ease",
        }}
      >
        {/* — Logo + tagline + socials ── */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Box
            component={RouterLink}
            to="/"
            sx={{ display: "inline-flex", textDecoration: "none" }}
          >
            <Box
              component="img"
              src={logo}
              alt="Fossilite logo"
              sx={{ width: "110px", height: "auto" }}
            />
          </Box>

          <Typography
            sx={{
              fontSize: "13px",
              color: T.tagline,
              lineHeight: 1.8,
              maxWidth: "200px",
              transition: "color 0.4s ease",
              fontFamily: "Prompt"
            }}
          >
            Production-grade AI systems built for companies defining what's next.
          </Typography>

          {/* Social icons — real brand glyphs (inline SVG, theme-coloured) */}
          <Box sx={{ display: "flex", gap: "8px", mt: "4px" }}>
            {SOCIAL_ITEMS.map(({ key, label, href, Icon }) => (
              <Box
                key={key}
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                sx={{
                  width: "34px",
                  height: "34px",
                  color: T.linkColor,
                  border: `0.5px solid ${T.socialBorder}`,
                  borderRadius: "9px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition:
                    "border-color 0.25s ease, background-color 0.25s ease, color 0.25s ease, transform 0.2s ease",
                  "&:hover": {
                    borderColor: T.socialHoverBorder,
                    backgroundColor: T.socialHoverBg,
                    color: T.linkHover,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Icon size={15} />
              </Box>
            ))}
          </Box>
        </Box>

        {/* — Nav columns ── */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: `repeat(${NAV_GROUPS.length}, 1fr)`,
            gap: { xs: "32px", sm: "24px", md: "40px" },
            gridColumn: { xs: "1", sm: "1 / -1", lg: "auto" },
          }}
        >
          {NAV_GROUPS.map((group) => (
            <Box
              key={group.label}
              sx={{ display: "flex", flexDirection: "column", gap: "14px" }}
            >
              <ColLabel T={T}>{group.label}</ColLabel>
              {group.links.map((link) => (
                <FooterLink
                  key={link.label}
                  link={link}
                  T={T}
                  onSectionClick={handleSectionClick}
                />
              ))}
            </Box>
          ))}
        </Box>

        {/* — Newsletter ── */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            gridColumn: { xs: "1", sm: "1 / -1", lg: "auto" },
          }}
        >
          <Box>
            <ColLabel T={T}>Newsletter</ColLabel>
            <Typography
              sx={{
                fontSize: "13px",
                color: T.newsletterDesc,
                lineHeight: 1.7,
                mt: "8px",
                transition: "color 0.4s ease",
              }}
            >
              Get the latest updates on AI development, tools, and releases.
            </Typography>
          </Box>

          {/* Input row */}
          <Box
            sx={{
              border: `0.5px solid ${T.inputBorder}`,
              borderRadius: "10px",
              backgroundColor: T.inputBg,
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
              transition:
                "border-color 0.25s ease, background-color 0.4s ease, box-shadow 0.25s ease",
              "&:focus-within": {
                borderColor: T.inputFocusBorder,
                boxShadow: isDark
                  ? "0 0 0 3px rgba(187,192,198,0.08)"
                  : "0 0 0 3px rgba(0,25,50,0.07)",
              },
              boxShadow: T.inputShadow,
            }}
          >
            <TextField
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="standard"
              type="email"
              inputProps={{ "aria-label": "Email for newsletter" }}
              sx={{
                flex: 1,
                px: "14px",
                "& .MuiInput-root": {
                  fontSize: "13px",
                  color: T.inputText,
                  "&::before, &::after": { display: "none" },
                },
                "& input": { py: "12px", color: T.inputText },
                "& input::placeholder": {
                  color: T.placeholder,
                  opacity: 1,
                },
              }}
            />

            <Box
              role="button"
              tabIndex={0}
              aria-label="Subscribe"
              onClick={() => { /* handle submit */ }}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { /* handle submit */ } }}
              sx={{
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: hasEmail ? T.sendActiveBg : "transparent",
                borderLeft: `0.5px solid ${T.inputDivider}`,
                cursor: "pointer",
                flexShrink: 0,
                transition: "background-color 0.2s ease",
                "&:hover": {
                  backgroundColor: hasEmail ? T.sendActiveHover : T.sendIdleHoverBg,
                },
              }}
            >
              <RightArrow
                sx={{
                  fontSize: "15px",
                  color: hasEmail ? T.sendActiveIcon : T.sendIdleIcon,
                  transition: "color 0.2s ease",
                }}
              />
            </Box>
          </Box>

          <Typography
            sx={{
              fontSize: "11px",
              color: T.newsletterDisclaim,
              lineHeight: 1.6,
              transition: "color 0.4s ease",
              fontFamily: "Prompt"
            }}
          >
            No spam. Unsubscribe any time.
          </Typography>
        </Box>
      </Box>

      {/* ══ ROW 2 — Ghost wordmark ══════════════════════════════════════ */}
      <Box
        sx={{
          py: { xs: "36px", md: "48px" },
          borderBottom: `0.5px solid ${T.border}`,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          transition: "border-color 0.4s ease",
        }}
      >
        <Box
          component="img"
          src={fossiliteWordmark}
          alt="Fossilite"
          aria-hidden="true"
          sx={{
            width: "560px",
            height: "auto",     // keep the 684:109 aspect ratio
            maxWidth: "100%",   // scale down on narrow screens without overflow
            display: "block",
            userSelect: "none",
            pointerEvents: "none",
          }}
        />
        {/* Previous ghost-text wordmark (kept for reference):
        <Typography
          aria-hidden="true"
          sx={{
            fontSize: { xs: "17vw", sm: "15vw", md: "13vw", lg: "11vw" },
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            fontFamily: "Prompt",
            color: T.wordmarkColor,
            WebkitTextStroke: {
              xs:  `1px ${T.wordmarkStroke}`,
              md: `1.5px ${T.wordmarkStroke}`,
            },
            userSelect: "none",
            whiteSpace: "nowrap",
            transition: "color 0.4s ease",
          }}
        >
          FOSSILITE
        </Typography> */}
      </Box>

      {/* ══ ROW 3 — Bottom bar ══════════════════════════════════════════ */}
      <Box
        sx={{
          py: "20px",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: "12px",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            color: T.copyright,
            letterSpacing: "0.02em",
            transition: "color 0.4s ease",
          }}
        >
          © {currentYear} Fossilite. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};
import { FC, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import logoLight from "../../assets/FossiliteLogoNavy.svg";
import logoDark from "../../assets/FossiliteLogo.svg";
import ghostWordmark from "../../assets/Images/Featured/Fossilite.svg";
import { useSharedTokens } from "../../theme/sharedTokens";
import { FONT_DISPLAY } from "../../theme/fonts";
import {
  RightArrow,
  FacebookIcon,
  InstagramIcon,
  XIcon,
  LinkedInIcon,
} from "../../assets/Icons";
import { scrollToSection } from "../../utils/scrollToSection";

// ─── Data ─────────────────────────────────────────────────────────────────────
// A link is either a route (`to`) or an in-page section (`id`). Section links
// scroll to the matching element id — the same ids the Navbar uses.

type NavLink = { label: string; to?: string; id?: string };
type NavGroup = { label: string; links: NavLink[] };

const NAV_GROUPS: NavGroup[] = [
  {
    label: "Product",
    links: [
      { label: "Home",     to: "/"         },
      { label: "Products", to: "/products" },
      { label: "Pricing",  to: "/pricing"  },
      { label: "Log in",   to: "/login"    },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "About",    to: "/about"    },
      { label: "Contact",  to: "/contact"  },
      { label: "Solutions", id: "solutions" },
      { label: "Case Studies", id: "case-studies" },
    ],
  },
  {
    label: "Explore",
    links: [
      { label: "Resources", to: "/resources" },
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

const LEGAL = [
  { label: "Privacy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
  { label: "Cookies", to: "/cookies" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

interface FooterLinkProps {
  link: NavLink;
  T: ReturnType<typeof useSharedTokens>;
  onSectionClick: (id: string) => void;
}
const FooterLink: FC<FooterLinkProps> = ({ link, T, onSectionClick }) => {
  const linkSx = {
    fontSize: "15px",
    color: T.linkColor,
    textDecoration: "none",
    lineHeight: 1.1,
    letterSpacing: "0.01em",
    transition: "color 0.2s ease, transform 0.2s ease",
    display: "inline-block",
    "&:hover": { color: T.linkHover, transform: "translateX(3px)" },
  } as const;

  if (link.id) {
    return (
      <Box
        component="button"
        type="button"
        onClick={() => onSectionClick(link.id!)}
        sx={{
          ...linkSx,
          alignSelf: "flex-start",
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

  return (
    <Box component={RouterLink} to={link.to!} sx={linkSx}>
      {link.label}
    </Box>
  );
};

interface ColLabelProps { children: string; T: ReturnType<typeof useSharedTokens> }
const ColLabel: FC<ColLabelProps> = ({ children, T }) => (
  <Typography sx={{
    fontSize: "12px",
    fontWeight: 700,
    color: T.colLabel,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    mb: "6px",
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
  const [subscribed, setSubscribed] = useState(false);
  const hasEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubscribe = () => {
    if (!hasEmail) return;
    setSubscribed(true);
    setEmail("");
  };

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
      {/* ══ CTA BAND ══════════════════════════════════════════════════════ */}
      <Box sx={{ pt: { xs: "44px", md: "60px" }, pb: { xs: "4px", md: "8px" } }}>
        <Box
          sx={{
            borderRadius: "20px",
            border: `1px solid ${T.gridBorder}`,
            backgroundColor: T.cardBgAlt,
            boxShadow: T.boxShadow,
            p: { xs: "28px 24px", md: "38px 44px" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: { xs: "24px", md: "40px" },
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* accent glow */}
          <Box sx={{
            position: "absolute", top: "-40%", right: "-5%", width: "360px", height: "360px",
            maxWidth: "60%", background: T.radialGlow, pointerEvents: "none",
          }} />
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Typography sx={{
              fontSize: { xs: "28px", sm: "36px", md: "42px" },
              fontWeight: 500, color: T.headline, fontFamily: FONT_DISPLAY,
              letterSpacing: "-0.02em", lineHeight: 1.1, mb: "10px",
            }}>
              Ready to ship production AI?
            </Typography>
            <Typography sx={{ fontSize: "15px", color: T.secondaryText, lineHeight: 1.7, maxWidth: "420px" }}>
              Tell us about your operation and we'll prove the impact before you commit.
            </Typography>
          </Box>
          <Box sx={{ position: "relative", zIndex: 1, display: "flex", gap: "12px", flexShrink: 0, flexWrap: "wrap" }}>
            <Button
              onClick={() => navigate("/contact")}
              endIcon={<RightArrow />}
              sx={{
                px: "24px", py: "13px",
                backgroundColor: T.ctaPrimaryBg, color: T.ctaPrimaryText,
                fontSize: "14px", fontWeight: 500, textTransform: "none", borderRadius: "9px",
                transition: "background-color 0.25s ease, transform 0.2s ease",
                "&:hover": { backgroundColor: T.ctaPrimaryHover, transform: "translateY(-2px)" },
                "& .MuiButton-endIcon svg": { filter: T.ctaPrimaryIcon },
              }}
            >
              Book a Demo
            </Button>
            <Button
              onClick={() => navigate("/pricing")}
              sx={{
                px: "24px", py: "13px",
                backgroundColor: "transparent", color: T.primaryText,
                fontSize: "14px", fontWeight: 500, textTransform: "none", borderRadius: "9px",
                border: `0.5px solid ${T.ctaSecBorder}`,
                transition: "border-color 0.2s ease, transform 0.2s ease",
                "&:hover": { borderColor: T.accent, transform: "translateY(-2px)" },
              }}
            >
              View pricing
            </Button>
          </Box>
        </Box>
      </Box>

      {/* ══ MAIN GRID ═════════════════════════════════════════════════════ */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            lg: "1.4fr repeat(3, 0.8fr) 1.4fr",
          },
          gap: { xs: "36px", sm: "36px", lg: "48px" },
          py: { xs: "44px", sm: "52px", md: "60px" },
          borderBottom: `0.5px solid ${T.border}`,
          alignItems: "start",
        }}
      >
        {/* — Brand — */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", gridColumn: { xs: "1", sm: "1 / -1", lg: "auto" } }}>
          <Box component={RouterLink} to="/" sx={{ display: "inline-flex", textDecoration: "none" }}>
            <Box component="img" src={logo} alt="Fossilite logo" sx={{ width: "120px", height: "auto" }} />
          </Box>
          <Typography sx={{ fontSize: "14.5px", color: T.tagline, lineHeight: 1.75, maxWidth: "260px", fontFamily: "Prompt" }}>
            Production-grade AI systems built for companies defining what's next.
          </Typography>

          {/* Socials */}
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
                  width: "34px", height: "34px",
                  color: T.linkColor,
                  border: `0.5px solid ${T.socialBorder}`,
                  borderRadius: "9px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "border-color 0.25s ease, background-color 0.25s ease, color 0.25s ease, transform 0.2s ease",
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

        {/* — Nav columns — */}
        {NAV_GROUPS.map((group) => (
          <Box key={group.label} sx={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <ColLabel T={T}>{group.label}</ColLabel>
            {group.links.map((link) => (
              <FooterLink key={link.label} link={link} T={T} onSectionClick={handleSectionClick} />
            ))}
          </Box>
        ))}

        {/* — Newsletter — */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", gridColumn: { xs: "1", sm: "1 / -1", lg: "auto" } }}>
          <Box>
            <ColLabel T={T}>Newsletter</ColLabel>
            <Typography sx={{ fontSize: "14.5px", color: T.newsletterDesc, lineHeight: 1.7, mt: "8px" }}>
              Get the latest on AI development, tools, and releases.
            </Typography>
          </Box>

          {subscribed ? (
            <Box sx={{
              display: "flex", alignItems: "center", gap: "10px",
              px: "16px", py: "13px", borderRadius: "10px",
              border: `0.5px solid ${T.inputFocusBorder}`, backgroundColor: T.inputBg,
              animation: "nlIn 0.4s cubic-bezier(0.22,1,0.36,1)",
              "@keyframes nlIn": { from: { opacity: 0, transform: "translateY(6px)" }, to: { opacity: 1, transform: "none" } },
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6 9 17l-5-5" stroke={T.linkHover} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <Typography sx={{ fontSize: "14px", color: T.colLabel, fontFamily: "Prompt" }}>You're subscribed — thanks!</Typography>
            </Box>
          ) : (
            <Box sx={{
              border: `0.5px solid ${T.inputBorder}`, borderRadius: "10px", backgroundColor: T.inputBg,
              display: "flex", alignItems: "center", overflow: "hidden",
              transition: "border-color 0.25s ease, box-shadow 0.25s ease",
              "&:focus-within": {
                borderColor: T.inputFocusBorder,
                boxShadow: isDark ? "0 0 0 3px rgba(187,192,198,0.08)" : "0 0 0 3px rgba(0,25,50,0.07)",
              },
              boxShadow: T.inputShadow,
            }}>
              <TextField
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleSubscribe(); } }}
                variant="standard"
                type="email"
                inputProps={{ "aria-label": "Email for newsletter" }}
                sx={{
                  flex: 1, px: "14px",
                  "& .MuiInput-root": { fontSize: "14px", color: T.inputText, "&::before, &::after": { display: "none" } },
                  "& input": { py: "12px", color: T.inputText },
                  "& input::placeholder": { color: T.placeholder, opacity: 1 },
                }}
              />
              <Box
                role="button" tabIndex={0} aria-label="Subscribe"
                onClick={handleSubscribe}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleSubscribe(); }}
                sx={{
                  width: "44px", height: "44px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  backgroundColor: hasEmail ? T.sendActiveBg : "transparent",
                  borderLeft: `0.5px solid ${T.inputDivider}`,
                  cursor: hasEmail ? "pointer" : "default", flexShrink: 0,
                  transition: "background-color 0.2s ease",
                  "&:hover": { backgroundColor: hasEmail ? T.sendActiveHover : T.sendIdleHoverBg },
                }}
              >
                <RightArrow sx={{ fontSize: "15px", color: hasEmail ? T.sendActiveIcon : T.sendIdleIcon, transition: "color 0.2s ease" }} />
              </Box>
            </Box>
          )}

          <Typography sx={{ fontSize: "12.5px", color: T.newsletterDisclaim, lineHeight: 1.6, fontFamily: "Prompt" }}>
            No spam. Unsubscribe any time.
          </Typography>
        </Box>
      </Box>

      {/* ══ GHOST WORDMARK ════════════════════════════════════════════════ */}
      <Box sx={{ py: { xs: "18px", md: "24px" }, borderBottom: `0.5px solid ${T.border}`, overflow: "hidden", display: "flex", justifyContent: "center" }}>
        <Box
          aria-hidden="true"
          sx={{
            width: "100%",
            maxWidth: { xs: "88%", md: "80%", lg: "1000px" },
            aspectRatio: "684 / 109",
            background: T.ghostFill,
            maskImage: `url(${ghostWordmark})`,
            WebkitMaskImage: `url(${ghostWordmark})`,
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskPosition: "center",
            WebkitMaskPosition: "center",
            userSelect: "none",
            pointerEvents: "none",
            transition: "background 0.4s ease",
          }}
        />
      </Box>

      {/* ══ BOTTOM BAR ════════════════════════════════════════════════════ */}
      <Box
        sx={{
          py: "22px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          gap: "16px",
        }}
      >
        <Typography sx={{ fontSize: "13px", color: T.copyright, letterSpacing: "0.02em" }}>
          © {currentYear} Fossilite. All rights reserved.
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: "16px", sm: "24px" }, flexWrap: "wrap" }}>
          {/* Status pill */}
          <Box sx={{ display: "inline-flex", alignItems: "center", gap: "7px" }}>
            <Box sx={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#3BC77A", animation: "opPulse 2s ease-in-out infinite", "@keyframes opPulse": { "0%,100%": { opacity: 1 }, "50%": { opacity: 0.35 } } }} />
            <Typography sx={{ fontSize: "13px", color: T.copyright }}>All systems operational</Typography>
          </Box>
          {/* Legal */}
          <Box sx={{ display: "flex", gap: "18px" }}>
            {LEGAL.map((item) => (
              <Box
                key={item.label}
                component={RouterLink}
                to={item.to}
                sx={{ fontSize: "13px", color: T.linkColor, textDecoration: "none", cursor: "pointer", transition: "color 0.2s ease", "&:hover": { color: T.linkHover } }}
              >
                {item.label}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

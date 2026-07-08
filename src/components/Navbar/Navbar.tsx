import React, { useState, useEffect } from "react";
import {
  AppBar, Box, CssBaseline, Drawer, IconButton,
  List, ListItem, ListItemButton, ListItemText,
  Toolbar, Button,
} from "@mui/material";
import { LightMode, Brightness2, Close } from "@mui/icons-material";
import { MenuIconLight, MenuIconDark, RightArrow } from "../../assets/Icons";
import logoLight from "../../assets/FossiliteLogoNavy.svg";
import logoDark from "../../assets/FossiliteLogo.svg";
import { useSharedTokens } from "../../theme/sharedTokens";
import { useThemeMode } from "../../theme/theme";
import { scrollToSection } from "../../utils/scrollToSection";

const drawerWidth = 280;

// ── Nav items now map to section IDs on the page ──────────────────────────────
const navItems = [
  { label: "About",     id: "about"     },
  { label: "Products",  id: "products"  },
  { label: "Solutions", id: "solutions" },
  { label: "Resources", id: "resources" },
  { label: "Use Cases", id: "use-cases" },
];

const nasalizationFont = {
  fontFamily: "Prompt",
  letterSpacing: "0.05em",
};

// ── Theme toggle pill ─────────────────────────────────────────────────────────
const ThemeToggle: React.FC<{
  mode: "light" | "dark";
  onToggle: () => void;
  isDark: boolean;
}> = ({ mode, onToggle, isDark }) => {
  const tokens = useSharedTokens();
  const T = {
    toggleBg: tokens.surfaceSubtle,
    toggleBorder: tokens.border,
    toggleBorderHover: tokens.accent,
    toggleKnob: tokens.primaryText,
    toggleIcon: isDark ? "#3a3a3a" : "#BBC0C6",
  };
  return (
    <Box
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle colour theme"
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onToggle(); }}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "60px",
        height: "30px",
        backgroundColor: T.toggleBg,
        border: `0.5px solid ${T.toggleBorder}`,
        borderRadius: "15px",
        cursor: "pointer",
        position: "relative",
        px: "5px",
        outline: "none",
        "&:hover": { borderColor: T.toggleBorderHover },
        "&:focus-visible": {
          boxShadow: isDark
            ? "0 0 0 2px rgba(187,192,198,0.4)"
            : "0 0 0 2px rgba(0,25,50,0.25)",
        },
        transition: "border-color 0.2s ease, background-color 0.4s ease",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: mode === "dark" ? "34px" : "4px",
          transform: "translateY(-50%)",
          width: "22px",
          height: "22px",
          backgroundColor: T.toggleKnob,
          borderRadius: "50%",
          zIndex: 2,
          transition: "left 0.3s cubic-bezier(0.34,1.56,0.64,1), background-color 0.4s ease",
        }}
      />
      <LightMode sx={{ color: T.toggleIcon, fontSize: "14px", zIndex: 1, transition: "color 0.4s ease" }} />
      <Brightness2
        sx={{
          color: T.toggleIcon,
          fontSize: "14px",
          zIndex: 1,
          transform: "rotate(150deg)",
          transition: "color 0.4s ease",
        }}
      />
    </Box>
  );
};

// ── Main Navbar ───────────────────────────────────────────────────────────────
export const Navbar: React.FC<any> = (props) => {
  const { mode, toggleMode } = useThemeMode();
  const isDark = mode === "dark";
  const tokens = useSharedTokens();
  const T = {
    scrolledBg: isDark ? "rgba(22,22,22,0.92)" : "rgba(255,244,227,0.92)",
    border: tokens.border,
    textPrimary: tokens.primaryText,
    textSecondary: tokens.secondaryText,
    surfaceSubtle: tokens.surfaceSubtle,
    activeDot: tokens.primaryText,
    ctaBorder: tokens.border,
    ctaHoverBg: tokens.primaryText,
    ctaHoverText: isDark ? "#001932" : "#FFF4E3",
    ctaHoverBorder: tokens.primaryText,
    drawerBg: tokens.bg,
    drawerBorder: tokens.border,
    drawerLinkBorder: tokens.border,
    drawerActiveLine: tokens.primaryText,
    iconBtnBorder: tokens.border,
    iconBtnHoverBg: tokens.surfaceSubtle,
  };
  const { window } = props;

  const [mobileOpen, setMobileOpen]   = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [activeId, setActiveId]       = useState("");

  const logo = isDark ? logoDark : logoLight;

  // ── Track scroll position to highlight active section ─────────────────────
  useEffect(() => {
    const onScroll = () => {
      setScrolled(globalThis.scrollY > 20);

      // Find which section is currently in view
      const offsets = navItems
        .map(({ id }) => {
          const el = document.getElementById(id);
          if (!el) return null;
          return { id, top: el.getBoundingClientRect().top };
        })
        .filter(Boolean) as { id: string; top: number }[];

     const filtered = offsets.filter((o) => o.top <= 120);
      const current = filtered[filtered.length - 1];

      setActiveId(current?.id ?? "");
    };

    globalThis.addEventListener("scroll", onScroll, { passive: true });
    return () => globalThis.removeEventListener("scroll", onScroll);
  }, []);

  const handleDrawerToggle = () => setMobileOpen((p) => !p);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  // ── Mobile drawer ─────────────────────────────────────────────────────────
  const drawer = (
    <Box
      sx={{
        height: "100%",
        backgroundColor: T.drawerBg,
        display: "flex",
        flexDirection: "column",
        padding: "28px 24px",
        transition: "background-color 0.4s ease",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Box component="img" src={logo} alt="logo" sx={{ width: "100px", height: "auto" }} />
        <IconButton
          onClick={handleDrawerToggle}
          aria-label="Close navigation"
          sx={{
            color: T.textPrimary,
            border: `0.5px solid ${T.iconBtnBorder}`,
            borderRadius: "8px",
            padding: "6px",
            transition: "background-color 0.2s ease, border-color 0.2s ease",
            "&:hover": { backgroundColor: T.iconBtnHoverBg },
          }}
        >
          <Close sx={{ fontSize: "18px" }} />
        </IconButton>
      </Box>

      <List sx={{ flex: 1, p: 0 }}>
        {navItems.map(({ label, id }) => {
          const active = activeId === id;
          return (
            <ListItem key={id} disablePadding>
              <ListItemButton
                onClick={() => handleNavClick(id)}
                sx={{
                  py: "14px",
                  px: 0,
                  borderBottom: `0.5px solid ${T.drawerLinkBorder}`,
                  color: active ? T.textPrimary : T.textSecondary,
                  "&:hover": { backgroundColor: "transparent", color: T.textPrimary },
                  "& .MuiListItemText-primary": {
                    fontSize: "13px",
                    fontWeight: active ? 500 : 400,
                    color: "inherit",
                    transition: "color 0.2s ease",
                    ...nasalizationFont,
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, width: "100%" }}>
                  <Box
                    sx={{
                      width: "20px",
                      height: "1px",
                      backgroundColor: active ? T.drawerActiveLine : T.drawerLinkBorder,
                      flexShrink: 0,
                      transition: "background-color 0.2s ease",
                    }}
                  />
                  <ListItemText primary={label} />
                </Box>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}>
        <Button
          onClick={() => handleNavClick("contact")}
          endIcon={<RightArrow />}
          sx={{
            width: "100%",
            py: "12px",
            border: `0.5px solid ${T.ctaBorder}`,
            borderRadius: "8px",
            color: T.textPrimary,
            fontSize: "12px",
            fontWeight: 500,
            textTransform: "none",
            ...nasalizationFont,
            transition: "background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease",
            "&:hover": {
              backgroundColor: T.ctaHoverBg,
              color: T.ctaHoverText,
              borderColor: T.ctaHoverBorder,
            },
          }}
        >
          Book a Demo
        </Button>
        {/* <ThemeToggle mode={mode} onToggle={toggleMode} isDark={isDark} /> */}
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        component="nav"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? T.scrolledBg : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: `0.5px solid ${scrolled ? T.border : "transparent"}`,
          boxShadow: "none",
          transition: "background-color 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease",
          px: { xs: "20px", sm: "48px", lg: "80px" },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: "64px", md: "72px" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo — scrolls back to top */}
          <Box
            onClick={() => globalThis.scrollTo({ top: 0, behavior: "smooth" })}
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <Box
              component="img"
              src={logo}
              alt="Fossilite"
              sx={{
                width: { xs: "90px", md: "110px" },
                height: "auto",
                transition: "opacity 0.2s ease",
                "&:hover": { opacity: 0.75 },
              }}
            />
          </Box>

          {/* Desktop nav links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: "2px" }}>
            {navItems.map(({ label, id }) => {
              const active = activeId === id;
              return (
                <Button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  disableRipple
                  sx={{
                    color: active ? T.textPrimary : T.textSecondary,
                    fontSize: "12px",
                    fontWeight: active ? 500 : 400,
                    textTransform: "none",
                    px: "14px",
                    py: "7px",
                    borderRadius: "6px",
                    minWidth: 0,
                    ...nasalizationFont,
                    transition: "color 0.2s ease, background-color 0.2s ease",
                    "&:hover": { color: T.textPrimary, backgroundColor: T.surfaceSubtle },
                    position: "relative",
                    // Animated underline — scales in from centre on hover, stays for active
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "3px",
                      left: "14px",
                      right: "14px",
                      height: "1.5px",
                      borderRadius: "2px",
                      backgroundColor: T.activeDot,
                      transformOrigin: "center",
                      transform: active ? "scaleX(1)" : "scaleX(0)",
                      transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
                    },
                    "&:hover::after": { transform: "scaleX(1)" },
                  }}
                >
                  {label}
                </Button>
              );
            })}
          </Box>

          {/* Desktop right: CTA (theme toggle removed — light theme only for now) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: "14px" }}>
            {/* <ThemeToggle mode={mode} onToggle={toggleMode} isDark={isDark} /> */}
            <Button
              onClick={() => handleNavClick("contact")}
              endIcon={<RightArrow />}
              sx={{
                px: "18px",
                py: "8px",
                border: `0.5px solid ${T.ctaBorder}`,
                borderRadius: "8px",
                color: T.textPrimary,
                fontSize: "12px",
                fontWeight: 500,
                textTransform: "none",
                ...nasalizationFont,
                transition: "background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.15s ease",
                "&:hover": {
                  backgroundColor: T.ctaHoverBg,
                  color: T.ctaHoverText,
                  borderColor: T.ctaHoverBorder,
                  transform: "translateY(-1px)",
                },
                "&:active": { transform: "scale(0.97)" },
              }}
            >
              Book a Demo
            </Button>
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            edge="start"
            onClick={handleDrawerToggle}
            aria-label="Open navigation"
            sx={{
              display: { md: "none" },
              color: T.textPrimary,
              border: `0.5px solid ${T.iconBtnBorder}`,
              borderRadius: "8px",
              padding: "8px",
              transition: "background-color 0.2s ease, border-color 0.2s ease",
              "&:hover": { backgroundColor: T.iconBtnHoverBg },
            }}
          >
            {React.createElement(isDark ? MenuIconDark : MenuIconLight)}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Box component="nav" aria-label="Mobile navigation">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: T.drawerBg,
              border: "none",
              borderRight: `0.5px solid ${T.drawerBorder}`,
              transition: "background-color 0.4s ease, border-color 0.4s ease",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
import React, { useState, useEffect } from "react";
import {
  AppBar, Box, CssBaseline, Drawer, IconButton,
  List, ListItem, ListItemButton, ListItemText,
  Toolbar, Button,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import { MenuIconLight, MenuIconDark, RightArrow } from "../../assets/Icons";
import logoLight from "../../assets/FossiliteLogoNavy.svg";
import logoDark from "../../assets/FossiliteLogo.svg";
import { useSharedTokens } from "../../theme/sharedTokens";
import { useThemeMode } from "../../theme/theme";
import { scrollToSection } from "../../utils/scrollToSection";

const drawerWidth = 280;

// ── Nav items map to a route (`to`) or an in-page section (`id`) ───────────────
type NavItem = { label: string; to?: string; id?: string };
const navItems: NavItem[] = [
  { label: "Home",      to: "/"         },
  { label: "About",     to: "/about"     },
  { label: "Products",  to: "/products" },
  { label: "Resources", to: "/resources" },
  { label: "Pricing",   to: "/pricing"   },
  { label: "Contact",   to: "/contact"  },
];

const nasalizationFont = {
  fontFamily: "Prompt",
  letterSpacing: "0.05em",
};

// ── Main Navbar ───────────────────────────────────────────────────────────────
export const Navbar: React.FC<any> = (props) => {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";
  const tokens = useSharedTokens();
  const navigate = useNavigate();
  const location = useLocation();

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

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  const logo = isDark ? logoDark : logoLight;

  const isActive = (item: NavItem) => {
    if (item.id) return false; // in-page sections aren't route-tracked
    if (item.to === "/products") return location.pathname.startsWith("/pro");
    return location.pathname === item.to;
  };

  // Navigate a nav item — routes go via router; section links scroll (jumping
  // back to Home first if we're on another page).
  const handleNav = (item: NavItem) => {
    setMobileOpen(false);
    if (item.id) {
      if (location.pathname === "/") {
        scrollToSection(item.id);
      } else {
        navigate("/");
        requestAnimationFrame(() => requestAnimationFrame(() => scrollToSection(item.id!)));
      }
      return;
    }
    if (item.to) navigate(item.to);
  };

  // ── Track scroll position for the glass background ────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(globalThis.scrollY > 20);
    globalThis.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => globalThis.removeEventListener("scroll", onScroll);
  }, []);

  const handleDrawerToggle = () => setMobileOpen((p) => !p);

  const go = (to: string) => {
    navigate(to);
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
        <Box component="img" src={logo} alt="logo" sx={{ width: "100px", height: "auto", cursor: "pointer" }} onClick={() => go("/")} />
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
        {navItems.map((item) => {
          const active = isActive(item);
          return (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                onClick={() => handleNav(item)}
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
                  <ListItemText primary={item.label} />
                </Box>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 1.5 }}>
        <Button
          onClick={() => go("/login")}
          sx={{
            width: "100%",
            py: "12px",
            borderRadius: "8px",
            color: T.textPrimary,
            fontSize: "12px",
            fontWeight: 500,
            textTransform: "none",
            ...nasalizationFont,
            border: `0.5px solid transparent`,
            transition: "background-color 0.2s ease",
            "&:hover": { backgroundColor: T.iconBtnHoverBg },
          }}
        >
          Log in
        </Button>
        <Button
          onClick={() => go("/contact")}
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
          {/* Logo — navigates home */}
          <Box
            onClick={() => go("/")}
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
            {navItems.map((item) => {
              const active = isActive(item);
              return (
                <Button
                  key={item.label}
                  onClick={() => handleNav(item)}
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
                  {item.label}
                </Button>
              );
            })}
          </Box>

          {/* Desktop right: Log in + CTA */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: "10px" }}>
            <Button
              onClick={() => go("/login")}
              disableRipple
              sx={{
                px: "14px",
                py: "8px",
                color: location.pathname === "/login" ? T.textPrimary : T.textSecondary,
                fontSize: "12px",
                fontWeight: 500,
                textTransform: "none",
                borderRadius: "8px",
                minWidth: 0,
                ...nasalizationFont,
                transition: "color 0.2s ease, background-color 0.2s ease",
                "&:hover": { color: T.textPrimary, backgroundColor: T.surfaceSubtle },
              }}
            >
              Log in
            </Button>
            <Button
              onClick={() => go("/contact")}
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

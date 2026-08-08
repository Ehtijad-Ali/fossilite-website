import { FC } from "react";
import { Link, NavLink, Navigate, Outlet, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { useSharedTokens } from "../../theme/sharedTokens";
import { FONT_DISPLAY, FONT_MONO } from "../../theme/fonts";
import { useAuth } from "../../console/auth";
import { WorkspaceProvider, useWorkspace } from "../../console/store";
import { SYSTEM_TABS } from "./nav";
import { Btn } from "./ui";

const GOLD = "#C3A87C";

/** Redirects to the demo sign-in, remembering where the user was headed. */
export const RequireAuth: FC = () => {
  const { signedIn } = useAuth();
  const location = useLocation();
  if (!signedIn) return <Navigate to="/console/login" replace state={{ from: location.pathname }} />;
  return (
    <WorkspaceProvider>
      <ConsoleChrome />
    </WorkspaceProvider>
  );
};

const ConsoleChrome: FC = () => {
  const T = useSharedTokens();
  const { user, signOut } = useAuth();
  const { loading, busy, reset } = useWorkspace();
  const { pathname } = useLocation();

  const linkSx = (active: boolean) => ({
    display: "flex",
    alignItems: "center",
    gap: "9px",
    px: "12px",
    py: "9px",
    borderRadius: "9px",
    textDecoration: "none",
    fontSize: "13.5px",
    whiteSpace: "nowrap" as const,
    color: active ? T.primaryText : T.secondaryText,
    backgroundColor: active ? T.surfaceSubtle : "transparent",
    border: `0.5px solid ${active ? T.border : "transparent"}`,
    transition: "color 0.18s ease, background-color 0.18s ease",
    "&:hover": { color: T.primaryText, backgroundColor: T.surfaceSubtle },
  });

  return (
    <Box sx={{ minHeight: "100dvh", backgroundColor: T.bg, display: "flex", flexDirection: "column" }}>
      {/* ── Top bar ── */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "14px",
          px: { xs: "16px", md: "26px" },
          py: "12px",
          borderBottom: `0.5px solid ${T.border}`,
          backgroundColor: T.bg,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "14px", minWidth: 0 }}>
          <Box component={Link} to="/" sx={{ textDecoration: "none", flexShrink: 0 }}>
            <Typography
              sx={{ fontFamily: FONT_DISPLAY, fontSize: "17px", fontWeight: 500, color: T.headline, letterSpacing: "-0.02em" }}
            >
              Fossilite
            </Typography>
          </Box>
          <Box sx={{ width: "1px", height: "18px", backgroundColor: T.border, display: { xs: "none", sm: "block" } }} />
          <Typography
            sx={{
              fontFamily: FONT_MONO,
              fontSize: "9.5px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: GOLD,
              display: { xs: "none", sm: "block" },
            }}
          >
            Business OS · POC
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          {busy && (
            <Typography sx={{ fontSize: "11.5px", color: T.mutedText, display: { xs: "none", sm: "block" } }}>
              Saving…
            </Typography>
          )}
          <Typography sx={{ fontSize: "12.5px", color: T.mutedText, display: { xs: "none", md: "block" } }}>
            {user}
          </Typography>
          <Btn onClick={() => reset()} disabled={busy}>
            Reset data
          </Btn>
          <Btn onClick={signOut}>Sign out</Btn>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flex: 1, minWidth: 0 }}>
        {/* ── Sidebar, desktop only ── */}
        <Box
          component="nav"
          aria-label="Console"
          sx={{
            display: { xs: "none", lg: "block" },
            width: "228px",
            flexShrink: 0,
            borderRight: `0.5px solid ${T.border}`,
            p: "18px 14px",
            position: "sticky",
            top: "53px",
            alignSelf: "flex-start",
          }}
        >
          <Box component={NavLink} to="/console" end sx={linkSx(pathname === "/console")}>
            Dashboard
          </Box>

          <Typography
            sx={{
              fontFamily: FONT_MONO,
              fontSize: "9px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: T.mutedText,
              mt: "20px",
              mb: "8px",
              px: "12px",
            }}
          >
            Business systems
          </Typography>
          {SYSTEM_TABS.map((s) => (
            <Box key={s.path} component={NavLink} to={s.path} sx={linkSx(pathname.startsWith(s.path))}>
              <Box sx={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: s.color, flexShrink: 0 }} />
              {s.label}
            </Box>
          ))}

          <Box sx={{ mt: "20px", pt: "14px", borderTop: `0.5px solid ${T.border}` }}>
            <Box component={NavLink} to="/console/architecture" sx={linkSx(pathname.startsWith("/console/architecture"))}>
              System Design
            </Box>
          </Box>
        </Box>

        {/* ── Main ── */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          {/* Tab rail: the quick switcher, and the only nav below lg. */}
          <Box
            sx={{
              display: "flex",
              gap: "6px",
              px: { xs: "16px", md: "26px" },
              py: "10px",
              borderBottom: `0.5px solid ${T.border}`,
              overflowX: "auto",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {[
              { path: "/console", label: "Dashboard", color: GOLD, end: true },
              ...SYSTEM_TABS.map((s) => ({ ...s, end: false })),
              { path: "/console/architecture", label: "System Design", color: T.mutedText, end: false },
            ].map((t) => {
              const active = t.end ? pathname === t.path : pathname.startsWith(t.path);
              return (
                <Box
                  key={t.path}
                  component={Link}
                  to={t.path}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "7px",
                    px: "13px",
                    py: "8px",
                    borderRadius: "99px",
                    textDecoration: "none",
                    fontSize: "12.5px",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    color: active ? T.ctaPrimaryText : T.secondaryText,
                    backgroundColor: active ? T.ctaPrimaryBg : "transparent",
                    border: `0.5px solid ${active ? "transparent" : T.border}`,
                    "&:hover": active ? {} : { borderColor: GOLD },
                  }}
                >
                  <Box sx={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: t.color, flexShrink: 0 }} />
                  {t.label}
                </Box>
              );
            })}
          </Box>

          <Box sx={{ px: { xs: "16px", md: "26px" }, py: { xs: "22px", md: "30px" }, maxWidth: "1320px" }}>
            {loading ? (
              <Typography sx={{ fontSize: "14px", color: T.mutedText }}>Loading workspace…</Typography>
            ) : (
              <Outlet />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RequireAuth;

import { FC, FormEvent, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { useSharedTokens } from "../../theme/sharedTokens";
import { FONT_DISPLAY, FONT_MONO } from "../../theme/fonts";
import { DEMO_HINT, useAuth } from "../../console/auth";
import { Btn, Card, Label } from "./ui";

export const ConsoleLogin: FC = () => {
  const T = useSharedTokens();
  const { signedIn, signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const from = (location.state as { from?: string } | null)?.from ?? "/console";
  if (signedIn) return <Navigate to={from} replace />;

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setPending(true);
    setError(null);
    const res = await signIn(username, password);
    setPending(false);
    if (res.ok) navigate(from, { replace: true });
    else setError(res.error ?? "Sign-in failed.");
  };

  const inputSx = {
    width: "100%",
    border: `0.5px solid ${T.border}`,
    borderRadius: "10px",
    px: "13px",
    py: "12px",
    fontSize: "14px",
    fontFamily: "Prompt",
    background: "transparent",
    color: T.primaryText,
    outline: "none",
    "&:focus": { borderColor: "#C3A87C" },
  };

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        backgroundColor: T.bg,
        display: "grid",
        placeItems: "center",
        px: "20px",
        py: "60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: `linear-gradient(${T.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${T.gridLine} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 90%)",
        }}
      />

      <Box sx={{ position: "relative", width: "100%", maxWidth: "410px" }}>
        <Box sx={{ textAlign: "center", mb: "22px" }}>
          <Label color="#C3A87C">Business Operating System</Label>
          <Typography
            sx={{
              fontFamily: FONT_DISPLAY,
              fontWeight: 500,
              fontSize: "34px",
              letterSpacing: "-0.025em",
              color: T.headline,
              mt: "8px",
              lineHeight: 1.1,
            }}
          >
            Sign in
          </Typography>
        </Box>

        <Card>
          <Box component="form" onSubmit={submit}>
            <Box sx={{ mb: "14px" }}>
              <Label>Username</Label>
              <Box
                component="input"
                autoFocus
                autoComplete="username"
                value={username}
                aria-label="Username"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                sx={{ ...inputSx, mt: "7px" }}
              />
            </Box>

            <Box sx={{ mb: "18px" }}>
              <Label>Password</Label>
              <Box
                component="input"
                type="password"
                autoComplete="current-password"
                value={password}
                aria-label="Password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                sx={{ ...inputSx, mt: "7px" }}
              />
            </Box>

            {error && (
              <Typography sx={{ fontSize: "12.5px", color: "#EF4444", mb: "14px" }} role="alert">
                {error}
              </Typography>
            )}

            <Btn variant="primary" full type="submit" disabled={pending || !username || !password}>
              {pending ? "Signing in…" : "Sign in"}
            </Btn>
          </Box>
        </Card>

        {/* Demo credentials are on screen deliberately: this gate exists so the
            POC has a front door, not to keep anyone out. */}
        <Card sx={{ mt: "12px", backgroundColor: T.cardBgAlt }}>
          <Label>Demo credentials</Label>
          <Box sx={{ display: "flex", gap: "18px", mt: "8px", flexWrap: "wrap" }}>
            <Box>
              <Typography sx={{ fontSize: "11px", color: T.mutedText }}>Username</Typography>
              <Typography sx={{ fontFamily: FONT_MONO, fontSize: "13px", color: T.primaryText }}>
                {DEMO_HINT.username}
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "11px", color: T.mutedText }}>Password</Typography>
              <Typography sx={{ fontFamily: FONT_MONO, fontSize: "13px", color: T.primaryText }}>
                {DEMO_HINT.password}
              </Typography>
            </Box>
          </Box>
          <Typography sx={{ fontSize: "11.5px", color: T.mutedText, mt: "12px", lineHeight: 1.6 }}>
            This is a demo gate, not authentication. The check runs in the browser and the credentials are in the
            bundle. Do not put anything real behind it.
          </Typography>
        </Card>
      </Box>
    </Box>
  );
};

export default ConsoleLogin;

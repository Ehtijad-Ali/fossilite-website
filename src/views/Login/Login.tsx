import { FC, FormEvent, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useSharedTokens } from "../../theme/sharedTokens";
import { FONT_DISPLAY } from "../../theme/fonts";
import logoNavy from "../../assets/FossiliteLogoNavy.svg";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const GoogleG = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 0 1-2.4 3.7v3h3.9c2.3-2.1 3.5-5.2 3.5-8.9Z" />
    <path fill="#34A853" d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1 .7-2.4 1.1-4 1.1-3 0-5.6-2-6.5-4.8H1.5v3A12 12 0 0 0 12 24Z" />
    <path fill="#FBBC05" d="M5.5 14.4a7.2 7.2 0 0 1 0-4.6v-3H1.5a12 12 0 0 0 0 10.6l4-3Z" />
    <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.5 6.8l4 3C6.4 6.9 9 4.8 12 4.8Z" />
  </svg>
);
const GithubG: FC<{ color: string }> = ({ color }) => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.4-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.28 5.69.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
  </svg>
);

export const Login: FC = () => {
  const T = useSharedTokens();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [showPw, setShowPw] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    const next: typeof errors = {};
    if (!emailRe.test(email.trim())) next.email = "Enter a valid email address.";
    if (password.length < 6) next.password = "Password must be at least 6 characters.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("loading");
    window.setTimeout(() => {
      setStatus("done");
      window.setTimeout(() => navigate("/"), 1100);
    }, 1300);
  };

  const inputSx = (err?: string) => ({
    "& .MuiOutlinedInput-root": {
      backgroundColor: T.inputBg,
      borderRadius: "10px",
      color: T.inputText,
      fontSize: "14px",
      "& fieldset": { borderColor: err ? "#c0392b" : T.inputBorder, borderWidth: "0.5px" },
      "&:hover fieldset": { borderColor: err ? "#c0392b" : T.inputHoverBorder },
      "&.Mui-focused fieldset": { borderColor: err ? "#c0392b" : T.inputFocusBorder, borderWidth: "1px" },
    },
    "& .MuiInputLabel-root": { color: T.inputLabel, fontSize: "14px" },
    "& .MuiInputLabel-root.Mui-focused": { color: err ? "#c0392b" : T.inputFocusBorder },
  });

  const socialBtn = {
    flex: 1,
    py: "11px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "9px",
    border: `0.5px solid ${T.border}`,
    borderRadius: "10px",
    backgroundColor: T.cardBg,
    color: T.primaryText,
    fontSize: "13px",
    fontWeight: 500,
    fontFamily: "Prompt",
    cursor: "pointer",
    transition: "border-color 0.2s ease, transform 0.15s ease",
    "&:hover": { borderColor: T.accent, transform: "translateY(-1px)" },
  } as const;

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: T.bg,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: "24px",
        pt: { xs: "110px", md: "130px" },
        pb: { xs: "60px", md: "80px" },
      }}
    >
      {/* Background grid + glow */}
      <Box sx={{
        position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(${T.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${T.gridLine} 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse 60% 60% at 50% 40%, #000 30%, transparent 90%)",
        WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 40%, #000 30%, transparent 90%)",
      }} />
      <Box sx={{
        position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)",
        width: "560px", height: "360px", maxWidth: "90%", zIndex: 0, pointerEvents: "none",
        background: T.radialGlow,
      }} />

      <Box
        component="form"
        onSubmit={submit}
        noValidate
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "420px",
          p: { xs: "28px", sm: "40px" },
          borderRadius: "20px",
          backgroundColor: T.cardBg,
          border: `0.5px solid ${T.border}`,
          boxShadow: T.isDark ? "0 30px 70px rgba(0,0,0,0.5)" : "0 30px 70px rgba(0,25,50,0.14)",
          animation: "loginIn 0.6s cubic-bezier(0.22,1,0.36,1) both",
          "@keyframes loginIn": { from: { opacity: 0, transform: "translateY(20px)" }, to: { opacity: 1, transform: "none" } },
        }}
      >
        {status === "done" ? (
          <Box sx={{ textAlign: "center", py: "40px" }}>
            <Box sx={{ width: "58px", height: "58px", borderRadius: "50%", mx: "auto", mb: "18px", backgroundColor: T.accentGlow, display: "flex", alignItems: "center", justifyContent: "center", animation: "popIn 0.5s cubic-bezier(0.34,1.56,0.64,1)", "@keyframes popIn": { from: { transform: "scale(0)" }, to: { transform: "scale(1)" } } }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M20 6 9 17l-5-5" stroke={T.accent} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Box>
            <Typography sx={{ fontSize: "22px", fontWeight: 600, color: T.headline, fontFamily: "Prompt", mb: "8px" }}>Signed in</Typography>
            <Typography sx={{ fontSize: "14px", color: T.secondaryText }}>Redirecting you to your dashboard…</Typography>
          </Box>
        ) : (
          <>
            {/* Logo + heading */}
            <Box sx={{ textAlign: "center", mb: "26px" }}>
              <Box component="img" src={logoNavy} alt="Fossilite" sx={{ width: "116px", height: "auto", mb: "22px" }} />
              <Typography sx={{ fontSize: "24px", fontWeight: 600, color: T.headline, fontFamily: FONT_DISPLAY, letterSpacing: "-0.02em" }}>
                Welcome back
              </Typography>
              <Typography sx={{ fontSize: "14px", color: T.secondaryText, mt: "6px" }}>
                Log in to your Fossilite workspace
              </Typography>
            </Box>

            {/* Social */}
            <Box sx={{ display: "flex", gap: "10px", mb: "22px" }}>
              <Box component="button" type="button" sx={socialBtn}><GoogleG />Google</Box>
              <Box component="button" type="button" sx={socialBtn}><GithubG color={T.primaryText} />GitHub</Box>
            </Box>

            {/* Divider */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "12px", mb: "22px" }}>
              <Box sx={{ flex: 1, height: "0.5px", backgroundColor: T.border }} />
              <Typography sx={{ fontSize: "11px", color: T.secondaryText, letterSpacing: "0.06em" }}>OR</Typography>
              <Box sx={{ flex: 1, height: "0.5px", backgroundColor: T.border }} />
            </Box>

            {/* Fields */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <TextField
                label="Email" type="email" fullWidth size="small"
                value={email} onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors((p) => ({ ...p, email: undefined })); }}
                error={!!errors.email} helperText={errors.email} sx={inputSx(errors.email)}
              />
              <Box sx={{ position: "relative" }}>
                <TextField
                  label="Password" type={showPw ? "text" : "password"} fullWidth size="small"
                  value={password} onChange={(e) => { setPassword(e.target.value); if (errors.password) setErrors((p) => ({ ...p, password: undefined })); }}
                  error={!!errors.password} helperText={errors.password} sx={inputSx(errors.password)}
                />
                <Box
                  component="button"
                  type="button"
                  onClick={() => setShowPw((s) => !s)}
                  aria-label={showPw ? "Hide password" : "Show password"}
                  sx={{
                    position: "absolute", right: "10px", top: "8px",
                    width: "28px", height: "28px", border: "none", background: "none",
                    cursor: "pointer", color: T.secondaryText, display: "flex", alignItems: "center", justifyContent: "center",
                    "&:hover": { color: T.primaryText },
                  }}
                >
                  {showPw ? (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.9 5.1A9.6 9.6 0 0 1 12 5c6 0 10 7 10 7a17 17 0 0 1-3.2 3.9M6.6 6.6A17 17 0 0 0 2 12s4 7 10 7a9.4 9.4 0 0 0 4-.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  ) : (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.6" /></svg>
                  )}
                </Box>
              </Box>

              {/* Remember + forgot */}
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Box component="button" type="button" onClick={() => setRemember((r) => !r)} sx={{ display: "flex", alignItems: "center", gap: "8px", background: "none", border: "none", cursor: "pointer", p: 0, font: "inherit" }}>
                  <Box sx={{
                    width: "16px", height: "16px", borderRadius: "5px", flexShrink: 0,
                    border: `0.5px solid ${remember ? T.accent : T.border}`,
                    backgroundColor: remember ? T.accent : "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.2s ease",
                  }}>
                    {remember && <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M20 6 9 17l-5-5" stroke={T.ctaPrimaryText} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                  </Box>
                  <Typography sx={{ fontSize: "12.5px", color: T.secondaryText, fontFamily: "Prompt" }}>Remember me</Typography>
                </Box>
                <Typography sx={{ fontSize: "12.5px", color: T.accent, cursor: "pointer", fontFamily: "Prompt", "&:hover": { textDecoration: "underline" } }}>
                  Forgot password?
                </Typography>
              </Box>

              {/* Submit */}
              <Button
                type="submit"
                fullWidth
                disabled={status === "loading"}
                sx={{
                  py: "13px", mt: "4px",
                  backgroundColor: T.ctaPrimaryBg, color: T.ctaPrimaryText,
                  fontSize: "14px", fontWeight: 500, textTransform: "none", borderRadius: "9px",
                  transition: "background-color 0.25s ease, transform 0.2s ease",
                  "&:hover": { backgroundColor: T.ctaPrimaryHover, transform: "translateY(-2px)" },
                  "&.Mui-disabled": { backgroundColor: T.ctaPrimaryBg, color: T.ctaPrimaryText, opacity: 0.75 },
                }}
              >
                {status === "loading" ? (
                  <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Box sx={{ width: "16px", height: "16px", borderRadius: "50%", border: `2px solid ${T.ctaPrimaryText}`, borderTopColor: "transparent", animation: "spin 0.7s linear infinite", "@keyframes spin": { to: { transform: "rotate(360deg)" } } }} />
                    Signing in…
                  </Box>
                ) : "Log in"}
              </Button>
            </Box>

            <Typography sx={{ fontSize: "13px", color: T.secondaryText, textAlign: "center", mt: "24px" }}>
              Don't have an account?{" "}
              <Box component={RouterLink} to="/contact" sx={{ color: T.accent, fontWeight: 500, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                Get started
              </Box>
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Login;

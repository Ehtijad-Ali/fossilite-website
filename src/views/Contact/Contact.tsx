import { FC, FormEvent, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useSharedTokens } from "../../theme/sharedTokens";
import { FONT_DISPLAY } from "../../theme/fonts";
import { PageHero } from "../../components";
import { RightArrow } from "../../assets/Icons";

type Fields = { name: string; email: string; company: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INFO = [
  { label: "Email us", value: "hello@fossilite.ai", href: "mailto:hello@fossilite.ai" },
  { label: "Response time", value: "Within 1 business day" },
  { label: "Working", value: "100% remote · 12 countries" },
];

const FAQS = [
  {
    q: "How quickly can we get started?",
    a: "Most engagements kick off within a week. After a short scoping call we map your operation, agree on the first system to build, and start shipping — usually with a working slice inside the first few weeks.",
  },
  {
    q: "Do you work with our existing stack?",
    a: "Yes. We build native integrations into the tools your team already uses — OpenAI, Anthropic, Slack, GitHub, Notion, Google and more — rather than forcing a rip-and-replace.",
  },
  {
    q: "Who owns the code and data?",
    a: "You do. Every system we deliver — code, data and models — is fully handed over and documented. No lock-in, no black boxes, no hostage IP.",
  },
  {
    q: "What size projects do you take on?",
    a: "From a focused automation that reclaims a few hours a week to full production AI systems. If we don't think we can ship real impact, we'll tell you honestly up front.",
  },
];

export const Contact: FC = () => {
  const T = useSharedTokens();

  const [fields, setFields] = useState<Fields>({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const set = (key: keyof Fields) => (e: { target: { value: string } }) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Errors = {};
    if (!fields.name.trim()) next.name = "Please enter your name.";
    if (!fields.email.trim()) next.email = "Please enter your email.";
    else if (!emailRe.test(fields.email)) next.email = "That email doesn't look right.";
    if (!fields.message.trim()) next.message = "Tell us a little about your project.";
    else if (fields.message.trim().length < 10) next.message = "A few more details would help.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;
    if (!validate()) return;
    setStatus("loading");
    // Frontend-only: simulate a network request.
    window.setTimeout(() => setStatus("sent"), 1400);
  };

  const inputSx = (err?: string) => ({
    "& .MuiOutlinedInput-root": {
      backgroundColor: T.inputBg,
      borderRadius: "10px",
      color: T.inputText,
      fontSize: "14px",
      transition: "border-color 0.2s ease",
      "& fieldset": { borderColor: err ? "#c0392b" : T.inputBorder, borderWidth: "0.5px" },
      "&:hover fieldset": { borderColor: err ? "#c0392b" : T.inputHoverBorder },
      "&.Mui-focused fieldset": { borderColor: err ? "#c0392b" : T.inputFocusBorder, borderWidth: "1px" },
    },
    "& .MuiInputLabel-root": { color: T.inputLabel, fontSize: "14px" },
    "& .MuiInputLabel-root.Mui-focused": { color: err ? "#c0392b" : T.inputFocusBorder },
  });

  return (
    <Box sx={{ backgroundColor: T.bg }}>
      <PageHero
        eyebrow="Contact"
        title="Let's build"
        titleAccent="something."
        subtitle="Tell us about your operation and where AI could remove friction. A systems architect — not a sales bot — will get back to you within one business day."
      />

      <Box sx={{ px: { xs: "24px", sm: "48px", lg: "80px" }, py: { xs: "64px", md: "96px" } }}>
        <Box
          sx={{
            maxWidth: "1100px",
            mx: "auto",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1.15fr" },
            gap: { xs: "40px", md: "64px" },
            alignItems: "start",
          }}
        >
          {/* Left — info */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Typography sx={{ fontSize: "20px", fontWeight: 600, color: T.headline, fontFamily: "Prompt", mb: "4px" }}>
              Talk to a human.
            </Typography>
            <Typography sx={{ fontSize: "14px", color: T.secondaryText, lineHeight: 1.75, mb: "12px", maxWidth: "360px" }}>
              We reply fast, scope honestly, and only take on work we know we can ship. No pressure, no jargon.
            </Typography>

            {INFO.map((item) => (
              <Box
                key={item.label}
                sx={{
                  p: "18px 20px",
                  borderRadius: "14px",
                  border: `0.5px solid ${T.border}`,
                  backgroundColor: T.cardBg,
                  boxShadow: T.boxShadow,
                }}
              >
                <Typography
                  sx={{ fontSize: "10.5px", color: T.secondaryText, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, mb: "6px" }}
                >
                  {item.label}
                </Typography>
                {item.href ? (
                  <Box component="a" href={item.href} sx={{ fontSize: "15px", color: T.headline, textDecoration: "none", fontWeight: 500, "&:hover": { color: T.accent } }}>
                    {item.value}
                  </Box>
                ) : (
                  <Typography sx={{ fontSize: "15px", color: T.headline, fontWeight: 500 }}>{item.value}</Typography>
                )}
              </Box>
            ))}
          </Box>

          {/* Right — form */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              p: { xs: "24px", sm: "36px" },
              borderRadius: "18px",
              backgroundColor: T.cardBg,
              border: `0.5px solid ${T.border}`,
              boxShadow: T.boxShadow,
            }}
          >
            {status === "sent" ? (
              <Box sx={{ minHeight: "420px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: "16px" }}>
                <Box
                  sx={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: T.accentGlow,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animation: "popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both",
                    "@keyframes popIn": { from: { transform: "scale(0)", opacity: 0 }, to: { transform: "scale(1)", opacity: 1 } },
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6 9 17l-5-5" stroke={T.accent} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Box>
                <Typography sx={{ fontSize: "24px", fontWeight: 600, color: T.headline, fontFamily: "Prompt" }}>
                  Message received
                </Typography>
                <Typography sx={{ fontSize: "14px", color: T.secondaryText, lineHeight: 1.7, maxWidth: "340px" }}>
                  Thanks, {fields.name.split(" ")[0] || "there"} — we've got your message and will be in touch within one business day.
                </Typography>
                <Button
                  onClick={() => { setFields({ name: "", email: "", company: "", message: "" }); setStatus("idle"); }}
                  sx={{ mt: "8px", textTransform: "none", color: T.secondaryText, fontSize: "13px", "&:hover": { color: T.headline, backgroundColor: "transparent" } }}
                >
                  Send another message
                </Button>
              </Box>
            ) : (
              <>
                <Typography sx={{ fontSize: { xs: "20px", sm: "22px" }, fontWeight: 600, color: T.headline, fontFamily: "Prompt" }}>
                  Tell us about your project
                </Typography>
                <Typography sx={{ fontSize: "13px", color: T.secondaryText, mt: "6px", mb: "26px", lineHeight: 1.6 }}>
                  The more context you share, the sharper our first response.
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <TextField
                    label="Name" fullWidth size="small" value={fields.name} onChange={set("name")}
                    error={!!errors.name} helperText={errors.name} sx={inputSx(errors.name)}
                  />
                  <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: "20px" }}>
                    <TextField
                      label="Email" type="email" fullWidth size="small" value={fields.email} onChange={set("email")}
                      error={!!errors.email} helperText={errors.email} sx={inputSx(errors.email)}
                    />
                    <TextField
                      label="Company (optional)" fullWidth size="small" value={fields.company} onChange={set("company")}
                      sx={inputSx()}
                    />
                  </Box>
                  <TextField
                    label="Message" fullWidth multiline minRows={5} value={fields.message} onChange={set("message")}
                    error={!!errors.message} helperText={errors.message} sx={inputSx(errors.message)}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    disabled={status === "loading"}
                    endIcon={status === "loading" ? undefined : <RightArrow />}
                    sx={{
                      mt: "4px",
                      py: "13px",
                      backgroundColor: T.ctaPrimaryBg,
                      color: T.ctaPrimaryText,
                      fontSize: "14px",
                      fontWeight: 500,
                      textTransform: "none",
                      borderRadius: "9px",
                      transition: "background-color 0.25s ease, transform 0.2s ease",
                      "&:hover": { backgroundColor: T.ctaPrimaryHover, transform: "translateY(-2px)" },
                      "&.Mui-disabled": { backgroundColor: T.ctaPrimaryBg, color: T.ctaPrimaryText, opacity: 0.7 },
                      "& .MuiButton-endIcon svg": { filter: T.ctaPrimaryIcon },
                    }}
                  >
                    {status === "loading" ? (
                      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <Box
                          sx={{
                            width: "16px", height: "16px", borderRadius: "50%",
                            border: `2px solid ${T.ctaPrimaryText}`, borderTopColor: "transparent",
                            animation: "spin 0.7s linear infinite",
                            "@keyframes spin": { to: { transform: "rotate(360deg)" } },
                          }}
                        />
                        Sending…
                      </Box>
                    ) : (
                      "Send message"
                    )}
                  </Button>

                  <Typography sx={{ fontSize: "11.5px", color: T.secondaryText, textAlign: "center", lineHeight: 1.6 }}>
                    🔒 Your details stay private. We never share or sell your data.
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>

      {/* FAQ */}
      <Box sx={{ px: { xs: "24px", sm: "48px", lg: "80px" }, pb: { xs: "80px", md: "120px" }, borderTop: `0.5px solid ${T.border}`, pt: { xs: "64px", md: "96px" } }}>
        <Box sx={{ maxWidth: "760px", mx: "auto" }}>
          <Typography sx={{ fontSize: "11px", color: T.eyebrow, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, mb: "16px", textAlign: "center" }}>
            ✦ Before you ask
          </Typography>
          <Typography sx={{ fontSize: { xs: "28px", sm: "38px" }, fontWeight: 500, color: T.headline, textAlign: "center", fontFamily: FONT_DISPLAY, letterSpacing: "-0.02em", mb: { xs: "32px", md: "48px" } }}>
            Common questions.
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <Box
                  key={f.q}
                  sx={{
                    borderRadius: "14px",
                    border: `0.5px solid ${open ? T.accent : T.border}`,
                    backgroundColor: T.cardBg,
                    boxShadow: T.boxShadow,
                    overflow: "hidden",
                    transition: "border-color 0.25s ease",
                  }}
                >
                  <Box
                    component="button"
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    sx={{
                      width: "100%", cursor: "pointer", font: "inherit", fontFamily: "Prompt",
                      border: "none", background: "transparent", textAlign: "left",
                      display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px",
                      p: { xs: "18px 20px", sm: "20px 24px" },
                    }}
                  >
                    <Typography sx={{ fontSize: { xs: "15px", sm: "16px" }, fontWeight: 600, color: T.headline, fontFamily: "Prompt" }}>
                      {f.q}
                    </Typography>
                    <Box
                      sx={{
                        flexShrink: 0, color: T.accent, display: "flex",
                        transform: open ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateRows: open ? "1fr" : "0fr",
                      transition: "grid-template-rows 0.32s cubic-bezier(0.22,1,0.36,1)",
                    }}
                  >
                    <Box sx={{ overflow: "hidden" }}>
                      <Typography sx={{ fontSize: "14px", color: T.secondaryText, lineHeight: 1.75, p: { xs: "0 20px 20px", sm: "0 24px 24px" } }}>
                        {f.a}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;

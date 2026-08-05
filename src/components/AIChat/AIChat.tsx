import { FC, useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import { useSharedTokens } from "../../theme/sharedTokens";
import { scrollToSection } from "../../utils/scrollToSection";
import { replyFor } from "../../utils/assistantReplies";

type Msg = { role: "bot" | "user"; text: string };

const SUGGESTIONS = [
  "What do you build?",
  "How fast can you ship?",
  "Which tools do you integrate?",
  "Book a demo",
];

export const AIChat: FC = () => {
  const T = useSharedTokens();
  const [open, setOpen] = useState(false);
  const [unread, setUnread] = useState(true);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: "Hi 👋 I'm the Fossilite assistant. How can I help you build with AI today?" },
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number>(0);

  // Auto-scroll to newest message
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const handleOpen = () => {
    setOpen(true);
    setUnread(false);
  };

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return;
    setMessages((m) => [...m, { role: "user", text: trimmed }]);
    setInput("");
    setTyping(true);

    const { text: answer, action } = replyFor(trimmed);
    timeoutRef.current = window.setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { role: "bot", text: answer }]);
      if (action) {
        window.setTimeout(() => {
          setOpen(false);
          scrollToSection(action === "contact" ? "contact" : "case-studies");
        }, 900);
      }
    }, 1100);
  };

  const cardBg = T.isDark ? "rgba(22,22,22,0.82)" : "rgba(255,244,227,0.82)";
  const headerBg = T.isDark ? "rgba(30,30,30,0.9)" : "rgba(255,255,255,0.72)";

  return (
    <>
      {/* ── Floating launcher button ── */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="launcher"
            onClick={handleOpen}
            aria-label="Open AI assistant"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            style={{
              position: "fixed",
              bottom: 24,
              right: 24,
              zIndex: 1400,
              width: 60,
              height: 60,
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              background: T.ctaPrimaryBg,
              color: T.ctaPrimaryText,
              boxShadow: T.isDark
                ? "0 10px 34px rgba(0,0,0,0.5)"
                : "0 10px 34px rgba(0,25,50,0.28)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Pulse ring */}
            <Box
              component="span"
              sx={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: `1.5px solid ${T.ctaPrimaryBg}`,
                animation: "chatPulse 2.4s ease-out infinite",
                "@keyframes chatPulse": {
                  "0%": { transform: "scale(1)", opacity: 0.5 },
                  "100%": { transform: "scale(1.6)", opacity: 0 },
                },
              }}
            />
            <ChatGlyph />
            {unread && (
              <Box
                sx={{
                  position: "absolute",
                  top: 3,
                  right: 3,
                  minWidth: 18,
                  height: 18,
                  px: "5px",
                  borderRadius: "9px",
                  backgroundColor: "#C3A87C",
                  color: "#001932",
                  fontSize: "11px",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                }}
              >
                1
              </Box>
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Chat panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            style={{
              position: "fixed",
              bottom: 24,
              right: 24,
              zIndex: 1400,
              width: "min(380px, calc(100vw - 32px))",
              // dvh, not vh: on a phone `100vh` is the height with the address
              // bar hidden, so a panel sized against it is taller than the
              // screen whenever the bar is showing — which is most of the time.
              height: "min(560px, calc(100dvh - 48px))",
              borderRadius: 20,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              background: cardBg,
              backdropFilter: "blur(22px)",
              WebkitBackdropFilter: "blur(22px)",
              border: `0.5px solid ${T.border}`,
              boxShadow: T.isDark
                ? "0 24px 64px rgba(0,0,0,0.55)"
                : "0 24px 64px rgba(0,25,50,0.22)",
            }}
          >
            {/* Header */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                px: "18px",
                py: "14px",
                background: headerBg,
                borderBottom: `0.5px solid ${T.border}`,
                backdropFilter: "blur(10px)",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  backgroundColor: T.ctaPrimaryBg,
                  color: T.ctaPrimaryText,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <ChatGlyph size={18} />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "#3BC77A",
                    border: `2px solid ${T.bg}`,
                  }}
                />
              </Box>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography sx={{ fontSize: "14px", fontWeight: 600, color: T.primaryText, lineHeight: 1.3 }}>
                  Fossilite Assistant
                </Typography>
                <Typography sx={{ fontSize: "11px", color: T.secondaryText, lineHeight: 1.3 }}>
                  Online · replies instantly
                </Typography>
              </Box>
              <Box
                component="button"
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "8px",
                  border: `0.5px solid ${T.border}`,
                  background: "transparent",
                  color: T.secondaryText,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background-color 0.2s ease, color 0.2s ease",
                  "&:hover": { backgroundColor: T.surfaceSubtle, color: T.primaryText },
                }}
              >
                <CloseIcon sx={{ fontSize: 18 }} />
              </Box>
            </Box>

            {/* Messages */}
            <Box
              ref={scrollRef}
              sx={{
                flex: 1,
                overflowY: "auto",
                px: "16px",
                py: "18px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                "&::-webkit-scrollbar": { width: "6px" },
                "&::-webkit-scrollbar-thumb": { backgroundColor: T.border, borderRadius: "3px" },
              }}
            >
              {messages.map((m, i) => (
                <Bubble key={i} msg={m} T={T} />
              ))}

              {typing && (
                <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "4px",
                      alignItems: "center",
                      px: "14px",
                      py: "12px",
                      borderRadius: "14px 14px 14px 4px",
                      backgroundColor: T.surfaceSubtle,
                      border: `0.5px solid ${T.border}`,
                    }}
                  >
                    {[0, 1, 2].map((d) => (
                      <Box
                        key={d}
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          backgroundColor: T.secondaryText,
                          animation: "typingDot 1.2s ease-in-out infinite",
                          animationDelay: `${d * 0.18}s`,
                          "@keyframes typingDot": {
                            "0%,60%,100%": { transform: "translateY(0)", opacity: 0.4 },
                            "30%": { transform: "translateY(-4px)", opacity: 1 },
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              )}
            </Box>

            {/* Suggested prompts (only before the user has spoken) */}
            {messages.filter((m) => m.role === "user").length === 0 && (
              <Box sx={{ px: "16px", pb: "10px", display: "flex", flexWrap: "wrap", gap: "7px" }}>
                {SUGGESTIONS.map((s) => (
                  <Box
                    key={s}
                    component="button"
                    type="button"
                    onClick={() => send(s)}
                    sx={{
                      px: "11px",
                      py: "6px",
                      borderRadius: "99px",
                      border: `0.5px solid ${T.border}`,
                      background: "transparent",
                      color: T.secondaryText,
                      fontSize: "12px",
                      cursor: "pointer",
                      font: "inherit",
                      fontFamily: "Prompt",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        borderColor: T.accent,
                        color: T.primaryText,
                        transform: "translateY(-1px)",
                      },
                    }}
                  >
                    {s}
                  </Box>
                ))}
              </Box>
            )}

            {/* Input */}
            <Box
              component="form"
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                px: "12px",
                py: "12px",
                borderTop: `0.5px solid ${T.border}`,
                background: headerBg,
              }}
            >
              <Box
                component="input"
                value={input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                placeholder="Ask anything…"
                aria-label="Type your message"
                sx={{
                  flex: 1,
                  border: `0.5px solid ${T.border}`,
                  borderRadius: "10px",
                  background: T.bg,
                  color: T.primaryText,
                  fontSize: "14px",
                  fontFamily: "Prompt",
                  px: "14px",
                  py: "11px",
                  outline: "none",
                  transition: "border-color 0.2s ease",
                  "&:focus": { borderColor: T.accent },
                  "&::placeholder": { color: T.placeholder },
                }}
              />
              <Box
                component="button"
                type="submit"
                aria-label="Send message"
                disabled={!input.trim() || typing}
                sx={{
                  width: 42,
                  height: 42,
                  flexShrink: 0,
                  borderRadius: "10px",
                  border: "none",
                  cursor: input.trim() && !typing ? "pointer" : "default",
                  backgroundColor: T.ctaPrimaryBg,
                  color: T.ctaPrimaryText,
                  opacity: input.trim() && !typing ? 1 : 0.4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "opacity 0.2s ease, transform 0.15s ease",
                  "&:hover": input.trim() && !typing ? { transform: "scale(1.06)" } : {},
                  "&:active": { transform: "scale(0.94)" },
                }}
              >
                <SendIcon sx={{ fontSize: 17 }} />
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// ── Message bubble ─────────────────────────────────────────────────────────────
const Bubble: FC<{ msg: Msg; T: ReturnType<typeof useSharedTokens> }> = ({ msg, T }) => {
  const isBot = msg.role === "bot";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{ display: "flex", justifyContent: isBot ? "flex-start" : "flex-end" }}
    >
      <Box
        sx={{
          maxWidth: "82%",
          px: "14px",
          py: "10px",
          fontSize: "13.5px",
          lineHeight: 1.6,
          borderRadius: isBot ? "14px 14px 14px 4px" : "14px 14px 4px 14px",
          backgroundColor: isBot ? T.surfaceSubtle : T.ctaPrimaryBg,
          color: isBot ? T.primaryText : T.ctaPrimaryText,
          border: isBot ? `0.5px solid ${T.border}` : "none",
        }}
      >
        {msg.text}
      </Box>
    </motion.div>
  );
};

// ── Inline chat glyph ──────────────────────────────────────────────────────────
const ChatGlyph: FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="8.5" cy="11.5" r="1.1" fill="currentColor" />
    <circle cx="12" cy="11.5" r="1.1" fill="currentColor" />
    <circle cx="15.5" cy="11.5" r="1.1" fill="currentColor" />
  </svg>
);

export default AIChat;

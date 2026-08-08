import { FC, ReactNode } from "react";
import { Box, Typography } from "@mui/material";

import { useSharedTokens } from "../../theme/sharedTokens";
import { FONT_DISPLAY, FONT_MONO } from "../../theme/fonts";

export const GOLD = "#C3A87C";

/** Status colours, shared so a status means the same colour everywhere. */
export const TONE: Record<string, string> = {
  // Leads
  New: "#3B82F6",
  Contacted: "#F5A524",
  Qualified: "#22C55E",
  Won: "#A855F7",
  // Tasks
  "To Do": "#6366F1",
  "In Progress": "#F5A524",
  Done: "#22C55E",
  // Invoices
  Paid: "#22C55E",
  Pending: "#F5A524",
  Overdue: "#EF4444",
  // Onboarding
  "Not started": "#8296B4",
  Blocked: "#EF4444",
  Live: "#22C55E",
  // Priority
  Low: "#8296B4",
  Medium: "#F5A524",
  High: "#EF4444",
};

/** Mono uppercase micro-label used above groups, as elsewhere on the site. */
export const Label: FC<{ children: ReactNode; color?: string }> = ({ children, color }) => {
  const T = useSharedTokens();
  return (
    <Typography
      sx={{
        fontFamily: FONT_MONO,
        fontSize: "9px",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: color ?? T.mutedText,
      }}
    >
      {children}
    </Typography>
  );
};

/** Status pill. */
export const Tag: FC<{ text: string; color?: string; solid?: boolean }> = ({ text, color, solid }) => {
  const c = color ?? TONE[text] ?? "#8296B4";
  return (
    <Box
      component="span"
      sx={{
        display: "inline-block",
        px: "9px",
        py: "2px",
        borderRadius: "99px",
        fontSize: "10px",
        fontWeight: 700,
        letterSpacing: "0.05em",
        lineHeight: 1.7,
        whiteSpace: "nowrap",
        flexShrink: 0,
        color: solid ? "#fff" : c,
        backgroundColor: solid ? c : `${c}1f`,
        border: solid ? "none" : `0.5px solid ${c}55`,
      }}
    >
      {text}
    </Box>
  );
};

/** Bordered surface. The console's only container primitive. */
export const Card: FC<{ children: ReactNode; sx?: object; pad?: string }> = ({ children, sx, pad }) => {
  const T = useSharedTokens();
  return (
    <Box
      sx={{
        border: `0.5px solid ${T.border}`,
        borderRadius: "14px",
        backgroundColor: T.cardBg,
        boxShadow: T.boxShadow,
        p: pad ?? { xs: "16px", sm: "20px" },
        minWidth: 0,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

/** Page title block used at the top of every system view. */
export const ViewHeader: FC<{ eyebrow: string; title: string; sub: string; right?: ReactNode }> = ({
  eyebrow,
  title,
  sub,
  right,
}) => {
  const T = useSharedTokens();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: { xs: "flex-start", sm: "flex-end" },
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "row" },
        gap: "14px",
        mb: "22px",
      }}
    >
      <Box sx={{ minWidth: 0 }}>
        <Label color={GOLD}>{eyebrow}</Label>
        <Typography
          component="h1"
          sx={{
            fontFamily: FONT_DISPLAY,
            fontWeight: 500,
            letterSpacing: "-0.025em",
            fontSize: { xs: "28px", sm: "36px" },
            color: T.headline,
            lineHeight: 1.1,
            mt: "6px",
          }}
        >
          {title}
        </Typography>
        <Typography sx={{ fontSize: "14px", color: T.secondaryText, mt: "6px", maxWidth: "620px" }}>
          {sub}
        </Typography>
      </Box>
      {right}
    </Box>
  );
};

/** Headline number tile. */
export const Stat: FC<{ label: string; value: string; delta?: string; accent?: string }> = ({
  label,
  value,
  delta,
  accent,
}) => {
  const T = useSharedTokens();
  return (
    <Card pad="14px 16px" sx={accent ? { borderLeft: `3px solid ${accent}` } : undefined}>
      <Label color={accent}>{label}</Label>
      <Typography
        sx={{
          fontFamily: FONT_DISPLAY,
          fontWeight: 500,
          fontSize: { xs: "22px", sm: "26px" },
          color: T.headline,
          mt: "4px",
          lineHeight: 1.1,
        }}
      >
        {value}
      </Typography>
      {delta && (
        <Box sx={{ mt: "6px" }}>
          <Tag text={delta} color="#22C55E" />
        </Box>
      )}
    </Card>
  );
};

/** Text input matching the site's form styling. */
export const Field: FC<{
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  label: string;
  type?: string;
  icon?: ReactNode;
}> = ({ value, onChange, placeholder, label, type = "text", icon }) => {
  const T = useSharedTokens();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "9px",
        border: `0.5px solid ${T.border}`,
        borderRadius: "10px",
        px: "12px",
        backgroundColor: T.cardBg,
        transition: "border-color 0.2s ease",
        "&:focus-within": { borderColor: GOLD },
      }}
    >
      {icon}
      <Box
        component="input"
        type={type}
        value={value}
        aria-label={label}
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        sx={{
          flex: 1,
          minWidth: 0,
          border: "none",
          outline: "none",
          background: "transparent",
          py: "11px",
          fontSize: "14px",
          fontFamily: "Prompt",
          color: T.primaryText,
          "&::placeholder": { color: T.mutedText },
        }}
      />
    </Box>
  );
};

export const SearchIcon: FC = () => {
  const T = useSharedTokens();
  return (
    <Box component="svg" viewBox="0 0 24 24" sx={{ width: "15px", height: "15px", flexShrink: 0 }}>
      <circle cx="11" cy="11" r="7" fill="none" stroke={T.mutedText} strokeWidth="2" />
      <path d="M20 20l-3.5-3.5" stroke={T.mutedText} strokeWidth="2" strokeLinecap="round" />
    </Box>
  );
};

/** Primary / secondary button. */
export const Btn: FC<{
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  disabled?: boolean;
  full?: boolean;
  type?: "button" | "submit";
}> = ({ children, onClick, variant = "ghost", disabled, full, type = "button" }) => {
  const T = useSharedTokens();
  const primary = variant === "primary";
  return (
    <Box
      component="button"
      type={type}
      onClick={onClick}
      disabled={disabled}
      sx={{
        px: "16px",
        py: "9px",
        borderRadius: "9px",
        fontSize: "13px",
        fontWeight: 500,
        fontFamily: "Prompt",
        width: full ? "100%" : "auto",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.55 : 1,
        whiteSpace: "nowrap",
        color: primary ? T.ctaPrimaryText : T.primaryText,
        backgroundColor: primary ? T.ctaPrimaryBg : "transparent",
        border: primary ? "none" : `0.5px solid ${T.border}`,
        transition: "background-color 0.2s ease, border-color 0.2s ease, transform 0.15s ease",
        "&:hover": disabled
          ? {}
          : primary
            ? { backgroundColor: T.ctaPrimaryHover, transform: "translateY(-1px)" }
            : { borderColor: GOLD, transform: "translateY(-1px)" },
        "&:focus-visible": { outline: `2px solid ${GOLD}`, outlineOffset: "2px" },
      }}
    >
      {children}
    </Box>
  );
};

/** Right-hand detail drawer, used for lead / task / invoice / SOP records. */
export const Drawer: FC<{ open: boolean; onClose: () => void; title: string; children: ReactNode }> = ({
  open,
  onClose,
  title,
  children,
}) => {
  const T = useSharedTokens();
  if (!open) return null;
  return (
    <>
      <Box
        onClick={onClose}
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 1500,
          backgroundColor: "rgba(0,10,22,0.55)",
          backdropFilter: "blur(2px)",
          animation: "conFade 0.2s ease both",
        }}
      />
      <Box
        role="dialog"
        aria-modal="true"
        aria-label={title}
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 1501,
          width: { xs: "100%", sm: "430px" },
          maxWidth: "100%",
          backgroundColor: T.bgAlt,
          borderLeft: `0.5px solid ${T.border}`,
          overflowY: "auto",
          animation: "conSlide 0.28s cubic-bezier(0.22,1,0.36,1) both",
          p: { xs: "20px", sm: "26px" },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", mb: "18px" }}>
          <Typography
            sx={{
              fontFamily: FONT_DISPLAY,
              fontWeight: 500,
              fontSize: "22px",
              letterSpacing: "-0.02em",
              color: T.headline,
              lineHeight: 1.2,
            }}
          >
            {title}
          </Typography>
          <Box
            component="button"
            type="button"
            onClick={onClose}
            aria-label="Close"
            sx={{
              flexShrink: 0,
              width: "32px",
              height: "32px",
              display: "grid",
              placeItems: "center",
              borderRadius: "8px",
              cursor: "pointer",
              color: T.secondaryText,
              background: "transparent",
              border: `0.5px solid ${T.border}`,
              "&:hover": { borderColor: GOLD, color: T.primaryText },
            }}
          >
            <Box component="svg" viewBox="0 0 24 24" sx={{ width: "15px", height: "15px" }}>
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </Box>
          </Box>
        </Box>
        {children}
        <Box component="style">{`@keyframes conFade{from{opacity:0}to{opacity:1}}@keyframes conSlide{from{transform:translateX(28px);opacity:0}to{transform:none;opacity:1}}`}</Box>
      </Box>
    </>
  );
};

/** Label / value row inside a drawer. */
export const Row: FC<{ k: string; children: ReactNode }> = ({ k, children }) => {
  const T = useSharedTokens();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: "16px",
        py: "9px",
        borderBottom: `0.5px solid ${T.border}`,
      }}
    >
      <Label>{k}</Label>
      <Box sx={{ fontSize: "13.5px", color: T.primaryText, textAlign: "right", minWidth: 0 }}>{children}</Box>
    </Box>
  );
};

/** Horizontally swipeable board, matching how the marketing boards behave. */
export const boardSx = (cols: number) => ({
  display: { xs: "flex", md: "grid" },
  gridTemplateColumns: { md: `repeat(${cols}, minmax(0,1fr))` },
  gap: "12px",
  overflowX: { xs: "auto", md: "visible" },
  scrollSnapType: { xs: "x mandatory", md: "none" },
  pb: { xs: "8px", md: 0 },
  mx: { xs: "-16px", md: 0 },
  px: { xs: "16px", md: 0 },
  scrollbarWidth: "none" as const,
  "&::-webkit-scrollbar": { display: "none" },
});

export const columnSx = {
  flex: { xs: "0 0 250px", md: "initial" },
  scrollSnapAlign: { xs: "start", md: "none" },
};

export const money = (n: number) => `$${n.toLocaleString("en-US")}`;

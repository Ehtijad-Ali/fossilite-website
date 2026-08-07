import { FC, ReactNode } from "react";
import { Box, Typography } from "@mui/material";

/**
 * The light glass card every mockup sits in.
 *
 * `light` is driven by the toggle in the card header, so the switch in the
 * corner of each panel is a real control rather than decoration: it repaints
 * the whole mockup. Colours are held here so the six panels can't drift.
 */
export interface Skin {
  light: boolean;
  surface: string;
  raised: string;
  border: string;
  title: string;
  body: string;
  muted: string;
  track: string;
}

export const skinFor = (light: boolean): Skin =>
  light
    ? {
        light,
        surface: "rgba(255,255,255,0.72)",
        raised: "rgba(255,255,255,0.9)",
        border: "rgba(15,32,56,0.10)",
        title: "#0B1B33",
        body: "#243B5C",
        muted: "#7286A3",
        track: "rgba(15,32,56,0.08)",
      }
    : {
        light,
        surface: "rgba(14,28,48,0.72)",
        raised: "rgba(20,38,62,0.92)",
        border: "rgba(255,255,255,0.10)",
        title: "#F2F6FC",
        body: "#C6D3E6",
        muted: "#8296B4",
        track: "rgba(255,255,255,0.10)",
      };

/** The pill switch in the top-right of every panel. */
export const Toggle: FC<{ on: boolean; accent: string; onChange: () => void; label: string }> = ({
  on,
  accent,
  onChange,
  label,
}) => (
  <Box
    component="button"
    type="button"
    role="switch"
    aria-checked={on}
    aria-label={label}
    onClick={onChange}
    sx={{
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      p: 0,
      border: "none",
      background: "none",
      cursor: "pointer",
      flexShrink: 0,
      "&:focus-visible": { outline: `2px solid ${accent}`, outlineOffset: "3px", borderRadius: "20px" },
    }}
  >
    <Box
      sx={{
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        backgroundColor: on ? "rgba(255,255,255,0.55)" : "#ffffff",
        boxShadow: "0 1px 3px rgba(0,0,0,0.18)",
        transition: "background-color 0.25s ease",
      }}
    />
    <Box
      sx={{
        width: "34px",
        height: "18px",
        borderRadius: "99px",
        backgroundColor: on ? accent : "rgba(120,140,170,0.45)",
        position: "relative",
        transition: "background-color 0.25s ease",
        "&::after": {
          content: '""',
          position: "absolute",
          top: "3px",
          left: on ? "19px" : "3px",
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          transition: "left 0.25s cubic-bezier(0.4,0,0.2,1)",
        },
      }}
    />
  </Box>
);

/** Card shell: title, subtitle, toggle, then the mockup body. */
export const Panel: FC<{
  title: string;
  subtitle: string;
  accent: string;
  skin: Skin;
  onToggle: () => void;
  children: ReactNode;
}> = ({ title, subtitle, accent, skin, onToggle, children }) => (
  <Box
    sx={{
      borderRadius: "22px",
      border: `1.5px solid ${accent}`,
      boxShadow: `0 0 0 1px ${accent}22, 0 22px 60px rgba(0,0,0,0.45)`,
      background: skin.light
        ? "linear-gradient(135deg, #F4F8FF 0%, #FFFFFF 45%, #EEF4FF 100%)"
        : "linear-gradient(135deg, #0E1E36 0%, #132741 45%, #0E1E36 100%)",
      p: { xs: "16px", sm: "22px" },
      overflow: "hidden",
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "12px",
        mb: "16px",
      }}
    >
      <Box sx={{ minWidth: 0 }}>
        <Typography
          sx={{
            fontFamily: "Prompt",
            fontWeight: 700,
            fontSize: { xs: "17px", sm: "20px" },
            color: skin.title,
            lineHeight: 1.2,
          }}
        >
          {title}
        </Typography>
        <Typography sx={{ fontSize: { xs: "11px", sm: "12.5px" }, color: skin.muted, mt: "2px" }}>
          {subtitle}
        </Typography>
      </Box>
      <Toggle on={!skin.light} accent={accent} onChange={onToggle} label={`Switch ${title} preview theme`} />
    </Box>
    {children}
  </Box>
);

/** Small rounded status pill used across several panels. */
export const Pill: FC<{ text: string; color: string; solid?: boolean }> = ({ text, color, solid }) => (
  <Box
    component="span"
    sx={{
      display: "inline-block",
      px: "8px",
      py: "2px",
      borderRadius: "99px",
      fontSize: "9.5px",
      fontWeight: 700,
      letterSpacing: "0.06em",
      lineHeight: 1.6,
      whiteSpace: "nowrap",
      color: solid ? "#fff" : color,
      backgroundColor: solid ? color : `${color}22`,
    }}
  >
    {text}
  </Box>
);

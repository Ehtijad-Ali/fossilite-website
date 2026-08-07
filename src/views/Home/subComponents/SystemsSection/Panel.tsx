import { FC, ReactNode } from "react";
import { Box, Typography } from "@mui/material";

import { FONT_DISPLAY } from "../../../../theme/fonts";

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

/**
 * Panel colours, drawn from the site palette rather than invented.
 *
 * Light is the warm cream side (#FFF4E3 / #fdf6ec / #001932 ink), dark is the
 * navy side (#0e1a2b / #13233a / #172b44 with cream text). Those are the same
 * values in theme/sharedTokens, hardcoded here only because a panel can be
 * flipped against the page theme.
 */
export const skinFor = (light: boolean): Skin =>
  light
    ? {
        light,
        surface: "rgba(253,246,236,0.86)",
        raised: "#ffffff",
        border: "#d9c9b0",
        title: "#001932",
        body: "#4a4a6a",
        muted: "#9a9384",
        track: "rgba(0,25,50,0.08)",
      }
    : {
        light,
        surface: "rgba(19,35,58,0.82)",
        raised: "#172b44",
        border: "#263b57",
        title: "#FFF4E3",
        body: "#BBC0C6",
        muted: "#8a8a8a",
        track: "rgba(255,244,227,0.10)",
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
      borderRadius: "18px",
      // Hairline in the accent rather than a heavy stroke: the site draws
      // everything at 0.5px and uses borders, not shadows, for depth on navy.
      border: `0.5px solid ${accent}`,
      boxShadow: skin.light
        ? `0 0 0 1px ${accent}18, 0 8px 40px rgba(0,25,50,0.06)`
        : `0 0 0 1px ${accent}18`,
      background: skin.light
        ? "linear-gradient(160deg, #ffffff 0%, #fdf6ec 55%, #f5ede0 100%)"
        : "linear-gradient(160deg, #13233a 0%, #0e1a2b 55%, #13233a 100%)",
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
            fontFamily: FONT_DISPLAY,
            fontWeight: 500,
            letterSpacing: "-0.015em",
            fontSize: { xs: "18px", sm: "21px" },
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
      // Never squash: the pill is the fixed element and the label beside it is
      // the one that should truncate.
      flexShrink: 0,
      color: solid ? "#fff" : color,
      backgroundColor: solid ? color : `${color}22`,
    }}
  >
    {text}
  </Box>
);

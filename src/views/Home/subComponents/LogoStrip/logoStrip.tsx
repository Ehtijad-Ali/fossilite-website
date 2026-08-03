import { FC, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { useThemeMode } from "../../../../theme/theme";

import Logo1 from "../../../../assets/Images/Featured/Cuebig.png";
import Logo2 from "../../../../assets/Images/Featured/Gobona.png";
import Logo3 from "../../../../assets/Images/Featured/Martino.png";
import Logo4 from "../../../../assets/Images/Featured/Paperz.png";
import Logo5 from "../../../../assets/Images/Featured/Square.png";
import Logo6 from "../../../../assets/Images/Featured/Fossilite.svg";

export const LogoStrip: FC = () => {
  const { mode } = useThemeMode();
  const isLight = mode === "light";

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef   = useRef<HTMLDivElement>(null);
  const smoothRef = useRef({ x: 0.5, y: 0.5 });
  const targetRef = useRef({ x: 0.5, y: 0.5 });
  const rafRef    = useRef<number>(0);

  // ── Theme tokens ────────────────────────────────────────────────────────
  const bgColor     = isLight ? "#FFF4E3" : "#0e1a2b";
  const borderColor = isLight ? "#d9c9b0" : "#263b57";
  const labelColor  = isLight ? "#6a6a6a" : "#BBC0C6";
  const dc          = isLight ? "0,25,50"  : "187,192,198"; // Midnight / GreyCloud

  const dotBase   = isLight ? 0.020 : 0.025;
  const dotBright = isLight ? 0.06  : 0.10;
  const dotGlow   = isLight ? 0.22  : 0.35;
  const lineBase  = isLight ? 0.04  : 0.07;
  const lineBoost = isLight ? 0.09  : 0.16;
  const partBase  = isLight ? 0.10  : 0.15;
  const partBoost = isLight ? 0.22  : 0.38;
  const ringAlpha = isLight ? 0.45  : 0.90;

  const images = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

  useEffect(() => {
    const canvas = canvasRef.current!;
    const wrap   = wrapRef.current!;
    const ctx    = canvas.getContext("2d")!;
    let W = 0, H = 0, time = 0;

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random(), y: Math.random(),
      vx: (Math.random() - 0.5) * 1.5e-4,
      vy: (Math.random() - 0.5) * 1.5e-4,
      r: Math.random() * 0.9 + 0.3,
      phase: Math.random() * Math.PI * 2,
    }));

    const resize = () => {
      const r = wrap.getBoundingClientRect();
      W = canvas.width  = r.width  * devicePixelRatio;
      H = canvas.height = r.height * devicePixelRatio;
    };

    const onMouseMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      targetRef.current = {
        x: (e.clientX - r.left) / r.width,
        y: (e.clientY - r.top)  / r.height,
      };
    };
    const onMouseLeave = () => { targetRef.current = { x: 0.5, y: 0.5 }; };

    wrap.addEventListener("mousemove",  onMouseMove);
    wrap.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize",   resize);
    resize();

    const loop = () => {
      time += 0.007;
      smoothRef.current.x += (targetRef.current.x - smoothRef.current.x) * 0.05;
      smoothRef.current.y += (targetRef.current.y - smoothRef.current.y) * 0.05;
      const { x: sx, y: sy } = smoothRef.current;
      const tiltX = (sy - 0.5) * 0.25;
      const tiltY = (sx - 0.5) * 0.25;
      const w  = W / devicePixelRatio;
      const h  = H / devicePixelRatio;
      const mx = sx * w;
      const my = sy * h;

      ctx.clearRect(0, 0, W, H);
      ctx.save();
      ctx.scale(devicePixelRatio, devicePixelRatio);

      // dot grid
      const cols = 32, rows = 10, cw = w / cols, rh = h / rows;
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const bx   = c * cw, by = r * rh;
          const wave = Math.sin(c * 0.4 + time * 0.9) * 7
                     + Math.cos(r * 0.5 + time * 0.6) * 5;
          const persp = 1 + tiltX * (r / rows - 0.5) * 0.5
                          + tiltY * (c / cols - 0.5) * 0.5;
          const x = bx + tiltY * (bx - w / 2) * 0.05;
          const y = by + wave * persp + tiltX * (by - h / 2) * 0.05;
          const bright = 0.5 + 0.5 * Math.sin(c * 0.3 + r * 0.4 + time * 0.7);
          const dm   = Math.hypot(x - mx, y - my) / 100;
          const glow = Math.max(0, 1 - dm);
          ctx.beginPath();
          ctx.arc(x, y, 0.6 + glow * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${dc},${dotBase + bright * dotBright + glow * dotGlow})`;
          ctx.fill();
        }
      }

      // particles + connections
      for (const p of particles) {
        p.x += p.vx + Math.sin(time + p.phase) * 6e-5;
        p.y += p.vy + Math.cos(time + p.phase * 0.8) * 5e-5;
        if (p.x < 0) p.x = 1; if (p.x > 1) p.x = 0;
        if (p.y < 0) p.y = 1; if (p.y > 1) p.y = 0;
      }
      for (let i = 0; i < particles.length; i++) {
        const a  = particles[i];
        const ax = a.x * w, ay = a.y * h;
        const dm    = Math.hypot(ax - mx, ay - my);
        const boost = Math.max(0, 1 - dm / 110);
        for (let j = i + 1; j < particles.length; j++) {
          const b   = particles[j];
          const bx2 = b.x * w, by2 = b.y * h;
          const d   = Math.hypot(ax - bx2, ay - by2);
          if (d < 90) {
            ctx.beginPath();
            ctx.moveTo(ax, ay); ctx.lineTo(bx2, by2);
            ctx.strokeStyle = `rgba(${dc},${(1 - d / 90) * lineBase + boost * lineBoost})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
        ctx.beginPath();
        ctx.arc(ax, ay, a.r + boost * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dc},${partBase + boost * partBoost})`;
        ctx.fill();
      }

      // orbital rings
      const RINGS = [
        { rx: w * 0.38, ry: h * 0.22, speed:  0.18, alpha: 0.018, thick: 0.8 },
        { rx: w * 0.28, ry: h * 0.30, speed: -0.14, alpha: 0.025, thick: 0.6 },
        { rx: w * 0.18, ry: h * 0.38, speed:  0.22, alpha: 0.030, thick: 0.5 },
      ];
      const cx = w / 2, cy = h * 0.5;
      for (const rg of RINGS) {
        const angle  = rg.speed * time;
        const scaleX = rg.rx + tiltY * rg.rx * 0.3;
        const scaleY = rg.ry + tiltX * rg.ry * 0.3;
        ctx.beginPath();
        ctx.ellipse(
          cx + tiltY * rg.rx * 0.2,
          cy + tiltX * rg.ry * 0.2,
          scaleX, scaleY, angle, 0, Math.PI * 2,
        );
        ctx.strokeStyle = `rgba(${dc},${rg.alpha * ringAlpha})`;
        ctx.lineWidth = rg.thick;
        ctx.stroke();

        const dotX = cx + Math.cos(angle * 2.1) * scaleX + tiltY * rg.rx * 0.2;
        const dotY = cy + Math.sin(angle * 2.1) * scaleY * 0.6 + tiltX * rg.ry * 0.2;
        ctx.beginPath();
        ctx.arc(dotX, dotY, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dc},${rg.alpha * 6 * ringAlpha})`;
        ctx.fill();
      }

      ctx.restore();

      rafRef.current = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(rafRef.current);
      wrap.removeEventListener("mousemove",  onMouseMove);
      wrap.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize",   resize);
    };
  }, [mode]);

  return (
    <Box
      ref={wrapRef}
      sx={{
        position: "relative",
        backgroundColor: bgColor,
        borderTop:    `0.5px solid ${borderColor}`,
        borderBottom: `0.5px solid ${borderColor}`,
        px: { xs: "24px", sm: "48px", lg: "80px" },
        py: { xs: "36px", sm: "48px" },
        overflow: "hidden",
        transition: "background-color 0.4s ease, border-color 0.4s ease",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
      />

      <Typography sx={{
        position: "relative", zIndex: 2,
        fontSize: "11px", color: labelColor, letterSpacing: "0.08em",
        textTransform: "uppercase", textAlign: "center",
        mb: "32px", fontWeight: 500,
        transition: "color 0.4s ease",
      }}>
        Trusted by teams building what's next
      </Typography>

      {/* Infinite marquee — single line scrolling right → left */}
      <Box sx={{
        position: "relative", zIndex: 2,
        overflow: "hidden",
        // narrow fade only at the very edges — logos stay crisp across the line
        maskImage: "linear-gradient(90deg, transparent 0%, #000 4%, #000 96%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 4%, #000 96%, transparent 100%)",
      }}>
        <Box sx={{
          display: "flex",
          width: "max-content",
          // move the track right by exactly one copy (1/3 of the tripled track)
          "@keyframes logoMarquee": {
            from: { transform: "translateX(-33.3333%)" },
            to:   { transform: "translateX(0)" },
          },
          animation: "logoMarquee 40s linear infinite",
          "&:hover": { animationPlayState: "paused" },
        }}>
          {/* tripled so the loop is seamless and always fills wide screens */}
          {[...images, ...images, ...images].map((src, i) => (
            <Box
              key={i}
              sx={{
                flexShrink: 0,
                px: { xs: "18px", sm: "28px", md: "36px" },
                display: "flex", alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={src}
                sx={{
                  width: { xs: "90px", sm: "110px", xl: "140px" },
                  height: "44px",
                  objectFit: "contain",
                  opacity: isLight ? 0.5 : 0.4,
                  filter: "grayscale(100%)",
                  display: "block",
                  borderRadius: "6px",
                  transition: "opacity 0.35s ease, filter 0.35s ease, transform 0.3s ease",
                  "&:hover": {
                    opacity: 0.92,
                    filter: "grayscale(0%)",
                    transform: "scale(1.06)",
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
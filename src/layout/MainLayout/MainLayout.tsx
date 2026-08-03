// src/layout/MainLayout.tsx
import { FC, ReactNode, useState, useCallback, useEffect, useRef } from "react";
import { Box }    from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { PageLoader } from "../../components/PageLoader";
import { setLenis } from "../../utils/lenis";

interface LayoutProps { children: ReactNode; }

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [loaderDone, setLoaderDone] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  const handleFinish = useCallback(() => setLoaderDone(true), []);

  // ── Global smooth scrolling (Lenis) ───────────────────────────────────────
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smoothWheel: true,
    });
    lenisRef.current = lenis;
    setLenis(lenis);
    lenis.stop(); // locked until the loader finishes

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      setLenis(null);
    };
  }, []);

  // Lock scrolling while the loader is visible, release it once done.
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    if (loaderDone) lenis.start();
    else lenis.stop();
  }, [loaderDone]);

  return (
    <Box>
      {/* Loader — sits above everything until done */}
      <AnimatePresence>
        {!loaderDone && <PageLoader onFinish={handleFinish} />}
      </AnimatePresence>

      {/* Main content — fades in after loader finishes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaderDone ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Box>{children}</Box>
      </motion.div>

      {/* Subtle film-grain overlay — adds an editorial, premium texture site-wide */}
      <Box
        aria-hidden
        sx={{
          position: "fixed", inset: 0, zIndex: 2000, pointerEvents: "none",
          opacity: 0.045, mixBlendMode: "overlay",
          backgroundSize: "150px 150px",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </Box>
  );
};
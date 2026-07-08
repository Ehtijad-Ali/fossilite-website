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
    </Box>
  );
};
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getLenis } from "../utils/lenis";

// Resets scroll position to the top on every route change. Uses the shared
// Lenis instance when present (Home) and falls back to native scroll elsewhere.
export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0, { immediate: true });
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return null;
};

export default ScrollToTop;

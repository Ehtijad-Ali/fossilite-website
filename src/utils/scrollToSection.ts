// Smoothly scrolls to an on-page section by its element id.
// Shared by the Navbar and Footer so both navigate the page identically.
// Uses Lenis when available (consistent with the global smooth scroll),
// falling back to the native smooth scroll otherwise.
import { getLenis } from "./lenis";

export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  const offset = 100; // navbar height + extra breathing room
  const lenis = getLenis();

  if (lenis) {
    lenis.scrollTo(el, { offset: -offset });
  } else {
    const top = el.getBoundingClientRect().top + globalThis.scrollY - offset;
    globalThis.scrollTo({ top, behavior: "smooth" });
  }
};

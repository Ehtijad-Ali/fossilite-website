// Holds the single app-wide Lenis instance so non-React code (e.g.
// scrollToSection) can drive smooth programmatic scrolling. Set by the Layout
// when Lenis is initialised, cleared on unmount.
import type Lenis from "lenis";

let instance: Lenis | null = null;

export const setLenis = (l: Lenis | null) => { instance = l; };
export const getLenis = (): Lenis | null => instance;

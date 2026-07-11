"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook to detect if the user has requested reduced motion at the OS level.
 * Used to conditionally disable or simplify heavy Framer Motion/GSAP animations.
 */
export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", listener);
    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, []);

  return prefersReducedMotion;
}

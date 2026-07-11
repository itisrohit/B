"use client";

import { useLenis } from "lenis/react";

/**
 * Custom hook wrapper for Lenis smooth scrolling.
 * Provides programmatic scrolling and scroll locking control.
 */
export function useLenisScroll() {
  const lenis = useLenis();

  const scrollTo = (
    target: string | number | HTMLElement,
    options?: {
      offset?: number;
      immediate?: boolean;
      duration?: number;
      easing?: (t: number) => number;
      onComplete?: () => void;
    }
  ) => {
    if (lenis) {
      lenis.scrollTo(target, options);
    }
  };

  const stopScroll = () => {
    lenis?.stop();
  };

  const startScroll = () => {
    lenis?.start();
  };

  return {
    lenis,
    scrollTo,
    stopScroll,
    startScroll,
  };
}

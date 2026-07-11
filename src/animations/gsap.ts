import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Safely register ScrollTrigger on client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Basic Fade In using GSAP
 */
export const animateFadeIn = (element: string | HTMLElement | null, options?: gsap.TweenVars) => {
  if (!element) return null;
  return gsap.fromTo(
    element,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      ...options,
    }
  );
};

/**
 * Slide Up and Fade In using GSAP
 */
export const animateSlideUp = (
  element: string | HTMLElement | null,
  options?: gsap.TweenVars,
  yOffset = 50
) => {
  if (!element) return null;
  return gsap.fromTo(
    element,
    { opacity: 0, y: yOffset },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      ...options,
    }
  );
};

/**
 * Continuous Floating effect
 */
export const animateFloat = (
  element: string | HTMLElement | null,
  yOffset = 15,
  duration = 3,
  options?: gsap.TweenVars
) => {
  if (!element) return null;
  return gsap.to(element, {
    y: -yOffset,
    duration,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    ...options,
  });
};

/**
 * Continuous Rotation effect
 */
export const animateRotate = (
  element: string | HTMLElement | null,
  rotation = 360,
  duration = 10,
  options?: gsap.TweenVars
) => {
  if (!element) return null;
  return gsap.to(element, {
    rotation,
    duration,
    ease: "none",
    repeat: -1,
    ...options,
  });
};

/**
 * Parallax scroll effect triggered by a scroll container
 */
export const animateParallax = (
  element: string | HTMLElement | null,
  trigger: string | HTMLElement | null,
  speed = 0.2, // standard speed factor
  options?: gsap.TweenVars
) => {
  if (!element || !trigger) return null;
  return gsap.to(element, {
    yPercent: -100 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: trigger,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      ...options?.scrollTrigger as object,
    },
    ...options,
  });
};

/**
 * Scroll-triggered fade & slide animation (revealing on scroll)
 */
export const revealOnScroll = (
  element: string | HTMLElement | null,
  options?: gsap.TweenVars,
  yOffset = 30
) => {
  if (!element) return null;
  return gsap.fromTo(
    element,
    { opacity: 0, y: yOffset },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      ...options,
    }
  );
};
export { ScrollTrigger };

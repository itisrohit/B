import { Variants } from "framer-motion";

// Basic fade in animation
export const fadeIn = (duration = 0.5, delay = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration, delay, ease: "easeOut" },
  },
});

// Slide up and fade in
export const slideUp = (duration = 0.6, delay = 0, yOffset = 30): Variants => ({
  hidden: { opacity: 0, y: yOffset },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: "easeOut" },
  },
});

// Floating animation (infinite loop)
export const float = (duration = 3, yOffset = 10): Variants => ({
  animate: {
    y: [0, -yOffset, 0],
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

// Hover wiggle / slight rotate (often used for stickers)
export const rotateHover = (rotationDegrees = 5): Variants => ({
  initial: { rotate: 0 },
  hover: {
    rotate: [0, rotationDegrees, -rotationDegrees, 0],
    transition: {
      duration: 0.4,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
});

// Scale up and fade in
export const scaleUp = (duration = 0.4, delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration, delay, ease: "easeOut" },
  },
});

// Parent container for staggered animations
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// A quick-use preset structure for Framer Motion animate props
export const motionPresets = {
  fadeIn: {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-100px" },
    variants: fadeIn(),
  },
  slideUp: {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-100px" },
    variants: slideUp(),
  },
  float: {
    animate: "animate",
    variants: float(),
  },
  hoverScale: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  },
};

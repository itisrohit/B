"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PixelCharacterProps {
  color?: string; // hex or tailwind fill class
  size?: number;
  animate?: "bounce" | "wiggle" | "none";
  className?: string;
}

export function PixelCharacter({
  color = "fill-pink-500",
  size = 64,
  animate = "bounce",
  className,
}: PixelCharacterProps) {
  // SVG grid: 16x16 pixels representing a cute retro pixel cat
  // Each rect defines a pixel (with shape-rendering="crispEdges" for retro sharpness)
  
  const animationVariants = {
    none: {},
    bounce: {
      animate: {
        y: [0, -8, 0],
      },
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
    wiggle: {
      animate: {
        rotate: [0, 8, -8, 0],
      },
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  const selectedAnimation = animationVariants[animate];

  return (
    <motion.div
      {...selectedAnimation}
      style={{ width: size, height: size }}
      className={cn("inline-block pointer-events-auto select-none", className)}
    >
      <svg
        viewBox="0 0 16 16"
        className="w-full h-full"
        shapeRendering="crispEdges"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Pixel Cat Sprite Map (16x16) */}
        <g className="fill-zinc-900 dark:fill-zinc-800">
          {/* Outline / Ears */}
          <rect x="2" y="3" width="1" height="3" />
          <rect x="3" y="2" width="1" height="1" />
          <rect x="4" y="3" width="1" height="1" />
          
          <rect x="11" y="3" width="1" height="1" />
          <rect x="12" y="2" width="1" height="1" />
          <rect x="13" y="3" width="1" height="3" />

          {/* Head sides */}
          <rect x="1" y="6" width="1" height="5" />
          <rect x="14" y="6" width="1" height="5" />

          {/* Top of head */}
          <rect x="5" y="4" width="6" height="1" />

          {/* Body sides & bottom */}
          <rect x="2" y="11" width="1" height="3" />
          <rect x="13" y="11" width="1" height="3" />
          <rect x="3" y="14" width="10" height="1" />

          {/* Eyes */}
          <rect x="4" y="7" width="2" height="2" className="fill-zinc-900" />
          <rect x="10" y="7" width="2" height="2" className="fill-zinc-900" />
          
          {/* Nose/Mouth */}
          <rect x="7" y="9" width="2" height="1" className="fill-zinc-900" />
        </g>

        {/* Main Base Color (Petals/Fur) */}
        <g className={color}>
          {/* Ear fill */}
          <rect x="3" y="3" width="1" height="3" />
          <rect x="12" y="3" width="1" height="3" />

          {/* Head interior */}
          <rect x="4" y="4" width="1" height="2" />
          <rect x="11" y="4" width="1" height="2" />
          <rect x="2" y="6" width="12" height="5" />

          {/* Body interior */}
          <rect x="3" y="11" width="10" height="3" />
        </g>

        {/* Accent Colors (Cheeks/Eyes Shine) */}
        <g className="fill-pink-300">
          {/* Blush cheeks */}
          <rect x="3" y="9" width="1" height="1" />
          <rect x="12" y="9" width="1" height="1" />
        </g>
        <g className="fill-white">
          {/* Eye shines */}
          <rect x="4" y="7" width="1" height="1" />
          <rect x="10" y="7" width="1" height="1" />
        </g>
      </svg>
    </motion.div>
  );
}

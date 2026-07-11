"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FlowerProps {
  size?: number;
  color?: string; // Tailwind color class or hex string
  animate?: "spin" | "float" | "none";
  className?: string;
}

export function Flower({
  size = 48,
  color = "fill-pink-400",
  animate = "float",
  className,
}: FlowerProps) {
  // Animation variants
  const animations = {
    none: {},
    spin: {
      animate: { rotate: 360 },
      transition: { duration: 12, repeat: Infinity, ease: "linear" as const },
    },
    float: {
      animate: {
        y: [0, -6, 0],
        rotate: [0, 5, -5, 0],
      },
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  const selectedAnimation = animations[animate];

  return (
    <motion.div
      {...selectedAnimation}
      style={{ width: size, height: size }}
      className={cn("pointer-events-none select-none inline-block", className)}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-md"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer petals */}
        <g className={color}>
          {/* Petal 1 (Top) */}
          <circle cx="50" cy="22" r="18" />
          {/* Petal 2 (Right-Top) */}
          <circle cx="74" cy="34" r="18" />
          {/* Petal 3 (Right-Bottom) */}
          <circle cx="74" cy="66" r="18" />
          {/* Petal 4 (Bottom) */}
          <circle cx="50" cy="78" r="18" />
          {/* Petal 5 (Left-Bottom) */}
          <circle cx="26" cy="66" r="18" />
          {/* Petal 6 (Left-Top) */}
          <circle cx="26" cy="34" r="18" />
        </g>
        {/* Flower Center */}
        <circle cx="50" cy="50" r="16" className="fill-yellow-300 stroke-zinc-900 stroke-2" />
        {/* Center smile face detail (Subtle cute detail) */}
        <path
          d="M45 48 Q47 50 49 48"
          stroke="black"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M51 48 Q53 50 55 48"
          stroke="black"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M46 54 Q50 58 54 54"
          stroke="black"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}

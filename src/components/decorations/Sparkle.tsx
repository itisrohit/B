"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SparkleProps {
  size?: number;
  color?: string; // hex or tailwind fill class
  delay?: number; // animation stagger delay
  className?: string;
}

export function Sparkle({
  size = 24,
  color = "fill-yellow-400",
  delay = 0,
  className,
}: SparkleProps) {
  return (
    <motion.div
      animate={{
        scale: [0.8, 1.2, 0.8],
        opacity: [0.5, 1, 0.5],
        rotate: [0, 15, -15, 0],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      style={{ width: size, height: size }}
      className={cn("pointer-events-none select-none inline-block", className)}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-full h-full drop-shadow-sm"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Retro 4-pointed sparkle star shape */}
        <path
          d="M12 0L14.7 9.3L24 12L14.7 14.7L12 24L9.3 14.7L0 12L9.3 9.3L12 0Z"
          className={color}
        />
      </svg>
    </motion.div>
  );
}

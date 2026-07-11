"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingDecorationProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  floatY?: number; // travel distance
  duration?: number; // scroll/hover speed
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

export function FloatingDecoration({
  top,
  left,
  right,
  bottom,
  floatY = 12,
  duration = 4,
  delay = 0,
  className,
  children,
}: FloatingDecorationProps) {
  return (
    <motion.div
      style={{
        position: "absolute",
        top,
        left,
        right,
        bottom,
      }}
      animate={{
        y: [0, -floatY, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      className={cn("pointer-events-none select-none z-10", className)}
    >
      <div className="pointer-events-auto">{children}</div>
    </motion.div>
  );
}

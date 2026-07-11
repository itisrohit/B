"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButterflyProps {
  size?: number;
  color?: string; // Tailwind fill class
  className?: string;
}

export function Butterfly({
  size = 36,
  color = "fill-purple-400",
  className,
}: ButterflyProps) {
  return (
    <motion.div
      animate={{
        // Float path
        y: [0, -10, 0],
        x: [0, 5, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ width: size, height: size }}
      className={cn("pointer-events-none select-none inline-block", className)}
    >
      <motion.svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-md"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          // Wing flap simulation: scaling the wings horizontally
          scaleX: [1, 0.2, 1],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Butterfly body */}
        <path d="M50 25 C48 25 47 40 47 70 C47 75 49 78 50 78 C51 78 53 75 53 70 C53 40 52 25 50 25 Z" className="fill-zinc-800" />
        {/* Antennae */}
        <path d="M49 26 Q40 10 38 12 M51 26 Q60 10 62 12" stroke="#27272a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        
        {/* Left Wings */}
        <path
          d="M48 45 C35 15 10 20 12 48 C14 70 30 65 48 55 Z"
          className={color}
          opacity="0.85"
        />
        <path
          d="M48 55 C35 60 20 75 22 85 C24 95 40 85 48 65 Z"
          className={color}
          opacity="0.7"
        />

        {/* Right Wings */}
        <path
          d="M52 45 C65 15 90 20 88 48 C86 70 70 65 52 55 Z"
          className={color}
          opacity="0.85"
        />
        <path
          d="M52 55 C65 60 80 75 78 85 C76 95 60 85 52 65 Z"
          className={color}
          opacity="0.7"
        />
      </motion.svg>
    </motion.div>
  );
}

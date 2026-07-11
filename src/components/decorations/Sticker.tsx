"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StickerProps {
  emoji?: string;
  label?: string;
  variant?: "heart" | "star" | "bow" | "cherry" | "smiley" | "custom";
  rotation?: number; // degree
  draggable?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function Sticker({
  emoji,
  label,
  variant = "custom",
  rotation = 0,
  draggable = false,
  className,
  children,
}: StickerProps) {
  // Built-in vector emoji templates for y2k / kawaii style if children/emoji not supplied
  const stickerTemplates = {
    heart: "💖",
    star: "⭐",
    bow: "🎀",
    cherry: "🍒",
    smiley: "🌈",
    custom: "✨",
  };

  const activeContent = emoji || children || stickerTemplates[variant];

  return (
    <motion.div
      drag={draggable}
      dragElastic={0.1}
      dragTransition={{ power: 0.2, timeConstant: 200 }}
      whileHover={{
        scale: 1.1,
        rotate: rotation + (rotation > 0 ? 5 : -5),
        cursor: draggable ? "grab" : "pointer",
      }}
      whileDrag={{ scale: 1.2, zIndex: 50, cursor: "grabbing" }}
      style={{ rotate: `${rotation}deg` }}
      className={cn(
        "inline-flex items-center justify-center p-3 bg-white dark:bg-zinc-800 border-4 border-white dark:border-zinc-700 rounded-full shadow-md select-none pointer-events-auto transform-gpu",
        // White stroke outer contour line (physical sticker appearance)
        "ring-2 ring-zinc-300/40 dark:ring-zinc-800",
        className
      )}
    >
      <div className="flex flex-col items-center gap-0.5">
        <span className="text-2xl filter drop-shadow-xs leading-none">
          {activeContent}
        </span>
        {label && (
          <span className="text-[9px] font-extrabold uppercase bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-300 px-1 rounded-sm tracking-wider">
            {label}
          </span>
        )}
      </div>
    </motion.div>
  );
}

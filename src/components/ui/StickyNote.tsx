"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StickyNoteProps {
  text?: string;
  color?: "pink" | "purple" | "yellow" | "blue" | "green";
  rotation?: number; // degree of rotation
  className?: string;
  children?: React.ReactNode;
}

export function StickyNote({
  text,
  color = "yellow",
  rotation = 0,
  className,
  children,
}: StickyNoteProps) {
  const colorMap = {
    pink: "bg-pink-100 text-pink-900 dark:bg-pink-950/80 dark:text-pink-100 border-pink-200/50 dark:border-pink-900/50",
    purple: "bg-purple-100 text-purple-900 dark:bg-purple-950/80 dark:text-purple-100 border-purple-200/50 dark:border-purple-900/50",
    yellow: "bg-amber-100 text-amber-900 dark:bg-amber-950/80 dark:text-amber-100 border-amber-200/50 dark:border-amber-900/50",
    blue: "bg-blue-100 text-blue-900 dark:bg-blue-950/80 dark:text-blue-100 border-blue-200/50 dark:border-blue-900/50",
    green: "bg-emerald-100 text-emerald-900 dark:bg-emerald-950/80 dark:text-emerald-100 border-emerald-200/50 dark:border-emerald-900/50",
  };

  const tapeColorMap = {
    pink: "bg-pink-300/40 dark:bg-pink-800/40",
    purple: "bg-purple-300/40 dark:bg-purple-800/40",
    yellow: "bg-amber-300/40 dark:bg-amber-800/40",
    blue: "bg-blue-300/40 dark:bg-blue-800/40",
    green: "bg-emerald-300/40 dark:bg-emerald-800/40",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4, rotate: rotation + (rotation >= 0 ? -1 : 1) }}
      whileTap={{ scale: 0.98 }}
      style={{ rotate: `${rotation}deg` }}
      className={cn(
        "relative p-6 border shadow-md hover:shadow-lg transition-shadow rounded-sm max-w-[280px] w-full aspect-square flex flex-col justify-between font-mono select-none overflow-hidden",
        colorMap[color],
        className
      )}
    >
      {/* Tape decoration at the top */}
      <div
        className={cn(
          "absolute top-0 left-1/2 -translate-x-1/2 h-5 w-20 -rotate-2 border-x border-b border-black/5 shadow-xs",
          tapeColorMap[color]
        )}
      />

      <div className="pt-2 flex-grow overflow-y-auto scrollbar-none text-sm leading-relaxed">
        {text ? <p>{text}</p> : children}
      </div>

      <div className="mt-4 flex items-center justify-end">
        <span className="text-[10px] uppercase tracking-wider opacity-60">
          ★ Note
        </span>
      </div>
    </motion.div>
  );
}

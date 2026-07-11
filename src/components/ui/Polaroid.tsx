"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PolaroidProps {
  src?: string;
  alt?: string;
  caption?: string;
  rotation?: number; // e.g. -5 to 5 degrees
  className?: string;
  aspectRatio?: "square" | "portrait";
  onClick?: () => void;
}

export function Polaroid({
  src,
  alt = "Scrapbook photo",
  caption,
  rotation = 0,
  className,
  aspectRatio = "square",
  onClick,
}: PolaroidProps) {
  // Safe default placeholder image using a data URL if no image is passed
  const imageSrc = src || "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'><rect width='300' height='300' fill='%23ffd3e8'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%23ff4a9a'>Photo Placeholder</text></svg>";

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5, zIndex: 10, rotate: rotation + (rotation > 0 ? -1 : 1) }}
      whileTap={{ scale: 0.98 }}
      style={{ rotate: `${rotation}deg` }}
      onClick={onClick}
      className={cn(
        "bg-white dark:bg-zinc-800 p-4 pb-8 shadow-lg hover:shadow-xl transition-shadow border border-zinc-200/50 dark:border-zinc-700/50 rounded-xs flex flex-col items-center w-full max-w-[280px] cursor-pointer select-none",
        className
      )}
    >
      {/* Photo Frame Container */}
      <div
        className={cn(
          "relative w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/20 dark:border-zinc-800",
          aspectRatio === "square" ? "aspect-square" : "aspect-[3/4]"
        )}
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 280px"
          priority={false}
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Write-in Caption Area */}
      {caption && (
        <p className="mt-4 font-serif text-sm md:text-base text-zinc-700 dark:text-zinc-300 text-center tracking-wide line-clamp-2 w-full px-1">
          {caption}
        </p>
      )}
    </motion.div>
  );
}

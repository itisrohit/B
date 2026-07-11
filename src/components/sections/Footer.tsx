"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Sparkle } from "@/components/decorations/Sparkle";

interface FooterProps {
  text?: string;
  className?: string;
}

export function Footer({
  text = "Our scrapbook. Made with digital love.",
  className,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "py-12 border-t border-zinc-200/50 dark:border-zinc-800/50 w-full flex flex-col items-center justify-center text-center px-4 select-none bg-white dark:bg-zinc-950",
        className
      )}
    >
      <div className="flex items-center gap-2 mb-4">
        <Sparkle size={16} color="fill-pink-400" />
        <span className="font-mono text-[10px] sm:text-xs tracking-widest text-zinc-400 dark:text-zinc-600 uppercase">
          ★ End of File ★
        </span>
        <Sparkle size={16} color="fill-pink-400" delay={0.8} />
      </div>

      <p className="font-mono text-xs text-zinc-500 max-w-md mb-2 leading-relaxed">
        {text}
      </p>

      <div className="font-mono text-[9px] text-zinc-400 dark:text-zinc-600 flex flex-col sm:flex-row gap-1 sm:gap-4 items-center">
        <span>© {currentYear} Scrapbook Project. All rights reserved.</span>
        <span className="hidden sm:inline">•</span>
        <span>Pixel Art, Web and Sound Prep Foundation.</span>
      </div>
    </footer>
  );
}

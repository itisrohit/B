"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export function Hero({
  id,
  className,
  children,
}: HeroProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden border-b border-zinc-200/50 dark:border-zinc-800/50",
        className
      )}
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/assets/backgrounds/hero/hero-bg-v1.webp"
          alt="Scrapbook background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Semi-transparent mask overlay for text readability */}
        <div className="absolute inset-0 bg-white/60 dark:bg-zinc-950/70" />
      </div>

      {/* Children elements (Custom built in Chapter 1) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        {children}
      </div>
    </section>
  );
}

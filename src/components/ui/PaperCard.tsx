"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PaperCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "lined" | "grid" | "blank";
  children?: React.ReactNode;
}

export function PaperCard({
  variant = "lined",
  className,
  children,
  ...props
}: PaperCardProps) {
  // Styles for the card background using Tailwind's custom classes or gradients
  const baseStyle = "w-full p-6 md:p-8 rounded-md border border-zinc-200 dark:border-zinc-800 shadow-md relative overflow-hidden bg-white dark:bg-zinc-900";
  
  const patternStyles = {
    blank: "",
    lined: cn(
      "bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)]",
      "bg-[size:100%_1.75rem] before:absolute before:left-10 before:top-0 before:bottom-0 before:w-[1px] before:bg-red-400/50 before:content-[''] pl-14"
    ),
    grid: cn(
      "bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)]",
      "dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]",
      "bg-[size:1.25rem_1.25rem]"
    ),
  };

  return (
    <div
      className={cn(baseStyle, patternStyles[variant], className)}
      {...props}
    >
      {/* Visual ring binder punches if we are on lined variant */}
      {variant === "lined" && (
        <div className="absolute left-3 top-0 bottom-0 flex flex-col justify-around py-4 w-4 pointer-events-none select-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 shadow-inner"
            />
          ))}
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

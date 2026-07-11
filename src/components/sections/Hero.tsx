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
        "relative min-h-screen w-full flex flex-col items-center justify-center px-4 overflow-hidden",
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
      </div>

      {/* Sliced Sakura Branch Left - Layer 1 (Main branch body: Top Left) */}
      <div className="absolute top-0 -left-4 z-10 w-[176px] h-[90px] sm:w-[330px] sm:h-[162px] md:w-[462px] md:h-[227px] lg:w-[594px] lg:h-[290px] pointer-events-none select-none">
        <Image
          src="/assets/decorations/flowers/sakura-branch-left-1.webp"
          alt="Sakura branch main left"
          fill
          priority
          sizes="(max-width: 640px) 176px, (max-width: 768px) 330px, (max-width: 1024px) 462px, 594px"
          className="object-contain object-left-top rotate-[4deg]"
        />
      </div>

      {/* Sliced Sakura Branch Left - Layer 2 (Single flower blossom: Below Layer 1) */}
      <div className="absolute -left-8 z-10 top-[70px] sm:top-[130px] md:top-[185px] lg:top-[240px] w-[88px] h-[81px] sm:w-[165px] sm:h-[153px] md:w-[220px] md:h-[204px] pointer-events-none select-none">
        <Image
          src="/assets/decorations/flowers/sakura-branch-left-2.webp"
          alt="Sakura blossom cluster left"
          fill
          priority
          sizes="(max-width: 640px) 88px, (max-width: 768px) 165px, 220px"
          className="object-contain object-left-top rotate-[15deg]"
        />
      </div>

      {/* Sliced Sakura Branch Left - Layer 3 (Secondary branch extension: Below Layer 2) */}
      <div className="absolute -left-4 z-10 top-[85px] sm:top-[160px] md:top-[230px] lg:top-[285px] w-[55px] h-[20px] sm:w-[99px] sm:h-[36px] md:w-[149px] md:h-[54px] lg:w-[198px] lg:h-[72px] pointer-events-none select-none">
        <Image
          src="/assets/decorations/flowers/sakura-branch-left-3.webp"
          alt="Sakura branch secondary left"
          fill
          priority
          sizes="(max-width: 640px) 55px, (max-width: 768px) 99px, (max-width: 1024px) 149px, 198px"
          className="object-contain object-left-top rotate-[15deg]"
        />
      </div>

      {/* Children elements (Custom built in Chapter 1) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        {children}
      </div>
    </section>
  );
}

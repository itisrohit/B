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
      <div className="absolute top-0 -left-4 z-10 w-[158px] h-[81px] sm:w-[297px] sm:h-[146px] md:w-[416px] md:h-[204px] lg:w-[535px] lg:h-[261px] pointer-events-none select-none">
        <Image
          src="/assets/decorations/flowers/sakura-branch-left-1.webp"
          alt="Sakura branch main left"
          fill
          priority
          sizes="(max-width: 640px) 158px, (max-width: 768px) 297px, (max-width: 1024px) 416px, 535px"
          className="object-contain object-left-top rotate-[4deg]"
        />
      </div>

      {/* Sliced Sakura Branch Left - Layer 2 (Single flower blossom: Below Layer 1) */}
      <div className="absolute -left-8 z-10 top-[55px] sm:top-[105px] md:top-[150px] lg:top-[195px] w-[88px] h-[81px] sm:w-[165px] sm:h-[153px] md:w-[220px] md:h-[204px] pointer-events-none select-none">
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
      <div className="absolute -left-4 z-10 top-[70px] sm:top-[135px] md:top-[195px] lg:top-[240px] w-[55px] h-[20px] sm:w-[99px] sm:h-[36px] md:w-[149px] md:h-[54px] lg:w-[198px] lg:h-[72px] pointer-events-none select-none">
        <Image
          src="/assets/decorations/flowers/sakura-branch-left-3.webp"
          alt="Sakura branch secondary left"
          fill
          priority
          sizes="(max-width: 640px) 55px, (max-width: 768px) 99px, (max-width: 1024px) 149px, 198px"
          className="object-contain object-left-top rotate-[15deg]"
        />
      </div>

      {/* Centered Loading Card */}
      <div className="absolute z-20 top-5 left-16 sm:top-10 sm:left-28 md:top-14 md:left-40 w-[90%] max-w-[160px] sm:max-w-[240px] md:max-w-[320px] h-[145px] sm:h-[225px] md:h-[300px] pointer-events-none select-none">
        <Image
          src="/assets/decorations/loading/loading-card-v1.webp"
          alt="Welcome Loading Card"
          fill
          priority
          sizes="(max-width: 640px) 90vw, (max-width: 768px) 270px, 360px"
          className="object-contain filter drop-shadow-lg"
        />
      </div>

      {/* Hero Photo Cluster (Scrapbook spread right side) */}
      <div
        className="absolute z-20 top-0 -right-8 sm:top-1 sm:-right-12 md:top-2 md:-right-16 w-[299px] h-[351px] sm:w-[522px] sm:h-[535px] md:w-[745px] md:h-[765px] pointer-events-none select-none"
        style={{ transformOrigin: "top right", transform: "scale(0.77) scaleY(1.1) scaleX(0.95)" }}
      >
        <Image
          src="/assets/decorations/photos/hero-photo-cluster-v1.webp"
          alt="Hero Photo Cluster"
          fill
          priority
          sizes="(max-width: 640px) 299px, (max-width: 768px) 522px, 745px"
          className="object-contain rotate-[5deg]"
        />
      </div>

      {/* Pixel Character - Girl (Bottom Left) */}
      <div
        className="absolute z-20 -bottom-4 -left-2 sm:-bottom-5 sm:-left-4 md:-bottom-6 md:-left-6 w-[120px] h-[103px] sm:w-[200px] sm:h-[172px] md:w-[280px] md:h-[241px] pointer-events-none select-none"
        style={{ transformOrigin: "bottom left", transform: "scale(2.1)" }}
      >
        <Image
          src="/assets/pixel/girl-pixel-v1.webp"
          alt="Girl pixel character decoration"
          fill
          priority
          sizes="(max-width: 640px) 120px, (max-width: 768px) 200px, 280px"
          className="object-contain"
        />
      </div>

      {/* Children elements (Custom built in Chapter 1) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        {children}
      </div>
    </section>
  );
}

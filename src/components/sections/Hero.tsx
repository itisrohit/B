"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { slideUp, fadeIn } from "@/animations/framer";
import { Flower } from "@/components/decorations/Flower";
import { Sparkle } from "@/components/decorations/Sparkle";
import { FloatingDecoration } from "@/components/decorations/FloatingDecoration";

interface HeroProps {
  id?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string;
}

export function Hero({
  id,
  title = "Our Digital Scrapbook",
  subtitle = "A retro-inspired space dedicated to our favorite memories, shared chats, and future plans.",
  ctaText = "Enter Scrapbook",
  onCtaClick,
  className,
}: HeroProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden border-b border-zinc-200/50 dark:border-zinc-800/50",
        className
      )}
    >
      {/* Background Image */}
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
      {/* Decorative floating stickers & graphics as visual samples */}
      <FloatingDecoration top="15%" left="10%" floatY={15} duration={4.5}>
        <Flower size={56} color="fill-pink-400" animate="spin" />
      </FloatingDecoration>
      <FloatingDecoration top="20%" right="12%" floatY={10} duration={3.5} delay={0.5}>
        <Sparkle size={32} color="fill-yellow-400" delay={0.2} />
      </FloatingDecoration>
      <FloatingDecoration bottom="25%" left="15%" floatY={12} duration={5} delay={1}>
        <Sparkle size={24} color="fill-pink-300" delay={0.5} />
      </FloatingDecoration>
      <FloatingDecoration bottom="20%" right="18%" floatY={8} duration={4} delay={0.2}>
        <Flower size={42} color="fill-purple-400" animate="float" />
      </FloatingDecoration>

      {/* Main hero card */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="text-center max-w-2xl z-10 flex flex-col items-center select-none"
      >
        <motion.span
          variants={slideUp(0.6, 0, 20)}
          className="px-3 py-1 bg-pink-100 text-pink-700 dark:bg-pink-950/80 dark:text-pink-300 rounded-full font-mono text-xs font-black uppercase tracking-wider mb-4 border border-pink-200/50 dark:border-pink-900/50 shadow-xs"
        >
          ★ Welcome to the Scaffolding ★
        </motion.span>
        
        <motion.h1
          variants={slideUp(0.6, 0, 30)}
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-text-primary mb-6"
        >
          {title}
        </motion.h1>

        <motion.p
          variants={slideUp(0.6, 0, 20)}
          className="text-base sm:text-lg text-zinc-500 max-w-lg mb-8 leading-relaxed"
        >
          {subtitle}
        </motion.p>

        <motion.div variants={fadeIn(0.5)}>
          <button
            onClick={onCtaClick}
            className={cn(
              "px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-bold",
              "border-2 border-pink-600 shadow-[0_4px_0_#db2777] active:translate-y-1 active:shadow-none transition-all",
              "focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            )}
          >
            {ctaText}
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

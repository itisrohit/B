"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { slideUp } from "@/animations/framer";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  align = "center",
  className,
}: SectionTitleProps) {
  const alignmentClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={slideUp(0.6)}
      className={cn("flex flex-col mb-12 select-none", alignmentClass, className)}
    >
      {subtitle && (
        <span className="text-sm font-semibold tracking-wider uppercase text-purple-600 dark:text-purple-400 mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      <div className="h-1 w-16 bg-pink-500 rounded-full mt-4" />
    </motion.div>
  );
}

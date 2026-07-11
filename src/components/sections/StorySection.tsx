"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Polaroid } from "@/components/ui/Polaroid";
import { StoryEvent } from "@/types";
import { staggerContainer, slideUp } from "@/animations/framer";

interface StorySectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  events?: StoryEvent[];
  className?: string;
  children?: React.ReactNode;
}

export function StorySection({
  id,
  title = "Our Story Timeline",
  subtitle = "A few snapshots of our favorite moments together",
  events = [],
  className,
  children,
}: StorySectionProps) {
  return (
    <section id={id} className={cn("py-20 px-4 max-w-6xl mx-auto w-full select-none", className)}>
      <SectionTitle title={title} subtitle={subtitle} />

      {children ? (
        children
      ) : events.length > 0 ? (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.2, 0.1)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center mt-12"
        >
          {events.map((event, index) => {
            // Alternate rotations between positive and negative for the scrapbook feeling
            const rotation = (index % 3 === 0 ? -4 : index % 3 === 1 ? 3 : -1) * (1.2 - index * 0.1);
            return (
              <motion.div key={event.id} variants={slideUp(0.6)}>
                <Polaroid
                  src={event.imageSrc}
                  caption={event.title}
                  rotation={rotation}
                  aspectRatio="portrait"
                  alt={event.title}
                />
                <p className="mt-4 text-xs font-mono text-zinc-400 text-center max-w-[240px] mx-auto leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      ) : (
        <div className="text-center py-12 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-lg">
          <p className="text-zinc-400 italic">No events or child items provided. Fill me with scrapbook polaroids!</p>
        </div>
      )}
    </section>
  );
}

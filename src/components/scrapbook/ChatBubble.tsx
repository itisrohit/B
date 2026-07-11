"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ChatBubbleProps {
  sender: "user1" | "user2";
  message: string;
  timestamp?: string;
  avatarText?: string; // e.g. "ME" or "U"
  className?: string;
}

export function ChatBubble({
  sender,
  message,
  timestamp,
  avatarText,
  className,
}: ChatBubbleProps) {
  const isUser1 = sender === "user1";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className={cn(
        "flex items-end gap-3 max-w-[85%] mb-4 select-none",
        isUser1 ? "self-start" : "self-end flex-row-reverse",
        className
      )}
    >
      {/* Retro Pixel Avatar stamp */}
      <div
        className={cn(
          "w-8 h-8 rounded-xs border-2 border-zinc-700 dark:border-zinc-500 flex items-center justify-center font-mono font-black text-xs shrink-0 shadow-xs",
          isUser1
            ? "bg-pink-400 text-white"
            : "bg-purple-400 text-white"
        )}
      >
        {avatarText || (isUser1 ? "⭐" : "🎀")}
      </div>

      {/* Bubble Container */}
      <div className="flex flex-col gap-1">
        <div
          className={cn(
            "p-3 rounded-xl border-2 border-zinc-700 dark:border-zinc-500 shadow-[2px_2px_0px_rgba(0,0,0,0.15)] dark:shadow-[2px_2px_0px_rgba(255,255,255,0.05)] text-sm font-mono leading-relaxed",
            isUser1
              ? "bg-pink-50 text-pink-900 rounded-bl-none dark:bg-pink-950/40 dark:text-pink-100"
              : "bg-purple-50 text-purple-900 rounded-br-none dark:bg-purple-950/40 dark:text-purple-100"
          )}
        >
          <p>{message}</p>
        </div>

        {/* Timestamp */}
        {timestamp && (
          <span
            className={cn(
              "text-[9px] font-mono text-zinc-400 dark:text-zinc-500",
              isUser1 ? "text-left pl-1" : "text-right pr-1"
            )}
          >
            {timestamp}
          </span>
        )}
      </div>
    </motion.div>
  );
}

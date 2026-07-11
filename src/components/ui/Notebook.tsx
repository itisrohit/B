"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface NotebookTab {
  id: string;
  label: string;
}

interface NotebookProps {
  title?: string;
  tabs?: NotebookTab[];
  activeTabId?: string;
  onTabSelect?: (id: string) => void;
  leftPageContent?: React.ReactNode;
  rightPageContent?: React.ReactNode;
  className?: string;
}

export function Notebook({
  title,
  tabs = [],
  activeTabId,
  onTabSelect,
  leftPageContent,
  rightPageContent,
  className,
}: NotebookProps) {
  return (
    <div className={cn("w-full max-w-4xl mx-auto flex flex-col md:flex-row items-stretch select-none relative", className)}>
      {/* Side Tabs (Visible on Desktop) */}
      {tabs.length > 0 && (
        <div className="flex md:flex-col flex-row overflow-x-auto md:overflow-visible gap-1 md:pr-1 md:pt-8 md:order-first z-0">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => onTabSelect?.(tab.id)}
                className={cn(
                  "px-4 py-2 text-xs md:text-sm font-bold whitespace-nowrap rounded-t-md md:rounded-tr-none md:rounded-l-md transition-all border border-zinc-200 dark:border-zinc-800",
                  isActive
                    ? "bg-pink-500 text-white border-pink-600 translate-y-0.5 md:translate-x-0.5 md:translate-y-0 font-extrabold shadow-sm"
                    : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-pink-50 dark:hover:bg-zinc-800"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Main Journal Body */}
      <div className="flex-grow bg-white dark:bg-zinc-900 border-4 border-zinc-700 dark:border-zinc-600 rounded-2xl shadow-xl flex flex-col md:flex-row relative overflow-hidden min-h-[480px]">
        {/* Notebook Spine Rings (Center binder rings) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-6 flex flex-col justify-between py-6 pointer-events-none z-20 hidden md:flex">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center justify-between w-full px-0.5">
              {/* Left hole */}
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
              {/* Silver ring */}
              <div className="w-4 h-2 bg-gradient-to-r from-zinc-400 via-zinc-200 to-zinc-500 rounded-full border border-zinc-600/30" />
              {/* Right hole */}
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
            </div>
          ))}
          {/* Middle spine shadow */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-zinc-400/20 dark:bg-zinc-900/50" />
        </div>

        {/* Left Page */}
        <div className="flex-1 p-6 md:p-8 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800 relative bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-[size:16px_16px]">
          {title && (
            <h3 className="text-xl font-bold text-text-primary mb-6 border-b-2 border-dashed border-zinc-200 dark:border-zinc-800 pb-2">
              📖 {title}
            </h3>
          )}
          <div className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300">
            {leftPageContent || <p className="text-zinc-400 italic">Left page content placeholder...</p>}
          </div>
        </div>

        {/* Right Page */}
        <div className="flex-1 p-6 md:p-8 relative bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_1.5rem]">
          <div className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300">
            {rightPageContent || <p className="text-zinc-400 italic">Right page content placeholder...</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

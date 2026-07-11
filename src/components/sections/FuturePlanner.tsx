"use client";

import React, { useState } from "react";
import { Notebook } from "@/components/ui/Notebook";
import { FuturePlan } from "@/types";
import { CheckSquare, Square } from "lucide-react";

interface FuturePlannerProps {
  plans: FuturePlan[];
}

export function FuturePlanner({ plans }: FuturePlannerProps) {
  const [activeTab, setActiveTab] = useState("bucket-list");

  const tabs = [
    { id: "bucket-list", label: "🪣 Bucket List" },
    { id: "dreams", label: "💭 Future Dreams" },
  ];

  const leftContent =
    activeTab === "bucket-list" ? (
      <div className="flex flex-col gap-4 select-none">
        <h4 className="font-bold text-md text-pink-600 dark:text-pink-400 uppercase tracking-wider">
          Our Shared Goals
        </h4>
        <div className="flex flex-col gap-3">
          {plans.map((plan) => (
            <div key={plan.id} className="flex items-start gap-3 text-sm">
              {plan.status === "completed" ? (
                <CheckSquare className="text-pink-500 shrink-0 mt-0.5" size={16} id={`checkbox-${plan.id}`} />
              ) : (
                <Square className="text-zinc-400 shrink-0 mt-0.5" size={16} id={`checkbox-${plan.id}`} />
              )}
              <div className="flex flex-col">
                <span
                  className={
                    plan.status === "completed"
                      ? "line-through text-zinc-400"
                      : "font-semibold text-zinc-800 dark:text-zinc-200"
                  }
                >
                  {plan.title}
                </span>
                <span className="text-[11px] text-zinc-500 font-mono">
                  [{plan.category}] {plan.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div className="flex flex-col gap-4 select-none">
        <h4 className="font-bold text-md text-purple-600 dark:text-purple-400 uppercase tracking-wider">
          Long-Term Visions
        </h4>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          This is a placeholder for long-term aspirations: buying a cozy home, building creative projects, or other relationship milestones.
        </p>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Each partner can write down dreams and drag virtual stickers onto them!
        </p>
      </div>
    );

  const rightContent = (
    <div className="flex flex-col gap-4 select-none">
      <h4 className="font-bold text-md text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">
        💡 Planning Tips
      </h4>
      <div className="p-4 bg-amber-50 dark:bg-zinc-800 border border-amber-200 dark:border-zinc-700 rounded-lg text-xs text-amber-800 dark:text-amber-300 font-mono leading-relaxed">
        This interactive journal layout scales perfectly on mobile viewports. Tabs slide dynamically and center rings hide to keep content highly legible.
      </div>
      <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 font-mono">
        Add custom date pickers or weather forecasts for travel plans here in future iterations.
      </p>
    </div>
  );

  return (
    <Notebook
      title={activeTab === "bucket-list" ? "Bucket List Tab" : "Dreams Log"}
      tabs={tabs}
      activeTabId={activeTab}
      onTabSelect={setActiveTab}
      leftPageContent={leftContent}
      rightPageContent={rightContent}
    />
  );
}

"use client";

import { CategoryInfo } from "@/lib/menu-data";

const ACTIVE_BG: Record<string, string> = {
  pink: "bg-pink-500",
  green: "bg-green-500",
  orange: "bg-orange-500",
};

export function CategoryTabs({
  categories,
  active,
  onChange,
}: {
  categories: CategoryInfo[];
  active: string;
  onChange: (key: string) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 px-1">
      {categories.map((cat) => {
        const isActive = active === cat.key;
        return (
          <button
            key={cat.key}
            onClick={() => onChange(cat.key)}
            className={`shrink-0 font-display font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 ${
              isActive
                ? `${ACTIVE_BG[cat.color]} text-white shadow-pop scale-105`
                : "bg-white text-choc/60 hover:text-choc shadow-card"
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}

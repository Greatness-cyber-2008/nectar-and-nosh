import { Leaf, HeartHandshake, Timer, Snowflake } from "lucide-react";

const ICONS = [Leaf, Timer, HeartHandshake, Snowflake];

import { BRAND } from "@/lib/menu-data";

export function BadgesStrip() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
      {BRAND.badges.map((badge, i) => {
        const Icon = ICONS[i % ICONS.length];
        return (
          <div
            key={badge}
            className="flex flex-col items-center text-center gap-2 bg-white/70 rounded-2xl px-3 py-4 shadow-card"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600">
              <Icon size={20} />
            </span>
            <span className="font-display font-semibold text-xs sm:text-sm text-choc">
              {badge}
            </span>
          </div>
        );
      })}
    </div>
  );
}

"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CATEGORIES, MENU_ITEMS } from "@/lib/menu-data";
import { CategoryTabs } from "@/components/menu/category-tabs";
import { MenuCard } from "@/components/menu/menu-card";

export function MenuClient() {
  const searchParams = useSearchParams();
  const initial = searchParams.get("category") || "smoothies";
  const [active, setActive] = useState(initial);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setActive(cat);
  }, [searchParams]);

  const items = useMemo(
    () => MENU_ITEMS.filter((i) => i.category === active),
    [active]
  );

  const activeCategory = CATEGORIES.find((c) => c.key === active);

  return (
    <div>
      <CategoryTabs categories={CATEGORIES} active={active} onChange={setActive} />

      <div className="mt-6 mb-8">
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-choc">
          {activeCategory?.label}
        </h2>
        <p className="text-choc/50 text-sm">{activeCategory?.tagline}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item, i) => (
          <MenuCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Plus, MessageCircle } from "lucide-react";
import { MenuItem, formatNaira, BRAND } from "@/lib/menu-data";
import { useCart } from "@/components/cart/cart-context";

const ACCENTS: Record<string, string> = {
  smoothies: "border-pink-400",
  juices: "border-orange-400",
  milkshakes: "border-green-500",
  snacks: "border-orange-400",
  meals: "border-pink-400",
};

export function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const { addItem, justAdded } = useCart();
  const isMeal = item.price === null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: (index % 6) * 0.05 }}
      className={`relative bg-white rounded-3xl p-5 shadow-card border-t-4 ${ACCENTS[item.category]} flex flex-col gap-3`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-4xl leading-none">{item.emoji}</span>
        {!isMeal && (
          <span className="font-display font-extrabold text-lg text-choc whitespace-nowrap">
            {formatNaira(item.price!)}
          </span>
        )}
      </div>
      <div>
        <h3 className="font-display font-bold text-choc">{item.name}</h3>
        {item.description && (
          <p className="text-sm text-choc/60 mt-1">{item.description}</p>
        )}
      </div>

      {isMeal ? (
        <a
          href={BRAND.whatsapp}
          target="_blank"
          className="mt-auto inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-display font-bold rounded-full py-2.5 transition-colors"
        >
          <MessageCircle size={16} /> Ask on WhatsApp
        </a>
      ) : (
        <motion.button
          onClick={() => addItem(item)}
          whileTap={{ scale: 0.92 }}
          animate={justAdded === item.id ? { scale: [1, 1.15, 1] } : {}}
          className="mt-auto inline-flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-display font-bold rounded-full py-2.5 transition-colors"
        >
          <Plus size={16} />
          {justAdded === item.id ? "Added!" : "Add to cart"}
        </motion.button>
      )}
    </motion.div>
  );
}

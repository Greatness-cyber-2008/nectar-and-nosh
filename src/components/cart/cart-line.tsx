"use client";

import { motion } from "framer-motion";
import { Minus, Plus, Trash2 } from "lucide-react";
import { CartLine as CartLineType } from "./cart-context";
import { formatNaira } from "@/lib/menu-data";
import { useCart } from "./cart-context";

export function CartLine({ line }: { line: CartLineType }) {
  const { updateQty, removeItem } = useCart();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-card"
    >
      <span className="text-3xl">{line.emoji}</span>
      <div className="flex-1 min-w-0">
        <h3 className="font-display font-bold text-choc truncate">{line.name}</h3>
        <p className="text-sm text-choc/50">{formatNaira(line.price)} each</p>
      </div>
      <div className="flex items-center gap-2 bg-cream rounded-full px-2 py-1">
        <button
          onClick={() => updateQty(line.id, line.qty - 1)}
          className="w-7 h-7 flex items-center justify-center rounded-full bg-white shadow-sm text-pink-500 hover:bg-pink-50"
          aria-label="Decrease quantity"
        >
          <Minus size={14} />
        </button>
        <span className="w-6 text-center font-display font-bold text-choc">
          {line.qty}
        </span>
        <button
          onClick={() => updateQty(line.id, line.qty + 1)}
          className="w-7 h-7 flex items-center justify-center rounded-full bg-white shadow-sm text-pink-500 hover:bg-pink-50"
          aria-label="Increase quantity"
        >
          <Plus size={14} />
        </button>
      </div>
      <span className="font-display font-bold text-choc w-20 text-right">
        {formatNaira(line.price * line.qty)}
      </span>
      <button
        onClick={() => removeItem(line.id)}
        className="text-choc/30 hover:text-pink-500 transition-colors"
        aria-label={`Remove ${line.name}`}
      >
        <Trash2 size={18} />
      </button>
    </motion.div>
  );
}

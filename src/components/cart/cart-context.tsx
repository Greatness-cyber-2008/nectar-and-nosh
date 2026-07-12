"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { MenuItem } from "@/lib/menu-data";

export interface CartLine {
  id: string;
  name: string;
  price: number;
  emoji: string;
  qty: number;
}

interface CartContextValue {
  lines: CartLine[];
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  total: number;
  count: number;
  justAdded: string | null;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "nn_cart_v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [justAdded, setJustAdded] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, hydrated]);

  const addItem = useCallback((item: MenuItem) => {
    if (item.price === null) return; // meals with no fixed price route to WhatsApp instead
    setLines((prev) => {
      const existing = prev.find((l) => l.id === item.id);
      if (existing) {
        return prev.map((l) =>
          l.id === item.id ? { ...l, qty: l.qty + 1 } : l
        );
      }
      return [
        ...prev,
        { id: item.id, name: item.name, price: item.price!, emoji: item.emoji, qty: 1 },
      ];
    });
    setJustAdded(item.id);
    window.setTimeout(() => setJustAdded(null), 600);
  }, []);

  const removeItem = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.id !== id));
  }, []);

  const updateQty = useCallback((id: string, qty: number) => {
    setLines((prev) => {
      if (qty <= 0) return prev.filter((l) => l.id !== id);
      return prev.map((l) => (l.id === id ? { ...l, qty } : l));
    });
  }, []);

  const clearCart = useCallback(() => setLines([]), []);

  const total = useMemo(
    () => lines.reduce((sum, l) => sum + l.price * l.qty, 0),
    [lines]
  );
  const count = useMemo(() => lines.reduce((sum, l) => sum + l.qty, 0), [lines]);

  return (
    <CartContext.Provider
      value={{ lines, addItem, removeItem, updateQty, clearCart, total, count, justAdded }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

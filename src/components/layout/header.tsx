"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/components/cart/cart-context";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-pink-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-1 shrink-0">
          <span className="font-script text-2xl text-pink-500 leading-none">
            Nectar
          </span>
          <span className="font-display font-bold text-xl text-choc">&</span>
          <span className="font-script text-2xl text-green-600 leading-none">
            Nosh
          </span>
        </Link>

        <nav className="hidden sm:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display font-semibold text-sm relative py-1 transition-colors ${
                  active ? "text-pink-500" : "text-choc/70 hover:text-pink-500"
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-1 h-[3px] rounded-full bg-pink-500"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/cart"
          className="relative flex items-center justify-center w-11 h-11 rounded-full bg-pink-500 text-white shadow-pop hover:bg-pink-600 transition-colors"
          aria-label={`Cart, ${count} items`}
        >
          <ShoppingBag size={20} />
          <AnimatePresence>
            {count > 0 && (
              <motion.span
                key={count}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 rounded-full bg-orange-500 text-white text-[11px] font-bold flex items-center justify-center border-2 border-cream"
              >
                {count}
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
      </div>

      {/* mobile bottom-ish nav could go here later; keep simple pill nav for small screens */}
      <nav className="flex sm:hidden items-center justify-center gap-6 pb-2">
        {NAV_LINKS.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`font-display font-semibold text-xs px-3 py-1 rounded-full transition-colors ${
                active ? "bg-pink-500 text-white" : "text-choc/60"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

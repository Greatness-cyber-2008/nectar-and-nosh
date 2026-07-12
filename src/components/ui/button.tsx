"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variants = {
  primary: "bg-pink-500 hover:bg-pink-600 text-white",
  secondary: "bg-green-500 hover:bg-green-600 text-white",
  outline: "bg-transparent border-2 border-choc text-choc hover:bg-choc hover:text-cream",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 font-display font-bold rounded-full px-6 py-3 shadow-pop transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.05 },
    whileTap: disabled ? {} : { scale: 0.95 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </motion.button>
  );
}

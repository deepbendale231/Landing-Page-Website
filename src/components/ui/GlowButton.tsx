"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";
import type { ReactNode } from "react";

type GlowButtonProps = HTMLMotionProps<"a"> & {
  children: ReactNode;
  variant?: "primary" | "ghost";
};

export function GlowButton({ children, className, variant = "primary", ...props }: GlowButtonProps) {
  return (
    <motion.a
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={twMerge(
        "relative inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-300",
        variant === "primary"
          ? "bg-gradient-to-r from-[#6BA4FF] via-[#8CB3FF] to-[#9ED3FF] text-[#0A122E] shadow-[0_12px_40px_rgba(86,153,255,0.42)]"
          : "border border-white/20 bg-white/5 text-white/90 backdrop-blur-md hover:border-white/35",
        className
      )}
      {...props}
    >
      {variant === "primary" && (
        <span className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_55%)]" />
      )}
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}

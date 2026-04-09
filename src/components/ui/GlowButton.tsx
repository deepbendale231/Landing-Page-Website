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
      whileHover={{ y: -1.5, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={twMerge(
        "relative inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-300",
        variant === "primary"
          ? "bg-gradient-to-r from-[#0071e3] via-[#3a8df0] to-[#7fc3ff] text-white shadow-[0_14px_30px_rgba(0,113,227,0.26)]"
          : "border border-slate-900/10 bg-white/82 text-slate-700 backdrop-blur-md hover:border-slate-900/18",
        className
      )}
      {...props}
    >
      {variant === "primary" && (
        <span className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_55%)]" />
      )}
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}

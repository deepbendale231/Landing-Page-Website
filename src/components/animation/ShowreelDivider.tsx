"use client";

import { motion, useReducedMotion } from "framer-motion";

type ShowreelDividerProps = {
  label?: string;
};

export function ShowreelDivider({ label }: ShowreelDividerProps) {
  const reduced = useReducedMotion();

  return (
    <div className="relative mx-auto my-6 h-10 w-full max-w-6xl">
      <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-slate-900/15 to-transparent" />
      {!reduced && (
        <motion.div
          className="absolute top-1/2 h-px w-36 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#3f8ee6] to-transparent"
          animate={{ left: ["10%", "82%", "10%"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      {label && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-900/[0.12] bg-white/[0.88] px-3 py-1 text-[0.64rem] uppercase tracking-[0.22em] text-[#60748f]">
          {label}
        </div>
      )}
    </div>
  );
}

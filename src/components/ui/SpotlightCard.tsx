"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type SpotlightCardProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
};

export function SpotlightCard({ children, className, ...props }: SpotlightCardProps) {
  const mouseX = useMotionValue(-999);
  const mouseY = useMotionValue(-999);
  const spotlight = useMotionTemplate`radial-gradient(260px at ${mouseX}px ${mouseY}px, rgba(0, 113, 227, 0.09), transparent 72%)`;

  return (
    <motion.div
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
      }}
      onMouseLeave={() => {
        mouseX.set(-999);
        mouseY.set(-999);
      }}
      className={twMerge(
        "group relative overflow-hidden rounded-2xl border border-slate-900/10 bg-white/[0.9] p-6 shadow-[0_20px_38px_rgba(17,37,64,0.1)] backdrop-blur-md",
        className
      )}
      {...props}
    >
      <motion.div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: spotlight }} />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";

export function LiveBackdrop() {
  const reduced = useReducedMotion();

  if (reduced) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute left-[-12%] top-[18%] h-64 w-[48rem] rotate-[12deg] rounded-full bg-[linear-gradient(90deg,transparent,rgba(0,113,227,0.1),transparent)] blur-2xl"
        animate={{ x: [0, 120, 0], opacity: [0.12, 0.34, 0.12] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-14%] top-[45%] h-56 w-[46rem] -rotate-[14deg] rounded-full bg-[linear-gradient(90deg,transparent,rgba(79,141,255,0.09),transparent)] blur-2xl"
        animate={{ x: [0, -130, 0], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[20%] bottom-[12%] h-72 w-72 rounded-full bg-[#8ecafc]/14 blur-[120px]"
        animate={{ y: [0, -24, 0], x: [0, 18, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

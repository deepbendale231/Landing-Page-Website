"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AmbientBackground() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_14%,rgba(0,113,227,0.08),transparent_35%),radial-gradient(circle_at_88%_8%,rgba(79,141,255,0.08),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(127,195,255,0.1),transparent_34%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.2)_1px,transparent_0)] [background-size:22px_22px]" />
      {!reducedMotion && (
        <>
          <motion.div
            className="absolute left-[8%] top-[12%] h-72 w-72 rounded-full bg-[#7db4f0]/20 blur-[120px]"
            animate={{ y: [0, 24, 0], x: [0, 18, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-[12%] top-[8%] h-80 w-80 rounded-full bg-[#a7bdf8]/16 blur-[140px]"
            animate={{ y: [0, -20, 0], x: [0, -18, 0] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-1/2 top-[35%] h-24 w-[46rem] -translate-x-1/2 rounded-full bg-[linear-gradient(90deg,transparent,rgba(0,113,227,0.12),rgba(127,195,255,0.12),transparent)] blur-2xl"
            animate={{ opacity: [0.2, 0.56, 0.2], scaleX: [0.9, 1.05, 0.9] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
    </div>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AmbientBackground() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(120,182,255,0.2),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(148,118,255,0.25),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(89,246,255,0.15),transparent_35%)]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.45)_1px,transparent_0)] [background-size:20px_20px]" />
      {!reducedMotion && (
        <>
          <motion.div
            className="absolute left-[8%] top-[12%] h-72 w-72 rounded-full bg-[#77AFFF]/40 blur-[120px]"
            animate={{ y: [0, 30, 0], x: [0, 24, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-[12%] top-[8%] h-80 w-80 rounded-full bg-[#8D7BFF]/35 blur-[140px]"
            animate={{ y: [0, -24, 0], x: [0, -22, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-1/2 top-[35%] h-24 w-[46rem] -translate-x-1/2 rounded-full bg-[linear-gradient(90deg,transparent,rgba(121,177,255,0.26),rgba(99,242,255,0.18),transparent)] blur-2xl"
            animate={{ opacity: [0.25, 0.75, 0.25], scaleX: [0.88, 1.08, 0.88] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
    </div>
  );
}

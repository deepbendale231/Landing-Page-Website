"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

export function CursorSpotlight() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(-9999);
  const pointerY = useMotionValue(-9999);

  const glowLayer = useMotionTemplate`radial-gradient(520px at ${pointerX}px ${pointerY}px, rgba(0, 113, 227, 0.12), transparent 70%)`;
  const hotLayer = useMotionTemplate`radial-gradient(180px at ${pointerX}px ${pointerY}px, rgba(46, 197, 255, 0.12), transparent 75%)`;

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const onMove = (event: PointerEvent) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
    };

    const onLeave = () => {
      pointerX.set(-9999);
      pointerY.set(-9999);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [pointerX, pointerY, reduceMotion]);

  if (reduceMotion) {
    return null;
  }

  return (
    <>
      <motion.div className="pointer-events-none fixed inset-0 z-[3]" style={{ background: glowLayer }} />
      <motion.div className="pointer-events-none fixed inset-0 z-[3]" style={{ background: hotLayer }} />
    </>
  );
}

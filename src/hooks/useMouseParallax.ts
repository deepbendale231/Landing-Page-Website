"use client";

import { useMotionValue } from "framer-motion";
import type { PointerEvent } from "react";

export function useMouseParallax(intensity = 12) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    rotateY.set((x - 0.5) * intensity);
    rotateX.set((0.5 - y) * intensity);
  };

  const resetParallax = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return { rotateX, rotateY, onPointerMove, resetParallax };
}

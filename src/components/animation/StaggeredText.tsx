"use client";

import { motion, useReducedMotion } from "framer-motion";

type StaggeredTextProps = {
  text: string;
  className?: string;
};

export function StaggeredText({ text, className }: StaggeredTextProps) {
  const reducedMotion = useReducedMotion();
  const words = text.split(" ");

  if (reducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block mr-[0.35em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

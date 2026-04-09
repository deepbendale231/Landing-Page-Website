"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import { Reveal } from "@/components/animation/Reveal";
import { motion } from "framer-motion";
import { useState } from "react";

const items = [
  {
    q: "How fast can we onboard a team?",
    a: "Most teams launch their first production workspace within 48 hours using guided setup, templates, and migration support.",
  },
  {
    q: "Does Orbit replace our existing tools?",
    a: "Orbit orchestrates your stack first, then consolidates where useful. Native integrations connect issue tracking, docs, and communication layers.",
  },
  {
    q: "Can enterprise teams manage permissions and compliance?",
    a: "Yes. Orbit includes role-based access controls, SSO, audit history, and governance workflows for enterprise operations.",
  },
  {
    q: "Is there API access for custom automations?",
    a: "Every paid plan includes API and webhook access so your teams can automate mission-critical workflows end-to-end.",
  },
];

export function Faq() {
  const [active, setActive] = useState<number>(0);

  return (
    <section id="faq" className="section-shell py-20 md:py-28">
      <div className="container-tight px-5 md:px-8">
        <Reveal>
          <h2 className="section-title text-left md:text-center">Questions teams ask before scaling with Orbit</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="section-des mt-5 text-left md:text-center">
            Built for teams that care about speed, reliability, and operational clarity.
          </p>
        </Reveal>

        <div className="mt-10 space-y-3">
          {items.map((item, index) => {
            const isOpen = active === index;
            return (
              <Reveal key={item.q} delay={index * 0.04}>
                <button
                  onClick={() => setActive(isOpen ? -1 : index)}
                  className="w-full rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-5 text-left backdrop-blur-md transition-colors hover:bg-white/[0.08]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-base md:text-lg font-medium text-white">{item.q}</span>
                    <motion.span animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.22 }}>
                      <ArrowRight className="h-5 w-5 text-[#a8bdfa]" />
                    </motion.span>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-sm leading-7 text-[#b9ccf5]">{item.a}</p>
                  </motion.div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

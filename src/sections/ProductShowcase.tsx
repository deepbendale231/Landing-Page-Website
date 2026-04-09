"use client";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { Reveal } from "@/components/animation/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { rotateX, rotateY, onPointerMove, resetParallax } = useMouseParallax(8);
  const transform3d = useMotionTemplate`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  return (
    <section id="features" ref={sectionRef} className="section-shell overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <span className="ambient-ring h-24 w-24 -left-10 -top-6 hidden md:block" />
          <Reveal>
            <div className="flex justify-center">
              <div className="tag">Platform</div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="section-title mt-6 text-gradient-lux">Everything your team needs, in one elegant workspace</h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="section-des mt-6">
              Orbit combines planning, execution, visibility, and automation into a single high-trust layer for
              modern product teams.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "Frame priorities",
                text: "Align goals, initiatives, and milestones in a clear operating rhythm for every team.",
              },
              {
                step: "02",
                title: "See progress clearly",
                text: "Track blockers, dependencies, and confidence signals before delivery slows down.",
              },
              {
                step: "03",
                title: "Ship with confidence",
                text: "Automate updates, handoffs, and visibility across product, design, and engineering.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <SpotlightCard className="group h-full p-0 designer-panel">
                  <div className="flex items-start gap-4 p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-900/10 bg-white text-sm font-semibold text-slate-800">
                      {item.step}
                    </div>
                    <div>
                      <p className="section-kicker">Step {item.step}</p>
                      <h3 className="mt-1 text-xl font-semibold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[#5f6f85]">{item.text}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          <div className="relative mt-2 lg:mt-0">
            <div className="pointer-events-none absolute -inset-4 rounded-[38px] bg-[radial-gradient(circle_at_top,rgba(0,113,227,0.12),transparent_60%)]" />
            <motion.div
              className="elevated-border rounded-[30px] p-2 relative z-10"
              style={{ transform: shouldReduceMotion ? undefined : transform3d }}
              onPointerMove={onPointerMove}
              onPointerLeave={resetParallax}
            >
              <Image src={productImage} alt="Product image" className="rounded-[24px]" />
            </motion.div>
            <motion.div
              className="hidden md:block absolute -right-10 -top-10"
              animate={shouldReduceMotion ? undefined : { y: [0, 12, 0], rotate: [0, 4, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src={pyramidImage} alt="Pyramid accent" width={170} height={170} />
            </motion.div>
            <motion.div
              className="hidden md:block absolute -left-14 bottom-8"
              animate={shouldReduceMotion ? undefined : { y: [0, -9, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src={tubeImage} alt="Tube accent" width={155} height={155} />
            </motion.div>

            <motion.div
              className="hidden lg:block absolute -right-7 bottom-16 w-52"
              animate={shouldReduceMotion ? undefined : { y: [0, 12, 0], x: [0, -6, 0] }}
              transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="float-card p-4">
                <p className="section-kicker">Live insight</p>
                <p className="mt-2 text-sm text-slate-700">Delivery confidence rose 22% after workflow automation rollout.</p>
                <div className="mt-3 h-2 rounded-full bg-slate-900/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#0071e3] to-[#7fc3ff]"
                    animate={shouldReduceMotion ? undefined : { width: ["32%", "76%", "54%"] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

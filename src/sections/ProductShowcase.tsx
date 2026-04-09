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
        <div className="section-heading">
          <Reveal>
            <div className="flex justify-center">
              <div className="tag">Command Center</div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="section-title mt-6">Everything your team needs, orchestrated in one cinematic surface</h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="section-des mt-6">
              Orbit collapses planning, execution, visibility, and automation into a single high-trust operating
              layer for modern product teams.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "Map the plan",
                text: "Build a trusted operating rhythm with projects, milestones, and AI-guided prioritization.",
              },
              {
                step: "02",
                title: "Track the pulse",
                text: "See blockers, dependencies, and shipping confidence before the org feels the drag.",
              },
              {
                step: "03",
                title: "Ship the outcome",
                text: "Automate updates, handoffs, and visibility across product, design, and engineering.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <SpotlightCard className="group h-full p-0">
                  <div className="flex items-start gap-4 p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-white">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[#9cb0df]">{item.text}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          <div className="relative mt-2 lg:mt-0">
            <motion.div
              className="elevated-border rounded-[30px] p-2"
              style={{ transform: shouldReduceMotion ? undefined : transform3d }}
              onPointerMove={onPointerMove}
              onPointerLeave={resetParallax}
            >
              <Image src={productImage} alt="Product image" className="rounded-[24px]" />
            </motion.div>
            <motion.div
              className="hidden md:block absolute -right-10 -top-10"
              animate={shouldReduceMotion ? undefined : { y: [0, 16, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src={pyramidImage} alt="Pyramid accent" width={170} height={170} />
            </motion.div>
            <motion.div
              className="hidden md:block absolute -left-14 bottom-8"
              animate={shouldReduceMotion ? undefined : { y: [0, -12, 0], rotate: [0, -4, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src={tubeImage} alt="Tube accent" width={155} height={155} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

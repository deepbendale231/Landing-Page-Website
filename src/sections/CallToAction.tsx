"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import { Reveal } from "@/components/animation/Reveal";
import { GlowButton } from "@/components/ui/GlowButton";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [shouldReduceMotion ? 0 : 130, shouldReduceMotion ? 0 : -130]);

  return (
    <section id="updates" ref={sectionRef} className="section-shell overflow-x-clip">
      <div className="container">
        <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-[#0b1434]/80 px-6 py-12 md:px-12 md:py-16 backdrop-blur-xl">
          <div className="absolute inset-0 opacity-65 bg-[radial-gradient(circle_at_50%_0%,rgba(126,177,255,0.28),transparent_50%)]" />
          <motion.div
            className="absolute -left-32 top-5 hidden md:block"
            style={{ translateY }}
          >
            <Image src={starImage} alt="Star shape" width={240} height={240} />
          </motion.div>
          <motion.div
            className="absolute -right-28 bottom-2 hidden md:block"
            style={{ translateY }}
          >
            <Image src={springImage} alt="Spring shape" width={220} height={220} />
          </motion.div>

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <Reveal>
              <h2 className="section-title">Ready to move from busywork to momentum?</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="section-des mt-5">
                Join high-performing teams running mission-critical launches on Orbit and see meaningful impact
                in your first week.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="flex flex-wrap gap-3 mt-10 justify-center">
                <GlowButton href="#pricing">Start for free</GlowButton>
                <GlowButton href="#help" variant="ghost">
                  Talk to Sales
                  <ArrowRight className="h-4 w-4" />
                </GlowButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

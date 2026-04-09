"use client";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import ArrowIcon from "@/assets/arrow-right.svg";
import { Reveal } from "@/components/animation/Reveal";
import { StaggeredText } from "@/components/animation/StaggeredText";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { GlowButton } from "@/components/ui/GlowButton";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import { motion, useMotionTemplate, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { rotateX, rotateY, onPointerMove, resetParallax } = useMouseParallax(11);
  const cardTilt = useMotionTemplate`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  const cardTiltSoft = useMotionTemplate`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(0.97)`;

  return (
    <section id="home" ref={heroRef} className="section-shell relative overflow-clip pt-10 md:pt-20">
      <AmbientBackground />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] bg-[radial-gradient(circle_at_50%_0%,rgba(126,177,255,0.22),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(4,9,26,0.75)_100%)]" />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[12%] h-40 w-[62rem] -translate-x-1/2 rounded-full bg-[linear-gradient(90deg,transparent,rgba(124,173,255,0.26),rgba(154,124,255,0.28),transparent)] blur-3xl"
        animate={shouldReduceMotion ? undefined : { opacity: [0.5, 0.85, 0.5], scaleX: [0.95, 1.02, 0.95] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[18%] h-24 w-[42rem] -translate-x-1/2 rounded-full bg-[linear-gradient(90deg,transparent,rgba(104,246,255,0.18),transparent)] blur-2xl"
        animate={shouldReduceMotion ? undefined : { opacity: [0.35, 0.72, 0.35], scaleX: [0.88, 1.08, 0.88] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="container relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <Reveal>
              <div className="tag">Elite workflow operating system</div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-5xl md:text-7xl xl:text-[5.1rem] leading-[0.92] font-semibold tracking-tight text-white">
                <StaggeredText text="Product teams deserve a cinematic command center." />
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-[1.04rem] md:text-xl leading-[1.75] text-[#b8c7ec]">
                Orbit fuses planning, execution, and AI orchestration into one dimensional workspace that feels
                as premium as the products your team ships.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <GlowButton href="#pricing">Start Free Trial</GlowButton>
                <GlowButton href="#features" variant="ghost">
                  Explore Platform
                  <ArrowIcon className="h-4 w-4" />
                </GlowButton>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#c8d6fa]">
                {[
                  "No card required",
                  "Used by 2,500+ product teams",
                  "99.99% platform uptime",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 backdrop-blur-xl"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="mt-10 grid grid-cols-3 gap-3 max-w-[560px]">
                {[
                  { value: "14x", label: "faster delivery" },
                  { value: "38%", label: "lower cycle time" },
                  { value: "4.9/5", label: "product satisfaction" },
                ].map((stat) => (
                  <SpotlightCard key={stat.label} className="p-4">
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#92a8de]">{stat.label}</p>
                  </SpotlightCard>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="relative perspective-[1600px]" onPointerMove={onPointerMove} onPointerLeave={resetParallax}>
            <motion.div
              className="absolute right-8 top-[-44px] hidden h-20 w-20 rounded-full border border-[#89a9ff]/35 bg-[#89a9ff]/15 blur-[2px] lg:block"
              animate={shouldReduceMotion ? undefined : { y: [0, 18, 0], x: [0, -8, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute left-20 top-[-30px] hidden h-3 w-44 rounded-full bg-gradient-to-r from-transparent via-[#8bd3ff] to-transparent opacity-60 md:block"
              animate={shouldReduceMotion ? undefined : { opacity: [0.3, 0.85, 0.3], scaleX: [0.8, 1.12, 0.8] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute -left-6 top-8 hidden max-w-[14rem] md:block"
              animate={shouldReduceMotion ? undefined : { y: [0, -12, 0], x: [0, 8, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <SpotlightCard className="p-4">
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[#8ea7df]">Live Pulse</p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-3xl font-semibold text-white">+18%</span>
                  <span className="pb-1 text-xs text-[#8fb0ff]">weekly momentum</span>
                </div>
                <div className="mt-3 h-1.5 rounded-full bg-white/10">
                  <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-[#73aefc] via-[#9ba6ff] to-[#7ef0ff]" />
                </div>
              </SpotlightCard>
            </motion.div>

            <motion.div
              style={{ transform: shouldReduceMotion ? undefined : cardTiltSoft }}
              className="absolute left-8 right-8 top-12 z-0 rounded-[26px] border border-white/10 bg-[#09112f]/70 p-2 shadow-[0_40px_110px_rgba(0,0,0,0.45)]"
            >
              <div className="rounded-[20px] border border-white/10 bg-[#0b173f]/70 p-4">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { title: "Flow Health", value: "92" },
                    { title: "Risk Index", value: "0.11" },
                    { title: "Velocity", value: "+27%" },
                  ].map((chip) => (
                    <div key={chip.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                      <p className="text-[0.65rem] uppercase tracking-[0.16em] text-[#90a6dd]">{chip.title}</p>
                      <p className="mt-2 text-xl font-semibold text-white">{chip.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              style={{ transform: shouldReduceMotion ? undefined : cardTilt }}
              className="elevated-border relative z-10 rounded-[28px] p-2 shadow-[0_55px_120px_rgba(0,0,0,0.5)]"
            >
              <Image
                src={cogImage}
                alt="Orbit app dashboard"
                className="rounded-[22px]"
                priority
                sizes="(max-width: 1024px) 100vw, 54vw"
              />
            </motion.div>
            <motion.div
              className="absolute -left-12 top-10 hidden md:block"
              animate={shouldReduceMotion ? undefined : { y: [0, 20, 0], rotate: [0, -4, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src={cylinderImage} alt="analytics glow object" width={170} height={170} />
            </motion.div>
            <motion.div
              className="absolute -right-10 bottom-10 hidden lg:block"
              animate={shouldReduceMotion ? undefined : { y: [0, -18, 0], rotate: [0, 6, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src={noodleImage} alt="workflow ribbon" width={190} height={190} />
            </motion.div>

            <motion.div
              className="absolute -bottom-8 right-8 hidden max-w-[17rem] md:block"
              animate={shouldReduceMotion ? undefined : { y: [0, 10, 0], x: [0, -8, 0] }}
              transition={{ duration: 7.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <SpotlightCard className="p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[#8ea7df]">Command Center</p>
                    <p className="mt-2 text-sm text-white">Autonomous planning, synced across product and eng.</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#9cc0ff]">
                    99
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>

            <motion.div
              className="absolute -right-3 top-[36%] hidden rounded-full border border-white/15 bg-[#0d1b46]/80 px-4 py-2 text-xs uppercase tracking-[0.16em] text-[#9ab6f5] md:block"
              animate={shouldReduceMotion ? undefined : { x: [0, 8, 0], opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
            >
              Real-time sync
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

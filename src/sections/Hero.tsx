"use client";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
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
  const { rotateX, rotateY, onPointerMove, resetParallax } = useMouseParallax(7);
  const cardTilt = useMotionTemplate`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  const cardTiltSoft = useMotionTemplate`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(0.98)`;

  return (
    <section id="home" ref={heroRef} className="section-shell relative overflow-clip pb-20 pt-10 md:pt-18">
      <AmbientBackground />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[68vh] bg-[radial-gradient(circle_at_50%_0%,rgba(0,113,227,0.14),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_46%,rgba(235,241,251,0.54)_100%)]" />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[12%] h-36 w-[62rem] -translate-x-1/2 rounded-full bg-[linear-gradient(90deg,transparent,rgba(0,113,227,0.15),rgba(79,141,255,0.12),transparent)] blur-3xl"
        animate={shouldReduceMotion ? undefined : { opacity: [0.3, 0.62, 0.3], scaleX: [0.94, 1.02, 0.94] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="container relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Reveal>
              <div className="tag">Product intelligence, beautifully simple</div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-5xl font-semibold leading-[0.92] tracking-tight text-[#121a27] md:text-7xl xl:text-[5.2rem]">
                <StaggeredText text="A calm, focused workspace for teams that build what matters." />
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-[1.04rem] leading-[1.75] text-[#5c6d86] md:text-xl">
                Orbit blends planning, execution, and AI workflows into a single elegant surface designed for speed,
                clarity, and exceptional product outcomes.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <GlowButton href="#pricing">Start free trial</GlowButton>
                <GlowButton href="#features" variant="ghost">
                  See platform
                  <ArrowIcon className="h-4 w-4" />
                </GlowButton>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#4f627f]">
                {["No card required", "Onboarding in under 10 minutes", "99.99% uptime"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-900/10 bg-white/84 px-4 py-2 backdrop-blur-xl"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="mt-10 grid max-w-[560px] grid-cols-3 gap-3">
                {[
                  { value: "14x", label: "faster planning" },
                  { value: "38%", label: "less cycle time" },
                  { value: "4.9/5", label: "team satisfaction" },
                ].map((stat) => (
                  <SpotlightCard key={stat.label} className="p-4">
                    <p className="text-2xl font-semibold text-slate-900 md:text-[1.8rem]">{stat.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#5e7594]">{stat.label}</p>
                  </SpotlightCard>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="relative perspective-[1400px]" onPointerMove={onPointerMove} onPointerLeave={resetParallax}>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="holo-grid absolute inset-0" />
              <motion.div
                className="orbital-ring h-[520px] w-[520px]"
                animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="orbital-ring h-[430px] w-[430px]"
                animate={shouldReduceMotion ? undefined : { rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <motion.div
              className="absolute right-8 top-[-44px] hidden h-20 w-20 rounded-full border border-[#89a9ff]/25 bg-[#89a9ff]/12 blur-[1px] lg:block"
              animate={shouldReduceMotion ? undefined : { y: [0, 14, 0], x: [0, -8, 0], scale: [1, 1.06, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute left-20 top-[-28px] hidden h-3 w-44 rounded-full bg-gradient-to-r from-transparent via-[#52a5f5] to-transparent opacity-45 md:block"
              animate={shouldReduceMotion ? undefined : { opacity: [0.24, 0.56, 0.24], scaleX: [0.84, 1.08, 0.84] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute -left-6 top-8 hidden max-w-[14rem] md:block"
              animate={shouldReduceMotion ? undefined : { y: [0, -10, 0], x: [0, 8, 0] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <SpotlightCard className="p-4">
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[#6780a0]">Live pulse</p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-3xl font-semibold text-slate-900">+18%</span>
                  <span className="pb-1 text-xs text-[#5f81ad]">weekly momentum</span>
                </div>
                <div className="mt-3 h-1.5 rounded-full bg-slate-900/10">
                  <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-[#0071e3] via-[#4f8dff] to-[#7fc3ff]" />
                </div>
              </SpotlightCard>
            </motion.div>

            <motion.div
              style={{ transform: shouldReduceMotion ? undefined : cardTiltSoft }}
              className="absolute left-8 right-8 top-12 z-0 rounded-[26px] holo-panel p-2"
            >
              <div className="rounded-[20px] border border-slate-900/10 bg-white/70 p-4">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { title: "Focus score", value: "92" },
                    { title: "Risk index", value: "0.11" },
                    { title: "Velocity", value: "+27%" },
                  ].map((chip) => (
                    <div key={chip.title} className="rounded-xl border border-slate-900/10 bg-white/80 p-3">
                      <p className="text-[0.65rem] uppercase tracking-[0.16em] text-[#627b9d]">{chip.title}</p>
                      <p className="mt-2 text-xl font-semibold text-slate-900">{chip.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              style={{ transform: shouldReduceMotion ? undefined : cardTilt }}
              className="elevated-border relative z-10 rounded-[28px] p-2 shadow-[0_42px_90px_rgba(15,23,42,0.2)]"
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
              animate={shouldReduceMotion ? undefined : { y: [0, 15, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src={cylinderImage} alt="analytics glow object" width={170} height={170} />
            </motion.div>

            <motion.div
              className="absolute -bottom-8 right-8 hidden max-w-[17rem] md:block"
              animate={shouldReduceMotion ? undefined : { y: [0, 8, 0], x: [0, -6, 0] }}
              transition={{ duration: 8.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <SpotlightCard className="p-4 float-card">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[#6780a0]">Command center</p>
                    <p className="mt-2 text-sm text-slate-700">Autonomous planning synced across product and engineering.</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-900/10 bg-white text-[#2f77d1]">
                    99
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>

            <motion.div
              className="absolute -right-3 top-[36%] hidden rounded-full border border-slate-900/12 bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.16em] text-[#5b78a0] md:block"
              animate={shouldReduceMotion ? undefined : { x: [0, 8, 0], opacity: [0.72, 0.96, 0.72] }}
              transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
            >
              Real-time sync
            </motion.div>

            <motion.div
              className="absolute left-4 bottom-10 hidden max-w-[13rem] lg:block"
              animate={shouldReduceMotion ? undefined : { y: [0, -8, 0], rotate: [0, 1.2, 0] }}
              transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="float-card p-4">
                <p className="section-kicker">Live automations</p>
                <div className="mt-3 space-y-2">
                  {[
                    { label: "Issue triage", state: "running" },
                    { label: "Sprint recap", state: "queued" },
                    { label: "Stakeholder sync", state: "done" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between rounded-lg bg-slate-900/5 px-3 py-2">
                      <span className="text-xs text-slate-700">{item.label}</span>
                      <span className="text-[0.65rem] uppercase tracking-[0.14em] text-[#2f77d1]">{item.state}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

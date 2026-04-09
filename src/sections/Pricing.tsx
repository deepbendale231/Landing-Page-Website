"use client";
import CheckIcon from "@/assets/check.svg";
import { Reveal } from "@/components/animation/Reveal";
import { GlowButton } from "@/components/ui/GlowButton";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="section-shell">
      <div className="container">
        <div className="section-heading">
          <Reveal>
            <h2 className="section-title text-gradient-lux">Pricing that scales with your product ambition</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="section-des mt-5">
              Start free, upgrade as you grow, and unlock enterprise-grade intelligence when your team needs it.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/[0.85] p-1 text-xs">
              <span className="rounded-full bg-slate-900/[0.08] px-4 py-1 text-slate-800">Monthly</span>
              <span className="px-4 py-1 text-[#5f7390]">Annual -20%</span>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-6 items-center mt-12 lg:flex-row lg:items-stretch lg:justify-center">
          {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, features, inverse }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.1 }}
              className={twMerge(
                "max-w-sm w-full",
                index === 0 && "lg:translate-y-4",
                index === 2 && "lg:translate-y-8"
              )}
            >
              <SpotlightCard
                className={twMerge(
                  "h-full designer-panel",
                  inverse && "bg-[linear-gradient(180deg,rgba(237,247,255,0.96),rgba(246,249,255,0.95))] border-[#85b9ef]/55 shadow-[0_24px_56px_rgba(64,133,212,0.16)]"
                )}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-base font-semibold uppercase tracking-[0.14em] text-[#627898]">{title}</h3>
                  {popular && (
                    <div className="inline-flex text-xs px-3 py-1 rounded-full border border-[#73a9e8]/45 bg-[#eef6ff]">
                      <motion.span
                        animate={{ backgroundPositionX: "-100%" }}
                        transition={{ duration: 1.1, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                        className="bg-[linear-gradient(to_right,#2d7fd4,#4f8dff,#2d7fd4)] [background-size:200%] text-transparent bg-clip-text font-semibold"
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-7">
                  <span className="text-5xl font-semibold tracking-tight text-slate-900">${monthlyPrice}</span>
                  <span className="tracking-tight font-medium text-[#5f7594]">/month</span>
                </div>
                <GlowButton
                  href="#updates"
                  className={twMerge("w-full mt-7", !inverse && "bg-white text-slate-700 border border-slate-900/10 shadow-none hover:bg-white")}
                  variant={inverse ? "primary" : "ghost"}
                >
                  {buttonText}
                </GlowButton>
                <ul className="flex flex-col gap-4 mt-8">
                  {features.map((feature) => (
                    <li key={feature} className="text-sm flex items-start gap-3 text-[#4f627f]">
                      <CheckIcon className="h-5 w-5 mt-0.5 text-[#2f77d1]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

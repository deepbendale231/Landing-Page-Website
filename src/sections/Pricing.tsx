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
            <h2 className="section-title">Pricing designed for compounding growth</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="section-des mt-5">
              Start free, scale with confidence, and unlock enterprise-grade intelligence as your team grows.
            </p>
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
              className="max-w-sm w-full"
            >
              <SpotlightCard
                className={twMerge(
                  "h-full",
                  inverse && "bg-[#10193f]/90 border-[#8aa7ff]/45 shadow-[0_35px_80px_rgba(102,160,255,0.25)]"
                )}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-base font-semibold uppercase tracking-[0.14em] text-[#9fb4e5]">{title}</h3>
                  {popular && (
                    <div className="inline-flex text-xs px-3 py-1 rounded-full border border-[#9fb4ff]/40 bg-[#7f9dff]/15">
                      <motion.span
                        animate={{ backgroundPositionX: "-100%" }}
                        transition={{ duration: 1.1, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                        className="bg-[linear-gradient(to_right,#A8CCFF,#F3F7FF,#A8CCFF)] [background-size:200%] text-transparent bg-clip-text font-semibold"
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-7">
                  <span className="text-5xl font-semibold tracking-tight text-white">${monthlyPrice}</span>
                  <span className="tracking-tight font-medium text-[#95a9da]">/month</span>
                </div>
                <GlowButton
                  href="#updates"
                  className={twMerge("w-full mt-7", !inverse && "bg-white/10 text-white border border-white/15 shadow-none")}
                  variant={inverse ? "primary" : "ghost"}
                >
                  {buttonText}
                </GlowButton>
                <ul className="flex flex-col gap-4 mt-8">
                  {features.map((feature) => (
                    <li key={feature} className="text-sm flex items-start gap-3 text-[#c0d0f2]">
                      <CheckIcon className="h-5 w-5 mt-0.5 text-[#8bb0ff]" />
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

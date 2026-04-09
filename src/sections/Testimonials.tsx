"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import { Reveal } from "@/components/animation/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Orbit gave our team a calmer way to plan launches. The clarity in every view is outstanding.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our execution speed improved within the first sprint, without adding process overhead.",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This platform transformed how we manage priorities, ownership, and delivery timelines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "Integration took less than a day, and everyone understood the workflow immediately.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "From roadmap to release, Orbit keeps every moving part visible so nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The flexibility and integrations are excellent, but the real value is how calm the interface feels.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting Orbit streamlined planning and improved communication between product and engineering.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "We can assign work, track progress, and review outcomes in one place with zero friction.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "The interface is intuitive, elegant, and robust enough for our cross-functional teams.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

export const Testimonials = () => {
  return (
    <section className="section-shell">
      <div className="container">
        <div className="section-heading">
          <Reveal>
            <div className="flex justify-center">
              <div className="tag">Testimonials</div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="section-title mt-5 text-gradient-lux">Trusted by teams shipping category-defining products</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="section-des mt-5">
              From intuitive workflows to strategic visibility, Orbit becomes the system teams rely on every day.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 mt-12 md:grid-cols-2 lg:grid-cols-6 auto-rows-fr">
          {testimonials.map(({ text, imageSrc, name, username }, index) => (
            <Reveal key={username} delay={index * 0.05}>
              <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.22 }}>
                <SpotlightCard
                  className={
                    "h-full designer-panel " +
                    (index === 0 || index === 4
                      ? "lg:col-span-3"
                      : index === 2 || index === 7
                        ? "lg:col-span-2"
                        : "lg:col-span-1")
                  }
                >
                  <p className="text-[0.98rem] leading-7 text-[#4f627f]">&ldquo;{text}&rdquo;</p>
                  <div className="flex items-center gap-3 mt-6">
                    <Image width={44} height={44} src={imageSrc} alt={name} className="h-11 w-11 rounded-full" />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5 text-slate-900">{name}</div>
                      <div className="leading-5 tracking-tight text-[#5f7594]">{username}</div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

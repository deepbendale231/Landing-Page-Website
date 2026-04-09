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
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
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
            <h2 className="section-title mt-5">Loved by teams shipping category-defining products</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="section-des mt-5">
              From intuitive workflows to strategic visibility, Orbit becomes the system product teams rely on
              every day.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ text, imageSrc, name, username }, index) => (
            <Reveal key={username} delay={index * 0.05}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <SpotlightCard className="h-full">
                  <p className="text-[0.98rem] leading-7 text-[#c4d4f7]">&ldquo;{text}&rdquo;</p>
                  <div className="flex items-center gap-3 mt-6">
                    <Image width={44} height={44} src={imageSrc} alt={name} className="h-11 w-11 rounded-full" />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5 text-white">{name}</div>
                      <div className="leading-5 tracking-tight text-[#90a6db]">{username}</div>
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

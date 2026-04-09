"use client";
import acmeLogo from "@/assets/logo-acme.png";
import quantamLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "@/components/animation/Reveal";

const logos = [
  { src: acmeLogo, alt: "Acme logo" },
  { src: quantamLogo, alt: "Quantum logo" },
  { src: echoLogo, alt: "Echo logo" },
  { src: celestialLogo, alt: "Celestial logo" },
  { src: pulseLogo, alt: "Pulse logo" },
  { src: apexLogo, alt: "Apex logo" },
];

export const LogoTicker = () => {
  return (
    <section id="customers" className="section-shell pt-0 pb-20 md:pb-24">
      <div className="container">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.26em] text-[#6c7f9c]">
            Trusted by teams shipping with craft and precision
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div
            className="designer-panel mt-6 overflow-hidden rounded-2xl border border-slate-900/10 bg-white/84 px-4 py-5 md:px-8 md:py-7"
            style={{ maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)" }}
          >
            <motion.div
              className="flex gap-12 flex-none pr-12"
              animate={{ translateX: "-50%" }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear", repeatType: "loop" }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <Image
                  key={`${logo.alt}-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="logo-ticker-image"
                />
              ))}
            </motion.div>
            <motion.div
              className="mt-6 flex gap-12 flex-none pr-12 opacity-70"
              animate={{ translateX: "0%" }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear", repeatType: "loop" }}
            >
              {[...logos, ...logos].reverse().map((logo, index) => (
                <Image
                  key={`${logo.alt}-rev-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="logo-ticker-image"
                />
              ))}
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

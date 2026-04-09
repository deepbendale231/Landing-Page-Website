"use client";

import { Reveal } from "@/components/animation/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const metrics = [
  { value: "94%", label: "Execution clarity", desc: "Teams report stronger priority alignment within 2 weeks." },
  { value: "3.1x", label: "Planning speed", desc: "Faster sprint planning with AI-generated project context." },
  { value: "27h", label: "Saved weekly", desc: "Recovered work hours per cross-functional product team." },
  { value: "99.99%", label: "Platform uptime", desc: "Reliable infrastructure designed for scale and trust." },
];

export function Metrics() {
  return (
    <section className="section-shell py-16 md:py-24">
      <div className="container">
        <div className="section-heading">
          <Reveal>
            <h2 className="section-title">Proof in the numbers</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="section-des mt-5">
              Orbit combines strategic intelligence with execution power to help teams deliver confidently.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.06}>
              <SpotlightCard className="h-full">
                <p className="text-4xl font-semibold text-white tracking-tight">{metric.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#95abe0]">{metric.label}</p>
                <p className="mt-4 text-sm leading-7 text-[#bfd1f7]">{metric.desc}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

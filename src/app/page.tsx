import { CallToAction } from "@/sections/CallToAction";
import { ShowreelDivider } from "@/components/animation/ShowreelDivider";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";
import { LiveBackdrop } from "@/components/ui/LiveBackdrop";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <LiveBackdrop />
      <Header />
      <main className="relative z-10">
        <Hero />
        <ShowreelDivider label="Trusted" />
        <LogoTicker />
        <ShowreelDivider label="Product" />
        <ProductShowcase />
        <ShowreelDivider label="Pricing" />
        <Pricing />
        <ShowreelDivider label="Voices" />
        <Testimonials />
        <ShowreelDivider label="Launch" />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

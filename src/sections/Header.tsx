import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { GlowButton } from "@/components/ui/GlowButton";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-900/10 bg-white/72 backdrop-blur-2xl">
      <div className="flex items-center justify-center gap-3 border-b border-slate-900/[0.06] bg-white/70 py-2 text-sm">
        <p className="hidden text-slate-500 md:block">New: AI-assisted planning is now available in every workspace</p>
        <div className="inline-flex items-center gap-1 text-[#1d6fd8]">
          <p>View updates</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className="py-4">
        <div className="container">
          <div className="flex items-center justify-between">
            <a href="#home" aria-label="Orbit home" className="inline-flex items-center gap-3">
              <Image src={Logo} alt="Orbit logo" height={40} width={40} priority className="rounded-xl" />
              <span className="text-xs uppercase tracking-[0.24em] text-slate-700">Orbit</span>
            </a>
            <MenuIcon className="h-5 w-5 md:hidden text-slate-700" />
            <nav className="hidden items-center gap-6 text-slate-500 md:flex">
              <a href="#home" className="transition-colors hover:text-slate-900">Overview</a>
              <a href="#features" className="transition-colors hover:text-slate-900">Platform</a>
              <a href="#customers" className="transition-colors hover:text-slate-900">Customers</a>
              <a href="#pricing" className="transition-colors hover:text-slate-900">Pricing</a>
              <GlowButton href="#pricing" className="px-4 py-2 text-xs">Start free</GlowButton>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

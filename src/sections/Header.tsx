import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { GlowButton } from "@/components/ui/GlowButton";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050816]/65 backdrop-blur-xl">
      <div className="flex justify-center items-center py-2 text-white text-sm gap-3 border-b border-white/10">
        <p className="text-white/60 hidden md:block">Now shipping V2 platform intelligence with autonomous workflows</p>
        <div className="inline-flex gap-1 items-center text-[#d2ddff]">
          <p>Read launch notes</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className="py-4">
        <div className="container">
          <div className="flex items-center justify-between">
            <a href="#home" aria-label="Orbit home" className="inline-flex items-center gap-3">
              <Image src={Logo} alt="Orbit logo" height={40} width={40} priority className="rounded-xl" />
              <span className="text-sm tracking-[0.2em] text-white/80 uppercase">Orbit</span>
            </a>
            <MenuIcon className="h-5 w-5 md:hidden text-white" />
            <nav className="hidden md:flex gap-6 text-white/70 items-center">
              <a href="#home" className="hover:text-white transition-colors">About</a>
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#customers" className="hover:text-white transition-colors">Customers</a>
              <a href="#updates" className="hover:text-white transition-colors">Updates</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              <GlowButton href="#pricing" className="px-4 py-2 text-xs">Start Free</GlowButton>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

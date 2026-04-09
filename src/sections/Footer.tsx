import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import Image from "next/image";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="help" className="relative py-16 text-sm text-[#5f6f85]">
      <div className="container">
        <div className="soft-divider mb-10" />
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr] items-start">
          <div>
            <div className="inline-flex items-center gap-3">
              <Image src={logo} alt="Orbit logo" height={40} width={40} className="rounded-xl" />
              <p className="text-xs uppercase tracking-[0.2em] text-slate-900">Orbit Labs</p>
            </div>
            <p className="mt-5 max-w-sm leading-7">
              Orbit is the elegant execution layer for product-led teams that want faster launches and better
              outcomes with less operational noise.
            </p>
          </div>

          <nav className="flex flex-col gap-4">
            <a href="#home" className="magnetic-link">About</a>
            <a href="#features" className="magnetic-link">Features</a>
            <a href="#customers" className="magnetic-link">Customers</a>
            <a href="#pricing" className="magnetic-link">Pricing</a>
            <a href="#updates" className="magnetic-link">Updates</a>
          </nav>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#5f7390]">Socials</p>
            <div className="flex gap-4 mt-4 text-slate-600">
              <SocialX />
              <SocialInsta />
              <SocialLinkedin />
              <SocialPin />
              <SocialYoutube />
            </div>
          </div>
        </div>

        <div className="soft-divider my-10" />
        <p className="text-[#647892]">&copy; {year} Orbit Labs. Crafted for modern product teams.</p>
      </div>
    </footer>
  );
};

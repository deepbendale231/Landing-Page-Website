import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-body" });
const sora = Sora({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL("https://saas-landing-nextjs.vercel.app"),
  title: {
    default: "Orbit - Product Platform",
    template: "%s | Orbit",
  },
  description:
    "Orbit helps teams design, plan, and ship with clarity through elegant workflows and real-time product intelligence.",
  applicationName: "Orbit",
  keywords: ["saas", "product platform", "next.js", "automation", "project management"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Orbit - Product Platform",
    description:
      "A refined product platform landing page with elegant motion, fast performance, and conversion-focused UX.",
    url: "https://saas-landing-nextjs.vercel.app",
    siteName: "Orbit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbit - Product Platform",
    description:
      "A refined product platform landing page with elegant motion, fast performance, and conversion-focused UX.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative scroll-smooth">
      <body
        className={twMerge(
          jakarta.className,
          jakarta.variable,
          sora.variable,
          "bg-shell-light text-[#101828] antialiased selection:bg-[#0071e3]/20 selection:text-[#0f172a]"
        )}
      >
        {children}
      </body>
    </html>
  );
}

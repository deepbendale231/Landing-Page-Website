import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL("https://saas-landing-nextjs.vercel.app"),
  title: {
    default: "Orbit - SaaS Growth Platform",
    template: "%s | Orbit",
  },
  description:
    "Orbit helps teams ship faster with workflow automation, AI insights, and a premium project intelligence dashboard.",
  applicationName: "Orbit",
  keywords: ["saas", "next.js", "landing page", "automation", "project management"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Orbit - SaaS Growth Platform",
    description:
      "A premium SaaS landing page with fast performance, immersive visuals, and conversion-first UX.",
    url: "https://saas-landing-nextjs.vercel.app",
    siteName: "Orbit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbit - SaaS Growth Platform",
    description:
      "A premium SaaS landing page with fast performance, immersive visuals, and conversion-first UX.",
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
          dmSans.className,
          dmSans.variable,
          spaceGrotesk.variable,
          "bg-shell-dark text-[#F3F7FF] antialiased selection:bg-[#7ab4ff]/30 selection:text-[#f4f8ff]"
        )}
      >
        {children}
      </body>
    </html>
  );
}

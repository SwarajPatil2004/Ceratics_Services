import type { Metadata } from "next";
import { AboutView } from "@/components/about-view";

export const metadata: Metadata = {
  title: "About Our Mission & Philosophy — Leveling the Playing Field",
  description:
    "Enterprise franchises have dedicated IT teams and 24/7 call centers. Ceratics gives small business owners the exact same competitive advantage: modern websites and practical AI automations, 100% managed.",
  keywords: [
    "AI marketing agency for small business",
    "small business growth partner",
    "AI web development agency",
    "done for you small business automation",
    "local business AI partner",
  ],
  openGraph: {
    title:
      "About Our Mission & Philosophy — Leveling the Playing Field | Ceratics",
    description:
      "Learn why Ceratics was founded: to give independent businesses enterprise-grade websites and AI tools without the corporate cost or complexity.",
    url: "https://ceratics.com/about",
    siteName: "Ceratics",
    images: [
      {
        url: "/ceratics-logo.png",
        width: 800,
        height: 800,
        alt: "Ceratics Mission & Philosophy",
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutView />;
}

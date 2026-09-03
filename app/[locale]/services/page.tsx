import type { Metadata } from "next";
import { ServicesView } from "@/components/services-view";

export const metadata: Metadata = {
  title: "Services & Systems — AI Receptionist, Web Design & Automations",
  description:
    "Explore Ceratics' complete small business growth arsenal: high-speed website design, 24/7 AI chat & voice receptionists, missed-call text-back, review automation, and CRM pipelines. 100% done-for-you.",
  keywords: [
    "AI receptionist small business",
    "website design for local business",
    "missed call text back service",
    "automated lead follow up",
    "Google review automation for contractors",
    "online booking system for small business",
    "small business CRM setup",
  ],
  openGraph: {
    title:
      "Services & Systems — AI Receptionist, Web Design & Automations | Ceratics",
    description:
      "Explore Ceratics' complete small business growth arsenal: custom web design, 24/7 AI receptionists, missed-call text-back, and automated follow-ups.",
    url: "https://ceratics.com/services",
    siteName: "Ceratics",
    images: [
      {
        url: "/ceratics-logo.png",
        width: 800,
        height: 800,
        alt: "Ceratics Growth Services",
      },
    ],
  },
};

export default function ServicesPage() {
  return <ServicesView />;
}

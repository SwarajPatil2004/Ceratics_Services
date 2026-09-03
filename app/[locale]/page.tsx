import type { Metadata } from "next";
import { HomeView } from "@/components/home-view";

export const metadata: Metadata = {
  title: "AI Websites & Lead Automation for Small Business",
  description:
    "We build modern, high-converting websites and deploy smart AI receptionists, missed-call text-back, and automated lead follow-ups. Stop losing customers to competitors who reply first—100% done for you in 14 days.",
  keywords: [
    "AI website builder for small business",
    "AI receptionist small business",
    "website design for local business",
    "missed call text back service",
    "AI marketing agency for small business",
    "contractor lead recovery",
    "automated appointment booking",
  ],
  openGraph: {
    title: "AI Websites & Lead Automation for Small Business | Ceratics",
    description:
      "We build modern websites and deploy 24/7 AI receptionists, missed-call text-back, and automated follow-ups for small businesses.",
    url: "https://ceratics.com",
    siteName: "Ceratics",
    images: [
      {
        url: "/ceratics-logo.png",
        width: 800,
        height: 800,
        alt: "Ceratics — AI-Powered Growth Partner",
      },
    ],
  },
};

export default function HomePage() {
  return <HomeView />;
}

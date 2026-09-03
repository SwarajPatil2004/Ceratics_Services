import * as React from "react";
import {
  PhoneCall,
  Calendar,
  Sparkles,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Mail,
  MessageSquare,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CalEmbed } from "@/components/cal-embed";
import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Book a Strategy Call & Contact Our Team",
  description:
    "Schedule a 15-minute discovery call directly on our calendar or drop us a note. Discover how custom web design and practical AI automations can capture more leads for your business.",
  keywords: [
    "book strategy call small business",
    "contact AI agency",
    "small business website consultation",
    "missed call text back demo",
    "AI receptionist consultation",
  ],
  openGraph: {
    title: "Book a Strategy Call | Ceratics",
    description:
      "Schedule a 15-minute discovery call or send us a message. We help local businesses capture more leads with modern websites and AI.",
    url: "https://ceratics.com/contact",
    type: "website",
    images: [
      {
        url: "/ceratics-logo.png",
        width: 800,
        height: 800,
        alt: "Contact Ceratics",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <div className="space-y-12 py-8 sm:py-16 md:space-y-16">
      {/* HERO / INTRO */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-gradient-radial-glow opacity-75 blur-3xl" />

        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <Badge variant="teal" className="gap-1.5 py-1 text-xs">
            <Sparkles className="h-3.5 w-3.5" /> Direct Access to Our Team
          </Badge>

          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
            Book a Call &{" "}
            <span className="text-gradient-ceratics">Start Growing</span>
          </h1>

          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Pick a 15-minute slot on our live calendar below, or drop us a quick
            note. We will review your current website, analyze where you are
            losing customer calls, and give you an actionable blueprint.
          </p>

          {/* Trust points */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-muted-foreground sm:gap-6">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="h-4 w-4 text-brand-teal-500" /> 15-Min Strategy
              Session
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="h-4 w-4 text-brand-teal-500" /> Free
              System Audit
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="h-4 w-4 text-brand-teal-500" /> Zero
              Obligation / No Pitch
            </span>
          </div>
        </div>
      </section>

      {/* CORE DUAL PATHWAY: CALENDAR & CONTACT FORM */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Calendar Section (7 Cols) */}
          <div className="space-y-4 lg:col-span-7">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-teal-600 dark:text-brand-teal-400">
                <Calendar className="h-4 w-4" /> Pathway 1: Live Scheduling
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Choose a Time That Fits Your Schedule
              </h2>
            </div>

            <CalEmbed />
          </div>

          {/* Direct Message Form (5 Cols) */}
          <div className="space-y-4 lg:col-span-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-lime-700 dark:text-brand-lime-400">
                <MessageSquare className="h-4 w-4" /> Pathway 2: Send a Message
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Prefer to Drop Us a Note First?
              </h2>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

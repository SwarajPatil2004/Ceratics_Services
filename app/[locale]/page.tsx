"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  PhoneCall,
  Globe,
  Bot,
  MessageSquareReply,
  Star,
  CalendarCheck,
  Zap,
  Inbox,
  Clock,
  ShieldCheck,
  Headphones,
  CheckCircle2,
  TrendingUp,
  AlertCircle,
  ChevronRight,
  MousePointerClick,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { BookingModal } from "@/components/booking-modal";

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = React.useState(false);

  const painPoints = [
    {
      problem: "Unanswered Calls = Lost Revenue",
      problemDetail:
        "When you're on a job site, in a client meeting, or after hours, calls go straight to voicemail. In a world where customers demand instant answers, 85% of callers never leave a message—they just dial your nearest competitor.",
      solution: "Instant Missed-Call Text-Back",
      solutionDetail:
        "Ceratics automatically sends an immediate, natural text message within 5 seconds of any missed call, initiating a conversation and locking in the lead while intent is highest.",
      badge: "Lead Retention",
    },
    {
      problem: "Outdated, Slow Digital Presence",
      problemDetail:
        "A slow, clunky website that doesn't adapt to mobile phones damages your credibility before you even get a chance to quote. It buries your business on Google and repels high-intent local buyers.",
      solution: "High-Speed, Mobile-First Website",
      solutionDetail:
        "We build sleek, lightning-fast websites engineered to rank locally and turn visitors into scheduled bookings with frictionless contact forms and clear calls to action.",
      badge: "Conversion Engine",
    },
    {
      problem: "Zero Hours for Consistent Follow-Up",
      problemDetail:
        "Running day-to-day operations leaves no time to chase unaccepted quotes, send reminder texts, or nurture previous customers who are ready to re-order or refer your services.",
      solution: "Done-For-You Lead Nurturing",
      solutionDetail:
        "Automated multi-step SMS and email workflows follow up on quotes politely and consistently, lifting closing rates by double digits without eating into your evenings.",
      badge: "Time Reclamation",
    },
    {
      problem: "Competitors Adopting Modern Tech",
      problemDetail:
        "Franchises and venture-backed players are investing in automated receptionists and instant booking. Navigating complex software setups on your own feels overwhelming and expensive.",
      solution: "Enterprise Power, Simplified for You",
      solutionDetail:
        "We deliver pre-configured, tested AI systems built specifically for small business budgets and workflows. No complicated software to learn—it just works in the background.",
      badge: "Competitive Edge",
    },
  ];

  const services = [
    {
      icon: Globe,
      title: "Website Design & Development",
      description:
        "Modern, custom websites engineered for local search visibility, fast mobile load speeds, and maximum appointment conversions.",
      tag: "Foundation",
    },
    {
      icon: Bot,
      title: "AI Chat & Voice Receptionists",
      description:
        "24/7 smart assistants trained on your business knowledge to answer FAQs, qualify prospects, and schedule appointments on autopilot.",
      tag: "24/7 Availability",
    },
    {
      icon: MessageSquareReply,
      title: "Missed-Call Text-Back",
      description:
        "An automated text sent within seconds of any missed call to engage callers immediately and stop them from calling your competitors.",
      tag: "Zero Lost Leads",
    },
    {
      icon: Star,
      title: "Review & Reputation Automation",
      description:
        "Systematic, automated SMS requests that prompt satisfied clients to leave 5-star Google reviews right after a completed job.",
      tag: "Local SEO Rank",
    },
    {
      icon: CalendarCheck,
      title: "Online Booking & Calendar Systems",
      description:
        "Frictionless self-scheduling synced in real time with your team's Google Calendar or Outlook, eliminating back-and-forth phone tag.",
      tag: "Frictionless Booking",
    },
    {
      icon: Zap,
      title: "Lead Follow-Up Automation",
      description:
        "Intelligent multi-channel sequences that follow up on estimates, re-engage inactive customers, and revive cold quotes automatically.",
      tag: "Pipeline Velocity",
    },
    {
      icon: Inbox,
      title: "Unified Inbox & Lightweight CRM",
      description:
        "One centralized dashboard consolidating calls, texts, web chat, and customer conversation history without messy spreadsheets.",
      tag: "All-in-One",
    },
  ];

  const differentiators = [
    {
      icon: Zap,
      title: "AI-First, Not AI-Hype",
      description:
        "We don't sell gimmick tech. Every automation we implement is focused on tangible business outcomes: capturing missed callers, cutting manual admin hours, and closing quotes faster.",
    },
    {
      icon: ShieldCheck,
      title: "100% Done-For-You Setup",
      description:
        "We write the copy, design the layouts, write the code, and connect the phone and CRM integrations. You don't have to learn new platforms or manage complex technical settings.",
    },
    {
      icon: Clock,
      title: "Fast 14-Day Turnaround",
      description:
        "Traditional agencies take three to six months to launch. We deploy clean, battle-tested website architectures and AI workflows in two weeks so you start seeing results immediately.",
    },
    {
      icon: Headphones,
      title: "Ongoing Support & Maintenance",
      description:
        "We don't hand off a template and disappear. We monitor system uptime, update FAQs, adjust workflows as your business evolves, and ensure your tech stays fast and secure.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Book a 15-Minute Discovery Call",
      description:
        "We discuss your current customer journey, identify where prospective leads are falling through the cracks, and uncover your biggest operational bottlenecks.",
    },
    {
      number: "02",
      title: "We Architect Your Custom Plan",
      description:
        "Our team drafts your conversion-focused site layout and designs the exact AI automations (e.g. missed-call text-back, web chat, CRM routing) needed for your business.",
    },
    {
      number: "03",
      title: "We Build, Test & Launch",
      description:
        "Within 14 days, we build your website, configure your AI assistants, thoroughly test phone and booking flows, and launch with zero disruption to your daily operations.",
    },
    {
      number: "04",
      title: "You Capture More Leads & Scale",
      description:
        "Your phone never goes unanswered. Website visitors book appointments directly. Satisfied clients leave 5-star reviews on autopilot while you focus on delivering great service.",
    },
  ];

  return (
    <div className="space-y-24 py-8 sm:py-16 md:space-y-32">
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Subtle radial glow accent */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-radial-glow opacity-80 blur-3xl sm:h-[750px] sm:w-[750px]" />

        <div className="mx-auto max-w-5xl space-y-8 text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/60 px-4 py-1.5 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span className="font-semibold text-brand-teal-700 dark:text-brand-teal-300">
              The Growth Partner for Local & Small Businesses
            </span>
            <span className="hidden text-muted-foreground sm:inline">
              • Done-For-You Setup
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Win More Customers with High-Converting Websites &{" "}
            <span className="text-gradient-ceratics">
              Intelligent AI Services
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto max-w-3xl text-lg font-normal leading-relaxed text-muted-foreground sm:text-xl">
            We build modern, lightning-fast websites and deploy smart AI
            receptionists, missed-call text-back, and automated follow-ups. Stop
            losing leads to competitors who reply first—100% managed for you.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
            <Button
              variant="gradient"
              size="lg"
              className="w-full gap-2 px-8 py-6 text-base font-semibold shadow-md hover:shadow-lg sm:w-auto"
              onClick={() => setBookingOpen(true)}
            >
              <PhoneCall className="h-4 w-4" />
              Book a Free Strategy Call
              <ArrowRight className="h-4 w-4" />
            </Button>
            <a href="#services" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full px-8 py-6 text-base sm:w-auto"
              >
                See Services & Solutions
              </Button>
            </a>
          </div>

          {/* Social Proof / Guarantee Strip */}
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:grid-cols-4">
            <div className="flex items-center justify-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-brand-teal-500" />
              <span>14-Day Delivery</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-brand-teal-500" />
              <span>Zero Tech Complexity</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-brand-teal-500" />
              <span>24/7 AI Availability</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-brand-teal-500" />
              <span>Ongoing Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROBLEM / VALUE (PAIN POINTS & FIXES) */}
      <section id="problem" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl space-y-3 text-center">
          <Badge variant="teal" className="gap-1.5 py-1">
            <AlertCircle className="h-3.5 w-3.5" /> The Small Business Growth
            Leak
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Where Small Businesses Lose Leads Every Single Day
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            Great service doesn&apos;t matter if prospective clients can&apos;t
            reach you quickly. Here is why independent businesses miss out on
            revenue—and how Ceratics fixes it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {painPoints.map((item, idx) => (
            <Card
              key={idx}
              className="relative overflow-hidden border-border/80 bg-card p-6 transition-all duration-200 hover:border-brand-teal-500/40 hover:shadow-md sm:p-8"
            >
              <div className="space-y-6">
                {/* The Pain */}
                <div className="space-y-2 border-b border-border/60 pb-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-rose-500 dark:text-rose-400">
                      The Problem
                    </span>
                    <Badge variant="secondary" className="text-[11px]">
                      {item.badge}
                    </Badge>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {item.problem}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.problemDetail}
                  </p>
                </div>

                {/* The Solution */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-brand-teal-600 dark:text-brand-teal-400">
                    <CheckCircle2 className="h-3.5 w-3.5" /> The Ceratics Fix
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-foreground">
                    {item.solution}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.solutionDetail}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 3: SERVICES OVERVIEW GRID */}
      <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl space-y-3 text-center">
          <Badge variant="lime" className="gap-1.5 py-1">
            <Sparkles className="h-3.5 w-3.5" /> Complete Growth Arsenal
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Websites & AI Automations Built for Results
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            Modular, high-impact services that work together to attract local
            prospects, capture inquiries 24/7, and turn one-time jobs into
            repeat business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Card
                key={idx}
                className="group relative flex flex-col justify-between overflow-hidden border-border/80 bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-teal-500/50 hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-teal-50 text-brand-teal-600 transition-colors group-hover:bg-gradient-ceratics group-hover:text-slate-950 dark:bg-brand-teal-950/70 dark:text-brand-teal-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-6">
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-teal-600 transition-colors hover:text-brand-teal-700 dark:text-brand-teal-400 dark:hover:text-brand-teal-300"
                  >
                    Learn more & deploy <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </Card>
            );
          })}

          {/* Quick Summary Card */}
          <Card className="flex flex-col justify-between border-2 border-dashed border-brand-teal-500/30 bg-muted/20 p-6">
            <div className="space-y-3">
              <Badge variant="teal" className="text-xs">
                Custom Bundles
              </Badge>
              <h3 className="font-heading text-lg font-bold text-foreground">
                Need a Tailored Growth Package?
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Whether you just need a modern website or a full-stack
                automation system with AI receptionists and SMS pipelines, we
                configure the exact stack for your budget.
              </p>
            </div>
            <div className="pt-6">
              <Button
                variant="gradient"
                size="sm"
                className="w-full font-semibold shadow-sm"
                onClick={() => setBookingOpen(true)}
              >
                Discuss Your Package
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* SECTION 4: WHY CERATICS (DIFFERENTIATORS) */}
      <section
        id="why-ceratics"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="rounded-3xl border border-border/80 bg-card/60 p-8 shadow-sm sm:p-12 lg:p-16">
          <div className="mx-auto mb-14 max-w-3xl space-y-3 text-center">
            <Badge variant="teal" className="gap-1.5 py-1">
              <ShieldCheck className="h-3.5 w-3.5" /> Why Business Owners Choose
              Us
            </Badge>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built for Small Businesses. No Fluff. No Empty Buzzwords.
            </h2>
            <p className="text-base text-muted-foreground sm:text-lg">
              We know you don&apos;t have months to waste on agency meetings or
              endless revisions. Here is our commitment to every client we
              partner with.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((diff, idx) => {
              const Icon = diff.icon;
              return (
                <div
                  key={idx}
                  className="space-y-3 rounded-2xl border border-border/70 bg-background/50 p-6 backdrop-blur-sm transition-all hover:border-brand-teal-500/40 hover:shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-teal-50 text-brand-teal-600 dark:bg-brand-teal-950/70 dark:text-brand-teal-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {diff.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {diff.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: PROCESS ("HOW IT WORKS") */}
      <section id="process" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl space-y-3 text-center">
          <Badge variant="lime" className="gap-1.5 py-1">
            <Clock className="h-3.5 w-3.5" /> 14-Day Delivery
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How We Get You Up & Running in 4 Simple Steps
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            A frictionless, streamlined process designed so you can stay focused
            on running your business while we handle the build.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all hover:border-brand-teal-500/40"
            >
              <div className="space-y-3">
                <span className="font-heading text-3xl font-extrabold text-brand-teal-500/40 dark:text-brand-teal-400/30">
                  {step.number}
                </span>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>

              {idx < processSteps.length - 1 && (
                <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-border text-muted-foreground">
                    <ChevronRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-card via-card to-brand-teal-950/20 p-8 text-center shadow-lg sm:p-14 lg:p-20">
          {/* Background Glow */}
          <div className="pointer-events-none absolute -bottom-24 left-1/2 -z-10 h-72 w-96 -translate-x-1/2 rounded-full bg-gradient-ceratics opacity-20 blur-3xl" />

          <div className="mx-auto max-w-3xl space-y-6">
            <Badge variant="teal" className="gap-1.5 py-1">
              <Sparkles className="h-3.5 w-3.5" /> Start Your 14-Day
              Transformation
            </Badge>

            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Ready to Stop Missing Leads and Scale on Autopilot?
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-xl">
              Book a free 15-minute discovery call with our team. We will review
              your current website, pinpoint exactly where you are losing
              customer inquiries, and lay out an actionable blueprint.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
              <Button
                variant="gradient"
                size="lg"
                className="w-full gap-2 px-9 py-6 text-base font-semibold shadow-md hover:shadow-lg sm:w-auto"
                onClick={() => setBookingOpen(true)}
              >
                <PhoneCall className="h-4 w-4" />
                Book Your 15-Minute Discovery Call
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <p className="pt-2 text-xs text-muted-foreground">
              No pressure. No sales pitch. Just honest advice on what website &
              AI automations will actually drive revenue for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}

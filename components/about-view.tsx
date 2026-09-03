"use client";

import * as React from "react";
import Link from "next/link";
import {
  Sparkles,
  PhoneCall,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Zap,
  ShieldCheck,
  Clock,
  Target,
  Users,
  Building2,
  TrendingUp,
  Scale,
  Award,
  Lock,
  Compass,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookingModal } from "@/components/booking-modal";

export function AboutView() {
  const [bookingOpen, setBookingOpen] = React.useState(false);

  const pillars = [
    {
      icon: Zap,
      title: "AI-First, Outcome-Driven",
      description:
        "We don't build passive digital brochures that simply sit online. Every website we build is integrated with active automation: an AI voice assistant answering calls on the first ring, instant missed-call text-back, and automated quote nurture. If a feature doesn't directly capture leads or save administrative hours, we don't build it.",
      badge: "Real Revenue Impact",
    },
    {
      icon: Clock,
      title: "Speed Over Endless Meetings",
      description:
        "Traditional creative agencies stretch projects over four to six months to justify hefty retainers and billable hours. We deploy battle-tested, high-performance web architectures and pre-configured AI workflows in 14 days flat—so you start recovering missed calls and booking jobs immediately.",
      badge: "14-Day Launch",
    },
    {
      icon: ShieldCheck,
      title: "100% Done-For-You Execution",
      description:
        "Most software companies give you a raw login and expect you to become an automation engineer after working a 12-hour day in the field. We handle the copywriting, user experience design, clean coding, AI knowledge-base training, and phone line routing. You never have to write a line of code or touch complex API settings.",
      badge: "Zero Tech Headaches",
    },
  ];

  const comparisonRows = [
    {
      criteria: "Turnaround Time",
      agency: "3 to 6 months of endless feedback loops",
      freelancer: "Unpredictable (weeks to months depending on workload)",
      ceratics: "14 days guaranteed from kickoff to live deployment",
    },
    {
      criteria: "AI & Automation Capabilities",
      agency: "Rarely offered, outsourced, or charged as expensive add-ons",
      freelancer:
        "Typically limited to basic visual design or WordPress templates",
      ceratics:
        "Core foundation: AI voice answering, instant text-back, and CRM",
    },
    {
      criteria: "Owner Workload Required",
      agency: "Dozens of committee meetings, design decks, and homework tasks",
      freelancer: "You write all the copy and direct the technical choices",
      ceratics:
        "100% Done-For-You: we write, design, build, and test everything",
    },
    {
      criteria: "Post-Launch Support",
      agency: "$150–$250/hr billing or costly monthly retainer minimums",
      freelancer:
        "Hard to reach when things break or when they take on new clients",
      ceratics:
        "Ongoing uptime monitoring, prompt updates, and maintenance included",
    },
    {
      criteria: "Primary Focus",
      agency: "Aesthetic awards and design portfolio showcases",
      freelancer: "Checking off individual page tasks",
      ceratics:
        "Tangible lead capture, fast response times, and appointment volume",
    },
  ];

  const commitments = [
    {
      icon: Target,
      title: "Radical Simplicity",
      description:
        "If you or your team can't learn how to manage incoming leads and answer customer texts from your phone in under 10 minutes, we haven't done our job. We build systems that fit naturally into how you already work.",
    },
    {
      icon: Lock,
      title: "Total Customer Ownership",
      description:
        "You own your domain, your website code, your customer database, and your phone numbers. We never hold your digital assets hostage or trap you in proprietary closed gardens.",
    },
    {
      icon: Scale,
      title: "Transparent, Honest Advice",
      description:
        "We are an AI-first agency, but we aren't blinded by hype. If an automated tool won't genuinely add revenue, reduce your stress, or improve customer satisfaction, we will tell you not to buy it.",
    },
  ];

  return (
    <div className="space-y-24 py-8 sm:py-16 md:space-y-32">
      {/* SECTION 1: HERO & THE MISSION */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-gradient-radial-glow opacity-75 blur-3xl" />

        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <Badge variant="teal" className="gap-1.5 py-1 text-xs">
            <Compass className="h-3.5 w-3.5" /> Our Mission & Working Philosophy
          </Badge>

          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
            Leveling the Playing Field for{" "}
            <span className="text-gradient-ceratics">
              Independent Businesses
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-xl">
            Enterprise franchises have in-house software teams, 24/7 call
            centers, and massive tech budgets. Ceratics exists to give local and
            small business owners the exact same competitive advantage—without
            the corporate price tag or complexity.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button
              variant="gradient"
              size="lg"
              className="gap-2 px-8 py-6 text-base font-semibold shadow-md"
              onClick={() => setBookingOpen(true)}
            >
              <PhoneCall className="h-4 w-4" />
              Book a 15-Minute Intro Call
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="px-6 py-6 text-base"
              >
                Explore What We Build
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE MARKET GAP (WHY CERATICS WAS FOUNDED) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 rounded-3xl border border-border/80 bg-card p-8 shadow-sm sm:p-12 lg:p-16">
          <div className="max-w-3xl space-y-3">
            <Badge variant="lime" className="gap-1.5 py-1">
              <AlertCircle className="h-3.5 w-3.5" /> The Small Business Tech
              Dilemma
            </Badge>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Small Businesses Are Caught Between Two Broken Choices
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Every local business owner knows they need modern digital systems.
              But when they look for help, they get pushed into one of two
              frustrating extremes:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* The Agency Trap */}
            <div className="space-y-4 rounded-2xl border border-border/80 bg-background/50 p-6 backdrop-blur-sm sm:p-8">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-950/70 dark:text-rose-400">
                <XCircle className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                Trap 1: The Bloated Traditional Agency
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                They quote you $10,000 to $25,000 upfront. They schedule months
                of discovery decks, committee feedback rounds, and endless
                wireframe presentations. Six months later, they deliver a static
                website that looks pretty but lacks automated phone handling,
                instant text-back, or active lead capture. The moment you need a
                quick tweak, they hand you an invoice for $200 an hour.
              </p>
            </div>

            {/* The DIY Software Trap */}
            <div className="space-y-4 rounded-2xl border border-border/80 bg-background/50 p-6 backdrop-blur-sm sm:p-8">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950/70 dark:text-amber-400">
                <XCircle className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                Trap 2: The DIY Software Overload
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Modern software companies promise the world, hand you five empty
                logins (a landing page builder, a CRM, an SMS gateway, an AI
                tool, and a Zapier account), and tell you to &ldquo;just set it
                up yourself.&rdquo; You spend your evenings deciphering webhook
                errors instead of spending time with your family or quoting
                jobs. Most owners abandon the tools within 60 days.
              </p>
            </div>
          </div>

          {/* The Ceratics Solution Banner */}
          <div className="space-y-3 rounded-2xl border-2 border-brand-teal-500/40 bg-brand-teal-50/40 p-6 dark:bg-brand-teal-950/30 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-teal-700 dark:text-brand-teal-300">
              <CheckCircle2 className="h-4 w-4" /> The Ceratics Alternative
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">
              A Complete, Managed Growth Partner Engineered for Practical
              Outcomes
            </h3>
            <p className="max-w-4xl text-sm leading-relaxed text-muted-foreground">
              We bridge the gap. We deliver clean, fast, custom web design
              combined with active AI receptionists, missed-call text-back, and
              automated customer follow-ups. Everything is configured, tested,
              and maintained by our team in 14 days. You get enterprise-grade
              growth infrastructure without the agency delays or software
              headaches.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE 3 CORE PILLARS (OUR PHILOSOPHY) */}
      <section className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <Badge variant="teal" className="gap-1.5 py-1">
            <Sparkles className="h-3.5 w-3.5" /> How We Think & Build
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our 3 Operating Pillars
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            Everything we create is guided by three straightforward principles
            designed around the daily realities of running an independent
            business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={idx}
                className="flex flex-col justify-between border-border/80 bg-card p-6 transition-all hover:border-brand-teal-500/40 hover:shadow-md sm:p-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-teal-50 text-brand-teal-600 dark:bg-brand-teal-950 dark:text-brand-teal-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="text-[10px]">
                      {pillar.badge}
                    </Badge>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: HOW WE COMPARE (AGENCY vs. FREELANCER vs. CERATICS) */}
      <section className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <Badge variant="lime" className="gap-1.5 py-1">
            <Scale className="h-3.5 w-3.5" /> Objective Comparison
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How Ceratics Compares to Traditional Alternatives
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            An honest look at how our model stacks up against conventional
            agencies and solo contractors.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden overflow-hidden rounded-3xl border border-border bg-card shadow-sm lg:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-muted/40 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <th className="w-1/4 px-6 py-5">Key Factor</th>
                <th className="w-1/4 px-6 py-5 text-foreground/80">
                  Traditional Agency
                </th>
                <th className="w-1/4 px-6 py-5 text-foreground/80">
                  Solo Freelancer
                </th>
                <th className="w-1/4 bg-brand-teal-500/10 px-6 py-5 font-extrabold text-brand-teal-800 dark:text-brand-teal-300">
                  Ceratics
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="transition-colors hover:bg-muted/20">
                  <td className="px-6 py-5 font-heading font-semibold text-foreground">
                    {row.criteria}
                  </td>
                  <td className="px-6 py-5 text-muted-foreground">
                    {row.agency}
                  </td>
                  <td className="px-6 py-5 text-muted-foreground">
                    {row.freelancer}
                  </td>
                  <td className="bg-brand-teal-500/5 px-6 py-5 font-medium text-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-teal-500" />
                      <span>{row.ceratics}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile & Tablet Card Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:hidden">
          {comparisonRows.map((row, idx) => (
            <Card key={idx} className="space-y-4 border-border/80 bg-card p-6">
              <h3 className="border-b border-border pb-2 font-heading text-lg font-bold text-foreground">
                {row.criteria}
              </h3>
              <div className="space-y-3 text-xs">
                <div>
                  <span className="mb-0.5 block font-semibold text-muted-foreground">
                    Traditional Agency:
                  </span>
                  <p className="text-muted-foreground">{row.agency}</p>
                </div>
                <div>
                  <span className="mb-0.5 block font-semibold text-muted-foreground">
                    Solo Freelancer:
                  </span>
                  <p className="text-muted-foreground">{row.freelancer}</p>
                </div>
                <div className="rounded-xl border border-brand-teal-500/30 bg-brand-teal-50/50 p-3 dark:bg-brand-teal-950/40">
                  <span className="mb-0.5 flex items-center gap-1.5 font-bold text-brand-teal-700 dark:text-brand-teal-300">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-teal-500" />
                    Ceratics:
                  </span>
                  <p className="font-medium text-foreground">{row.ceratics}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 5: OUR OPERATING COMMITMENTS */}
      <section className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <Badge variant="teal" className="gap-1.5 py-1">
            <Award className="h-3.5 w-3.5" /> Our Client Standards
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Commitments to Every Business We Serve
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            We know trust is earned through transparency and execution, not
            marketing slogans.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="space-y-3 rounded-2xl border border-border/80 bg-card p-6 transition-all hover:border-brand-teal-500/40 hover:shadow-sm sm:p-8"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-teal-50 text-brand-teal-600 dark:bg-brand-teal-950 dark:text-brand-teal-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 6: FINAL CONSULTATION CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-card via-card to-brand-teal-950/20 p-8 text-center shadow-lg sm:p-14 lg:p-20">
          <div className="pointer-events-none absolute -bottom-24 left-1/2 -z-10 h-72 w-96 -translate-x-1/2 rounded-full bg-gradient-ceratics opacity-20 blur-3xl" />

          <div className="mx-auto max-w-3xl space-y-6">
            <Badge variant="teal" className="gap-1.5 py-1">
              <Sparkles className="h-3.5 w-3.5" /> Start the Conversation
            </Badge>

            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Ready to Give Your Business the Advantage It Deserves?
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-xl">
              Let&apos;s discuss where you are losing customer inquiries today
              and how a modern website paired with smart AI automations can
              capture them. No sales pressure—just an honest technical
              consultation.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
              <Button
                variant="gradient"
                size="lg"
                className="w-full gap-2 px-9 py-6 text-base font-semibold shadow-md hover:shadow-lg sm:w-auto"
                onClick={() => setBookingOpen(true)}
              >
                <PhoneCall className="h-4 w-4" />
                Book a 15-Minute Discovery Call
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <p className="pt-2 text-xs text-muted-foreground">
              Free 15-minute call. No obligation. We will review your current
              website and give you actionable suggestions you can use
              immediately.
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

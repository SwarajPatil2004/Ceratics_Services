"use client";

import * as React from "react";
import Link from "next/link";
import {
  Globe,
  Bot,
  PhoneCall,
  MessageSquareReply,
  Star,
  CalendarCheck,
  Zap,
  Inbox,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Code2,
  Layers,
  Wrench,
  Users,
  Building2,
  Briefcase,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookingModal } from "@/components/booking-modal";
import { trackBookCallClick } from "@/lib/analytics";

export function ServicesView() {
  const [bookingOpen, setBookingOpen] = React.useState(false);

  const services = [
    {
      id: "website-design",
      icon: Globe,
      badge: "Digital Foundation",
      name: "Custom Website Design & Development",
      summary:
        "High-speed, mobile-responsive web architecture engineered to turn local search traffic into booked appointments.",
      problemAndSolution: (
        <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>
            <strong className="text-foreground">The Problem:</strong> Most small
            business websites are digital ghost towns. They either look 10 years
            outdated, take 5+ seconds to load on mobile phones, or bury contact
            information beneath walls of unreadable text. In competitive local
            markets, when prospective buyers can’t find immediate proof of
            credibility and an effortless way to contact you, they hit the back
            button and call your competitor.
          </p>
          <p>
            <strong className="text-foreground">How It Works:</strong> We
            architect, write, design, and code a custom website tailored
            specifically for your target customer. Every page is structured with
            Google Core Web Vitals in mind (
            <strong className="text-foreground">sub-1.2s load speeds</strong>),
            clean schema markup for local SEO rankings, prominent trust signals,
            and frictionless booking forms. No bloated WordPress plugins or
            fragile DIY builders—just clean, modern, reliable web code that
            converts visitors into paying customers.
          </p>
        </div>
      ),
      capabilities: [
        "Lightning-fast mobile performance (<1.2s page loads)",
        "On-page local SEO optimization & Google Search Console setup",
        "Clear, benefit-driven conversion architecture & custom copywriting",
        "Interactive quote calculators or appointment booking embeds",
        "Zero plugin bloat—modern, secure, high-uptime web hosting",
      ],
      bestFor:
        "Local trade contractors (HVAC, roofing, plumbing, electrical), medical & dental practices, legal and financial firms, and professional service providers who want a website that consistently generates qualified inbound calls rather than just sitting as an online brochure.",
      iconBg:
        "bg-teal-50 text-brand-teal-600 dark:bg-brand-teal-950/70 dark:text-brand-teal-300",
    },
    {
      id: "ai-chat",
      icon: Bot,
      badge: "24/7 Digital Concierge",
      name: "AI Chat Widget for the Website",
      summary:
        "An intelligent website assistant trained on your exact pricing, services, and FAQs that captures and qualifies visitors around the clock.",
      problemAndSolution: (
        <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>
            <strong className="text-foreground">The Problem:</strong> Over 70%
            of website visits happen outside traditional 9-to-5 business hours,
            or during moments when potential clients prefer typing a quick
            question over making a phone call. Traditional contact forms have
            dismal 2% conversion rates, while basic chatbot trees only offer
            annoying, robotic menus that frustrate users.
          </p>
          <p>
            <strong className="text-foreground">How It Works:</strong> We train
            an intelligent conversational AI agent on your company’s real
            documentation: your service catalog, pricing ballparks, service
            radiuses, warranty terms, and frequently asked questions. When a
            visitor lands on your site, the widget greets them naturally,
            answers complex questions with precision, qualifies their timeline
            and budget, and captures their name, phone number, and email
            straight into your pipeline.
          </p>
        </div>
      ),
      capabilities: [
        "Trained exclusively on your business information with strict anti-hallucination guardrails",
        "Captures qualified lead contact details and passes them immediately to your phone",
        "Books appointments and site inspections directly inside the chat window",
        "Multi-language support for diverse local customer bases",
        "Seamless human handoff when complex or high-priority requests arrive",
      ],
      bestFor:
        "Businesses with steady website traffic where prospects routinely ask questions about pricing, coverage areas, or service timelines before buying (e.g. remodeling companies, clinics, auto detailing, legal practices).",
      iconBg:
        "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/70 dark:text-emerald-300",
    },
    {
      id: "voice-receptionist",
      icon: PhoneCall,
      badge: "Autonomous Voice",
      name: "AI Voice Receptionist / Call Answering",
      summary:
        "A natural-sounding voice assistant that answers inbound calls 24/7, handles common questions, and schedules appointments without placing callers on hold.",
      problemAndSolution: (
        <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>
            <strong className="text-foreground">The Problem:</strong> Phone
            calls represent your highest-intent, highest-value leads. Yet small
            business teams can’t sit next to the phone all day—you are meeting
            clients, managing crews, or driving between jobs. Hiring a full-time
            in-office receptionist easily costs $45,000+/year, while legacy call
            centers sound detached, put callers on hold, and frequently take
            inaccurate messages.
          </p>
          <p>
            <strong className="text-foreground">How It Works:</strong> We deploy
            a custom AI Voice Receptionist equipped with natural human pacing
            and tone. When a customer calls, the assistant answers immediately
            on the first ring: *&ldquo;Thanks for calling Ceratics! How can I
            help you today?&rdquo;* It understands spoken natural language,
            answers common questions, captures job details, schedules
            consultations into your calendar, and instantly forwards emergency
            or VIP calls directly to your cell phone with a live text summary.
          </p>
        </div>
      ),
      capabilities: [
        "Zero hold times—answers simultaneously across multiple lines 24/7/365",
        "Natural, conversational tone with pauses and realistic voice inflection",
        "Live calendar booking directly over the phone conversation",
        "Instant SMS dispatch to the owner with call audio recordings and text transcripts",
        "Smart call routing to transfer high-urgency emergencies straight to your mobile",
      ],
      bestFor:
        "High-call-volume businesses that cannot afford to miss emergencies or inquiries (e.g. 24/7 emergency plumbers, HVAC companies, roofing contractors, dental clinics, property managers, and veterinary practices).",
      iconBg: "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/70 dark:text-cyan-300",
    },
    {
      id: "missed-call-textback",
      icon: MessageSquareReply,
      badge: "Instant Lead Recovery",
      name: "Instant Missed-Call Text-Back",
      summary:
        "Automatically fires a personalized text message within 5 seconds of any missed call to engage the prospect before they dial your competitor.",
      problemAndSolution: (
        <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>
            <strong className="text-foreground">The Problem:</strong> When a
            homeowner or commercial client calls a local service company from
            Google and hits voicemail, 85% immediately hang up. They don’t leave
            a voicemail—they simply click the next Google listing and give their
            business to whoever responds first. If you return the call 45
            minutes later, they have already booked someone else.
          </p>
          <p>
            <strong className="text-foreground">How It Works:</strong> The
            moment an inbound call goes unanswered, our automation triggers a
            natural text message within 5 seconds: *&ldquo;Hi! This is Alex with
            Apex Plumbing. Sorry I missed your call, I&apos;m currently
            assisting another client. How can I help you right now?&rdquo;* Most
            callers reply within 60 seconds with their issue, opening a live
            two-way SMS thread and locking in the customer before they ever
            touch competitor listings.
          </p>
        </div>
      ),
      capabilities: [
        "Triggers automatically in under 5 seconds on all missed or busy calls",
        "Casual, authentic tone that feels like a personal text from the owner",
        "Can automatically hand off to the AI Chat assistant to collect job photos or address details",
        "Notifies you instantly on your mobile app so you can jump into the text thread at any time",
        "Drastically cuts customer acquisition costs by recapturing lost phone traffic",
      ],
      bestFor:
        "Every single service-based small business where winning just one or two extra jobs a month covers the entire software investment (landscaping, electricians, remodelers, locksmiths, mechanics, and legal consultants).",
      iconBg:
        "bg-brand-lime-50 text-brand-lime-700 dark:bg-brand-lime-950/70 dark:text-brand-lime-300",
    },
    {
      id: "reputation",
      icon: Star,
      badge: "Social Proof Engine",
      name: "Review & Reputation Automation",
      summary:
        "Hands-free SMS review requests sent at the exact right moment to systematically collect genuine 5-star Google reviews from satisfied customers.",
      problemAndSolution: (
        <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>
            <strong className="text-foreground">The Problem:</strong> Google
            reviews are the #1 ranking factor for local SEO and the single
            biggest trust signal for new prospects. However, asking clients for
            reviews verbally is awkward, and emailing them weeks later rarely
            works. Consequently, happy clients stay silent, while the one
            disgruntled customer leaves a stinging review that pulls down your
            overall rating.
          </p>
          <p>
            <strong className="text-foreground">How It Works:</strong> We
            connect an automated trigger to your invoice, job completion, or
            checkout workflow. The moment a service is delivered or payment is
            confirmed, the client receives a polite, personalized text message
            with a direct 1-tap link to your Google Business Profile review
            dialog: *&ldquo;Thanks for choosing Apex! We hope our team did a
            great job today. Would you take 20 seconds to share your
            experience?&rdquo;* We also include internal feedback filters to
            catch and resolve negative experiences before they reach public
            forums.
          </p>
        </div>
      ),
      capabilities: [
        "Direct 1-tap Google review link bypassing navigation friction",
        "Automated triggers upon invoice payment, job sign-off, or appointment completion",
        "Private negative feedback buffer allowing you to resolve grievances privately",
        "Automatic notifications alerting you the moment a new public review is posted",
        "Systematic review volume growth to climb Google Maps 3-Pack rankings",
      ],
      bestFor:
        "Businesses dependent on local search rankings, reputation, and consumer trust (auto repair, aesthetic clinics, roofing companies, general contractors, fitness gyms, and specialty medical offices).",
      iconBg:
        "bg-amber-50 text-amber-600 dark:bg-amber-950/70 dark:text-amber-300",
    },
    {
      id: "online-booking",
      icon: CalendarCheck,
      badge: "Frictionless Scheduling",
      name: "Online Booking & Self-Scheduling Systems",
      summary:
        "Seamless self-service calendar scheduling synced with your team's live Google or Outlook availability to end back-and-forth phone tag forever.",
      problemAndSolution: (
        <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>
            <strong className="text-foreground">The Problem:</strong> Scheduling
            appointments through back-and-forth emails or voicemail tag
            (*&ldquo;Does Tuesday at 2 PM work? No, how about Thursday
            morning?&rdquo;*) eats up 5 to 10 hours of unbillable administrative
            time every week. Worse, no-shows and last-minute cancellations leave
            gaping holes in your team’s billable calendar.
          </p>
          <p>
            <strong className="text-foreground">How It Works:</strong> We
            integrate a clean, mobile-optimized booking system directly on your
            website, in your automated SMS threads, and inside your AI chat.
            Customers view only your team&apos;s real-time open windows, select
            their desired service, and book in 30 seconds. The system
            immediately places the event on your Google/Outlook calendar and
            dispatches automated SMS reminders 24 hours and 2 hours prior to the
            job—slashing client no-show rates by up to 80%.
          </p>
        </div>
      ),
      capabilities: [
        "Real-time bidirectional synchronization with Google Calendar, Outlook, and Apple Calendar",
        "Customizable buffer times between appointments and maximum daily bookings",
        "Automated SMS & email appointment confirmations and 2-way reminder prompts",
        "Optional upfront deposit or card-on-file capture to eliminate casual no-shows",
        "Self-service rescheduling links that let clients adjust times without calling your office",
      ],
      bestFor:
        "Consultative businesses, home inspection services, wellness studios, mobile mechanics, commercial cleaning, and any company where booking a time window is the key conversion step.",
      iconBg:
        "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/70 dark:text-indigo-300",
    },
    {
      id: "follow-up-sequences",
      icon: Zap,
      badge: "Revenue Maximizer",
      name: "Automated Follow-Up Sequences (Email + SMS)",
      summary:
        "Multi-touch follow-up workflows that gently check in on outstanding estimates, answer common hesitations, and close open quotes automatically.",
      problemAndSolution: (
        <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>
            <strong className="text-foreground">The Problem:</strong> You spend
            two hours assessing a job, measuring specs, and crafting a detailed
            quote. You send it out—and then radio silence. Life gets busy, you
            forget to follow up, and the prospect forgets to reply or chooses
            someone more attentive. Over 60% of small business deals are won
            after the 3rd or 4th follow-up touchpoint, yet 75% of owners stop
            after just one attempt.
          </p>
          <p>
            <strong className="text-foreground">How It Works:</strong> When you
            send a quote, an automated multi-step nurture sequence activates. On
            Day 2, the client receives a polite text checking if they had any
            questions. On Day 5, an email highlights your warranty, customer
            reviews, and financing options. On Day 10, a gentle expiration
            check-in prompts action. The instant the client replies or calls,
            the automation pauses automatically so you can finalize the deal
            with personal attention.
          </p>
        </div>
      ),
      capabilities: [
        "Intelligent multi-channel cadence (SMS + Email) designed for high response rates",
        "Automatic sequence shut-off the exact second a client replies or accepts the quote",
        "Pre-written objection-handling emails addressing common price, warranty, and timeline hesitations",
        "Past-client re-activation campaigns (e.g. seasonal HVAC tune-ups, gutter cleaning reminders)",
        "Dramatically lifts quote-to-close conversion rates without extra administrative hours",
      ],
      bestFor:
        "Businesses sending customized quotes, proposals, or estimates with a 1-to-4 week decision cycle (general contractors, painters, commercial cleaners, caterers, and B2B service firms).",
      iconBg: "bg-sky-50 text-sky-600 dark:bg-sky-950/70 dark:text-sky-300",
    },
    {
      id: "unified-crm",
      icon: Inbox,
      badge: "Command Center",
      name: "Lead Pipeline & Unified Inbox (CRM)",
      summary:
        "A single, organized dashboard bringing together all phone calls, text messages, website chats, and lead records in one place—on desktop and mobile.",
      problemAndSolution: (
        <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>
            <strong className="text-foreground">The Problem:</strong> Customer
            conversations are scattered across personal iPhones, Gmail accounts,
            Facebook Messenger, voicemails, and paper sticky notes on your
            dashboard. When someone asks *&ldquo;Did anyone call back Mrs. Davis
            about her quote?&rdquo;*, nobody knows for sure. Leads slip through
            the cracks, and team handoffs are messy and stressful.
          </p>
          <p>
            <strong className="text-foreground">How It Works:</strong> We set up
            a clean, intuitive, lightweight CRM configured specifically for your
            team. Every phone call, missed-call text, website inquiry, and email
            conversation routes into one single Unified Inbox. A visual
            drag-and-drop pipeline shows you exactly where every prospect sits:
            *New Inbound Lead → Inspection Booked → Quote Sent → Job Completed →
            Review Requested*. You and your team can respond to any customer via
            text or call directly from your laptop or mobile phone app.
          </p>
        </div>
      ),
      capabilities: [
        "One unified inbox combining SMS, phone call history, web chat, and email threads",
        "Visual Kanban drag-and-drop pipeline to track deal value and deal stages at a glance",
        "Full conversation history, client notes, photo attachments, and past invoice records",
        "Native mobile app (iOS & Android) so you can manage your pipeline from the truck or field",
        "Zero enterprise bloat—built clean and intuitive so you can master it in 15 minutes",
      ],
      bestFor:
        "Teams of 1 to 20 people who have outgrown disorganized spreadsheets and personal cell phones, and need clear visibility into their sales pipeline without paying enterprise software prices.",
      iconBg:
        "bg-purple-50 text-purple-600 dark:bg-purple-950/70 dark:text-purple-300",
    },
  ];

  return (
    <div className="space-y-24 py-8 sm:py-16 md:space-y-32">
      {/* PAGE HERO */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-gradient-radial-glow opacity-75 blur-3xl" />

        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <Badge variant="teal" className="gap-1.5 py-1 text-xs">
            <Sparkles className="h-3.5 w-3.5" /> Full Systems & Services Catalog
          </Badge>

          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
            The Complete AI & Web Growth Arsenal for{" "}
            <span className="text-gradient-ceratics">Small Businesses</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-xl">
            Everything you need to attract high-intent local customers, answer
            every inquiry in seconds, and automate your client pipeline—without
            hiring extra office staff.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button
              variant="gradient"
              size="lg"
              className="gap-2 px-8 py-6 text-base font-semibold shadow-md"
              onClick={() => {
                trackBookCallClick(
                  "services_hero",
                  "Book a 15-Minute Services Call"
                );
                setBookingOpen(true);
              }}
            >
              <PhoneCall className="h-4 w-4" />
              Book a 15-Minute Services Call
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Link href="/style-guide">
              <Button
                variant="outline"
                size="lg"
                className="px-6 py-6 text-base"
              >
                View Design System
              </Button>
            </Link>
          </div>

          <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-6 border-t border-border/70 pt-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="h-4 w-4 text-brand-teal-500" /> 100%
              Done-For-You Setup
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="h-4 w-4 text-brand-teal-500" /> 14-Day Delivery
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="h-4 w-4 text-brand-teal-500" /> Ongoing
              Maintenance Included
            </span>
          </div>
        </div>
      </section>

      {/* QUICK JUMP FILTER PILLS */}
      <section className="sticky top-16 z-30 border-y border-border/80 bg-background/90 py-3 backdrop-blur-md transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="mr-1 flex shrink-0 items-center gap-1 font-semibold text-muted-foreground">
              <Layers className="h-3.5 w-3.5" /> Quick Jump:
            </span>
            <a
              href="#website-design"
              className="shrink-0 rounded-full border border-border bg-card px-3 py-1 font-medium text-foreground transition-colors hover:border-brand-teal-500 hover:text-brand-teal-600"
            >
              Web Design
            </a>
            <a
              href="#ai-chat"
              className="shrink-0 rounded-full border border-border bg-card px-3 py-1 font-medium text-foreground transition-colors hover:border-brand-teal-500 hover:text-brand-teal-600"
            >
              AI Chat
            </a>
            <a
              href="#voice-receptionist"
              className="shrink-0 rounded-full border border-border bg-card px-3 py-1 font-medium text-foreground transition-colors hover:border-brand-teal-500 hover:text-brand-teal-600"
            >
              Voice Receptionist
            </a>
            <a
              href="#missed-call-textback"
              className="shrink-0 rounded-full border border-border bg-card px-3 py-1 font-medium text-foreground transition-colors hover:border-brand-teal-500 hover:text-brand-teal-600"
            >
              Missed-Call Text-Back
            </a>
            <a
              href="#reputation"
              className="shrink-0 rounded-full border border-border bg-card px-3 py-1 font-medium text-foreground transition-colors hover:border-brand-teal-500 hover:text-brand-teal-600"
            >
              Review Automation
            </a>
            <a
              href="#online-booking"
              className="shrink-0 rounded-full border border-border bg-card px-3 py-1 font-medium text-foreground transition-colors hover:border-brand-teal-500 hover:text-brand-teal-600"
            >
              Online Booking
            </a>
            <a
              href="#follow-up-sequences"
              className="shrink-0 rounded-full border border-border bg-card px-3 py-1 font-medium text-foreground transition-colors hover:border-brand-teal-500 hover:text-brand-teal-600"
            >
              Follow-Up Sequences
            </a>
            <a
              href="#unified-crm"
              className="shrink-0 rounded-full border border-border bg-card px-3 py-1 font-medium text-foreground transition-colors hover:border-brand-teal-500 hover:text-brand-teal-600"
            >
              Unified CRM
            </a>
            <a
              href="#custom-solutions"
              className="shrink-0 rounded-full border border-brand-teal-500/40 bg-brand-teal-50/50 px-3 py-1 font-semibold text-brand-teal-700 transition-colors hover:bg-brand-teal-100 dark:bg-brand-teal-950/40 dark:text-brand-teal-300"
            >
              Custom Additions
            </a>
          </div>
        </div>
      </section>

      {/* THE 8 DETAILED SERVICE BREAKDOWNS */}
      <section className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-32 rounded-3xl border border-border/90 bg-card p-6 shadow-sm transition-all hover:border-brand-teal-500/40 hover:shadow-md sm:p-10 lg:p-12"
            >
              <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
                {/* Left Column: Title, Problem, How it works */}
                <div className="space-y-6 lg:col-span-7">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl shadow-sm ${service.iconBg}`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <Badge variant="teal" className="mb-1 text-[11px]">
                          {service.badge}
                        </Badge>
                        <h2 className="font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
                          {service.name}
                        </h2>
                      </div>
                    </div>
                    <p className="pt-1 text-base font-medium text-foreground/90">
                      {service.summary}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/80 bg-background/50 p-5 backdrop-blur-sm sm:p-6">
                    {service.problemAndSolution}
                  </div>

                  <div className="pt-2">
                    <Button
                      variant="gradient"
                      className="gap-2 font-semibold shadow-sm"
                      onClick={() => {
                        trackBookCallClick(
                          "service_card_inquire",
                          service.name
                        );
                        setBookingOpen(true);
                      }}
                    >
                      <PhoneCall className="h-4 w-4" />
                      Inquire About This Service
                    </Button>
                  </div>
                </div>

                {/* Right Column: Capabilities & "Best For" Callout */}
                <div className="space-y-6 lg:col-span-5">
                  {/* Capabilities List */}
                  <div className="space-y-4 rounded-2xl border border-border bg-muted/30 p-6">
                    <h3 className="flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wider text-foreground">
                      <Zap className="h-4 w-4 text-brand-teal-500" />
                      Key Deliverables & Outcomes
                    </h3>
                    <ul className="space-y-2.5 text-xs text-muted-foreground sm:text-sm">
                      {service.capabilities.map((cap, capIdx) => (
                        <li key={capIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal-500" />
                          <span className="leading-normal">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* "Who It's Best For" Highlight Card */}
                  <div className="space-y-2 rounded-2xl border border-brand-teal-500/30 bg-brand-teal-50/40 p-6 dark:bg-brand-teal-950/30">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-teal-700 dark:text-brand-teal-300">
                      <Users className="h-4 w-4" /> Who This Is Best For:
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {service.bestFor}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* SECTION 9: CUSTOM & BESPOKE ADDITIONS CALLOUT */}
      <section
        id="custom-solutions"
        className="mx-auto max-w-7xl scroll-mt-32 px-4 sm:px-6 lg:px-8"
      >
        <div className="relative overflow-hidden rounded-3xl border-2 border-brand-teal-500/30 bg-gradient-to-br from-card via-card to-brand-lime-950/10 p-8 shadow-md sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gradient-ceratics opacity-10 blur-3xl" />

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-8">
              <Badge variant="lime" className="gap-1.5 py-1">
                <Wrench className="h-3.5 w-3.5" /> Bespoke Engineering
              </Badge>
              <h2 className="font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
                Need Custom Integrations or Bespoke AI Workflows?
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                Have an existing CRM, proprietary database, or specialized
                industry workflow? Beyond our core packages, we engineer custom
                API integrations, private knowledge-base agents, and tailored
                multi-step automations to fit your exact operational
                requirements.
              </p>

              <div className="grid grid-cols-1 gap-3 pt-2 text-xs text-muted-foreground sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-teal-500" />
                  Custom CRM webhooks (ServiceTitan, Jobber, Clio, HubSpot)
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-teal-500" />
                  Multi-location & regional routing systems
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-teal-500" />
                  Private internal SOP knowledge agents
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-teal-500" />
                  Tailored automated client intake pipelines
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-4 rounded-2xl border border-border/80 bg-background/80 p-6 text-center shadow-sm backdrop-blur-sm lg:col-span-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal-50 text-brand-teal-600 dark:bg-brand-teal-950 dark:text-brand-teal-300">
                <Code2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  Custom Architecture Call
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Tell us your tech stack and we will map out an integration
                  roadmap.
                </p>
              </div>
              <Button
                variant="gradient"
                className="w-full font-semibold shadow-sm"
                onClick={() => {
                  trackBookCallClick(
                    "services_custom_build",
                    "Discuss Custom Build"
                  );
                  setBookingOpen(true);
                }}
              >
                Discuss Custom Build
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CONSULTATION CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-card via-card to-brand-teal-950/20 p-8 text-center shadow-lg sm:p-14 lg:p-20">
          <div className="pointer-events-none absolute -bottom-24 left-1/2 -z-10 h-72 w-96 -translate-x-1/2 rounded-full bg-gradient-ceratics opacity-20 blur-3xl" />

          <div className="mx-auto max-w-3xl space-y-6">
            <Badge variant="teal" className="gap-1.5 py-1">
              <Sparkles className="h-3.5 w-3.5" /> 15-Minute Growth Consultation
            </Badge>

            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Ready to Upgrade Your Website & Deploy AI in Your Business?
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-xl">
              Book a zero-obligation discovery session. We will evaluate your
              current workflow, demonstrate live missed-call and AI answering
              flows, and outline the exact services that will drive measurable
              revenue.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
              <Button
                variant="gradient"
                size="lg"
                className="w-full gap-2 px-9 py-6 text-base font-semibold shadow-md hover:shadow-lg sm:w-auto"
                onClick={() => {
                  trackBookCallClick(
                    "services_final_cta",
                    "Book Your 15-Minute Discovery Call"
                  );
                  setBookingOpen(true);
                }}
              >
                <PhoneCall className="h-4 w-4" />
                Book Your 15-Minute Discovery Call
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <p className="pt-2 text-xs text-muted-foreground">
              No pressure. No technical jargon. Just clear advice on what will
              capture more customers for your business.
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

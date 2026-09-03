import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Copy,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Zap,
  Layers,
  Palette,
  Type,
  LayoutGrid,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";

export default function StyleGuidePage() {
  const tealPalette = [
    { step: "50", hex: "#f0fdfc", dark: false },
    { step: "100", hex: "#ccfbf1", dark: false },
    { step: "200", hex: "#99f6e4", dark: false },
    { step: "300", hex: "#5eead4", dark: false },
    { step: "400", hex: "#2dd4bf", dark: false },
    {
      step: "500",
      hex: "#07bfc1",
      dark: false,
      isLogo: true,
      label: "Logo Teal",
    },
    { step: "600", hex: "#0d9488", dark: true },
    { step: "700", hex: "#0f766e", dark: true },
    { step: "800", hex: "#115e59", dark: true },
    { step: "900", hex: "#134e4a", dark: true },
    { step: "950", hex: "#042f2e", dark: true },
  ];

  const limePalette = [
    { step: "50", hex: "#f7fee7", dark: false },
    { step: "100", hex: "#ecfccb", dark: false },
    { step: "200", hex: "#d9f99d", dark: false },
    { step: "300", hex: "#bef264", dark: false },
    {
      step: "400",
      hex: "#9cdc6c",
      dark: false,
      isLogo: true,
      label: "Logo Lime",
    },
    { step: "500", hex: "#84cc16", dark: false },
    { step: "600", hex: "#65a30d", dark: true },
    { step: "700", hex: "#4f7c0f", dark: true },
    { step: "800", hex: "#3f6212", dark: true },
    { step: "900", hex: "#365314", dark: true },
    { step: "950", hex: "#1a2e05", dark: true },
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 py-12 sm:px-6 lg:px-8">
      {/* Brand Hero & Positioning */}
      <section className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm md:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gradient-radial-glow blur-2xl" />
          <div className="relative z-10 grid gap-8 md:grid-cols-12 md:items-center">
            <div className="space-y-4 md:col-span-8">
              <Badge variant="teal" className="gap-1.5 py-1">
                <Sparkles className="h-3.5 w-3.5" />
                Brand Architecture & Visual Foundation
              </Badge>
              <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
                AI-Powered Growth Partner for Small Businesses
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Modern, minimal, trustworthy. Confident and clean. Rooted in the
                organic swirl geometry of the Ceratics logo, our palette marries
                vibrant teal and lime gradients with calm, architectural
                neutrals.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button variant="gradient" size="lg" className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Explore Components
                </Button>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl border border-border/80 bg-background/50 p-6 backdrop-blur-sm md:col-span-4">
              <div className="relative h-36 w-36">
                <Image
                  src="/ceratics-logo.png"
                  alt="Ceratics Swirl Logo"
                  width={144}
                  height={144}
                  className="object-contain drop-shadow-md"
                  priority
                />
              </div>
              <p className="mt-3 font-heading text-sm font-semibold text-foreground">
                Ceratics Swirl Icon
              </p>
              <p className="text-xs text-muted-foreground">
                Teal-to-Lime Dynamic Gradient
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Signature Gradient */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-border pb-3">
            <Palette className="h-5 w-5 text-brand-teal-500" />
            <h2 className="font-heading text-2xl font-bold">
              1. Primary Gradient (Exact Logo Sampling)
            </h2>
          </div>

          <p className="text-muted-foreground">
            Sampled directly from the flowing ribbon lines of the Ceratics logo.
            Used for hero accents, primary actions, badges, and focal brand
            moments.
          </p>

          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <div className="flex h-32 w-full items-end justify-between bg-gradient-ceratics p-6">
              <span className="rounded-md bg-black/40 px-3 py-1 font-mono text-xs font-semibold text-white backdrop-blur-md">
                linear-gradient(135deg, #07bfc1 0%, #3fcba6 50%, #9cdc6c 100%)
              </span>
              <span className="rounded-md bg-white/90 px-3 py-1 font-heading text-xs font-bold text-slate-900 shadow-sm">
                Ceratics Signature Flow
              </span>
            </div>

            <div className="grid grid-cols-1 divide-y divide-border bg-card sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              <div className="space-y-1.5 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Start (Teal)
                  </span>
                  <div className="h-4 w-4 rounded-full bg-[#07bfc1]" />
                </div>
                <p className="font-mono text-xl font-bold">#07bfc1</p>
                <p className="text-xs text-muted-foreground">
                  rgb(7, 191, 193) • Logo Teal Anchor
                </p>
              </div>

              <div className="space-y-1.5 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Midpoint (Mint)
                  </span>
                  <div className="h-4 w-4 rounded-full bg-[#3fcba6]" />
                </div>
                <p className="font-mono text-xl font-bold">#3fcba6</p>
                <p className="text-xs text-muted-foreground">
                  rgb(63, 203, 166) • Dynamic Flow Transition
                </p>
              </div>

              <div className="space-y-1.5 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    End (Lime Green)
                  </span>
                  <div className="h-4 w-4 rounded-full bg-[#9cdc6c]" />
                </div>
                <p className="font-mono text-xl font-bold">#9cdc6c</p>
                <p className="text-xs text-muted-foreground">
                  rgb(156, 220, 108) • Logo Lime Anchor
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Color Palettes */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 border-b border-border pb-3">
            <LayoutGrid className="h-5 w-5 text-brand-teal-500" />
            <h2 className="font-heading text-2xl font-bold">
              2. Brand Color Tokens & Neutrals
            </h2>
          </div>

          {/* Brand Teal Scale */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-lg font-semibold">
                Brand Teal Scale (Primary Accent)
              </h3>
              <span className="font-mono text-xs text-muted-foreground">
                Tailwind: brand-teal-[50..950]
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-11">
              {tealPalette.map((color) => (
                <div
                  key={color.step}
                  className="relative flex h-24 flex-col justify-between overflow-hidden rounded-lg border border-border/80 p-2.5 transition-transform hover:scale-105"
                  style={{ backgroundColor: color.hex }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-bold ${
                        color.dark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {color.step}
                    </span>
                    {color.isLogo && (
                      <span className="rounded bg-black/70 px-1 text-[9px] font-semibold text-white">
                        LOGO
                      </span>
                    )}
                  </div>
                  <span
                    className={`font-mono text-[11px] font-medium ${
                      color.dark ? "text-white/90" : "text-slate-900/90"
                    }`}
                  >
                    {color.hex}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Brand Lime Scale */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-lg font-semibold">
                Brand Lime Scale (Vibrant Growth)
              </h3>
              <span className="font-mono text-xs text-muted-foreground">
                Tailwind: brand-lime-[50..950]
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-11">
              {limePalette.map((color) => (
                <div
                  key={color.step}
                  className="relative flex h-24 flex-col justify-between overflow-hidden rounded-lg border border-border/80 p-2.5 transition-transform hover:scale-105"
                  style={{ backgroundColor: color.hex }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-bold ${
                        color.dark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {color.step}
                    </span>
                    {color.isLogo && (
                      <span className="rounded bg-black/70 px-1 text-[9px] font-semibold text-white">
                        LOGO
                      </span>
                    )}
                  </div>
                  <span
                    className={`font-mono text-[11px] font-medium ${
                      color.dark ? "text-white/90" : "text-slate-900/90"
                    }`}
                  >
                    {color.hex}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Neutral Palettes Comparison */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Light Mode Neutrals */}
            <Card className="border-border/80 bg-[#fbfcfb] text-[#0f1715] shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Light Mode Palette</CardTitle>
                  <Badge
                    variant="outline"
                    className="border-slate-300 bg-white text-slate-800"
                  >
                    Default
                  </Badge>
                </div>
                <CardDescription className="text-[#52605b]">
                  Soft off-white background (#fbfcfb) with near-black readable
                  text (#0f1715).
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-xs">
                <div className="flex items-center justify-between rounded-lg border border-[#e2e8e5] bg-[#ffffff] p-3">
                  <span className="font-medium">Card Surface</span>
                  <span className="font-mono font-bold">#ffffff</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-[#e2e8e5] bg-[#f0f4f2] p-3">
                  <span className="font-medium">Muted Element</span>
                  <span className="font-mono font-bold">#f0f4f2</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-[#e2e8e5] bg-[#ffffff] p-3 text-[#52605b]">
                  <span className="font-medium">Muted Text</span>
                  <span className="font-mono font-bold">#52605b</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-[#e2e8e5] bg-[#ffffff] p-3">
                  <span className="font-medium">Border & Divider</span>
                  <span className="font-mono font-bold">#e2e8e5</span>
                </div>
              </CardContent>
            </Card>

            {/* Dark Mode Neutrals */}
            <Card className="border-[#1e2b25] bg-[#080c0b] text-[#f2f6f4] shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-white">
                    Dark Mode Palette
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="border-slate-700 bg-black text-slate-300"
                  >
                    Sleek Dark
                  </Badge>
                </div>
                <CardDescription className="text-[#94a39d]">
                  Deep charcoal near-black background (#080c0b) with off-white
                  text (#f2f6f4).
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-xs">
                <div className="flex items-center justify-between rounded-lg border border-[#1e2b25] bg-[#0f1513] p-3">
                  <span className="font-medium text-[#f2f6f4]">
                    Card Surface
                  </span>
                  <span className="font-mono font-bold text-[#f2f6f4]">
                    #0f1513
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-[#1e2b25] bg-[#16201c] p-3">
                  <span className="font-medium text-[#f2f6f4]">
                    Muted Element
                  </span>
                  <span className="font-mono font-bold text-[#f2f6f4]">
                    #16201c
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-[#1e2b25] bg-[#0f1513] p-3 text-[#94a39d]">
                  <span className="font-medium">Muted Text</span>
                  <span className="font-mono font-bold">#94a39d</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-[#1e2b25] bg-[#0f1513] p-3 text-[#f2f6f4]">
                  <span className="font-medium">Border & Divider</span>
                  <span className="font-mono font-bold">#1e2b25</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 3: Typography Scale */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-border pb-3">
            <Type className="h-5 w-5 text-brand-teal-500" />
            <h2 className="font-heading text-2xl font-bold">
              3. Typography Hierarchy via next/font
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="space-y-6 border-border/80 p-6">
              <div>
                <Badge variant="teal" className="mb-2">
                  Headings: Plus Jakarta Sans
                </Badge>
                <p className="text-xs text-muted-foreground">
                  Geometric, confident, modern curves matching the Ceratics logo
                  geometry.
                </p>
              </div>

              <div className="space-y-4">
                <div className="border-b border-border/50 pb-3">
                  <p className="mb-1 text-xs text-muted-foreground">
                    Display (48px - 60px)
                  </p>
                  <p className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
                    Intelligent Growth
                  </p>
                </div>

                <div className="border-b border-border/50 pb-3">
                  <p className="mb-1 text-xs text-muted-foreground">
                    Heading 1 (36px)
                  </p>
                  <h1 className="font-heading text-3xl font-bold tracking-tight">
                    Scale Your Business with AI
                  </h1>
                </div>

                <div className="border-b border-border/50 pb-3">
                  <p className="mb-1 text-xs text-muted-foreground">
                    Heading 2 (30px)
                  </p>
                  <h2 className="font-heading text-2xl font-bold tracking-tight">
                    Built for Growth Leaders
                  </h2>
                </div>

                <div className="border-b border-border/50 pb-3">
                  <p className="mb-1 text-xs text-muted-foreground">
                    Heading 3 (24px)
                  </p>
                  <h3 className="font-heading text-xl font-semibold">
                    Trustworthy & Scalable Architecture
                  </h3>
                </div>

                <div>
                  <p className="mb-1 text-xs text-muted-foreground">
                    Heading 4 (20px)
                  </p>
                  <h4 className="font-heading text-lg font-semibold">
                    Measurable ROI from Day One
                  </h4>
                </div>
              </div>
            </Card>

            <Card className="space-y-6 border-border/80 p-6">
              <div>
                <Badge variant="secondary" className="mb-2">
                  Body & UI: Inter
                </Badge>
                <p className="text-xs text-muted-foreground">
                  Ultra-clean, crisp readability at all screen densities and
                  weights.
                </p>
              </div>

              <div className="space-y-4">
                <div className="border-b border-border/50 pb-3">
                  <p className="mb-1 text-xs text-muted-foreground">
                    Body Large (18px)
                  </p>
                  <p className="text-lg leading-relaxed text-foreground">
                    Ceratics delivers high-precision AI solutions that empower
                    small businesses to automate operations and win customer
                    trust.
                  </p>
                </div>

                <div className="border-b border-border/50 pb-3">
                  <p className="mb-1 text-xs text-muted-foreground">
                    Body Regular (16px)
                  </p>
                  <p className="text-base leading-relaxed text-foreground">
                    Our platform integrates seamlessly with existing workflows,
                    delivering transparent metrics, reliable uptime, and clear
                    insights.
                  </p>
                </div>

                <div className="border-b border-border/50 pb-3">
                  <p className="mb-1 text-xs text-muted-foreground">
                    Body Small (14px)
                  </p>
                  <p className="text-sm leading-normal text-muted-foreground">
                    Designed for supporting metadata, descriptions, tooltips,
                    and secondary navigation links across the product interface.
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-xs text-muted-foreground">
                    Monospace / Code (13px)
                  </p>
                  <code className="rounded bg-muted px-2 py-1 font-mono text-xs text-brand-teal-700 dark:text-brand-teal-400">
                    npm install @ceratics/growth-engine
                  </code>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Section 4: Buttons & Interactive Components */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-border pb-3">
            <Zap className="h-5 w-5 text-brand-teal-500" />
            <h2 className="font-heading text-2xl font-bold">
              4. Buttons & Badges
            </h2>
          </div>

          <Card className="space-y-6 p-6">
            <div className="space-y-2">
              <h3 className="font-heading text-lg font-semibold">
                Button Variants
              </h3>
              <p className="text-sm text-muted-foreground">
                All buttons support hover feedback, active press states, and
                accessibility focus rings.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button variant="gradient">Ceratics Gradient</Button>
              <Button variant="teal">Solid Teal</Button>
              <Button variant="lime">Lime Accent</Button>
              <Button variant="default">Theme Default</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="font-heading text-sm font-semibold text-muted-foreground">
                Sizes & Icon Pairings
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="gradient" size="lg" className="gap-2">
                  <Zap className="h-4 w-4" /> Large Button
                </Button>
                <Button variant="teal" size="default" className="gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Default Size
                </Button>
                <Button variant="outline" size="sm" className="gap-1.5">
                  <Copy className="h-3.5 w-3.5" /> Small Button
                </Button>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="font-heading text-sm font-semibold text-muted-foreground">
                Badge Tokens
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="gradient">Gradient Growth</Badge>
                <Badge variant="teal">AI Optimization</Badge>
                <Badge variant="lime">Verified Partner</Badge>
                <Badge variant="secondary">Small Business</Badge>
                <Badge variant="outline">Enterprise Ready</Badge>
              </div>
            </div>
          </Card>
        </section>

        {/* Section 5: Cards & Elevated Surfaces */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-border pb-3">
            <Layers className="h-5 w-5 text-brand-teal-500" />
            <h2 className="font-heading text-2xl font-bold">
              5. Cards & UI Surfaces
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Feature Card */}
            <Card className="group relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-brand-teal-500/50 hover:shadow-md">
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-teal-500/10 blur-xl transition-all group-hover:bg-brand-teal-500/20" />
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-teal-50 text-brand-teal-600 dark:bg-brand-teal-950 dark:text-brand-teal-300">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <CardTitle>Autonomous Lead Triage</CardTitle>
                <CardDescription>
                  Instant AI responses that qualify high-intent inquiries 24/7
                  without manual overhead.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Connects directly to your CRM with sub-second response times
                  and transparent audit logs.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1.5 p-0 text-brand-teal-600 hover:text-brand-teal-700 dark:text-brand-teal-400"
                >
                  View Architecture <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </CardFooter>
            </Card>

            {/* KPI Metric Card */}
            <Card className="relative overflow-hidden border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:border-brand-lime-500/50 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-muted-foreground">
                    AVERAGE CLIENT METRIC
                  </span>
                  <Badge variant="lime" className="text-[10px]">
                    +142% MoM
                  </Badge>
                </div>
                <div className="pt-2">
                  <span className="text-gradient-ceratics font-heading text-4xl font-extrabold">
                    3.4x
                  </span>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Faster Lead-to-Customer Velocity
                  </p>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="space-y-2 rounded-lg bg-muted/50 p-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Response Latency
                    </span>
                    <span className="font-mono font-semibold text-foreground">
                      &lt; 15 seconds
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Conversion Lift
                    </span>
                    <span className="font-mono font-semibold text-brand-lime-700 dark:text-brand-lime-400">
                      +28.4%
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <span className="text-[11px] text-muted-foreground">
                  Benchmarked against 45+ small business implementations.
                </span>
              </CardFooter>
            </Card>

            {/* Trust & Compliance Card */}
            <Card className="group relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-foreground">
                  <ShieldCheck className="h-5 w-5 text-brand-teal-500" />
                </div>
                <CardTitle>Enterprise Security</CardTitle>
                <CardDescription>
                  SOC-2 compliant data privacy and encrypted agent memory
                  isolation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-teal-500" />
                    Zero data retention for third-party LLM training
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-teal-500" />
                    Encrypted audit logging and role-based access
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-teal-500" />
                    99.9% uptime SLA with failover protection
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Read Security Whitepaper
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Footer Summary */}
        <footer className="rounded-xl border border-border bg-card p-6 text-center text-xs text-muted-foreground">
          <p>
            Ceratics Design System • Powered by Next.js 14 App Router,
            TypeScript, Tailwind CSS, shadcn/ui & next-intl.
          </p>
        </footer>
    </div>
  );
}

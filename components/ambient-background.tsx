"use client";

import * as React from "react";

export function AmbientBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Luminous Top Gradient Wash (Eliminates Plain White in Hero) */}
      <div className="absolute inset-x-0 top-0 h-[650px] bg-[radial-gradient(ellipse_90%_520px_at_50%_0%,rgba(7,191,193,0.18),rgba(63,203,166,0.12)_40%,rgba(156,220,108,0.06)_65%,transparent_80%)] dark:bg-[radial-gradient(ellipse_90%_520px_at_50%_0%,rgba(7,191,193,0.22),rgba(63,203,166,0.14)_40%,transparent_80%)]" />

      {/* 2. Crisp, Noticeable Micro-Dot Grid Layer */}
      <div className="mask-radial-fade bg-dots-pattern absolute inset-0 opacity-100 dark:opacity-85" />

      {/* 3. Subtle Architectural Grid Overlay */}
      <div className="mask-radial-center bg-grid-pattern absolute inset-0 opacity-50 dark:opacity-35" />

      {/* 4. Ambient Colored Glow Spheres */}
      {/* Upper-Right Vibrant Teal/Mint Glow */}
      <div className="animate-ambient-float absolute -right-24 top-24 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-[#07bfc1]/20 via-[#3fcba6]/15 to-transparent blur-[90px] dark:from-[#07bfc1]/25 dark:via-[#3fcba6]/15" />

      {/* Mid-Left Organic Lime/Mint Glow */}
      <div className="animate-ambient-float-slow dark:via-[#3fcba6]/12 absolute -left-28 top-[38%] h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-[#9cdc6c]/25 via-[#3fcba6]/15 to-transparent blur-[110px] dark:from-[#9cdc6c]/20" />

      {/* Lower-Right Deep Teal Sphere */}
      <div className="animate-ambient-float via-[#3fcba6]/12 absolute -right-28 top-[72%] h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-[#07bfc1]/20 to-transparent blur-[110px] dark:from-[#07bfc1]/25" />

      {/* 5. Decorative Floating Ambient Geometric Rings (High-Tech Assets) */}
      <div className="animate-ambient-float-slow absolute left-8 top-44 hidden h-72 w-72 rounded-full border border-brand-teal-500/25 bg-gradient-to-br from-brand-teal-500/10 via-transparent to-transparent backdrop-blur-[1px] lg:block" />
      <div className="animate-ambient-float h-88 w-88 absolute right-10 top-80 hidden rounded-full border border-brand-lime-500/20 bg-gradient-to-tl from-brand-lime-500/10 via-transparent to-transparent backdrop-blur-[1px] lg:block" />

      {/* 6. Signature Ceratics Flowing Swirl Contour Lines (Vector Ribbon) */}
      <svg
        className="absolute inset-0 h-full w-full opacity-65 dark:opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1440 1800"
      >
        <defs>
          <linearGradient
            id="ceratics-flow-1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#07bfc1" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#3fcba6" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#9cdc6c" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient
            id="ceratics-flow-2"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#9cdc6c" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3fcba6" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#07bfc1" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Hero Wave Ribbon 1 */}
        <path
          d="M-80,240 C340,160 520,380 920,240 C1320,100 1420,340 1620,220"
          stroke="url(#ceratics-flow-1)"
          strokeWidth="1.75"
          fill="none"
        />

        {/* Hero Complementary Wave Ribbon 2 */}
        <path
          d="M-80,290 C360,210 540,420 940,290 C1340,150 1440,390 1620,270"
          stroke="url(#ceratics-flow-2)"
          strokeWidth="1.25"
          strokeDasharray="6 8"
          fill="none"
        />

        {/* Mid-Page Wave Ribbon */}
        <path
          d="M-100,750 C380,850 640,650 1020,800 C1340,920 1440,720 1620,810"
          stroke="url(#ceratics-flow-1)"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Lower Harmonic Wave Ribbon */}
        <path
          d="M-50,1320 C320,1220 620,1420 1000,1280 C1300,1160 1420,1380 1620,1300"
          stroke="url(#ceratics-flow-2)"
          strokeWidth="1.5"
          strokeDasharray="8 10"
          fill="none"
        />
      </svg>
    </div>
  );
}

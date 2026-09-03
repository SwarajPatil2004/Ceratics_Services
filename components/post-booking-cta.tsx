"use client";

import * as React from "react";
import { PhoneCall, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookingModal } from "@/components/booking-modal";

export function PostBookingCTA() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className="relative my-12 overflow-hidden rounded-3xl border border-border/90 bg-gradient-to-br from-card via-card to-brand-teal-950/20 p-8 text-center shadow-md sm:p-12">
        <div className="pointer-events-none absolute -bottom-24 left-1/2 -z-10 h-64 w-96 -translate-x-1/2 rounded-full bg-gradient-ceratics opacity-15 blur-3xl" />

        <div className="mx-auto max-w-2xl space-y-4">
          <Badge variant="teal" className="gap-1.5 py-1">
            <Sparkles className="h-3.5 w-3.5" /> Stop Losing Inbound Inquiries
          </Badge>

          <h3 className="font-heading text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Ready to Put These Systems to Work in Your Business?
          </h3>

          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            We build high-speed websites and deploy 24/7 AI receptionists,
            missed-call text-back, and automated quote follow-ups. Done for you
            in 14 days with zero tech complexity.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
            <Button
              variant="gradient"
              size="lg"
              className="w-full gap-2 px-8 py-6 text-base font-semibold shadow-md sm:w-auto"
              onClick={() => setIsOpen(true)}
            >
              <PhoneCall className="h-4 w-4" />
              Book a Free Strategy Call
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-brand-teal-500" />{" "}
              15-min discovery call
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-brand-teal-500" /> Free
              website & phone review
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-brand-teal-500" /> Zero
              obligation
            </span>
          </div>
        </div>
      </div>

      <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

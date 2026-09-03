"use client";

import * as React from "react";
import {
  X,
  Sparkles,
  Calendar,
  CheckCircle2,
  PhoneCall,
  Clock,
  Shield,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    primaryGoal: "missed-calls",
    notes: "",
  });

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-2xl transition-all sm:p-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="space-y-4 py-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-teal-50 text-brand-teal-600 dark:bg-brand-teal-950/80 dark:text-brand-teal-300">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground">
              Discovery Call Requested!
            </h3>
            <p className="mx-auto max-w-sm text-sm text-muted-foreground">
              Thank you,{" "}
              <strong className="text-foreground">
                {formData.name || "friend"}
              </strong>
              . We received your request for{" "}
              <strong className="text-foreground">
                {formData.businessName || "your business"}
              </strong>
              . Our team will reach out via {formData.email || "email"} within 4
              business hours to lock in your 15-minute slot.
            </p>
            <div className="pt-4">
              <Button variant="outline" onClick={onClose} className="w-full">
                Back to Ceratics
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <Badge variant="teal" className="mb-2 gap-1.5 py-1">
                <Sparkles className="h-3 w-3" /> Free 15-Minute Strategy Call
              </Badge>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Let&apos;s Build Your Growth Engine
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                No high-pressure sales pitch. Just a direct look at how modern
                web design and practical AI automations can capture more leads
                for your business.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-foreground">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-teal-500 focus:outline-none focus:ring-1 focus:ring-brand-teal-500"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-foreground">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Plumbing & HVAC"
                    value={formData.businessName}
                    onChange={(e) =>
                      setFormData({ ...formData, businessName: e.target.value })
                    }
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-teal-500 focus:outline-none focus:ring-1 focus:ring-brand-teal-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-foreground">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@business.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-teal-500 focus:outline-none focus:ring-1 focus:ring-brand-teal-500"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-foreground">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 234-5678"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-teal-500 focus:outline-none focus:ring-1 focus:ring-brand-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-foreground">
                  What is your primary growth priority?
                </label>
                <select
                  value={formData.primaryGoal}
                  onChange={(e) =>
                    setFormData({ ...formData, primaryGoal: e.target.value })
                  }
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground focus:border-brand-teal-500 focus:outline-none focus:ring-1 focus:ring-brand-teal-500"
                >
                  <option value="missed-calls">
                    Stop losing callers (Missed-Call Text-Back)
                  </option>
                  <option value="new-website">
                    High-converting website redesign for local search
                  </option>
                  <option value="ai-assistant">
                    24/7 AI chat & voice receptionist
                  </option>
                  <option value="reviews-crm">
                    Automate Google reviews & customer follow-ups
                  </option>
                  <option value="full-revamp">
                    Full-stack growth overhaul (Website + AI)
                  </option>
                </select>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="w-full gap-2 py-5 font-semibold shadow-md"
                >
                  <Calendar className="h-4 w-4" />
                  Confirm 15-Min Strategy Call
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center justify-center gap-4 pt-1 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3 text-brand-teal-500" /> 15 mins
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Shield className="h-3 w-3 text-brand-teal-500" /> 100% Free &
                  No Obligation
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

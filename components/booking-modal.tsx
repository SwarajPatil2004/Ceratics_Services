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
import { useTranslations } from "next-intl";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const t = useTranslations("BookingModal");
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
              {t("successTitle")}
            </h3>
            <p className="mx-auto max-w-sm text-sm text-muted-foreground">
              {t("successDesc", {
                name: formData.name || "friend",
                businessName: formData.businessName || "your business",
                email: formData.email || "email",
              })}
            </p>
            <div className="pt-4">
              <Button variant="outline" onClick={onClose} className="w-full">
                {t("backBtn")}
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <Badge variant="teal" className="mb-2 gap-1.5 py-1">
                <Sparkles className="h-3 w-3" /> {t("badge")}
              </Badge>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                {t("title")}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {t("subtitle")}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-foreground">
                    {t("nameLabel")}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t("namePlaceholder")}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-teal-500 focus:outline-none focus:ring-1 focus:ring-brand-teal-500"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-foreground">
                    {t("businessLabel")}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t("businessPlaceholder")}
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
                    {t("emailLabel")}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={t("emailPlaceholder")}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-teal-500 focus:outline-none focus:ring-1 focus:ring-brand-teal-500"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-foreground">
                    {t("phoneLabel")}
                  </label>
                  <input
                    type="tel"
                    placeholder={t("phonePlaceholder")}
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
                  {t("priorityLabel")}
                </label>
                <select
                  value={formData.primaryGoal}
                  onChange={(e) =>
                    setFormData({ ...formData, primaryGoal: e.target.value })
                  }
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground focus:border-brand-teal-500 focus:outline-none focus:ring-1 focus:ring-brand-teal-500"
                >
                  <option value="missed-calls">
                    {t("priorityOptions.missedCalls")}
                  </option>
                  <option value="new-website">
                    {t("priorityOptions.newWebsite")}
                  </option>
                  <option value="ai-assistant">
                    {t("priorityOptions.aiAssistant")}
                  </option>
                  <option value="reviews-crm">
                    {t("priorityOptions.reviewsCrm")}
                  </option>
                  <option value="full-revamp">
                    {t("priorityOptions.fullRevamp")}
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
                  {t("confirmBtn")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center justify-center gap-4 pt-1 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3 text-brand-teal-500" />{" "}
                  {t("duration")}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Shield className="h-3 w-3 text-brand-teal-500" />{" "}
                  {t("guarantee")}
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

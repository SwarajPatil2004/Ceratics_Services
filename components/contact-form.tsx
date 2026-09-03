"use client";

import * as React from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  Loader2,
  Mail,
  Building,
  User,
  Phone,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

export function ContactForm() {
  const t = useTranslations("ContactForm");
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    businessName: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [feedbackMessage, setFeedbackMessage] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setFeedbackMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setStatus("success");
      setFeedbackMessage(
        data.message ||
          "Thank you! We received your message and will respond within 4 business hours."
      );
    } catch (err: any) {
      setStatus("error");
      setFeedbackMessage(
        err.message || "An unexpected error occurred. Please try again."
      );
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      businessName: "",
      phone: "",
      message: "",
    });
    setStatus("idle");
    setFeedbackMessage("");
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="space-y-2">
        <Badge variant="teal" className="gap-1.5 py-1 text-xs">
          <Mail className="h-3 w-3" /> {t("badge")}
        </Badge>
        <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
          {t("title")}
        </h2>
        <p className="text-xs text-muted-foreground sm:text-sm">
          {t("subtitle")}
        </p>
      </div>

      {status === "success" ? (
        <div className="space-y-4 rounded-xl border border-brand-teal-500/30 bg-brand-teal-50/40 p-8 text-center dark:bg-brand-teal-950/30">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal-100 text-brand-teal-600 dark:bg-brand-teal-900/80 dark:text-brand-teal-300">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <h3 className="font-heading text-xl font-bold text-foreground">
            {t("successTitle")}
          </h3>
          <p className="mx-auto max-w-sm text-sm leading-relaxed text-muted-foreground">
            {feedbackMessage}
          </p>
          <div className="pt-2">
            <Button variant="outline" size="sm" onClick={handleReset}>
              {t("resetBtn")}
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === "error" && (
            <div className="flex items-center gap-2 rounded-lg border border-rose-500/30 bg-rose-50/50 p-3 text-xs text-rose-600 dark:bg-rose-950/30 dark:text-rose-400">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{feedbackMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-foreground">
                <User className="h-3 w-3 text-brand-teal-500" />{" "}
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
                className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-teal-500 focus:outline-none focus:ring-1 focus:ring-brand-teal-500"
              />
            </div>

            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-foreground">
                <Building className="h-3 w-3 text-brand-teal-500" />{" "}
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
                className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-teal-500 focus:outline-none focus:ring-1 focus:ring-brand-teal-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-foreground">
                <Mail className="h-3 w-3 text-brand-teal-500" />{" "}
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
                className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-teal-500 focus:outline-none focus:ring-1 focus:ring-brand-teal-500"
              />
            </div>

            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-foreground">
                <Phone className="h-3 w-3 text-brand-teal-500" />{" "}
                {t("phoneLabel")}
              </label>
              <input
                type="tel"
                placeholder={t("phonePlaceholder")}
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-teal-500 focus:outline-none focus:ring-1 focus:ring-brand-teal-500"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-foreground">
              <MessageSquare className="h-3 w-3 text-brand-teal-500" />{" "}
              {t("messageLabel")}
            </label>
            <textarea
              required
              rows={4}
              placeholder={t("messagePlaceholder")}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-teal-500 focus:outline-none focus:ring-1 focus:ring-brand-teal-500"
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="gradient"
              size="lg"
              disabled={status === "submitting"}
              className="w-full gap-2 py-6 text-base font-semibold shadow-md"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  {t("submittingBtn")}
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  {t("submitBtn")}
                </>
              )}
            </Button>
          </div>

          <p className="pt-1 text-center text-[11px] text-muted-foreground">
            {t("privacyNote")}
          </p>
        </form>
      )}
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Ceratics Terms of Service. Review our service engagement terms, 14-day delivery commitments, and client standards.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </Link>

      <div className="space-y-4 border-b border-border/80 pb-8">
        <Badge variant="teal" className="gap-1.5 py-1 text-xs">
          <FileText className="h-3.5 w-3.5" /> Service Agreement
        </Badge>
        <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground">
          Last updated: September 1, 2026
        </p>
      </div>

      <div className="prose prose-slate mt-10 max-w-none space-y-8 text-foreground/90 dark:prose-invert">
        <section className="space-y-3">
          <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
            1. Agreement to Terms
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            By accessing our website (ceratics.com) or engaging Ceratics for web
            development, AI receptionists, missed-call automation, or CRM setup,
            you agree to be bound by these Terms of Service. If you do not
            agree, please do not access our services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
            2. Our Scope of Work & Delivery Commitments
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Ceratics provides done-for-you technical services for small and
            local businesses. Our primary service models include:
          </p>
          <ul className="list-disc space-y-1.5 pl-6 text-sm text-muted-foreground sm:text-base">
            <li>
              <strong>14-Day Delivery Commitment:</strong> Standard website and
              automation packages are scheduled for deployment within 14
              business days following receipt of required client onboarding
              assets (domain access, business hours, service list, and telephony
              credentials).
            </li>
            <li>
              <strong>Done-For-You Execution:</strong> We handle complete DNS
              setup, web architecture, AI knowledge base training, and CRM
              workflow configuration.
            </li>
            <li>
              <strong>Full Client Ownership:</strong> Upon completion of project
              payments, you own 100% of your website code, domain assets,
              content, and customer database. We never lock you into proprietary
              hostages.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
            3. Client Responsibilities
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            To ensure timely launch and high performance:
          </p>
          <ul className="list-disc space-y-1.5 pl-6 text-sm text-muted-foreground sm:text-base">
            <li>
              You agree to provide accurate business details, service pricing,
              and operational parameters during onboarding.
            </li>
            <li>
              You are responsible for ensuring that all business claims,
              licenses, and photos provided for publication comply with local
              laws and advertising regulations.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
            4. Telephony & SMS Compliance
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            When deploying missed-call text-back and automated SMS sequences,
            Ceratics configures 10DLC (10-digit long code) A2P registration and
            carrier opt-out compliance (e.g., standard &quot;Reply STOP to
            unsubscribe&quot;). Clients agree not to utilize Ceratics
            automations for unsolicited mass marketing spam or illegal telephony
            practices.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
            5. Inquiries & Support
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            For questions regarding service agreements or support tickets, email
            us at{" "}
            <a
              href="mailto:hello@ceratics.com"
              className="text-brand-teal-600 underline hover:text-brand-teal-700 dark:text-brand-teal-400"
            >
              hello@ceratics.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}

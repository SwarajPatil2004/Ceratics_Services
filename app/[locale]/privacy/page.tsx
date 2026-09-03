import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Ceratics Privacy Policy. Learn how we collect, use, and protect your business and personal information.",
};

export default function PrivacyPage() {
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
          <ShieldCheck className="h-3.5 w-3.5" /> Legal & Transparency
        </Badge>
        <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground">
          Last updated: September 1, 2026
        </p>
      </div>

      <div className="prose prose-slate mt-10 max-w-none space-y-8 text-foreground/90 dark:prose-invert">
        <section className="space-y-3">
          <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
            1. Information We Collect
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Ceratics collects information that you provide directly to us when
            requesting a consultation, booking a discovery call, or submitting
            an inquiry through our website forms. This typically includes:
          </p>
          <ul className="list-disc space-y-1.5 pl-6 text-sm text-muted-foreground sm:text-base">
            <li>Your name and business name</li>
            <li>Email address and telephone number</li>
            <li>
              Website URL and details regarding your current systems, missed
              calls, or workflow requirements
            </li>
            <li>Any notes or specific requests submitted in message fields</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
            2. How We Use Your Information
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            We use the information we collect solely for business purposes,
            including:
          </p>
          <ul className="list-disc space-y-1.5 pl-6 text-sm text-muted-foreground sm:text-base">
            <li>
              Preparing for and conducting your 15-minute growth consultation or
              system audit
            </li>
            <li>
              Communicating project estimates, onboarding timelines, and service
              proposals
            </li>
            <li>
              Configuring your custom website architecture, AI receptionist
              parameters, and automation sequences upon contract signing
            </li>
            <li>
              Sending essential operational alerts and invoice confirmations
            </li>
          </ul>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            <strong>
              We do not sell, rent, or trade your personal or business data to
              third-party advertisers or data brokers under any circumstances.
            </strong>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
            3. Client Automation Data & AI Privacy
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            When Ceratics configures AI voice assistants or automated SMS
            workflows for your business:
          </p>
          <ul className="list-disc space-y-1.5 pl-6 text-sm text-muted-foreground sm:text-base">
            <li>
              Your proprietary business knowledge bases and customer
              conversation records remain your property.
            </li>
            <li>
              We utilize enterprise-grade API endpoints that do not use your
              proprietary client data to train public foundation models.
            </li>
            <li>
              All transmission of call recordings and transcripts is encrypted
              in transit via TLS 1.3 and at rest via AES-256 encryption.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
            4. Analytics & Cookies
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            We utilize Vercel Web Analytics (which is privacy-first and does not
            track cross-site personal identifiers) and Google Analytics 4 to
            understand aggregate website traffic and optimize user experience.
            You may disable cookies in your browser settings at any time.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
            5. Contact Us
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            If you have questions regarding this Privacy Policy or wish to
            request deletion of your contact information, please contact us at{" "}
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

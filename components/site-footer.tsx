import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Twitter,
  Linkedin,
  Github,
  Youtube,
  ArrowUpRight,
  Mail,
} from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/80 bg-card/60 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 lg:gap-12">
          {/* Brand & Tagline Column */}
          <div className="space-y-4 md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-border/80 bg-background p-1 shadow-sm">
                <Image
                  src="/ceratics-logo.png"
                  alt="Ceratics Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="font-heading text-xl font-bold tracking-tight text-foreground">
                Ceratics
              </span>
            </Link>

            <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
              AI-powered growth partner for small businesses. Modern, minimal, and
              trustworthy automation systems engineered for measurable revenue
              impact.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-muted-foreground">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Systems operational • Accepting new partners</span>
            </div>

            {/* Social Links Placeholders */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:border-brand-teal-500 hover:text-foreground"
                aria-label="Ceratics on Twitter / X"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:border-brand-teal-500 hover:text-foreground"
                aria-label="Ceratics on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:border-brand-teal-500 hover:text-foreground"
                aria-label="Ceratics on GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:border-brand-teal-500 hover:text-foreground"
                aria-label="Ceratics on YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="space-y-4 md:col-span-2">
            <p className="font-heading text-xs font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </p>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="transition-colors hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="transition-colors hover:text-foreground"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#blog"
                  className="transition-colors hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/style-guide"
                  className="inline-flex items-center gap-1 text-brand-teal-600 transition-colors hover:text-brand-teal-700 dark:text-brand-teal-400"
                >
                  Style Guide <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="space-y-4 md:col-span-3">
            <p className="font-heading text-xs font-semibold uppercase tracking-wider text-foreground">
              Solutions
            </p>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <span className="transition-colors hover:text-foreground">
                  Autonomous Lead Triage
                </span>
              </li>
              <li>
                <span className="transition-colors hover:text-foreground">
                  CRM Workflow Automation
                </span>
              </li>
              <li>
                <span className="transition-colors hover:text-foreground">
                  Custom AI Knowledge Agents
                </span>
              </li>
              <li>
                <span className="transition-colors hover:text-foreground">
                  Performance & Revenue Analytics
                </span>
              </li>
            </ul>
          </div>

          {/* Contact / Consultation Column */}
          <div className="space-y-4 md:col-span-2">
            <p className="font-heading text-xs font-semibold uppercase tracking-wider text-foreground">
              Get in Touch
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Ready to deploy AI in your small business?</p>
              <a
                href="mailto:contact@ceratics.com"
                className="inline-flex items-center gap-1.5 font-medium text-foreground hover:text-brand-teal-600 dark:hover:text-brand-teal-400 transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-brand-teal-500" />
                contact@ceratics.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-border/80 pt-8 sm:flex-row text-xs text-muted-foreground">
          <p>© {currentYear} Ceratics. All rights reserved.</p>
          <div className="mt-4 flex gap-6 sm:mt-0">
            <span className="cursor-pointer transition-colors hover:text-foreground">
              Privacy Policy
            </span>
            <span className="cursor-pointer transition-colors hover:text-foreground">
              Terms of Service
            </span>
            <span className="cursor-pointer transition-colors hover:text-foreground">
              Security
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

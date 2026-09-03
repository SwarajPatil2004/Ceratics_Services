import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      {...props}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z" />
    </svg>
  );
}

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function YouTubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      {...props}
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

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

            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              AI-powered growth partner for small businesses. Modern, minimal,
              and trustworthy automation systems engineered for measurable
              revenue impact.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-muted-foreground">
              <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              <span>Systems operational • Accepting new partners</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:border-brand-teal-500 hover:text-foreground"
                aria-label="Ceratics on Twitter / X"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:border-brand-teal-500 hover:text-foreground"
                aria-label="Ceratics on LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:border-brand-teal-500 hover:text-foreground"
                aria-label="Ceratics on GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:border-brand-teal-500 hover:text-foreground"
                aria-label="Ceratics on YouTube"
              >
                <YouTubeIcon />
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
                <Link
                  href="/"
                  className="transition-colors hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-foreground"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
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
                className="inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-brand-teal-600 dark:hover:text-brand-teal-400"
              >
                <Mail className="h-3.5 w-3.5 text-brand-teal-500" />
                contact@ceratics.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-border/80 pt-8 text-xs text-muted-foreground sm:flex-row">
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

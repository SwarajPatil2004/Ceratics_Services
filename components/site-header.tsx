"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Sparkles,
  Home,
  Briefcase,
  Users,
  BookOpen,
  Mail,
  Palette,
  ArrowRight,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "About", href: "/#about", icon: Users },
  { name: "Blog", href: "/#blog", icon: BookOpen },
  { name: "Contact", href: "/#contact", icon: Mail },
  { name: "Style Guide", href: "/style-guide", icon: Palette },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close drawer
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isLinkActive = (href: string) => {
    if (href === "/" || href === "/en") {
      return pathname === "/" || pathname === "/en";
    }
    return pathname.includes(href.replace("/#", ""));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/80 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Logo & Brand */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
          aria-label="Ceratics Home"
        >
          <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-border/80 bg-card p-1 shadow-sm transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/ceratics-logo.png"
              alt="Ceratics Logo"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold tracking-tight text-foreground">
              Ceratics
            </span>
            <span className="-mt-1 hidden text-[10px] font-medium text-muted-foreground sm:block">
              AI Growth Partner
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex lg:gap-2">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-muted/60 hover:text-foreground",
                  active
                    ? "bg-muted/80 font-semibold text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button
            variant="gradient"
            size="sm"
            className="gap-2 font-semibold shadow-sm hover:shadow-md"
            onClick={() => {
              const contactEl = document.getElementById("contact");
              if (contactEl) {
                contactEl.scrollIntoView({ behavior: "smooth" });
              } else {
                window.location.href = "/#contact";
              }
            }}
          >
            <PhoneCall className="h-3.5 w-3.5" />
            Book a Call
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-foreground transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <aside
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col justify-between border-l border-border bg-background p-6 shadow-2xl transition-transform"
            aria-label="Mobile Navigation"
          >
            {/* Drawer Top Header */}
            <div>
              <div className="flex items-center justify-between border-b border-border/80 pb-4">
                <Link
                  href="/"
                  className="flex items-center gap-2.5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="relative h-8 w-8 overflow-hidden rounded-md border border-border bg-card p-1">
                    <Image
                      src="/ceratics-logo.png"
                      alt="Ceratics Logo"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-heading text-lg font-bold text-foreground">
                    Ceratics
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <nav className="mt-6 flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const active = isLinkActive(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                        active
                          ? "bg-muted font-semibold text-foreground"
                          : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                      )}
                    >
                      <Icon className="h-4 w-4 text-brand-teal-500" />
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="space-y-4 border-t border-border/80 pt-6">
              <Button
                variant="gradient"
                className="w-full gap-2 py-5 font-semibold shadow-md"
                onClick={() => {
                  setMobileMenuOpen(false);
                  const contactEl = document.getElementById("contact");
                  if (contactEl) {
                    contactEl.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "/#contact";
                  }
                }}
              >
                <PhoneCall className="h-4 w-4" />
                Book a Call
              </Button>

              <div className="flex items-center justify-between rounded-lg border border-border bg-muted/40 p-3 text-xs">
                <span className="text-muted-foreground">Appearance</span>
                <ThemeToggle />
              </div>

              <p className="text-center text-[11px] text-muted-foreground">
                AI-Powered Growth Partner for Small Businesses
              </p>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}

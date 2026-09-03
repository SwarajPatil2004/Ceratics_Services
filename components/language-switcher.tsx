"use client";

import * as React from "react";
import { Globe, Check, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

interface LanguageSwitcherProps {
  className?: string;
  showLabel?: boolean;
}

export function LanguageSwitcher({
  className = "",
  showLabel = false,
}: LanguageSwitcherProps) {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const t = useTranslations("Language");

  // Close on click outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative inline-block text-left ${className}`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/80 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-brand-teal-500/50 hover:bg-muted hover:text-foreground focus:outline-none focus:ring-1 focus:ring-brand-teal-500"
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Select language"
      >
        <Globe className="h-3.5 w-3.5 text-brand-teal-500" />
        <span className="text-[11px] font-semibold uppercase tracking-wider text-foreground">
          {t("current")}
        </span>
        {showLabel && (
          <span className="hidden text-xs sm:inline">{t("en")}</span>
        )}
        <ChevronDown className="h-3 w-3 opacity-60 transition-transform duration-200" />
      </button>

      {open && (
        <div
          className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-xl border border-border bg-card p-1.5 shadow-xl ring-1 ring-black/5 backdrop-blur-md focus:outline-none"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            {t("label")}
          </div>

          {/* Active Locale: English */}
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-lg bg-brand-teal-50/60 px-2.5 py-2 text-xs font-semibold text-brand-teal-900 transition-colors dark:bg-brand-teal-950/60 dark:text-brand-teal-200"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            <div className="flex items-center gap-2">
              <span>🇺🇸</span>
              <span>{t("en")}</span>
            </div>
            <Check className="h-3.5 w-3.5 text-brand-teal-600 dark:text-brand-teal-400" />
          </button>

          {/* Future Locale Prepared Indicator */}
          <div className="mt-1 border-t border-border/60 pt-1">
            <div
              className="flex w-full cursor-not-allowed items-center justify-between rounded-lg px-2.5 py-2 text-xs text-muted-foreground/60"
              title="Translation architecture ready — upcoming locale"
            >
              <div className="flex items-center gap-2">
                <span>🇪🇸</span>
                <span>Español</span>
              </div>
              <span className="rounded bg-muted px-1.5 py-0.5 text-[9px] font-medium text-muted-foreground">
                Soon
              </span>
            </div>
          </div>

          <div className="mt-1 border-t border-border/50 px-2.5 py-1 text-[10px] italic text-muted-foreground/70">
            {t("comingSoon")}
          </div>
        </div>
      )}
    </div>
  );
}

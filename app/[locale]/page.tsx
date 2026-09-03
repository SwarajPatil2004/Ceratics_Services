import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight, Palette, Sparkles, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  const t = useTranslations("Index");

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-24 sm:py-32 text-foreground">
      {/* Subtle radial background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-gradient-radial-glow opacity-75 blur-3xl" />

      <div className="mx-auto flex max-w-2xl flex-col items-center space-y-6 text-center">
        {/* Logo presentation */}
        <div className="relative mb-2 flex h-24 w-24 items-center justify-center rounded-2xl border border-border/80 bg-card p-3 shadow-sm transition-transform hover:scale-105">
          <Image
            src="/ceratics-logo.png"
            alt="Ceratics Logo"
            width={72}
            height={72}
            className="object-contain drop-shadow-sm"
            priority
          />
        </div>

        <Badge variant="teal" className="gap-1.5 py-1 text-xs">
          <Sparkles className="h-3.5 w-3.5" />
          {t("badge")}
        </Badge>

        <h1 className="font-heading text-5xl font-extrabold tracking-tight sm:text-7xl">
          <span className="text-gradient-ceratics">{t("title")}</span>
        </h1>

        <p className="font-heading text-xl font-medium text-foreground sm:text-2xl">
          {t("subtitle")}
        </p>

        <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
          {t("description")}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button
            variant="gradient"
            size="lg"
            className="gap-2 font-semibold shadow-md"
            onClick={() => {
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
          <Link href="/style-guide">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 font-medium"
            >
              <Palette className="h-4 w-4 text-brand-teal-500" />
              {t("viewStyleGuide")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

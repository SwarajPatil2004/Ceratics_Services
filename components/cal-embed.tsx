"use client";

import * as React from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Calendar, Sparkles, Clock, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function CalEmbed() {
  const [mounted, setMounted] = React.useState(false);
  const calLink = process.env.NEXT_PUBLIC_CALCOM_LINK || "ceratics/15min";

  React.useEffect(() => {
    setMounted(true);
    (async function () {
      try {
        const cal = await getCalApi();
        cal("ui", {
          theme: "auto",
          styles: {
            branding: { brandColor: "#07bfc1" },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      } catch (err) {
        console.error("Cal.com initialization notice:", err);
      }
    })();
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-[550px] w-full animate-pulse items-center justify-center rounded-2xl border border-border bg-card/60 p-8 text-center text-muted-foreground">
        <div className="space-y-3">
          <Calendar className="mx-auto h-8 w-8 animate-bounce text-brand-teal-500" />
          <p className="text-sm">Loading live booking calendar...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/30 px-6 py-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-brand-teal-500" />
          <span className="font-heading text-sm font-bold text-foreground">
            Select a Date & Time
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3 text-brand-teal-500" /> 15 Mins
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Shield className="h-3 w-3 text-brand-teal-500" /> Free Strategy
            Session
          </span>
        </div>
      </div>

      <div className="min-h-[550px] w-full p-2 sm:p-4">
        <Cal
          calLink={calLink}
          style={{
            width: "100%",
            height: "100%",
            minHeight: "550px",
            overflow: "hidden",
          }}
          config={{ layout: "month_view" }}
        />
      </div>
    </div>
  );
}

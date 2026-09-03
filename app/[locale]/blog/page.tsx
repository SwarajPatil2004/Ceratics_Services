import * as React from "react";
import Link from "next/link";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Tag,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { getAllPosts, getAllTags } from "@/lib/blog";

export const metadata = {
  title: "Growth Playbooks & Guides — Websites & AI for Small Business",
  description:
    "Actionable strategies, conversion guides, and AI playbooks written specifically for local and small business owners looking to capture more leads and scale operations.",
  keywords: [
    "small business blog",
    "AI receptionist guide",
    "website conversion rate optimization",
    "missed call text back service",
    "contractor marketing playbooks",
  ],
  openGraph: {
    title: "Growth Playbooks & Guides | Ceratics",
    description:
      "Actionable strategies, conversion guides, and AI playbooks for local business owners.",
    url: "https://ceratics.com/blog",
    type: "website",
    images: [
      {
        url: "/ceratics-logo.png",
        width: 800,
        height: 800,
        alt: "Ceratics Blog & Playbooks",
      },
    ],
  },
};

export default function BlogListingPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="space-y-16 py-8 sm:py-16 md:space-y-24">
      {/* HERO */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-gradient-radial-glow opacity-75 blur-3xl" />

        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <Badge variant="teal" className="gap-1.5 py-1 text-xs">
            <BookOpen className="h-3.5 w-3.5" /> Practical AI & Web Insights
          </Badge>

          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
            Small Business Growth &{" "}
            <span className="text-gradient-ceratics">Automation Playbooks</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-xl">
            Clear, actionable strategies on web design, local SEO, and practical
            AI automations. No corporate fluff or technical jargon—just what
            works to win more clients.
          </p>

          {/* Tags cloud */}
          {tags.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <span className="mr-1 flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                <Tag className="h-3 w-3" /> Popular Topics:
              </span>
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-brand-teal-500 hover:text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* POSTS LIST */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {posts.length === 0 ? (
          <div className="space-y-4 rounded-3xl border border-dashed border-border p-12 text-center">
            <p className="text-muted-foreground">
              No articles published yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <Card className="overflow-hidden border-border/80 bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-teal-500/50 hover:shadow-md sm:p-8">
                  <div className="space-y-4">
                    {/* Tags & Meta Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
                      <div className="flex flex-wrap items-center gap-2">
                        {post.tags.slice(0, 3).map((t) => (
                          <Badge
                            key={t}
                            variant="secondary"
                            className="text-[11px] font-medium"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-brand-teal-500" />
                          {post.date}
                        </span>
                        {post.readingTime && (
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5 text-brand-lime-600 dark:text-brand-lime-400" />
                            {post.readingTime}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="font-heading text-2xl font-bold text-foreground transition-colors group-hover:text-brand-teal-600 dark:group-hover:text-brand-teal-400 sm:text-3xl">
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {post.description}
                    </p>

                    {/* Read More Link */}
                    <div className="flex items-center gap-1.5 pt-2 text-sm font-semibold text-brand-teal-600 transition-colors group-hover:text-brand-teal-700 dark:text-brand-teal-400 dark:group-hover:text-brand-teal-300">
                      <span>Read full article</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* NEWSLETTER / STRATEGY STRIP */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 rounded-3xl border border-border/80 bg-gradient-to-br from-card to-brand-teal-950/20 p-8 text-center shadow-sm sm:p-12">
          <Badge variant="lime" className="gap-1.5 py-1">
            <Sparkles className="h-3.5 w-3.5" /> Have a Specific Topic in Mind?
          </Badge>
          <h3 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Want to See How These Automations Work for Your Business?
          </h3>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            We offer complimentary 15-minute consultations to review your
            website, phone answering flows, and customer journey.
          </p>
          <div className="pt-2">
            <Link href="/services">
              <span className="inline-flex items-center gap-2 rounded-xl bg-gradient-ceratics px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition-opacity hover:opacity-90">
                Explore What We Build <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

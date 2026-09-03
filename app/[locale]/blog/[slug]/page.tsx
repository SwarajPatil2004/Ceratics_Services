import * as React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Tag,
  User,
  Share2,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { PostBookingCTA } from "@/components/post-booking-cta";

interface BlogPostPageProps {
  params: {
    locale: string;
    slug: string;
  };
}

// Generate static params for all slugs
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate dynamic SEO metadata
export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found | Ceratics" };

  return {
    title: `${post.meta.title} | Ceratics Blog`,
    description: post.meta.description,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: "article",
      publishedTime: post.meta.date,
      authors: [post.meta.author || "Ceratics Team"],
      tags: post.meta.tags,
      url: `https://ceratics.com/blog/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.description,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const mdxComponents = {
    h1: (props: any) => (
      <h1
        className="mb-4 mt-8 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
        {...props}
      />
    ),
    h2: (props: any) => (
      <h2
        className="mb-4 mt-10 border-b border-border/80 pb-2 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
        {...props}
      />
    ),
    h3: (props: any) => (
      <h3
        className="mb-3 mt-8 font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        {...props}
      />
    ),
    p: (props: any) => (
      <p
        className="my-4 text-base leading-relaxed text-muted-foreground sm:text-lg"
        {...props}
      />
    ),
    ul: (props: any) => (
      <ul
        className="my-4 list-disc space-y-2 pl-6 text-muted-foreground"
        {...props}
      />
    ),
    ol: (props: any) => (
      <ol
        className="my-4 list-decimal space-y-2 pl-6 text-muted-foreground"
        {...props}
      />
    ),
    li: (props: any) => (
      <li className="text-base leading-relaxed sm:text-lg" {...props} />
    ),
    blockquote: (props: any) => (
      <blockquote
        className="my-6 rounded-2xl border-l-4 border-brand-teal-500 bg-muted/40 p-5 font-medium italic text-foreground"
        {...props}
      />
    ),
    hr: () => <hr className="my-10 border-border/80" />,
    strong: (props: any) => (
      <strong className="font-semibold text-foreground" {...props} />
    ),
    a: (props: any) => (
      <a
        className="font-medium text-brand-teal-600 underline underline-offset-4 transition-colors hover:text-brand-teal-700 dark:text-brand-teal-400 dark:hover:text-brand-teal-300"
        {...props}
      />
    ),
  };

  return (
    <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8">
      {/* BACK TO BLOG LINK */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-brand-teal-600 dark:hover:text-brand-teal-400"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to all articles</span>
        </Link>
      </div>

      {/* POST HEADER */}
      <header className="space-y-6 border-b border-border/80 pb-8">
        <div className="flex flex-wrap items-center gap-2">
          {post.meta.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <h1 className="font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-5xl">
          {post.meta.title}
        </h1>

        <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {post.meta.description}
        </p>

        {/* METADATA BAR */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs text-muted-foreground">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-foreground">
              <User className="h-3.5 w-3.5 text-brand-teal-500" />
              {post.meta.author || "Ceratics Team"}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-brand-teal-500" />
              {post.meta.date}
            </span>
            {post.meta.readingTime && (
              <>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-brand-lime-600 dark:text-brand-lime-400" />
                  {post.meta.readingTime}
                </span>
              </>
            )}
          </div>
        </div>
      </header>

      {/* POST BODY WITH @tailwindcss/typography */}
      <div className="prose prose-slate max-w-none py-8 font-sans dark:prose-invert">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>

      {/* END-OF-POST CTA */}
      <PostBookingCTA />

      {/* FOOTER NAVIGATION */}
      <div className="flex items-center justify-between border-t border-border/80 pt-6 text-xs text-muted-foreground">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 font-semibold text-brand-teal-600 hover:underline dark:text-brand-teal-400"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to all articles
        </Link>
        <Link
          href="/services"
          className="font-semibold text-foreground hover:text-brand-teal-600 dark:hover:text-brand-teal-400"
        >
          View all Ceratics services →
        </Link>
      </div>
    </article>
  );
}

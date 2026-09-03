import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@/components/google-analytics";
import "@/app/globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const heading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ceratics.com"),
  title: {
    default: "Ceratics | AI Websites & Lead Automations for Small Business",
    template: "%s | Ceratics",
  },
  description:
    "Ceratics helps small and local businesses win more customers with high-converting website design, 24/7 AI receptionists, missed-call text-back, and automated lead follow-up. 100% done-for-you in 14 days.",
  keywords: [
    "AI website builder for small business",
    "AI receptionist small business",
    "website design for local business",
    "missed call text back service",
    "AI marketing agency for small business",
    "contractor website design",
    "automated lead follow up",
    "small business CRM automation",
    "local business answering service",
    "Google review automation for contractors",
  ],
  authors: [{ name: "Ceratics Team", url: "https://ceratics.com" }],
  creator: "Ceratics",
  publisher: "Ceratics",
  icons: {
    icon: "/ceratics-logo.png",
    shortcut: "/ceratics-logo.png",
    apple: "/ceratics-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ceratics.com",
    siteName: "Ceratics",
    title: "Ceratics | AI Websites & Lead Automations for Small Business",
    description:
      "Modern websites, 24/7 AI receptionists, missed-call text-back, and automated quote follow-ups. Built and managed for small businesses in 14 days.",
    images: [
      {
        url: "/ceratics-logo.png",
        width: 800,
        height: 800,
        alt: "Ceratics Logo — AI-Powered Growth Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ceratics | AI Websites & Lead Automations for Small Business",
    description:
      "Modern websites, 24/7 AI receptionists, missed-call text-back, and automated quote follow-ups. Built and managed for small businesses in 14 days.",
    images: ["/ceratics-logo.png"],
    creator: "@ceratics",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${sans.variable} ${heading.variable} min-h-screen bg-background font-sans text-foreground antialiased selection:bg-brand-teal-500/20 selection:text-brand-teal-900 dark:selection:bg-brand-teal-500/30 dark:selection:text-brand-teal-100`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="ceratics-theme"
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <JsonLd />
            <GoogleAnalytics />
            <div className="relative flex min-h-screen flex-col bg-background text-foreground">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
            <Analytics />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

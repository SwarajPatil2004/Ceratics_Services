import { track } from "@vercel/analytics";

/**
 * Universal event tracker for Vercel Analytics and Google Analytics 4.
 */
export function trackEvent(
  eventName: string,
  properties?: Record<string, string | number | boolean>
) {
  // 1. Send to Vercel Analytics
  try {
    track(eventName, properties);
  } catch (err) {
    // Gracefully handle if Vercel Analytics is disabled or offline
  }

  // 2. Send to Google Analytics 4 (via window.gtag)
  if (
    typeof window !== "undefined" &&
    typeof (window as any).gtag === "function"
  ) {
    try {
      (window as any).gtag("event", eventName, properties);
    } catch (err) {
      console.debug("GA4 track error:", err);
    }
  }
}

/**
 * Specifically track when a visitor clicks any "Book a Call" or discovery CTA button.
 *
 * @param location Where the button was clicked (e.g. 'header', 'hero', 'services_grid', 'drawer', 'blog_footer')
 * @param label The specific text or context of the CTA button
 */
export function trackBookCallClick(location: string, label?: string) {
  const page = typeof window !== "undefined" ? window.location.pathname : "";
  trackEvent("book_call_click", {
    location,
    label: label || "Book a Call",
    page,
  });
}

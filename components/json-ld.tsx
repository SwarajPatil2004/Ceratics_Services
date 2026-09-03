import * as React from "react";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": "https://ceratics.com/#organization",
        name: "Ceratics",
        url: "https://ceratics.com",
        logo: {
          "@type": "ImageObject",
          url: "https://ceratics.com/ceratics-logo.png",
          caption: "Ceratics Logo",
        },
        image: "https://ceratics.com/ceratics-logo.png",
        description:
          "Ceratics helps small and local businesses win more customers with high-converting website design, 24/7 AI receptionists, missed-call text-back, and automated lead follow-up. 100% done-for-you in 14 days.",
        email: "hello@ceratics.com",
        priceRange: "$$",
        areaServed: [
          {
            "@type": "Country",
            name: "United States",
          },
        ],
        knowsAbout: [
          "Website Design for Small Business",
          "AI Receptionist for Small Business",
          "Missed Call Text Back Service",
          "Local SEO Optimization",
          "Lead Follow-Up Automation",
          "Google Review & Reputation Automation",
          "Online Booking & Scheduling Systems",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Ceratics Growth Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Website Design & Development",
                description:
                  "High-converting, mobile-first website design engineered for local search rankings and appointment bookings.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Voice & Chat Receptionists",
                description:
                  "24/7 autonomous phone answering and website concierge trained on business knowledge.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Instant Missed-Call Text-Back",
                description:
                  "Sub-5-second automated SMS engagement to recover lost inbound calls before competitors answer.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Review & Reputation Automation",
                description:
                  "Automated post-job SMS triggers with 1-tap links to generate consistent 5-star Google reviews.",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

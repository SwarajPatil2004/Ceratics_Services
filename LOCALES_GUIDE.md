# Multilingual Architecture & Locales Guide

This document outlines how internationalization (`i18n`) is architected in **Ceratics** using `next-intl` and how to add new languages when ready.

---

## 1. Current Architecture Overview

- **Default Locale**: `en` (English - United States)
- **Routing Strategy**: `localePrefix: "as-needed"` (defined in `i18n/routing.ts`)
  - **English users see clean URLs**: `https://ceratics.com/services`, `https://ceratics.com/about`, `https://ceratics.com/contact` (no `/en/` prefix).
  - **Secondary locales automatically get prefixed**: e.g., `https://ceratics.com/es/services`, `https://ceratics.com/es/about`.
- **Translation Message Store**: Located in `/messages/en.json`.
- **UI Language Switcher**: Located in `components/language-switcher.tsx`, integrated in the sticky header and mobile drawer.

---

## 2. Step-by-Step: Adding a New Locale (e.g., Spanish `es`)

Adding a new language is purely a **content translation task**—no architectural overhaul is needed. Follow these 3 simple steps:

### Step 1: Register the New Locale in `i18n/routing.ts`

Open [i18n/routing.ts](file:///b:/Git%20hub/Ceratics_Services/i18n/routing.ts) and add the ISO code to the `locales` array:

```typescript
export const routing = defineRouting({
  // Add your new locale here:
  locales: ["en", "es"],

  // English remains default
  defaultLocale: "en",

  // Ensures English URLs stay unprefixed while Spanish gets /es/
  localePrefix: "as-needed",
});
```

---

### Step 2: Duplicate and Translate the Message Dictionary

1. Copy [messages/en.json](file:///b:/Git%20hub/Ceratics_Services/messages/en.json) to `/messages/es.json`:
   ```bash
   cp messages/en.json messages/es.json
   ```
2. Open `/messages/es.json` and translate the values for each key:
   ```json
   {
     "Common": {
       "brandName": "Ceratics",
       "tagline": "Socio de crecimiento impulsado por IA para pequeñas empresas",
       "bookCall": "Reservar llamada"
     },
     "Nav": {
       "home": "Inicio",
       "services": "Servicios",
       "about": "Nosotros",
       "blog": "Blog",
       "contact": "Contacto"
     }
     // ...
   }
   ```
   > **Tip**: Keep all JSON keys identical to `en.json`. Do not delete or rename keys.

---

### Step 3: Enable the Language in `components/language-switcher.tsx`

Open [components/language-switcher.tsx](file:///b:/Git%20hub/Ceratics_Services/components/language-switcher.tsx) and enable the locale option:

```tsx
// Switch the current locale to "es" using next-intl navigation Link or useRouter
<Link
  href={pathname}
  locale="es"
  className="flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-xs hover:bg-muted"
>
  <div className="flex items-center gap-2">
    <span>🇪🇸</span>
    <span>Español</span>
  </div>
  {currentLocale === "es" && (
    <Check className="h-3.5 w-3.5 text-brand-teal-500" />
  )}
</Link>
```

---

## 3. Localizing MDX Blog Posts (Optional)

For blog posts in `/content/blog/`:

1. You can add a `locale: "es"` field to the post frontmatter:
   ```markdown
   ---
   title: "Por qué las pequeñas empresas pierden clientes..."
   date: "2026-09-03"
   locale: "es"
   ---
   ```
2. Or organize posts into locale subfolders:
   - `/content/blog/en/*.mdx`
   - `/content/blog/es/*.mdx`

---

## 4. Key Files Reference

- **`i18n/routing.ts`**: Defines supported locales, default locale, and URL prefix strategy (`as-needed`).
- **`i18n/request.ts`**: Dynamically imports the active locale's JSON file (`../messages/${locale}.json`).
- **`middleware.ts`**: Matches inbound requests and routes them to the appropriate locale handler while bypassing static assets, sitemaps, and robots.
- **`messages/en.json`**: Primary translation dictionary.
- **`components/language-switcher.tsx`**: Header & mobile drawer language switcher component.

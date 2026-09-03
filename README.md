# Ceratics — AI Websites & Growth Systems for Small Business

> **Ceratics** is an "AI-powered growth" partner for small businesses. We design and deploy high-speed websites paired with 24/7 AI voice receptionists, instant missed-call text-back, review automation, and unified lead pipelines—built for local service businesses without the corporate overhead.

---

## ⚡ Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a custom design system tokenized around the Ceratics swirl logo gradient (`#07bfc1` teal to `#3fcba6` mint to `#9cdc6c` lime)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) + [Lucide React Icons](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) with zero-FOUC light & dark mode persistence
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/) with clean URLs (`as-needed` prefix) and centralized dictionary store (`/messages/en.json`)
- **Content / Blog**: Native MDX reader via [`next-mdx-remote`](https://github.com/hashicorp/next-mdx-remote) with `@tailwindcss/typography`
- **Scheduling**: [Cal.com Embed React](https://cal.com/) inline calendar
- **Analytics**: [Vercel Web Analytics](https://vercel.com/analytics) + Google Analytics 4 (GA4) with custom CTA performance tracking (`book_call_click`)
- **Quality & Formatting**: ESLint + Prettier with `prettier-plugin-tailwindcss`

---

## 📁 Repository Structure

```
├── app/
│   ├── [locale]/             # Localized routes (/, /services, /about, /blog, /contact, /style-guide)
│   │   ├── layout.tsx        # Global shell layout, ThemeProvider, NextIntlClientProvider, Analytics
│   │   ├── page.tsx          # Homepage server metadata + HomeView
│   │   ├── services/         # Services catalog
│   │   ├── about/            # Mission, comparison matrix, operating pillars
│   │   ├── blog/             # MDX blog listing & [slug] reader
│   │   ├── contact/          # Cal.com embed & direct message form
│   │   └── style-guide/      # Live design system, type scale & component showcase
│   ├── api/contact/          # Serverless route for contact submissions (webhooks & Resend email)
│   ├── globals.css           # Custom CSS variables, gradient utilities, and focus states
│   ├── robots.ts             # Dynamic robots.txt generation
│   └── sitemap.ts            # Dynamic sitemap.xml generation
├── components/               # Modular UI & view components
│   ├── ui/                   # Reusable base primitives (Button, Card, Badge)
│   ├── site-header.tsx       # Sticky navigation, mobile drawer, theme & language switches
│   ├── site-footer.tsx       # Semantic footer with localized links and social placeholders
│   ├── booking-modal.tsx     # Reusable discovery call modal with accessible form controls
│   ├── cal-embed.tsx         # Cal.com scheduling embed with loading skeleton (zero CLS)
│   ├── contact-form.tsx      # Interactive contact form with validation and status handling
│   ├── language-switcher.tsx # Accessible locale dropdown
│   └── google-analytics.tsx  # Conditional GA4 script injector
├── content/blog/             # Markdown MDX articles with frontmatter
├── i18n/                     # next-intl routing config & request message loader
├── lib/
│   ├── analytics.ts          # Unified tracking for Vercel Analytics & Google Analytics 4
│   ├── blog.ts               # MDX content reader and frontmatter parser
│   └── utils.ts              # cn() Tailwind class merger
├── messages/                 # Translation dictionaries (en.json)
├── public/                   # Static assets (ceratics-logo.png, favicon.ico)
├── .env.example              # Documented environment variables template
└── LOCALES_GUIDE.md          # 3-step guide for adding new languages
```

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites

- **Node.js**: v18.17.0 or higher
- **npm**: v9 or higher

### 2. Clone and Install

```bash
git clone https://github.com/SwarajPatil2004/Ceratics_Services.git
cd Ceratics_Services
npm install
```

### 3. Configure Environment Variables

Copy the `.env.example` file to `.env.local`:

```bash
cp .env.example .env.local
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Environment Variables Reference

All environment variables are optional for local development, with sensible fallbacks provided:

| Variable                        | Required | Default                | Description                                                                               |
| ------------------------------- | -------- | ---------------------- | ----------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_APP_URL`           | No       | `https://ceratics.com` | Base canonical domain for OpenGraph, sitemap.xml, and robots.txt.                         |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No       | _(none)_               | Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`). If omitted, no GA scripts are loaded. |
| `NEXT_PUBLIC_CALCOM_LINK`       | No       | `ceratics/15min`       | Cal.com event link rendered on `/contact` (format: `username/event`).                     |
| `CONTACT_WEBHOOK_URL`           | No       | _(none)_               | Webhook endpoint (POST) for contact submissions (Zapier, Make, GoHighLevel, Slack).       |
| `RESEND_API_KEY`                | No       | _(none)_               | Resend API key for instant lead email notifications.                                      |
| `CONTACT_NOTIFICATION_EMAIL`    | No       | `hello@ceratics.com`   | Recipient email address for Resend lead alerts.                                           |

---

## 🛠️ Available NPM Scripts

- `npm run dev`: Starts the Next.js local development server with Turbopack/Fast Refresh.
- `npm run build`: Validates types, checks linting, and compiles an optimized production bundle.
- `npm run start`: Runs the production server locally after running `npm run build`.
- `npm run lint`: Runs Next.js ESLint rules across all files.
- `npm run format`: Automatically formats the codebase with Prettier and Tailwind class ordering.
- `npm run format:check`: Validates formatting in CI/CD pipelines.

---

## 🌐 Adding New Languages

Ceratics is built on `next-intl` with `localePrefix: "as-needed"`. Adding a new language is a simple 3-step content task:

1. Register the language code in `i18n/routing.ts`.
2. Duplicate `/messages/en.json` to `/messages/{locale}.json` and translate.
3. Enable the language option in `components/language-switcher.tsx`.

For detailed instructions, see [LOCALES_GUIDE.md](./LOCALES_GUIDE.md).

---

## 🚢 Deploying to Vercel

Ceratics is built natively for the Vercel platform:

### Method 1: Via Vercel Web Dashboard (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "feat: complete production-ready Ceratics platform"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New..."** > **"Project"**.
4. Import the **`Ceratics_Services`** repository.
5. In the **Configure Project** screen:
   - **Framework Preset**: Next.js (automatically detected)
   - **Root Directory**: `./`
   - **Build Command**: `next build` (default)
   - **Output Directory**: `.next` (default)
6. Expand **"Environment Variables"** and add your values:
   - `NEXT_PUBLIC_APP_URL` (e.g. `https://ceratics.com` or your custom domain)
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` (your GA4 ID, e.g. `G-XXXXXXXXXX`)
   - `NEXT_PUBLIC_CALCOM_LINK` (your Cal.com handle, e.g. `yourname/15min`)
   - `CONTACT_WEBHOOK_URL` (optional: webhook endpoint for Zapier / Slack)
   - `RESEND_API_KEY` (optional: Resend key for lead email alerts)
   - `CONTACT_NOTIFICATION_EMAIL` (e.g. `hello@yourcompany.com`)
7. Click **"Deploy"**.
8. Once deployed:
   - In your Vercel Project Dashboard, navigate to **Analytics** and click **Enable Web Analytics** to activate native real-time visitor tracking.
   - Go to **Settings > Domains** to attach your custom production domain (e.g. `ceratics.com`).

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI if not already installed
npm install -g vercel

# Log in to your Vercel account
vercel login

# Link and deploy
vercel

# Deploy to production
vercel --prod
```

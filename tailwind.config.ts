import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        heading: ["var(--font-heading)", "var(--font-sans)", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Ceratics Brand Palette sampled from logo
        brand: {
          teal: {
            50: "#f0fdfc",
            100: "#ccfbf1",
            200: "#99f6e4",
            300: "#5eead4",
            400: "#2dd4bf",
            500: "#07bfc1", // Sampled Exact Logo Teal
            600: "#0d9488",
            700: "#0f766e",
            800: "#115e59",
            900: "#134e4a",
            950: "#042f2e",
          },
          lime: {
            50: "#f7fee7",
            100: "#ecfccb",
            200: "#d9f99d",
            300: "#bef264",
            400: "#9cdc6c", // Sampled Exact Logo Lime
            500: "#84cc16",
            600: "#65a30d",
            700: "#4f7c0f",
            800: "#3f6212",
            900: "#365314",
            950: "#1a2e05",
          },
          mint: {
            300: "#6ee7b7",
            400: "#34d399",
            500: "#3fcba6", // Sampled Exact Logo Mid-Transition
            600: "#059669",
          },
          neutral: {
            light: {
              bg: "#fbfcfb",
              card: "#ffffff",
              border: "#e2e8e5",
              text: "#0f1715",
              muted: "#52605b",
            },
            dark: {
              bg: "#080c0b",
              card: "#0f1513",
              border: "#1e2b25",
              text: "#f2f6f4",
              muted: "#94a39d",
            },
          },
        },
      },
      backgroundImage: {
        "gradient-ceratics":
          "linear-gradient(135deg, #07bfc1 0%, #3fcba6 50%, #9cdc6c 100%)",
        "gradient-ceratics-soft":
          "linear-gradient(135deg, rgba(7, 191, 193, 0.1) 0%, rgba(63, 203, 166, 0.08) 50%, rgba(156, 220, 108, 0.1) 100%)",
        "gradient-radial-glow":
          "radial-gradient(ellipse at top, rgba(7, 191, 193, 0.15) 0%, rgba(156, 220, 108, 0.05) 50%, transparent 75%)",
      },
      borderRadius: {
        sm: "0.375rem",
        DEFAULT: "0.5rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
        full: "9999px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

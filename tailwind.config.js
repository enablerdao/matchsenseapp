/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
        // Professional color palette
        professional: {
          primary: {
            light: "#3B82F6", // Blue 500
            DEFAULT: "#2563EB", // Blue 600
            dark: "#1D4ED8", // Blue 700
          },
          secondary: {
            light: "#A855F7", // Purple 500
            DEFAULT: "#9333EA", // Purple 600
            dark: "#7E22CE", // Purple 700
          },
          neutral: {
            lightest: "#F8FAFC", // Slate 50
            lighter: "#F1F5F9", // Slate 100
            light: "#E2E8F0", // Slate 200
            DEFAULT: "#CBD5E1", // Slate 300
            dark: "#94A3B8", // Slate 400
            darker: "#64748B", // Slate 500
            darkest: "#475569", // Slate 600
          },
          text: {
            primary: "#1E293B", // Slate 800
            secondary: "#475569", // Slate 600
            muted: "#94A3B8", // Slate 400
            white: "#FFFFFF",
          },
          success: {
            light: "#4ADE80", // Green 400
            DEFAULT: "#22C55E", // Green 500
            dark: "#16A34A", // Green 600
          },
          warning: {
            light: "#FCD34D", // Amber 300
            DEFAULT: "#F59E0B", // Amber 500
            dark: "#D97706", // Amber 600
          },
          error: {
            light: "#F87171", // Red 400
            DEFAULT: "#EF4444", // Red 500
            dark: "#DC2626", // Red 600
          },
          info: {
            light: "#38BDF8", // Sky 400
            DEFAULT: "#0EA5E9", // Sky 500
            dark: "#0284C7", // Sky 600
          },
          background: {
            light: "#FFFFFF",
            DEFAULT: "#F8FAFC", // Slate 50
            dark: "#F1F5F9", // Slate 100
            card: "#FFFFFF",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "0.75rem",
        "2xl": "1rem",
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
        "fade-in": {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        "slide-up": {
          '0%': { transform: 'translateY(10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'elevated': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#1E293B',
            h1: {
              fontWeight: 700,
            },
            h2: {
              fontWeight: 600,
            },
            h3: {
              fontWeight: 600,
            },
            strong: {
              fontWeight: 600,
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

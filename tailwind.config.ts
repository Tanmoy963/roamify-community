
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E57373",
          dark: "#C62828"
        },
        secondary: {
          DEFAULT: "#FF8F00",
          dark: "#EF6C00"
        },
        accent: {
          DEFAULT: "#7CB342",
          dark: "#558B2F"
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      animation: {
        "slide-in": "slide-in 0.5s cubic-bezier(.41,.73,.51,1.02)",
        "fade-in": "fade-in 0.5s ease-in-out",
        "scale-in": "scale-in 0.2s ease-out",
      },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

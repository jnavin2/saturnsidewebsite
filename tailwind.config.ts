import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#131315",
        card: "#18181b",
        border: "rgba(255,255,255,0.09)",
        "border-hover": "rgba(255,255,255,0.22)",
        chrome: {
          glow: "#e4e4e7",
        },
        accent: {
          DEFAULT: "#c4c4c9",
          light: "#f1f1f3",
          dark: "#8e8e96",
        },
        muted: "#9a9aa1",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-sora)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        "grid-fade": {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.5" },
        },
        shimmer: {
          "0%": { transform: "translateX(-150%) skewX(-20deg)" },
          "100%": { transform: "translateX(250%) skewX(-20deg)" },
        },
        "border-spin": {
          "100%": { transform: "rotate(360deg)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.85)" },
        },
        ping: {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
      },
      animation: {
        "grid-fade": "grid-fade 4s ease-in-out infinite",
        shimmer: "shimmer 3.5s ease-in-out infinite",
        "border-spin": "border-spin 4s linear infinite",
        "fade-up": "fade-up 0.6s ease both",
        "pulse-glow": "pulse-glow 2.2s ease-in-out infinite",
        ping: "ping 2.2s cubic-bezier(0,0,0.2,1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core cyberpunk palette
        cyber: {
          black: "#0A0A0F",
          dark: "#12121A",
          gray: "#1A1A24",
          "gray-light": "#2A2A38",
        },
        neon: {
          cyan: "#00F0FF",
          "cyan-dim": "#00A8B3",
          magenta: "#FF00FF",
          "magenta-dim": "#B300B3",
          yellow: "#FFFF00",
          "yellow-dim": "#B3B300",
        },
        // Semantic colors
        primary: "#00F0FF",
        secondary: "#FF00FF",
        accent: "#FFFF00",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-orbitron)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "4.5rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "display-lg": [
          "3.5rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "display-md": [
          "2.5rem",
          { lineHeight: "1.2", letterSpacing: "-0.01em" },
        ],
        "display-sm": ["2rem", { lineHeight: "1.2" }],
      },
      boxShadow: {
        "neon-cyan":
          "0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(0, 240, 255, 0.3)",
        "neon-magenta":
          "0 0 20px rgba(255, 0, 255, 0.5), 0 0 40px rgba(255, 0, 255, 0.3)",
        "neon-yellow":
          "0 0 20px rgba(255, 255, 0, 0.5), 0 0 40px rgba(255, 255, 0, 0.3)",
        "glow-sm": "0 0 10px currentColor",
        "glow-md": "0 0 20px currentColor",
        "glow-lg": "0 0 40px currentColor",
      },
      animation: {
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        flicker: "flicker 3s linear infinite",
        "scan-line": "scan-line 4s linear infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "92%": { opacity: "1" },
          "93%": { opacity: "0.8" },
          "94%": { opacity: "1" },
          "97%": { opacity: "0.9" },
          "98%": { opacity: "1" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "cyber-grid": `
          linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        grid: "50px 50px",
      },
    },
  },
  plugins: [],
};

export default config;

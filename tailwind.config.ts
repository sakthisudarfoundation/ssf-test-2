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
        deep: { DEFAULT: "#12315C", dark: "#0B2140", light: "#1c4a80" },
        emerald: { DEFAULT: "#1B6B4A", light: "#2E8A63" },
        gold: { DEFAULT: "#C9962C", light: "#E4B85B" },
        bg: "#FAF8F3",
        card: "#F1EEE6",
        ink: { DEFAULT: "#1C2430", soft: "#4B5563" },
        line: "#E4DFD3",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        tamil: ["var(--font-tamil)", "sans-serif"],
      },
      borderRadius: {
        xl2: "20px",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "gradient-move": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: "0.6" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "gradient-move": "gradient-move 8s ease infinite",
        ripple: "ripple 0.6s linear",
      },
    },
  },
  plugins: [],
};
export default config;

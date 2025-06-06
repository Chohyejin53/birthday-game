// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dot: ["var(--font-dot)", "cursive"],
      },
    },

    animation: {
      "fade-in": "fadeIn 1s ease-out forwards",
    },
    keyframes: {
      fadeIn: {
        from: { opacity: "0" },
        to: { opacity: "1" },
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#040504",
        surface: "#0d120f",
        forest: "#153b2b",
        gold: "#d4af68",
        mist: "#ecf2eb",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(18, 48, 34, 0.28)",
        glass: "0 16px 50px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(120deg, rgba(4,5,4,0.84), rgba(7,21,14,0.58) 45%, rgba(7,21,14,0.84))",
        "section-glow":
          "radial-gradient(circle at top, rgba(212,175,104,0.18), transparent 45%)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
      animation: {
        float: "float 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

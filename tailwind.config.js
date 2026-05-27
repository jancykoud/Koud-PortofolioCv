/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",

  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",           // fond noir profond
        "primary-dark": "#ffffff",    // texte principal blanc
        "surface": "#111111",         // bg secondaire
        "surface-card": "#1a1a1a",    // bg cards
        accent: {
          DEFAULT: "#8b5cf6",
          hover: "#7c3aed",
        },
        muted: "rgba(255,255,255,0.35)",
        "border-dark": "rgba(255,255,255,0.08)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        primary: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.06em",
        hero: "-0.025em",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

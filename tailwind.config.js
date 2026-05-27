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
        // Système éditorial luxe
        primary: "#f7f5f1",        // fond crème chaud
        "primary-dark": "#0a0a0a", // texte principal
        accent: {
          DEFAULT: "#8b5cf6",      // violet
          hover: "#7c3aed",        // violet profond
        },
        muted: "#aaaaaa",
        "border-warm": "#e5e0d8",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        // compatibilité ascendante
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

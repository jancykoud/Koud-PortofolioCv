/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],  // Activation du mode sombre basé sur la classe
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	prefix: "",  // Pas de préfixe personnalisé
  
	theme: {
	  container: {
		center: true,  // Conteneur centré
		padding: "15px",  // Padding de 15px
	  },
	  screens: {
		sm: "640px",
		md: "768px",
		lg: "960px",
		xl: "1200px",
	  },
	  extend: {
		colors: {
		  primary: "#0a0f1e",
		  accent: {
			DEFAULT: "#6ee7b7",
			hover: "#4dd4a0",
		  },
		},
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
		fontFamily: {
		  primary: "var(--font-jetbrainsMono)",  // Police primaire
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],  // Plugin Tailwind pour les animations
  };
  
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
		  primary: "#1c1c22",  // Utilisation des variables CSS
		  accent: {
			DEFAULT: "#00ff99",
			hover: "#00e187",
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
  
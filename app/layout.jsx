import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";


//components
import Header from "@/components/Header";
import StairTransition from "@/components/StairTransition";

// Correction de la variable avec un j majuscule au début
const jetBrains_Mono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Jancy KOUD BANGA — Ingénieure SIG & Développement Fullstack",
  description: "Portfolio de Jancy KOUD BANGA, ingénieure en systèmes d'information géographique et développement fullstack, spécialisée en plateformes de données environnementales, IoT et standards OGC/INSPIRE.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      {/* Utilise la variable déclarée jetBrains_Mono ici */}
      <body className={jetBrains_Mono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}

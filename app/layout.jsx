import { Syne, Inter } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import Header from "@/components/Header";
import StairTransition from "@/components/StairTransition";
import { ModeProvider } from "@/components/ModeContext";
import KonamiEasterEgg from "@/components/KonamiEasterEgg";

// Syne — titres XXL éditoriaux
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

// Inter — corps de texte
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata = {
  title: "Jancy KOUD BANGA — Ingénieure Fullstack & SIG",
  description:
    "Ingénieure fullstack spécialisée dans les plateformes de données environnementales et scientifiques. React, TypeScript, Node.js, OGC/INSPIRE, IoT.",
  keywords: [
    "ingénieure fullstack",
    "SIG",
    "OGC",
    "INSPIRE",
    "IoT",
    "React",
    "TypeScript",
    "Node.js",
    "CNRS",
    "TERRA FORMA",
  ],
  authors: [{ name: "Jancy KOUD BANGA" }],
  openGraph: {
    title: "Jancy KOUD BANGA — Ingénieure Fullstack & SIG",
    description:
      "Ingénieure fullstack spécialisée dans les plateformes de données environnementales et scientifiques. React, TypeScript, Node.js, OGC/INSPIRE, IoT.",
    type: "website",
    locale: "fr_FR",
    url: "https://jancy.dev",
    siteName: "Jancy KOUD BANGA — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jancy KOUD BANGA — Ingénieure Fullstack & SIG",
    description:
      "Ingénieure fullstack spécialisée dans les plateformes de données environnementales et scientifiques.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${syne.variable} ${inter.variable}`}>
      <body className="bg-primary text-primary-dark antialiased">
        <ModeProvider>
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
          <KonamiEasterEgg />
        </ModeProvider>
      </body>
    </html>
  );
}

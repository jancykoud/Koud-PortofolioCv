"use client";

import { motion, AnimatePresence } from "framer-motion";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import TechMarquee from "@/components/TechMarquee";
import NowSection from "@/components/NowSection";
import WorldMap from "@/components/WorldMap";
import Link from "next/link";
import { useMode } from "@/components/ModeContext";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const MODES = {
  recruiter: {
    badge: "En poste · Ouverte aux opportunités",
    desc: "Plateformes de données scientifiques & environnementales. OGC/INSPIRE · IoT LoRaWAN · ANR TERRA FORMA.",
    cta: { label: "Voir mon CV →", href: "/resume" },
    ctaSecondary: { label: "Mes projets", href: "/work" },
    tags: [
      { label: "OGC · INSPIRE · ISO 19115", style: { background: "rgba(139,92,246,0.15)", border: "0.5px solid rgba(139,92,246,0.3)", color: "#a78bfa" } },
      { label: "React · TypeScript",        style: { background: "#ffffff", border: "none", color: "#0a0a0a" } },
      { label: "Node.js",                   style: { background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" } },
      { label: "PostgreSQL",                style: { background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" } },
      { label: "Docker",                    style: { background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" } },
      { label: "LoRaWAN · IoT",             style: { background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" } },
    ],
  },
  freelance: {
    badge: "Disponible pour missions freelance",
    desc: "5 projets livrés · Clients France & Afrique · Expertise React, Next.js, SIG. Parlons de votre projet.",
    cta: { label: "Voir mes projets →", href: "/work" },
    ctaSecondary: { label: "Démarrer un projet", href: "/contact?sujet=Mission+freelance" },
    tags: [
      { label: "Disponible",        style: { background: "rgba(34,197,94,0.15)", border: "0.5px solid rgba(34,197,94,0.3)", color: "#4ade80" } },
      { label: "React · Next.js 15",style: { background: "#ffffff", border: "none", color: "#0a0a0a" } },
      { label: "SIG · Cartographie",style: { background: "rgba(139,92,246,0.15)", border: "0.5px solid rgba(139,92,246,0.3)", color: "#a78bfa" } },
      { label: "Full-stack",        style: { background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" } },
      { label: "API · Backend",     style: { background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" } },
    ],
  },
};

export default function Home() {
  const { mode } = useMode();
  const content = MODES[mode] ?? MODES.recruiter;

  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col" style={{ background: "#0a0a0a" }}>
      {/* ── Hero ── */}
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-8 pt-12 xl:pt-20 pb-8">

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center xl:items-start text-center xl:text-left order-2 xl:order-none max-w-[540px]"
        >
          {/* Eyebrow badge */}
          <motion.div variants={item} className="flex items-center gap-3 mb-8 w-full justify-center xl:justify-start">
            <div style={{ height: "0.5px", width: 32, background: "rgba(255,255,255,0.25)" }} />
            <AnimatePresence mode="wait">
              <motion.span
                key={mode}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25 }}
                className="font-inter uppercase tracking-[0.18em] text-[9px]"
                style={{ color: "rgba(255,255,255,0.35)", whiteSpace: "nowrap" }}
              >
                {content.badge}
              </motion.span>
            </AnimatePresence>
            <div style={{ height: "0.5px", flex: 1, background: "rgba(255,255,255,0.08)" }} />
          </motion.div>

          {/* Titre */}
          <motion.h1
            variants={item}
            className="font-syne leading-[1.02] mb-6"
            style={{ fontSize: "clamp(40px, 6vw, 58px)", letterSpacing: "-0.025em" }}
          >
            <span style={{ fontWeight: 200, color: "rgba(255,255,255,0.3)" }}>Ingénieure</span>
            <br />
            <span style={{ fontWeight: 900, color: "#ffffff" }}>Full</span>
            <span style={{ fontWeight: 900, color: "#8b5cf6" }}>stack</span>
            <br />
            <span style={{ fontWeight: 900, color: "#ffffff" }}>&amp; SIG</span>
          </motion.h1>

          {/* Description + CTAs */}
          <motion.div variants={item} className="flex flex-col xl:flex-row items-center xl:items-start gap-6 mb-8 w-full">
            <AnimatePresence mode="wait">
              <motion.p
                key={mode + "-desc"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="font-inter text-center xl:text-left leading-relaxed"
                style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", maxWidth: 180, flexShrink: 0 }}
              >
                {content.desc}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={mode + "-ctas"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap gap-3 justify-center xl:justify-start"
              >
                <Link
                  href={content.cta.href}
                  style={{ background: "#ffffff", color: "#0a0a0a", borderRadius: 100, padding: "10px 22px", fontSize: 13, fontWeight: 600 }}
                  className="font-inter hover:opacity-85 transition-opacity"
                >
                  {content.cta.label}
                </Link>
                <Link
                  href={content.ctaSecondary.href}
                  style={{ border: "0.5px solid rgba(255,255,255,0.2)", borderRadius: 100, color: "#ffffff", background: "transparent", padding: "10px 22px", fontSize: 13, fontWeight: 500 }}
                  className="font-inter hover:bg-white/10 transition-colors"
                >
                  {content.ctaSecondary.label}
                </Link>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Tags pills */}
          <motion.div variants={item}>
            <AnimatePresence mode="wait">
              <motion.div
                key={mode + "-tags"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap gap-2 justify-center xl:justify-start"
              >
                {content.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="font-inter"
                    style={{ ...tag.style, padding: "5px 12px", borderRadius: 100, fontSize: 11, fontWeight: 500 }}
                  >
                    {tag.label}
                  </span>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* CTA freelance */}
          <AnimatePresence>
            {mode === "freelance" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="mt-6 w-full"
              >
                <Link
                  href="/contact?sujet=Mission+freelance"
                  className="inline-flex items-center gap-2 font-inter text-[12px] transition-opacity hover:opacity-70"
                  style={{ color: "#8b5cf6" }}
                >
                  <span style={{ width: 20, height: 0.5, background: "#8b5cf6", display: "inline-block", verticalAlign: "middle" }} />
                  Parlons de votre projet →
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Photo */}
        <div className="order-1 xl:order-none">
          <Photo />
        </div>
      </div>

      <TechMarquee />
      <NowSection />
      <WorldMap />
      <Stats />
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import GitHubCard from "@/components/GitHubCard";
import ProjectCarousel from "@/components/ProjectCarousel";
import { BsArrowUpRight } from "react-icons/bs";

// Animation bento : fadeUp + stagger
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

// ── Chip composant ──────────────────────────────────────────────
const Chip = ({ label, style }) => (
  <span
    className="font-inter text-[10px] font-medium px-2.5 py-1 rounded-full"
    style={{ border: "0.5px solid", ...style }}
  >
    {label}
  </span>
);

// ── Dot status ──────────────────────────────────────────────────
const StatusDot = ({ color, label }) => (
  <span className="flex items-center gap-1.5 font-inter text-[10px]" style={{ color }}>
    <span
      style={{
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: color,
        display: "inline-block",
      }}
    />
    {label}
  </span>
);

export default function Work() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-12 xl:py-20"
    >
      <div className="container mx-auto">
        {/* ── Header ── */}
        <div className="mb-10">
          <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-muted mb-3">
            Portfolio
          </p>
          <h1
            className="font-syne font-black text-[38px] xl:text-[52px] leading-[1.05] text-primary-dark"
            style={{ letterSpacing: "-0.025em" }}
          >
            Projets <span style={{ color: "#8b5cf6" }}>sélectionnés.</span>
          </h1>
        </div>

        {/* ── Bento Grid (12 colonnes) ── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-2"
          style={{
            gridTemplateColumns: "repeat(12, 1fr)",
          }}
        >

          {/* ── CARTE 1 — FROST-FORMS (col span 7) ── */}
          <motion.div
            variants={cardAnim}
            className="col-span-12 xl:col-span-7 rounded-2xl p-6 flex flex-col gap-4"
            style={{ background: "#0f0f1a", minHeight: 280 }}
          >
            {/* Badge confidentiel */}
            <div className="flex items-start justify-between">
              <span
                className="font-inter text-[10px] font-semibold px-3 py-1 rounded-full"
                style={{ background: "rgba(139,92,246,0.2)", color: "#a78bfa", border: "0.5px solid rgba(139,92,246,0.3)" }}
              >
                Confidentiel
              </span>
            </div>

            {/* Titre */}
            <div>
              <h2 className="font-syne font-black text-2xl text-white mb-1">
                FROST-FORMS
              </h2>
              <p className="font-inter text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>
                ANR TERRA FORMA · CNRS / INRAE / IRD / UCA · Budget 12M€
              </p>
            </div>

            {/* Description */}
            <p className="font-inter text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Portail fullstack IoT environnemental développé en solo. Wizard multi-étapes,
              catalogue de 53 capteurs LoRaWAN, carte interactive, workflow de modération
              et conformité OGC SensorThings API.
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mt-auto">
              <Chip label="OGC SensorThings" style={{ background: "rgba(139,92,246,0.15)", color: "#a78bfa", borderColor: "rgba(139,92,246,0.3)" }} />
              <Chip label="INSPIRE" style={{ background: "rgba(139,92,246,0.08)", color: "#c4b5fd", borderColor: "rgba(139,92,246,0.2)" }} />
              <Chip label="React 18" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", borderColor: "rgba(255,255,255,0.1)" }} />
              <Chip label="TypeScript" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", borderColor: "rgba(255,255,255,0.1)" }} />
              <Chip label="PostgreSQL" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", borderColor: "rgba(255,255,255,0.1)" }} />
              <Chip label="Docker" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", borderColor: "rgba(255,255,255,0.1)" }} />
              <Chip label="JWT" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", borderColor: "rgba(255,255,255,0.1)" }} />
            </div>
          </motion.div>

          {/* ── CARTE 2 — Stat "5+" (col span 2) ── */}
          <motion.div
            variants={cardAnim}
            className="col-span-6 xl:col-span-2 rounded-2xl p-6 flex flex-col justify-between"
            style={{ background: "#ede9fe", minHeight: 140 }}
          >
            <p className="font-inter text-[10px] uppercase tracking-wider" style={{ color: "#7c3aed" }}>
              En production
            </p>
            <div>
              <p className="font-syne font-black text-4xl" style={{ color: "#5b21b6" }}>5+</p>
              <p className="font-inter text-xs mt-1" style={{ color: "#7c3aed" }}>
                Projets en production
              </p>
            </div>
          </motion.div>

          {/* ── CARTE 3 — Stat "53" (col span 3) ── */}
          <motion.div
            variants={cardAnim}
            className="col-span-6 xl:col-span-3 rounded-2xl p-6 flex flex-col justify-between"
            style={{ background: "#fef3c7", minHeight: 140 }}
          >
            <p className="font-inter text-[10px] uppercase tracking-wider" style={{ color: "#92400e" }}>
              TERRA FORMA
            </p>
            <div>
              <p className="font-syne font-black text-4xl" style={{ color: "#78350f" }}>53</p>
              <p className="font-inter text-xs mt-1" style={{ color: "#92400e" }}>
                Capteurs IoT référencés
              </p>
            </div>
          </motion.div>

          {/* ── CARTE 4 — Wmbia (col span 4) ── */}
          <motion.div
            variants={cardAnim}
            className="col-span-12 xl:col-span-4 rounded-2xl p-6 flex flex-col gap-4"
            style={{ background: "#0a0a0a", minHeight: 240 }}
          >
            <div>
              <span
                className="font-inter text-[10px] font-semibold px-2.5 py-1 rounded-full"
                style={{ background: "rgba(251,191,36,0.15)", color: "#fbbf24", border: "0.5px solid rgba(251,191,36,0.3)" }}
              >
                IA · Recherche vectorielle
              </span>
            </div>
            <div>
              <h3 className="font-syne font-black text-xl text-white">Wmbia</h3>
              <p className="font-inter text-xs mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                Moteur sémantique de citations religieuses. Indexation Qdrant, interface React, IA en production.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Chip label="React" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", borderColor: "rgba(255,255,255,0.1)" }} />
              <Chip label="Python" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", borderColor: "rgba(255,255,255,0.1)" }} />
              <Chip label="Qdrant" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", borderColor: "rgba(255,255,255,0.1)" }} />
            </div>
            <div className="flex items-center justify-between mt-auto">
              <StatusDot color="#22c55e" label="wmbia.com · En ligne" />
              <Link
                href="https://wmbia.com"
                target="_blank"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "rgba(255,255,255,0.06)", color: "#fff" }}
              >
                <BsArrowUpRight className="text-sm" />
              </Link>
            </div>
          </motion.div>

          {/* ── CARTE 5 — Orient'Ex (col span 4) ── */}
          <motion.div
            variants={cardAnim}
            className="col-span-12 xl:col-span-4 rounded-2xl p-6 flex flex-col gap-4"
            style={{ background: "#f0fdf4", minHeight: 240 }}
          >
            <div>
              <span
                className="font-inter text-[10px] font-semibold px-2.5 py-1 rounded-full"
                style={{ background: "rgba(34,197,94,0.12)", color: "#16a34a", border: "0.5px solid rgba(34,197,94,0.25)" }}
              >
                Mentorat éducatif
              </span>
            </div>
            <div>
              <h3 className="font-syne font-black text-xl" style={{ color: "#14532d" }}>
                Orient&#39;Ex
              </h3>
              <p className="font-inter text-xs mt-1" style={{ color: "#4ade80" }}>
                Plateforme de mise en relation mentors / étudiants. CI/CD GitLab, Docker.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Chip label="Nuxt.js" style={{ background: "rgba(34,197,94,0.08)", color: "#16a34a", borderColor: "rgba(34,197,94,0.2)" }} />
              <Chip label="MySQL" style={{ background: "rgba(34,197,94,0.08)", color: "#16a34a", borderColor: "rgba(34,197,94,0.2)" }} />
              <Chip label="Docker" style={{ background: "rgba(34,197,94,0.08)", color: "#16a34a", borderColor: "rgba(34,197,94,0.2)" }} />
            </div>
            <div className="flex items-center justify-between mt-auto">
              <StatusDot color="#22c55e" label="orient-ex.org · En ligne" />
              <Link
                href="https://orient-ex.org"
                target="_blank"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "rgba(34,197,94,0.1)", color: "#16a34a" }}
              >
                <BsArrowUpRight className="text-sm" />
              </Link>
            </div>
          </motion.div>

          {/* ── CARTE 6 — Akili (col span 4) ── */}
          <motion.div
            variants={cardAnim}
            className="col-span-12 xl:col-span-4 rounded-2xl p-6 flex flex-col gap-4"
            style={{ background: "#fff8f0", minHeight: 240 }}
          >
            <div>
              <span
                className="font-inter text-[10px] font-semibold px-2.5 py-1 rounded-full"
                style={{ background: "rgba(251,146,60,0.12)", color: "#ea580c", border: "0.5px solid rgba(251,146,60,0.25)" }}
              >
                SaaS · Marché africain
              </span>
            </div>
            <div>
              <h3 className="font-syne font-black text-xl" style={{ color: "#7c2d12" }}>Akili</h3>
              <p className="font-inter text-xs mt-1" style={{ color: "#c2410c" }}>
                Gestion scolaire multi-établissements. PWA offline-first, Mobile Money XOF,
                push FCM, 5 rôles, WebSockets.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Chip label="React 18" style={{ background: "rgba(251,146,60,0.08)", color: "#ea580c", borderColor: "rgba(251,146,60,0.2)" }} />
              <Chip label="TypeScript" style={{ background: "rgba(251,146,60,0.08)", color: "#ea580c", borderColor: "rgba(251,146,60,0.2)" }} />
              <Chip label="PWA" style={{ background: "rgba(251,146,60,0.08)", color: "#ea580c", borderColor: "rgba(251,146,60,0.2)" }} />
            </div>
            <div className="mt-auto">
              <StatusDot color="#f59e0b" label="En cours · Lancement sept. 2026" />
            </div>
          </motion.div>

          {/* ── CARTE 7 — Tash-Cash Agency (col span 5) ── */}
          <motion.div
            variants={cardAnim}
            className="col-span-12 xl:col-span-5 rounded-2xl p-6 flex flex-col gap-4"
            style={{ background: "#0d1b3e", minHeight: 240 }}
          >
            <div className="flex items-center gap-2">
              <span
                className="font-inter text-[10px] font-semibold px-2.5 py-1 rounded-full"
                style={{ background: "rgba(251,191,36,0.15)", color: "#fbbf24", border: "0.5px solid rgba(251,191,36,0.3)" }}
              >
                Freelance
              </span>
            </div>
            <div>
              <h3 className="font-syne font-black text-xl text-white">Tash-Cash Agency</h3>
              <p className="font-inter text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                Yaoundé, Cameroun
              </p>
              <p className="font-inter text-xs mt-2" style={{ color: "rgba(255,255,255,0.55)" }}>
                Site trilingue FR/EN/ES pour agence panafricaine. Architecture full-stack
                moderne, SEO multilingue, performances Core Web Vitals.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {["Next.js 15", "NestJS", "Supabase", "Prisma"].map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  style={{ background: "rgba(251,191,36,0.08)", color: "#fbbf24", borderColor: "rgba(251,191,36,0.2)" }}
                />
              ))}
            </div>
          </motion.div>

          {/* ── CARTE 8 — GitHub Live (col span 4) ── */}
          <motion.div
            variants={cardAnim}
            className="col-span-12 xl:col-span-4 rounded-2xl overflow-hidden"
            style={{ background: "#0a0a0a", minHeight: 260 }}
          >
            <GitHubCard />
          </motion.div>

          {/* ── CARTE 9/10/11 — Spécialités (col span 4 chacune) ── */}
          {[
            {
              icon: "🗺️",
              title: "SIG & IoT terrain",
              tags: ["OGC", "INSPIRE", "LoRaWAN", "GeoJSON", "WGS84"],
            },
            {
              icon: "🧠",
              title: "IA & Vectoriel",
              tags: ["Qdrant", "OpenAI API", "Embeddings", "Sémantique"],
            },
            {
              icon: "📱",
              title: "PWA & Mobile",
              tags: ["Offline-first", "FCM", "WebSockets", "Service Worker"],
            },
          ].map((spec, i) => (
            <motion.div
              key={i}
              variants={cardAnim}
              className="col-span-12 xl:col-span-4 rounded-2xl p-6 flex flex-col gap-4"
              style={{
                background: "#f7f5f1",
                border: "0.5px solid #e5e0d8",
                minHeight: 180,
              }}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{spec.icon}</span>
                <h3 className="font-syne font-bold text-base text-primary-dark">
                  {spec.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {spec.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    style={{
                      background: "#f3f0ff",
                      color: "#7c3aed",
                      borderColor: "#ddd6fe",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Carousel projets ── */}
      </div>

      {/* Carousel : hors du container pour être pleine largeur */}
      <ProjectCarousel />

      <div className="container mx-auto">

        {/* ── Liens GitHub / GitLab ── */}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="https://github.com/jancykoud"
            target="_blank"
            className="font-inter flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ background: "#0a0a0a", color: "#f7f5f1" }}
          >
            Voir plus sur GitHub →
          </Link>
          <Link
            href="https://gitlab.com/fridelinbanga"
            target="_blank"
            className="font-inter flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-colors hover:bg-primary-dark/5"
            style={{ border: "0.5px solid #e5e0d8", color: "#0a0a0a" }}
          >
            Voir plus sur GitLab
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

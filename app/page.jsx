"use client";

import { motion } from "framer-motion";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Specialties from "@/components/Specialties";
import Link from 'next/link';

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }}
      className="relative h-full flex flex-col"
    >
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-0 pt-8 xl:pt-16 pb-8">

        {/* Left: text */}
        <div className="flex flex-col items-center xl:items-start text-center xl:text-left order-2 xl:order-none max-w-[560px]">

          {/* Badge pill */}
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-6"
            style={{
              border: "0.5px solid rgba(110,231,183,0.3)",
              background: "rgba(110,231,183,0.06)",
              color: "#6ee7b7",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#6ee7b7] animate-pulse" />
            En poste — Ouverte aux opportunités freelance
          </span>

          {/* Subtitle */}
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-3">
            Ingénieure SIG & Développement Fullstack
          </p>

          {/* Big name */}
          <h1 className="text-5xl xl:text-7xl font-extrabold leading-[1.05] mb-6">
            <span className="text-white">Jancy</span>
            <br />
            <span className="text-accent">KOUD BANGA</span>
          </h1>

          {/* Tag pills */}
          <div className="flex flex-wrap gap-2 justify-center xl:justify-start mb-6">
            {["OGC · INSPIRE", "TypeScript", "React", "Node.js", "PostgreSQL", "Docker", "LoRaWAN"].map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={
                  i === 0
                    ? {
                        background: "rgba(110,231,183,0.12)",
                        color: "#6ee7b7",
                        border: "0.5px solid rgba(110,231,183,0.3)",
                      }
                    : {
                        background: "rgba(255,255,255,0.05)",
                        color: "rgba(255,255,255,0.5)",
                        border: "0.5px solid rgba(255,255,255,0.1)",
                      }
                }
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-[480px]">
            Ingénieure fullstack spécialisée dans les plateformes de données scientifiques et environnementales.
            Systèmes interopérables OGC/INSPIRE, IoT LoRaWAN jusqu'au portail web.
            Actuellement en poste sur le projet ANR TERRA FORMA (CNRS/INRAE/IRD/UCA).
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 justify-center xl:justify-start mb-8">
            <Link
              href="/work"
              className="px-6 py-2.5 rounded-full text-sm font-semibold bg-accent text-primary hover:bg-accent-hover transition-colors"
            >
              Voir mes projets
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
              style={{
                border: "0.5px solid rgba(110,231,183,0.3)",
                color: "#6ee7b7",
                background: "rgba(110,231,183,0.06)",
              }}
            >
              Me contacter
            </Link>
          </div>

          {/* Social */}
          <Social
            containerStyles="flex gap-3"
            iconStyles="w-9 h-9 border border-accent/30 rounded-full flex justify-center items-center text-accent/70 text-base hover:bg-accent/10 hover:text-accent transition-all duration-300"
          />
        </div>

        {/* Right: avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.6 } }}
          className="order-1 xl:order-none"
        >
          <Photo />
        </motion.div>
      </div>

      {/* Stats band */}
      <Stats />

      {/* Specialties */}
      <Specialties />
    </motion.section>
  );
}

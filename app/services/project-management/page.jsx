"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaProjectDiagram, FaUsers, FaChartLine, FaClipboardList, FaShieldAlt, FaSyncAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaSyncAlt className="text-4xl text-accent group-hover:text-white transition-all duration-300" />,
    title: "Méthodologie Agile / Scrum",
    description: "Pilotage en sprints, gestion du backlog, rétrospectives et livraisons continues.",
  },
  {
    icon: <FaUsers className="text-4xl text-accent group-hover:text-white transition-all duration-300" />,
    title: "Coordination multi-partenaires",
    description: "Gestion de parties prenantes dans des environnements complexes (laboratoires de recherche, équipes distribuées).",
  },
  {
    icon: <FaChartLine className="text-4xl text-accent group-hover:text-white transition-all duration-300" />,
    title: "Reporting & Gouvernance IT",
    description: "Suivi KPI, gestion des risques, documentation technique et tableaux de bord de pilotage.",
  },
  {
    icon: <FaClipboardList className="text-4xl text-accent group-hover:text-white transition-all duration-300" />,
    title: "Transformation digitale",
    description: "De l'analyse des besoins métier à la livraison : cadrage, spécifications, déploiement et accompagnement.",
  },
];

const phases = [
  { label: "Cadrage", color: "bg-accent/20 border-accent/40", text: "Besoins & périmètre" },
  { label: "Planification", color: "bg-accent/30 border-accent/50", text: "Sprints & jalons" },
  { label: "Développement", color: "bg-accent/40 border-accent/60", text: "Itérations agiles" },
  { label: "Livraison", color: "bg-accent/60 border-accent/80", text: "Déploiement & suivi" },
];

const ProjectManagement = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
      exit={{ opacity: 0, y: -50 }}
      className="min-h-screen flex flex-col justify-center items-center text-white px-6 py-12"
    >
      {/* Titre */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.6 } }}
        className="text-5xl font-extrabold text-accent mb-6 text-center"
      >
        Gestion de Projet IT
      </motion.h1>

      {/* Badge expérience */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }}
        className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20 mb-6"
      >
        <FaProjectDiagram />
        Expérience en environnement ANR multi-partenaires (CNRS · INRAE · IRD · UCA)
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.6 } }}
        className="text-lg text-white/70 max-w-2xl text-center leading-relaxed"
      >
        Pilotage de projets digitaux avec{" "}
        <span className="text-accent font-semibold">méthodologies agiles</span> et accompagnement
        personnalisé. Forte expérience en coordination de{" "}
        <span className="text-accent font-semibold">projets de recherche multi-partenaires</span> et
        en <span className="text-accent font-semibold">transformation digitale</span>.
      </motion.p>

      {/* Séparateur */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1, transition: { delay: 0.7, duration: 0.5 } }}
        className="w-24 h-1 bg-accent mt-6 mb-8"
      />

      {/* Grille de fonctionnalités */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.6 } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full"
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-4 p-4 bg-[#1E1E2E] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
            {item.icon}
            <div>
              <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Cycle de vie projet */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 0.6 } }}
        className="mt-12 p-6 bg-[#27272C] rounded-lg shadow-lg max-w-3xl w-full"
      >
        <p className="text-accent font-semibold mb-5 flex items-center gap-2">
          <FaShieldAlt />
          Cycle de vie type d'un projet
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`${phase.color} border rounded-lg p-3 text-center`}
            >
              <p className="text-accent font-bold text-sm mb-1">{phase.label}</p>
              <p className="text-white/60 text-xs">{phase.text}</p>
            </div>
          ))}
        </div>
        <p className="text-white/40 text-xs mt-4 text-center">
          Approche itérative · Livraisons continues · Feedback régulier
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.6 } }}
        className="mt-8 flex flex-col sm:flex-row gap-4 items-center"
      >
        <Link href="/contact">
          <button className="px-6 py-3 bg-accent text-primary text-lg font-semibold rounded-md shadow-md hover:bg-accent-hover transition-all duration-300">
            Discutons de votre projet
          </button>
        </Link>
        <Link href="/resume">
          <button className="px-6 py-3 border border-accent text-accent text-lg font-semibold rounded-md hover:bg-accent hover:text-primary transition-all duration-300">
            Voir mon parcours
          </button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default ProjectManagement;

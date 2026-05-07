"use client";

import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { FaGitlab, FaLock, FaKey } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Portail SensorThings — Données IoT",
    title: "FROST-FORMS",
    description:
      "Portail fullstack de déclaration et gestion de systèmes de mesure environnementaux pour le réseau TERRA FORMA (projet ANR 12M€, 30 laboratoires CNRS/INRAE/IRD/UCA). Wizard multi-étapes, catalogue de 53 instruments LoRaWAN, carte interactive et workflow de modération.",
    stack: ["React 18", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Docker", "OGC SensorThings"],
    image: "/assets/work/frost-forms.png",
    live: null,
    confidential: true,
    date: "10/2025 — Présent",
    badge: { label: "Confidentiel", color: "gray" },
  },
  {
    num: "02",
    category: "Moteur de recherche sémantique IA",
    title: "Wmbia",
    description:
      "Plateforme de recherche sémantique de citations religieuses basée sur l'IA et la recherche vectorielle. Indexation et requêtage via Qdrant, interface React moderne. En production.",
    stack: ["React", "Python", "Qdrant"],
    image: "/assets/work/wmbia.png",
    live: "https://wmbia.com",
    date: "2025",
    badge: { label: "En ligne", color: "green" },
  },
  {
    num: "03",
    category: "Plateforme de mentorat éducatif",
    title: "Orient'Ex",
    description:
      "Plateforme de mise en relation entre mentors et étudiants pour l'orientation éducative. Architecture modulaire, pipeline CI/CD GitLab, déploiement Docker. En production.",
    stack: ["Nuxt.js", "Node.js", "Sequelize", "MySQL", "Docker", "GitLab CI/CD"],
    image: "/assets/work/orient-ex.png",
    live: "https://orient-ex.org",
    date: "2025",
    badge: { label: "En ligne", color: "green" },
  },
  {
    num: "04",
    category: "Plateforme SaaS de gestion scolaire",
    title: "EduConnect",
    description:
      "Plateforme SaaS multi-établissements pour le marché africain (devise XOF). Cycle de vie complet : académique, pédagogie, finances, communication. 5 rôles, offline-first, push FCM, WebSockets.",
    stack: ["React 18", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Firebase FCM", "JWT + 2FA"],
    image: "/assets/work/educonnect.png",
    live: "https://edu-connect-web.vercel.app",
    date: "2025 — En cours",
    badge: { label: "En cours", color: "amber" },
    credentials: [
      { label: "Directeur", email: "directeur@horizon.ci", password: "Admin1234!" },
      { label: "Professeur", email: "prof.math@horizon.ci", password: "Teacher1234!" },
    ],
  },
];

const badgeStyles = {
  gray: {
    background: "rgba(255,255,255,0.08)",
    color: "rgba(255,255,255,0.45)",
    border: "0.5px solid rgba(255,255,255,0.15)",
  },
  green: {
    background: "rgba(52,211,153,0.1)",
    color: "#34d399",
    border: "0.5px solid rgba(52,211,153,0.3)",
  },
  amber: {
    background: "rgba(251,191,36,0.1)",
    color: "#fbbf24",
    border: "0.5px solid rgba(251,191,36,0.3)",
  },
};

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.6, ease: "easeOut" } }}
      className="py-12 xl:py-16"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white mb-2">Projets</h2>
        <p className="text-white/40 mb-10 text-sm">
          Sélection de réalisations — développement solo.
        </p>

        <div
          className="grid grid-cols-1 xl:grid-cols-2"
          style={{
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-6"
              style={{
                borderRight:
                  index % 2 === 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
                borderBottom:
                  index < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              {/* Header: num + badge */}
              <div className="flex items-center justify-between">
                <span className="text-5xl font-extrabold" style={{ color: "rgba(255,255,255,0.08)" }}>
                  {project.num}
                </span>
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                  style={badgeStyles[project.badge.color]}
                >
                  {project.badge.color === "amber" && (
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                  )}
                  {project.badge.label}
                </span>
              </div>

              {/* Image */}
              <div
                className="relative w-full rounded-lg overflow-hidden"
                style={{ height: "200px", background: "rgba(255,255,255,0.03)" }}
              >
                <Image
                  src={project.image}
                  fill
                  sizes="(max-width: 1200px) 100vw, 50vw"
                  className="object-cover"
                  alt={project.title}
                />
              </div>

              {/* Category + title */}
              <div>
                <p className="text-xs text-white/35 uppercase tracking-wider mb-1">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-accent">{project.title}</h3>
              </div>

              {/* Description */}
              <p className="text-sm text-white/55 leading-relaxed">{project.description}</p>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5">
                {project.stack.slice(0, 6).map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded text-xs"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      color: "rgba(255,255,255,0.45)",
                      border: "0.5px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Date + links */}
              <div
                className="flex items-center justify-between mt-auto pt-3"
                style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)" }}
              >
                <span className="text-xs" style={{ color: "rgba(110,231,183,0.6)" }}>
                  {project.date}
                </span>
                <div className="flex items-center gap-2">
                  {project.confidential && (
                    <span className="flex items-center gap-1 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
                      <FaLock className="text-xs" /> Confidentiel
                    </span>
                  )}
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    >
                      <BsArrowUpRight className="text-accent text-sm" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Demo credentials */}
              {project.credentials && (
                <div
                  className="p-3 rounded-lg text-xs font-mono"
                  style={{
                    background: "rgba(110,231,183,0.04)",
                    border: "0.5px solid rgba(110,231,183,0.15)",
                  }}
                >
                  <p
                    className="font-semibold mb-2 flex items-center gap-1.5"
                    style={{ fontSize: "10px", color: "#6ee7b7" }}
                  >
                    <FaKey /> Comptes de démo
                  </p>
                  {project.credentials.map((cred, i) => (
                    <div key={i} style={{ color: "rgba(255,255,255,0.45)" }}>
                      <span style={{ color: "rgba(255,255,255,0.65)" }}>{cred.label} — </span>
                      {cred.email} / {cred.password}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* GitHub / GitLab */}
        <div className="mt-12 flex justify-center gap-4 flex-wrap">
          <Link
            href="https://github.com/jancykoud"
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-accent text-primary hover:bg-accent-hover transition-colors"
          >
            <BsGithub className="text-base" />
            Voir plus sur GitHub
          </Link>
          <Link
            href="https://gitlab.com/fridelinbanga"
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-colors"
            style={{
              border: "0.5px solid rgba(110,231,183,0.3)",
              color: "#6ee7b7",
              background: "rgba(110,231,183,0.06)",
            }}
          >
            <FaGitlab className="text-base" />
            Voir plus sur GitLab
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

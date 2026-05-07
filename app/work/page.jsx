"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { FaYoutube, FaGitlab, FaUsers, FaChartLine, FaClock, FaUserTie, FaLock, FaKey } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Portail SensorThings — Données IoT",
    title: "FROST-FORMS",
    description:
      "Portail fullstack de déclaration et gestion de systèmes de mesure environnementaux pour le réseau de recherche TERRA FORMA (projet ANR 12M€, 30 laboratoires CNRS/INRAE/IRD/UCA). Wizard multi-étapes, catalogue de 53 instruments LoRaWAN, carte interactive et workflow de modération. Développement solo, en production.",
    stack: ["React 18", "TypeScript", "TailwindCSS", "Zustand", "Node.js", "Express", "PostgreSQL", "Prisma", "Docker", "OGC SensorThings", "INSPIRE", "JWT"],
    images: ["/assets/work/frost-forms.png"],
    live: null,
    repo: null,
    confidential: true,
    date: "10/2025 — Présent",
    role: "Ingénieure SIG & Fullstack — développement solo",
    metrics: {
      users: "30 laboratoires CNRS/INRAE/IRD/UCA",
      performance: "Conformité OGC/INSPIRE",
      accuracy: "53 instruments LoRaWAN",
      uptime: "En production"
    }
  },
  {
    num: "02",
    category: "Moteur de recherche sémantique IA",
    title: "Wmbia",
    description:
      "Plateforme de recherche sémantique de citations religieuses basée sur l'IA et la recherche vectorielle. Indexation et requêtage via Qdrant, interface React moderne. Projet personnel solo, en production.",
    stack: ["React", "Python", "Qdrant"],
    images: ["/assets/work/wmbia.png"],
    live: "https://wmbia.com",
    repo: null,
    date: "2025",
    role: "Développeuse fullstack — projet personnel solo",
    metrics: {
      users: "Recherche IA vectorielle",
      performance: "Moteur sémantique Qdrant",
      accuracy: "Projet solo",
      uptime: "En production"
    }
  },
  {
    num: "03",
    category: "Plateforme de mentorat éducatif",
    title: "Orient'Ex",
    description:
      "Plateforme de mise en relation entre mentors et étudiants pour l'orientation éducative. Architecture modulaire, pipeline CI/CD GitLab, déploiement Docker. Projet personnel solo, en production.",
    stack: ["Nuxt.js", "Node.js", "Sequelize", "MySQL", "Docker", "GitLab CI/CD"],
    images: ["/assets/work/orient-ex.png"],
    live: "https://orient-ex.org",
    repo: null,
    date: "2025",
    role: "Développeuse fullstack — projet personnel solo",
    metrics: {
      users: "Mentors & étudiants",
      performance: "Architecture modulaire",
      accuracy: "GitLab CI/CD",
      uptime: "En production"
    }
  },
  {
    num: "04",
    category: "Plateforme SaaS de gestion scolaire",
    title: "EduConnect",
    description:
      "Plateforme SaaS multi-établissements conçue pour le marché africain (devise XOF, école de démo à Abidjan). Couvre tout le cycle de vie d'un établissement : académique, pédagogie, finances, communication et documents officiels. 5 rôles utilisateurs, mode offline-first, push notifications FCM et génération PDF.",
    stack: ["React 18", "TypeScript", "Vite", "TailwindCSS", "Node.js", "Express", "Prisma", "PostgreSQL", "Redis", "Turborepo", "Firebase FCM", "WebSockets", "JWT + 2FA TOTP"],
    images: ["/assets/work/educonnect.png"],
    live: "https://edu-connect-web.vercel.app",
    repo: null,
    inProgress: true,
    date: "2025 — En cours",
    role: "Développeuse fullstack — projet personnel solo",
    credentials: [
      { label: "Directeur", email: "directeur@horizon.ci", password: "Admin1234!" },
      { label: "Professeur", email: "prof.math@horizon.ci", password: "Teacher1234!" },
    ],
    metrics: {
      users: "5 rôles utilisateurs",
      performance: "Offline-first PWA",
      accuracy: "Push FCM + WebSockets",
      uptime: "Démo disponible"
    }
  }
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
    setActiveImageIndex(0);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.6, ease: "easeOut" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-6">
              <div className="text-8xl font-extrabold text-white">{project.num}</div>
              <h2 className="text-[42px] font-bold text-white capitalize">{project.category}</h2>
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-[28px] font-semibold text-accent">{project.title}</h3>
                {project.inProgress && (
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full text-sm font-medium border border-yellow-500/30">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                    En cours
                  </span>
                )}
              </div>

              {/* Rôle spécifique */}
              <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-lg w-fit">
                <FaUserTie className="text-accent" />
                <span className="text-accent font-medium">{project.role}</span>
              </div>

              <p className="text-white/60">{project.description}</p>
              
              {/* Métriques du projet */}
              <div className="grid grid-cols-2 gap-4 my-4">
                <div className="bg-[#27272c] p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FaUsers className="text-accent" />
                    <span className="text-sm text-white/60">Utilisateurs</span>
                  </div>
                  <p className="text-white font-semibold">{project.metrics.users}</p>
                </div>
                <div className="bg-[#27272c] p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FaChartLine className="text-accent" />
                    <span className="text-sm text-white/60">Performance</span>
                  </div>
                  <p className="text-white font-semibold">{project.metrics.performance}</p>
                </div>
                <div className="bg-[#27272c] p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FaClock className="text-accent" />
                    <span className="text-sm text-white/60">
                      {project.metrics.accuracy ? "Précision" : project.metrics.rating ? "Note" : "Croissance"}
                    </span>
                  </div>
                  <p className="text-white font-semibold">
                    {project.metrics.accuracy || project.metrics.rating || project.metrics.growth}
                  </p>
                </div>
                <div className="bg-[#27272c] p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FaChartLine className="text-accent" />
                    <span className="text-sm text-white/60">
                      {project.metrics.uptime ? "Disponibilité" : project.metrics.size ? "Taille" : "Engagement"}
                    </span>
                  </div>
                  <p className="text-white font-semibold">
                    {project.metrics.uptime || project.metrics.size || project.metrics.engagement}
                  </p>
                </div>
              </div>

              {/* Stack Technologies */}
              <ul className="flex gap-2 flex-wrap">
                {project.stack.map((tech, index) => (
                  <li
                    key={index}
                    className="bg-accent text-primary px-3 py-1 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              
              {/* Date du projet */}
              <p className="text-accent font-medium">{project.date}</p>
              
              <div className="border border-white/20 my-4"></div>
              
              {/* Buttons */}
              <div className="flex items-center gap-4">
                {project.confidential && (
                  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg">
                    <FaLock className="text-white/40" />
                    <span className="text-sm text-white/40">Projet confidentiel</span>
                  </div>
                )}
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] bg-white/10 flex justify-center items-center rounded-full hover:bg-white/20">
                          {project.isVideo ? (
                            <FaYoutube className="text-white text-2xl" />
                          ) : (
                            <BsArrowUpRight className="text-white text-2xl" />
                          )}
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{project.isVideo ? "Voir la démo vidéo" : "Voir le projet"}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.repo && (
                  <Link href={project.repo} target="_blank">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] bg-white/10 flex justify-center items-center rounded-full hover:bg-white/20">
                          <BsGithub className="text-white text-2xl" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub Repo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>

              {/* Comptes de démo */}
              {project.credentials && (
                <div className="mt-2 p-4 bg-[#1a1a24] border border-accent/20 rounded-lg">
                  <p className="text-xs text-accent font-semibold mb-3 flex items-center gap-2">
                    <FaKey /> Comptes de démo
                  </p>
                  <div className="flex flex-col gap-2">
                    {project.credentials.map((cred, i) => (
                      <div key={i} className="text-xs font-mono">
                        <span className="text-white/80 font-semibold">{cred.label} —</span>{" "}
                        <span className="text-white/60">{cred.email}</span>
                        <span className="text-white/40"> / </span>
                        <span className="text-white/60">{cred.password}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Image Slider avec captures d'écran multiples */}
          <div className="w-full xl:w-[50%]">
            <div className="mb-4">
              {/* Image principale */}
              <div className="relative w-full h-[460px] bg-black/5 rounded-lg overflow-hidden shadow-lg mb-4">
                <Image
                  src={project.images[activeImageIndex]}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                  alt={`${project.title} - Image ${activeImageIndex + 1}`}
                  priority={activeImageIndex === 0}
                />
              </div>
              
              {/* Thumbnails */}
              <div className="flex gap-2 justify-center">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImageIndex === index ? 'border-accent scale-105' : 'border-white/20'
                    }`}
                  >
                    <Image
                      src={image}
                      fill
                      sizes="80px"
                      className="object-cover"
                      alt={`Thumbnail ${index + 1}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              className="xl:h-[120px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((proj, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-full flex items-center gap-3 px-2">
                    <span className="text-xl font-bold text-accent/60">{proj.num}</span>
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-wider">{proj.category.split("—")[0].trim()}</p>
                      <p className="text-sm font-semibold text-white/80">{proj.title}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[70px] z-20 w-full justify-center"
                btnStyles="bg-accent text-primary text-lg w-[44px] h-[44px] flex justify-center items-center rounded-full hover:bg-accent-hover transition-all"
              />
            </Swiper>
          </div>
        </div>

        {/* Voir plus de projets sur GitHub et GitLab */}
        <div className="mt-16 flex justify-center gap-4 flex-wrap">
          <Link
            href="https://github.com/jancykoud"
            target="_blank"
            className="flex items-center gap-3 bg-accent text-primary px-6 py-3 rounded-full text-lg font-semibold hover:bg-accent-hover transition-all"
          >
            <BsGithub className="text-xl" />
            Voir plus sur GitHub
          </Link>

          <Link
            href="https://gitlab.com/fridelinbanga"
            target="_blank"
            className="flex items-center gap-3 bg-accent text-primary px-6 py-3 rounded-full text-lg font-semibold hover:bg-accent-hover transition-all"
          >
            <FaGitlab className="text-xl" />
            Voir plus sur GitLab
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
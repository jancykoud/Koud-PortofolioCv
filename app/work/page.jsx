"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { FaYoutube, FaGitlab, FaUsers, FaChartLine, FaClock, FaUserTie } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Full Stack AI RAG System",
    title: "HSLU Exam Assistant RAG",
    description:
      "Système de questions-réponses spécifique aux cours utilisant Python, FastAPI, Next.js et OpenAI. Intégration de Pinecone pour le stockage efficace des embeddings et interface moderne avec Tailwind CSS.",
    stack: ["Python", "FastAPI", "Next.js", "OpenAI", "Firebase", "Pinecone", "Tailwind CSS"],
    images: [
      "/assets/work/hslu-exam.png",
      "/assets/work/hslu-exam-2.png",
      "/assets/work/hslu-exam-3.png"
    ],
    live: "https://hslu-exam-ai-assistant.vercel.app/",
    repo: "https://github.com/rogerjeasy/hslu-rag-frontend",
    date: "03/2025 - 04/2025",
    role: "Lead Developer & AI Architect",
    metrics: {
      users: "100+ étudiants actifs",
      performance: "< 2s temps de réponse",
      accuracy: "92% précision des réponses",
      uptime: "99.9% disponibilité"
    }
  },
  {
    num: "02",
    category: "Full Stack Social Platform",
    title: "Let Us Connect",
    description:
      "Plateforme sociale développée avec Go, Next.js et Firebase. API RESTful avec Go Fiber, intégration Cloudinary pour la gestion des fichiers et Pusher pour les notifications en temps réel. Interface moderne avec NextUI et ShadCN UI.",
    stack: ["Go", "Next.js", "Firebase", "Tailwind CSS", "Go Fiber", "Cloudinary", "Pusher", "Zustand", "Zod"],
    images: [
      "/assets/work/letusconnect.png",
      "/assets/work/letusconnect-2.png",
      "/assets/work/letusconnect-3.png"
    ],
    live: "https://letusconnect.vercel.app/",
    repo: "https://github.com/rogerjeasy/letusconnect",
    date: "10/2024 - Présent",
    role: "Co-fondateur & Full Stack Developer",
    metrics: {
      users: "500+ utilisateurs inscrits",
      engagement: "80% taux d'engagement",
      performance: "< 100ms API response",
      growth: "+50% croissance mensuelle"
    }
  },
  {
    num: "03",
    category: "E-commerce Android",
    title: "CongoStore",
    description:
      "Application e-commerce Android complète avec architecture MVC modulaire. Intégration Firebase pour synchronisation en temps réel et authentification. Interface responsive avec Bootstrap et optimisation des performances avec RecyclerView et Glide.",
    stack: ["Android", "Java", "Firebase", "Bootstrap", "RecyclerView", "Glide", "MVC"],
    images: [
      "/assets/work/congostore.png",
      "/assets/work/congostore-2.png",
      "/assets/work/congostore-3.png"
    ],
    live: "https://youtu.be/mH8q9B0G3kE",
    repo: "https://github.com/jancykoud/CongoStore---E-commerce-Android-Application",
    date: "01/2025",
    isVideo: true,
    role: "Mobile Developer & UI Designer",
    metrics: {
      downloads: "1000+ téléchargements",
      rating: "4.5★ sur Google Play",
      performance: "60 FPS animation fluide",
      size: "< 15MB taille APK"
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
              <h3 className="text-[28px] font-semibold text-accent">{project.title}</h3>
              
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
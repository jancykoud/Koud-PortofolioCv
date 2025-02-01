"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend & backend",
    title: "Full Stack Web Application",
    description:
      "Application complète développée avec Spring Boot pour le backend et Firebase pour la gestion des données. Interface intuitive en JavaScript et architecture robuste.",
    stack: ["JavaScript", "Spring Boot", "Firebase", "Java"],
    image: "/assets/work/lisungui.jpeg",
    live: "/live-project-1",
    repo: "https://github.com/lisungui",
  },
  {
    num: "02",
    category: "frontend & backend",
    title: "Clone Airbnb - Projet Web",
    description:
      "Site similaire à Airbnb avec une architecture full stack utilisant Node.js, Express et MongoDB pour une gestion efficace des locations.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/assets/work/airbnb.jpg",
    live: "/live-project-2",
    repo: "https://gitlab.com/fridelinbanga/projet-web-airbnb",
  },
  {
    num: "03",
    category: "frontend & backend",
    title: "Easy Life - Site de Vente en Ligne",
    description:
      "Site de vente en ligne utilisant Python, CSS et JavaScript. Gestion complète des produits, des utilisateurs et expérience d'achat fluide et sécurisée.",
    stack: ["Python", "CSS", "JavaScript"],
    image: "/assets/work/easy1.png",
    live: "https://easylife-shop.onrender.com",
    repo: "https://github.com/easylifeonline",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
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
              <h2 className="text-[42px] font-bold text-white capitalize">{project.category} project</h2>
              <p className="text-white/60">{project.description}</p>
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
              <div className="border border-white/20 my-4"></div>
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] bg-white/10 flex justify-center items-center rounded-full hover:bg-white/20">
                          <BsArrowUpRight className="text-white text-3xl" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Voir le projet</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.repo && (
                  <Link href={project.repo} target="_blank">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] bg-white/10 flex justify-center items-center rounded-full hover:bg-white/20">
                          <BsGithub className="text-white text-3xl" />
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
          <div className="w-full">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((proj, index) => (
                <SwiperSlide key={index} className="relative group flex justify-center items-center bg-gray-900">
                  <Image
                    src={proj.image}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    alt={proj.title}
                  />
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-6 z-20 w-full justify-center"
                btnStyles="bg-accent text-primary text-lg w-[44px] h-[44px] flex justify-center items-center rounded-full hover:bg-accent-hover"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

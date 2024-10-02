"use client";  // Ajouté ici pour indiquer que c'est un composant côté client

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
      num: '01',
      category: 'frontend & backend',
      title: 'Full Stack Web Application',
      description: "Ce projet est une application complète développée avec Spring Boot pour le backend et Firebase pour la gestion des données. J'ai conçu une interface utilisateur intuitive et moderne avec JavaScript et mis en place une architecture solide permettant la gestion sécurisée des utilisateurs. Ce projet est également intégré avec des APIs robustes pour fournir des fonctionnalités dynamiques.",
      stack: [
        { name: "JavaScript" },
        { name: "Spring Boot" },
        { name: "Firebase" },
        { name: "Java" }
      ],
      image: '/assets/work/lisungui.jpeg',  // Replace with the correct image path
      live: '/live-project-1',  // URL for the live project
      repo: 'https://github.com/lisungui'    // GitHub URL
    },
    {
        num: '02',
        category: 'frontend & backend',
        title: 'Clone Airbnb - Projet Web',
        description: "Ce projet est un site web similaire à Airbnb, développé avec une architecture full stack. J'ai utilisé des technologies comme Node.js pour le backend, Express pour la gestion des routes, et MongoDB pour la base de données. L'interface utilisateur a été conçue pour offrir une expérience fluide et moderne.",
        stack: [
          { name: "Html" },
          { name: "Css" },
          { name: "Java" }
        ],
        image: '/assets/work/airbnb.jpg',  // Remplacez par le chemin valide vers l'image
        live: '/live-project-2',  // URL du projet en ligne si applicable
        repo: 'https://gitlab.com/fridelinbanga/projet-web-airbnb'  // GitLab repo URL
      },
      {
        num: '03',
        category: 'frontend & backend',
        title: 'Easy Life - Site de Vente en Ligne',
        description: "Easy Life est un site de vente en ligne développé avec Python pour le backend, et CSS et JavaScript pour la création de l'interface utilisateur. Il permet la gestion des produits, des utilisateurs, et propose une expérience d'achat fluide et sécurisée.",
        stack: [
          { name: "Python" },
          { name: "CSS" },
          { name: "JavaScript" }
        ],
        image: '/assets/work/easy1.png', // Remplacez par le chemin valide vers l'image
        live: 'https://easylife-shop.onrender.com',  // URL du projet en ligne si applicable
        repo: 'https://github.com/easylifeonline'
      },

];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Numéro de projet */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Catégorie du projet */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* Description du projet */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* Border */}
              <div className="border border-white/20 my-4"></div>
              {/* Boutons */}
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.repo && (
                  <Link href={project.repo}>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
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
            {/* Slider - à remplir avec des images */}
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((proj, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-cover" alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

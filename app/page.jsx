"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi';
import { FaProjectDiagram, FaLaptopCode, FaCode, FaRocket } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from 'next/link';

// Variants d'animations pour les transitions
const textVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1, ease: "easeOut" } }}
      exit={{ opacity: 0 }}
      className="relative h-full flex flex-col justify-center overflow-hidden"
    >
      {/* Arrière-plan animé */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3, transition: { duration: 2, ease: "easeOut" } }}
        className="absolute inset-0 bg-[url('/assets/stars.svg')] bg-cover bg-center opacity-30"
      />

      {/* Effet de lumière dynamique */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6, transition: { duration: 1.5, ease: "easeOut" } }}
        className="absolute inset-0 bg-gradient-to-r from-black via-[#1E1E2E] to-black opacity-50"
      />

      <div className="container mx-auto h-full flex flex-col xl:flex-row items-center justify-between xl:pt-12 xl:pb-24 px-6 relative z-10">
        
        {/* Texte animé avec effet Parallax */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }}
          className="text-center xl:text-left order-2 xl:order-none max-w-xl"
        >
          {/* Statut de disponibilité */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20">
              <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
              Disponible pour un CDI à partir d'août 2025
            </span>
          </motion.div>

          {/* Double profil */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={textVariants}
            className="flex flex-wrap gap-2 justify-center xl:justify-start mb-4"
          >
            <span className="text-xl text-white/80 font-semibold">Développeur Full-stack</span>
            <span className="text-xl text-accent">|</span>
            <span className="text-xl text-white/80 font-semibold">Chef de Projet IT</span>
          </motion.div>

          <motion.span
            initial="initial"
            animate="animate"
            variants={textVariants}
            className="text-xl text-accent font-semibold tracking-wide flex items-center gap-2 justify-center xl:justify-start"
          >
            <FaCode className="text-2xl text-accent" />
          </motion.span>

          {/* Titre dynamique avec glow */}
          <motion.h1
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="text-4xl xl:text-6xl font-extrabold mt-2 leading-tight cursor-pointer text-white"
          >
            Bonjour, je suis <br />
            <span className="text-accent glow">Jancy KOUD</span>
          </motion.h1>

          {/* Présentation améliorée avec transition fluide */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } }}
            className="mt-3 text-lg text-white/80 leading-relaxed italic"
          >
            Passionné par la <span className="text-accent font-semibold">création d'expériences numériques innovantes</span>, 
            j'allie performance, design et efficacité pour développer des applications modernes et intuitives.
          </motion.p>

          {/* Points forts avec icônes et effets */}
          <motion.ul
            initial="initial"
            animate="animate"
            variants={textVariants}
            className="text-white/80 text-left space-y-3 max-w-lg mt-4"
          >
            <li className="text-lg flex items-center gap-3">
              <FaRocket className="text-accent text-xl" /> Développement performant et optimisé.
            </li>
            <li className="text-lg flex items-center gap-3">
              <FaLaptopCode className="text-accent text-xl" /> Expérience utilisateur fluide et ergonomique.
            </li>
            <li className="text-lg flex items-center gap-3">
              <FiDownload className="text-accent text-xl" /> Applications scalables et sécurisées.
            </li>
          </motion.ul>

          {/* Boutons d'action principaux */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={textVariants}
            className="flex flex-col xl:flex-row items-center gap-8 mt-6"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/work">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0, 255, 135, 0.5)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="flex items-center gap-2 bg-accent text-primary hover:bg-accent-hover w-full"
                  >
                    <FaProjectDiagram className="text-xl" />
                    Voir mes projets
                  </Button>
                </motion.div>
              </Link>
              
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0, 255, 135, 0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="flex items-center gap-2 border-accent text-accent hover:bg-accent hover:text-primary w-full"
                  >
                    <MdEmail className="text-xl" />
                    Me contacter
                  </Button>
                </motion.div>
              </Link>
            </div>
            
            {/* Réseaux sociaux */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={textVariants}
              className="mb-8 xl:mb-0"
            >
              <Social 
                containerStyles="flex gap-6" 
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
              />
            </motion.div>
          </motion.div>

          {/* Badges de compétences */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.6 } }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[600px]"
          >
            {/* Badge Développeur */}
            <div className="bg-[#27272c] p-4 rounded-lg border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <FaLaptopCode className="text-2xl text-accent" />
                <h3 className="font-bold">Développeur Full-stack</h3>
              </div>
              <p className="text-sm text-white/60">
                React, Angular, Node.js, Spring Boot, Cloud (AWS/GCP)
              </p>
            </div>
            
            {/* Badge Chef de Projet */}
            <div className="bg-[#27272c] p-4 rounded-lg border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <FaProjectDiagram className="text-2xl text-accent" />
                <h3 className="font-bold">Chef de Projet IT</h3>
              </div>
              <p className="text-sm text-white/60">
                Agile/Scrum, Gouvernance IT, Transformation digitale
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Photo animée avec effet glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.6, duration: 0.8, ease: "easeOut" } }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.7)" }}
          transition={{ duration: 0.3 }}
          className="order-1 xl:order-none mb-8 xl:mb-0"
        >
          <Photo />
        </motion.div>
      </div>

      {/* Séparateur animé */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1, transition: { delay: 1.2, duration: 0.5 } }}
        className="w-24 h-1 bg-accent mx-auto my-8"
      />

      {/* Stats animées */}
      <Stats />
    </motion.section>
  );
}
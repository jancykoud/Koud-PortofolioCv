"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi';
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { FaCode, FaRocket, FaLaptopCode } from "react-icons/fa";

// Variants d'animations pour les transitions
const textVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Home = () => {
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
          <motion.span
            initial="initial"
            animate="animate"
            variants={textVariants}
            className="text-xl text-accent font-semibold tracking-wide flex items-center gap-2 justify-center xl:justify-start"
          >
            Développeur Fullstack | <FaCode className="text-2xl text-accent" />
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
            j’allie performance, design et efficacité pour développer des applications modernes et intuitives.
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

          {/* Boutons & Réseaux sociaux avec effets avancés */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={textVariants}
            className="flex flex-col xl:flex-row items-center gap-8 mt-6"
          >
            {/* Bouton de téléchargement avec hover 3D */}
            <motion.a
              href="/assets/resume/stage.pdf"
              download="stage.pdf"
              aria-label="Télécharger mon CV"
              whileHover={{ scale: 1.1, rotateX: 10, boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 text-accent border-accent hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Télécharger le CV</span>
                <FiDownload className="text-xl" />
              </Button>
            </motion.a>

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
};

export default Home;

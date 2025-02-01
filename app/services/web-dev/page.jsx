"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaMobileAlt, FaRocket, FaDatabase, FaBolt } from "react-icons/fa";

const WebDev = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
      exit={{ opacity: 0, y: -50 }}
      className="min-h-screen flex flex-col justify-center items-center text-white px-6"
    >
      {/* Titre avec animation */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.6 } }}
        className="text-5xl font-extrabold text-accent mb-6 text-center"
      >
        🚀 Développement Web
      </motion.h1>

      {/* Description animée */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.6 } }}
        className="text-lg text-white/70 max-w-2xl text-center leading-relaxed"
      >
        Nous créons des sites web <span className="text-accent font-semibold">modernes</span> et 
        <span className="text-accent font-semibold"> performants</span> avec les dernières technologies :  
        <span className="text-accent font-semibold"> React</span>,  
        <span className="text-accent font-semibold"> Next.js</span> et  
        <span className="text-accent font-semibold"> Tailwind CSS</span>.  
        Nos solutions sont optimisées pour la <span className="text-accent font-semibold">rapidité</span>,  
        le <span className="text-accent font-semibold">SEO</span> et une **expérience utilisateur exceptionnelle**.
      </motion.p>

      {/* Effet séparateur */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1, transition: { delay: 0.7, duration: 0.5 } }}
        className="w-24 h-1 bg-accent mt-6 mb-6"
      />

      {/* Liste des avantages avec icônes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.6 } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl"
      >
        {[
          {
            icon: <FaMobileAlt className="text-4xl text-accent group-hover:text-white transition-all duration-300" />,
            title: "Responsive & Accessible",
            description: "Un design adaptatif pour tous les écrans."
          },
          {
            icon: <FaRocket className="text-4xl text-accent group-hover:text-white transition-all duration-300" />,
            title: "Optimisation SEO & Performance",
            description: "Des pages ultra-rapides et bien référencées."
          },
          {
            icon: <FaDatabase className="text-4xl text-accent group-hover:text-white transition-all duration-300" />,
            title: "Connexion API & Bases de Données",
            description: "Intégration fluide avec des services externes."
          },
          {
            icon: <FaBolt className="text-4xl text-accent group-hover:text-white transition-all duration-300" />,
            title: "Expérience Utilisateur Intuitive",
            description: "Des interfaces ergonomiques et modernes."
          },
        ].map((item, index) => (
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

      {/* Exemple de code optimisé */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 0.6 } }}
        className="mt-12 p-6 bg-[#27272C] rounded-lg shadow-lg max-w-3xl text-white/80 text-sm leading-relaxed"
      >
        <p className="text-accent font-semibold mb-3">🛠 Exemple de composant React :</p>
        <pre className="bg-black p-4 rounded-lg overflow-x-auto">
          <code className="text-green-400">
            {`// Exemple de composant réutilisable
import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="px-4 py-2 bg-accent text-white rounded-md hover:bg-accent-hover transition"
    >
      {text}
    </button>
  );
};

export default Button;`}
          </code>
        </pre>
      </motion.div>

      {/* Call-To-Action avec effet dynamique */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.6 } }}
        className="mt-8"
      >
        <Link href="/contact">
          <button className="px-6 py-3 bg-accent text-primary text-lg font-semibold rounded-md shadow-md hover:bg-accent-hover transition-all duration-300">
            🚀 Lançons votre projet
          </button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default WebDev;

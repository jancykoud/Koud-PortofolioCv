"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaExchangeAlt, FaLock, FaRocket, FaPlug } from "react-icons/fa";

const ApiIntegration = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
      exit={{ opacity: 0, y: -50 }}
      className="min-h-screen flex flex-col justify-center items-center text-white px-6"
    >
      {/* Titre principal avec animation */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.6 } }}
        className="text-5xl font-extrabold text-accent mb-6 text-center"
      >
        🔗 Intégration API intelligente
      </motion.h1>

      {/* Description animée */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.6 } }}
        className="text-lg text-white/70 max-w-3xl text-center leading-relaxed"
      >
        Connectez facilement vos applications et services grâce à des **API performantes, sécurisées et évolutives**.
        Nos solutions garantissent une **interopérabilité fluide** et une **automatisation intelligente**.
      </motion.p>

      {/* Séparateur animé */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1, transition: { delay: 0.7, duration: 0.5 } }}
        className="w-24 h-1 bg-accent mt-6 mb-6"
      />

      {/* Avantages avec animations et icônes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.6 } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl"
      >
        {[
          {
            icon: <FaPlug className="text-4xl text-accent group-hover:text-white transition-all duration-300" />,
            title: "Interopérabilité Maximale",
            description: "Assurez la compatibilité entre vos différentes plateformes et applications."
          },
          {
            icon: <FaLock className="text-4xl text-accent group-hover:text-white transition-all duration-300" />,
            title: "Sécurité Renforcée",
            description: "Protégez vos données avec des protocoles sécurisés (OAuth2, JWT, HTTPS)."
          },
          {
            icon: <FaExchangeAlt className="text-4xl text-accent group-hover:text-white transition-all duration-300" />,
            title: "Échange de Données Rapide",
            description: "Des API optimisées pour la rapidité et la fiabilité du transfert de données."
          },
          {
            icon: <FaRocket className="text-4xl text-accent group-hover:text-white transition-all duration-300" />,
            title: "Scalabilité & Performance",
            description: "Nos solutions sont conçues pour évoluer avec votre entreprise."
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

      {/* Exemple de code API pour illustrer l'intérêt technique */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 0.6 } }}
        className="mt-12 p-6 bg-[#27272C] rounded-lg shadow-lg max-w-3xl text-white/80 text-sm leading-relaxed"
      >
        <p className="text-accent font-semibold mb-3">📡 Exemple d'intégration API :</p>
        <pre className="bg-black p-4 rounded-lg overflow-x-auto">
          <code className="text-green-400">
            {`fetch("https://api.example.com/data", {
  method: "GET",
  headers: { "Authorization": "Bearer YOUR_ACCESS_TOKEN" }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Erreur API:", error));`}
          </code>
        </pre>
      </motion.div>

      {/* Call-To-Action avec hover dynamique */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.6 } }}
        className="mt-8"
      >
        <Link href="/contact">
          <button className="px-6 py-3 bg-accent text-primary text-lg font-semibold rounded-md shadow-md hover:bg-accent-hover transition-all duration-300">
            🌍 Intégrons votre API dès maintenant !
          </button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default ApiIntegration;

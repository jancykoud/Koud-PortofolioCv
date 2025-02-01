"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaBolt, FaImage, FaDatabase, FaCloudDownloadAlt } from "react-icons/fa";

const PerformanceOptimization = () => {
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
        ⚡ Optimisation des Performances
      </motion.h1>

      {/* Description animée */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.6 } }}
        className="text-lg text-white/70 max-w-2xl text-center leading-relaxed"
      >
        Accélérez le chargement de votre site, améliorez l'expérience utilisateur et boostez votre référencement SEO grâce aux meilleures pratiques d’optimisation.
      </motion.p>

      {/* Séparateur animé */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1, transition: { delay: 0.7, duration: 0.5 } }}
        className="w-24 h-1 bg-accent mt-6 mb-6"
      />

      {/* Liste des techniques d’optimisation avec icônes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.6 } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl"
      >
        {[
          {
            icon: <FaBolt className="text-4xl text-accent group-hover:text-white transition-all duration-300" />,
            title: "Mise en cache avancée",
            description: "Stockez localement les ressources pour un chargement ultra-rapide."
          },
          {
            icon: <FaImage className="text-4xl text-accent group-hover:text-white transition-all duration-300" />,
            title: "Compression d’images",
            description: "Réduisez la taille des images sans perte de qualité."
          },
          {
            icon: <FaDatabase className="text-4xl text-accent group-hover:text-white transition-all duration-300" />,
            title: "Optimisation des requêtes",
            description: "Minimisez les appels serveur pour une meilleure fluidité."
          },
          {
            icon: <FaCloudDownloadAlt className="text-4xl text-accent group-hover:text-white transition-all duration-300" />,
            title: "Lazy Loading & Préchargement",
            description: "Chargez les ressources uniquement lorsqu’elles sont nécessaires."
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
        <p className="text-accent font-semibold mb-3">🛠 Exemple d'optimisation :</p>
        <pre className="bg-black p-4 rounded-lg overflow-x-auto">
          <code className="text-green-400">
            {`// Lazy Loading pour optimiser les performances
const LazyImage = React.lazy(() => import('./HeavyImage'));

const App = () => (
  <Suspense fallback={<p>Chargement...</p>}>
    <LazyImage />
  </Suspense>
);`}
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
            ⚡ Boostez votre site maintenant !
          </button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default PerformanceOptimization;

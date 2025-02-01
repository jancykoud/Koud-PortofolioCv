"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { FaLaptopCode, FaCogs, FaPlug, FaRocket } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Développement Web",
    description: "Création de sites web modernes et performants, adaptés à tous les supports.",
    icon: <FaLaptopCode className="text-4xl text-accent group-hover:text-white transition-colors duration-300" />,
    href: "/services/web-dev",
  },
  {
    num: "02",
    title: "Développement de logiciels",
    description: "Conception et développement d’applications adaptées aux besoins des entreprises.",
    icon: <FaCogs className="text-4xl text-accent group-hover:text-white transition-colors duration-300" />,
    href: "/services/software-dev",
  },
  {
    num: "03",
    title: "Intégration API",
    description: "Connexion fluide entre vos services et applications via API sécurisées et optimisées.",
    icon: <FaPlug className="text-4xl text-accent group-hover:text-white transition-colors duration-300" />,
    href: "/services/api-integration",
  },
  {
    num: "04",
    title: "Optimisation des performances",
    description: "Amélioration des temps de chargement et optimisation SEO pour une navigation fluide.",
    icon: <FaRocket className="text-4xl text-accent group-hover:text-white transition-colors duration-300" />,
    href: "/services/performance-optimization",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.6, ease: "easeOut" } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-between gap-5 group bg-[#1E1E2E] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Numéro et bouton */}
              <div className="flex justify-between items-center">
                <div className="text-3xl xl:text-4xl font-extrabold text-white group-hover:text-accent transition-colors duration-300">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[55px] h-[55px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center shadow-md hover:shadow-lg"
                >
                  <motion.div whileHover={{ rotate: 45 }} transition={{ duration: 0.5 }}>
                    <BsArrowDownRight className="text-primary text-xl" />
                  </motion.div>
                </Link>
              </div>

              {/* Icône et titre */}
              <div className="flex items-center gap-4">
                <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                  {service.icon}
                </motion.div>
                <h2 className="text-[24px] xl:text-[28px] font-bold leading-tight text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-sm xl:text-base text-white/80 group-hover:text-white transition-colors duration-500">
                {service.description}
              </p>

              {/* Bouton En savoir plus */}
              <Link href={service.href}>
                <button className="mt-4 px-4 py-2 bg-accent text-primary rounded-md text-sm font-semibold transition-all duration-300 hover:bg-accent-hover">
                  En savoir plus
                </button>
              </Link>

              {/* Ligne de séparation */}
              <div className="border-b border-white/20 w-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

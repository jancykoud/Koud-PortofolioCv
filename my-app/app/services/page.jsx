"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Développement Web",
    description: "Création de sites web modernes et performants.",
    href: "",
  },
  {
    num: "02",
    title: "Développement de logiciels personnalisés",
    description: "Conception de logiciels adaptés à vos besoins.",
    href: "",
  },
  {
    num: "03",
    title: "Intégration API",
    description: "Intégration d'API pour une meilleure connectivité.",
    href: "",
  },
  {
    num: "04",
    title: "Optimisation des performances web",
    description: "Amélioration des temps de chargement et de la fluidité.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-8 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.6, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[30px]" // Réduction de l'espace entre les services
        >
          {services.map((service, index) => (
            <div key={index} className="flex-1 flex flex-col justify-center gap-4 group">
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-3xl xl:text-4xl font-extrabold text-white text-outline group-hover:text-accent transition-colors duration-300">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[55px] h-[55px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center"
                >
                  <motion.div
                    whileHover={{ rotate: 45 }} // Animation de rotation sur survol
                    transition={{ duration: 0.5 }}
                  >
                    <BsArrowDownRight className="text-primary text-xl" />
                  </motion.div>
                </Link>
              </div>
              {/* heading */}
              <h2 className="text-[24px] xl:text-[32px] font-bold leading-tight text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              {/* description */}
              <p className="text-sm xl:text-base text-white/80">{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

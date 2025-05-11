"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { FaLaptopCode, FaCogs, FaPlug, FaRocket, FaProjectDiagram } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Développement Web",
    description: "Création de sites web modernes et performants, adaptés à tous les supports.",
    icon: <FaLaptopCode className="text-4xl text-accent group-hover:text-white transition-colors duration-300" />,
    href: "/services/web-dev",
    features: ["Site responsive", "SEO optimisé", "Performance optimale", "Support 3 mois"]
  },
  {
    num: "02",
    title: "Développement de logiciels",
    description: "Conception et développement d'applications adaptées aux besoins des entreprises.",
    icon: <FaCogs className="text-4xl text-accent group-hover:text-white transition-colors duration-300" />,
    href: "/services/software-dev",
    features: ["Architecture scalable", "Code maintenable", "Tests automatisés", "Documentation"]
  },
  {
    num: "03",
    title: "Intégration API",
    description: "Connexion fluide entre vos services et applications via API sécurisées et optimisées.",
    icon: <FaPlug className="text-4xl text-accent group-hover:text-white transition-colors duration-300" />,
    href: "/services/api-integration",
    features: ["RESTful API", "GraphQL", "Authentification", "Documentation API"]
  },
  {
    num: "04",
    title: "Optimisation des performances",
    description: "Amélioration des temps de chargement et optimisation SEO pour une navigation fluide.",
    icon: <FaRocket className="text-4xl text-accent group-hover:text-white transition-colors duration-300" />,
    href: "/services/performance-optimization",
    features: ["Audit performance", "Optimisation code", "Cache stratégique", "Monitoring"]
  },
  {
    num: "05",
    title: "Gestion de Projet IT",
    description: "Pilotage de projets digitaux avec méthodologies agiles et suivi personnalisé.",
    icon: <FaProjectDiagram className="text-4xl text-accent group-hover:text-white transition-colors duration-300" />,
    href: "/services/project-management",
    features: ["Méthodologie Agile", "Gestion d'équipe", "Reporting régulier", "Risk management"]
  },
];

// Témoignages clients
const testimonials = [
  {
    name: "Sébastien Frackowiak",
    company: "Orange DATA/IA",
    role: "Responsable de stage",
    content: "Jancy fait preuve d'une grande autonomie et d'une excellente capacité d'adaptation. Son travail sur le projet DataMesh démontre ses compétences techniques et sa vision produit.",
    rating: 5
  },
  {
    name: "Roger Bavibidila",
    company: "Université de Zurich",
    role: "Doctorant en IA & ML | Co-fondateur Let Us Connect",
    content: "Jancy est un développeur exceptionnel avec qui j'ai le plaisir de collaborer sur plusieurs projets. Sa créativité et son expertise technique sont impressionnantes.",
    rating: 5
  },
  {
    name: "Équipe Outlier",
    company: "Outlier",
    role: "Plateforme de projets",
    content: "Développeur rigoureux et créatif, Jancy livre toujours des projets de qualité. Sa capacité à comprendre rapidement les besoins et à proposer des solutions innovantes est remarquable.",
    rating: 5
  }
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12">
      <div className="container mx-auto px-6">
        {/* En-tête avec mention devis gratuit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Mes Services</h1>
          <p className="text-white/60 text-lg mb-6">
            Solutions professionnelles adaptées à vos besoins
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-accent/10 text-accent rounded-full text-lg font-medium border border-accent/20">
            <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
            Devis gratuit et personnalisé
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.6, ease: "easeOut" } }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10"
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
                <h2 className="text-[22px] xl:text-[24px] font-bold leading-tight text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-sm xl:text-base text-white/80 group-hover:text-white transition-colors duration-500">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-white/60 flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Bouton Demander un devis */}
              <Link href="/contact">
                <button className="mt-4 px-4 py-2 bg-accent text-primary rounded-md text-sm font-semibold transition-all duration-300 hover:bg-accent-hover w-full">
                  Demander un devis
                </button>
              </Link>

              {/* Ligne de séparation */}
              <div className="border-b border-white/20 w-full"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Témoignages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.6 } }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Ce que disent mes collaborateurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className="bg-[#27272c] p-6 rounded-lg border border-white/10"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent">★</span>
                  ))}
                </div>
                <p className="text-white/80 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-accent font-bold">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-white/60">{testimonial.role} - {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.9, duration: 0.6 } }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">Prêt à démarrer votre projet ?</h3>
          <p className="text-white/60 mb-8">Contactez-moi pour obtenir un devis gratuit et personnalisé</p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-accent text-primary rounded-full text-lg font-semibold hover:bg-accent-hover transition-all">
              Demander un devis gratuit
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
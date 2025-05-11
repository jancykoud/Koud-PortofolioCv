"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
    FaAngular,
    FaDownload,
    FaGraduationCap,
    FaBriefcase,
    FaCalendarAlt,
} from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs, SiSpringboot, SiSymfony } from 'react-icons/si';

// Données à propos de moi
const about = {
  title: "À propos de moi",
  description:
    "Diplômé d'un double Master en Informatique et Management (MTS), je combine expertise technique et vision stratégique. Passionné par la création de solutions logicielles performantes et évolutives, je recherche un poste en CDI pour mettre en pratique mes compétences en développement et gestion de projet.",
  info: [
    {
      fieldName: "Noms",
      fieldValue: "Jancy KOUD BANGA",
    },
    {
      fieldName: "Téléphone",
      fieldValue: "(+33) 7 88 70 29 85",
    },
    {
      fieldName: "Expérience",
      fieldValue: "2+ ans",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "jancy-koud-banga",
    },
    {
      fieldName: "Nationalité",
      fieldValue: "Congolaise",
    },
    {
      fieldName: "Email",
      fieldValue: "fridelinbanga@gmail.com",
    },
    {
      fieldName: "Disponibilité",
      fieldValue: "Août 2025",
    },
    {
      fieldName: "Langues",
      fieldValue: "Français, Anglais, Chinois",
    },
  ],
};

// Données expérience professionnelle
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Mon expérience professionnelle",
  description:
    "Participation à la conception et au développement d'applications logicielles et web. Création d'interfaces utilisateur élégantes et d'architectures backend robustes.",
  items: [
    {
      company: "ORANGE DATA/IA",
      position: "Chef de projet / Développeur Web - Stage",
      duration: "Février 2025 - Août 2025",
      description: "Pilotage d'un projet de digitalisation dans un environnement agile (Datamesh). Développement d'applications web et gestion d'équipe.",
    },
    {
      company: "GSI Concept",
      position: "Développeur Full Stack",
      duration: "Juin 2024 - Août 2024",
      description: "Développement d'applications web innovantes avec technologies frontend et backend modernes."
    },
    {
      company: "Outlier",
      position: "Développeur Freelance",
      duration: "2024 - Présent",
      description: "Développement de projets innovants et collaboration sur des solutions technologiques avancées."
    },
    {
      company: "Lycée La Révolution, Congo",
      position: "Enseignant de Mathématiques",
      duration: "2020 - 2022",
      description: "Enseignement des mathématiques au niveau secondaire. Développement de plans de cours efficaces."
    },
  ],
};

// Timeline data
const timeline = [
  {
    year: "2025",
    title: "Stage Orange DATA/IA",
    description: "Chef de projet & Développeur",
    type: "work",
    icon: <FaBriefcase />
  },
  {
    year: "2024-2025",
    title: "Master MTS",
    description: "Management des Technologies et SI - IAE Montpellier",
    type: "education",
    icon: <FaGraduationCap />
  },
  {
    year: "2023-2025",
    title: "Master Informatique",
    description: "Technologies Cloud - Université de Montpellier",
    type: "education",
    icon: <FaGraduationCap />
  },
  {
    year: "2024",
    title: "GSI Concept",
    description: "Développeur Full Stack",
    type: "work",
    icon: <FaBriefcase />
  },
  {
    year: "2023",
    title: "Master Mathématiques",
    description: "Université de Bourgogne",
    type: "education",
    icon: <FaGraduationCap />
  },
  {
    year: "2020-2022",
    title: "Enseignant",
    description: "Lycée La Révolution, Congo",
    type: "work",
    icon: <FaBriefcase />
  },
  {
    year: "2014-2019",
    title: "Master Enseignement",
    description: "ENS Brazzaville",
    type: "education",
    icon: <FaGraduationCap />
  }
];

// Parcours Éducation
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Mon parcours éducatif",
  description:
    "Double Master combinant expertise technique et compétences managériales. Formation pluridisciplinaire alliant informatique, management et mathématiques.",
  items: [
    {
      institution: "IAE Montpellier",
      degree: "Master 2 Management des Technologies et des SI (MTS)",
      duration: "2024 - 2025",
      highlight: true,
      skills: "Gestion de projet, Gouvernance IT, Stratégie digitale, Méthodes agiles"
    },
    {
      institution: "Université de Montpellier",
      degree: "Master 2 Informatique - Technologies Cloud",
      duration: "2023 - 2025",
      highlight: true,
      skills: "Cloud Computing, DevOps, Architectures distribuées, Data Engineering"
    },
    {
      institution: "Université de Bourgogne",
      degree: "Master de Perfectionnement en Mathématiques",
      duration: "2023",
      skills: "Analyse avancée, Statistiques, Algorithmes"
    },
    {
      institution: "ENS Brazzaville, Congo",
      degree: "Master d'Enseignement en Mathématiques",
      duration: "2014 - 2019",
      skills: "Mathématiques appliquées, Pédagogie, Didactique"
    },
  ],
};

// Compétences (Skills)
const skills = {
    title: "Mes compétences",
    description:
      "Maîtrise de diverses technologies pour le développement web et la conception d'applications performantes.",
    skillList: [
      {
        icon: <FaHtml5 />,
        name: "HTML 5",
      },
      {
        icon: <FaCss3 />,
        name: "CSS 3",
      },
      {
        icon: <FaJs />,
        name: "JavaScript",
      },
      {
        icon: <FaReact />,
        name: "React.js",
      },
      {
        icon: <SiTailwindcss />,
        name: "Tailwind CSS",
      },
      {
        icon: <FaNodeJs />,
        name: "Node.js",
      },
      {
        icon: <FaFigma />,
        name: "Figma",
      },
      {
        icon: <FaAngular />,
        name: "Angular",
      },
      {
        icon: <SiSpringboot />,
        name: "Spring Boot",
      },
      {
        icon: <SiSymfony />,
        name: "Symfony",
      },
    ],
  };

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        {/* Header avec double CV téléchargeable */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Mon Parcours Professionnel</h1>
          
          {/* Mise en avant du double master */}
           <div className="inline-flex items-center px-6 py-3 bg-accent/10 text-accent rounded-full text-lg font-medium border border-accent/20 mb-8">
            <FaGraduationCap className="mr-2" />
            Double Master : Informatique & Management (MTS)
          </div>

          {/* Boutons de téléchargement des deux CV */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assets/resume/CV_Koud-UM.pdf" download>
              <Button className="flex items-center gap-2 bg-accent hover:bg-accent-hover">
                <FaDownload />
                CV Développeur Full-stack
              </Button>
            </Link>
            <Link href="/assets/resume/CV_Koud_IAE.pdf" download>
              <Button variant="outline" className="flex items-center gap-2 border-accent text-accent hover:bg-accent hover:text-primary">
                <FaDownload />
                CV Chef de Projet IT
              </Button>
            </Link>
          </div>
        </div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Timeline de mon parcours</h2>
          <div className="relative">
            {/* Ligne verticale centrale */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent/30" />
            
            {/* Timeline items */}
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} relative`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-[#1e1e2e]" />
                  
                  {/* Content card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className={`bg-[#27272c] p-4 rounded-lg border border-white/10 ${
                      item.type === 'education' && item.title.includes('Master') ? 'border-accent/50' : ''
                    }`}>
                      <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                        <span className="text-accent">{item.icon}</span>
                        <span className="text-sm text-accent font-medium">{item.year}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-white/60 text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tabs Section */}
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Expérience</TabsTrigger>
            <TabsTrigger value="education">Éducation</TabsTrigger>
            <TabsTrigger value="skills">Compétences</TabsTrigger>
            <TabsTrigger value="about-me">À propos de moi</TabsTrigger>
          </TabsList>

          {/* Contenu */}
          <div className="min-h-[70vh] w-full">
            {/* Expérience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                          {item.description && (
                            <p className="text-sm text-white/50 mt-2">{item.description}</p>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Éducation */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className={`bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center gap-1 ${
                            item.highlight ? 'border-2 border-accent/30' : ''
                          }`}
                        >
                          {item.highlight && (
                            <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full self-start mb-2">
                              Double Master
                            </span>
                          )}
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                          {item.skills && (
                            <p className="text-sm text-white/50 mt-2">{item.skills}</p>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Compétences */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-[30px]">
                    {skills.skillList.map((skill, index) => (
                      <li
                        key={index}
                        className="flex flex-col items-center gap-3 bg-[#232329] p-6 rounded-xl hover:bg-[#2a2a32] transition-colors"
                      >
                        <span className="text-5xl text-accent">{skill.icon}</span>
                        <p className="text-center font-medium">{skill.name}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* À propos de moi */}
            <TabsContent value="about-me" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mt-6">
                  {about.info.map((info, index) => (
                    <li key={index} className="flex items-center gap-3 text-white">
                      <span className="text-accent font-medium min-w-[100px]">{info.fieldName}:</span>
                      <span className="text-white/80">{info.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
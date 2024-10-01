"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
    FaAngular,
  } from 'react-icons/fa';
  
  import { SiTailwindcss, SiNextdotjs, SiSpringboot, SiSymfony } from 'react-icons/si';
  

// Données à propos de moi
const about = {
  title: "À propos de moi",
  description:
    "Étudiant en Master 2 spécialisé en développement web et technologies cloud, je suis passionné par la création de solutions logicielles élégantes et performantes. Je recherche un stage de fin d’études pour mettre en pratique mes compétences en ingénierie logicielle et contribuer à des projets innovants.",
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
      fieldName: "LInkedin",
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
      fieldName: "Freelance",
      fieldValue: "Disponible",
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
    "Participation à la conception et au développement d’applications logicielles et web. Création d’interfaces utilisateur élégantes et d’architectures backend robustes.",
  items: [
    {
      company: "GSI Concept",
      position: "Développeur Full Stack",
      duration: "Juin 2024 - Aout 2024",
    },
    {
      company: "Fiverr",
      position: "Développeur Web Freelance",
      duration: "2024 - Présent",
    },
    {
      company: "Lycée La Révolution, Congo",
      position: "Enseignant de Mathématiques",
      duration: "2020 - 2022",
      description:
        "Enseignement des mathématiques au niveau secondaire. Développement de plans de cours efficaces pour aider les élèves à maîtriser les concepts mathématiques fondamentaux et avancés.",
    },
  ],
};

// Parcours Éducation
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Mon parcours éducatif",
  description:
    "Voici mon parcours éducatif comprenant mes formations récentes en développement web et ingénierie logicielle.",
  items: [
    {
      institution: "Université de Montpellier",
      degree: "Master en Développement Informatique",
      duration: "2023 - 2025",
    },
    {
      institution: "Université de Bourgogne",
      degree: "Master de Perfectionnement en Maths",
      duration: "2020 - 2022",
    },
    {
      institution: "Ecole Normale Supérieure, Congo",
      degree: "Master d'Enseignements en Mathématiques",
      duration: "2014 - 2019",
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
import { ScrollArea } from "@radix-ui/react-scroll-area";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
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
              {/* Liste d'expérience */}
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
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
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
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
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
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {skills.skillList.map((skill, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 bg-[#232329] h-[100px] px-6 rounded-xl"
                      >
                        <span className="text-4xl text-accent">{skill.icon}</span>
                        <p className="text-lg font-medium">{skill.name}</p>
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
                    <li key={index} className="text-white">
                      <span className="text-accent">{info.fieldName}: </span>
                      {info.fieldValue}
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

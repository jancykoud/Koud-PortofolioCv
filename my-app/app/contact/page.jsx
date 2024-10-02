"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt, FaGithub, FaGitlab } from "react-icons/fa";  // Added GitHub and GitLab icons

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Téléphone',
        description: "(+33) 7 88 70 29 85",
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: "fridelinbanga@gmail.com",
    },
    {
        icon: <FaMapMarkedAlt />,
        title: 'Adresse',
        description: "280 Rue Du Pous LAS SERS, 34000 Montpellier",
    },
    {
        icon: <FaGithub />,  // GitHub icon
        title: 'GitHub',
        description: <a href="https://github.com/jancykoud" target="_blank" rel="noopener noreferrer">github.com/jancykoud</a>,
    },
    {
        icon: <FaGitlab />,  // GitLab icon
        title: 'GitLab',
        description: <a href="https://gitlab.com/fridelinbanga" target="_blank" rel="noopener noreferrer">gitlab.com/fridelinbanga</a>,
    },
];

import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#2727c] rounded-xl">
                            <h3 className="text-4xl text-accent">Travaillons ensemble</h3>
                            <p className="text-white/60">
                            Je suis à votre disposition pour collaborer sur des projets créatifs et innovants. Ensemble, nous pouvons développer des solutions sur-mesure qui répondront à vos besoins et dépasseront vos attentes. Contactez-moi pour discuter de votre projet et explorer comment je peux vous aider à atteindre vos objectifs.
                            </p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder="Prénom" />
                                <Input type="lastname" placeholder="Nom de famille" />
                                <Input type="email" placeholder="Adresse e-mail" />
                                <Input type="phone" placeholder="Numéro de téléphone" />
                            </div>
                            {/* Select */}
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Sélectionner un service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Sélectionner un service</SelectLabel>
                                        <SelectItem value="web-dev">Développement Web</SelectItem>
                                        <SelectItem value="ui-ux">Conception UI/UX</SelectItem>
                                        <SelectItem value="logo-design">Création de Logo</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* textarea */}
                            <Textarea className="h-[200px]" placeholder="Tapez votre message ici." />
                            {/* button */}
                            <Button size="md" className="w-auto px-4 py-2 bg-accent text-primary rounded-md hover:bg-accent-hover transition-all duration-300">
                                Envoyer le message
                            </Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt, FaGithub, FaGitlab } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        honeypot: "" // ✅ Champ caché pour éviter les bots
    });

    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    // Validation email
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Gestion des changements des champs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Vérification en temps réel
        if (name === "email" && value && !validateEmail(value)) {
            setErrors((prev) => ({ ...prev, email: "Adresse e-mail invalide" }));
        } else {
            setErrors((prev) => ({ ...prev, email: "" }));
        }
    };

    // Envoi de l'e-mail
    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        // Vérifications
        if (!formData.firstname || !formData.email || !formData.message) {
            setStatus("❌ Veuillez remplir tous les champs obligatoires !");
            setLoading(false);
            return;
        }
        if (!validateEmail(formData.email)) {
            setStatus("❌ L'adresse e-mail n'est pas valide !");
            setLoading(false);
            return;
        }
        if (formData.message.length < 10) {
            setStatus("❌ Le message doit contenir au moins 10 caractères !");
            setLoading(false);
            return;
        }
        if (formData.honeypot) {
            console.warn("Spam détecté !");
            setLoading(false);
            return;
        }

        try {
            await emailjs.send(
                "service_q5mtxsg", // Remplace avec ton SERVICE ID
                "template_w6wfki8", // Remplace avec ton TEMPLATE ID
                {
                    to_email: formData.email,
                    firstname: formData.firstname,
                    lastname: formData.lastname,
                    email: formData.email,
                    phone: formData.phone,
                    service: formData.service,
                    message: formData.message
                },
                "ABpXglQIHl5EHuuLc" // Remplace avec ta PUBLIC KEY
            );

            setStatus("✅ Message envoyé avec succès !");
            setFormData({ firstname: "", lastname: "", email: "", phone: "", service: "", message: "", honeypot: "" });
        } catch (error) {
            console.error("Erreur lors de l'envoi :", error);
            setStatus("❌ Une erreur est survenue, veuillez réessayer.");
        }

        setLoading(false);
    };

    // Informations de contact
    const info = [
        { icon: <FaPhoneAlt />, title: "Téléphone", description: "(+33) 7 88 70 29 85" },
        { icon: <FaEnvelope />, title: "Email", description: "fridelinbanga@gmail.com" },
        { icon: <FaMapMarkedAlt />, title: "Localisation", description: "Clermont-Ferrand, France" },
        { icon: <FaGithub />, title: "GitHub", description: <a href="https://github.com/jancykoud" target="_blank" rel="noopener noreferrer" className="text-accent">github.com/jancykoud</a> },
        { icon: <FaGitlab />, title: "GitLab", description: <a href="https://gitlab.com/fridelinbanga" target="_blank" rel="noopener noreferrer" className="text-accent">gitlab.com/fridelinbanga</a> }
    ];

    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.6, ease: "easeOut" } }} className="py-6">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* Formulaire de contact */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl shadow-lg">
                            <h3 className="text-4xl text-accent">Travaillons ensemble</h3>
                            <p className="text-white/60">Contactez-moi pour discuter de votre projet.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" name="firstname" placeholder="Prénom" value={formData.firstname} onChange={handleChange} required />
                                <Input type="text" name="lastname" placeholder="Nom de famille" value={formData.lastname} onChange={handleChange} />
                                <Input type="email" name="email" placeholder="Adresse e-mail" value={formData.email} onChange={handleChange} required className={`${errors.email ? "border-red-500" : ""}`} />
                                <Input type="tel" name="phone" placeholder="Numéro de téléphone" value={formData.phone} onChange={handleChange} />
                            </div>

                            <Select name="service" onValueChange={(value) => setFormData((prev) => ({ ...prev, service: value }))}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Sélectionner un service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Services</SelectLabel>
                                        <SelectItem value="web-dev">Développement Web</SelectItem>
                                        <SelectItem value="ui-ux">Conception UI/UX</SelectItem>
                                        <SelectItem value="logo-design">Création de Logo</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Textarea name="message" className="h-[200px]" placeholder="Tapez votre message ici." value={formData.message} onChange={handleChange} required />
                            
                            {/* Champ caché honeypot pour éviter les bots */}
                            <input type="text" name="honeypot" style={{ display: "none" }} onChange={handleChange} />

                            <Button type="submit" size="md" className={`w-auto px-4 py-2 rounded-md transition-all duration-300 ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-accent hover:bg-accent-hover text-primary"}`} disabled={loading}>
                                {loading ? "Envoi en cours..." : "Envoyer le message"}
                            </Button>

                            {status && <p className={`mt-2 text-center ${status.startsWith("✅") ? "text-green-400" : "text-red-400"}`}>{status}</p>}
                        </form>
                    </div>

                    {/* Informations de contact */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none">
                        <ul className="flex flex-col gap-10">{info.map((item, index) => (
                            <li key={index} className="flex items-center gap-6">
                                <div className="w-[52px] h-[52px] bg-[#27272c] text-accent rounded-md flex items-center justify-center text-[28px]">{item.icon}</div>
                                <div><p className="text-white/60">{item.title}</p><h3 className="text-xl">{item.description}</h3></div>
                            </li>
                        ))}</ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;

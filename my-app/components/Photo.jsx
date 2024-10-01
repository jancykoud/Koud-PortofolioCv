"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { delay: 0.5, duration: 0.8, ease: "easeInOut" },
        }}
        className="relative flex justify-center items-center"
      >
        {/* Cercle extérieur avec effet de rotation */}
        <motion.div
          className="absolute w-[150px] h-[150px] xl:w-[240px] xl:h-[240px] rounded-full border-4 border-accent"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Animation circulaire ajoutée */}
          <motion.svg 
            className="w-full h-full"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle 
              cx="253" 
              cy="253" 
              r="250" 
              stroke="#00ff99" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.svg>
        </motion.div>

        {/* Image réduite et centrée dans le cercle */}
        <div className="w-[110px] h-[110px] xl:w-[180px] xl:h-[180px] relative z-10 overflow-hidden rounded-full flex justify-center items-center">
          <Image
            src="/assets/Kjb.png"
            width={180}
            height={180}
            priority
            quality={100}
            alt="Photo"
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;

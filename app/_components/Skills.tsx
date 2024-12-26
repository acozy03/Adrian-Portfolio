"use client";
import { techCardsItems } from "../_lib/constants";
import TechCard from "./TechCard";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="relative z-10 py-16 sm:py-24" id="about">
      {/* About Me Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-16">
        <motion.div
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex-grow max-w-2xl text-center md:text-left"
        >
          <h1 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200">
            More About Me
          </h1>
          <p className="text-sm min-[430px]:text-base mt-4 text-dark-200/70 dark:text-stone-200/70">
            Hi! I&apos;m a senior student developer at UCF who loves building efficient and
            innovative projects. With a strong foundation in full-stack development, I enjoy creating
            user-friendly designs, learning new frameworks and languages, and even sometimes dabbling in game development. I&apos;m always looking for new opportunities to grow and learn.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 75 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="hidden md:block w-40 h-40 sm:w-48 sm:h-48 rounded-lg overflow-hidden flex-shrink-0 ml-8 relative shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
        >
          <img
            src="/imgs/portraits/adrian.png" // Replace with your image path
            alt="About Me"
            className="object-cover w-full h-full relative z-10 hover:blur-none hover:scale-105 transition-all duration-300 ease-in-out rounded-lg"
          />
        </motion.div>
      </div>

      {/* Current Technologies Section */}
      <div className="space-y-4 mb-10">
        <motion.h1
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200"
        >
          Current technologies
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4"
      >
        {techCardsItems.map((cardItem) => (
          <TechCard key={cardItem.name} cardInfo={cardItem} />
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;

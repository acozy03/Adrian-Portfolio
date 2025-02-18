"use client";
import Link from "next/link";
import { portfolioProjects } from "../_lib/constants";
import ProjectCard from "./ProjectCard";
import ShinyButton from "./ui/ShinyButton";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  return (
    <div className="py-4 sm:py-8 mb-5" id="work">
      {/* Title and Button Section */}
      <div className="flex gap-4 flex-col sm:flex-row sm:items-center justify-between">
        {/* Animated Title */}
        <motion.h2
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200"
        >
          My Contributions / Projects
        </motion.h2>

        {/* Animated Button */}
        <motion.div
          initial={{ opacity: 0, x: 75 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <ShinyButton icon={<ChevronRight />}>
            <Link href="https://github.com/acozy03" target="_blank">
              All Projects
            </Link>
          </ShinyButton>
        </motion.div>
      </div>

      {/* Project Cards Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="grid lg:grid-cols-2 gap-4 mt-8"
      >
        {portfolioProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
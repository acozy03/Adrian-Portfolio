"use client";
import { useState, useEffect } from "react";
import { techCardsItems } from "../_lib/constants";
import TechCard from "./TechCard";
import { motion } from "framer-motion";

// Array of image URLs for Adrian's pictures
const adrianImages = [
  "/imgs/portraits/adrian.webp",
  "/imgs/portraits/adrian2.webp",
  "/imgs/portraits/adrian3.webp",
];

const categories = ["Languages", "Frameworks / Libraries", "Other"];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Languages");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter items based on selected category
  const filteredItems = techCardsItems.filter((item) =>
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  // Function to navigate to a specific image
  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Automatic image rotation every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === adrianImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative z-10 py-4 sm:py-8" id="about">
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

        {/* Image and Buttons Container */}
        <div className="hidden md:block relative ml-8">
          <motion.div
            key={`adrian-image-${currentImageIndex}`}
            initial={{ opacity: 0, x: 75 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-lg overflow-hidden flex-shrink-0 relative transition-shadow duration-300 ease-in-out"
          >
            <img
              src={adrianImages[currentImageIndex]}
              alt="About Me"
              className="object-cover w-full h-full relative z-10 hover:blur-none hover:scale-105 transition-all duration-300 ease-in-out rounded-lg"
            />
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-1 mt-2">
            {adrianImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-14 h-1 rounded-full ${
                  currentImageIndex === index
                    ? "bg-primary"
                    : "bg-[#333333] hover:bg-[#444444]"
                } transition-colors duration-300`}
              ></button>
            ))}
          </div>
        </div>
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
          Current Technologies
        </motion.h1>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-6 justify-left">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * categories.indexOf(category) }}
            whileHover={{
              backgroundColor: "#ec4b4b",
              scale: 1.05,
            }}
            style={{
              backgroundColor:
                selectedCategory === category ? "#ec4b4b" : "#1f1d1d",
            }}
            className="px-4 py-2 rounded-lg text-sm font-medium text-white"
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Filtered Tech Cards */}
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4"
      >
        {filteredItems.map((cardItem) => (
          <TechCard key={cardItem.name} cardInfo={cardItem} />
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
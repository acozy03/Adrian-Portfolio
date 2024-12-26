"use client";
import { ChevronRight, Download, Linkedin, GitlabIcon as GitHub, Mail } from 'lucide-react';
import ShinyButton from "./ui/ShinyButton";
import Link from "next/link";
import { TextGenerateEffect } from "./ui/TextGenerate";

const HeroSection = () => {
  const handleEmailClick = () => {
    navigator.clipboard.writeText('acozy03@gmail.com').then(() => {
      alert('Email copied to clipboard! Feel free to reach out :)');
    }).catch(err => {
      console.error('Failed to copy email: ', err);
    });
  };

  return (
    <>
      <div className="h-screen w-full dark:bg-dark-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.06] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-dark-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center relative" id="#home">
        <div className="flex flex-col justify-center items-center relative z-10 text-center">
          <p className="uppercase font-bold text-sm tracking-widest">
            Based In Orlando, Fl
          </p>
          <TextGenerateEffect
            words=" Adrian Cosentino"
            className="text-[40px] md:text-6xl lg:text-7xl font-bold text-center max-w-5xl leading-snug tracking-wide"
          />
          <p className="pt-5 pb-8 text-sm sm:text-base md:text-lg text-dark-200 dark:text-stone-200/70">
            I create intuitive, highly functional and clean applications.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <ShinyButton icon={<ChevronRight />}>
              <Link href="#work">See My Work</Link>
            </ShinyButton>
            <a
              href="/resume/CV_en.pdf"
              download
              className="flex items-center gap-2.5 group"
            >
              <Download className="text-primary" />
              <span className="group-hover:text-white/70 transition-colors duration-200 font-semibold">
                Download CV
              </span>
            </a>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <a
              href="https://www.linkedin.com/in/acozy03"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-500/10 rounded-full flex items-center justify-center hover:bg-gray-500/20 transition-colors"
            >
              <Linkedin size={24} className="" />
            </a>
            <a
              href="https://github.com/acozy03"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-500/10 rounded-full flex items-center justify-center hover:bg-gray-500/20 transition-colors"
            >
              <GitHub size={24} className="" />
            </a>
            <button
              onClick={handleEmailClick}
              className="w-12 h-12 bg-gray-500/10 rounded-full flex items-center justify-center hover:bg-gray-500/20 transition-colors"
            >
              <Mail size={24} className="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;


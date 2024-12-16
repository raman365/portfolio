import React, { useState } from "react";
import { motion } from "framer-motion";
import BCG from "../portfolio/bcg.png";
import Dashboard from "../portfolio/dashboard.png";
import Skipspace from "../portfolio/skipspace.png";
import Gallery from "../portfolio/gallery.png";
import SkipspaceApp from "../portfolio/skipspace-app.png";
import EnRoute from "../portfolio/en-route.png";
import PokemonApi from "../portfolio/pokemon-api.png";
import STM from "../portfolio/shootthemoon.png";
import Biotell from "../portfolio/biotell.png";

const Project = () => {
  const [showMore, setShowMore] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  const projects = [
    { src: BCG, label: "Digital Card Generator", href: "https://raman365.github.io/digital-business-card" },
    { src: Dashboard, label: "Dashboard Template", href: "https://raman365.github.io/mydashboard" },
    { src: Skipspace, label: "Skipspace", href: "https://skipspace-v2.netlify.app" },
    { src: Gallery, label: "Custom Gallery Feature", href: "https://raman365.github.io/gallery" },
    { src: SkipspaceApp, label: "Skipspace App", href: "https://www.skipspace.co.uk/how-it-works" },
    { src: EnRoute, label: "En-Route", href: "https://en-route.com" },
    { src: PokemonApi, label: "Pokemon Api Fetch", href: "https://pokeapi-build-test.netlify.app" },
    { src: STM, label: "Shoot The Moon", href: "https://www.shootthemoon.co.uk" },
    { src: Biotell, label: "Biotell", href: "https://biotell.com" },
  ];

  const initialProjects = projects.slice(0, 6);
  const extraProjects = projects.slice(6);

  return (
    <section
      id="portfolio"
      className="bg-[#323846] text-white py-10 pl-[5%] pr-[5%] md:pl-[10%] md:pr-[10%]"
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants}
      >
        <h1 className="text-4xl font-bold">
          My <span className="text-[#07eeff]">Projects</span>
        </h1>
      </motion.div>

      {/* Project Cards Container */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {initialProjects.map((project, index) => (
          <motion.div
            key={index}
            className="relative group bg-[#20242d] rounded-lg shadow-lg overflow-hidden hover:cursor-pointer"
            variants={cardVariants}
          >
            <a href={project.href} target="_blank" rel="noopener noreferrer">
              <img
                src={project.src}
                alt={project.label}
                className="w-full object-cover brightness-75 group-hover:brightness-50"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00838e] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-center h-full">
                  <p className="text-white text-xl font-bold">{project.label}</p>
                </div>
              </div>
            </a>
          </motion.div>
        ))}

        {showMore &&
          extraProjects.map((project, index) => (
            <motion.div
              key={index + initialProjects.length}
              className="relative group bg-[#20242d] rounded-lg shadow-lg overflow-hidden hover:cursor-pointer"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.src}
                  alt={project.label}
                  className="w-full object-cover brightness-75 group-hover:brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00838e] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-center h-full">
                    <p className="text-white text-xl font-bold">{project.label}</p>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
      </motion.div>

      {/* See More Button */}
      {!showMore && (
        <motion.div
          className="text-center mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={buttonVariants}
        >
          <button
            onClick={() => setShowMore(true)}
            className="px-4 py-2 bg-[#07eeff] text-black font-bold rounded-lg hover:bg-[#05c5d9] transition-colors duration-300"
          >
            See More
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Project;

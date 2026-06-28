import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";
import Typewriter from "./Typewriter";
import { CONTACT } from "../data/site";

// Optimized local copies instead of the 1.8 MB CloudFront PNG:
// WebP keeps the transparent cut-out, JPEG (flattened on the surface
// colour) is the fallback for browsers without WebP.
const portraitWebp = `${import.meta.env.BASE_URL}raman.webp`;
const portraitJpg = `${import.meta.env.BASE_URL}raman.jpg`;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center bg-bg pt-24 pb-20 md:py-0 px-[5%] md:px-[10%]"
    >
      {/* Static gradient mesh background (no per-frame blur compositing) */}
      <div aria-hidden="true" className="absolute inset-0 -z-0">
        <div className="absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-accent/20 blur-[90px]" />
        <div className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-cyan-500/10 blur-[90px]" />
        <div className="absolute bottom-0 left-1/4 w-[22rem] h-[22rem] rounded-full bg-teal-400/10 blur-[90px] hidden md:block" />
        {/* subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 w-full grid md:grid-cols-2 gap-12 items-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Text */}
        <div className="text-center md:text-left">
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent mb-4 px-3 py-1 rounded-full glass"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" />
            Available for work
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            <span className="bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent">
              Raman Oraha
            </span>
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-2xl md:text-3xl font-semibold mt-4 text-gray-300"
          >
            I&apos;m a{" "}
            <span className="text-accent">
              <Typewriter
                text="Web Developer"
                delay={100}
                infinite
                pauseAfterComplete={3000}
              />
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            className="text-base text-gray-400 mt-6 max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            A web developer with 5+ years building fast, responsive, and
            user-friendly websites — from WordPress and Shopify stores to modern
            web and mobile apps with React and React Native.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-8"
          >
            <a
              href="#portfolio"
              className="px-6 py-3 bg-accent text-ink font-semibold rounded-lg hover:bg-accent-dim transition-colors shadow-glow-sm"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 glass text-white font-semibold rounded-lg hover:text-accent transition-colors"
            >
              Get in touch
            </a>
            <div className="flex items-center gap-3 sm:ml-2">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Raman Oraha on LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full glass hover:text-accent transition-colors"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Raman Oraha on GitHub"
                className="w-10 h-10 flex items-center justify-center rounded-full glass hover:text-accent transition-colors"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          variants={item}
          className="flex justify-center md:justify-end"
        >
          <div className="relative md:animate-float">
            {/* glow ring */}
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-accent/40 via-transparent to-accent/20 blur-2xl" />
            {/* gradient border frame */}
            <div className="relative p-[2px] rounded-[2rem] bg-gradient-to-tr from-accent via-accent/30 to-transparent shadow-glow">
              <picture>
                <source srcSet={portraitWebp} type="image/webp" />
                <img
                  src={portraitJpg}
                  alt="Portrait of Raman Oraha"
                  width="320"
                  height="416"
                  fetchPriority="high"
                  decoding="async"
                  className="w-72 h-[24rem] md:w-80 md:h-[26rem] object-cover object-[center_30%] rounded-[1.9rem] bg-surface"
                />
              </picture>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <a
        href="#portfolio"
        aria-label="Scroll to projects"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-gray-500 hover:text-accent transition-colors animate-float"
      >
        <FiArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;

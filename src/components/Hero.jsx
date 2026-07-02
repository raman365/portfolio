import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import Typewriter from "./Typewriter";
import Marquee from "./Marquee";
import { CONTACT } from "../data/site";

// Optimized local copies: WebP keeps the transparent cut-out, JPEG
// (flattened on the surface colour) is the fallback.
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
    <section id="home" className="relative bg-bg">
      <div className="relative overflow-hidden min-h-screen flex items-center pt-24 pb-16 md:py-0 px-[5%] md:px-[10%]">
        {/* Static warm glow + dot grid backdrop (cheap on mobile GPUs) */}
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute -top-40 -right-32 w-[30rem] h-[30rem] rounded-full bg-accent/10 blur-[90px]" />
          <div className="absolute bottom-0 -left-32 w-[26rem] h-[26rem] rounded-full bg-orange-600/10 blur-[90px] hidden md:block" />
          <div
            className="absolute inset-0 opacity-[0.13]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(244,241,234,0.2) 1px, transparent 1px)",
              backgroundSize: "34px 34px",
              maskImage:
                "radial-gradient(ellipse 75% 60% at 50% 40%, black, transparent)",
              WebkitMaskImage:
                "radial-gradient(ellipse 75% 60% at 50% 40%, black, transparent)",
            }}
          />
        </div>

        <motion.div
          className="relative z-10 w-full grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Text */}
          <div className="text-center md:text-left">
            <motion.p
              variants={item}
              className="inline-flex items-center gap-2 text-sm font-medium text-accent mb-6 px-4 py-1.5 rounded-full glass"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" />
              Open to new projects
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.02] text-cream"
            >
              Raman Oraha
            </motion.h1>

            <motion.p
              variants={item}
              className="font-display text-2xl md:text-4xl font-medium mt-5 leading-tight text-cream"
            >
              I build{" "}
              <span className="font-serif italic font-normal text-accent">
                fast, polished
              </span>{" "}
              things for the web.
            </motion.p>

            <motion.h2
              variants={item}
              className="text-lg md:text-xl font-medium mt-4 text-muted"
            >
              <span className="text-cream/80">
                <Typewriter
                  phrases={[
                    "Web Developer",
                    "React & React Native Developer",
                    "WordPress & Shopify Specialist",
                  ]}
                />
              </span>
            </motion.h2>

            <motion.p
              variants={item}
              className="text-base text-muted mt-6 max-w-xl mx-auto md:mx-0 leading-relaxed"
            >
              Seven years of turning ideas into websites and apps people enjoy
              using — from e-commerce stores that convert to cross-platform
              mobile apps. Based in the UK, working with teams and clients
              worldwide.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-9"
            >
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-ink font-semibold rounded-full hover:bg-accent-dim transition-colors shadow-glow-sm"
              >
                See my work
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 glass text-cream font-semibold rounded-full hover:text-accent transition-colors"
              >
                Get in touch
              </a>
              <div className="flex items-center gap-3 sm:ml-1">
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Raman Oraha on LinkedIn"
                  className="w-10 h-10 flex items-center justify-center rounded-full glass hover:text-accent transition-colors"
                >
                  <FaLinkedinIn size={17} />
                </a>
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Raman Oraha on GitHub"
                  className="w-10 h-10 flex items-center justify-center rounded-full glass hover:text-accent transition-colors"
                >
                  <FaGithub size={17} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div variants={item} className="flex justify-center md:justify-end">
            <div className="relative md:animate-float">
              {/* warm glow ring */}
              <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-tr from-accent/35 via-transparent to-orange-500/20 blur-2xl" />
              {/* gradient border frame */}
              <div className="relative p-[2px] rounded-[2.5rem] bg-gradient-to-tr from-accent via-accent/25 to-transparent shadow-glow">
                <picture>
                  <source srcSet={portraitWebp} type="image/webp" />
                  <img
                    src={portraitJpg}
                    alt="Portrait of Raman Oraha"
                    width="320"
                    height="416"
                    fetchPriority="high"
                    decoding="async"
                    className="w-72 h-[24rem] md:w-80 md:h-[26rem] object-cover object-[center_30%] rounded-[2.4rem] bg-surface"
                  />
                </picture>
              </div>
              {/* experience chip */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:-left-10 md:translate-x-0 glass rounded-2xl px-5 py-3 shadow-lg shadow-black/40">
                <p className="font-display text-2xl font-bold text-accent leading-none">
                  7<span className="text-cream">+</span>
                </p>
                <p className="text-xs text-muted mt-1 whitespace-nowrap">
                  years experience
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scrolling tech strip */}
      <Marquee />
    </section>
  );
};

export default Hero;

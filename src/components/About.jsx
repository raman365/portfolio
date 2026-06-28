import React from "react";
import { motion } from "framer-motion";
import Section, { SectionHeading, revealVariants } from "./Section";

const STATS = [
  { value: "5+", label: "Years experience" },
  { value: "20+", label: "Projects shipped" },
  { value: "10+", label: "Happy clients" },
];

const About = () => {
  return (
    <Section id="about" className="bg-surface-2" labelledBy="about-heading">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div variants={revealVariants}>
          <SectionHeading id="about-heading" accent="Me">
            About
          </SectionHeading>
        </motion.div>
        <motion.p
          className="text-gray-400 text-lg leading-relaxed mt-6"
          variants={revealVariants}
        >
          I&apos;m a passionate web developer with 5+ years of experience
          crafting seamless, responsive, and visually engaging websites. I&apos;ve
          collaborated with companies as part of their teams and taken on
          projects independently as a freelancer, delivering tailor-made
          solutions that bring ideas to life — from personal projects to
          e-commerce platforms and corporate sites.
        </motion.p>
        <motion.p className="text-accent mt-4 font-medium" variants={revealVariants}>
          Let&apos;s build something amazing together.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-12"
        variants={revealVariants}
      >
        {STATS.map((s) => (
          <div key={s.label} className="glass rounded-xl py-6 text-center">
            <div className="font-display text-3xl md:text-4xl font-bold text-accent">
              {s.value}
            </div>
            <div className="text-xs md:text-sm text-gray-400 mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>
    </Section>
  );
};

export default About;

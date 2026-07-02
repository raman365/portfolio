import React from "react";
import { motion } from "framer-motion";
import Section, { SectionHeading, revealVariants } from "./Section";

const STATS = [
  { value: "7+", label: "Years experience" },
  { value: "20+", label: "Projects shipped" },
  { value: "10+", label: "Happy clients" },
];

const About = () => {
  return (
    <Section id="about" className="bg-surface" labelledBy="about-heading">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div variants={revealVariants}>
          <SectionHeading id="about-heading" kicker="03 / About" accent="code">
            Behind the
          </SectionHeading>
        </motion.div>
        <motion.p
          className="text-muted text-lg leading-relaxed mt-6"
          variants={revealVariants}
        >
          I&apos;m a web developer with seven years of experience, working both
          inside company teams and independently as a freelancer. I&apos;ve
          built e-commerce stores, corporate sites and cross-platform mobile
          apps, and I care about the details: how fast it loads, how it feels
          to use, and whether it actually does the job it was built for.
        </motion.p>
        <motion.p
          className="font-serif italic text-accent text-xl mt-6"
          variants={revealVariants}
        >
          Let&apos;s build something people remember.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-12"
        variants={revealVariants}
      >
        {STATS.map((s) => (
          <div key={s.label} className="glass rounded-2xl py-6 text-center">
            <div className="font-display text-3xl md:text-4xl font-bold text-accent">
              {s.value}
            </div>
            <div className="text-xs md:text-sm text-muted mt-1">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </Section>
  );
};

export default About;

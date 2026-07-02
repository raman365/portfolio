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
          <SectionHeading id="about-heading" kicker="03 — About" accent="code">
            Behind the
          </SectionHeading>
        </motion.div>
        <motion.p
          className="text-muted text-lg leading-relaxed mt-6"
          variants={revealVariants}
        >
          For the past seven years I&apos;ve been crafting seamless, responsive
          and visually engaging experiences for the web — embedded in company
          teams and independently as a freelancer. From e-commerce stores and
          corporate sites to cross-platform mobile apps, I care about the
          details: how fast it loads, how it feels to use, and whether it
          actually moves the needle for the people who commissioned it.
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

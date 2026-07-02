import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiPostgresql,
  SiMysql,
  SiGithubactions,
  SiJest,
  SiGooglecloud,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import Section, { SectionHeading, revealVariants } from "./Section";

// A devicon CSS class (loaded from CDN) for logos react-icons lacks.
const Devi = ({ icon }) => (
  <i className={`${icon} text-[1.1em]`} aria-hidden="true" />
);

const CATEGORIES = [
  {
    title: "Frontend & Mobile",
    items: [
      { label: "React", icon: <FaReact /> },
      { label: "React Native", icon: <FaReact /> },
      { label: "Next.js", icon: <SiNextdotjs /> },
      { label: "TypeScript", icon: <SiTypescript /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      { label: "Node.js", icon: <FaNodeJs /> },
      { label: "REST APIs", icon: <TbApi /> },
      { label: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    title: "Databases",
    items: [
      { label: "PostgreSQL", icon: <SiPostgresql /> },
      { label: "MySQL", icon: <SiMysql /> },
      { label: "DynamoDB", icon: <FaDatabase /> },
    ],
  },
  {
    title: "DevOps & Tooling",
    items: [
      { label: "Docker", icon: <FaDocker /> },
      { label: "GitHub Actions", icon: <SiGithubactions /> },
      { label: "Git", icon: <FaGitAlt /> },
      { label: "Jest / RTL", icon: <SiJest /> },
    ],
  },
];

const CLOUDS = [
  {
    key: "AWS",
    icon: <FaAws />,
    services: ["S3", "CloudFront", "Lambda", "DynamoDB", "Rekognition"],
  },
  {
    key: "Azure",
    icon: <Devi icon="devicon-azure-plain" />,
    services: ["SQL Database", "Storage Account", "Function App"],
  },
  {
    key: "GCP",
    icon: <SiGooglecloud />,
    services: ["Cloud SQL / Firestore", "Cloud Storage", "Cloud Functions"],
  },
];

function Badge({ icon, label }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm bg-white/5 border border-white/10 text-cream/90 hover:border-accent/50 hover:text-accent transition-colors">
      <span className="text-accent text-base">{icon}</span>
      {label}
    </span>
  );
}

function CategoryCard({ title, items }) {
  return (
    <motion.div
      variants={revealVariants}
      className="glass rounded-xl p-6 hover:shadow-glow-sm transition-shadow"
    >
      <h3 className="font-display font-semibold text-lg mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge key={item.label} icon={item.icon} label={item.label} />
        ))}
      </div>
    </motion.div>
  );
}

function CloudCard() {
  const [active, setActive] = useState("AWS");
  const current = CLOUDS.find((c) => c.key === active);

  return (
    <motion.div
      variants={revealVariants}
      className="glass rounded-xl p-6 hover:shadow-glow-sm transition-shadow md:col-span-2"
    >
      <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
        <h3 className="font-display font-semibold text-lg">Cloud Platforms</h3>
        {/* Tabbed mini-demo: switch provider to see its services */}
        <div
          className="flex gap-1 p-1 rounded-lg bg-white/5"
          role="tablist"
          aria-label="Cloud provider"
        >
          {CLOUDS.map((c) => (
            <button
              key={c.key}
              role="tab"
              aria-selected={active === c.key}
              onClick={() => setActive(c.key)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                active === c.key
                  ? "bg-accent text-ink"
                  : "text-muted hover:text-accent"
              }`}
            >
              <span className="text-base">{c.icon}</span>
              {c.key}
            </button>
          ))}
        </div>
      </div>
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="flex flex-wrap gap-2"
      >
        {current.services.map((s) => (
          <Badge key={s} icon={current.icon} label={s} />
        ))}
      </motion.div>
    </motion.div>
  );
}

const Skills = () => {
  return (
    <Section id="skills" className="bg-bg" labelledBy="skills-heading">
      <motion.div className="text-center mb-10" variants={revealVariants}>
        <SectionHeading
          id="skills-heading"
          kicker="02 / Toolbox"
          accent="work with"
        >
          What I
        </SectionHeading>
        <p className="text-muted mt-4">
          The tools and platforms behind my day-to-day work.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <CategoryCard {...CATEGORIES[0]} />
        <CategoryCard {...CATEGORIES[1]} />
        <CategoryCard {...CATEGORIES[2]} />
        <CategoryCard {...CATEGORIES[3]} />
        <CloudCard />
      </div>
    </Section>
  );
};

export default Skills;

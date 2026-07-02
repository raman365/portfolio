import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Section, { SectionHeading, revealVariants } from "./Section";

const cloudFrontURL = "https://dxvutl5ln4i40.cloudfront.net/";

// NOTE: descriptions + tags below are first-draft guesses from the project
// names/URLs — edit these to match reality.
const PROJECTS = [
  {
    src: `${cloudFrontURL}bcg.png`,
    label: "Digital Card Generator",
    href: "https://raman365.github.io/digital-business-card",
    description: "Build and share a personalised digital business card in seconds.",
    tags: ["React", "JavaScript"],
  },
  {
    src: `${cloudFrontURL}pdg.png`,
    label: "AI Product Description Generator",
    href: "https://product-description-generator-gamma.vercel.app",
    description: "AI tool that writes e-commerce product copy from a few keywords.",
    tags: ["Next.js", "React", "AI"],
  },
  {
    src: `${cloudFrontURL}dashboard.png`,
    label: "Dashboard Template",
    href: "https://raman365.github.io/mydashboard",
    description: "Responsive admin dashboard UI with reusable, themeable components.",
    tags: ["React", "Tailwind CSS"],
  },
  {
    src: `${cloudFrontURL}skipspace.png`,
    label: "Skipspace",
    href: "https://skipspace-v2.netlify.app",
    description: "Booking platform front-end for the Skipspace service.",
    tags: ["React", "Web"],
  },
  {
    src: `${cloudFrontURL}gallery.png`,
    label: "Custom Gallery Feature",
    href: "https://raman365.github.io/gallery",
    description: "Filterable image gallery with smooth lightbox interactions.",
    tags: ["JavaScript", "Web"],
  },
  {
    src: `${cloudFrontURL}skipspace-app.png`,
    label: "Skipspace App",
    href: "https://www.skipspace.co.uk/the-app",
    description: "Cross-platform mobile companion app for the Skipspace service.",
    tags: ["React Native", "Mobile"],
  },
  {
    src: `${cloudFrontURL}en-route.png`,
    label: "En-Route",
    href: "https://en-route.com",
    description: "Corporate marketing website with a custom CMS theme.",
    tags: ["WordPress", "Web"],
  },
  {
    src: `${cloudFrontURL}pokemon-api.png`,
    label: "Pokémon API Fetch",
    href: "https://pokeapi-build-test.netlify.app",
    description: "Pokédex that fetches and renders live data from the PokéAPI.",
    tags: ["React", "REST API"],
  },
  {
    src: `${cloudFrontURL}shootthemoon.png`,
    label: "Shoot The Moon",
    href: "https://www.shootthemoon.co.uk",
    description: "Brand website with bespoke design and CMS integration.",
    tags: ["WordPress", "Web"],
  },
  {
    src: `${cloudFrontURL}biotell.png`,
    label: "Biotell",
    href: "https://biotell.com",
    description: "Corporate website for a life-sciences company.",
    tags: ["WordPress", "Web"],
  },
];

const Project = () => {
  const [active, setActive] = useState("All");

  // Build the filter bar from the tags actually present.
  const tags = useMemo(() => {
    const set = new Set();
    PROJECTS.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return ["All", ...[...set].sort()];
  }, []);

  const visible =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(active));

  return (
    <Section id="portfolio" className="bg-surface" labelledBy="projects-heading">
      <motion.div className="text-center mb-8" variants={revealVariants}>
        <SectionHeading
          id="projects-heading"
          kicker="01 / Selected Work"
          accent="built"
        >
          Things I&apos;ve
        </SectionHeading>
        <p className="text-muted mt-4">
          Client work, products and experiments. Pick a technology to filter.
        </p>
      </motion.div>

      {/* Filter bar */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 mb-10"
        variants={revealVariants}
        role="group"
        aria-label="Filter projects by technology"
      >
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActive(tag)}
            aria-pressed={active === tag}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              active === tag
                ? "bg-accent text-ink"
                : "glass text-muted hover:text-accent"
            }`}
          >
            {tag}
          </button>
        ))}
      </motion.div>

      {/* Cards */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.a
              key={project.label}
              layout
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.label} (opens in a new tab)`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group glass rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow-sm transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.src}
                  alt={`${project.label} screenshot`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-44 object-cover object-top brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                />
                <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-bg/70 flex items-center justify-center text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  <FiArrowUpRight size={16} />
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display font-semibold text-lg text-cream group-hover:text-accent transition-colors">
                  {project.label}
                </h3>
                <p className="text-sm text-muted mt-2 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 text-muted border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
};

export default Project;

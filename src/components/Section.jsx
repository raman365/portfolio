import React from "react";
import { motion } from "framer-motion";

/**
 * Shared section shell: consistent horizontal padding/width, a labelled
 * landmark for screen readers, and a scroll-reveal heading.
 *
 * Pass `id` + `title` (with optional `accent` word) to get the standard
 * "My <accent>Projects</accent>" style heading, or omit them and render
 * a fully custom child.
 */
export const sectionPadding =
  "px-[5%] md:px-[10%] py-16 md:py-24 scroll-mt-20";

export const revealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function SectionHeading({ children, accent, id }) {
  return (
    <h2
      id={id}
      className="font-display text-3xl md:text-4xl font-bold tracking-tight"
    >
      {children} {accent && <span className="text-accent">{accent}</span>}
    </h2>
  );
}

export default function Section({
  id,
  className = "",
  labelledBy,
  children,
}) {
  return (
    <motion.section
      id={id}
      aria-labelledby={labelledBy}
      className={`${sectionPadding} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
    >
      {children}
    </motion.section>
  );
}

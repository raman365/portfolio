import React from "react";
import { motion } from "framer-motion";

/**
 * Shared section shell: consistent horizontal padding/width, a labelled
 * landmark for screen readers, and a scroll-reveal stagger.
 *
 * SectionHeading renders the editorial heading style used across the
 * site: a numbered amber kicker, then a display heading whose `accent`
 * word is set in italic serif.
 */
export const sectionPadding =
  "px-[5%] md:px-[10%] py-16 md:py-24 scroll-mt-20";

export const revealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function SectionHeading({ children, accent, kicker, id }) {
  return (
    <div>
      {kicker && (
        <p className="text-accent text-xs md:text-sm font-medium tracking-[0.25em] uppercase mb-3">
          {kicker}
        </p>
      )}
      <h2
        id={id}
        className="font-display text-3xl md:text-5xl font-bold tracking-tight text-cream"
      >
        {children}{" "}
        {accent && (
          <span className="font-serif italic font-normal text-accent">
            {accent}
          </span>
        )}
      </h2>
    </div>
  );
}

export default function Section({ id, className = "", labelledBy, children }) {
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

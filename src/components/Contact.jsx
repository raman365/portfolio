import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiCalendar } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Section, { SectionHeading, revealVariants } from "./Section";
import { CONTACT } from "../data/site";

const Contact = () => {
  // Direct-contact links (no backend needed — static-host friendly).
  const links = [
    {
      icon: <FiMail />,
      label: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
    {
      icon: <FiPhone />,
      label: "Phone",
      value: CONTACT.phoneDisplay,
      href: `tel:${CONTACT.phone}`,
    },
    {
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      value: "Connect with me",
      href: CONTACT.linkedin,
      external: true,
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "See my code",
      href: CONTACT.github,
      external: true,
    },
  ];

  return (
    <Section id="contact" className="bg-bg" labelledBy="contact-heading">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div variants={revealVariants}>
          <SectionHeading
            id="contact-heading"
            kicker="04 / Contact"
            accent="together"
          >
            Let&apos;s build
          </SectionHeading>
          <p className="text-muted mt-4">
            Got a project in mind, or just want to say hello? My inbox is
            always open.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10"
          variants={revealVariants}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              aria-label={`${link.label}: ${link.value}`}
              className="group glass rounded-2xl p-5 flex items-center gap-4 text-left hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow-sm transition-all"
            >
              <span className="w-11 h-11 shrink-0 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xl group-hover:bg-accent group-hover:text-ink transition-colors">
                {link.icon}
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-muted">{link.label}</span>
                <span className="block font-medium text-cream truncate">
                  {link.value}
                </span>
              </span>
            </a>
          ))}
        </motion.div>

        {/* Optional: set CONTACT.calendly in src/data/site.js to enable. */}
        {CONTACT.calendly && (
          <motion.a
            href={CONTACT.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-accent text-ink font-semibold rounded-full hover:bg-accent-dim transition-colors shadow-glow-sm"
            variants={revealVariants}
          >
            <FiCalendar /> Book a call
          </motion.a>
        )}
      </div>
    </Section>
  );
};

export default Contact;

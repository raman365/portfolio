import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { CONTACT } from "../data/site";

const Footer = () => {
  return (
    <footer className="bg-surface text-muted px-[5%] md:px-[10%] py-8 flex flex-col sm:flex-row gap-4 justify-between items-center border-t border-white/5">
      <p className="text-sm text-center sm:text-left">
        © {new Date().getFullYear()} Raman Oraha. All rights reserved.
      </p>

      <div className="flex items-center gap-3">
        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Raman Oraha on LinkedIn"
          className="w-9 h-9 flex items-center justify-center rounded-full glass hover:text-accent transition-colors"
        >
          <FaLinkedinIn size={15} />
        </a>
        <a
          href={CONTACT.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Raman Oraha on GitHub"
          className="w-9 h-9 flex items-center justify-center rounded-full glass hover:text-accent transition-colors"
        >
          <FaGithub size={15} />
        </a>
        <button
          type="button"
          aria-label="Scroll back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-accent text-ink hover:bg-accent-dim transition-colors"
        >
          <FiArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

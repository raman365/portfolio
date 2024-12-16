import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  // Variants for the fade in/up effect and directional fading
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="about"
      className="bg-[#20242d] text-white py-10 pl-[5%] pr-[5%] md:pl-[10%] md:pr-[10%]"
    >
      {/* Section Title and Description */}
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl font-bold mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          About <span className="text-[#07eeff]">Me</span>
        </motion.h1>
        <motion.p
          className="text-gray-400 text-lg leading-relaxed md:[text-align-last:center] md:text-justify"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          I’m a passionate Front-End Developer with 5+ years of experience
          crafting seamless, responsive, and visually engaging websites. I’ve
          had the privilege of collaborating with companies as part of their
          teams and taking on projects independently as a freelancer,
          delivering tailor-made solutions that bring their visions to life.
          Whether it’s a personal project, an e-commerce platform, or a
          corporate website, I specialise in creating web experiences that are
          not only functional but also leave a lasting impression. <br />
          <br />
          Let’s build something amazing together!
        </motion.p>
      </div>

      {/* Skills and Contact Layout */}
      <motion.div
        className="mt-12 md:max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3, // Adds delay between left and right column animations
            },
          },
        }}
      >
        {/* Skills Section */}
        <motion.div
          className="flex-1"
          variants={fadeInFromLeft}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
            My Skills
          </h2>
          <ul className="text-gray-400 text-center md:text-left space-y-2">
            <li>✔ React & React Native</li>
            <li>✔ HTML, CSS (Tailwind), and JavaScript</li>
            <li>✔ WordPress Development</li>
            <li>✔ GitHub & Version Control</li>
            <li>✔ Google Firebase Integration</li>
            <li>✔ Responsive Web Design</li>
            <li>✔ Cross-Platform Mobile Apps</li>
            <li>✔ Strong Debugging & Problem-Solving Skills</li>
          </ul>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          variants={fadeInFromRight}
        >
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <p className="text-gray-400 mb-2">
            <a
              href="mailto:ramanoraha1@hotmail.co.uk"
              className="text-[#07eeff] hover:underline"
            >
              Ramanoraha1@hotmail.co.uk
            </a>
          </p>
          <p className="text-gray-400 mb-2">
            <a
              href="tel:+447949865915"
              className="text-[#07eeff] hover:underline"
            >
              07949865915
            </a>
          </p>
          <p className="flex justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/raman-oraha-ba3544232"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 flex items-center justify-center bg-[#07eeff] text-[#0B0D17] rounded-full hover:bg-[#07eeffbf]"
            >
              <FaLinkedinIn size={14} /> {/* LinkedIn icon */}
            </a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

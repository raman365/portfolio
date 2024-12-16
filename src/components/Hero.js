import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import raman from "../raman.png";
import Typewriter from "./Typewriter";

const Hero = () => {
  const imageVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center bg-[#20242d] text-white h-[calc(100vh-80px)] pl-[5%] pr-[5%] md:pl-[10%] md:pr-[10%]">
      {/* Text Content */}
      <motion.div
        className="text-center md:text-left md:w-1/2"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <h1 className="text-4xl md:text-5xl font-bold">Hello, It's Me</h1>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white my-2">
          Raman Oraha
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold">
          And I'm a{" "}
          <span className="text-[#07eeff]">
            <Typewriter
              text="Frontend Developer"
              delay={100}
              infinite
              pauseAfterComplete={3000}
            />
          </span>
        </h3>
        <p className="text-sm md:text-base text-gray-400 mt-4">
          As a front-end developer with expertise in React.js and React Native,
          I specialize in building dynamic, responsive, and user-friendly web
          and mobile applications.
        </p>
        <div className="flex justify-center md:justify-start space-x-4 mt-6">
          {/* Social Icons */}
          <a
            href="https://www.linkedin.com/in/raman-oraha-ba3544232"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-[#07eeff] text-[#0B0D17] rounded-full hover:bg-[#07eeffbf] transition"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
        <a href="#portfolio">
          <button className="mt-6 px-6 py-2 bg-[#07eeff] text-[#0B0D17] font-bold rounded hover:bg-[#07eeffbf] transition">
            View portfolio
          </button>
        </a>
      </motion.div>

      {/* Image with Pentagon background */}
      <motion.div
        className="mt-0 md:w-1/2 flex justify-center relative"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        {/* Pentagon Background */}
        <div className="absolute glow md:scale-100 scale-50">
          <div className="w-[20rem] h-[20rem] bg-[#07eeff] z-10 clip-pentagon"></div>
        </div>
        {/* Image */}
        <div className="relative w-[22rem] h-[22rem] z-20 flex justify-center items-center md:scale-100 scale-50">
          <img
            src={raman} // Replace with the actual image path
            alt="Raman Oraha"
            className="w-[19rem] -mt-24 h-[24rem] object-cover clip-bottom-pentagon drop-shadow"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

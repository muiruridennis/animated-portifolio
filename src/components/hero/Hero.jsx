import React from "react";
import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>DENNIS MUIRURI</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer and UI designer
          </motion.h1>

          <motion.div variants={textVariants} className="buttons">
            <a href="#Portfolio">
              <motion.button
                variants={textVariants}
                whileHover={{ scale: 1.2 }}
              >
                See the Latest Works
              </motion.button>
            </a>
            <a href="#Contact">
              <motion.button
                variants={textVariants}
                whileHover={{ scale: 1.2 }}
              >
                Contact Me
              </motion.button>
            </a>
          </motion.div>
          <a href="#About">
            <motion.img
              variants={textVariants}
              animate="scrollButton"
              src="/scroll.png"
              alt="Scroll down"
            />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web Developer | Creative Thinker | UX Enthusiast
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;


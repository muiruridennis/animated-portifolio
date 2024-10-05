// import React from "react";
// import { motion } from "framer-motion";
// import "./about.scss";

// const aboutSliderVariants = {
//   initial: {
//     x: 0,
//   },
//   animate: {
//     x: "-100%",
//     transition: {
//       repeat: Infinity,
//       repeatType: "loop",
//       duration: 15,
//     },
//   },
// };

// const About = () => {
//   return (
//     <motion.div
//       className="about-container"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.6 }}
//       role="main"
//       aria-labelledby="about-me-heading"
//     >
//       {/* Custom Divider */}
//       <div className="custom-divider">
//         <div className="divider-line"></div>
//         <div className="divider-label">About Me</div>
//         <div className="divider-line"></div>
//       </div>

//       {/* Bio Section */}
//       <div className="bio-container">
//         <div className="bio-details">
//           <h3 id="about-me-heading">Fueling Innovation with Code</h3>
//           <p>
//             Hello! 👋 I’m Muiruri, a passionate web developer and UI/UX designer who loves turning ideas into engaging digital experiences. I focus on creating interfaces that are both beautiful and user-friendly.
//           </p>
//           <p>
//             I build dynamic, high-performing platforms designed to increase conversions, reflect your brand, and provide excellent user experiences.
//           </p>
//           <p>
//             Welcome to my digital space, where creativity meets functionality to bring your vision to life.
//           </p>
//           <motion.div
//             className="slidingTextContainer"
//             variants={aboutSliderVariants}
//             initial="initial"
//             animate="animate"
//           >
//             Web Developer | Creative Problem Solver | Lifelong Learner
//           </motion.div>
//           <div className="cta-section">
//             <motion.a
//               href="/contact"
//               className="cta-button"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               aria-label="Contact me to work together"
//             >
//               Let’s Work Together
//             </motion.a>
//           </div>
//         </div>

//         {/* Display Image */}
//         <div className="bio-image">
//           <img
//             className="img"
//             src="/aboutHero.jpg"
//             alt="Muiruri working on a project"
//             loading="lazy"
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default About;
import React from "react";
import { motion } from "framer-motion";
import "./about.scss";

const aboutSliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 15,
    },
  },
};

const About = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      role="main"
      aria-labelledby="about-me-heading"
    >
      {/* Custom Divider */}
      <div className="custom-divider">
        <div className="divider-line"></div>
        <div className="divider-label">About Me</div>
        <div className="divider-line"></div>
      </div>

      {/* Bio Section */}
      <div className="bio-container">
        <div className="bio-details">
          <h3 id="about-me-heading">Fueling Innovation with Code</h3>
          <p>
            Hello! 👋 I'm Dennis Muiruri, a passionate web developer and UI/UX designer who loves turning ideas into engaging digital experiences. I focus on creating interfaces that are both beautiful and user-friendly.
          </p>
          <p>
            I build dynamic, high-performing platforms designed to increase conversions, reflect your brand, and provide excellent user experiences.
          </p>
          <p>
            Welcome to my digital space, where creativity meets functionality to bring your vision to life.
          </p>
          <motion.div
            className="slidingTextContainer"
            variants={aboutSliderVariants}
            initial="initial"
            animate="animate"
          >
            Web Developer | Creative Problem Solver | Lifelong Learner
          </motion.div>
          <div className="cta-section">
            <motion.a
              href="#Contact"
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Contact me to work together"
            >
              Let's Work Together
            </motion.a>
          </div>
        </div>

        {/* Display Image */}
        <div className="bio-image">
          <img
            className="img"
            src="/aboutHero.jpg"
            alt="Muiruri working on a project"
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default About;




import React from "react";
import { motion } from "framer-motion";
import "./about.scss";

const aboutSliderVariants = {
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

const About = () => {
    return (
        <motion.div
            className="about-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
        >
            <div className="custom-divider">
                <div className="divider-line"></div>
                <div className="divider-label">About Me</div>
                <div className="divider-line"></div>
            </div>
            <div className="bio">
                <div className="bio-desc">
                    <h3>Driven by Innovation, Powered by Passion</h3>
                    <p>
                        Hello! 👋 I’m Muiruri, a dedicated web developer and UI/UX designer with a
                        knack for transforming ideas into immersive digital experiences. I’m
                        committed to crafting interfaces that are not only visually appealing but
                        also intuitive and engaging.
                    </p>
                    <p>
                        My work goes beyond creating websites. I build dynamic, high-performing
                        platforms that are meticulously designed to boost conversions, resonate
                        with your brand, and deliver exceptional user experiences.
                    </p>
                    <p>
                        Step into my digital space, where creativity and functionality converge to
                        bring your vision to life.
                    </p>
                    <motion.div
                        className="slidingTextContainer"
                        variants={aboutSliderVariants}
                        initial="initial"
                        animate="animate"
                    >
                        Web Developer | Creative Problem Solver | Lifelong Learner
                    </motion.div>
                </div>

                <div className="display-image">
                    <img
                        className="img"
                        src="/aboutdp2.jpg"
                        alt="Picture of the author"
                        width={700}
                        height={650}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default About;

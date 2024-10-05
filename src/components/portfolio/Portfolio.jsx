import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: 'Opaline - Connecting service providers with consumers',
    description: 'Memories is a social platform where users can create and share their cherished memories with friends and family. It allows users to upload photos, write stories, and connect with others through their shared experiences.',
    liveDemo: 'https://github.com/muiruridennis/MernApp',
    codeRepository: 'https://github.com/muiruridennis/MernApp',
    img: "/opaline.jpg",
  },
  {
    id: 2,

    title: 'FortuneForge - Finance Management System',
    description: 'FortuneForge is a finance management system designed to help users efficiently manage their personal finances. It provides tools for budgeting, expense tracking, investment management, and financial goal setting.',
    liveDemo: 'https://fortuneforge.com',
    codeRepository: 'https://github.com/yourusername/fortuneforge',
    img: "/financeMgt.jpg",
  },
  {
    id: 3,
    title: 'E-Shop - Ecommerce Website',
    description: 'E-Shop is an ecommerce website that offers a wide range of products for online shoppers. Users can browse through various categories, add products to their cart, and make secure online payments.',
    liveDemo: 'https://saleshub.onrender.com/',
    codeRepository: 'https://github.com/muiruridennis/salesmaker',
    img: "/ecom.jpg",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.liveDemo} target="_blank" rel="noopener noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

import React from "react";
import "./testimonials.scss";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Alice Atero",
    role: "CEO, Pasha Innovators",
    testimonial: "Working with Muiruri was a game-changer. His attention to detail and innovative thinking helped bring our project to life.",
    image: "/testimonialone.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Fellin",
    role: "Founder, Creative Studio",
    testimonial: "Muiruri's ability to transform ideas into beautiful, functional designs is remarkable. I highly recommend his services.",
    image: "/testimonialtwo.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Aaron Chege",
    role: "Product Manager, Kivuli Inc.",
    testimonial: "Exceptional work! The e-commerce platform he developed for us exceeded our expectations.",
    image: "/testimonialthree.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>What Clients Say</h2>
      <div className="testimonial-carousel">
        {testimonials.map((item, index) => (
          <motion.div 
            key={item.id} 
            className="testimonial-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <div className="image-wrapper">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="testimonial-content">
              <p>"<span>{item.testimonial}</span>"</p>
              <h4>{item.name}</h4>
              <h5>{item.role}</h5>
              <div className="rating">
                {Array(item.rating).fill(<FaStar color="#FFD700" />)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;


import React from "react";
import "./testimonials.scss";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    name: "Alice Jamy",
    title: "CEO of Creative Co.",
    testimonial: "Dennis's  work transformed our digital presence and increased our conversions significantly!",
    image: "/testimonialone.jpg",
  },
  {
    name: "Ivy Aggeza",
    title: "Marketing Director at Venus Furnitures",
    testimonial: "An exceptional developer! Dennis understood our needs and delivered beyond expectations.",
    image: "/testimonialtwo.jpg",
  },
  {
    name: "Paul Gichia",
    title: "Fund Wallet Credit Limited.",
    testimonial: "Highly recommend Dennis! Their attention to detail and creativity is unmatched.",
    image: "/testimonialthree.jpg",
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-container">
      <h2>What Clients Say</h2>
      <div className="testimonials-list">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            className="testimonial-item"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <img src={testimonial.image} alt={testimonial.name} className="client-image" />
            <p className="testimonial-text">"{testimonial.testimonial}"</p>
            <h4 className="client-name">{testimonial.name}</h4>
            <p className="client-title">{testimonial.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

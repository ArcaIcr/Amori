import React from 'react';
import { motion } from 'framer-motion';

const HeroMessage = ({ message, variants }) => (
  <motion.div 
    className="hero-message"
    variants={variants}
  >
    <p className="love-quote">
      {message}
    </p>
  </motion.div>
);

export default HeroMessage;

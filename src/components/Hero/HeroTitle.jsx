import React from 'react';
import { motion } from 'framer-motion';

const HeroTitle = ({ title, variants }) => (
  <motion.h1 
    className="hero-title"
    variants={variants}
  >
    {title}
  </motion.h1>
);

export default HeroTitle;

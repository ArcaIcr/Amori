import React from 'react';
import { motion } from 'framer-motion';

const HeroSubtitle = ({ subtitle, variants }) => (
  <motion.p 
    className="hero-subtitle"
    variants={variants}
  >
    {subtitle}
  </motion.p>
);

export default HeroSubtitle;

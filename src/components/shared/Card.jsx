import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', onClick, hover = true }) => {
  const baseStyles = 'bg-white rounded-xl shadow-md overflow-hidden text-gray-800';
  
  return (
    <motion.div
      className={`${baseStyles} ${className}`}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Card;
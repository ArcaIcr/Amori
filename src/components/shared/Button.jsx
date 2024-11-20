import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = 'px-6 py-2 rounded-full font-medium transition-all duration-300 ease-in-out';
  
  const variants = {
    primary: 'bg-pink-500 hover:bg-pink-600 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-purple-100 hover:bg-purple-200 text-purple-700',
    outline: 'border-2 border-pink-500 text-pink-500 hover:bg-pink-50'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
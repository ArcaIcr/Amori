import React from 'react';
import { motion } from 'framer-motion';
import Button from '../shared/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HeroActions = ({ variants }) => {
  const handleButtonClick = (message) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  return (
    <motion.div 
      className="hero-actions"
      variants={variants}
    >
      <Button 
        variant="primary"
        onClick={() => {
          document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
          handleButtonClick('Navigating to Our Memories');
        }}
        aria-label="Navigate to Our Memories"
      >
        Our Memories
      </Button>
      <Button 
        variant="outline"
        onClick={() => {
          document.getElementById('message').scrollIntoView({ behavior: 'smooth' });
          handleButtonClick('Reading My Letter');
        }}
        aria-label="Read My Letter"
      >
        Read My Letter
      </Button>
    </motion.div>
  );
};

export default HeroActions;

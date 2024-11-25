import React from 'react';
import { motion } from 'framer-motion';
import './HeroStyles.css';
import SparklesIcon from '../../assets/icons/sparkles.svg';
import HeartIcon from '../../assets/icons/heart.svg';
import HeroTitle from './HeroTitle';
import HeroSubtitle from './HeroSubtitle';
import HeroMessage from './HeroMessage';
import HeroActions from './HeroActions';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const twinkleVariants = {
  initial: {
    opacity: 0.5,
    scale: 0.9
  },
  animate: {
    opacity: [0.5, 1, 0.5],
    scale: [0.9, 1, 0.9],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

const generateRandomPositions = (count) => {
  return Array.from({ length: count }, () => ({
    top: `${Math.random() * 100}vh`,
    left: `${Math.random() * 100}vw`,
    size: `${Math.random() * 20 + 20}px`,
    opacity: Math.random() * 0.5 + 0.5,
    icon: Math.random() > 0.5 ? SparklesIcon : HeartIcon,
  }));
};

const sparkles = generateRandomPositions(10);

const Hero = () => {

  return (
    <motion.section
      className="hero-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="hero-content">
        {sparkles.map((position, index) => (
          <motion.div 
            key={index}
            className="icon-container"
            variants={twinkleVariants}
            initial="initial"
            animate="animate"
            style={{ position: 'absolute', ...position }}
          >
            <motion.img 
              src={position.icon} 
              alt="Decorative Icon" 
              className="decorative-icon"
              style={{ width: position.size, height: position.size, opacity: position.opacity }}
              initial={{ opacity: 0 }}
              animate={{ opacity: position.opacity }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: index * 0.2 }}
            />
          </motion.div>
        ))}
        <HeroTitle title="To My Dearest" variants={itemVariants} />
        <HeroSubtitle subtitle="A digital expression of my love for you" variants={itemVariants} />
        <HeroMessage message="Every moment with you is a moment I treasure" variants={itemVariants} />
        <HeroActions variants={itemVariants} />
      </div>
    </motion.section>
  );
};

export default Hero;
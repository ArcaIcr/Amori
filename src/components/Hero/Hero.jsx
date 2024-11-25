import React from 'react';
import { motion } from 'framer-motion';
import './HeroStyles.css';
import SparklesIcon from '../../assets/icons/sparkles.svg';
import HeartIcon from '../../assets/icons/heart.svg';
import HeroTitle from './HeroTitle';
import HeroSubtitle from './HeroSubtitle';
import HeroMessage from './HeroMessage';
import HeroActions from './HeroActions';

const Hero = () => {

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

  return (
    <motion.section
      className="hero-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="hero-content">
        {sparkles.map((position, index) => (
          <motion.img 
            key={index}
            src={position.icon} 
            alt="Decorative Icon" 
            className="decorative-icon"
            style={{ width: position.size, height: position.size, position: 'absolute', opacity: position.opacity, ...position }}
            initial={{ opacity: 0 }}
            animate={{ opacity: position.opacity }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: index * 0.2 }}
          />
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
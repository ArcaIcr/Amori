import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './InteractiveStorybookStyles.css';

// Import existing images from your project
import Luv2 from '../../assets/images/Luv2.png';
import Assurance from '../../assets/images/Assurance.png';
import SafeSpace from '../../assets/images/SafeSpace.png';
import RandomCalls from '../../assets/images/RandomCalls.png';
import Kalma from '../../assets/images/Kalma.png';
import FallBack from '../../assets/images/fallback-image.png';

const storyModes = {
  memorable: {
    name: 'Most Memorable Moments',
    pages: [
      {
        id: 1,
        title: 'Random Sleep Calls',
        description: 'I love it when we call. Makes me feel safe, feeling your presence even in call',
        image: RandomCalls,
      },
    ]
  },
  emotional: {
    name: 'Emotional Milestones',
    pages: [
      {
        id: 1,
        title: 'Vulnerability',
        description: 'The moment I feel like I can be myself with you.',
        image: Assurance,
      },
      {
        id: 2,
        title: 'Trust',
        description: 'To be honest I am shocked not in a bad way but happy shocked because you defended me even if I am not physically around. Thank you so much, Amori.',
        image: Kalma,
      },
      {
        id: 3,
        title: 'Connection',
        description: 'The starting point of me slowly opening up to you.',
        image: Luv2,
      },
      {
        id: 4,
        title: 'Safe Space',
        description: 'Moment that I really feel our connection. Way too comfortable to your presence that I sometimes crave in a random moment of any time of the day.',
        image: SafeSpace,
      }
    ]
  },
  future: {
    name: 'Dreams and Hopes',
    pages: [
      {
        id: 1,
        title: 'To Determine',
        description: 'Want to build a future with you, honestly.',
        image: FallBack,
      },
    ]
  }
};

const InteractiveStorybook = () => {
  const [currentMode, setCurrentMode] = useState('memorable');
  const [currentPage, setCurrentPage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const currentStory = storyModes[currentMode];

  const pageVariants = {
    initial: { opacity: 0, x: 300 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -300 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % currentStory.pages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + currentStory.pages.length) % currentStory.pages.length);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="interactive-storybook">
      <div className="storybook-mode-selector">
        {Object.keys(storyModes).map((mode) => (
          <motion.button
            key={mode}
            className={`mode-button ${currentMode === mode ? 'active' : ''}`}
            onClick={() => {
              setCurrentMode(mode);
              setCurrentPage(0);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {storyModes[mode].name}
          </motion.button>
        ))}
      </div>

      <div className={`storybook-container ${isZoomed ? 'zoomed' : ''}`}>
        <AnimatePresence initial={false}>
          <motion.div
            key={`${currentMode}-${currentPage}`}
            className="storybook-page"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <div className="image-container">
              <motion.img 
                src={currentStory.pages[currentPage].image} 
                alt={currentStory.pages[currentPage].title}
                className="story-image"
                whileHover={{ scale: 1.05 }}
                onClick={toggleZoom}
              />
              <motion.div 
                className="heart-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                ❤️
              </motion.div>
            </div>
            <div className="story-content">
              <h2>{currentStory.pages[currentPage].title}</h2>
              <p>{currentStory.pages[currentPage].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="story-navigation">
          <motion.button 
            onClick={prevPage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ← Previous
          </motion.button>
          <div className="page-indicator">
            {currentStory.pages.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentPage ? 'active' : ''}`}
                onClick={() => setCurrentPage(index)}
              />
            ))}
          </div>
          <motion.button 
            onClick={nextPage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Next →
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveStorybook;

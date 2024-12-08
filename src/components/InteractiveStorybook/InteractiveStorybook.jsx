import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './InteractiveStorybookStyles.css';

// Import existing images from your project
import FirstAttempt from '../../assets/images/FirstAttempt.png';
import FirstConvo from '../../assets/images/FirstConvo.png';
import FirstPic from '../../assets/images/FirstPic.png';
import Spam from '../../assets/images/Spam.png';
import Luv2 from '../../assets/images/Luv2.png';

const storyModes = {
  chronological: {
    name: 'Chronological Journey',
    pages: [
      {
        id: 1,
        title: 'First Encounter',
        description: 'The moment our paths first crossed, a spark of connection ignited.',
        image: FirstAttempt,
      },
      {
        id: 2,
        title: 'Growing Closer',
        description: 'Conversations that turned into deep connections, laughter that bridged distances.',
        image: FirstConvo,
      },
      {
        id: 3,
        title: 'Our Love Blooms',
        description: 'From hesitant beginnings to a love that feels like home.',
        image: FirstPic,
      }
    ]
  },
  memorable: {
    name: 'Most Memorable Moments',
    pages: [
      {
        id: 1,
        title: 'First Magic Word',
        description: 'When you first said those three magical words that made my heart skip a beat.',
        image: Luv2,
      },
      {
        id: 2,
        title: 'Unexpected Connection',
        description: 'That moment when a simple interaction turned into something extraordinary.',
        image: Spam,
      },
      {
        id: 3,
        title: 'Our First Picture',
        description: 'The first time we captured our connection in a single frame.',
        image: FirstPic,
      }
    ]
  },
  emotional: {
    name: 'Emotional Milestones',
    pages: [
      {
        id: 1,
        title: 'Vulnerability',
        description: 'The moment we truly opened up to each other, beyond surface conversations.',
        image: FirstConvo,
      },
      {
        id: 2,
        title: 'Growing Trust',
        description: 'When we realized we could be completely ourselves with each other.',
        image: FirstAttempt,
      },
      {
        id: 3,
        title: 'Deep Connection',
        description: 'The point where we became not just lovers, but best friends.',
        image: Luv2,
      }
    ]
  },
  future: {
    name: 'Dreams and Hopes',
    pages: [
      {
        id: 1,
        title: 'Our First Anniversary',
        description: 'Celebrating the beautiful journey we\'ve started together.',
        image: FirstPic,
      },
      {
        id: 2,
        title: 'Shared Adventures',
        description: 'Imagining all the incredible memories we\'ll create together.',
        image: FirstConvo,
      },
      {
        id: 3,
        title: 'Endless Love',
        description: 'A future filled with love, understanding, and growth.',
        image: Luv2,
      }
    ]
  }
};

const InteractiveStorybook = () => {
  const [currentMode, setCurrentMode] = useState('chronological');
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

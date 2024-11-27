import React from 'react';
import { motion } from 'framer-motion';
import Card from '../shared/Card';
import './MessagesStyles.css';

const Messages = () => {
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
        duration: 0.8
      }
    }
  };

  return (
    <section id="message" className="messages-section">
      <motion.div
        className="messages-container"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="messages-title font-cursive"
          variants={itemVariants}
        >
          My Heart Speaks
        </motion.h2>

        <motion.div 
          className="letter-container"
          variants={itemVariants}
        >
          <Card className="letter-card">
            <div className="letter-content">
              <p className="dear font-cursive">Dearest Amori,</p>
              <p className="letter-paragraph font-cursive">
                Words can't fully express how much you mean to me, but I'll try my best to put my feelings into words.
              </p>
              <p className="letter-paragraph">
                Every moment with you feels like a gift. Your smile brightens my darkest days, and your love makes my heart feel complete.
              </p>
              <p className="letter-paragraph font-cursive">
                Thank you for being you, for sharing your life with me, and for making every day more beautiful just by being in it.
              </p>
              <div className="letter-closing">
                <p>With all my love,</p>
                <p className="dear font-cursive">Ken</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div 
          className="quotes-container"
          variants={itemVariants}
        >
          {/* Add your favorite quotes or special moments */}
          <div className="quote-card">
            <p className="quote-text">"In your eyes, I found my home. In your heart, I found my love."</p>
          </div>
        </motion.div>

        <div className="emoji-button text-center mt-4">
          <a href="/special-letter" className="text-2xl hover:text-pink-500 transition-colors duration-300">
            💌
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Messages;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './DailyQuoteStyles.css';

const quotes = [
  {
    text: "In your smile, I see something more beautiful than the stars.",
    author: "Beth Revis"
  },
  {
    text: "You're the first and last thing on my mind each and every day.",
    author: "Anonymous"
  },
  {
    text: "Every love story is beautiful, but ours is my favorite.",
    author: "Anonymous"
  },
  {
    text: "I fell in love with the way you fall asleep: slowly, and then all at once.",
    author: "John Green"
  },
  {
    text: "You make my heart smile.",
    author: "Anonymous"
  },
  {
    text: "I love you not only for what you are, but for what I am when I am with you.",
    author: "Roy Croft"
  },
  {
    text: "If I know what love is, it is because of you.",
    author: "Hermann Hesse"
  },
  {
    text: "You are my today and all of my tomorrows.",
    author: "Leo Christopher"
  },
  {
    text: "I love you more than yesterday, but less than tomorrow.",
    author: "Rosemonde Gerard"
  },
  {
    text: "My soul and yours are the same, you appear in me, I in you.",
    author: "Rumi"
  }
];

const DailyQuote = () => {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get today's date as string to use as seed
    const today = new Date().toDateString();
    
    // Use the date string to generate a consistent index for the day
    const seed = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = seed % quotes.length;
    
    setQuote(quotes[index]);
    setIsLoading(false);
  }, []);

  if (isLoading) return null;

  return (
    <section className="daily-quote-section">
      <motion.div 
        className="daily-quote-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="quote-header">
          <h2>Today's Love Note</h2>
          <span className="quote-date">{new Date().toLocaleDateString()}</span>
        </div>
        
        <motion.div 
          className="quote-content"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="quote-marks">❝</div>
          <p className="quote-text">{quote.text}</p>
          <div className="quote-marks closing">❞</div>
          <p className="quote-author">― {quote.author}</p>
        </motion.div>

        <div className="quote-footer">
          <motion.div 
            className="heart-icon"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            💝
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default DailyQuote;

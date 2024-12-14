import React from 'react';
import { motion } from 'framer-motion';
import Card from '../shared/Card';
import { Link } from 'react-router-dom';
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
              I find myself struggling to put into words the depth of gratitude I feel for your presence in my life,
              </p>
              <p className="letter-paragraph">
              but I’ll do my best to try. You have this remarkable way of filling my days with a kind of light and
              </p>
              <p className="letter-paragraph font-cursive">
              warmth I never thought I’d experience again.
              </p>
              <p className="letter-paragraph font-cursive">
              Thank you—for simply existing. You’ve brought back a sense of wonder, joy, and purpose into my
              </p>
              <p className="letter-paragraph font-cursive">
              world. Every moment shared with you feels like a gentle reminder of how beautiful life can be, and
              </p>
              <p className="letter-paragraph font-cursive">
              your love inspires me to embrace it wholeheartedly.
              </p>
              <p className="letter-paragraph font-cursive">
              There are days when the weight of the world feels overwhelming, yet your kindness and strength
              </p>
              <p className="letter-paragraph font-cursive">
              have this uncanny ability to lift that burden. You’ve reignited a spark in me—a desire to live, to
              </p>
              <p className="letter-paragraph font-cursive">
              cherish even the simplest of moments, and to discover the happiness I thought was lost.
              </p>
              <p className="letter-paragraph">
              Your love is like a beacon, guiding me back to myself, to life, and to hope. I am endlessly grateful for
              </p>
              <p className="letter-paragraph">
              the gift of you, for the joy you bring, and for the extraordinary person you are. You’ve reminded me
              </p>
              <p className="letter-paragraph">
              that life isn’t just about surviving—it’s about loving, laughing, and truly living.
              </p>
              <p className="letter-paragraph">
              Thank you for being you. Thank you for loving me. You’ve given me more than I could ever ask for,
              </p>
              <p className="letter-paragraph font-cursive">
              and I cherish you beyond measure.
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
          <Link to="/loading" className="text-2xl hover:text-pink-500 transition-colors duration-300">
            💌
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Messages;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './AnniversaryCountdownStyles.css';

const AnniversaryCountdown = () => {
  const [isOfficialMoment, setIsOfficialMoment] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Load the official moment timestamp from localStorage
  useEffect(() => {
    const savedOfficialMoment = localStorage.getItem('officialMomentTimestamp');
    if (savedOfficialMoment) {
      setIsOfficialMoment(true);
    }
  }, []);

  // Countdown calculation
  useEffect(() => {
    let countdownInterval;
    const officialMomentTimestamp = localStorage.getItem('officialMomentTimestamp');

    if (officialMomentTimestamp) {
      countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = new Date(parseInt(officialMomentTimestamp)).getTime() - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });

        // Stop countdown if it reaches zero
        if (distance < 0) {
          clearInterval(countdownInterval);
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
      }, 1000);
    }

    return () => {
      if (countdownInterval) clearInterval(countdownInterval);
    };
  }, [isOfficialMoment]);

  const handleOfficialMomentClick = () => {
    if (!isOfficialMoment) {
      const currentTimestamp = new Date().getTime();
      localStorage.setItem('officialMomentTimestamp', currentTimestamp.toString());
      setIsOfficialMoment(true);
    }
  };

  const resetOfficialMoment = () => {
    localStorage.removeItem('officialMomentTimestamp');
    setIsOfficialMoment(false);
    setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div 
      className="anniversary-countdown"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="countdown-title">Our Love Journey Countdown</h2>
      <div className="countdown-container">
        {!isOfficialMoment ? (
          <motion.div 
            className="official-moment-prompt"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button 
              className="official-moment-button"
              onClick={handleOfficialMomentClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Make Us Official 💕
            </motion.button>
            <p>Click when you accept and want to start our love journey!</p>
          </motion.div>
        ) : (
          <>
            <h2>Our Love Journey Begins</h2>
            <div className="countdown-grid">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <motion.div 
                  key={unit} 
                  className="countdown-item"
                  variants={itemVariants}
                >
                  <div className="countdown-value">{value}</div>
                  <div className="countdown-unit">{unit}</div>
                </motion.div>
              ))}
            </div>
            <motion.button 
              className="reset-button"
              onClick={resetOfficialMoment}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Reset Countdown
            </motion.button>
          </>
        )}
      </div>
      <motion.p 
        className="countdown-message"
        variants={itemVariants}
      >
        Until our first official anniversary! 💕
      </motion.p>
    </motion.div>
  );
};

export default AnniversaryCountdown;

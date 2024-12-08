import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LoveNotesJarStyles.css';

const initialNotes = {
  love_notes: [
    "You make my heart smile every single day.",
    "I fall in love with you more and more with each passing moment.",
    "Your smile is my favorite view in the world.",
    "Every moment with you feels like a beautiful dream.",
    "You're not just my love, you're my best friend.",
    "I cherish every laugh, every conversation, every memory we share.",
    "Your love gives me strength and hope.",
    "I'm grateful for every single day I get to spend with you.",
    "You're the most beautiful person inside and out.",
    "My love for you grows deeper with each passing day."
  ],
  poems: [
    "In the soft whispers of dawn,\nYour love blooms like a gentle rose,\nSilent, yet profound.",
    "Moonlight cascades softly,\nYour hand in mine, a promise kept,\nHearts beating as one.",
    "Threads of passion weave,\nOur souls dance in harmony,\nLove's eternal song.",
    "Gentle waves of trust,\nCarrying our hopes and dreams,\nInfinite and pure.",
    "Starlight in your eyes,\nReflecting infinite love,\nTimeless, boundless, true."
  ],
  haikus: [
    "Cherry blossoms fall\nYour smile, brighter than springtime\nLove blooms endlessly",
    "Moonlit whispers soft\nTwo hearts beating in rhythm\nEternal embrace",
    "Gentle rain falling\nYour touch, warm like summer sun\nMelting winter's chill",
    "Autumn leaves dancing\nOur love, a vibrant color\nPainting life's canvas",
    "Winter's silent breath\nYour warmth melts the coldest heart\nLove knows no season"
  ],
  tankas: [
    "Soft petals of love\nUnfolding between two souls\nWhispers of passion\nEchoing through endless time\nOur hearts, forever entwined",
    "Moonlight on water\nReflecting our deep connection\nSilent, yet profound\nEvery moment we share speaks\nOf a love beyond words' reach",
    "Gentle winds carry\nMemories of our first touch\nTimeless and tender\nIn the landscape of my heart\nYou bloom like eternal spring",
    "Starlight embraces\nOur love, a celestial dance\nInfinite and pure\nEvery breath, every heartbeat\nSings of our unbroken bond",
    "Autumn leaves falling\nLike promises we whisper\nSoft and passionate\nIn the tapestry of time\nOur love writes its own story"
  ]
};

const LoveNotesJar = () => {
  // Preset password that she needs to guess
  const PRESET_PASSWORD = "firstkiss";

  const [contentType, setContentType] = useState('love_notes');
  const [notes, setNotes] = useState(initialNotes[contentType]);
  const [currentNote, setCurrentNote] = useState(null);
  const [newNote, setNewNote] = useState('');
  const [dailyLimit, setDailyLimit] = useState(10);
  const [isPasswordMode, setIsPasswordMode] = useState(false);
  const [isResetPasswordMode, setIsResetPasswordMode] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordAttempts, setPasswordAttempts] = useState(0);
  const [lastResetDate, setLastResetDate] = useState(null);

  // Load state from localStorage on component mount
  useEffect(() => {
    const savedState = localStorage.getItem('loveNotesJarState');
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      const today = new Date().toDateString();
      
      // Check if it's a new day since last reset
      if (!parsedState.lastResetDate || parsedState.lastResetDate !== today) {
        // Automatically reset if it's a new day
        setDailyLimit(10);
        setLastResetDate(today);
        localStorage.setItem('loveNotesJarState', JSON.stringify({
          ...parsedState,
          dailyLimit: 10,
          lastResetDate: today
        }));
      } else {
        // Maintain existing state
        setDailyLimit(parsedState.dailyLimit);
        setLastResetDate(parsedState.lastResetDate);
      }
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    const today = new Date().toDateString();
    const savedState = localStorage.getItem('loveNotesJarState');
    const parsedState = savedState ? JSON.parse(savedState) : {};

    localStorage.setItem('loveNotesJarState', JSON.stringify({
      ...parsedState,
      dailyLimit,
      lastResetDate: lastResetDate || today
    }));
  }, [dailyLimit, lastResetDate]);

  const pullRandomNote = () => {
    if (notes.length > 0 && dailyLimit > 0) {
      const randomIndex = Math.floor(Math.random() * notes.length);
      const selectedNote = notes[randomIndex];
      setCurrentNote(selectedNote);
      
      // Remove the selected note from the array
      setNotes(notes.filter((_, index) => index !== randomIndex));
      setDailyLimit(prev => prev - 1);
    } else if (dailyLimit <= 0 && !isPasswordMode) {
      setIsPasswordMode(true);
    }
  };

  const addNewNote = (e) => {
    e.preventDefault();
    if (newNote.trim()) {
      setNotes([...notes, newNote.trim()]);
      setNewNote('');
    }
  };

  const resetJar = () => {
    const today = new Date().toDateString();
    
    // If it's the same day, prompt for password reset
    if (lastResetDate === today) {
      setIsResetPasswordMode(true);
    } else {
      // Automatically reset if it's a new day
      setNotes(initialNotes[contentType]);
      setCurrentNote(null);
      setDailyLimit(10);
      setIsPasswordMode(false);
      setPasswordAttempts(0);
      setLastResetDate(today);
    }
  };

  const handleResetPasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInput.toLowerCase().trim() === PRESET_PASSWORD) {
      const today = new Date().toDateString();
      setNotes(initialNotes[contentType]);
      setCurrentNote(null);
      setDailyLimit(10);
      setIsPasswordMode(false);
      setIsResetPasswordMode(false);
      setPasswordAttempts(0);
      setLastResetDate(today);
      setPasswordInput('');
    } else {
      setPasswordAttempts(prev => prev + 1);
      
      // Add increasing difficulty/hints
      switch(passwordAttempts) {
        case 0:
          alert('Incorrect password. Try again! Hint: It was a magical moment.');
          break;
        case 1:
          alert('Still incorrect. Think about our first special moment.');
          break;
        case 2:
          alert('Getting warmer... Remember our first intimate moment.');
          break;
        default:
          alert('Password is related to our first kiss. Think carefully!');
      }
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInput.toLowerCase().trim() === PRESET_PASSWORD) {
      setIsPasswordMode(false);
      setDailyLimit(10);
      setPasswordAttempts(0);
    } else {
      setPasswordAttempts(prev => prev + 1);
      
      // Add increasing difficulty/hints
      switch(passwordAttempts) {
        case 0:
          alert('Incorrect password. Try again! Hint: It was a magical moment.');
          break;
        case 1:
          alert('Still incorrect. Think about our first special moment.');
          break;
        case 2:
          alert('Getting warmer... Remember our first intimate moment.');
          break;
        default:
          alert('Password is related to our first kiss. Think carefully!');
      }
    }
    setPasswordInput('');
  };

  return (
    <div className="love-notes-jar">
      <div className="jar-container">
        <div className="content-type-selector">
          {Object.keys(initialNotes).map((type) => (
            <motion.button
              key={type}
              className={`content-type-button ${contentType === type ? 'active' : ''}`}
              onClick={() => {
                setContentType(type);
                setNotes(initialNotes[type]);
                setCurrentNote(null);
                setDailyLimit(10);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {type.replace('_', ' ').toUpperCase()}
            </motion.button>
          ))}
        </div>

        <motion.div 
          className="love-jar"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="jar-lid"></div>
          <div className="jar-body">
            <div className="notes-count">{notes.length} {contentType.replace('_', ' ')}</div>
          </div>
        </motion.div>

        {isResetPasswordMode ? (
          <form onSubmit={handleResetPasswordSubmit} className="password-form">
            <input 
              type="password" 
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Enter password to reset today"
            />
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Reset
            </motion.button>
          </form>
        ) : isPasswordMode ? (
          <form onSubmit={handlePasswordSubmit} className="password-form">
            <input 
              type="password" 
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Enter secret password"
            />
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Unlock
            </motion.button>
          </form>
        ) : (
          <>
            <div className="jar-actions">
              <motion.button 
                onClick={pullRandomNote}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={notes.length === 0 || dailyLimit === 0}
              >
                Pull a {contentType.replace('_', ' ').slice(0, -1)}
              </motion.button>
              <motion.button 
                onClick={resetJar}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Reset Jar
              </motion.button>
              <div className="daily-limit">
                Daily Pulls Left: {dailyLimit}
              </div>
            </div>

            <form onSubmit={addNewNote} className="add-note-form">
              <input 
                type="text" 
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder={`Write a new ${contentType.replace('_', ' ').slice(0, -1)}...`}
                maxLength={200}
              />
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Add {contentType.replace('_', ' ').slice(0, -1)}
              </motion.button>
            </form>
          </>
        )}

        <AnimatePresence>
          {currentNote && (
            <motion.div 
              className="current-note"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <p>"{currentNote}"</p>
              <motion.button 
                onClick={() => setCurrentNote(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Close
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LoveNotesJar;

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero/Hero';
import Gallery from './components/Gallery/Gallery';
import Messages from './components/Messages/Messages';
import Timeline from './components/Timeline/Timeline';
import FavoritesAndPersonalities from "./components/Favorites/FavoritesAndPersonalities";
import AuthorSection from "./components/Author/AuthorSection";
import './App.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      toast.success('Music is now playing.', {
        position: 'bottom-right',
        autoClose: 3000,
      });
    } else {
      audioRef.current.pause();
      toast.info('Music is paused.', {
        position: 'bottom-right',
        autoClose: 3000,
      });
    }
  };

  const favorites = ['Chocolate', 'Reading', 'Traveling']; // Example favorites
  const personalities = ['Friendly', 'Creative', 'Adventurous']; // Example personalities

  return (
    <AnimatePresence mode='wait'>
      {isLoading ? (
        <motion.div
          key="loader"
          className="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="heart-loader">❤️</div>
          <p>Loading our love story...</p>
        </motion.div>
      ) : (
        <motion.main
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="main-container"
        >
          <div className="content-wrapper">
            <Hero />
            <Gallery />
            <Timeline />
            <FavoritesAndPersonalities favorites={favorites} personalities={personalities} />
            <Messages />
            <AuthorSection />
          </div>
          
          {/* Floating Music Player */}
          <div className="music-player">
            <button 
              onClick={toggleMusic}
              aria-label="Toggle Music"
            >
              🎵
            </button>
            <audio ref={audioRef} loop>
              <source src="/BrunoMars.mp3" type="audio/mpeg" />
            </audio>
          </div>
          <ToastContainer />
        </motion.main>
      )}
    </AnimatePresence>
  );
}

export default App;
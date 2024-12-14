import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero/Hero';
import Gallery from './components/Gallery/Gallery';
import Messages from './components/Messages/Messages';
import Timeline from './components/Timeline/Timeline';
import FavoritesAndPersonalities from "./components/Favorites/FavoritesAndPersonalities";
import AuthorSection from "./components/Author/AuthorSection";
import SpecialLetter from './components/SpecialLetter/SpecialLetter';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Particles from './components/shared/Particles';
import './styles/styles/particles.css';
import DailyQuote from './components/DailyQuote/DailyQuote';
import AnniversaryCountdown from './components/AnniversaryCountdown/AnniversaryCountdown';
import InteractiveStorybook from './components/InteractiveStorybook/InteractiveStorybook';
import LoveNotesJar from './components/LoveNotesJar/LoveNotesJar';

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

  const favorites = ['Head Pats & Back Scratches', 'Cold Baths & Cold Weather', 'Sinigang', 'Bruno Mars']; // Example favorites
  const personalities = ['Spontaneous if not Lazy', 'Strong Willed', 'Weird[Im into it <3]', 'Super Understanding']; // Example personalities

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/special-letter" element={<SpecialLetter />} />
        <Route path="/loading" element={<LoadingScreen />} />
        <Route path="/" element={
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
                <p>Loading my love letter...</p>
              </motion.div>
            ) : (
              <div className="main-container">
                <Particles />
                <motion.main
                  key="content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="content-wrapper">
                    <Hero toggleMusic={toggleMusic} />
                    <DailyQuote />
                    <Gallery />
                    <Timeline />
                    <AnniversaryCountdown />
                    <InteractiveStorybook />
                    <LoveNotesJar />
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
              </div>
            )}
          </AnimatePresence>
        } />
      </Routes>
    </Router>
  );
}

export default App;
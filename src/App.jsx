import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero/Hero'
import Gallery from './components/Gallery/Gallery'
import Messages from './components/Messages/Messages'
import Timeline from './components/Timeline/Timeline'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
            <Messages />
          </div>
          
          {/* Floating Music Player */}
          <div className="music-player">
            <button 
              onClick={() => {
                const audio = document.getElementById('background-music');
                if (audio.paused) {
                  audio.play();
                } else {
                  audio.pause();
                }
              }}
              aria-label="Toggle Music"
            >
              🎵
            </button>
            <audio id="background-music" loop>
              <source src="/path-to-your-music.mp3" type="audio/mpeg" />
            </audio>
          </div>
        </motion.main>
      )}
    </AnimatePresence>
  )
}

export default App
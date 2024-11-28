import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';

const LoadingScreen = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        navigate('/special-letter');
      }, 1000); // 1-second fade-out duration
    }, 3000); // 3-second display duration

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={`loading-screen flex flex-col justify-center items-center h-screen bg-gradient-to-br from-violet-500 via-lilac-400 to-lavender-300 transition-opacity duration-1000 ease-in-out ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <Confetti />
      <h1 className="text-4xl font-extrabold text-center text-white mb-6 animate-pulse">You've found me!</h1>
      <p className="text-lg text-white text-center animate-fadeIn delay-500">Get ready for something special...</p>
    </div>
  );
};

export default LoadingScreen;

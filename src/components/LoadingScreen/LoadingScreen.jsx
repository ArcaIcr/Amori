import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';

const LoadingScreen = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === 'mamatay') { // Replace 'correctPassword' with the actual password
      setFadeOut(true);
      setTimeout(() => {
        navigate('/special-letter');
      }, 1000); // 1-second fade-out duration
    } else {
      setError('Incorrect password, please try again.');
    }
  };

  return (
    <div className={`loading-screen flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-500 via-lilac-400 to-lavender-300 transition-opacity duration-1000 ease-in-out ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <Confetti width={windowDimensions.width} height={windowDimensions.height} />
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-white mb-6 animate-pulse">You've found me!</h1>
      <form onSubmit={handlePasswordSubmit} className="flex flex-col items-center w-full max-w-xs">
        <input
          type="password"
          placeholder="Enter the password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 rounded mb-4 w-full"
        />
        <button type="submit" className="bg-white text-violet-500 font-bold py-2 px-4 rounded hover:bg-violet-500 hover:text-white transition-colors duration-300 w-full">
          Submit
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <p className="text-sm sm:text-base lg:text-lg text-white text-center animate-fadeIn delay-500">Hint: Daily used na word. [lowercase lahat, 7 letters]</p>
    </div>
  );
};

export default LoadingScreen;

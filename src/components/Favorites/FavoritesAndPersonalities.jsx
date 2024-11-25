import React from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';

const FavoritesAndPersonalities = ({ favorites, personalities }) => {
  return (
    <section className="favorites-section p-6 bg-gradient-to-br from-violet-500 via-lilac-400 to-lavender-300 rounded-lg shadow-md">
      <h2 className="text-3xl font-extrabold mb-6 text-violet-700">Favorites & Personalities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-lilac-600">Favorites</h3>
          <ul className="list-none pl-0">
            {favorites.map((favorite, index) => (
              <li 
                key={index} 
                className="flex items-center mb-3 transition-transform transform hover:scale-105 hover:bg-lavender-100 p-2 rounded-lg border-2 border-transparent hover:border-gradient-to-r from-violet-400 to-lilac-500"
              >
                <FaStar className="text-lavender-500 mr-2 animate-bounce" />
                <span className="text-lg text-gray-700 hover:text-shadow-md">{favorite}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-lilac-600">Personalities</h3>
          <ul className="list-none pl-0">
            {personalities.map((personality, index) => (
              <li 
                key={index} 
                className="flex items-center mb-3 transition-transform transform hover:scale-105 hover:bg-lavender-100 p-2 rounded-lg border-2 border-transparent hover:border-gradient-to-r from-violet-400 to-lilac-500"
              >
                <FaHeart className="text-violet-500 mr-2 animate-bounce" />
                <span className="text-lg text-gray-700 hover:text-shadow-md">{personality}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FavoritesAndPersonalities;

import React from 'react';
import Author from '../../assets/images/fallback-image.png';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const AuthorSection = () => {
  return (
    <section className="author-section p-6 bg-gradient-to-br from-sky-500 via-purple-500 to-black rounded-lg shadow-lg mt-8">
      <div className="flex flex-col items-center">
        <img 
          src={Author}
          alt="Author" 
          className="w-32 h-32 rounded-full mb-4 border-4 border-gradient-to-r from-pink-500 to-purple-500 animate-border"
        />
        <h2 className="text-2xl font-bold text-sky-700 mb-2 hover:text-purple-700">Archia</h2>
        <p className="text-center text-gray-300 mb-4">
          Hi! I'm Ken, the creator of this web application. I hope it brings joy and warmth to your heart.
        </p>
        <p className="text-center text-gray-400 text-sm">
          Feel free to let me know what you think!
        </p>
        <div className="flex space-x-4 mt-4">
          <a href="https://www.facebook.com/ProCast2/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-sky-600 text-2xl hover:text-purple-600 transform hover:scale-110 hover:rotate-6 transition-transform duration-300" />
          </a>
          <a href="https://www.instagram.com/mkoht_4/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-sky-500 text-2xl hover:text-purple-500 transform hover:scale-110 hover:rotate-6 transition-transform duration-300" />
          </a>
          <a href="https://www.tiktok.com/@m_kaido3" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="text-black text-2xl hover:text-gray-700 transform hover:scale-110 hover:rotate-6 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;

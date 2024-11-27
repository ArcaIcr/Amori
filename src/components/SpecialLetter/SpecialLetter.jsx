import React from 'react';

const SpecialLetter = () => {
  return (
    <div className="special-letter p-6 bg-gradient-to-br from-violet-500 via-lilac-400 to-lavender-300 rounded-lg shadow-md max-w-2xl mx-auto mt-10">
      <h1 className="text-4xl font-extrabold text-center text-violet-900 mb-6">A Special Request</h1>
      <p className="text-lg text-violet-900 text-center">
        Dearest Amori,
      </p>
      <p className="text-lg text-violet-900 text-center my-4">
        As I write this, my heart is filled with hope and excitement. I humbly ask for the opportunity to court you, to show you the depths of my affection and admiration.
      </p>
      <p className="text-lg text-violet-900 text-center">
        Yours truly,
      </p>
      <p className="text-lg text-violet-900 text-center mt-2">
        Ken
      </p>
      <div className="text-center mt-6">
        <a href="/" className="bg-white text-violet-500 font-bold py-2 px-4 rounded hover:bg-violet-500 hover:text-white transition-colors duration-300">
          Back to Main
        </a>
      </div>
    </div>
  );
};

export default SpecialLetter;

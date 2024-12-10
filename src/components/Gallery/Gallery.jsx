import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PhotoCard from './PhotoCard';
import './GalleryStyles.css';
import BabyAmori from '../../assets/images/BabyAmori.png';
import CutieAmori1 from '../../assets/images/CutieAmori1.png';
import Amori from '../../assets/images/Amori.png';
import Fav from '../../assets/images/Fav.png';
import fallbackImage from '../../assets/images/fallback-image.png';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // You can add your photos here
  const photos = [
    {
      id: 1,
      src: BabyAmori,
      caption: 'Cutest Pic Ever',
      date: 'Remember when you send me this'
    },
    {
      id: 2,
      src: CutieAmori1,
      caption: 'One of my favorite pictures',
      date: 'Remember when you send me this'
    },
    {
      id: 3,
      src: Amori,
      caption: 'Definitely my favorite',
      date: 'Remember when you send me this'
    },
    // Add more photos here
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="gallery" className="gallery-section">
      <motion.div
        className="gallery-container"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="gallery-title text-violet-DEFAULT"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          You that I find Most Pretty
        </motion.h2>

        <div className="gallery-grid bg-lilac-light">
          {photos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              onClick={() => setSelectedImage(photo)}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="modal-content"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <img src={selectedImage.src} alt={selectedImage.caption} onError={(e) => e.target.src = fallbackImage} />
                <div className="modal-caption">
                  <h3>{selectedImage.caption}</h3>
                  <p>{selectedImage.date}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Gallery;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PhotoCard from './PhotoCard';
import './GalleryStyles.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // You can add your photos here
  const photos = [
    {
      id: 1,
      src: '/path-to-your-image-1.jpg',
      caption: 'Our First Date',
      date: 'Remember when...'
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
          className="gallery-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Beautiful Moments
        </motion.h2>

        <div className="gallery-grid">
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
                <img src={selectedImage.src} alt={selectedImage.caption} />
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
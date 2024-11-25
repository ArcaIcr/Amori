import React from 'react';
import { motion } from 'framer-motion';
import Card from '../shared/Card';

const PhotoCard = ({ photo, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="photo-card-container"
    >
      <Card 
        className="photo-card" 
        onClick={onClick}
        hover={true}
      >
        <div className="photo-content">
          <img 
            src={photo.src} 
            alt={photo.caption || 'Photo'} 
            className="photo-image"
            loading="lazy"  
            onError={(e) => e.target.src = 'fallback-image.png'} 
          />
          <div className="photo-overlay">
            <h3 className="photo-caption">{photo.caption}</h3>
            <p className="photo-date">{photo.date}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default PhotoCard;
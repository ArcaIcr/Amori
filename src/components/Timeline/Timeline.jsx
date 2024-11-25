import React from 'react';
import { motion } from 'framer-motion';
import './TimelineStyles.css';
import FallbackImage from '../../assets/images/fallback-image.png';

const Timeline = () => {
  // Add your special moments here
  const events = [
    {
      id: 1,
      date: 'The Day We Met',
      title: 'Our First Hello',
      description: 'The moment that changed everything...',
      image: FallbackImage, // Use fallback image
    },
    {
      id: 2,
      date: 'First Date',
      title: 'Beginning of Us',
      description: 'A magical evening that I\'ll, never forget...',
      image: FallbackImage, // Use fallback image
    },
    {
      id: 3,
      date: 'First Vacation',
      title: 'Memorable Trip',
      description: 'Our first adventure together...',
      image: FallbackImage, // Use fallback image
    },
    // Add more events here
  ];

  return (
    <section id="timeline" className="timeline-section">
      <motion.div
        className="timeline-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="timeline-title text-fuchsia-DEFAULT"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Timeline of Events
        </motion.h2>

        <div className="timeline">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className={'timeline-event ' + (index % 2 === 0 ? 'left' : 'right')}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-content bg-violet-light">
                <div className="timeline-marker" />
                <div className="timeline-event-content">
                  <img src={event.image} alt={event.title} className="event-image" />
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-date">{event.date}</p>
                  <p className="event-description">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="timeline-end">
          <motion.div
            className="heart-marker"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            ❤️
          </motion.div>
          <motion.p
            className="timeline-end-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Hopefully our story continues
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Timeline;
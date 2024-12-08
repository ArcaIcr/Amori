import React, { useEffect } from 'react';

const Particles = () => {
  useEffect(() => {
    const createParticle = (x, y) => {
      const particle = document.createElement('div');
      // Randomly choose between regular particle and heart
      particle.className = Math.random() > 0.5 ? 'particle' : 'particle heart';
      
      // Larger size between 10-20px
      const size = Math.random() * 10 + 10;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Add some random offset to make it more spread out
      const offsetX = (Math.random() - 0.5) * 20;
      const offsetY = (Math.random() - 0.5) * 20;
      particle.style.left = `${x + offsetX}px`;
      particle.style.top = `${y + offsetY}px`;
      
      // More dramatic movement
      const destinationX = x + (Math.random() - 0.5) * 300;
      const destinationY = y - Math.random() * 300;
      
      document.body.appendChild(particle);
      
      const animation = particle.animate([
        {
          transform: `translate(0, 0) rotate(0deg) scale(1)`,
          opacity: 1
        },
        {
          transform: `translate(${destinationX - x}px, ${destinationY - y}px) rotate(360deg) scale(0)`,
          opacity: 0
        }
      ], {
        duration: 1500 + Math.random() * 1000,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        delay: Math.random() * 100
      });
      
      animation.onfinish = () => {
        particle.remove();
      };
    };

    const handleMouseMove = (e) => {
      // Create particles more frequently (30% chance)
      if (Math.random() < 0.3) {
        // Create multiple particles per movement
        for (let i = 0; i < 3; i++) {
          createParticle(e.clientX, e.clientY);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
};

export default Particles;

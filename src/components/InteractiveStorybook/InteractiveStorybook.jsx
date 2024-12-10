import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './InteractiveStorybookStyles.css';

// Import existing images from your project
import FirstAttempt from '../../assets/images/FirstAttempt.png';
import Spam from '../../assets/images/Spam.png';
import Spam1 from '../../assets/images/Spam1.png';
import FirstConvo from '../../assets/images/FirstConvo.png';
import AttemptConfession from '../../assets/images/AttemptConfession.png';
import Pupuyat from '../../assets/images/Pupuyat.png';
import MissU from '../../assets/images/MissU.png';
import Tinulugan from '../../assets/images/Tinulugan.png';
import Kisscillin from '../../assets/images/Kisscillin.png';
import Rap from '../../assets/images/Rap.png';
import FirstPic from '../../assets/images/FirstPic.png';
import AttemptPuyat from '../../assets/images/AttemptPuyat.png';
import FirstVid from '../../assets/images/FirstVid.png';
import Luv2 from '../../assets/images/Luv2.png';
import FirstCall from '../../assets/images/FirstCall.png';
import RecordCall from '../../assets/images/RecordCall.png';
import Lambing from '../../assets/images/Lambing.png';
import MissUtoo from '../../assets/images/MissUtoo.png';
import Assurance from '../../assets/images/Assurance.png';
import SafeSpace from '../../assets/images/SafeSpace.png';
import RandomCalls from '../../assets/images/RandomCalls.png';
import Kalma from '../../assets/images/Kalma.png';
import FallBack from '../../assets/images/fallback-image.png';

const storyModes = {
  chronological: {
    name: 'Chronological Journey',
    pages: [
      {
        id: 1,
      date: 'August 5, 2024',
      year: 2024,
      title: 'My First Attempt to talk to you',
      description: "I've been like thinking about this a million times how to approach you without being awkward or weirdo. Welp I've turned one apprarently. Then later on I just got inboxed HAHAHHAHA, well at least I've tried.",
      image: FirstAttempt, 
    },
    {
      id: 2,
      date: 'August 10, 2024',
      year: 2024,
      title: 'IDK, but this made my whole month',
      description: 'My pathetic little shit ahh been like rolling at the floor seeing this. HAHHAHAHH kilig na kilig ako that time pagkakita ko nito. "WHAAAAAATTT", my initial response. Ikaw lagi inaabang ko sa story ko [Wala ka kasi pake sa mga posts ko]',
      image: Spam,
    },
    {
      id: 3,
      date: 'August 11, 2024',
      year: 2024,
      title: 'IDK, sinave ko lang HAHAHA',
      description: 'Natawa ako that time kasi like feel ko namisclick ka lang or something. I did return the energy though, nagspam ako lahat reacts HAHAHA',
      image: Spam1, 
    },
    {
      id: 4,
      date: 'August 23, 2024',
      year: 2024,
      title: 'First Conversation',
      description: 'Wow, nakagraduate sa react lang tas isang araw overthink how to talk to you. Kaso putol-putol nga lang kasi di inexpect na ganito HAHHAHAHA[Unprepared ako e]',
      image: FirstConvo,
    },
    {
      id: 5,
      date: 'August 22, 2024',
      year: 2024,
      title: 'Initial Attempt Confession',
      description: 'Eto dapat pangfirst move ko e kaso naalala ko common na kaya hanap ako new way[HAHAHHAHA well wala e lala talaga hay, bagal ko pero look at kung saan na ako]',
      image: AttemptConfession,
    },
    {
      id: 6,
      date: 'September 26, 2024',
      year: 2024,
      title: 'Initial Attempt na Mag-puyat',
      description: 'You starting to adapt sakit ko which is magpuyat for no reason. Still guilty to like sira your sleep schedule.',
      image: Pupuyat,
    },
    {
      id: 7,
      date: 'October 4, 2024',
      year: 2024,
      title: 'HAAAAYYYYY',
      description: 'Unang sabi mo nitong magic word na ito. Made my fucking month HAHAHH. Been blushing like a tomato or some shi. Sobrang hyper ko nitong araw na ito.',
      image: MissU,
    },
    {
      id: 8,
      date: 'October 10, 2024',
      year: 2024,
      title: 'First Tinulugan',
      description: "After this night tuloy-tuloy na akong tinutulogan, hayy. I don't complain kasi understandable baby ",
      image: Tinulugan,
    },
    {
      id: 9,
      date: 'October 11, 2024',
      year: 2024,
      title: 'Kisscillin',
      description: 'HAHAHAHHAHHAHAHA my attempt na manghingi. Lala ko amp pero hehehe busog lusog ngayon <3',
      image: Kisscillin, 
    },
    {
      id: 10,
      date: 'October 11, 2024',
      year: 2024,
      title: 'Rap',
      description: 'Sarap Incident, IKYK.',
      image: Rap, 
    },
    {
      id: 11,
      date: 'October 11, 2024',
      year: 2024,
      title: 'First Pic',
      description: 'First Pic of youuuuu, Syempre auto save sakin yan! One of my favorite. :3',
      image: FirstPic, 
    }, 
    {
      id: 12,
      date: 'October 11, 2024',
      year: 2024,
      title: 'Attempt Puyat',
      description: 'Attempt Puyat ni Ms. Amori HWAHAHAHAHHA. Wala pa din talaga sa system.',
      image: AttemptPuyat,
    },
    {
      id: 13,
      date: 'October 11, 2024',
      year: 2024,
      title: 'First Vid',
      description: 'First Vid of youuuuu, Syempre auto save sakin yan! :3',
      image: FirstVid, 
    },
    {
      id: 14,
      date: 'October 14, 2024',
      year: 2024,
      title: 'Luv2',
      description: 'Hyper nanaman ako this day kasi sinabi magic word. [Casual lang na pagkasabi but great impact sakin hay, too pathetic talaga ako]',
      image: Luv2,
    },
    {
      id: 15,
      date: 'November 1, 2024',
      year: 2024,
      title: 'First Call',
      description: 'First Call natin, kinabahan ako baka ano like yung boses ko at tsaka the way ako magspeak Tagalog nor English.',
      image: FirstCall, 
    },
    {
      id: 16,
      date: 'November 16, 2024',
      year: 2024,
      title: 'My Longest Call',
      description: "Didn't really expect this. Normally for me, longest call ko is like around 3-5 hours max. Because nauubosan ako words, mas fluent ako sa chat kesa call ehe.",
      image: RecordCall,  
    },
    {
      id: 17,
      title: 'Lambing',
      description: 'Okay Amori, ganyan pala kapag gusto manlambing. Ipapabato HAHHAHAHHAA cutieee[Sana malambing po hehe :3]',
      image: Lambing,  
    },
    {
      id: 18,
      title: 'Miss U Too',
      description: 'Magic word again, MISS UUU DINN DAMN MUCHHHHHH',
      image: MissUtoo,
    }
    ]
  },
  memorable: {
    name: 'Most Memorable Moments',
    pages: [
      {
        id: 1,
        title: 'Random Sleep Calls',
        description: 'I love it when we call. Makes me feel safe, feeling your presence even in call',
        image: RandomCalls,
      },
    ]
  },
  emotional: {
    name: 'Emotional Milestones',
    pages: [
      {
        id: 1,
        title: 'Vulnerability',
        description: 'The moment I feel like I can be myself with you.',
        image: Assurance,
      },
      {
        id: 2,
        title: 'Trust',
        description: 'To be honest I am shocked not in a bad way but happy shocked because you defended me even if I am not physically around. Thank you so much, Amori.',
        image: Kalma,
      },
      {
        id: 3,
        title: 'Connection',
        description: 'The starting point of me slowly opening up to you.',
        image: Luv2,
      },
      {
        id: 4,
        title: 'Safe Space',
        description: 'Moment that I really feel our connection. Way too comfortable to your presence that I sometimes crave in a random moment of any time of the day.',
        image: SafeSpace,
      }
    ]
  },
  future: {
    name: 'Dreams and Hopes',
    pages: [
      {
        id: 1,
        title: 'To Determine',
        description: 'Want to build a future with you, honestly.',
        image: FallBack,
      },
    ]
  }
};

const InteractiveStorybook = () => {
  const [currentMode, setCurrentMode] = useState('chronological');
  const [currentPage, setCurrentPage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const currentStory = storyModes[currentMode];

  const pageVariants = {
    initial: { opacity: 0, x: 300 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -300 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % currentStory.pages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + currentStory.pages.length) % currentStory.pages.length);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="interactive-storybook">
      <div className="storybook-mode-selector">
        {Object.keys(storyModes).map((mode) => (
          <motion.button
            key={mode}
            className={`mode-button ${currentMode === mode ? 'active' : ''}`}
            onClick={() => {
              setCurrentMode(mode);
              setCurrentPage(0);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {storyModes[mode].name}
          </motion.button>
        ))}
      </div>

      <div className={`storybook-container ${isZoomed ? 'zoomed' : ''}`}>
        <AnimatePresence initial={false}>
          <motion.div
            key={`${currentMode}-${currentPage}`}
            className="storybook-page"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <div className="image-container">
              <motion.img 
                src={currentStory.pages[currentPage].image} 
                alt={currentStory.pages[currentPage].title}
                className="story-image"
                whileHover={{ scale: 1.05 }}
                onClick={toggleZoom}
              />
              <motion.div 
                className="heart-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                ❤️
              </motion.div>
            </div>
            <div className="story-content">
              <h2>{currentStory.pages[currentPage].title}</h2>
              <p>{currentStory.pages[currentPage].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="story-navigation">
          <motion.button 
            onClick={prevPage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ← Previous
          </motion.button>
          <div className="page-indicator">
            {currentStory.pages.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentPage ? 'active' : ''}`}
                onClick={() => setCurrentPage(index)}
              />
            ))}
          </div>
          <motion.button 
            onClick={nextPage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Next →
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveStorybook;

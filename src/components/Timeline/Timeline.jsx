import React from 'react';
import { motion } from 'framer-motion';
import './TimelineStyles.css';
import FallbackImage from '../../assets/images/fallback-image.png';
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


const Timeline = () => {
  // Add your special moments here
  const events = [
    {
      id: 1,
      date: 'August 5, 2024',
      title: 'My First Attempt to talk to you',
      description: "I've been like thinking about this a million times how to approach you without being awkward or weirdo. Welp I've turned one apprarently. Then later on I just got inboxed HAHAHHAHA, well at least I've tried.",
      image: FirstAttempt, 
    },
    {
      id: 2,
      date: 'August 10, 2024',
      title: 'IDK, but this made my whole month',
      description: 'My pathetic little shit ahh been like rolling at the floor seeing this. HAHHAHAHH kilig na kilig ako that time pagkakita ko nito. "WHAAAAAATTT", my initial response. Ikaw lagi inaabang ko sa story ko [Wala ka kasi pake sa mga posts ko]',
      image: Spam,
    },
    {
      id: 3,
      date: 'August 11, 2024',
      title: 'IDK, sinave ko lang HAHAHA',
      description: 'Natawa ako that time kasi like feel ko namisclick ka lang or something. I did return the energy though, nagspam ako lahat reacts HAHAHA',
      image: Spam1, 
    },
    {
      id: 4,
      date: 'August 23, 2024',
      title: 'First Conversation',
      description: 'Wow, nakagraduate sa react lang tas isang araw overthink how to talk to you. Kaso putol-putol nga lang kasi di inexpect na ganito HAHHAHAHA[Unprepared ako e]',
      image: FirstConvo,
    },
    {
      id: 5,
      date: 'August 22, 2024',
      title: 'Initial Attempt Confession',
      description: 'Eto dapat pangfirst move ko e kaso naalala ko common na kaya hanap ako new way[HAHAHHAHA well wala e lala talaga hay, bagal ko pero look at kung saan na ako]',
      image: AttemptConfession,
    },
    {
      id: 6,
      date: 'September 26, 2024',
      title: 'Initial Attempt na Mag-puyat',
      description: 'You starting to adapt sakit ko which is magpuyat for no reason. Still guilty to like sira your sleep schedule.',
      image: Pupuyat,
    },
    {
      id: 7,
      date: 'October 4, 2024',
      title: 'HAAAAYYYYY',
      description: 'Unang sabi mo nitong magic word na ito. Made my fucking month HAHAHH. Been blushing like a tomato or some shi. Sobrang hyper ko nitong araw na ito.',
      image: MissU,
    },
    {
      id: 8,
      date: 'October 10, 2024',
      title: 'First Tinulugan',
      description: "After this night tuloy-tuloy na akong tinutulogan, hayy. I don't complain kasi understandable baby ",
      image: Tinulugan,
    },
    {
      id: 9,
      date: 'October 11, 2024',
      title: 'Kisscillin',
      description: 'HAHAHAHHAHHAHAHA my attempt na manghingi. Lala ko amp pero hehehe busog lusog ngayon <3',
      image: Kisscillin, 
    },
    {
      id: 10,
      date: 'October 11, 2024',
      title: 'Rap',
      description: 'Sarap Incident, IKYK.',
      image: Rap, 
    },
    {
      id: 11,
      date: 'October 11, 2024',
      title: 'First Pic',
      description: 'First Pic of youuuuu, Syempre auto save sakin yan! One of my favorite. :3',
      image: FirstPic, 
    }, 
    {
      id: 12,
      date: 'October 11, 2024',
      title: 'Attempt Puyat',
      description: 'Attempt Puyat ni Ms. Amori HWAHAHAHAHHA. Wala pa din talaga sa system.',   
      image: AttemptPuyat,
    },
    {
      id: 13,
      date: 'October 11, 2024',
      title: 'First Vid',
      description: 'First Vid of youuuuu, Syempre auto save sakin yan! :3',
      image: FirstVid, 
    },
    {
      id: 14,
      date: 'October 14, 2024',
      title: 'Luv2',
      description: 'Hyper nanaman ako this day kasi sinabi magic word. [Casual lang na pagkasabi but great impact sakin hay, too pathetic talaga ako]',   
      image: Luv2,
    },
    {
      id: 15,
      date: 'November 1, 2024',
      title: 'First Call',
      description: 'First Call natin, kinabahan ako baka ano like yung boses ko at tsaka the way ako magspeak Tagalog nor English.',
      image: FirstCall, 
    },
    {
      id: 16,
      date: 'November 16, 2024',
      title: 'My Longest Call',
      description: "Didn't really expect this. Normally for me, longest call ko is like around 3-5 hours max. Because nauubosan ako words, mas fluent ako sa chat kesa call ehe.",
      image: RecordCall,  
    },
    {
      id: 17,
      date: 'November 20, 2024',
      title: 'Lambing',
      description: 'Okay Amori, ganyan pala kapag gusto manlambing. Ipapabato HAHHAHAHHAA cutieee[Sana malambing po hehe :3]',
      image: Lambing,  
    },
    {
      id: 18,
      date: 'November 21, 2024',
      title: 'Miss U Too',
      description: 'Magic word again, MISS UUU DINN DAMN MUCHHHHHH',
      image: MissUtoo,
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
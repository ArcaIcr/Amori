import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './LoveNotesJarStyles.css';

const initialNotes = {
  love_notes: [
    "You make my heart smile every single day.",
    "I fall in love with you more and more with each passing moment.",
    "Your smile is my favorite view in the world.",
    "Every moment with you feels like a beautiful dream.",
    "You're not just my love, you're my best friend.",
    "I cherish every laugh, every conversation, every memory we share.",
    "Your love gives me strength and hope.",
    "I'm grateful for every single day I get to spend with you.",
    "You're the most beautiful person inside and out.",
    "My love for you grows deeper with each passing day."
  ],
  poems: [
    "In the soft whispers of dawn,\nYour love blooms like a gentle rose,\nSilent, yet profound.",
    "Moonlight cascades softly,\nYour hand in mine, a promise kept,\nHearts beating as one.",
    "Threads of passion weave,\nOur souls dance in harmony,\nLove's eternal song.",
    "Gentle waves of trust,\nCarrying our hopes and dreams,\nInfinite and pure.",
    "Starlight in your eyes,\nReflecting infinite love,\nTimeless, boundless, true."
  ],
  haikus: [
    "Cherry blossoms fall\nYour smile, brighter than springtime\nLove blooms endlessly",
    "Moonlit whispers soft\nTwo hearts beating in rhythm\nEternal embrace",
    "Gentle rain falling\nYour touch, warm like summer sun\nMelting winter's chill",
    "Autumn leaves dancing\nOur love, a vibrant color\nPainting life's canvas",
    "Winter's silent breath\nYour warmth melts the coldest heart\nLove knows no season"
  ],
  tankas: [
    "Soft petals of love\nUnfolding between two souls\nWhispers of passion\nEchoing through endless time\nOur hearts, forever entwined",
    "Moonlight on water\nReflecting our deep connection\nSilent, yet profound\nEvery moment we share speaks\nOf a love beyond words' reach",
    "Gentle winds carry\nMemories of our first touch\nTimeless and tender\nIn the landscape of my heart\nYou bloom like eternal spring",
    "Starlight embraces\nOur love, a celestial dance\nInfinite and pure\nEvery breath, every heartbeat\nSings of our unbroken bond",
    "Autumn leaves falling\nLike promises we whisper\nSoft and passionate\nIn the tapestry of time\nOur love writes its own story"
  ]
};

const LoveNotesJar = () => {
  const [contentType, setContentType] = useState('love_notes');
  const [notes, setNotes] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem('loveNotesJarContent')) || initialNotes;
    return savedData.love_notes;
  });
  const [newNote, setNewNote] = useState('');
  const [pulledNotes, setPulledNotes] = useState(() => {
    return JSON.parse(localStorage.getItem('pulledNotes')) || [];
  });

  useEffect(() => {
    // Save content type-specific notes to localStorage
    const savedData = JSON.parse(localStorage.getItem('loveNotesJarContent')) || initialNotes;
    savedData[contentType] = notes;
    localStorage.setItem('loveNotesJarContent', JSON.stringify(savedData));
  }, [notes, contentType]);

  useEffect(() => {
    // Save pulled notes to localStorage
    localStorage.setItem('pulledNotes', JSON.stringify(pulledNotes));
  }, [pulledNotes]);

  const pullRandomNote = () => {
    if (notes.length > 0) {
      let randomIndex;
      let selectedNote;
      do {
        randomIndex = Math.floor(Math.random() * notes.length);
        selectedNote = notes[randomIndex];
      } while (pulledNotes.includes(selectedNote));

      setPulledNotes([...pulledNotes, selectedNote]);
      setNotes(notes.filter((_, index) => index !== randomIndex));
    }
  };

  const addNewNote = (e) => {
    e.preventDefault();
    if (newNote.trim()) {
      setNotes([...notes, newNote.trim()]);
      setNewNote('');
    }
  };

  const resetContentType = () => {
    setNotes(initialNotes[contentType]);
    setPulledNotes([]);
  };

  return (
    <div className="love-notes-jar">
      <div className="content-type-selector">
        {Object.keys(initialNotes).map((type) => (
          <motion.button
            key={type}
            className={`content-type-button ${contentType === type ? 'active' : ''}`}
            onClick={() => {
              setContentType(type);
              const savedData = JSON.parse(localStorage.getItem('loveNotesJarContent')) || initialNotes;
              setNotes(savedData[type]);
            }}
          >
            {type.replace('_', ' ').toUpperCase()}
          </motion.button>
        ))}
      </div>

      <motion.div className="jar" whileHover={{ scale: 1.05 }}>
        <div className="jar-body">
          <div className="notes-count">
            {notes.length} {contentType.replace('_', ' ')}
          </div>
        </div>
      </motion.div>

      <div className="jar-actions">
        <motion.button onClick={pullRandomNote}>Pull a Note</motion.button>
        <motion.button onClick={resetContentType}>Reset {contentType.replace('_', ' ')}</motion.button>
      </div>

      <form onSubmit={addNewNote} className="add-note-form">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder={`Write a new ${contentType.slice(0, -1)}`}
        />
        <motion.button type="submit">Add</motion.button>
      </form>
    </div>
  );
};

export default LoveNotesJar;

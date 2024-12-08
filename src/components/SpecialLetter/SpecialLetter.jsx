import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import ResponseView from './ResponseView';

const CATEGORIES = ['Love', 'Thoughts', 'Feelings', 'Future', 'General'];

const SpecialLetter = () => {
  const [response, setResponse] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [responses, setResponses] = useState([]);
  const [viewResponses, setViewResponses] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('General');

  useEffect(() => {
    // Load responses from localStorage when component mounts
    const savedResponses = localStorage.getItem('letterResponses');
    if (savedResponses) {
      setResponses(JSON.parse(savedResponses));
    }
  }, []);

  const saveResponses = (updatedResponses) => {
    setResponses(updatedResponses);
    localStorage.setItem('letterResponses', JSON.stringify(updatedResponses));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (response.trim()) {
      const newResponse = {
        id: Date.now(),
        message: response.trim(),
        timestamp: new Date().toISOString(),
        category: selectedCategory,
        reactions: {}
      };

      saveResponses([...responses, newResponse]);
      setSubmitted(true);
      toast.success('Your response has been submitted! 💖', {
        position: "bottom-right",
        autoClose: 3000,
      });
    } else {
      toast.error('Please write a response before submitting', {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  const handleDelete = (responseId) => {
    if (window.confirm('Are you sure you want to delete this response?')) {
      const updatedResponses = responses.filter(r => r.id !== responseId);
      saveResponses(updatedResponses);
      toast.success('Response deleted successfully', {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  const handleUpdateResponse = (updatedResponse) => {
    const updatedResponses = responses.map(r => 
      r.id === updatedResponse.id ? updatedResponse : r
    );
    saveResponses(updatedResponses);
  };

  return (
    <div className="special-letter p-6 bg-gradient-to-br from-violet-500 via-lilac-400 to-lavender-300 rounded-lg shadow-md max-w-2xl mx-auto mt-10">
      <h1 className="text-4xl font-extrabold text-center text-violet-900 mb-6">A Special Request</h1>
      <p className="text-lg text-violet-900 text-left">Dear Amori,</p>
      <p className="text-lg text-violet-900 text-justify my-4">
        I hope this letter finds you well.
      </p>
      <p className="text-lg text-violet-900 text-justify my-4">
        I’ve spent some time thinking about a proper way to express what I have in my heart and it came to my mind that I could try words that may conform to what was stated.
      </p>
      <p className="text-lg text-violet-900 text-justify my-4">
        It has really been a privilege to know you. I sincerely fell for your kindness, smarts and how you light up a room. Many men wish you were not standing beside them, but rather across from them.
      </p>
      <p className="text-lg text-violet-900 text-justify my-4">
        All that said, I would like to ask you something important, although I do so with no pressure. I’d love to get the chance to court you, grow close to you and see where this will take us. I think there's something beautiful in spending time connecting to one another and building something meaningful together, slowly but surely.
      </p>
      <p className="text-lg text-violet-900 text-justify my-4">
        This question is asked so you can get back to it whenever you feel ready—not because I’m expecting something from you. What makes you happy and comfortable is very important to me. I only wish for you to think and reply when you feel like it!
      </p>
      <p className="text-lg text-violet-900 text-justify my-4">
        I appreciate you reading this and, regardless of your response, I treasure our past moments and look forward to our future moments.
      </p>
      <p className="text-lg text-violet-900 text-right mt-2">
        Warm regards,
      </p>
      <p className="text-lg text-violet-900 text-right mt-2">
        Ken
      </p>
      <div className="response-section mt-8 bg-white/80 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-violet-900">Your Response</h2>
          <button
            onClick={() => setViewResponses(!viewResponses)}
            className="text-violet-600 hover:text-violet-800 transition-colors duration-300"
          >
            {viewResponses ? 'Hide Responses 💌' : 'View Responses 💌'}
          </button>
        </div>

        {viewResponses ? (
          <ResponseView 
            responses={responses} 
            onDelete={handleDelete}
            onUpdateResponse={handleUpdateResponse}
          />
        ) : !submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <label className="text-violet-700">Category:</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="p-2 rounded border-2 border-violet-300 focus:border-violet-500"
              >
                {CATEGORIES.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <textarea
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              placeholder="Write your response here..."
              className="w-full h-40 p-4 rounded-lg border-2 border-violet-300 focus:border-violet-500 focus:ring focus:ring-violet-200 focus:ring-opacity-50 resize-none"
              disabled={submitted}
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-violet-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-violet-600 transition-colors duration-300"
              >
                Send Response 💌
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-8">
            <p className="text-lg text-violet-900">Thank you for your response! 💖</p>
            <p className="text-sm text-violet-700 mt-2">Your message has been sent with love.</p>
            <button
              onClick={() => {
                setSubmitted(false);
                setResponse('');
              }}
              className="mt-4 text-violet-600 hover:text-violet-800 transition-colors duration-300"
            >
              Write Another Response 💝
            </button>
          </div>
        )}
      </div>
      <div className="text-center mt-6">
        <a href="/" className="bg-white text-violet-500 font-bold py-2 px-4 rounded hover:bg-violet-500 hover:text-white transition-colors duration-300">
          Back to Main
        </a>
      </div>
    </div>
  );
};

export default SpecialLetter;

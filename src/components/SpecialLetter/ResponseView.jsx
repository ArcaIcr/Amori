import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';

const ResponseView = ({ responses, onDelete, onUpdateResponse }) => {
  const [editingResponse, setEditingResponse] = useState(null);
  const [updatedMessage, setUpdatedMessage] = useState('');

  const handleEdit = (response) => {
    setEditingResponse(response);
    setUpdatedMessage(response.message);
  };

  const handleCancelEdit = () => {
    setEditingResponse(null);
    setUpdatedMessage('');
  };

  const handleUpdate = (e, response) => {
    e.preventDefault();
    if (updatedMessage.trim()) {
      const updatedResponse = { ...response, message: updatedMessage.trim() };
      onUpdateResponse(updatedResponse);
      setEditingResponse(null);
      setUpdatedMessage('');
    } else {
      toast.error('Please provide a valid message to update!', {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  // Format timestamp function
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Returns a human-readable date format
  };

  return (
    <div className="responses-list space-y-6">
      <AnimatePresence>
        {responses.map((response) => (
          <motion.div
            key={response.id}
            className="response-card p-4 rounded-lg shadow-lg bg-gradient-to-br from-blue-300 to-purple-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {editingResponse?.id === response.id ? (
              <form onSubmit={(e) => handleUpdate(e, response)}>
                <textarea
                  value={updatedMessage}
                  onChange={(e) => setUpdatedMessage(e.target.value)}
                  className="w-full p-4 rounded-lg border-2 border-violet-300 focus:border-violet-500 focus:ring focus:ring-violet-200 focus:ring-opacity-50 resize-none"
                />
                <div className="mt-2 flex justify-between">
                  <button type="submit" className="bg-violet-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-violet-600 transition-colors duration-300">
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="bg-gray-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <>
                <p className="text-xl text-violet-800">{response.message}</p>
                {/* Display formatted timestamp here */}
                <p className="text-sm text-gray-500">{response.timestamp ? formatTimestamp(response.timestamp) : 'No date'}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-600">{response.category}</span>
                  <div>
                    <button
                      onClick={() => handleEdit(response)}
                      className="bg-violet-500 text-white py-2 px-4 rounded hover:bg-violet-600 transition-colors duration-300 mr-2"
                    >
                      Edit  
                    </button>
                    <button
                      onClick={() => onDelete(response.id)}
                      className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ResponseView;

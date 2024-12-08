import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../shared/Card';
import { toast } from 'react-toastify';
import { FaHeart, FaTrash, FaDownload, FaLock, FaUnlock } from 'react-icons/fa';

const REACTIONS = ['❤️', '😊', '🥰', '💝', '💌'];

const ResponseView = ({ responses, onDelete, onUpdateResponse }) => {
  const [password, setPassword] = useState('');
  const [isLocked, setIsLocked] = useState(true);
  const [exportFormat, setExportFormat] = useState('txt');

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // You can change this password or implement a more secure authentication
    if (password === 'amori') {
      setIsLocked(false);
      toast.success('Responses unlocked! 💖', {
        position: "bottom-right",
        autoClose: 3000,
      });
    } else {
      toast.error('Incorrect password', {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  const handleReaction = (responseId, reaction) => {
    const response = responses.find(r => r.id === responseId);
    if (response) {
      const reactions = response.reactions || {};
      reactions[reaction] = (reactions[reaction] || 0) + 1;
      onUpdateResponse({ ...response, reactions });
    }
  };

  const handleExport = () => {
    let content = '';
    const fileName = `love-letter-responses-${new Date().toISOString().split('T')[0]}`;

    if (exportFormat === 'txt') {
      content = responses.map(response => (
        `Date: ${new Date(response.timestamp).toLocaleString()}\n` +
        `Message: ${response.message}\n` +
        `Reactions: ${Object.entries(response.reactions || {}).map(([emoji, count]) => `${emoji}(${count})`).join(', ')}\n` +
        `Category: ${response.category || 'None'}\n` +
        '----------------------------------------\n'
      )).join('\n');
    } else if (exportFormat === 'json') {
      content = JSON.stringify(responses, null, 2);
    }

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName}.${exportFormat}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast.success('Responses exported successfully! 💖', {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  if (isLocked) {
    return (
      <div className="bg-white/90 p-6 rounded-lg">
        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <div className="flex items-center space-x-2">
            <FaLock className="text-violet-500" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password to view responses"
              className="flex-1 p-2 rounded border-2 border-violet-300 focus:border-violet-500 focus:ring focus:ring-violet-200"
            />
            <button
              type="submit"
              className="bg-violet-500 text-white px-4 py-2 rounded hover:bg-violet-600 transition-colors duration-300"
            >
              Unlock
            </button>
          </div>
        </form>
      </div>
    );
  }

  if (!responses || responses.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-lg text-violet-900">No responses yet 💝</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setIsLocked(true)}
          className="text-violet-600 hover:text-violet-800 transition-colors duration-300 flex items-center space-x-2"
        >
          <FaUnlock />
          <span>Lock Responses</span>
        </button>
        <div className="flex items-center space-x-2">
          <select
            value={exportFormat}
            onChange={(e) => setExportFormat(e.target.value)}
            className="p-2 rounded border-2 border-violet-300 focus:border-violet-500"
          >
            <option value="txt">Text</option>
            <option value="json">JSON</option>
          </select>
          <button
            onClick={handleExport}
            className="bg-violet-500 text-white px-4 py-2 rounded hover:bg-violet-600 transition-colors duration-300 flex items-center space-x-2"
          >
            <FaDownload />
            <span>Export</span>
          </button>
        </div>
      </div>

      <AnimatePresence mode="popLayout">
        {responses.map((response) => (
          <motion.div
            key={response.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="p-6 bg-white/90">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-violet-600">
                    {new Date(response.timestamp).toLocaleString()}
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-violet-600">
                      {response.category || 'General'}
                    </span>
                    <button
                      onClick={() => onDelete(response.id)}
                      className="text-red-500 hover:text-red-700 transition-colors duration-300"
                      title="Delete response"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
                <p className="text-lg text-violet-900 whitespace-pre-wrap">
                  {response.message}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {REACTIONS.map((reaction) => (
                    <button
                      key={reaction}
                      onClick={() => handleReaction(response.id, reaction)}
                      className="bg-violet-100 hover:bg-violet-200 rounded-full px-3 py-1 text-sm flex items-center space-x-1 transition-colors duration-300"
                    >
                      <span>{reaction}</span>
                      <span>{response.reactions?.[reaction] || 0}</span>
                    </button>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ResponseView;

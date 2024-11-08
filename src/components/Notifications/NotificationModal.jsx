import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import './Notifications.css';

const NotificationModal = ({ notification, closeModal }) => {
  const [showModal, setShowModal] = useState(true);

  // Handle fade-out animation when closing
  const handleClose = () => {
    setShowModal(false);
    setTimeout(closeModal, 300);
  };

  useEffect(() => {
    setShowModal(true); // Ensures fade-in on mount
  }, []);

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ${showModal ? 'fadeIn' : 'fadeOut'}`}>
      <div className="modal-content bg-gray-900 w-full max-w-md mx-4 p-6 rounded-lg shadow-lg relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={handleClose}
        >
          <FaTimes size={20} />
        </button>

        {/* Display modal title and content */}
        {notification ? (
          <>
            <h2 className="text-2xl font-bold text-purple mb-4">{notification.title}</h2>
            <p className="text-gray-400 mb-2">
              Date: {new Date(notification.timestamp).toLocaleString()}
            </p>
            <div className="text-gray-300 leading-relaxed">
              {notification.message || 'No additional content available.'}
            </div>
          </>
        ) : (
          <p className="text-gray-400">Loading notification...</p>
        )}

        <button
          className="mt-6 bg-purple text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NotificationModal;

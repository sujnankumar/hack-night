import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import './Jobs.css';

const JobModal = ({ job, closeModal }) => {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
    setTimeout(closeModal, 300); // Adds a delay for fade-out effect
  };

  useEffect(() => {
    setShowModal(true); // Ensures fade-in on mount
  }, []);

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ${showModal ? 'fadeIn' : 'fadeOut'}`}>
      <div className="modal-content bg-gray-900 w-full max-w-md mx-4 p-6 rounded-lg shadow-lg relative">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={handleClose}
        >
          <FaTimes size={20} />
        </button>

        {/* Job details */}
        <h2 className="text-2xl font-bold text-purple mb-4">{job.title}</h2>
        <p className="text-gray-400 mb-2">Company: {job.company}</p>
        <p className="text-gray-400 mb-2">Location: {job.location}</p>
        <p className="text-gray-400 mb-4">Required Skills: {Array.isArray(job.requirements) ? job.requirements.join(', ') : job.requirements}</p>
        <div className="text-gray-300 leading-relaxed mb-4">{job.description}</div>

        {/* Close button */}
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

export default JobModal;

// MeetupModal.js
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const MeetupModal = ({ closeModal, onCreate }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && date && time && description) {
      onCreate({ title, date, time, description });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 animate-fadeIn">
      <div className="bg-gray-900 w-full max-w-lg mx-4 p-6 rounded-lg shadow-lg relative animate-scaleIn">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={closeModal}
        >
          <FaTimes size={20} />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-purple">Create Meetup</h2>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Meetup Title"
            className="w-full mb-4 p-2 border rounded text-black"
            required
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full mb-4 p-2 border rounded text-black"
            required
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full mb-4 p-2 border rounded text-black"
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Meetup Description"
            className="w-full mb-4 p-2 border rounded resize-none text-black"
            rows="4"
            required
          ></textarea>
          
          <button
            type="submit"
            className="w-full bg-purple text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Create Meetup
          </button>
        </form>
      </div>
    </div>
  );
};

export default MeetupModal;

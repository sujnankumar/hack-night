// MeetupPage.js
import React, { useState } from 'react';
import MeetupModal from './MeetupModal';
import './Event.css';

const MeetupPage = () => {
  const [meetups, setMeetups] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateMeetup = (newMeetup) => {
    setMeetups([...meetups, newMeetup]);
    setIsModalOpen(false); // Close the modal after submission
  };

  return (
    <div className="min-h-screen p-6 bg-transparent">
      <h2 className="text-2xl font-bold text-center mb-4 text-purple">College Meetups</h2>

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-purple text-white px-4 py-2 rounded shadow hover:bg-gray-900 transition"
      >
        Create Meetup
      </button>

      <div className="mt-6 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {meetups.map((meetup, index) => (
          <div key={index} className="bg-gray-900 shadow-md rounded-lg p-4 ">
            <h3 className="text-lg font-semibold text-purple">{meetup.title}</h3>
            <p className="text-gray-500">{meetup.date} at {meetup.time}</p>
            <p className="text-gray-700 mt-2">{meetup.description}</p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <MeetupModal closeModal={() => setIsModalOpen(false)} onCreate={handleCreateMeetup} />
      )}
    </div>
  );
};

export default MeetupPage;

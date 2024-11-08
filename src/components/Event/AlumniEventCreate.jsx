import React, { useState } from 'react';
import axiosInstance from '../../axios';

const AlumniEventCreate = () => {
  const [eventData, setEventData] = useState({
    eventName: '',
    eventDate: '',
    eventTime: '',
    location: '',
    description: '',
    image: null,
    maxParticipants: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setEventData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object to handle file upload
    const formData = new FormData();
    formData.append('event_name', eventData.eventName);
    formData.append('event_date', eventData.eventDate);
    formData.append('event_time', eventData.eventTime);
    formData.append('event_venue', eventData.location);
    formData.append('event_description', eventData.description);
    // formData.append('event_image', eventData.image); // Adding the image (if any)
    formData.append('max_participants', eventData.maxParticipants);

    try {
      const response = await axiosInstance.post('/api/alumni/create_event', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Ensure correct content type is set
          'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      });

      console.log(response.data); // Success message
      // Handle success (e.g., redirect, show success message)
    } catch (error) {
      console.error(error.response.data); // Handle error (e.g., show error message)
    }
  };

  return (
    <div className="flex justify-center items-center transparent">
      <div className="max-w-lg w-full bg-gray-950 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-purple mb-6 text-center">Create an Event</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400">Event Name</label>
            <input
              type="text"
              name="eventName"
              value={eventData.eventName}
              onChange={handleChange}
              placeholder="Enter event name"
              className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none text-black focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-400">Date</label>
              <input
                type="date"
                name="eventDate"
                value={eventData.eventDate}
                onChange={handleChange}
                className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none text-black focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-400">Time</label>
              <input
                type="time"
                name="eventTime"
                value={eventData.eventTime}
                onChange={handleChange}
                className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none text-black focus:ring focus:ring-blue-200"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400">Max Participants</label>
            <input
              type="number"
              name="maxParticipants"
              value={eventData.maxParticipants}
              onChange={handleChange}
              placeholder="Enter maximum participants"
              className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none text-black focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400">Location</label>
            <input
              type="text"
              name="location"
              value={eventData.location}
              onChange={handleChange}
              placeholder="Event location"
              className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none text-black focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400">Description</label>
            <textarea
              name="description"
              value={eventData.description}
              onChange={handleChange}
              placeholder="Brief event description"
              rows="4"
              className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none text-black focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* <div>
            <label className="block text-sm font-medium text-gray-700">Event Image (optional)</label>
            <input
              type="file"
              onChange={handleImageChange}
              className="mt-1 w-full text-sm text-gray-400"
              accept="image/*"
            />
          </div> */}

          <button
            type="submit"
            className="w-full mt-4 py-2 bg-purple text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default AlumniEventCreate;

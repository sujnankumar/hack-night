import React, { useState } from 'react';
import axiosInstance from '../../axios'; // Import the configured axios instance

const JobFormPage = () => {
  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    location: '',
    company: '',
    required_skills: '',
  });
  const [message, setMessage] = useState(''); // To display success or error messages

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/api/alumni/create_job', jobData);
      setMessage(response.data.message); // Show success message
      setJobData({
        title: '',
        description: '',
        location: '',
        company: '',
        required_skills: '',
      });
    } catch (error) {
      setMessage(error.response?.data?.error || 'An error occurred'); // Show error message
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-purple mb-6">Create Job Opportunity</h2>
      
      {message && (
        <p className={`mb-4 ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-500 mb-1">Job Title</label>
          <input
            type="text"
            name="title"
            value={jobData.title}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg bg-gray-800 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-500 mb-1">Job Description</label>
          <textarea
            name="description"
            value={jobData.description}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg bg-gray-800 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-500 mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={jobData.location}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg bg-gray-800 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-500 mb-1">Company</label>
          <input
            type="text"
            name="company"
            value={jobData.company}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg bg-gray-800 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-500 mb-1">Required Skills</label>
          <textarea
            name="required_skills"
            value={jobData.required_skills}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-gray-800 text-white"
          />
        </div>

        <button type="submit" className="bg-purple text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Create Job
        </button>
      </form>
    </div>
  );
};

export default JobFormPage;

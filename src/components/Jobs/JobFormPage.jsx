import React, { useState } from 'react';

const JobFormPage = ({ onJobSubmit }) => {
  const [jobData, setJobData] = useState({
    companyName: '',
    jobRole: '',
    location: '',
    requirements: '',
    deadline: '',
    description: '',
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onJobSubmit(jobData); // Pass job data to parent or API
    setJobData({
      companyName: '',
      jobRole: '',
      location: '',
      requirements: '',
      deadline: '',
      description: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-950 p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-purple mb-6">Create Job Opportunity</h2>

      <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-500 mb-1">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={jobData.companyName}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg bg-gray-800 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-500 mb-1">Job Role</label>
          <input
            type="text"
            name="jobRole"
            value={jobData.jobRole}
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
            className="w-full p-2 rounded-lg bg-gray-800 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-500 mb-1">Requirements</label>
          <textarea
            name="requirements"
            value={jobData.requirements}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-gray-800 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-500 mb-1">Application Deadline</label>
          <input
            type="date"
            name="deadline"
            value={jobData.deadline}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-gray-800 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-500 mb-1">Job Description</label>
          <textarea
            name="description"
            value={jobData.description}
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

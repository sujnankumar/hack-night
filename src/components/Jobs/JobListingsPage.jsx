import React, { useState } from 'react';
import JobModal from './JobModal'; // Import the modal component
import './Jobs.css';

const JobListingsPage = ({ jobs }) => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleCardClick = (job) => {
    setSelectedJob(job); // Set selected job to display in the modal
  };

  const closeModal = () => {
    setSelectedJob(null); // Close the modal by resetting selectedJob to null
  };

  return (
    <div className="min-h-screen bg-gray-950 p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-purple mb-6">Job Opportunities</h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-5xl">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="job-card bg-gray-900 shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => handleCardClick(job)}
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p className="text-gray-500">{job.company}</p>
              <p className="text-gray-400 text-sm">{job.location}</p>
            </div>
          </div>
        ))} 
      </div>

      {/* Job modal: display only if a job is selected */}
      {selectedJob && <JobModal job={selectedJob} closeModal={closeModal} />}
    </div>
  );
};

export default JobListingsPage;

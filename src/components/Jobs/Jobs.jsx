import React, { useState } from 'react';
import JobFormPage from './JobFormPage';
import JobListingsPage from './JobListingsPage';

const Jobs = () => {
    const [jobs, setJobs] = useState([
        { companyName: 'TechCorp', jobRole: 'Software Engineer', location: 'Remote', requirements: '2+ years of experience in React', deadline: '2024-12-01', description: 'A great opportunity for frontend developers.' },
        { companyName: 'Innovatech', jobRole: 'Backend Developer', location: 'New York', requirements: '3+ years of experience in Node.js', deadline: '2024-12-15', description: 'Join our team to work on backend projects.' },
    ]);

    const handleJobSubmit = (job) => {
        setJobs([...jobs, job]); // Update the jobs state with the new job
    };

    return (
        <>
            <JobListingsPage jobs={jobs} />
        </>
    );
}

export default Jobs;

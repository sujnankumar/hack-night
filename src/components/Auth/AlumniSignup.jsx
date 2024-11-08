import React, { useState } from 'react';
import styles from './AlumniSignup.module.css'; // Assuming you have a CSS module for styling

// Sample skill options
const skillsOptions = [
  'JavaScript', 'React', 'Node.js', 'Python', 'Java', 'C++', 'SQL', 'HTML', 'CSS', 'Git', 'Machine Learning', 'Data Science', 'UI/UX Design', 'Blockchain', 'Cloud Computing'
];

const AlumniSignup = () => {
  const [formData, setFormData] = useState({
    resume: null,
    linkedin: '',
    selectedSkills: [],
    experience: '',
    openForMentorship: 'No', // Default is "No"
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleLinkedInChange = (e) => {
    setFormData({
      ...formData,
      linkedin: e.target.value,
    });
  };

  const handleSkillToggle = (skill) => {
    setFormData((prevData) => {
      const newSkills = prevData.selectedSkills.includes(skill)
        ? prevData.selectedSkills.filter((s) => s !== skill)
        : [...prevData.selectedSkills, skill];

      return { ...prevData, selectedSkills: newSkills };
    });
  };

  const handleExperienceChange = (e) => {
    setFormData({
      ...formData,
      experience: e.target.value,
    });
  };

  const handleMentorshipChange = (e) => {
    setFormData({
      ...formData,
      openForMentorship: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.resume) {
      setError('Resume is required');
      return;
    }

    if (!formData.linkedin) {
      setError('LinkedIn profile URL is required');
      return;
    }

    if (!/^https?:\/\/(?:www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+(?:\/|$)/.test(formData.linkedin)) {
      setError('Please enter a valid LinkedIn URL');
      return;
    }

    if (!formData.experience || isNaN(formData.experience) || formData.experience <= 0) {
      setError('Please enter a valid number of years of experience');
      return;
    }

    // Successful form submission
    setError('');
    setSuccess('Registration successful!');
    console.log('Form data submitted:', formData);

    // Reset form
    setFormData({
      resume: null,
      linkedin: '',
      selectedSkills: [],
      experience: '',
      openForMentorship: 'No',
    });
  };

  return (
    <div className={styles.registrationForm}>
      <h2 className={styles.heading}>Alumni Registration</h2>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Resume Upload */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="resume">Upload Resume:</label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleFileChange}
            required
            className={styles.input}
          />
        </div>

        {/* LinkedIn Profile URL */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="linkedin">LinkedIn Profile URL:</label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleLinkedInChange}
            required
            placeholder="https://www.linkedin.com/in/username"
            className={styles.input}
          />
        </div>

        {/* Expertise Skills (Buttons) */}
        <div className={styles.skillsSection}>
          <label className={styles.label}>Expertise Skills:</label>
          <div className={styles.skillsButtons}>
            {skillsOptions.map((skill) => (
              <button
                key={skill}
                type="button"
                onClick={() => handleSkillToggle(skill)}
                className={`${styles.skillButton} ${formData.selectedSkills.includes(skill) ? styles.selected : ''}`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Input */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="experience">Years of Experience:</label>
          <input
            type="number"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleExperienceChange}
            required
            min="1"
            className={styles.input}
          />
        </div>

        {/* Open for Mentorship (Radio Buttons) */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Open for Mentorship:</label>
          <div>
            <label>
              <input
                type="radio"
                name="openForMentorship"
                value="Yes"
                checked={formData.openForMentorship === 'Yes'}
                onChange={handleMentorshipChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="openForMentorship"
                value="No"
                checked={formData.openForMentorship === 'No'}
                onChange={handleMentorshipChange}
              />
              No
            </label>
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>Register</button>
      </form>
    </div>
  );
};

export default AlumniSignup;

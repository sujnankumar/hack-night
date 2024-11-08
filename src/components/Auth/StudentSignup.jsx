import React, { useState } from "react";
import styles from "./StudentSignup.module.css"; // Assuming you have a CSS module for styling

const skillsOptions = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "Java",
  "C++",
  "SQL",
  "HTML",
  "CSS",
  "Git",
  "Machine Learning",
  "Data Science",
  "UI/UX Design",
  "Blockchain",
  "Cloud Computing",
];

const StudentSignup = () => {
  const [formData, setFormData] = useState({
    resume: null,
    linkedin: "",
    selectedSkills: [],
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.resume) {
      setError("Resume is required");
      return;
    }

    if (!formData.linkedin) {
      setError("LinkedIn profile URL is required");
      return;
    }

    if (
      !/^https?:\/\/(?:www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+(?:\/|$)/.test(
        formData.linkedin
      )
    ) {
      setError("Please enter a valid LinkedIn URL");
      return;
    }

    // Successful form submission
    setError("");
    setSuccess("Registration successful!");
    console.log("Form data submitted:", formData);

    // Reset form
    setFormData({
      resume: null,
      linkedin: "",
      selectedSkills: [],
    });
  };

  return (
    <div className={styles.registrationForm}>
      <h2 className={styles.heading}>Student Registration</h2>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Resume Upload */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="resume">
            Upload Resume:
          </label>
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
          <label className={styles.label} htmlFor="linkedin">
            LinkedIn Profile URL:
          </label>
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

        {/* Interested Skills (Buttons) */}
        <div className={styles.skillsSection}>
          <label className={styles.label}>Interested Skills:</label>
          <div className={styles.skillsButtons}>
            {skillsOptions.map((skill) => (
              <button
                key={skill}
                type="button"
                onClick={() => handleSkillToggle(skill)}
                className={`${styles.skillButton} ${
                  formData.selectedSkills.includes(skill) ? styles.selected : ""
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          Register
        </button>
      </form>
    </div>
  );
};

export default StudentSignup;

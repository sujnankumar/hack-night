import React, { useState } from "react";
import axiosInstance from "../../axios"; // Assuming you have your axios instance
import styles from "./StudentSignup.module.css"; // CSS module for styling

const skillsOptions = [
  "JavaScript", "React", "Node.js", "Python", "Java", "C++", "SQL", "HTML", "CSS",
  "Git", "Machine Learning", "Data Science", "UI/UX Design", "Blockchain", "Cloud Computing"
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

  const handleSubmit = async (e) => {
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

    // Clear previous error
    setError("");

    // Create FormData to send with the POST request
    const data = new FormData();
    data.append("resume", formData.resume); // Append the resume file
    data.append("linkedin", formData.linkedin); // Append the LinkedIn URL
    data.append("skills", JSON.stringify(formData.selectedSkills)); // Append the selected skills as a JSON string

    try {
      // Send the POST request to the backend
      const response = await axiosInstance.post(
        "/api/profile/student", 
        data, 
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for file uploads
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`, // Assuming JWT token is stored in localStorage
          },
        }
      );
      // Handle success
      setSuccess(response.data.message); 
      console.log("Profile created successfully");

      // Reset form data
      setFormData({
        resume: null,
        linkedin: "",
        selectedSkills: [],
      });
    } catch (err) {
      // Handle errors
      setError("There was an error creating the student profile");
      console.error(err);
    }
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

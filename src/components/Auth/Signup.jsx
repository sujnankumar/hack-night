import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.css"; // Import the CSS Module file
import axiosInstance from '../../axios'; // Import axios instance

// Sample options for the role select box
const roleOptions = ["Student", "College", "Alumni"];

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    name: "",
    phone: "",
    email: "",
    role: "Student", // default role
    collegeName: "", // new college name field
    password: "", // new password field
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (
      !formData.username ||
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.collegeName ||
      !formData.password
    ) {
      setError("All fields are required");
      return;
    }

    // Validate email format
    if (!/^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Validate phone number format
    if (!/^\d{10}$/.test(formData.phone)) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }

    // Make a request to the Flask API to register the user
    axiosInstance
      .post("/api/register", {
        username: formData.username,
        password: formData.password, // Assuming you have a password field in your formData
        // password: "password", // Hardcoding password for now
        name: formData.name,
        phone_number: formData.phone,
        email: formData.email,
        role: formData.role,
        college_name: formData.collegeName,
      })
      .then((response) => {
        console.log(response.data.message);
        alert("Sign-up successful!");
        // Navigate based on the role
        if (formData.role === "Student") {
          navigate("/signup/student");
        } else if (formData.role === "College") {
          navigate("/signup/college");
        } else if (formData.role === "Alumni") {
          navigate("/signup/alumni");
        }
      })
      .catch((error) => {
        console.error("There was an error registering the user!", error);
        setError(error.response?.data?.message || "An error occurred during registration");
      });

    // Reset error and simulate a successful form submission
    setError("");
    console.log("Form data submitted:", formData);

    // Reset form after successful submission
    setFormData({
      username: "",
      name: "",
      phone: "",
      email: "",
      role: "Student",
      collegeName: "", // Reset college name as well
      password: "", // Reset password
    });
  };

  return (
    <div className={styles.signup}>
      <h2 className={styles.heading}>Sign Up</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="username">
            Username:
          </label>
          <input
            className={styles.input}
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">
            Full Name:
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="phone">
            Phone Number:
          </label>
          <input
            className={styles.input}
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="e.g., 1234567890"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">
            Email Address:
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* College Name input field - Always shown */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="collegeName">
            College Name:
          </label>
          <input
            className={styles.input}
            type="text"
            id="collegeName"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="role">
            Role:
          </label>
          <select
            className={styles.select}
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            {roleOptions.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="password">
            Password:
          </label>
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button className={styles.button} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;

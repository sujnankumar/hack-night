import React, { useState, useEffect } from "react";
import classes from "./Explore.module.css";
import axiosInstance from "../../axios"; // Import axios instance

const Explore = () => {
  const [alumni, setAlumni] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [industry, setIndustry] = useState("");
  const [skills, setSkills] = useState("");

  // Fetch initial alumni data on component mount
  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const response = await axiosInstance.get("/api/explore");
        setAlumni(response.data); // Set initial alumni data
      } catch (error) {
        console.error("Error fetching initial alumni data:", error);
      }
    };
    fetchAlumni();
  }, []);

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleIndustryChange = (e) => {
    setIndustry(e.target.value);
  };

  const handleSkillsChange = (e) => {
    setSkills(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use /api/search/alumni for searching
      const response = await axiosInstance.get("/api/search/alumni", {
        params: {
          name: searchTerm,
          industry: selectedFilter === "industry" ? industry : undefined,
          skills: selectedFilter === "skills" ? skills : undefined,
        },
      });
      setAlumni(response.data); // Update alumni data with search results
    } catch (error) {
      console.error("Error fetching filtered alumni data:", error);
    }
  };

  return (
    <>
      <div className={classes.searchBar}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for alumni by name..."
          className={classes.searchInput}
        />
        <select
          value={selectedFilter}
          onChange={handleFilterChange}
          className={classes.dropdown}
        >
          <option value="all">All</option>
          <option value="industry">Industry</option>
          <option value="skills">Skills</option>
        </select>

        {/* Additional inputs based on selected filter */}
        {selectedFilter === "industry" && (
          <input
            type="text"
            value={industry}
            onChange={handleIndustryChange}
            placeholder="Filter by industry"
            className={classes.searchInput}
          />
        )}
        {selectedFilter === "skills" && (
          <input
            type="text"
            value={skills}
            onChange={handleSkillsChange}
            placeholder="Filter by skills"
            className={classes.searchInput}
          />
        )}

        <button
          type="button"
          onClick={handleSearchSubmit}
          className={classes.searchButton}
        >
          Search
        </button>
      </div>

      <div className={classes.container}>
        {alumni.map((alumnus) => (
          <div className={classes.box} key={alumnus.user_id}>
            <img
              src={alumnus.profile_photo || "default-profile-image-url"}
              alt={alumnus.name}
              className={classes.img}
            />
            <div>
              <h2 className={classes.username}>{alumnus.name}</h2>
              <span className={classes.position}>{alumnus.industry}</span>
              <p>{alumnus.email}</p>
              <p>{alumnus.skills}</p>
            </div>
            <button type="button" className={classes.button}>
              Read More
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Explore;

import React from "react";
import classes from "./Help.module.css";

const Help = () => {
  return (
    <div className={classes.helpPageContainer}>
      {/* Header */}
      <header className={classes.header}>
        <h1>Welcome to Help Center</h1>
        <p>Your guide to using our web app effectively</p>
      </header>

      {/* Introduction Section */}
      <section className={classes.introduction}>
        <h2>About Our Web App</h2>
        <p>
          Our platform helps you stay connected with alumni, build your
          professional network, and find exciting career opportunities. Whether
          you're looking to reconnect with old friends, expand your professional
          network, or search for new job openings, we've got you covered.
        </p>
      </section>

      {/* Features Section */}
      <section className={classes.features}>
        <h2>Main Features</h2>

        <div className={classes.feature}>
          <h3>Connect with Alumni</h3>
          <p>
            Our app allows you to reconnect with alumni from your institution.
            Browse alumni profiles, send connection requests, and stay updated
            on their career journeys. Networking with alumni can open up new
            opportunities and provide valuable mentorship.
          </p>
        </div>

        <div className={classes.feature}>
          <h3>Add Connections</h3>
          <p>
            Build your network by adding connections with professionals in your
            field. By connecting with others, you expand your professional
            circle and increase the chances of finding job opportunities,
            collaborations, and learning new skills.
          </p>
        </div>

        <div className={classes.feature}>
          <h3>Look for Jobs</h3>
          <p>
            Searching for jobs has never been easier. You can explore various
            job listings tailored to your skills and interests. Apply directly
            through the platform, and get updates on your applications.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={classes.faq}>
        <h2>Frequently Asked Questions (FAQ)</h2>
        <div className={classes.faqItem}>
          <h3>How do I connect with an alumni?</h3>
          <p>
            Simply search for alumni from your institution, view their profiles,
            and click "Connect" to send a connection request. If they accept,
            you’ll be connected and can start messaging.
          </p>
        </div>
        <div className={classes.faqItem}>
          <h3>How can I search for jobs?</h3>
          <p>
            Navigate to the 'Jobs' section, where you can filter and search for
            jobs based on location, industry, or job title. You can also save
            jobs to apply to them later.
          </p>
        </div>
        <div className={classes.faqItem}>
          <h3>Can I get job recommendations?</h3>
          <p>
            Yes, we provide personalized job recommendations based on your
            profile, skills, and interests.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={classes.contact}>
        <h2>Contact Support</h2>
        <p>If you need further assistance, don't hesitate to contact us.</p>
        <p>
          Email us at:{" "}
          <a href="mailto:support@ourapp.com">support@ourapp.com</a>
        </p>
      </section>
    </div>
  );
};

export default Help;

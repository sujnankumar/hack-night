import React, { useState } from "react";
import classes from "./Connections.module.css";

// Dummy connection data
const connections = [
  {
    imgScr: "",
    name: "Leroy Jenkins",
    userName: "oeu",
    job: "Full-stack developer",
  },
  {
    imgScr: "",
    name: "Jane Doe",
    userName: "janedoe",
    job: "Software Engineer",
  },
  // Add more connection data as needed
];

// Dummy invitations data
const invitations = [
  {
    imgScr: "",
    name: "John Smith",
    userName: "john_smith",
    job: "Data Scientist",
  },
  {
    imgScr: "",
    name: "Alice Cooper",
    userName: "alicec",
    job: "Product Manager",
  },
];

const Connections = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedInvitation, setSelectedInvitation] = useState(null);

  const handleAccept = () => {
    alert("Connection request accepted!");
    setShowModal(false);
  };

  const handleReject = () => {
    alert("Connection request rejected!");
    setShowModal(false);
  };

  const handleModalOpen = (invitation) => {
    setSelectedInvitation(invitation);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedInvitation(null);
  };

  return (
    <div className={classes.mainContainer}>
      {/* Invitations Section */}
      <div className={classes.invitationSection}>
        <h2 className={classes.sectionTitle}>Connection Invitations</h2>
        {invitations.length > 0 ? (
          <div className={classes.invitationsList}>
            {invitations.map((invitation, index) => (
              <div key={index} className={classes.invitationCard}>
                <img
                  src={invitation.imgScr}
                  alt={invitation.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className={classes.invitationDetails}>
                  <h3 className={classes.invitationName}>{invitation.name}</h3>
                  <p className={classes.invitationJob}>{invitation.job}</p>
                  <button
                    className={classes.invitationButton}
                    onClick={() => handleModalOpen(invitation)}
                  >
                    View Request
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No new connection invitations.</p>
        )}
      </div>

      {/* Connections Section */}
      <div className={classes.connectionSection}>
        <h2 className={classes.sectionTitle}>Your Connections</h2>
        {connections.map((connection, index) => (
          <div key={index} className={classes.connectionCard}>
            <img
              src={connection.imgScr}
              alt={connection.name}
              className="w-32 h-32 mx-auto rounded-full"
            />
            <div className="text-center">
              <h2 className="text-xl font-semibold">{connection.name}</h2>
              <p className="text-sm text-gray-600">{connection.job}</p>
              <a href="#" className="text-purple-600">
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Accepting or Rejecting Invitation */}
      {showModal && (
        <div className={classes.modalOverlay}>
          <div className={classes.modalContent}>
            <h3 className={classes.modalTitle}>
              Connection Request from {selectedInvitation.name}
            </h3>
            <p className={classes.modalJob}>{selectedInvitation.job}</p>
            <div className={classes.modalActions}>
              <button className={classes.acceptButton} onClick={handleAccept}>
                Accept
              </button>
              <button className={classes.rejectButton} onClick={handleReject}>
                Reject
              </button>
            </div>
            <button className={classes.closeModal} onClick={handleModalClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Connections;

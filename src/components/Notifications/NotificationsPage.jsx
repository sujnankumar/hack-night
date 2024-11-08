import { FaTrash, FaBell } from 'react-icons/fa';
import React, { useState, useEffect } from "react";
import NotificationModal from "./NotificationModal";
import "./Notifications.css";
import axiosInstance from "../../axios"; // Import axios instance

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [selectedNotification, setSelectedNotification] = useState(null);

  // Fetch notifications from the API on component mount
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axiosInstance.get("/api/get_notifications");
        setNotifications(response.data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []); // Empty dependency array to run this effect once when the component mounts

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification); // Set the selected notification for modal display
  };

  const closeModal = () => {
    setSelectedNotification(null); // Close modal by setting selectedNotification to null
  };

  const deleteNotification = (indexToDelete) => {
    setNotifications(notifications.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="notifications-page min-h-screen bg-transparent p-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-purple-600 mb-8 flex items-center gap-2">
        <FaBell /> Notifications
      </h2>

      <ul className="notifications-list w-full max-w-3xl space-y-4">
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <li
              key={index}
              className="notification-item bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-shadow duration-200"
              onClick={() => handleNotificationClick(notification)}
            >
              <h3 className="text-lg font-semibold text-white">
                {notification.title}
              </h3>
              <p className="text-sm text-gray-400">
                {new Date(notification.timestamp).toLocaleString()}
              </p>
            </li>
          ))
        ) : (
          <p className="text-white">No notifications available.</p>
        )}
      </ul>

      {/* Display modal if a notification is selected */}
      {selectedNotification && (
        <NotificationModal
          notification={selectedNotification} // Correct prop name passed here
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default NotificationsPage;

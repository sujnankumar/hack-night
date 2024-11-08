// NotificationsPage.js
import React, { useState } from 'react';
import { FaTrash, FaBell } from 'react-icons/fa';
import NotificationModal from './NotificationModal';
import './Notifications.css';

const NotificationsPage = ({ notifications: initialNotifications }) => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [selectedNotification, setSelectedNotification] = useState(null);

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
        {notifications.map((notification, index) => (
          <li
            key={index}
            className="notification-item bg-gray-900 p-4 rounded-lg shadow-md flex justify-between items-center transition duration-200 transform hover:scale-105 hover:shadow-lg"
          >
            <div onClick={() => handleNotificationClick(notification)} className="flex-grow cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-800">{notification.title}</h3>
              <p className="text-sm text-gray-500">{notification.date}</p>
            </div>
            <button
              onClick={() => deleteNotification(index)}
              className="text-gray-500 hover:text-red-600 transition"
              aria-label="Delete Notification"
            >
              <FaTrash size={18} />
            </button>
          </li>
        ))}
      </ul>

      {/* Display modal if a notification is selected */}
      {selectedNotification && (
        <NotificationModal
          notification={selectedNotification}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default NotificationsPage;

import React, { useState } from 'react';
import NotificationModal from './NotificationModal';
import './Notifications.css';

const NotificationsPage = ({ notifications }) => {
  const [selectedNotification, setSelectedNotification] = useState(null);

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification); // Set the selected notification for modal display
  };

  const closeModal = () => {
    setSelectedNotification(null); // Close modal by setting selectedNotification to null
  };

  return (
    <div className="notifications-page min-h-screen bg-gray-950 p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-purple mb-6">Notifications</h2>

      <ul className="notifications-list w-full max-w-3xl space-y-4">
        {notifications.map((notification, index) => (
          <li
            key={index}
            className="notification-item bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-shadow duration-200"
            onClick={() => handleNotificationClick(notification)}
          >
            <h3 className="text-lg font-semibold text-white">{notification.title}</h3>
            <p className="text-sm text-gray-400">{notification.date}</p>
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

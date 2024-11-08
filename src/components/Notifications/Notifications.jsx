import React from 'react';
import NotificationsPage from './NotificationsPage';

const Notifications = () => {

const sampleNotifications = [
    { title: 'Event Reminder', date: '2024-11-08', content: 'Don’t forget to attend the Alumni Meetup!' },
    { title: 'New Update', date: '2024-11-07', content: 'We have introduced new features on the website.' },
    { title: 'Scheduled Maintenance', date: '2024-11-06', content: 'The site will be down for maintenance on Nov 10.' },
  ];

  // Usage in your App component
  return <NotificationsPage notifications={sampleNotifications} />;

};

export default Notifications;
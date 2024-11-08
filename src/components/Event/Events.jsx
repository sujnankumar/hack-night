import React from 'react';
import EventCardsPage from './EventCardsPage';

const Events = () => {
    const events = [
        {
          eventName: 'Alumni Meetup',
          eventDate: '2024-12-20',
          eventTime: '18:00',
          location: 'University Hall',
          description: 'A gathering of all alumni for networking and fun.',
          image: 'https://example.com/path-to-image.jpg',
        },
        {
          eventName: 'Tech Expo 2024',
          eventDate: '2024-12-05',
          eventTime: '10:00',
          location: 'Tech Convention Center',
          description: 'Showcase of the latest in technology and innovation by students and industry leaders.',
          image: 'https://example.com/tech-expo-image.jpg',
        },
        {
          eventName: 'Coding Bootcamp',
          eventDate: '2024-12-10',
          eventTime: '09:00',
          location: 'Engineering Building, Room 205',
          description: 'An intensive coding bootcamp for beginners and enthusiasts. Covering Python, JavaScript, and more.',
          image: 'https://example.com/bootcamp-image.jpg',
        },
        {
          eventName: 'Sports Fest',
          eventDate: '2024-12-15',
          eventTime: '08:00',
          location: 'Main Sports Complex',
          description: 'Annual sports event with a variety of competitions in athletics, football, basketball, and more.',
          image: 'https://example.com/sports-fest-image.jpg',
        },
        {
          eventName: 'Hackathon 2024',
          eventDate: '2024-12-18',
          eventTime: '09:00',
          location: 'Innovation Lab',
          description: '24-hour hackathon to solve real-world problems using tech. Great prizes and networking opportunities!',
          image: 'https://example.com/hackathon-image.jpg',
        },
        {
          eventName: 'Cultural Fest',
          eventDate: '2025-01-10',
          eventTime: '16:00',
          location: 'Auditorium',
          description: 'A vibrant showcase of music, dance, and cultural performances from around the world.',
          image: 'https://example.com/cultural-fest-image.jpg',
        },
        {
          eventName: 'AI Conference',
          eventDate: '2025-01-15',
          eventTime: '09:00',
          location: 'Tech Hall 1',
          description: 'A conference dedicated to advancements in AI, featuring keynote speakers and hands-on workshops.',
          image: 'https://example.com/ai-conference-image.jpg',
        },
        {
          eventName: 'Job Fair 2025',
          eventDate: '2025-01-20',
          eventTime: '10:00',
          location: 'Career Center',
          description: 'Meet recruiters from top companies, get career advice, and apply for internships and full-time roles.',
          image: 'https://example.com/job-fair-image.jpg',
        },
        {
          eventName: 'Blockchain Workshop',
          eventDate: '2025-02-05',
          eventTime: '13:00',
          location: 'Lab 304',
          description: 'A hands-on workshop on blockchain technology and cryptocurrency, suitable for all skill levels.',
          image: 'https://example.com/blockchain-workshop-image.jpg',
        },
        {
          eventName: 'Robotics Competition',
          eventDate: '2025-02-15',
          eventTime: '11:00',
          location: 'Robotics Lab',
          description: 'A robotics competition where teams compete to build and program robots to complete various tasks.',
          image: 'https://example.com/robotics-competition-image.jpg',
        },
      ];
      
  return <EventCardsPage events={events} />;
};

export default Events;

import React, { useState } from 'react';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';

const defaultChats = [
  {
    id: 1,
    name: 'Elon Musk',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfoHR4N4fK95SQ6cyL0knP9vAMcWa2hrjNh2lv-c4wbA&s',
    unread: 0,
    messages: [
      { me: true, text: 'Hey Elon!', time: '11:45 AM' },
      { me: false, text: 'Hello!', time: '11:50 AM' },
    ],
  },
  {
    id: 2,
    name: 'Jeff Bezos',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCc9PbZelzVjq69dEdXcIf46XY9fNZZmfdKM7x8pW7fw&s',
    unread: 1,
    messages: [
      { me: true, text: 'Hey Jeff, what’s up?', time: '12:00 PM' },
      { me: false, text: 'Not much, just relaxing. How about you?', time: '12:05 PM' },
    ],
  },
  {
    id: 3,
    name: 'Bill Gates',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHQjRmDeuuxG8HlJ4lFrd-pA9fCOFgS3pM2D8uJ28XmV&s',
    unread: 2,
    messages: [
      { me: true, text: 'Hey Bill, did you see the new tech announcement?', time: '1:00 PM' },
      { me: false, text: 'Yes, it’s exciting! I’ve been reading up on it.', time: '1:02 PM' },
      { me: true, text: 'Let’s discuss it tomorrow?', time: '1:05 PM' },
    ],
  },
  {
    id: 4,
    name: 'Sundar Pichai',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnGgGqaIzNFWgxtxzbgzYbKhFeffpzV2zWttVQpz9XyQ&s',
    unread: 0,
    messages: [
      { me: true, text: 'Sundar, are we on for the meeting at 3?', time: '2:30 PM' },
      { me: false, text: 'Yes, looking forward to it!', time: '2:32 PM' },
    ],
  },
  {
    id: 5,
    name: 'Mark Zuckerberg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1qgiyjS7Zf31H8b5WdxvYn4un2dtE5fuN7dkO7Is_TQ&s',
    unread: 3,
    messages: [
      { me: true, text: 'Hey Mark, have you seen the new updates for Facebook?', time: '3:00 PM' },
      { me: false, text: 'Yes, some interesting changes. Let’s chat more about it later.', time: '3:05 PM' },
      { me: true, text: 'Cool, I’ll catch up with you tomorrow then.', time: '3:10 PM' },
      { me: false, text: 'Sounds good!', time: '3:15 PM' },
    ],
  },
  {
    id: 6,
    name: 'Tim Cook',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-XbH9hXhZmUtsSvLFy4KzK5qXbmqwsSzCvwTTfktcew&s',
    unread: 0,
    messages: [
      { me: true, text: 'Tim, when is the next Apple event?', time: '4:00 PM' },
      { me: false, text: 'It’s scheduled for next week. I’ll send you the invite.', time: '4:10 PM' },
    ],
  },
  {
    id: 7,
    name: 'Satya Nadella',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xzm9LzNsUs3rhQWOfAvHL4aKHmuOlw5vLBtN3w9Vzg&s',
    unread: 4,
    messages: [
      { me: true, text: 'Satya, do you have any updates on Azure?', time: '5:00 PM' },
      { me: false, text: 'I’m currently working on some enhancements, will update soon.', time: '5:05 PM' },
      { me: true, text: 'Great, let’s catch up in the evening.', time: '5:10 PM' },
      { me: false, text: 'Sure, talk to you later!', time: '5:15 PM' },
    ],
  },
  {
    id: 8,
    name: 'Sheryl Sandberg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yFLhSg8yxA3wTXnxWlHy_StRZzF4L_rPHTm7q0k6aQ&s',
    unread: 0,
    messages: [
      { me: true, text: 'Sheryl, are we ready for the board meeting?', time: '6:00 PM' },
      { me: false, text: 'Yes, everything is set. I’ll see you there.', time: '6:05 PM' },
    ],
  },
  {
    id: 9,
    name: 'Larry Page',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4lAqLZNGPzj0wTqE2VtJS2mB8s4sCqA1p4wwXrZjySYQ&s',
    unread: 1,
    messages: [
      { me: true, text: 'Hey Larry, did you check out the new Google project?', time: '7:00 PM' },
      { me: false, text: 'Yes, it looks amazing. We’ll discuss it tomorrow!', time: '7:05 PM' },
    ],
  },
  {
    id: 10,
    name: 'Jack Dorsey',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHVFpnizV_d-7VpGq-Vh0rG9JybLgQ-e20v0qIuFjeQ&s',
    unread: 2,
    messages: [
      { me: true, text: 'Jack, have you seen the latest Twitter update?', time: '8:00 PM' },
      { me: false, text: 'Yes, I’m going through it now. Let’s talk about it later.', time: '8:05 PM' },
      { me: true, text: 'Sure, let’s catch up tomorrow!', time: '8:10 PM' },
    ],
  },
];

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="chat flex flex-row w-full">
      <ChatList chats={defaultChats} setSelectedChat={setSelectedChat} />
      <ChatWindow chats={defaultChats} selectedChat={selectedChat} setSelectedChat={setSelectedChat} />
    </div>
  );
};

export default Chat;

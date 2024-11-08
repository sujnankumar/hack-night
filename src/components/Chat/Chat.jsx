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
    image: 'https://th.bing.com/th?q=Profile+for+Boys&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247',
    unread: 1,
    messages: [
      { me: true, text: 'Hey Jeff, what’s up?', time: '12:00 PM' },
      { me: false, text: 'Not much, just relaxing. How about you?', time: '12:05 PM' },
    ],
  },
  {
    id: 3,
    name: 'Bill Gates',
    image: 'https://th.bing.com/th/id/OIP.YDyoIafIwW1tILED3HgZRQHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
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
    image: 'https://th.bing.com/th/id/OIP.WazsBZZNILHEXLo0CyWlpAHaJO?w=136&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    unread: 0,
    messages: [
      { me: true, text: 'Sundar, are we on for the meeting at 3?', time: '2:30 PM' },
      { me: false, text: 'Yes, looking forward to it!', time: '2:32 PM' },
    ],
  },
  {
    id: 5,
    name: 'Mark Zuckerberg',
    image: 'https://th.bing.com/th?q=Profile+for+Boys&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247',
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
    image: 'https://th.bing.com/th/id/OIP.WazsBZZNILHEXLo0CyWlpAHaJO?w=136&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    unread: 0,
    messages: [
      { me: true, text: 'Tim, when is the next Apple event?', time: '4:00 PM' },
      { me: false, text: 'It’s scheduled for next week. I’ll send you the invite.', time: '4:10 PM' },
    ],
  },
  {
    id: 7,
    name: 'Satya Nadella',
    image: 'https://th.bing.com/th/id/OIP.YDyoIafIwW1tILED3HgZRQHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
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
    image: 'https://th.bing.com/th/id/OIP.WazsBZZNILHEXLo0CyWlpAHaJO?w=136&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    unread: 0,
    messages: [
      { me: true, text: 'Sheryl, are we ready for the board meeting?', time: '6:00 PM' },
      { me: false, text: 'Yes, everything is set. I’ll see you there.', time: '6:05 PM' },
    ],
  },
  {
    id: 9,
    name: 'Larry Page',
    image: 'https://th.bing.com/th?q=Profile+for+Boys&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247',
    unread: 1,
    messages: [
      { me: true, text: 'Hey Larry, did you check out the new Google project?', time: '7:00 PM' },
      { me: false, text: 'Yes, it looks amazing. We’ll discuss it tomorrow!', time: '7:05 PM' },
    ],
  },
  {
    id: 10,
    name: 'Jack Dorsey',
    image: 'https://th.bing.com/th/id/OIP.YDyoIafIwW1tILED3HgZRQHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
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
    <div className="chat flex flex-row w-full h-full">
      {/* Chat List (left) */}
      <ChatList chats={defaultChats} setSelectedChat={setSelectedChat} />
      {/* Chat Window (right) */}
      <ChatWindow chats={defaultChats} selectedChat={selectedChat} setSelectedChat={setSelectedChat} />
    </div>
  );
};


export default Chat;

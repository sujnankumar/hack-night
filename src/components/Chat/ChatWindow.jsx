import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { IoMdSend, IoMdFlash, IoMdFlashOff } from 'react-icons/io';
import { GrEmoji } from 'react-icons/gr';

const ChatWindow = ({ chats, selectedChat, setSelectedChat }) => {
  if (!selectedChat) {
    return (
      <div className="chat-window w-full sm:w-2/3 bg-dark-900 p-6 flex justify-center items-center bg-gray-950">
        <p className="text-gray-400">Select a chat to start messaging.</p>
      </div>
    );
  }

  const currentChat = chats.find(({ id }) => id === selectedChat);
  const [flashlightOn, setFlashlightOn] = useState(false);
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message submission
      console.log('Message Sent:', message);

      // Add new message to current chat
      currentChat.messages.push({
        text: message,
        me: true,
        time: new Date().toLocaleTimeString(),
      });

      // Clear the input field
      setMessage('');
    }
  };

  return (
    <div className="chat-window w-full sm:w-2/3 bg-dark-900 p-6 flex flex-col bg-gray-950">
      <header className="chat-header flex items-center justify-between bg-dark-800 p-4 rounded-lg mb-4">
        <FaArrowLeft onClick={() => setSelectedChat(null)} className="text-white cursor-pointer" />
        <img src={currentChat.image} alt={currentChat.name} className="w-12 h-12 rounded-full" />
        <h4 className="text-white font-semibold">{currentChat.name}</h4>
        <button onClick={() => setFlashlightOn(!flashlightOn)} className="text-2xl text-yellow-500 ml-2">
          {flashlightOn ? <IoMdFlash /> : <IoMdFlashOff />}
        </button>
      </header>

      <section className="chat-messages flex-grow overflow-y-auto p-4" style={{ maxHeight: 'calc(100vh - 250px)', scrollbarWidth: 'thin', scrollbarColor: '#282727 transparent' }}>
        {currentChat.messages.map(({ text, me, time }, i) => (
          <div key={i} className={`message ${me ? 'sent' : 'received'} p-2 my-2`}>
            <div className={`message-content flex ${me ? 'justify-end' : 'justify-start'} items-start`}>
              <p className={`text-sm ${me ? 'text-right text-blue-500' : 'text-left text-gray-400'} max-w-xs`}>
                {text}
              </p>
            </div>
            <span className={`text-xs text-gray-500 ${me ? 'text-right' : 'text-left'} mt-1 block`}>
              {time}
            </span>
          </div>
        ))}
      </section>

      <form onSubmit={onSubmit} className="chat-input flex items-center bg-dark-700 p-3 rounded-full mt-4 bg-gray-900">
        <GrEmoji className="text-2xl text-gray-400 cursor-pointer mr-2" />
        <input
          name="msg"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Type a message..."
          className="bg-transparent text-white flex-grow mx-4 p-2 rounded-lg focus:outline-none"
        />
        <button type="submit" className="text-2xl text-blue-500">
          <IoMdSend />
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;

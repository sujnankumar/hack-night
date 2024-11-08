import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { IoMdSend, IoMdFlash, IoMdFlashOff } from 'react-icons/io';
import { GrEmoji } from 'react-icons/gr';

const ChatWindow = ({ chats, selectedChat, setSelectedChat }) => {
  if (!selectedChat) {
    return <div className="chat-window w-2/3 bg-dark-900 p-6">Select a chat to start messaging.</div>;
  }

  const currentChat = chats.find(({ id }) => id === selectedChat);
  const [flashlightOn, setFlashlightOn] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const msg = e.target.msg.value;
    e.target.reset();
    // Handle message submission
    console.log(msg);
  };

  return (
    <div className="chat-window w-2/3 bg-dark-900 p-6 flex flex-col">
      <header className="chat-header flex items-center justify-between bg-dark-800 p-4 rounded-lg mb-4">
        <FaArrowLeft onClick={() => setSelectedChat(null)} className="text-white" />
        <img src={currentChat.image} alt={currentChat.name} className="w-12 h-12 rounded-full" />
        <h4 className="text-white font-semibold">{currentChat.name}</h4>
      </header>

      <section className="chat-messages flex-grow overflow-y-auto p-4">
        {currentChat.messages.map(({ text, me, time }, i) => (
          <div key={i} className={`message ${me ? 'sent' : 'received'} p-2 my-2`}>
            <p className={`text-sm ${me ? 'text-right text-blue-500' : 'text-left text-gray-400'}`}>{text}</p>
            <span className="text-xs text-gray-500">{time}</span>
          </div>
        ))}
      </section>

      <form onSubmit={onSubmit} className="chat-input flex items-center bg-dark-700 p-4 rounded-lg mt-4">
        <GrEmoji className="text-2xl text-gray-400 cursor-pointer" />
        <input
          name="msg"
          type="text"
          required
          placeholder="Type a message"
          className="bg-transparent text-white flex-grow mx-4 p-2 rounded-lg focus:outline-none"
        />
        {flashlightOn ? (
          <IoMdFlashOff className="text-2xl text-gray-400 cursor-pointer" onClick={() => setFlashlightOn(false)} />
        ) : (
          <IoMdFlash className="text-2xl text-gray-400 cursor-pointer" onClick={() => setFlashlightOn(true)} />
        )}
        <button type="submit" className="text-2xl text-blue-500">
          <IoMdSend />
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;

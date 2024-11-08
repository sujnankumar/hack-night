import React from 'react';

const ChatList = ({ chats, setSelectedChat }) => {
  return (
    <div className="chat-list w-1/3 bg-dark-800 p-4 overflow-y-auto">
      <h2 className="text-xl font-bold">Chats</h2>
      <div className="chat-items">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="chat-item p-2 flex items-center cursor-pointer hover:bg-dark-700 rounded"
            onClick={() => setSelectedChat(chat.id)}
          >
            <img src={chat.image} alt={chat.name} className="w-12 h-12 rounded-full mr-4" />
            <div>
              <h4 className="font-semibold">{chat.name}</h4>
              <p className="text-sm text-gray-400">{chat.messages[chat.messages.length - 1].text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;

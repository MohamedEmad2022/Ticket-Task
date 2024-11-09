
import React from 'react';
import { useMessages } from '../hooks/useMessages';

const MessageList: React.FC = () => {
  const { data: messages, isLoading, error } = useMessages();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading messages</p>;

  return (
    <div className="flex-1 overflow-y-auto bg-blue-50 p-4 rounded-lg">
      {messages?.map((message) => (
        <div key={message.id} className={`p-4 my-2 rounded-lg ${message.sender === "محمد عماد" ? "bg-green-100 text-right" : "bg-gray-100"}`}>
          <p className="text-sm font-semibold">
            {message.sender} <span className="text-xs text-gray-500"> {message.time}</span>
          </p>
          <p className="mt-1">{message.text}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageList;

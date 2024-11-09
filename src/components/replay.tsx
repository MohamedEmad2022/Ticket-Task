import React, { useState } from 'react';
import { useMessages } from '../hooks/useMessages';

const ReplayBox: React.FC = () => {

    const [text, setText] = useState('');
  const { sendMessage } = useMessages();

  const handleSendMessage = () => {
    if (text.trim()) {
      const newMessage = {
        sender: "محمد عماد", 
        time: new Date().toLocaleTimeString(),
        text: text,
      };
      sendMessage(newMessage); 
      setText(''); 
    }
  };

  return (
    <div className="mt-4 flex flex-col space-y-2">
      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="إضافة نص"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        onClick={handleSendMessage}
        className="self-end bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
      >
        إرسال
      </button>
    </div>
  );
};

export default ReplayBox;

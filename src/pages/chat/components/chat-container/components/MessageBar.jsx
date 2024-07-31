import { useAppStore } from '@/store';
import { useSocket } from '@/context/SocketContext';
import React, { useState, useRef, useEffect } from 'react';
import { FaPaperclip, FaPaperPlane } from 'react-icons/fa';

const MessageBar = () => {
  const socket = useSocket();
  const { selectedChatType, selectedChatData, userInfo } = useAppStore();
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const handleSendMessage = async () => {
    if (!socket) {
      console.error('Socket is not available');
      return;
    }

    let fileUrl = undefined;
    if (file) {
      // Handle file upload logic here (e.g., upload to server and get URL)
      // Assuming `uploadFile` is a function that uploads the file and returns the URL
      try {
        fileUrl = await uploadFile(file);
      } catch (error) {
        console.error('File upload error:', error);
      }
    }

    try {
      if (selectedChatType === "contact") {
        socket.emit("sendMessage", {
          sender: userInfo.id,
          content: message,
          recipient: selectedChatData._id,
          messageType: "text",
          fileUrl: fileUrl,
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }

  };

  return (
    <div className="flex items-center bg-[#1c1d25] p-3 rounded-md">
      <input
        type="text"
        className="flex-1 p-2 border-none rounded-md mr-2 bg-[#2e2f37] text-white"
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <label className="relative mr-2">
        <FaPaperclip className="text-white cursor-pointer" />
        <input
          type="file"
          className="hidden"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </label>
      <button
        className="bg-[#2e2f37] border-none p-2 rounded-md cursor-pointer hover:bg-[#3a3b45]"
        onClick={handleSendMessage}
      >
        <FaPaperPlane className="text-white" />
      </button>
    </div>
  );
};

export default MessageBar;

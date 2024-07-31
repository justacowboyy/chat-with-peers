import React from "react";
import { useAppStore } from "@/store";
import ContactsContainer from "./components/contacts-container";
import EmptyChatContainer from "./components/empty-chat-container";
import ChatContainer from "./components/chat-container";

function Chat() {
  const { selectedChatType, selectedChatData } = useAppStore();
  return (
    <div className="flex h-[100vh] text-white overflow-hidden">
      <ContactsContainer />
      {selectedChatType === undefined ? (
        <EmptyChatContainer />
      ) : (
        <ChatContainer />
      )}
    </div>
  );
}
export default Chat;

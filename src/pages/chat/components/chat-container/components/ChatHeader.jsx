import { useAppStore } from "@/store";
import { RiCloseFill } from "react-icons/ri";

const ChatHeader = () => {
  const { closeChat, selectedChatData } = useAppStore();
  return (
    <div className="relative h-[6vh] border-b-2 border-[#2f303b] flex items-center justify-between px-20 py-2">
      <div className="flex-1 flex justify-center">
        <h6 className=" text-neutral-400  ">
          {selectedChatData?.firstName} {selectedChatData?.lastName}
        </h6>
      </div>
      <button
        className="text-neutral-500 focus:border-none focus:outline-none focus:text-white duration-300 transition-all absolute right-5"
        onClick={closeChat}
      >
        <RiCloseFill className="text-3xl" />
      </button>
    </div>
  );
};

export default ChatHeader;

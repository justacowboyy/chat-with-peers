import React from "react";
import 'animate.css';

function EmptyChatContainer() {
  return (
    <div className="flex-1 md:bg-[#1c1d25] md:flex flex-col justify-center items-center hidden duration-1000 transition-all">
      <h1 className="animate__animated animate__fadeInDown text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#818cf8]">
        Welcome to Chat-with-peers
      </h1>
    </div>
  );
}

export default EmptyChatContainer;

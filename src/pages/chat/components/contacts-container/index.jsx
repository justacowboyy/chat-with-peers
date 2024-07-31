import React from "react";
import NewDm from "./NewDm";
import ProfileInfo from "./ProfileInfo";
export const Logo = () => {
  return (
    <div className="flex p-5 justify-start items-center gap-2">
      <svg
        id="logo-38"
        width="58"
        height="32"
        viewBox="0 0 78 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z"
          className="custom"
          fill="#8388ec"
        />
        <path
          d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z"
          className="compl1"
          fill="#975aed"
        />
        <path
          d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z"
          className="compl2"
          fill="#a16ee8"
        />
      </svg>
      <span className="text-xl font-semibold">Chat-with-peers</span>
    </div>
  );
};

function ContactsContainer() {
  return (
    <div className="relative md:w-[35vw] lg:w-[30vw] xl:w-[20vw] bg-[#1b1c24] border-r-2 border-[#2f303b] w-full">
      <div className="pt-3">
        <Logo />
      </div>
      <div className="my-5">
        <div className="flex items-center justify-between pr-10">
          <Title text="Direct Messages"></Title>
          <NewDm/>
        </div>
      </div>
      <div className="my-5">
        <div className="flex items-center justify-between pr-10">
          <Title text="Channels"></Title>
        </div>
      </div>
      <ProfileInfo/>
    </div>
  );
}

export default ContactsContainer;

const Title=({text})=>{
  return(
  <h6 className=" tracking-widest text-neutral-400 pl-10 text-opacity-90 font-light text-sm">{text}</h6>
  )
}
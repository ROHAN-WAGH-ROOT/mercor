import React from "react";
import Bulb from "../Images/lamp-on.svg";

export default function Thougth() {
  return (
    <div>
      <div className="flex z-10 bg-[#F5F5F5] text-center justify-center m-auto rounded-full w-20 h-20 relative top-12">
        <img
          className="flex bg-cover m-auto align-middle text-center justify-center w-6 h-6"
          src={Bulb}
          alt="logo"
        ></img>
      </div>
      <div className="opacity-1 bg-[#F5F5F5] w-auto align-middle justify-center m-auto p-3 rounded-2xl">
        <div className="mt-9 mb-1 flex text-center m-auto justify-center text-sm font-sans font-medium">
          Thoughts Time
        </div>
        <div className="text-center text-[#787486] text-sm font-sans font-medium font-normal p-2">
          We don’t have any notice for you, till then you can share your
          thoughts with your peers.
        </div>
        <button className="flex w-auto px-4 py-2 text-center text-sm font-medium font-sans justify-center m-auto bg-white ">
          write a message
        </button>
      </div>
    </div>
  );
}

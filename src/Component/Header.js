import React from "react";
import Calender from "../Images/calendar-2.svg";
import Message from "../Images/message-question.svg";
import Notification from "../Images/notification.svg";
import Mask from "../Images/Mask Group.svg";
import downarrow from "../Images/arrow-down.svg";
import Search from "../Images/search-normal.svg";

export default function Header() {
  return (
    <div className="flex border-b p-2 justify-between 2xl:w-auto">
      <div className="flex m-0 p-0 text-center justify-center 2xl:min-w-fit">
        <img
          alt="logo"
          className="relative w-4 h-4 align-middle top-4 left-8"
          src={Search}
        />
        <input
          type="search"
          placeholder="Search for anything..."
          className="flex pl-8 py-2 w-96 mr-40 min-w-fit m-auto ml-2 focus-visible:border outline-none border bg-[#F5F5F5]"
        ></input>
      </div>
      <div className="flex text-center justify-center">
        <div className="p-2 w-16 h-18">
          <img src={Calender} alt="logo" />
        </div>
        <div className="p-2 w-16 h-18">
          <img src={Message} alt="logo" />
        </div>
        <div className="p-2 w-16 h-18">
          <img src={Notification} alt="logo" />
        </div>
      </div>
      <div className="flex m-auto ml-10 mr-0 min-w-fit">
        <div className="mr-2 pb-1">
          <div>Anima Agrawal</div>
          <div className="text-[#787486]">U.P, India</div>
        </div>
        <div className="flex">
          <img className="mr-2" src={Mask} alt="logo" />
          <img src={downarrow} alt="logo" />
        </div>
      </div>
      <div></div>
    </div>
  );
}

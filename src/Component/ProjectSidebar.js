import React from "react";
import Opt from "../Images/opt.svg";
// import { Tooltip as ReactTooltip } from "react-tooltip";

export default function ProjectSidebar({ title, sidebarClick = true }) {
  return (
    <div>
      <div className="flex m-3 align-middle text-center active:bg-[#5030E514] hover:bg-[#5030E514] cursor-pointer rounded-lg">
        <div
          data-tooltip-target="tooltip-light"
          className={
            title === "Mobile App"
              ? `flex border m-5 rounded-full ${
                  !sidebarClick ? "w-6 h-4" : "w-2 h-2"
                } bg-[#7AC555]`
              : title === "Website Redesign"
              ? `flex border m-5 rounded-full ${
                  !sidebarClick ? "w-6 h-4" : "w-2 h-2"
                } bg-[#FFA500]`
              : title === "Design System"
              ? `flex border m-5 rounded-full ${
                  !sidebarClick ? "w-6 h-4" : "w-2 h-2"
                } bg-[#E4CCFD]`
              : `flex border m-5 rounded-full ${
                  !sidebarClick ? "w-6 h-4" : "w-2 h-2"
                } bg-[#76A5EA]`
          }
        >
          {/* {color} */}
        </div>

        <div className="flex text-base ml-0 text-center justify-center align-middle m-auto font-semibold">
          {sidebarClick ? title : ""}
          {sidebarClick === undefined && title}
        </div>

        {sidebarClick && <img className="m-2 mr-3" src={Opt} alt="logo" />}
      </div>
    </div>
  );
}

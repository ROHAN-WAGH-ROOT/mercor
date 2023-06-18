import React, { useState } from "react";
import Arrow from "../Images/Group 639.svg";
import Circle from "../Images/Group 7.svg";
import SidebarComp from "./sidebarComp";
import Home from "../Images/home.svg";
import Message from "../Images/message.svg";
import Settings from "../Images/setting-2.svg";
import AddSquare from "../Images/add-square.svg";

import Tasks from "../Images/task-square.svg";
import Members from "../Images/profile-2user.svg";
import ProjectSidebar from "./ProjectSidebar";
import Thougth from "./Thougth";

export default function Sidebar() {
  const [sidebarClick, setSidebarClick] = useState(true);
  return (
    <div>
      {sidebarClick ? (
        <div className="w-60 border-r h-full">
          <div className="flex m-0 border-b p-5 min-w-fit">
            <img src={Circle} alt="logo" />
            <div className="flex font-serif font-semibold text-xl font-sans m-auto min-w-fit">
              Project M.
            </div>
            <div className="flex justify-end mr-0">
              <img
                className="cursor-pointer w-6 h-6"
                onClick={() => {
                  setSidebarClick(!sidebarClick);
                }}
                alt="logo"
                src={Arrow}
              ></img>
            </div>
          </div>
          <div>
            <SidebarComp title={"Home"} image={Home} />
            <SidebarComp title={"Message"} image={Message} />
            <SidebarComp title={"Tasks"} image={Tasks} />
            <SidebarComp title={"Members"} image={Members} />
            <SidebarComp title={"Settings"} image={Settings} />
          </div>
          <div>
            <hr className="border-1 border-[#DBDBDB] align-middle m-2 mt-3" />
          </div>
          <div className="mt-5">
            <div className="flex justify-between">
              <div className="font-sans text-xs font-bold text-[#787486] ml-5">
                MY PROJECTS
              </div>
              <img className="flex justify-end mr-2" src={AddSquare} alt="logo" />
            </div>
            <ProjectSidebar title={"Mobile App"} />
            <ProjectSidebar title={"Website Redesign"} />
            <ProjectSidebar title={"Design System"} />
            <ProjectSidebar title={"Wireframes"} />
          </div>
          <div className="mx-4 mb-4">
            <Thougth />
          </div>
        </div>
      ) : (
        <div className="w-20 border-r h-full">
          <div className="flex m-0 border-b p-5 min-w-fit">
            <img src={Circle} alt="logo" />
            <div className="flex justify-end mr-0">
              <img
                className="cursor-pointer w-6 h-6 rotate-180"
                onClick={() => {
                  setSidebarClick(!sidebarClick);
                }}
                src={Arrow}
                alt="logo"
              ></img>
            </div>
          </div>
          <div className=" p-2">
            <img className="m-auto p-2" alt="logo" src={Home} />
            <img className="m-auto p-2" alt="logo" src={Message} />
            <img className="m-auto p-2" alt="logo" src={Tasks} />
            <img className="m-auto p-2" alt="logo" src={Members} />
            <img className="m-auto p-2" alt="logo" src={Settings} />
          </div>
          <div>
            <hr className="border-1 border-[#DBDBDB] align-middle m-2 mt-3" />
          </div>
          <div className="mt-5">
            <ProjectSidebar sidebarClick={sidebarClick} title={"Mobile App"} />
            <ProjectSidebar
              sidebarClick={sidebarClick}
              title={"Website Redesign"}
            />
            <ProjectSidebar
              sidebarClick={sidebarClick}
              title={"Design System"}
            />
            <ProjectSidebar sidebarClick={sidebarClick} title={"Wireframes"} />
          </div>
        </div>
      )}
    </div>
  );
}

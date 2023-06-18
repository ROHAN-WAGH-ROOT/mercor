import React from "react";

export default function SidebarComp({ title, image }) {
  return (
    <div className="cursor-pointer">
      <div className="flex p-1 text-center mx-0">
        <img className="mx-3 w-6 h-6 my-2" src={image}></img>
        <div className="mx-3 my-2 text-base text-center">{title}</div>
      </div>
    </div>
  );
}

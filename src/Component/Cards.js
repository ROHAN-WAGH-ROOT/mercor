import React from "react";
import options from "../Images/opt.svg";
import folder from "../Images/folder-2.svg";
import comment from "../Images/message.svg";
import img1 from "../Images/Ellipse 12.svg";
import img2 from "../Images/Ellipse 14.svg";
import img3 from "../Images/Ellipse 15.svg";
import { Draggable, Droppable } from "react-beautiful-dnd";

export default function Cards({
  index,
  draggableId,
  status,
  title,
  body,
  img = [],
  commentCount,
  fileCount,
}) {
  return (
    <Draggable key={draggableId} draggableId={draggableId} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={"p-4 border w-25 mt-2 bg-[#fff] rounded-lg select-none"}
        >
          <div className="flex justify-between">
            <div
              className={
                status == "Completed"
                  ? "bg-[#83C29D33] text-center text-xs font-medium text-[#68B266] px-2 py-1 p-0 rounded-lg"
                  : "border-red-400 bg-[#DFA87433] text-center text-xs font-medium text-[#FF8551] px-2 py-1 p-0 rounded-lg"
              }
            >
              {status}
            </div>
            <div className="text-center justify-center p-2 mt-2">
              <img src={options} />
            </div>
          </div>
          <div className="text-lg font-sans font-semibold">{title}</div>
          <div className="xl:flex 2xl:flex text-[#787486] font-sans font-normal text-xs sm:block lg:block">
            {img.length > 0
              ? img.map((ele) => {
                  return (
                    <div className="p-1">
                      <img className="m-1" src={ele} />
                    </div>
                  );
                })
              : body}
          </div>
          <div className="flex justify-between mt-3">
            <div className="flex w-8">
              <img className="-ml-2" src={img1} />
              <img className="-ml-2" src={img2} />
              <img className="-ml-2" src={img3} />
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex">
                <div className="ml-1">
                  <img className="w-4 h-4 mt-1" src={comment} />
                </div>
                <div className="ml-1 text-[#787486]">
                  {commentCount} comment
                </div>
              </div>
              <div className="flex">
                <div className="ml-1">
                  <img className="w-4 h-4 mt-1" src={folder} />
                </div>
                <div className="ml-1 text-[#787486]">{fileCount} files</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

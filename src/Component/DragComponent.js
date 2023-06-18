import React from "react";
import Add from "../Images/add-square.svg";
import Cards from "./Cards";

import { Droppable } from "react-beautiful-dnd";

export default function DragComponent({
  todo,
  setTodo,
  progress,
  setProgress,
  done,
  setDone,
}) {
  let count = todo.length + progress.length + done.length;
  return (
    <div className="flex h-screen select-none w-full">
      <div className="w-full mt-10 h-full min-h-min mr-3">
        <Droppable key={3} droppableId="todos">
          {(provided, snapshot) => (
            <div
              className={
                snapshot.isUsingPlaceholder
                  ? " border-2 w-92 mt-2 bg-[#F5F5F5] p-2 rounded-xl h-fit"
                  : "w-92 mt-2 bg-[#F5F5F5] p-2 rounded-xl h-fit"
              }
            >
              <div className="flex justify-between mb-4">
                <div className="flex mt-1">
                  <div className="flex text-base font-medium font-sans ml-2">
                    <div className="w-2 h-2 rounded-full border bg-[#5030E5] mt-2 text-center justify-center"></div>
                    <div className="ml-2">To Do</div>
                  </div>
                  <div className="ml-2 bg-[#E0E0E0] w-6 h-6 rounded-full text-center justify-center">
                    {todo?.length}
                  </div>
                </div>
                <div className="flex">
                  <img
                    alt="logo"
                    onClick={() => {
                      count += 1;
                      setTodo([
                        ...todo,
                        {
                          id: count.toString(),
                          status: "Low",
                          title: `TITLE${count}`,
                          body: "Brainstorming 123 team members diverse experience into play.",
                          img: [],
                          commentCount: 123,
                          fileCount: 123,
                        },
                      ]);
                    }}
                    className="flex w-5 h-5 justify-center text-center align-middle mt-2 cursor-pointer"
                    src={Add}
                  />
                </div>
              </div>
              <hr className="border-b-2 border-slate-800" />

              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={todo.length === 0 ? "h-48" : null}
              >
                {todo.length > 0 &&
                  todo.map((ele, i) => {
                    return (
                      <div
                        key={i}
                        className={
                          snapshot.isUsingPlaceholder
                            ? "border-2 border-dotted bg-[#EBE9F4] mt-1 rounded-lg"
                            : null
                        }
                      >
                        <Cards
                          index={i}
                          draggableId={ele?.id}
                          status={ele?.status}
                          title={ele?.title}
                          body={ele?.body}
                          img={ele?.img?.length > 0 ? ele?.img : []}
                          commentCount={ele?.commentCount}
                          fileCount={ele?.fileCount}
                        />
                      </div>
                    );
                  })}
                {provided.placeholder}
              </div>
            </div>
          )}
        </Droppable>
      </div>
      <Droppable key={1} droppableId="progresss">
        {(provided, snapshot) => (
          <div className="w-full mt-10 h-full mr-3">
            <div className="w-92 mt-2 bg-[#F5F5F5] p-2 rounded-xl h-fit">
              <div className="flex justify-between mb-4">
                <div className="flex mt-1">
                  <div className="flex text-base font-medium font-sans ml-2">
                    <div className="w-2 h-2 rounded-full border bg-[#FFA500] mt-2 text-center justify-center"></div>
                    <div className="ml-2">On Progress</div>
                  </div>
                  <div className="ml-2 bg-[#E0E0E0] w-6 h-6 rounded-full text-center justify-center">
                    {progress?.length}
                  </div>
                </div>
              </div>
              <hr className="border-b-2 border-[#FFA500]" />
              <div
                className={progress.length === 0 ? "h-48" : null}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {progress.length > 0 &&
                  progress.map((ele, i) => {
                    return (
                      <div
                        key={i}
                        className={
                          snapshot.isUsingPlaceholder
                            ? "border-2 border-dotted bg-[#EBE9F4] mt-1 rounded-lg"
                            : null
                        }
                      >
                        <Cards
                          index={i}
                          draggableId={ele?.id}
                          status={ele?.status}
                          title={ele?.title}
                          body={ele?.body}
                          img={ele?.img?.length > 0 ? ele?.img : []}
                          commentCount={ele?.commentCount}
                          fileCount={ele?.fileCount}
                        />
                      </div>
                    );
                  })}
                {provided.placeholder}
              </div>
            </div>
          </div>
        )}
      </Droppable>
      <Droppable key={2} droppableId="dones">
        {(provided, snapshot) => (
          <div className="w-full mt-10 h-full">
            <div className="w-92 mt-2 bg-[#F5F5F5] p-2 rounded-xl h-fit">
              <div className="flex justify-between mb-4">
                <div className="flex mt-1">
                  <div className="flex text-base font-medium font-sans ml-2">
                    <div className="w-2 h-2 rounded-full border bg-[#76A5EA] mt-2 text-center justify-center"></div>
                    <div className="ml-2">Done</div>
                  </div>
                  <div className="ml-2 bg-[#E0E0E0] w-6 h-6 rounded-full text-center justify-center">
                    {done.length}
                  </div>
                </div>
              </div>
              <hr className="border-b-2 border-[#8BC48A]" />
              <div
                className={done.length === 0 ? "h-48" : null}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {done.length > 0 &&
                  done.map((ele, i) => {
                    return (
                      <div
                        key={i}
                        className={
                          snapshot.isUsingPlaceholder
                            ? "border-2 border-dotted bg-[#EBE9F4] mt-1 rounded-lg"
                            : null
                        }
                      >
                        <Cards
                          index={i}
                          draggableId={ele?.id}
                          status={ele?.status}
                          title={ele?.title}
                          body={ele?.body}
                          img={ele?.img?.length > 0 ? ele?.img : []}
                          commentCount={ele?.commentCount}
                          fileCount={ele?.fileCount}
                        />
                      </div>
                    );
                  })}
                {provided.placeholder}
              </div>
            </div>
          </div>
        )}
      </Droppable>
    </div>
  );
}

import React, { useRef, useState } from "react";
import link from "../Images/link.svg";
import pencil from "../Images/pencil.svg";
import plus from "../Images/add-square.svg";
import one from "../Images/Ellipse 12.svg";
import two from "../Images/Ellipse 13.svg";
import three from "../Images/Ellipse 14.svg";
import four from "../Images/Ellipse 15.svg";
import five from "../Images/Ellipse 17.svg";
import Filter from "../Images/filter.svg";
import arrow from "../Images/arrow-down2.svg";
import calender from "../Images/calendar.svg";
import share from "../Images/profile-2user.svg";
import equal from "../Images/Group 612.svg";
import group2 from "../Images/Group2.svg";
import DragComponent from "../Component/DragComponent";
import img from "../Images/unsplash_MicqqGyDQ6w.svg";
import img1 from "../Images/unsplash_BS_1XGRkIH4.svg";
import img2 from "../Images/unsplash_KIqJfzbII9w.svg";
import img3 from "../Images/Plant Care App (Dribbble shot) 1.svg";
import { DragDropContext } from "react-beautiful-dnd";

export default function Containt() {
  const ref = useRef();
  const [value, setValue] = useState("Mobile App");
  const [edit, setEdit] = useState(false);
  const [todo, setTodo] = useState([
    {
      id: "1",
      status: "Low",
      title: "Brainstorming",
      body: "Brainstorming brings team members diverse experience into play.",
      img: [],
      commentCount: 12,
      fileCount: 0,
    },
    {
      id: "2",
      status: "High",
      title: "Research",
      body: "User research helps you to create an optimal product for users.",
      img: [],
      commentCount: 10,
      fileCount: 3,
    },
    {
      id: "3",
      status: "High",
      title: "Wireframes",
      body: "Low fidelity wireframes include the most basic content and visuals.",
      commentCount: 3,
      fileCount: 4,
    },
  ]);
  const [progress, setProgress] = useState([
    {
      id: "4",
      status: "Low",
      title: "Onboarding Illustrations ",
      img: [img],
      commentCount: 14,
      fileCount: 15,
    },
    {
      id: "5",
      status: "High",
      title: "Moodboard",
      img: [img1, img2],
      commentCount: 9,
      fileCount: 10,
    },
  ]);
  const [done, setDone] = useState([
    {
      id: "6",
      status: "Completed",
      title: "Mobile App Design",
      img: [img3],
      commentCount: 12,
      fileCount: 15,
    },
    {
      id: "7",
      status: "Completed",
      title: "Design System",
      body: "It just needs to adapt the UI from what you did before",
      commentCount: 12,
      fileCount: 15,
    },
  ]);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return -1;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index !== source.index
    ) {
      return -1;
    }

    let addCard;
    const firstArray = todo;
    const secondArray = progress;
    const thirdArray = done;

    switch (destination?.droppableId) {
      case "todos":
        addCard =
          source?.droppableId === "todos"
            ? firstArray[source?.index]
            : source?.droppableId === "progresss"
            ? secondArray[source?.index]
            : thirdArray[source?.index];
        firstArray.splice(destination?.index, 0, addCard);
        break;
      case "progresss":
        addCard =
          source?.droppableId === "todos"
            ? firstArray[source?.index]
            : source?.droppableId === "progresss"
            ? secondArray[source?.index]
            : thirdArray[source?.index];
        secondArray.splice(destination?.index, 0, addCard);
        break;
      case "dones":
        addCard =
          source?.droppableId === "todos"
            ? firstArray[source?.index]
            : source.droppableId === "progresss"
            ? secondArray[source?.index]
            : thirdArray[source?.index];
        thirdArray.splice(destination?.index, 0, addCard);
        break;
      default:
        return;
    }

    switch (source?.droppableId) {
      case "todos":
        addCard = firstArray[source?.index];
        firstArray.splice(source?.index, 1);
        break;
      case "progresss":
        addCard = secondArray[source?.index];
        secondArray.splice(source?.index, 1);
        break;
      case "dones":
        addCard = thirdArray[source?.index];
        thirdArray.splice(source?.index, 1);
        break;
      default:
        return;
    }
    setTodo(firstArray);
    setProgress(secondArray);
    setDone(thirdArray);
  };

  const handleEdit = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="px-10 py-8">
      <div className="sm:lg:xl:flex sm:lg:xl:justify-between 2xl:block 2xl:justify-start">
        <div className="flex">
          {edit ? (
            <input
              ref={ref}
              name="name"
              type="text"
              placeholder="Enter name"
              className={`outline-none ${edit ? "visible" : "invisible"}`}
              onChange={(e) => {
                handleEdit(e);
              }}
            />
          ) : (
            <div
              className={`font-semibold text-5xl font-sans ${
                edit ? "invisible" : "visible"
              }`}
            >
              {value}
            </div>
          )}

          <img
            onClick={() => {
              setEdit(!edit);
            }}
            className="w-8 h-8 mt-3 ml-3 bg-[#5030E533] p-1 rounded-lg cursor-pointer"
            src={pencil}
            alt="logo"
          ></img>
          <img
            className="w-8 h-8 mt-3 ml-3 bg-[#5030E533] p-1 rounded-lg cursor-pointer"
            src={link}
            alt="logo"
          ></img>
        </div>
        <div className="flex mt-3 sm:md:lg:mt-2 md:mt-0">
          <img className="cursor-pointer" src={plus} alt="logo" />
          <div className="font-sans font-medium text-base text-center justify-center ml-2 mr-3 mt-2 cursor-pointer">
            Invite
          </div>
          <img className="-ml-2" alt="logo" src={one} />
          <img className="-ml-2" alt="logo" src={two} />
          <img className="-ml-2" alt="logo" src={three} />
          <img className="-ml-2" alt="logo" src={four} />
          <img className="-ml-2" alt="logo" src={five}></img>
          <div className="relative text-center top-2 -left-8 text-[#D25B68] font-medium font-sans text-lg">
            +2
          </div>
        </div>
      </div>
      <div className="sm:lg:xl:flex justify-between 2xl:justify-start">
        <div className="flex">
          <div className="flex border w-28 text-center justify-center p-1 rounded-lg mt-5 cursor-pointer">
            <img
              className="mt-2 w-4 h-4 text-[#787486]"
              src={Filter}
              alt="logo"
            />
            <label className="ml-2 text-[#787486] cursor-pointer">Filter</label>
            <img
              className="ml-2 text-[#787486] mt-1 w-4 h-4"
              src={arrow}
              alt="logo"
            />
          </div>
          <div className="flex border w-28 text-center justify-center p-1 rounded-lg mt-5 ml-3 cursor-pointer">
            <img
              className="mt-2 w-4 h-4 text-[#787486]"
              src={calender}
              alt="logo"
            />
            <label className="ml-2 text-[#787486] cursor-pointer">Today</label>
            <img
              className="ml-2 text-[#787486] mt-1 w-4 h-4"
              src={arrow}
              alt="logo"
            />
          </div>
        </div>
        <div className="flex mt-3">
          <div className="flex border p-2 rounded-lg border-[#787486] w-30 px-4">
            <img
              className="cursor-pointer mr-2 w-4 h-4 mt-1 text-[#787486]"
              src={share}
              alt="logo"
            />
            <button className="text-[#787486] font-medium text-sm">
              Share
            </button>
          </div>
          <hr className="text-black rotate-90 w-8 relative top-5 justify-center text-center align-middle" />
          <img className="cursor-pointer w-8 h-8 mt-1" src={equal} alt="logo" />
          <img
            className="flex mt-3 ml-3 cursor-pointer text-center justify-center w-4 h-4"
            src={group2}
            alt="logo"
          />
        </div>
      </div>
      <div className="h-20 w-full">
        <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
          <DragComponent
            todo={todo}
            setTodo={setTodo}
            progress={progress}
            setProgress={setProgress}
            done={done}
            setDone={setDone}
          />
        </DragDropContext>
      </div>
    </div>
  );
}

import React from "react";
import { IoExitOutline } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";
import {
  FaRegRegistered,
  FaJava,
  FaCalendarAlt,
  FaPython,
  FaHome,
} from "react-icons/fa";

const sideNavbar = () => {
  return (
    <aside className="w-fit h-max fixed">
      <nav className=" h-screen justify-between  px-2 flex flex-col bg-cxBlack border-r shadow-sm items-center">
        <div className=" text-cxWhite text-2xl mt-4 p-2 mx-2 font-semibold  hover:text-cxOrange  hover:scale-105 duration-300 cursor-pointer">
          CX
        </div>
        <div className="">
          <ul>
            <li className="">
              <FaHome className=" laptop:h-10 w-10 text-white hover:text-cxOrange hover:scale-125 duration-300 cursor-pointer" />
            </li>
            <li className="my-7">
              <FaPython className=" h-10 w-10   text-white hover:text-cxOrange  hover:scale-125 duration-300 cursor-pointer" />
            </li>

            <li className="my-7">
              <FaRegRegistered className=" h-10 w-10   text-white hover:text-cxOrange  hover:scale-125 duration-300 cursor-pointer" />
            </li>
            <li>
              <FaJava className=" h-10 w-10   text-white hover:text-cxOrange  hover:scale-125 duration-300 cursor-pointer" />
            </li>
            <li className="my-7">
              <FaCalendarAlt className="h-10 w-10   text-white hover:text-cxOrange  hover:scale-125 duration-300 cursor-pointer" />
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <ul>
            <li className="my-10">
              <RiMessage2Fill className=" h-10 w-10   text-white hover:text-cxOrange  hover:scale-125 duration-300 cursor-pointer" />
            </li>
            <li className="">
              <IoExitOutline className=" h-10 w-10   text-white hover:text-cxOrange  hover:scale-125 duration-300 cursor-pointer" />
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default sideNavbar;

import React from "react";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
const NavBar = () => {
  return (
    <div className="">
      <nav className="  shadow flex   justify-between  p-4 ">
        <div
          className=" laptop:text-5xl  w-2/4 text-center cursor-default
        tablet:text-3xl ml-20
       
        text-xl p-4"
        >
          Marketplace Comparison
        </div>
        <div className="flex justify-between items-center w-1/4 ">
          <button
            className=" py-3 pl-11 pr-5 bg-cxOrange text-cxWhite  rounded-xl text-lg cursor-pointer hover:scale-105 duration-100
            laptop:text-xl
           tablet:text-sm tablet:p-2 w-3/4
          phonescreen:p-1 phonescreen:w-3/4 phonescreen:text-xs"
          >
            Download Report
          </button>
          <IoEllipsisVerticalSharp
            className="laptop:text-4xl cursor-pointer hover:scale-105 duration-100 
          tablet:text-2xl phonescreen:text-lg"
          />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

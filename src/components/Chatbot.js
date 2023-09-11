import React, { useState } from "react";
import { BsRobot, BsLink45Deg } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
const Chatbot = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="fixed right-0 bottom-10 p-4 bg-gray-100 ">
        {open ? (
          <div className="bg-gradient-to-br from-white via-blue-300 to-pink-200 w-52 h-64">
            <div>
              <p className="text-gray-700 border-b-2 font-semibold">
                AI Assistant
              </p>
              <div className="flex my-3">
                <BsRobot className="text-2xl" />
                <label className="ml-3 rounded-xl p-1 text-sm bg-red-100 w-3/5 ">
                  Hey, How can I help today?
                </label>
              </div>
              <div className="flex">
                <label className="ml-3 bg-white rounded-lg text-sm p-1 w-3/4">
                  Hi, can you help me understand new features of Product A
                </label>
                <FaRegUserCircle className="text-2xl" />
              </div>
              <div className="flex mt-10 border-t-2">
                <BsLink45Deg className="text-2xl mt-2" />
                <input className=" ml-2 w-4/5 rounded-xl shadow-md mt-2 text-xs "></input>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <BsRobot
          className="text-5xl fixed right-3 bottom-1 "
          onClick={(e) => setOpen(!open)}
        ></BsRobot>
      </div>
    </div>
  );
};

export default Chatbot;

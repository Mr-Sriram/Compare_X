import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const Searchbar = ({ searchVal, SetSearchVal }) => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  return (
    <div className="flex mt-5 ">
      <form
        className=" w-3/4 flex items-end"
        onSubmit={(e) => e.preventDefault()}
      >
        <BiSearchAlt className="text-2xl" />
        <input
          type="text"
          placeholder="what can we help you find?"
          className=" rounded-lg text-left 
          laptop:w-10/12 laptop:p-1 laptop:pl-3
          tablet:w-10/12 tablet:p-1 tablet:pl-2 
          phonescreen:w-10/12 phonescreen:pl-1"
          value={searchVal}
          onChange={(e) => SetSearchVal(e.target.value)}
        ></input>
        {/* <button className="ml-2 bg-cxOrange px-5 py-1 rounded-lg text-cxWhite">
          Search
        </button> */}
      </form>
    </div>
  );
};

export default Searchbar;

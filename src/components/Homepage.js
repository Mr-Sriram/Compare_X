import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Searchbar from "./Searchbar";
import MonthlyCompare from "./MonthlyCompare";
import OverallComp from "./OverallComp";
import Chatbot from "./Chatbot";

const Homepage = () => {
  const [firstDD, setFirstDD] = useState("");
  const [secondDD, setSecondDD] = useState("");
  const [searchVal, SetSearchVal] = useState("");

  return (
    <div className="bg-cxBg">
      <div className="  flex-col  justify-stretch laptop:ml-56 tablet:ml-32 phonescreen:ml-24  ">
        <div
          className="laptop:text-2xl mt-8 
        tablet:text-lg 
        phonescreen:text-base"
        >
          What would you like to compare today?
        </div>
        <Dropdown
          firstDD={firstDD}
          setFirstDD={setFirstDD}
          secondDD={secondDD}
          setSecondDD={setSecondDD}
        />
        <Searchbar searchVal={searchVal} SetSearchVal={SetSearchVal} />
        <MonthlyCompare PA={firstDD} PB={secondDD} searchVal={searchVal} />
        <OverallComp PA={firstDD} PB={secondDD} searchVal={searchVal} />
        <Chatbot />
      </div>
    </div>
  );
};

export default Homepage;

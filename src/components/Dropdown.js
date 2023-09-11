import React from "react";

const Dropdown = ({ firstDD, setFirstDD, secondDD, setSecondDD }) => {
  const menu = ["Product A", "Product B", "Product C", "Product D"];
  const handleFirstChange = (e) => {
    setFirstDD(e.target.value);
  };
  const handleSecondChange = (e) => {
    setSecondDD(e.target.value);
  };
  return (
    <div className=" mt-6 flex">
      <div>
        <select
          key="1"
          value={firstDD}
          onChange={handleFirstChange}
          className="  border-solid rounded-xl border-cxBlack bg-white text-cxTextPri cursor-pointer 
          laptop:px-7 laptop:py-2 laptop:mr-20 laptop:text-lg 
          tablet:px-4 tablet:py-1 tablet:mr-14 tablet:text-base
          phonescreen:px-2 phonescreen:py-1 phonescreen:mr-8 phonescreen:text-sm"
        >
          <option value="" hidden>
            Select a Product
          </option>
          {menu.map((ele, i) => (
            <option
              key={i}
              className="px-16 py-2 mr-20 text-lg  border-solid border-cxBlack cursor-pointer"
              disabled={secondDD === ele}
              hidden={secondDD === ele}
            >
              {ele}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          value={secondDD}
          onChange={handleSecondChange}
          className="border-solid rounded-xl border-cxBlack bg-white text-cxTextPri cursor-pointer
          laptop:px-7 laptop:py-2 laptop:mr-20 laptop:text-lg 
          tablet:px-4 tablet:py-1 tablet:mr-14 tablet:text-base
          phonescreen:px-2 phonescreen:py-1 phonescreen:mr-8 phonescreen:text-sm"
        >
          <option value="" hidden>
            Select a Product
          </option>
          {menu.map((ele, i) => (
            <option
              key={i}
              className="px-7 py-2 mr-20 text-lg  border-solid rounded-xl border-cxBlack bg-white text-cxTextPri cursor-pointer"
              disabled={firstDD === ele}
              hidden={firstDD === ele}
            >
              {ele}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;

import React from "react";
import TableDataGenerator from "../service/TableDataGenerator";
import { AiFillBug } from "react-icons/ai";
const MonthlyCompare = ({ PA, PB, searchVal }) => {
  var today = new Date();
  var month = today.toLocaleString("default", { month: "long" });
  const data = TableDataGenerator(PA, PB, month);

  return (
    <div>
      <div className="flex  ">
        {data ? (
          <table className="  bg-white   w-3/4 m-4 rounded-xl">
            <thead className="text-cxTextPri  font-semibold pl-5  ">
              <tr>
                <th> </th>
                <th
                  className="text-start p-3
                laptop:text-3xl
                        tablet:text-xl
                        phonescreen:text-lg"
                >
                  {" "}
                  {month} Comparison
                </th>
              </tr>
            </thead>
            <tbody>
              {data
                ? data
                    .filter((item) => {
                      return searchVal.toLowerCase() === ""
                        ? item
                        : item.toLowerCase().includes(searchVal);
                    })
                    .map((ele, i) => (
                      <tr key={i}>
                        <td>
                          <AiFillBug className="text-red-500" />
                        </td>
                        <td
                          key={i}
                          className="p-2 border-b-2 mt-3 
                        laptop:text-lg
                        tablet:text-base
                        phonescreen:text-sm"
                        >
                          {ele}
                        </td>
                      </tr>
                    ))
                : null}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
};

export default MonthlyCompare;

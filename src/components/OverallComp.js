import React from "react";
import OverallComparison from "../service/OverallComparison";
import { BsFillPatchCheckFill } from "react-icons/bs";
const OverallComp = ({ PA, PB, searchVal }) => {
  const data = OverallComparison(PA, PB);

  return (
    <div>
      <div className="flex ">
        {data ? (
          <table className="  bg-white   w-3/4 m-4 rounded-xl">
            <thead className="text-cxTextPri   font-semibold">
              <tr>
                <th></th>
                <th
                  className="text-start p-3 laptop:text-3xl
                        tablet:text-xl
                        phonescreen:text-lg"
                >
                  Overall Comparison
                </th>
              </tr>
            </thead>
            <tbody className="p-5">
              {data
                ? data.map((ele) =>
                    ele
                      .filter((item) => {
                        return searchVal.toLowerCase() === ""
                          ? item
                          : item.toLowerCase().includes(searchVal);
                      })
                      .map((e, i) => (
                        <tr key={i}>
                          <td>
                            <BsFillPatchCheckFill className="text-green-700" />
                          </td>
                          <td
                            key={i}
                            className="p-2 border-b-2 mt-3
                          laptop:text-lg
                        tablet:text-base
                        phonescreen:text-sm"
                          >
                            {e}
                          </td>
                        </tr>
                      ))
                  )
                : null}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
};

export default OverallComp;

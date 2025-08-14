import React from "react";
import LineGraph from "./components/line-graph";
import { useAppContext } from "../../contexts/app-contexts";

function Graphs() {
  const { menuState } = useAppContext();
  return (
    <div className="p-4 sm:ml-64 dark:bg-gray-900 h-screen">
      <div
        className={`${
          menuState && "mt-12 sm:mt-0"
        } p-6 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700`}
      >
        <div className="grid grid-cols-1 ">
          <div className="w-full h-80 xl:h-100 col-span-1 lg:col-span-2 shadow-lg rounded-xl p-10 bg-white dark:bg-gray-800 hover:shadow-xl ">
            <LineGraph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graphs;

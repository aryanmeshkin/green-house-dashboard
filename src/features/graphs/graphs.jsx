import React from "react";
import LineGraph from "./components/line-graph";
import { useAppContext } from "../../contexts/app-contexts";

function Graphs() {
  const{menuState} = useAppContext()
  return (
    <div className="p-4 sm:ml-64">
      <div className={`${menuState && "mt-12 sm:mt-0"} p-6 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700`}>
        <div className="grid grid-cols-1 ">
          <div className="mb-20">
            <LineGraph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graphs;

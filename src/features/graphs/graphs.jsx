import React from "react";
import LineGraph from "./components/line-graph";

function Graphs() {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-6 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
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

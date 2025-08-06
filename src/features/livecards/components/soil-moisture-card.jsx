import React from "react";
import SoilMoistureIcon from "../assets/icons/soil-moisture";

function SoilMoistureCard() {
  return (
    <div className="h-100 rounded-4xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 flex flex-col items-center justify-center group">
      <div className="mb-6 flex items-center justify-center w-28 h-28 rounded-full bg-gray-200 p-1">
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center group-hover:bg-green-100 transition-all duration-300">
          <SoilMoistureIcon />
        </div>
      </div>
      <div className="text-3xl lg:text-2xl font-bold group-hover:-translate-y-1 transition-all duration-300">
        Soil Moisture
      </div>
    </div>
  );
}

export default SoilMoistureCard;

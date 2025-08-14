import React from "react";
import AirHumidityIcon from "../../../assets/icons/air-humidity-icon";


function AirHumidityCard() {
  return (
    <div className="h-40 xl:h-45 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300   dark:bg-gray-800 flex lg:flex-col items-center justify-center gap-4 md:gap-12 lg:gap-3  group ">
      <div className="h-15 w-15 lg:h-16 lg:w-16 rounded-full bg-white/70 group-hover:bg-teal-200 flex items-center justify-center transition-all duration-300 md:h-25 md:w-25">
        <AirHumidityIcon />
      </div>
      <div className="flex flex-col items-center md:w-45">
        <div className="text-xl lg:text-xl font-bold group-hover:-translate-y-1 transition-all duration-300 md:text-2xl dark:text-white">
          Air Humidity
        </div>
        <div className="dark:text-gray-400">percent</div>
      </div>
    </div>
  );
}

export default AirHumidityCard;

import React from "react";
import AirHumidityIcon from "../../../assets/icons/air-humidity-icon";
import GaugeTemperature from "../../gauge-charts/gauge-temperature";

function AirHumidityCard() {
  return (
    <div className="h-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center dark:bg-gray-800  gap-5 group">
      <div className="flex flex-col items-center justify-center gap-4   ">
        <div className="h-16 w-16 rounded-full bg-white/70 dark:bg-gray-100 group-hover:bg-[#4B77BE] flex items-center justify-center transition-all duration-300 ">
          <AirHumidityIcon />
        </div>
        <div className="flex flex-col items-center w-45">
          <div className="text-xl font-bold group-hover:-translate-y-1 transition-all duration-300  dark:text-white">
            Air Humidity
          </div>
          <div className="dark:text-gray-400">percent</div>
        </div>
      </div>

      <GaugeTemperature />
    </div>
  );
}

export default AirHumidityCard;

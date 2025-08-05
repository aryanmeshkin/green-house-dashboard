import React from "react";
import TemperatureCard from "./components/temperature-card";
import AirHumidityCard from "./components/air-humidity-card";
import SoilMoistureCard from "./components/soil-moisture-card";

function LiveCards() {
  return (
    <div className="p-4 sm:ml-64">
      <div className=" p-6 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <div className="grid grid-cols-3 gap-6">
          {/* Temperature Card */}
          <TemperatureCard />
          {/* Air Humidity Card */}
          <AirHumidityCard />
          {/* Soil moisture Card */}
          <SoilMoistureCard />
        </div>
      </div>
    </div>
  );
}

export default LiveCards;

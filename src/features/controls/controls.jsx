import React from "react";
import FanControl from "./components/fan-control";
import WaterPumpControl from "./components/water-pump-control";
import LightControl from "./components/light-control";
import PowerControl from "./components/power-control";

function Controls() {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-6 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <div className="grid grid-cols-4 gap-6">
          {/* Fan controller */}
          <FanControl />
          {/* Water Pump Controler */}
          <WaterPumpControl />
          {/* Light Icon */}
          <LightControl />
          {/* Power Icon */}
          <PowerControl />
        </div>
      </div>
    </div>
  );
}

export default Controls;

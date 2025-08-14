import React from "react";
import FanControl from "./components/fan-control";
import WaterPumpControl from "./components/water-pump-control";
import LightControl from "./components/light-control";
import PowerControl from "./components/power-control";
import { useAppContext } from "../../contexts/app-contexts";

function Controls() {
  const{menuState} = useAppContext()
  return (
    <div className="p-4 sm:ml-64 bg-gray-50 dark:bg-gray-900 h-screen">
      <div className={`${menuState && "mt-12 sm:mt-0"} p-6 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
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

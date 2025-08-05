import React from "react";
import WaterPumpIcon from "../../livecards/assets/icons/water-pump-icon";
import { useAppContext } from "@/app-contexts";
function WaterPumpControl() {
  const { changepumpState } = useAppContext();
  return (
    <button className="cursor-pointer" onClick={changepumpState}>
      <div className="h-50 rounded-4xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center ">
        <WaterPumpIcon />
      </div>
    </button>
  );
}

export default WaterPumpControl;

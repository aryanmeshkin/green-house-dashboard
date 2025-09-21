import React from "react";
import FanIcon from "../../livecards/assets/icons/fan-icon";
import { useAppContext } from "@/app-contexts";
function FanControl() {
  const { changefanState ,fanState} = useAppContext();
  const {contolData} = useDashboardContext()
  if(contolData.fan === 1){
    
  }
  return (
    <button className="cursor-pointer" onClick={changefanState}>
      <div className="h-50 rounded-4xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center ">
        <FanIcon />
      </div>
    </button>
  );
}

export default FanControl;

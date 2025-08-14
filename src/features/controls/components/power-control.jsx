import React from "react";
import PowerIcon from "../../livecards/assets/icons/power-icon";
import { useAppContext } from "@/app-contexts";
function PowerControl() {
  const {changepowerState} = useAppContext();
  return (
    <button className="cursor-pointer" onClick={changepowerState}>
      <div className="h-50 rounded-4xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center ">
        <PowerIcon />
      </div>
    </button>
  );
}

export default PowerControl;

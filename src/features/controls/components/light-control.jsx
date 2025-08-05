import React from "react";
import LightIcon from "../../livecards/assets/icons/light-icon";
import { useAppContext } from "@/app-contexts";
function LightControl() {
  const {changeledState} = useAppContext();
  return (
    <button className="cursor-pointer" onClick={changeledState}>
      <div className="h-50 rounded-4xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center ">
        <LightIcon />
      </div>
    </button>
  );
}

export default LightControl;

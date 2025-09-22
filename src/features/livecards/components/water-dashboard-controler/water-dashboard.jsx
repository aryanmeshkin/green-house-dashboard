import React from "react";
import { useAppContext } from "../../../../contexts/app-contexts";

function WaterDashboard() {
  const { changepumpState, pumpState } = useAppContext();
  
  return (
    <div
      
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl flex justify-center items-center"
    >
      <div className="flex lg:flex-col gap-2 justify-center items-center h-24 w-24">
        <div className="dark:text-white">Water</div>
        <svg
          className={`${
            pumpState
              ? "stroke-blue-400 w-10 h-10 lg:w-12 lg:h-12 animate-pulse "
              : " w-8 h-8 lg:w-10 lg:h-10 stroke-black dark:stroke-gray-400"
          }`}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10.11"
            y="5.32"
            width="7.64"
            height="7.64"
            rx="2.2"
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="1.91"
          />
          <polyline
            points="23.48 7.23 17.75 7.23 17.75 11.04 23.48 11.04"
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="1.91"
          />
          <path
            d="M10.11,7.23H9.16A5.73,5.73,0,0,0,3.43,13v1.91H7.25V13a1.9,1.9,0,0,1,1.91-1.9h.95Z"
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="1.91"
          />
          <line
            x1="1.52"
            y1="14.86"
            x2="9.16"
            y2="14.86"
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="1.91"
          />
          <line
            x1="9.16"
            y1="1.5"
            x2="18.7"
            y2="1.5"
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="1.91"
          />
          <line
            x1="13.93"
            y1="5.32"
            x2="13.93"
            y2="1.5"
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="1.91"
          />
          <path
            d="M8,19.83a2.67,2.67,0,0,1-5.34,0c0-2.29,2.67-5,2.67-5S8,17.54,8,19.83Z"
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="1.91"
          />
        </svg>
      </div>
    </div>
  );
}

export default WaterDashboard;

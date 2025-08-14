import React from "react";
import { useAppContext } from "../../../../contexts/app-contexts";

function LightDashboard() {
  const { changeledState, ledState } = useAppContext();
  return (
    <div onClick={changeledState} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl flex justify-center items-center">
      <div
        className="flex flex-col gap-2 justify-center items-center h-20 w-20"
        
      >
        <div className="dark:text-white">Light</div>
        <svg
          className={`${
            ledState
              ? "fill-yellow-300 w-15 h-15 animate-ledspin"
              : " w-10 h-10 fill-black dark:fill-gray-400"
          }`}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g clipPath="url(#a)">
              {" "}
              <path d="M12 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1ZM4.929 3.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414L4.93 3.515ZM1 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H1ZM18 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM17.657 16.243a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.414-1.414l-2.828-2.828ZM7.757 17.657a1 1 0 1 0-1.414-1.414L3.515 19.07a1 1 0 1 0 1.414 1.414l2.828-2.828ZM20.485 4.929a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414l2.828-2.828ZM13 19a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"></path>{" "}
            </g>{" "}
            <defs>
              {" "}
              <clipPath id="a">
                {" "}
                <path d="M0 0h24v24H0z"></path>{" "}
              </clipPath>{" "}
            </defs>{" "}
          </g>
        </svg>
      </div>
    </div>
  );
}

export default LightDashboard;

import React from "react";
import { useAppContext } from "../../../../contexts/app-contexts";

function PowerDashboard() {
  const { powerState, changepowerState } = useAppContext();
  return (
    <div
      onClick={changepowerState}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl flex justify-center items-center"
    >
      <div className="flex lg:flex-col gap-2 justify-center items-center h-24 w-24">
        <div className="dark:text-white">Power</div>
        <svg
          className={`${
            powerState
              ? "fill-orange-400 w-10 h-10 lg:w-12 lg:h-12 animate-ledspin"
              : " w-8 h-8 lg:w-10 lg:h-10 fill-black dark:fill-gray-400"
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
            <path d="M7.493,22.862a1,1,0,0,0,1.244-.186l11-12A1,1,0,0,0,19,9H13.133l.859-6.876a1,1,0,0,0-1.8-.712l-8,11A1,1,0,0,0,5,14H9.612l-2.56,7.684A1,1,0,0,0,7.493,22.862ZM6.964,12l4.562-6.273-.518,4.149A1,1,0,0,0,12,11h4.727l-6.295,6.867,1.516-4.551A1,1,0,0,0,11,12Z"></path>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default PowerDashboard;

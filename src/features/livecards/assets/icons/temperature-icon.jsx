import React from "react";

function TemperatureIcon() {
  return (
    <svg className="h-13 w-13 fill-gray-700" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <path fill="none" d="M0 0h24v24H0z"></path>{" "}
          <path
            fillRule="nonzero"
            d="M8 5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0V5zm1.144 6.895a5 5 0 1 0 5.712 0L14 11.298V5a2 2 0 1 0-4 0v6.298l-.856.597zM8 16h8a4 4 0 1 1-8 0z"
          ></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}

export default TemperatureIcon;

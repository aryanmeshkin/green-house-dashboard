import React from "react";
import { NavLink } from "react-router";
import { useAppContext } from "../../../../../contexts/app-contexts";

function MainSidebar() {
  const { changeMenuState, menuState } = useAppContext();
  return (
    <ul className="space-y-2 font-medium">
      {/* dashboard */}
      <li>
        <NavLink
          onClick={changeMenuState}
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex items-center transition duration-100 p-2 cursor-pointer text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group bg-teal-200"
              : "flex items-center transition duration-100 p-2 cursor-pointer text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group "
          }
        >
          <svg className="w-6 h-6 fill-gray-500 transition duration-200 dark:text-gray-400 group-hover:fill-gray-900 dark:group-hover:fill-white">
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"></path>
          </svg>
          <span className="ms-3">Dashboard</span>
        </NavLink>
      </li>
      {/* controls */}
      <li>
        <NavLink
          onClick={changeMenuState}
          to="/controls"
          className={({ isActive }) =>
            isActive
              ? "flex items-center transition duration-100 p-2 cursor-pointer text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group bg-teal-200"
              : "flex items-center transition duration-100 p-2 cursor-pointer text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group "
          }
        >
          <svg
            className="w-6 h-6 fill-gray-500 transition duration-200 dark:text-gray-400 group-hover:fill-gray-900 dark:group-hover:fill-white"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"></path>
              <path d="M329.956 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z"></path>
            </g>
          </svg>
          <span className="ms-3">Controls</span>
        </NavLink>
      </li>
      {/* graphs */}
      <li>
        <NavLink
          onClick={changeMenuState}
          to="/graphs"
          className={({ isActive }) =>
            isActive
              ? "flex items-center transition duration-100 p-2 cursor-pointer text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group bg-teal-200"
              : "flex items-center transition duration-100 p-2 cursor-pointer text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group "
          }
        >
          <svg
            className="w-6 h-6 fill-gray-500 transition duration-200 dark:text-gray-400 group-hover:fill-gray-900 dark:group-hover:fill-white"
            viewBox="0 0 502.664 502.664"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M472.077,25.432H30.609C13.762,25.432,0,39.216,0,56.019v317.414
         c0,16.782,13.762,30.587,30.609,30.587h441.468c16.825,0,30.587-13.805,30.587-30.587V56.019
         C502.664,39.216,488.902,25.432,472.077,25.432z M464.376,350.935H38.288V68.336h426.088V350.935z"
              />
              <polygon points="194.698,418.538 136.931,477.232 366.574,477.232 308.807,418.538" />
              <path
                d="M103.346,294.269c11.282,0,20.471-9.168,20.471-20.449c0-2.049-0.604-3.904-1.165-5.781
         c26.165-21.096,72.392-58.284,93.466-74.527c3.322,2.351,7.183,4.034,11.562,4.034c3.645,0,6.881-1.208,9.836-2.869
         c13.546,11.519,36.584,31.105,52.935,45.018c-0.216,1.186-0.69,2.243-0.69,3.494c0,11.303,9.189,20.471,20.492,20.471
         s20.492-9.168,20.492-20.471c0-2.006-0.604-3.84-1.143-5.673l52.935-47.801c2.847,1.488,5.91,2.545,9.362,2.545
         c11.303,0,20.471-9.168,20.471-20.471s-9.168-20.471-20.471-20.471s-20.449,9.168-20.449,20.492c0,2.696,0.582,5.263,1.531,7.614
         c-14.798,13.352-37.619,33.974-51.856,46.83c-3.171-2.049-6.752-3.559-10.85-3.559c-4.832,0-9.06,1.92-12.554,4.702
         c-13.525-11.497-35.398-30.091-50.95-43.314c0.82-2.2,1.402-4.508,1.402-7.01c0-11.303-9.168-20.471-20.471-20.471
         s-20.471,9.168-20.471,20.471c0,2.502,0.604,4.832,1.424,7.032l-93.962,73.103c-3.279-2.243-7.054-3.883-11.325-3.883
         c-11.303,0-20.471,9.168-20.471,20.471C82.875,285.101,92.043,294.269,103.346,294.269z"
              />
            </g>
          </svg>

          <span className="ms-3">Graphs</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={changeMenuState}
          to="map"
          className={({ isActive }) =>
            isActive
              ? "flex items-center transition duration-100 p-2 cursor-pointer text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group bg-teal-200"
              : "flex items-center transition duration-100 p-2 cursor-pointer text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group "
          }
        >
          <svg
            className="w-6 h-6 stroke-gray-500 transition duration-200 dark:text-gray-400 group-hover:stroke-gray-900 dark:group-hover:fill-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M4 10.1433C4 5.64588 7.58172 2 12 2C16.4183 2 20 5.64588 20 10.1433C20 14.6055 17.4467 19.8124 13.4629 21.6744C12.5343 22.1085 11.4657 22.1085 10.5371 21.6744C6.55332 19.8124 4 14.6055 4 10.1433Z"
                stroke-width="1.5"
              ></path>{" "}
              <circle cx="12" cy="10" r="3" stroke-width="1.5"></circle>{" "}
            </g>
          </svg>
          <span className="ms-3">Map</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={changeMenuState}
          to="/reporter"
          className={({ isActive }) =>
            isActive
              ? "flex items-center transition duration-100 p-2 cursor-pointer text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group bg-teal-200"
              : "flex items-center transition duration-100 p-2 cursor-pointer text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group "
          }
        >
          <svg
            className="w-6 h-6 stroke-gray-500 transition duration-200 dark:text-gray-400 group-hover:stroke-gray-900 dark:group-hover:fill-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7"
                
                stroke-width="2"
                stroke-linecap="round"
              ></path>{" "}
              <rect
                x="6"
                y="12"
                width="3"
                height="3"
                rx="0.5"
                
              ></rect>{" "}
              <rect
                x="10.5"
                y="12"
                width="3"
                height="3"
                rx="0.5"
                
              ></rect>{" "}
              <rect
                x="15"
                y="12"
                width="3"
                height="3"
                rx="0.5"
                
              ></rect>{" "}
            </g>
          </svg>
          <span className="ms-3">Report</span>
        </NavLink>
      </li>
    </ul>
  );
}

export default MainSidebar;

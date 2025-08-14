import React from "react";
import { useAppContext } from "../../contexts/app-contexts";

function Mode() {
  const { modeState, changeMode } = useAppContext();

  return (
    <div className="h-20 bg-gray-50 dark:bg-gray-900 sm:ml-64 flex flex-row-reverse justify-start items-center border-b-2 dark:border-b-gray-700 border-b-gray-100">
      <div className="mr-4">
        {modeState ? (
          <button
            onClick={changeMode}
            type="button"
            className=" font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 "
            data-hs-theme-click-value="dark"
          >
            <span className="group inline-flex shrink-0 justify-center items-center size-13">
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            </span>
          </button>
        ) : (
          <button
            onClick={changeMode}
            type="button"
            className="bg-gray-300 font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            data-hs-theme-click-value="light"
          >
            <span className="group inline-flex shrink-0 justify-center items-center size-13">
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Mode;

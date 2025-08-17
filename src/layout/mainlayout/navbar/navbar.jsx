import React, { useEffect } from "react";
import Mode from "../../../component/mode/mode";
import { Link } from "react-router";

function Navbar() {
  const token = true
  return (
    <div className="h-20 px-7 bg-gray-50 dark:bg-gray-900 sm:ml-64 flex flex-row-reverse justify-start gap-2  sm:justify-between items-center border-b-2 dark:border-b-gray-700 border-b-gray-100">
      {token ? (
        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="text-xs sm:text-[16px] bg-transparent hover:bg-teal-200 text-gray-900 dark:text-white font-semibold hover:text-white py-1 px-2 sm:py-2 sm:px-4 border border-gray-500 hover:border-transparent rounded"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="text-xs sm:text-[16px] bg-transparent hover:bg-teal-200 text-gray-900 dark:text-white font-semibold hover:text-white py-1 px-2 sm:py-2 sm:px-4 border border-gray-500 hover:border-transparent rounded"
          >
            Sign Up
          </Link>
        </div>
      ) : (
        <Link
          to="/register"
          className="text-xs sm:text-[16px] bg-transparent hover:bg-teal-200 text-gray-900 dark:text-white font-semibold hover:text-white py-1 px-2 sm:py-2 sm:px-4 border border-gray-500 hover:border-transparent rounded"
        >
          Log Out
        </Link>
      )}

      <div>
        <Mode />
      </div>
    </div>
  );
}

export default Navbar;

import React, { useEffect } from "react";
import Mode from "../../../component/mode/mode";
import { Link, useNavigate } from "react-router";
import { useTokenContext } from "../../../features/identity/token-context/token-context";
import { toast } from "react-toastify";
import api, { axiosPrivate } from "../../../api/api";
import useAxiosPrivate from "../../../features/identity/hooks/useAxiosPrivate";
function Navbar() {
  const axiosPrivate = useAxiosPrivate();
  const { accessToken, setAccessToken } = useTokenContext();
  const navigate = useNavigate()
  const logoutHandling = async () => {
    try {
      await api.post("/auth/logout"); 
      setAccessToken(null)
      toast.success("خروج با موفقیت انجام شد ✅");
      navigate("/login"); 
    } catch (err) {
      console.error("Logout failed:", err);
      toast.error("مشکلی در خروج پیش آمد ❌");
    }
    
  };
  return (
    <div className="h-20 px-7 bg-gray-50 dark:bg-gray-900 sm:ml-64 flex flex-row-reverse justify-start gap-2  sm:justify-between items-center border-b-2 dark:border-b-gray-700 border-b-gray-100">
      {accessToken ? (
        <Link
          className="text-xs sm:text-[16px] bg-transparent hover:bg-[#4B77BE] text-gray-900 dark:text-white font-semibold hover:text-white py-1 px-2 sm:py-2 sm:px-4 border border-gray-500 hover:border-transparent rounded"
          onClick={logoutHandling}
        >
          Log Out
        </Link>
      ) : (
        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="text-xs sm:text-[16px] bg-transparent hover:bg-[#4B77BE] text-gray-900 dark:text-white font-semibold hover:text-white py-1 px-2 sm:py-2 sm:px-4 border border-gray-500 hover:border-transparent rounded"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="text-xs sm:text-[16px] bg-transparent hover:bg-[#4B77BE] text-gray-900 dark:text-white font-semibold hover:text-white py-1 px-2 sm:py-2 sm:px-4 border border-gray-500 hover:border-transparent rounded"
          >
            Sign Up
          </Link>
        </div>
      )}

      <div>
        <Mode />
      </div>
    </div>
  );
}

export default Navbar;

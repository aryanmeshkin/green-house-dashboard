import React from "react";
import { Outlet } from "react-router";
import Mode from "../../component/mode/mode";
import { useAppContext } from "../../contexts/app-contexts";

function AuthLayout() {
  const { changeMode, modeState } = useAppContext();
  return (
    <div className={`font-mono ${modeState ? "dark" : ""} `}>
      <div className="fixed z-10 right-2 top-2">
        <Mode />
      </div>
      <Outlet />
    </div>
  );
}

export default AuthLayout;

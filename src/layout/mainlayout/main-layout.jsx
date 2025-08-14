import React, { useEffect } from "react";

import LiveCards from "../../features/livecards/livecards";
import Controls from "../../features/controls/controls";
import { Outlet } from "react-router";
import SideBar from "./sidebar/side-bar";
import { useAppContext } from "../../contexts/app-contexts";
import Navbar from "./navbar/navbar";
import Mode from "../../component/mode/mode";

function MainLayout() {
  const { changeMode, modeState } = useAppContext();
  useEffect(() => {
    localStorage.getItem("mode", modeState);
  }, [modeState]);

  return (
    <div className={`font-mono ${modeState ? "dark" : ""}`}>
      <SideBar />
      {/* tables */}
      <div>
        <Mode/>
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;

import React, { useEffect } from "react";

import LiveCards from "../../features/livecards/livecards";
import Controls from "../../features/controls/controls";

import SideBar from "./sidebar/side-bar";
import { useAppContext } from "../../contexts/app-contexts";
import Navbar from "./navbar/navbar";
import Mode from "../../component/mode/mode";
import { Outlet } from "react-router";

function MainLayout() {
  const { changeMode, modeState } = useAppContext();
  

  return (
    <div className={`font-mono ${modeState ? "dark" : ""}`}>
      <SideBar />
      {/* tables */}
      <div>
        <Navbar/>
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;

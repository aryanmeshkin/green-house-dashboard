import React from "react";
import SideBar from "./sidebar/sideBar";
import LiveCards from "../../features/livecards/livecards";
import Controls from "../../features/controls/controls";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <>
      <SideBar />
      {/* tables */}
      <div>
        <Outlet/>
      </div>
    </>
  );
}

export default MainLayout;

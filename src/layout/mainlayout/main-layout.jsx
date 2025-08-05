import React from "react";

import LiveCards from "../../features/livecards/livecards";
import Controls from "../../features/controls/controls";
import { Outlet } from "react-router";
import SideBar from "./sidebar/side-bar";

function MainLayout() {
  return (
    <>
      <SideBar/>
      {/* tables */}
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;

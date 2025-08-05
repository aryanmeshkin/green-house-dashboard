import React from "react";
import LogoSidebar from "./components/logosidebar/logo-sidebar";
import MainSidebar from "./components/mainsidebar/main-sidebar";

function SideBar() {
  return (
    <>
      <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <LogoSidebar />
          <MainSidebar />
        </div>
      </aside>
    </>
  );
}

export default SideBar;

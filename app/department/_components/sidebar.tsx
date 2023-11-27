import React from "react";
import Logo from "./logo";
import { SidebarRoutes } from "./sideber-route";

const Sidebar = () => {
  return (
    <div className="h-screen border-r bg-white shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;

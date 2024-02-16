import React from "react";
import NavbarRoute from "./navbar-route";
import { MobileSidebar } from "./mobile-sidebar";

const Navbar = () => {
  return (
    <nav className="p-4 w-full h-14 border-b shadow-sm bg-white flex items-center justify-between">
      <MobileSidebar />
      <NavbarRoute />
    </nav>
  );
};

export default Navbar;

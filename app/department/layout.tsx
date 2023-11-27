import React from "react";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full bg-gray-100">
      <div className="h-[70px] md:pl-56 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col inset-y-0 z-50 fixed">
        <Sidebar />
      </div>
      <main className="md:pl-56 h-full pt-14">{children}</main>
    </div>
  );
};

export default Layout;

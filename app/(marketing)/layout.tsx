import React from "react";
import Navbar from "../_components/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="pt-16 pb-20 bg-slate-100 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;

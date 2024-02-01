import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { navLinks } from "../App";
import TailwindNavbar from "../components/TailwindNavbar";

export default function RootElement({ children }) {
  return (
    <>
      {/* {links && <Navbar links={links} />} */}
      <TailwindNavbar links={navLinks} />
      <div className="container mx-auto mt-4">
        {children}
        <Outlet />
      </div>
    </>
  );
}

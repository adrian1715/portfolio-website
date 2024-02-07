import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { navLinks } from "../App";

export default function RootElement({ children }) {
  return (
    <>
      {navLinks && <Navbar links={navLinks} />}
      <div id="container" className="container mt-4">
        {children}
        <Outlet />
      </div>
    </>
  );
}

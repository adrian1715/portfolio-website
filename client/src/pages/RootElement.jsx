import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { links } from "../App";

export default function RootElement({ children }) {
  return (
    <>
      {links && <Navbar links={links} />}
      <div className="container mt-4">
        {children}
        <Outlet />
      </div>
    </>
  );
}

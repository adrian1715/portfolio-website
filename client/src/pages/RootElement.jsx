import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootElement({ links }) {
  return (
    <>
      <Navbar links={links} />
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
}

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootElement({ links, projects }) {
  return (
    <>
      <Navbar links={links} projects={projects} />
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
}

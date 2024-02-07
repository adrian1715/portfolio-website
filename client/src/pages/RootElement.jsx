import React from "react";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { navLinks } from "../App";

export default function RootElement({ children }) {
  return (
    <>
      <Helmet>
        <title>Vite + React</title>
        <link id="vite-icon" rel="icon" type="image/svg+xml" href="/vite.svg" />
      </Helmet>

      {navLinks && <Navbar links={navLinks} />}
      <div id="container" className="container mt-4">
        {children}
        <Outlet />
      </div>
    </>
  );
}

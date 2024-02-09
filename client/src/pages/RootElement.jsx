import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { navLinks } from "../App";
import NavbarNew from "../components/NavbarNew";

export default function RootElement({ children }) {
  // to always use the selected theme
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
    }

    const theme = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, []);

  return (
    <>
      <Helmet>
        <title>Vite + React</title>
        <link id="vite-icon" rel="icon" type="image/svg+xml" href="/vite.svg" />
      </Helmet>

      {/* {navLinks && <Navbar links={navLinks} />} */}
      <NavbarNew links={navLinks} />
      <div id="container" className="container mt-4">
        {children}
        <Outlet />
      </div>
    </>
  );
}

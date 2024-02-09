import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { formatLinkPath } from "../utils/formatLinkPath";
import ThemeTogglerNew from "./ThemeTogglerNew";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

export default function NavbarNew({ links: navLinks }) {
  const [isShowingNavbar, setIsShowingNavbar] = useState(
    window.innerWidth >= 992
  );
  const [isNavbarButtonClicked, setIsNavbarButtonClicked] = useState(false);

  const links = [
    { name: "Home", icon: "house-fill" },
    { name: "About", icon: "info-circle-fill" },
    { name: "Skills", icon: "mortarboard-fill" },
    { name: "Certificates", icon: "file-earmark-text-fill" },
    { name: "Portfolio", icon: "code" },
    { name: "Contact", icon: "envelope-at-fill" },
  ];
  // console.log(navLinks);

  const toggleNavbar = () => {
    setIsShowingNavbar((prevState) => !prevState);
    setIsNavbarButtonClicked(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsShowingNavbar(window.innerWidth >= 992);
      setIsNavbarButtonClicked(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`header ${
        isShowingNavbar && isNavbarButtonClicked
          ? "border-bottom border-top-0 rounded"
          : ""
      }`}
    >
      <nav className="navbar navbar-expand-lg mx-2 mx-sm-3 mx-lg-4">
        <div className="row col-12 col-lg-auto align-items-center justify-content-between">
          <NavLink to="/" className={({ isActive }) => "navbar-brand col-auto"}>
            Adrian Lobato
          </NavLink>
          <motion.button
            id="navbar-toggler"
            className="btn d-inline-block d-lg-none col-auto"
            onClick={toggleNavbar}
            whileHover={{ scale: 1.2, transition: { duration: 0.1 } }}
            animate={{ rotate: isShowingNavbar ? 180 : 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <i className={`bi bi-${isShowingNavbar ? "x" : "caret-down"}`}></i>
          </motion.button>
        </div>
        <AnimatePresence>
          {isShowingNavbar && (
            <motion.div
              className={`container-fluid justify-content-center d-flex`}
              // ${isShowingNavbar ? "d-flex" : "d-none"}
              initial={
                isNavbarButtonClicked
                  ? { opacity: 0, height: 0, y: -120 }
                  : false
              }
              animate={{
                opacity: isShowingNavbar ? 1 : 0,
                height: isShowingNavbar ? "auto" : 0,
                y: 0,
              }}
              exit={
                isNavbarButtonClicked
                  ? { opacity: 0, height: 0, y: -120 }
                  : false
              }
              transition={{ duration: 0.3 }}
            >
              <ul
                id="nav-links"
                className="navbar-nav flex-grow-0 ms-lg-auto col-lg-auto"
              >
                <div className="row text-center text-sm-start justify-content-center justify-content-lg-between">
                  {links.map((link, i) => (
                    <motion.li
                      key={i}
                      className="nav-item px-2 px-lg-0 col-12 col-sm-5 col-md-4 col-lg-auto"
                      whileHover={{ scale: 1.1 }}
                    >
                      <NavLink
                        to={`#${link.name}`}
                        className={({ isActive }) => "nav-link"}
                      >
                        <i
                          className={`d-inline-block d-lg-none bi bi-${link.icon}`}
                        ></i>{" "}
                        {link.name}
                      </NavLink>
                    </motion.li>
                  ))}
                </div>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {isShowingNavbar && <ThemeTogglerNew />}
      </nav>
    </header>
  );
}

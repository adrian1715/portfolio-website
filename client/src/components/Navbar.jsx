import { Link, NavLink } from "react-router-dom";
import { Fragment } from "react";
import NavLinkDropdown from "./NavLinkDropdown";
import { formatLinkPath } from "../utils/linkPathFormatter";

export default function Navbar({ links }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link, index) => (
              <Fragment key={index}>
                {link.type ? (
                  // if there's a dropdown
                  <NavLinkDropdown link={link} />
                ) : (
                  // simple links (no dropdown)
                  <li key={index} className="nav-item">
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "active fw-bold" : ""}`
                      }
                    >
                      {formatLinkPath(link.path)}
                    </NavLink>
                  </li>
                )}
              </Fragment>
            ))}
          </ul>
          <form className="d-flex" role="search">
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

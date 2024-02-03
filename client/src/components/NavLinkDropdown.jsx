import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { formatLinkPath } from "../utils/formatLinkPath";

export default function NavLinkDropdown({ link }) {
  return (
    <Fragment key={link.id}>
      <li className="nav-item dropdown">
        <NavLink
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
        >
          {formatLinkPath(link.path)}
        </NavLink>
        <ul className="dropdown-menu">
          {link.items.map((item, index) =>
            index < 3 ? ( // limiting dropdown items up to 3
              <li key={index}>
                {/* add some verification to check if the current link is /projects, changing <a> for a <Link> */}
                <a
                  className="dropdown-item"
                  href={`${link.path}/${item.toLowerCase().replace(" ", "-")}`}
                >
                  {item}
                </a>
              </li>
            ) : index === 3 ? ( // show more
              <Fragment key={index}>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to={link.path} className="dropdown-item">
                    See more...
                  </Link>
                </li>
              </Fragment>
            ) : null
          )}
        </ul>
      </li>
    </Fragment>
  );
}

import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavLinkDropdown({ link }) {
  const linkName =
    link.path.split("/")[1].charAt(0).toUpperCase() + link.path.slice(2);

  return (
    <Fragment key={link.id}>
      <li className="nav-item dropdown">
        <NavLink
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
        >
          {linkName}
        </NavLink>
        <ul className="dropdown-menu">
          {link.items.map((item, index) =>
            index < 3 ? ( // limiting dropdown items up to 3
              <li key={index}>
                <a
                  className="dropdown-item"
                  href={`${link.path}/${item.toLowerCase()}`}
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

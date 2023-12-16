import { Link } from "react-router-dom";

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
          {links && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {links.map((link, index) => (
                <li key={index} className="nav-link">
                  <Link to={`/${link.toLowerCase()}`}>{link}</Link>
                </li>
              ))}
            </ul>
          )}
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

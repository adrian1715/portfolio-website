import React from "react";
import { links } from "../App";
import { Link, useLocation } from "react-router-dom";
import { formatLinkPath } from "../utils/formatLinkPath";
import { toLinkFormatter } from "../utils/toLinkFormatter";

export default function ShowProjects() {
  const { pathname } = useLocation();

  const projects = links
    .filter((link) => link.path === "/projects")[0]
    .children.filter(
      (link) => `/projects/${link.path}` === pathname
    )[0].children;
  console.log(projects);

  return (
    <>
      <h1>Select a project</h1>
      <ul>
        {projects.length > 0 ? (
          projects.map((proj, i) => (
            <li key={i}>
              <Link to={proj.path} className="link text-lg">
                {formatLinkPath(`/${proj.path}`)}
              </Link>
            </li>
          ))
        ) : (
          <li>No projects available.</li>
        )}
      </ul>
    </>
  );
}

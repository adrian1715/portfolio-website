import React from "react";
import { links } from "../App";
import { toLinkFormatter } from "../utils/toLinkFormatter";
import { Link } from "react-router-dom";

export default function Projects() {
  const { items: projects } = links.filter(
    (link) => link.path === "/projects"
  )[0];

  return (
    <>
      <h1>Projects</h1>
      <ul>
        {projects.length > 0 ? (
          projects.map((project, i) =>
            project.length < 1 ? (
              <li key={i} className="text-lg">
                {/* <Link> doesn't load vanilla javascript projects */}
                <a
                  href={`/projects/${toLinkFormatter(project)}`}
                  className="link"
                >
                  {project}
                </a>
              </li>
            ) : (
              <li key={i} className="text-lg">
                <Link
                  to={`/projects/${toLinkFormatter(project[0])}`}
                  className="text-blue-600 no-underline hover:underline"
                >
                  {project[0]}
                </Link>
              </li>
            )
          )
        ) : (
          <li>No projects were found.</li>
        )}
      </ul>
    </>
  );
}

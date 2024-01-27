import React from "react";
import { links } from "../App";
import { toLinkFormatter } from "../utils/toLinkFormatter";

export default function Projects() {
  const { items: projects } = links.filter(
    (link) => link.path === "/projects"
  )[0];

  return (
    <>
      <h1>Projects</h1>
      <ul>
        {projects.length > 0 ? (
          projects.map((project, i) => (
            <li key={i} className="text-lg">
              {/* <Link> doesn't load vanilla javascript projects */}
              <a
                href={`/projects/${toLinkFormatter(project)}`}
                className="text-blue-600 no-underline hover:underline"
              >
                {project}
              </a>
            </li>
          ))
        ) : (
          <li>No projects were found.</li>
        )}
      </ul>
    </>
  );
}

import React from "react";
import { links } from "../App";
import { Link } from "react-router-dom";
import { toLinkFormatter } from "../utils/toLinkFormatter";

export default function ManyProjects() {
  const projects = links.filter(
    (link) => link.path === "/projects/simulators"
  )[0].items;
  console.log(projects);

  return (
    <>
      <h1>Select a project</h1>
      <ul>
        {projects ? (
          projects.map(
            (proj, i) =>
              i > 0 && (
                <li key={i}>
                  <Link to={toLinkFormatter(proj)} className="link ">
                    {proj}
                  </Link>
                </li>
              )
          )
        ) : (
          <li>No projects available.</li>
        )}
      </ul>
    </>
  );
}

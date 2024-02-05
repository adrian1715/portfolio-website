import React from "react";
import { links } from "../App";
import { Link, useLocation, Outlet } from "react-router-dom";
import { formatLinkPath } from "../utils/formatLinkPath";
import { toLinkFormatter } from "../utils/toLinkFormatter";
import { isCurrentPage } from "../utils/isCurrentPage";

export default function ShowProjects() {
  const pathname = useLocation().pathname.endsWith("/")
    ? useLocation().pathname.substring(0, useLocation().pathname.length - 1)
    : useLocation().pathname;
  // const { pathname } = useLocation();

  const matchingRoutes = links
    .filter((link) => link.path === "/projects")[0]
    .children.map((project) => project.path);
  const lastDirectory = pathname.split("/")[pathname.split("/").length - 1];

  const isRouteAllowed = matchingRoutes.some((route) =>
    route.includes(lastDirectory)
  );

  const directories = pathname.split("/");
  // console.log(directories);

  const projects = isRouteAllowed
    ? links
        .filter((link) => link.path === "/projects")[0]
        .children.filter((link) => lastDirectory === link.path)[0].children
    : links.filter((link) => link.path === "/projects")[0].children;

  const projectUrls = isRouteAllowed
    ? links.filter((link) => link.path === "/projects")[0].children
    : projects
        .filter((project) => project.path === directories[2])[0]
        .children.map((project) => project.path);

  console.log("Projects Urls", projectUrls);
  if (isCurrentPage(pathname, projectUrls)) return <Outlet />;

  return (
    <>
      <h1>Select a project</h1>
      <ul>
        {projects.length > 0 ? (
          projects.map((proj, i) => (
            <li key={i}>
              <a href={`${pathname}/${proj.path}`} className="link text-lg">
                {formatLinkPath(`/${proj.path}`)}
              </a>
            </li>
          ))
        ) : (
          <li>No projects available.</li>
        )}
      </ul>
    </>
  );
}

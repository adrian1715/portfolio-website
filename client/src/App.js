import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootElement from "./pages/RootElement";
import Home from "./pages/Home";
import People from "./pages/People";
import NewPerson from "./pages/NewPerson";
import Projects from "./pages/Projects";
import Letrico from "./components/projects/Letrico";
import NotFound from "./pages/NotFound";
import Test from "./Test";
import Teams from "./Teams";

// dropdown items
const projects = [
  "Simulators",
  "Letrico",
  "Desempregados",
  "Web Quiz",
  "Pomodoro Timer",
];
const articles = ["page1", "page2", "page3", "page4", "page5"];

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/people",
        element: <People />,
        navLink: true,
        children: [{ path: "new", element: <NewPerson /> }],
      },
      { path: "/teams", element: <Teams />, navLink: true },
      {
        path: "/projects",
        element: <Projects />,
        navLink: true,
        type: "dropwdown",
        items: projects,
      },
      { path: "/projects/letrico", element: <Letrico /> },
      { path: "/articles", navLink: true, type: "dropdown", items: articles },
      { path: "/tests", element: <Test />, navLink: true },
    ],
  },
]);

export const links = router.routes[0].children.filter(
  (link) => link.navLink === true
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

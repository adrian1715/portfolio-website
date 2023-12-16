import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootElement from "./pages/RootElement";
import Home from "./pages/Home";
import People from "./pages/People";
import NewPerson from "./pages/NewPerson";
import Projects from "./pages/Projects";
import Letrico from "./components/projects/Letrico";
import NotFound from "./pages/NotFound";

const navLinks = ["People", "Page"]; // make the current link to be active
const projects = ["Simulators", "Letrico", "Desempregados"];

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement links={navLinks} projects={projects} />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        // index: true,
        path: "/people",
        element: <People />,
        children: [{ path: "new", element: <NewPerson /> }],
      },
      { path: "/projects", element: <Projects /> },
      { path: "/projects/letrico", element: <Letrico /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

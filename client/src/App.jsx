import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootElement from "./pages/RootElement";
import Home from "./pages/Home";
import People from "./pages/People";
import NewPerson from "./pages/NewPerson";
import Projects from "./pages/Projects";
import Letrico from "./projects/letrico/Letrico";
import NotFound from "./pages/NotFound";
import Test from "./Test";
import Teams from "./Teams";
import Timer from "./projects/pomodoro-timer/Timer";
import ManyProjects from "./pages/ManyProjects";
import Copa from "./projects/simulador-de-sorteio/copa-do-mundo-2022/Copa";
import LibSul from "./projects/simulador-de-sorteio/libertadores-sulamericana-2022/LibSul";
import BuscaCEP from "./projects/busca-cep/BuscaCEP";

// dropdown items
const projects = [
  ["Simulators", "Libertadores/Sul-Americana 2022", "Copa do Mundo 2022"],
  ["Letrico"],
  ["Busca CEP"],
  ["Web Quiz"],
  ["Desempregados"],
  ["Pomodoro Timer"],
  ["Recriando Sites", "Disney Plus", "Spotify"],
].sort();
// const articles = ["page1", "page2", "page3", "page4", "page5"];

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about-me", navLink: true },
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
      { path: "/projects/pomodoro-timer", element: <Timer /> },

      {
        path: "/projects/simulators",
        element: <ManyProjects />,
        items: projects[0],
      },
      {
        path: "/projects/simulators/copa-do-mundo-2022",
        element: <Copa />,
      },
      {
        path: "/projects/simulators/libertadores-sul-americana-2022",
        element: <LibSul />,
      },

      { path: "/projects/busca-cep", element: <BuscaCEP /> },

      { path: "/contact", element: <Test />, navLink: true },
    ],
  },
]);

export const links = router.routes[0].children;

export const navLinks = router.routes[0].children.filter(
  (link) => link.navLink === true
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

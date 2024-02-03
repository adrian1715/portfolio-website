import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootElement from "./pages/RootElement";
import Home from "./pages/Home";
import People from "./pages/People";
import NewPerson from "./pages/NewPerson";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Letrico from "./projects/letrico/Letrico";
import Timer from "./projects/pomodoro-timer/Timer";
import Test from "./Test";
import Test2 from "./Test2";
import Copa from "./projects/simulador-de-sorteio/copa-do-mundo-2022/Copa";
import LibSul from "./projects/simulador-de-sorteio/libertadores-sulamericana-2022/LibSul";
import BuscaCEP from "./projects/busca-cep/BuscaCEP";
import ShowProjects from "./pages/ShowProjects";

// dropdown items
// const projects = [
//   ["Simulators", "Libertadores/Sul-Americana 2022", "Copa do Mundo 2022"],
//   ["Letrico"],
//   ["Busca CEP"],
//   ["Pomodoro Timer"],
//   ["Simple Projects", "Login Panel", "Score Keeper", "ToDo List"],
//   ["Websites Clones", "Bauru Empregos", "Disney Plus", "Spotify"],
// ].sort();
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
      {
        path: "/projects",
        element: <Projects />,
        navLink: true,
        // items: projects,
        children: [
          { path: "letrico", element: <Letrico /> },
          { path: "pomodoro-timer", element: <Timer /> },
          {
            path: "simulators",
            element: <ShowProjects />,
            navLink: true,
            children: [
              { path: "copa-do-mundo-2022", element: <Test /> },
              { path: "libertadores-sulamericana-2022", element: <Test2 /> },
            ],
          },
          {
            path: "simple-projects",
            element: <ShowProjects />,
            children: [
              { path: "login-panel" },
              { path: "score-keeper" },
              { path: "todo-list" },
            ],
          },
          {
            path: "website-clones",
            element: <ShowProjects />,
            children: [
              { path: "disney-plus" },
              { path: "spotify" },
              { path: "bauru-empregos" },
            ],
          },
          { path: "busca-cep", element: <BuscaCEP /> },
        ],
      },
      { path: "/contact", element: <Test />, navLink: true },
    ],
  },
]);

export const links = router.routes[0].children;
console.log(links);

export const navLinks = router.routes[0].children.filter(
  (link) => link.navLink === true
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

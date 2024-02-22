import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootElement from "./pages/RootElement";
import Homepage from "./pages/Homepage";
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
import { projects } from "./pages/Projects";
import DisneyPlus from "./projects/recriando-sites/disney-plus/DisneyPlus";
import Spotify from "./projects/recriando-sites/spotify/Spotify";
import ScoreKeeper from "./projects/simple-projects/score-keeper/ScoreKeeper";
import ToDoList from "./projects/simple-projects/todo-list/ToDoList";
import Certificates from "./pages/Certificates";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: "/certificates",
        element: <Certificates />,
        navLink: true,
        type: "dropdown",
        items: ["Alura", "Udemy", "Youtube", "SymfonyCasts"],
        children: [
          { path: "alura" },
          { path: "udemy" },
          { path: "youtube" },
          { path: "symfonycasts" },
        ],
      },
      {
        path: "/projects",
        element: <Projects />,
        navLink: true,
        type: "dropdown",
        projects: true,
        items: projects,
        children: [
          { path: "letrico", element: <Letrico /> },
          { path: "pomodoro-timer", element: <Timer /> },
          {
            path: "simulators",
            element: <ShowProjects />,
            navLink: true,
            children: [
              { path: "copa-do-mundo-2022", element: <Copa /> },
              { path: "libertadores-sulamericana-2022", element: <LibSul /> },
            ],
          },
          {
            path: "simple-projects",
            element: <ShowProjects />,
            children: [
              { path: "login-panel" },
              { path: "score-keeper", element: <ScoreKeeper /> },
              { path: "todo-list", element: <ToDoList /> },
            ],
          },
          {
            path: "website-clones",
            element: <ShowProjects />,
            children: [
              { path: "disney-plus", element: <DisneyPlus /> },
              { path: "spotify", element: <Spotify /> },
              { path: "bauru-empregos" },
            ],
          },
          { path: "busca-cep", element: <BuscaCEP /> },
        ],
      },
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

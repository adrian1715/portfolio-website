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
import { projects } from "./pages/Projects";
import DisneyPlus from "./projects/recriando-sites/disney-plus/DisneyPlus";
import Spotify from "./projects/recriando-sites/spotify/Spotify";
import ScoreKeeper from "./projects/simple-projects/score-keeper/ScoreKeeper";
import ToDoList from "./projects/simple-projects/todo-list/ToDoList";
import About from "./components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      // { path: "/about", element: <About />, navLink: true },
      // { path: "/skills", navLink: true },
      // { path: "/contact", navLink: true },
      // {
      //   path: "/people",
      //   element: <People />,
      //   navLink: true,
      //   children: [{ path: "new", element: <NewPerson /> }],
      // },
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

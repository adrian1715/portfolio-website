import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootElement from "./pages/RootElement";
import Home from "./pages/Home";
import People from "./pages/People";
import NewPerson from "./pages/NewPerson";

const navLinks = ["People", "Page", "Projects"]; // make the current link to be active

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement links={navLinks} />,
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

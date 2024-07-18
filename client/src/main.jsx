import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import fetchApi from "./services/api.service";


const projectUrl = "/api/projects";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetchApi(`${projectUrl}`),
      },
      {
        path: "/project/:id",
        element: <ProjectPage />,
        loader: ({ params }) => fetchApi(`${projectUrl}/${params.id}`),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

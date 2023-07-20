import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/:currPath",
      element: <App />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;

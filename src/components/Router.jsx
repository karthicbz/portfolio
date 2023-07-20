import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import OtherPages from "./OtherPages";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/:currPath",
      element: <OtherPages />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;

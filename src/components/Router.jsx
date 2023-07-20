import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
  ]);
};

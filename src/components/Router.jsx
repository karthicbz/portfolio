import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import OtherPages from "./OtherPages";
// import ErrorPage from "./ErrorPage";
import SwipeView from "./SwipeView";

const Router = () => {
  return window.screen.width <= 414 ? (
    <SwipeView />
  ) : (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:currPath" element={<OtherPages />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;

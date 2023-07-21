import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import OtherPages from "./OtherPages";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:currPath" element={<OtherPages />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;

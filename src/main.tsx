import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";

import { RouterProvider, BrowserRouter, Routes, Route } from "react-router-dom";

import { Timeline } from "./pages/Timeline/Timeline";
import { Status } from "./pages/Status/Status";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Timeline />} />
      </Route>
      <Route path="/status">
        <Route index element={<Status />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

import React from "react";
import Launch from "../pages/Launch";
import Success from "../pages/Success";
import Error from "../pages/Error";
import Scan from "../pages/Scan";
import AddAdmin from "../pages/AddAdmin";
import { Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Launch />} />
      <Route path="/success" element={<Success />} />
      <Route path="/error" element={<Error />} />
      <Route path="/scan" element={<Scan />} />
      <Route path="/add" element={<AddAdmin />} />
    </Routes>
  );
};

export default Routers;

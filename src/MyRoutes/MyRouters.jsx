import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../Pages/Register";

import Login from "../Pages/Login";

const MyRouters = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRouters;

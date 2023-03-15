import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Layout from "./layout/container";
import Login from "./pages/login/container";
import AOS from "aos";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
function App() {
  return (
    <Routes>
      <Route path="*" element={<Layout />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;

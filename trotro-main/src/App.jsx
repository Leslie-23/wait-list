import React from "react";
import "./index.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import AppRoutes from "./pages/routes";
import MissionPage from "./components/mission";
import Contact from "./pages/contact";
import Developers from "./components/developers";
import Investors from "./components/investors";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/routes" element={<AppRoutes />}></Route>
      <Route path="/mission" element={<MissionPage />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/developers" element={<Developers />}></Route>
      <Route path="/investors" element={<Investors />}></Route>
      <Route path="*" element={<h1>404</h1>}></Route>
    </Routes>
  );
};

export default App;

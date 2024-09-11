import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./Components/Pages/Home.js";
import About from "./Components/Pages/About.js";
import Menu from "./Components/Pages/Menu.js";
import Contact from "./Components/Pages/Contact.js";
import Login from "./Components/Login/Login.js";
import Reservation from "./Components/Pages/Reservation.js";
import NotFound from "./Components/Resuable/NotFound.js";
import Admin from "./Components/Admin/Admin.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

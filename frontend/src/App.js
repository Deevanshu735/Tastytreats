import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./Components/Pages/Home.js";
import About from "./Components/Pages/About.js";
import Menu from "./Components/Pages/Menu.js";
import Contact from "./Components/Pages/Contact.js";
import Login from "./Components/Login/Login.js";
import Reservation from "./Components/Pages/Reservation.js";
import PaymentSuccess from "./Components/Pages/PaymentSuccess.js";
import NotFound from "./Components/Resuable/NotFound.js";
import Admin from "./Components/Admin/Admin.js";
// import Profile from "./Components/Pages/Profile.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/admin" element={<Admin />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

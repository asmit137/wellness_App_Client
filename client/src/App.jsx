import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Goals from "./pages/Goals";
import Consultation from "./pages/Consultation";
import AuthPage from "./pages/AuthPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WhatsAppButton from "./components/WhatsAppButton";


const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="https://wellness-app-client.vercel.app" element={<Home/>} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/auth" element={<AuthPage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/book-consultation" element={<Consultation/>} />
          </Route>
        </Routes>
        <WhatsAppButton />
    </Router>
  );
};

export default App;

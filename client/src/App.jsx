import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Goals from "./pages/Goals";
import Consultation from "./pages/Consultation";

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="https://wellness-app-client-git-main-asmit137s-projects.vercel.app" element={<Home/></Route>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/book-consultation" element={<Consultation/>} />
          </Route>
        </Routes>
    </Router>
  );
};

export default App;

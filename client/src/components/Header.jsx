import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-600">
          <Link to="/">Wellness App</Link>
        </h1>
        <nav className="flex space-x-4">
          {token && (
            <>
              <Link to="/dashboard" className="text-gray-700 hover:text-green-600">Dashboard</Link>
              <Link to="/goals" className="text-gray-700 hover:text-green-600">Goals</Link>
              <Link to="/book-consultation" className="text-gray-700 hover:text-green-600">Book Consultation</Link>
              <button onClick={handleLogout} className="text-red-500 hover:underline">Logout</button>
            </>
          )}
          {!token && (
            <>
            <Link to="/" className="text-gray-700 hover:text-green-600">Home</Link>
              <Link to="/login" className="text-gray-700 hover:text-green-600">Login</Link>
              <Link to="/register" className="text-gray-700 hover:text-green-600">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

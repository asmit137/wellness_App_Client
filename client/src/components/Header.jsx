import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <header className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-600">
          <Link to="/">Health Wellness App</Link>
        </h1>
        {/*         
        {!token && (
  <div className="flex justify-between items-center w-full px-4">
  
    <nav className="flex space-x-6 mx-auto">
      <Link to="/" className="text-gray-700 hover:text-green-600 font-medium">Home</Link>
      <Link to="/about" className="text-gray-700 hover:text-green-600 font-medium">About</Link>
      <Link to="/contact" className="text-gray-700 hover:text-green-600 font-medium">Contact</Link>
    </nav>

    
    <Link
      to="/auth"
      className="flex items-center text-blue-600 font-semibold hover:underline text-md"
    >
      <span className="mr-2 text-lg">👤</span> Login / Register
    </Link>
  </div>
)} */}

        {!token ? (
          <>
            <nav className="flex space-x-6 mx-auto">
              <Link to="/" className="text-gray-700 hover:text-green-600 font-medium">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-green-600 font-medium">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-green-600 font-medium">Contact</Link>
            </nav>
            <Link
              to="/auth"
              className="flex items-center text-blue-600 font-semibold hover:underline text-md"
            >
              <svg className="w-8 h-8 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.798.755 6.879 2.043M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

            </Link>
          </>
        ) : (
          <>
          <nav className="flex space-x-6 mx-auto">
              <Link to="/dashboard" className="text-gray-700 hover:text-green-600 font-medium">Dashboard</Link>
              <Link to="/goals" className="text-gray-700 hover:text-green-600 font-medium">Goals</Link>
              <Link to="/book-consultation" className="text-gray-700 hover:text-green-600 font-medium">Book Consultation</Link>
            </nav>
           <button onClick={handleLogout} className="text-red-500 hover:underline">Logout</button>

          </>
        )}
      </div>
    </header >
  );
};

export default Header;

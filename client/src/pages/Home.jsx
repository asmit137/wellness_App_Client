import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-blue-50 to-white px-4">
    <div className="text-center max-w-xl">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
        Welcome to <span className="text-green-600">Health Wellness App</span>
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Begin your journey to a balanced, healthier lifestyle with goal tracking, consultations, and more.
      </p>
      <Link
        to="/register"
        className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
      >
        Get Started
      </Link>
    </div>
  </div>
);

export default Home;

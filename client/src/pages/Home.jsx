import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="text-center mt-20">
    <h1 className="text-3xl font-bold">Welcome to Health Wellness App</h1>
    <p className="mt-4">Start your journey toward a healthier lifestyle today.</p>
    <Link to="/register" className="mt-4 inline-block text-blue-500 underline">
      Get Started
    </Link>
  </div>
);

export default Home;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image from "./../assets/image.jpg";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return(


  <>
  <div className="min-h-screen bg-white">
    <div className="relative w-full h-[75vh]">
      <img
        src={image}
        alt="Health Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-opacity-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          Welcome to <span className="text-green-400">Health Wellness App</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Begin your journey to a balanced, healthier lifestyle with goal tracking, consultations, and more.
        </p>
        <Link
          to="/auth"
          className="mt-6 inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>

 
    <div className="py-12 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Explore the Features</h2>
      <p className="text-gray-600 mb-6">
        With our platform, you can set personalized wellness goals, book consultations with expert dieticians, and track your health journey all in one place.
      </p>
      <div className="grid gap-6 md:grid-cols-3 text-left">
        <div className="p-4 bg-green-50 rounded shadow-sm">
          <h3 className="text-lg font-bold text-green-600 mb-2">Goal Tracking</h3>
          <p className="text-sm text-gray-600">Set and monitor daily, weekly, or monthly goals for fitness, diet, or habits.</p>
        </div>
        <div className="p-4 bg-blue-50 rounded shadow-sm">
          <h3 className="text-lg font-bold text-blue-600 mb-2">Consult a Dietician</h3>
          <p className="text-sm text-gray-600">Schedule consultations with certified experts for guidance and tips.</p>
        </div>
        <div className="p-4 bg-yellow-50 rounded shadow-sm">
          <h3 className="text-lg font-bold text-yellow-600 mb-2">Progress Dashboard</h3>
          <p className="text-sm text-gray-600">Visualize your improvements with clear metrics and friendly graphs.</p>
        </div>
      </div>
    </div>
  </div>

  <Footer/>
  </>

  )
};

export default Home;

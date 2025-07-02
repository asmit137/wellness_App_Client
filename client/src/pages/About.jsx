import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <div className="min-h-screen bg-white px-6 py-12 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-green-600">About Us</h1>
          <p className="text-lg mb-4">
            Welcome to <strong>Health Wellness App</strong> — your companion in achieving a healthier and more balanced lifestyle.
            Whether you're aiming to improve your fitness, nutrition, or overall wellness, our platform is designed to keep you on track.
          </p>
          <p className="text-lg mb-4">
            This app allows users to set personal wellness goals, track daily progress, and schedule consultations with professional dieticians.
            We believe that health isn't a one-time effort — it's a journey. And we're here to walk with you every step of the way.
          </p>
          <p className="text-lg">
            Our mission is to empower individuals with the tools they need to build healthy habits, stay consistent,
            and celebrate every milestone — no matter how small.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

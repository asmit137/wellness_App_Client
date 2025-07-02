import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-2xl font-bold text-green-600 mb-2">
              Health Wellness App
            </h2>
            <p className="text-gray-600 text-sm">
              Empowering you to track your wellness journey through personalized goals and consultations.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-700 hover:text-green-600 transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-700 hover:text-green-600 transition">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-green-600 transition">Contact</Link>
              </li>
             
            </ul>
          </div>

 
        </div>

     
        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Health Wellness App. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

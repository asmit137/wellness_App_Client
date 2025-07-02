import React, { useState } from "react";
import Login from "./../components/Login";
import Register from "./../components/Register";
import Loader from "../components/Loader";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [loading, setLoading] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg w-full max-w-md p-8 min-h-[500px]">
        {/* Toggle Button */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex border-none rounded-md overflow-hidden shadow">
            <button
              className={`px-12 py-2 text-sm font-medium ${
                activeTab === "login"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              className={`px-12 py-2 text-sm font-medium ${
                activeTab === "register"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
              onClick={() => setActiveTab("register")}
            >
              Register
            </button>
          </div>
        </div>

        {/* Loader or Form */}
        {loading ? (
          <Loader />
        ) : activeTab === "login" ? (
          <Login
            embedded={true}
            setGlobalLoading={setLoading}
            switchToRegister={() => setActiveTab("register")}
          />
        ) : (
          <Register embedded={true} setGlobalLoading={setLoading} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;

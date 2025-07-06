import React, { useState } from "react";
import { jwtDecode } from 'jwt-decode';
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import BASE_URL from "../api";

const GoogleSignInButton = ({ setGlobalLoading }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

const handleGoogleLoginSuccess = async (credentialResponse) => {
  setLoading(true);
  if (setGlobalLoading) setGlobalLoading(true);

  try {
    const token = credentialResponse.credential;

    const response = await axios.post(`${BASE_URL}/api/auth/googlelogin`, {
      token, 
    });

    localStorage.setItem("token", response.data.token);
    navigate("/dashboard");
  } catch (error) {
    console.error("Google login error:", error);
    alert("Google login failed");
  } finally {
    setLoading(false);
  }
};


  if (loading) return <Loader />;

  return (
    <GoogleLogin
      onSuccess={handleGoogleLoginSuccess}
      onError={() => alert("Google Sign-In failed")}
    />
  );
};

export default GoogleSignInButton;

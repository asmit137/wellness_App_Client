import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import BASE_URL from "./../api";
import GoogleSignInButton from "./GoogleSignInButton";

const Register = ({ embedded, setGlobalLoading }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [captchaToken, setCaptchaToken] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleCaptcha = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) return alert("Please complete the CAPTCHA");

    if (setGlobalLoading) setGlobalLoading(true);

    try {
      const res = await axios.post(`${BASE_URL}/api/auth/register`, {
        ...form,
        captchaToken,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch {
      alert("Registration failed");
    } finally {
      if (setGlobalLoading) setGlobalLoading(false);
    }
  };

  return (
    <>
      {!embedded && <h2 className="text-3xl font-bold text-center mb-6">Register</h2>}

        
      <div className="mt-6 text-center">
      <GoogleSignInButton />
        <p className="text-gray-600 mb-2">or sign up with</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          onChange={handleChange}
          placeholder="Name"
          className="w-full border p-2"
        />
        <input
          name="email"
          onChange={handleChange}
          placeholder="Email"
          className="w-full border p-2"
        />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
          className="w-full border p-2"
        />
        <ReCAPTCHA
          sitekey="6Ld173ArAAAAAKz9a4mGRwZDwL35czUnFohwIzlP"
          onChange={handleCaptcha}
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 cursor-pointer"
        >
          Register
        </button>
      </form>
    </>
  );
};

export default Register;

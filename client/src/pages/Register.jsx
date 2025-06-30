import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import BASE_URL from "../api";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [captchaToken, setCaptchaToken] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleCaptcha = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) return alert("Please complete the CAPTCHA");

    try {
      const res = await axios.post(`${BASE_URL}/api/auth/register`, {
        ...form,
        captchaToken
      });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch {
      alert("Registration failed");
    }
  };

  return (

    <>
    <h2 className="text-2xl font-bold mb-4 text-center">Register Yourself First</h2>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <input name="name" onChange={handleChange} placeholder="Name" className="w-full border p-2" />
      <input name="email" onChange={handleChange} placeholder="Email" className="w-full border p-2" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" className="w-full border p-2" />
      
      <ReCAPTCHA sitekey="6Ld173ArAAAAAKz9a4mGRwZDwL35czUnFohwIzlP" onChange={handleCaptcha} />

      <button className="w-full bg-green-500 text-white py-2 cursor-pointer">Register</button>
    </form>

    </>
  );
};

export default Register;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [captchaToken, setCaptchaToken] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleCaptcha = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        ...form,
        captchaToken
      });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch {
      alert("Login failed");
    }
  };

  return (
    <>
    <h1 className="text-4xl font-bold my-4 text-center">Login</h1>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20 space-y-4">
      <input name="email" placeholder="Email" className="w-full border p-2" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" className="w-full border p-2" onChange={handleChange} />
      <ReCAPTCHA sitekey="6Ld173ArAAAAAKz9a4mGRwZDwL35czUnFohwIzlP" onChange={handleCaptcha} />
      <button className="w-full bg-blue-500 text-white py-2 cursor-pointer">Login</button>
    </form>
    </>
  );
};

export default Login;

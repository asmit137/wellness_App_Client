import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import BASE_URL from "../api";
import Loader from "../components/Loader";

const Login = () => {
  const [loading, setLoading] = useState(false); // Start with false
  const [form, setForm] = useState({ email: "", password: "" });
  const [captchaToken, setCaptchaToken] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCaptcha = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please verify the captcha");
      return;
    }

    setLoading(true); 
    try {
      const res = await axios.post(`${BASE_URL}/api/auth/login`, {
        ...form,
        captchaToken,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch {
      alert("Login failed");
    } finally {
      setLoading(false); 
    }
  };


  if (loading) return <Loader />;

  return (
    <>
      <h1 className="text-4xl font-bold my-4 text-center">Login</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20 space-y-4">
        <input
          name="email"
          placeholder="Email"
          className="w-full border p-2"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full border p-2"
          onChange={handleChange}
        />
        <ReCAPTCHA
          sitekey="6Ld173ArAAAAAKz9a4mGRwZDwL35czUnFohwIzlP"
          onChange={handleCaptcha}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 cursor-pointer"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;

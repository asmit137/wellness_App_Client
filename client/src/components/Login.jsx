import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import BASE_URL from "./../api";

const Login = ({ embedded, setGlobalLoading, switchToRegister }) => {
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

    if (setGlobalLoading) setGlobalLoading(true);

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
      if (setGlobalLoading) setGlobalLoading(false);
    }
  };

  return (
    <>
      {!embedded && <h1 className="text-3xl font-bold text-center mb-6">Login</h1>}
      <form onSubmit={handleSubmit} className="space-y-4">
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
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 cursor-pointer"
        >
          Login
        </button>
      </form>

      <p className="text-center mt-4 text-sm text-gray-600">
        Don’t have an account?{" "}
        <button
          className="text-blue-600 hover:underline cursor-pointer"
          onClick={switchToRegister}
        >
          Register
        </button>
      </p>
    </>
  );
};

export default Login;

import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Loader from "../components/Loader"; 

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); 
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been submitted! We'll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  if (loading) return <Loader />; 

  return (
    <>
      <div className="min-h-screen bg-white px-6 py-12 text-gray-800">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-green-600">Contact Us</h1>
          <p className="text-lg mb-8">
            Have questions or feedback? We're here to help. Fill out the form below and we’ll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 p-3 rounded-md"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 p-3 rounded-md"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="w-full border border-gray-300 p-3 rounded-md"
            ></textarea>
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

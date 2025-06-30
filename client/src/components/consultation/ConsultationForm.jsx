import React, { useState } from "react";
import axios from "axios";
import BASE_URL from "../../api";

const ConsultationForm = ({ onBooked }) => {
  const [form, setForm] = useState({ date: "", time: "", reason: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
  
    const now = new Date();
    const selectedDateTime = new Date(`${form.date}T${form.time}`);
  
   
    const isAtLeast24HoursAhead = selectedDateTime.getTime() - now.getTime() >= 24 * 60 * 60 * 1000;
  
    
    const selectedHour = selectedDateTime.getHours();
    const isWithinWorkingHours = selectedHour >= 10 && selectedHour < 20;
  
    if (!isAtLeast24HoursAhead || !isWithinWorkingHours) {
      alert("Date must be at least 24 hours in the future and time must be between 10 AM and 8 PM.");
      return;
    }
  
  
    await axios.post(`${BASE_URL}/api/consultation`, form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setForm({ date: "", time: "", reason: "" });
    onBooked();
  };
  

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mt-4">
      <h3 className="text-lg font-semibold">Book a Consultation</h3>
      <input type="date" name="date" value={form.date} onChange={handleChange} className="border p-2 w-full" />
      <input type="time" name="time" value={form.time} onChange={handleChange} className="border p-2 w-full" />
      <textarea name="reason" value={form.reason} onChange={handleChange} placeholder="Reason" className="border p-2 w-full" />
      <button className="bg-green-600 text-white px-4 py-2 rounded">Book</button>
    </form>
  );
};

export default ConsultationForm;

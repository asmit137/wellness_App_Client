import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../api";
import Loader from "../components/Loader";


const Dashboard = () => {
  const [goals, setGoals] = useState([]);
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  const fetchGoals = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/goals`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setGoals(res.data);
    } catch (err) {
      console.error("Failed to fetch goals:", err);
    }
  };

  const fetchConsultations = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/consultation`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setConsultations(res.data);
    } catch (err) {
      console.error("Failed to fetch consultations:", err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchGoals(), fetchConsultations()]);
      setLoading(false);
    };
    if (token) {
      fetchData();
    }
  }, [token]);

  if (loading) return <Loader />;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">Welcome to Your Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4 text-green-600">
             Your Goals
          </h2>
          {goals.length === 0 ? (
            <p className="text-gray-500">You haven’t set any goals yet.</p>
          ) : (
            <ul className="space-y-3">
              {goals.map((goal) => (
                <li
                  key={goal._id}
                  className="flex justify-between bg-gray-50 p-3 rounded border hover:shadow-sm transition"
                >
                  <span className="font-medium text-gray-700 capitalize">{goal.goalType}</span>
                  <span className="text-sm text-gray-600">{goal.value} / {goal.target}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Consultations */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4 text-indigo-600">
            Your Consultations
          </h2>
          {consultations.length === 0 ? (
            <p className="text-gray-500">No consultations booked yet.</p>
          ) : (
            <ul className="space-y-3">
              {consultations.map((c) => (
                <li
                  key={c._id}
                  className="flex flex-col bg-gray-50 p-3 rounded border hover:shadow-sm transition"
                >
                  <span className="text-gray-700 font-medium">
                    📅 {c.date} at {c.time}
                  </span>
                  <span className="text-sm text-gray-600">Reason: {c.reason}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

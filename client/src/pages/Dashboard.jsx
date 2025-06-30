import React, { useEffect, useState } from "react";
import axios from "axios";
import ConsultationList from "../components/consultation/ConsultationList";
import BASE_URL from "../api";

const Dashboard = () => {
  const [goals, setGoals] = useState([]);
  const [consultations, setConsultations] = useState([]);
  const token = localStorage.getItem("token");

  // Fetch goals
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
    if (token) {
      fetchGoals();
      fetchConsultations();
    }
  }, [token]);

  console.log(goals)

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Goals */}
      <div className="bg-white shadow p-6 rounded mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Goals</h2>
        {goals.length === 0 ? (
          <p>No goals yet.</p>
        ) : (
          <ul className="list-disc pl-5">
            {goals.map((goal) => (
              <li key={goal._id}>
                <strong>{goal.goalType}:</strong> {goal.value} / {goal.target}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Consultations */}
      <div className="bg-white shadow p-6 rounded">
        <h2 className="text-xl font-semibold mb-2">Your Consultations</h2>
        {consultations.length === 0 ? (
          <p>No Consultation yet.</p>
        ) : (
          <ul className="list-disc pl-5">
        {consultations.map((c) => (
          <li key={c._id}>
             {c.date} at {c.time} — {c.reason}
          </li>
        ))}
      </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

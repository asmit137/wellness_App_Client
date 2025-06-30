import React, { useEffect, useState } from "react";
import axios from "axios";
import GoalForm from "../components/goals/GoalForm";
import GoalList from "../components/goals/GoalList";
import BASE_URL from "../api";
import Loader from "../components/Loader"; 

const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [goalForm, setGoalForm] = useState({ goalType: "", value: "", target: "" });
  const [editingGoalId, setEditingGoalId] = useState(null);
  const [editForm, setEditForm] = useState({ value: "", target: "" });
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const fetchGoals = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/api/goals`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setGoals(res.data);
    } catch (err) {
      console.error("Failed to fetch goals", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  const handleChange = (e) =>
    setGoalForm({ ...goalForm, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${BASE_URL}/api/goals`, goalForm, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setGoalForm({ goalType: "", value: "", target: "" });
      await fetchGoals();
    } catch (err) {
      console.error("Failed to create goal", err);
    }
    setLoading(false);
  };

  const handleEdit = (goal) => {
    setEditingGoalId(goal._id);
    setEditForm({ value: goal.value, target: goal.target });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(`${BASE_URL}/api/goals/${editingGoalId}`, editForm, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEditingGoalId(null);
      await fetchGoals();
    } catch (err) {
      console.error("Failed to update goal", err);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this goal?");
    if (!confirmDelete) return;

    setLoading(true);
    try {
      await axios.delete(`${BASE_URL}/api/goals/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await fetchGoals();
    } catch (err) {
      console.error("Failed to delete goal", err);
    }
    setLoading(false);
  };

  if (loading) return <Loader />;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Goals</h2>
      <GoalForm
        goalForm={goalForm}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <GoalList
        goals={goals}
        editingGoalId={editingGoalId}
        editForm={editForm}
        handleEdit={handleEdit}
        handleEditChange={handleEditChange}
        handleEditSubmit={handleEditSubmit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Goals;

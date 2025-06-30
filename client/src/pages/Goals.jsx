import React, { useEffect, useState } from "react";
import axios from "axios";
import GoalForm from "../components/goals/GoalForm";
import GoalList from "../components/goals/GoalList";

const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [goalForm, setGoalForm] = useState({ goalType: "", value: "", target: "" });
  const [editingGoalId, setEditingGoalId] = useState(null);
  const [editForm, setEditForm] = useState({ value: "", target: "" });

  const token = localStorage.getItem("token");

  const fetchGoals = async () => {
    const res = await axios.get("http://localhost:5000/api/goals", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setGoals(res.data);
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  const handleChange = (e) =>
    setGoalForm({ ...goalForm, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/goals", goalForm, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setGoalForm({ goalType: "", value: "", target: "" });
    fetchGoals();
  };

  // ✏️ Edit Handlers
  const handleEdit = (goal) => {
    setEditingGoalId(goal._id);
    setEditForm({ value: goal.value, target: goal.target });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:5000/api/goals/${editingGoalId}`,
      editForm,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setEditingGoalId(null);
    fetchGoals();
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this goal?");
    if (!confirmDelete) return;

    await axios.delete(`http://localhost:5000/api/goals/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchGoals();
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Goals</h2>
      <GoalForm goalForm={goalForm} handleChange={handleChange} handleSubmit={handleSubmit} />

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

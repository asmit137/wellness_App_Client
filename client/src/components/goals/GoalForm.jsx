import React from "react";

const GoalForm = ({ goalForm, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="mt-6 space-y-3">
    <h3 className="text-lg font-semibold">Set a New Goal</h3>
    <select
      name="goalType"
      value={goalForm.goalType}
      onChange={handleChange}
      className="border p-2 w-full"
    >
      <option value="">Select Goal Type</option>
      <option value="Weight">Weight</option>
      <option value="Calories">Calories</option>
      <option value="Water">Water</option>
      <option value="Steps">Steps</option>
    </select>
    <input
      type="number"
      name="value"
      placeholder="Current Value"
      value={goalForm.value}
      onChange={handleChange}
      className="border p-2 w-full"
    />
    <input
      type="number"
      name="target"
      placeholder="Target Value"
      value={goalForm.target}
      onChange={handleChange}
      className="border p-2 w-full"
    />
    <button className="bg-green-600 text-white px-4 py-2 rounded">Add Goal</button>
  </form>
);

export default GoalForm;

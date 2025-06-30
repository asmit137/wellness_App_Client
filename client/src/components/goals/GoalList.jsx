import React from "react";

const GoalList = ({
  goals,
  editingGoalId,
  editForm,
  handleEdit,
  handleEditChange,
  handleEditSubmit,
  handleDelete,
}) => {
  return (
    <div className="mt-6">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">Your Goals</h3>
      <div className="space-y-4">
        {goals.map((goal) => (
          <div
            key={goal._id}
            className="bg-white p-4 rounded shadow hover:shadow-md transition duration-200"
          >
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  {goal.goalType}
                </p>
                <p className="text-sm text-gray-500">
                  Progress: {goal.value} / {goal.target}
                </p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(goal)}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(goal._id)}
                  className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200 transition"
                >
                  Delete
                </button>
              </div>
            </div>

            {editingGoalId === goal._id && (
              <form onSubmit={handleEditSubmit} className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                <input
                  type="number"
                  name="value"
                  value={editForm.value}
                  onChange={handleEditChange}
                  placeholder="Value"
                  className="border border-gray-300 p-2 rounded w-full"
                />
                <input
                  type="number"
                  name="target"
                  value={editForm.target}
                  onChange={handleEditChange}
                  placeholder="Target"
                  className="border border-gray-300 p-2 rounded w-full"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
                >
                  Update
                </button>
              </form>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalList;

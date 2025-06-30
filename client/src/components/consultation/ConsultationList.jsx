import React from "react";
import axios from "axios";
import BASE_URL from "../../api";

const ConsultationList = ({ consultations, fetchConsultations }) => {
  const token = localStorage.getItem("token");

  const handleCancel = async (id) => {
    if (window.confirm("Are you sure you want to cancel this consultation?")) {
      try {
        await axios.delete(`${BASE_URL}/api/consultation/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchConsultations(); 
      } catch (err) {
        console.error("Cancellation failed:", err);
        alert("Failed to cancel. Please try again.");
      }
    }
  };

  return (
    <div className="mt-6">
  <h3 className="text-2xl font-bold mb-4 text-gray-800">Your Appointments</h3>
  {consultations.length === 0 ? (
    <p className="text-gray-500 italic">You have no upcoming consultations.</p>
  ) : (
    <ul className="space-y-4">
      {consultations.map((c) => (
        <li
          key={c._id}
          className="flex justify-between items-center bg-white shadow-sm border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow"
        >
          <div>
            <p className="text-gray-700 font-medium">
              📅 {c.date} <span className="text-sm text-gray-500">at</span> 🕒 {c.time}
            </p>
            <p className="text-gray-600 text-sm mt-1">Reason: {c.reason}</p>
          </div>
          <button
            onClick={() => handleCancel(c._id)}
            className="text-red-600 border border-red-500 px-3 py-1 rounded hover:bg-red-50 hover:shadow-sm transition-all text-sm"
          >
            Cancel
          </button>
        </li>
      ))}
    </ul>
  )}
</div>

  );
};

export default ConsultationList;

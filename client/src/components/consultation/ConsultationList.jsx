import React from "react";

const ConsultationList = ({ consultations }) => (
  <div className="mt-6">
    <h3 className="text-lg font-semibold">Your Appointments</h3>
    {consultations.length === 0 ? (
      <p className="text-gray-600">No consultations yet.</p>
    ) : (
      <ul className="list-disc pl-5">
        {consultations.map((c) => (
          <li key={c._id}>
            📅 {c.date} at {c.time} — {c.reason}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default ConsultationList;

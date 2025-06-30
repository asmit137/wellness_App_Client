import React from "react";

const GoalProgressBar = ({ value, target }) => {
  const percent = Math.min((value / target) * 100, 100).toFixed(0);
  return (
    <div>
      <div className="w-full bg-gray-200 rounded-full h-4 mt-1">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="text-sm text-gray-600">
        {value} / {target} ({percent}%)
      </p>
    </div>
  );
};

export default GoalProgressBar;

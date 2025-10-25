import React from "react";

const TaskListNumber = () => {
  return (
    <div className="flex mt-15 justify-between gap-5 screen">
      {/* 1. New Task (Darkest - Lowest Visual Weight) */}
      <div className="rounded-xl w-1/4 px-9 py-7 bg-gray-900 text-white shadow-xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      {/* 2. Completed (Slightly Lighter - Success) */}
      <div className="rounded-xl w-1/4 px-9 py-6 bg-gray-800 text-white shadow-xl">
        <h2 className="text-3xl font-semibold">5</h2>
        <h3 className="text-xl font-medium">Completed</h3>
      </div>

      {/* 3. Accepted (Mid Tone - Active) */}
      <div className="rounded-xl w-1/4 px-9 py-6 bg-gray-700 text-white shadow-xl">
        <h2 className="text-3xl font-semibold">12</h2>
        <h3 className="text-xl font-medium">Accepted</h3>
      </div>

      {/* 4. Failed (Lightest Gray - Highest Visual Weight) */}
      <div className="rounded-xl w-1/4 px-9 py-6 bg-gray-600 text-white shadow-xl">
        <h2 className="text-3xl font-semibold">1</h2>
        <h3 className="text-xl font-medium">Failed</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;

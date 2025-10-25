import React from "react";

const CreateTask = () => {
  return (
    <div className="w-full bg-gradient-to-r from-black via-gray-900 to-gray-600 border border-gray-700 shadow-2xl p-5 lg:p-5 mt-5  rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-500">Create New Task</h2>
      <form className="flex flex-wrap -mx-3">
        {/* The spacing between elements (space-y-4) is slightly reduced from the original space-y-6 to reduce overall height */}
        <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0 space-y-4">
          <div>
            <label
              htmlFor="taskTitle"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Task Title
            </label>
            <input
              id="taskTitle"
              type="text"
              placeholder="e.g., Make a UI Design"
              className="w-full p-2.5 border border-gray-600 rounded-lg bg-gray-900 placeholder-gray-500 text-white focus:ring-teal-500 focus:border-teal-500 transition duration-150 ease-in-out" // Reduced padding
            />
          </div>

          {/* Date */}
          <div>
            <label
              htmlFor="taskDate"
              className="block text-sm font-medium text-gray-300 mb-1" // Reduced margin
            >
              Date
            </label>
            <input
              id="taskDate"
              type="date"
              className="w-full p-2.5 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-teal-500 focus:border-teal-500 transition duration-150 ease-in-out cursor-pointer" // Reduced padding
            />
          </div>

          {/* Assign To */}
          <div>
            <label
              htmlFor="assignTo"
              className="block text-sm font-medium text-gray-300 mb-1" // Reduced margin
            >
              Assign to
            </label>
            <input
              id="assignTo"
              type="text"
              placeholder="e.g., Employee Name"
              className="w-full p-2.5 border border-gray-600 rounded-lg bg-gray-900 placeholder-gray-500 text-white focus:ring-teal-500 focus:border-teal-500 transition duration-150 ease-in-out" // Reduced padding
            />
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-300 mb-1" // Reduced margin
            >
              Category
            </label>
            <input
              id="category"
              type="text"
              placeholder="e.g., design, dev, marketing"
              className="w-full p-2.5 border border-gray-600 rounded-lg bg-gray-900 placeholder-gray-500 text-white focus:ring-teal-500 focus:border-teal-500 transition duration-150 ease-in-out" // Reduced padding
            />
          </div>
        </div>

        {/* Right Column for Textarea (Description) and Button */}
        <div className="w-full lg:w-1/2 px-3 space-y-4">
          {" "}
          {/* Reduced space-y */}
          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-300 mb-1" // Reduced margin
            >
              Description
            </label>
            {/* Reduced rows and removed explicit height to shrink the textarea and reduce height */}
            <textarea
              id="description"
              placeholder="Provide a detailed description of the task requirements..."
              className="w-full p-2.5 border border-gray-600 rounded-lg bg-gray-900 placeholder-gray-500 text-white focus:ring-teal-500 focus:border-teal-500 transition duration-150 ease-in-out resize-none" // Reduced padding
              rows="7" // Reduced from 10 rows
            ></textarea>
          </div>
          {/* Button Styling: Using Teal-600 for the main action */}
          <div className="pt-2 flex justify-end">
            {" "}
            {/* Reduced padding top */}
            <button
              type="submit"
              className="py-2.5 px-6 bg-gradient-to-r from-black via-gray-500 to-gray-900 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-md transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50" // Reduced padding
            >
              Create Task ✨
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;

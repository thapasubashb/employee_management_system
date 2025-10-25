import React from "react";
import Header from "../Other/Header";
import TaskListNumber from "../Other/TaskListNumber";
import TaskLists from "../Tasklist/TaskLists";

const EmployeeDashboard = () => {
  return (
    <div className="p-14 bg-gradient-to-r from-gray-900 via-black to-gray-900 ">
      <Header />
      <TaskListNumber />
      <TaskLists />
    </div>
  );
};

export default EmployeeDashboard;

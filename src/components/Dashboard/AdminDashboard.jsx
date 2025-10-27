import React from "react";
import Header from "../Other/Header";
import CreateTask from "../Other/CreateTask";
import Alltask from "../Other/Alltask";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen w-full p-10 md:p-14 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <Header />
      <CreateTask />
      <Alltask />
    </div>
  );
};

export default AdminDashboard;

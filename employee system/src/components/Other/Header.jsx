import React from "react";

const Header = () => {
  return (
    <div className=" flex items-end justify-between h-13 w-full  ">
      <h1 className="text-2xl font-medium ">
        Hello
        <br />
        <span className="text-3xl font-semibold">Subash👋</span>
      </h1>
      <button className=" border-gray-600 bg-gradient-to-r from-black via-gray-900 to-gray-600 text-white px-6 py-2 rounded-sm">
        Log Out
      </button>
    </div>
  );
};

export default Header;

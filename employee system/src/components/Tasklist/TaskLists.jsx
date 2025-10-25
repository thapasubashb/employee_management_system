import React from "react";

const TaskLists = () => {
  return (
    <div
      id="tasklist"
      className="h-95 overflow-x-auto w-full flex item-center justify-start gap-5 flex-nowrap py-5 mt-11"
    >
      <div className=" flex-shrink-0 h-full w-[350px] p-5 bg-gradient-to-r from-black via-gray-900 to-gray-500 rounded-xl ">
        <div className="flex justify-between items-center">
          <h3 className="bg-gray-800  text-sm px-4 py-1 rounded "> high</h3>
          <h4 classname="text-base">25 Oct 2025</h4>
        </div>
        <div>
          <h2 className="mt-6 text-2xl font-semibold">Make a youtube video</h2>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            molestias minus. Suscipit incidunt nisi rerum inventore sit, amet
            eius!z{" "}
          </p>
        </div>
      </div>
      <div className=" flex-shrink-0 h-full w-[350px] p-5 bg-gradient-to-r from-black via-gray-800 to-gray-900 rounded-xl ">
        <div className="flex justify-between items-center">
          <h3 className="bg-gray-800  text-sm px-4 py-1 rounded "> high</h3>
          <h4 classname="text-base">27 Oct 2025</h4>
        </div>
        <div>
          <h2 className="mt-6 text-2xl font-semibold">
            {" "}
            Time and attendance tracking
          </h2>
          <p className="text-sm mt-2">
            timekeeping: Records employee work hours through automated
            clock-in/out systems. <br />
            Leave management: Manages employee leave requests and balances.{" "}
          </p>
        </div>
      </div>
      <div className=" flex-shrink-0 h-full w-[350px] p-5  bg-gradient-to-r from-black via-gray-500 to-gray-500 rounded-xl ">
        <div className="flex justify-between items-center">
          <h3 className="bg-gray-800  text-sm px-4 py-1 rounded "> high</h3>
          <h4 classname="text-base"> 1 Nov 2025</h4>
        </div>
        <div>
          <h2 className="mt-6 text-2xl font-semibold">
            {" "}
            Performance management
          </h2>
          <p className="text-sm mt-2">
            Goal setting: Supports the process of setting and tracking employee
            goals. <br /> Evaluations: Facilitates performance reviews and the
            collection of feedback. <br /> Development: Helps with training and
            career planning to improve employee skills.{" "}
          </p>
        </div>
      </div>
      <div className=" flex-shrink-0 h-full w-[350px] p-5  bg-gradient-to-r from-black via-gray-900 to-gray-400 rounded-xl ">
        <div className="flex justify-between items-center">
          <h3 className="bg-gray-800 text-sm px-4 py-1 rounded "> high</h3>
          <h4 classname="text-base"> 10 Nov 2025</h4>
        </div>
        <div>
          <h2 className="mt-6 text-2xl font-semibold">
            {" "}
            Employee onboarding and engagement
          </h2>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            molestias minus. Suscipit incidunt nisi rerum inventore sit, amet
            ipsum dolor. eius!z{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskLists;

import React from "react";

const Login = () => {
  const submitHandler = () => {};

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20">
        <form
          onSubmit={submitHandler}
          className="flex flex-col item-center justify-center"
        >
          <input
            required
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl "
            type="email"
            placeholder="enter your email"
          />
          <input
            required
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl mt-5 "
            type="password"
            placeholder="enter password"
          />
          <button className=" mt-5 text-white  bg-emerald-600 rounded-full py-3 px-5 text-xl">
            login{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

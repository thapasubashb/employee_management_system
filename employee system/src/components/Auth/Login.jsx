import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email is ", email);
    console.log("password is", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="  flex h-screen w-screen items-center justify-center bg-gradient-to-r from-gray-800 via-black to-gray-800">
      <div className=" border-3 bg-gradient-to-r from-black via-gray-900 to-gray-600 border-gray-500 p-26">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col item-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2 border-gray-600 rounded-full py-3 px-8 text-xl "
            type="email"
            placeholder="enter your email"
          />
          <input
            vlaue={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 border-gray-600 rounded-full py-3 px-8 text-xl mt-5 "
            type="password"
            placeholder="enter password"
          />
          <button className=" mt-5  text-white bg-gray-900   rounded-full py-3 px-5 text-xl">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";

const Login = ({ handlelogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handlelogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-black to-slate-800">
      <div className="w-[400px] bg-slate-900/70 backdrop-blur-xl border border-slate-700 rounded-3xl shadow-2xl p-10">
        <h1 className="text-4xl font-bold text-center text-slate-200 tracking-wide mb-2">
          Welcome Back
        </h1>

        <p className="text-slate-400 text-center mb-8">Sign in to continue</p>

        <form onSubmit={submitHandler} className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl bg-slate-800/70 border border-slate-600 px-5 py-3 text-slate-100 placeholder-slate-400 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-500 transition-all duration-300"
          />

          <input
            type="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl bg-slate-800/70 border border-slate-600 px-5 py-3 text-slate-100 placeholder-slate-400 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-500 transition-all duration-300"
          />

          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700 hover:from-slate-600 hover:via-slate-700 hover:to-slate-600 text-slate-100 font-semibold py-3 rounded-xl border border-slate-500 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-95"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

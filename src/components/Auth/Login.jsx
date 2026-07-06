import React, { useState } from "react";
import { Shield } from "lucide-react";

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-black to-slate-900">
      {/* Login Card */}
      <div className="w-[450px] bg-slate-900/70 backdrop-blur-xl border border-slate-700 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.6)] p-10">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 rounded-2xl bg-slate-800 border border-slate-600 flex items-center justify-center">
            <Shield size={30} className="text-slate-200" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center text-slate-100">
          Welcome Back
        </h1>

        <p className="text-slate-400 text-center mt-2 mb-8">
          Login to your account
        </p>

        <form onSubmit={submitHandler} className="space-y-5">
          <input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-3 text-slate-100 placeholder-slate-500 outline-none focus:border-slate-500 transition"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-3 text-slate-100 placeholder-slate-500 outline-none focus:border-slate-500 transition"
          />

          <div className="flex justify-between items-center text-sm text-slate-400">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-slate-500" />
              Remember me
            </label>

            <button type="button" className="hover:text-slate-200 transition">
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

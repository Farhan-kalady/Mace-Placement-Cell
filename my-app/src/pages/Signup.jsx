import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", cgpa: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_URL = import.meta.env.VITE_API_URL || "";
    const res = await fetch(`${API_URL}/api/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    alert(data.message);

    if (data.message === "User Registered Successfully") {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black px-4">

      <div className="w-full max-w-md bg-gray-900/60 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/10 animate-fade-in">

        <h1 className="text-4xl font-serif font-bold text-center text-white mb-6">
          Create Account
        </h1>

        <p className="text-center text-gray-400 mb-8">
          Start your journey with MACE Placement Portal
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-black/40 border border-gray-700 text-white placeholder-gray-500 focus:border-white/50 focus:ring-1 focus:ring-white/40 transition"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-lg bg-black/40 border border-gray-700 text-white placeholder-gray-500 focus:border-white/50 focus:ring-1 focus:ring-white/40 transition"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-black/40 border border-gray-700 text-white placeholder-gray-500 focus:border-white/50 focus:ring-1 focus:ring-white/40 transition"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <input
            type="number"
            step="0.01"
            placeholder="CGPA"
            className="w-full p-3 rounded-lg bg-black/40 border border-gray-700 text-white placeholder-gray-500 focus:border-white/50 focus:ring-1 focus:ring-white/40 transition"
            onChange={(e) => setForm({ ...form, cgpa: e.target.value })}
            required
          />

          <button className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-transform hover:scale-[1.02]">
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-white font-semibold hover:underline hover:text-gray-300 transition"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const API_URL = import.meta.env.VITE_API_URL || "";
      const res = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log("Login response:", data);
      alert(data.message);

      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        console.log("Redirecting to dashboard...");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Check console.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-4">

      {/* Glass Card */}
      <div className="w-full max-w-md backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl animate-fade-in">

        <h1 className="text-4xl font-serif text-center mb-2 tracking-wide">
          Welcome Back
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Login to access your dashboard
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-4 top-3.5 text-gray-400" size={18} />
            <input
              type="email"
              required
              className="w-full bg-gray-900/60 px-12 py-3 rounded-lg border border-white/10 focus:border-white/40 outline-none transition-all"
              placeholder="Email Address"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-4 top-3.5 text-gray-400" size={18} />
            <input
              type="password"
              required
              className="w-full bg-gray-900/60 px-12 py-3 rounded-lg border border-white/10 focus:border-white/40 outline-none transition-all"
              placeholder="Password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          {/* Button */}
          <button
            className="w-full bg-white text-black py-3 rounded-lg font-bold text-lg hover:bg-gray-200 transition-all duration-300 shadow-md hover:scale-[1.02]"
          >
            Login
          </button>

        </form>

        {/* Signup Link */}
        <p className="text-center text-gray-400 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-white underline hover:text-gray-300 transition">
            Signup
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;


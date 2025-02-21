import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLogining } = useAuthStore();

  const validateForm = ({ email, password }) => {
    if (!email || !password) return toast.error("All fields are required");
    if (!/\S+@\S+\.\S+/.test(email)) return toast.error("Invalid email format");
    if (password.length < 6)
      return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const verified = validateForm({ email, password });
    if (verified) await login({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="h-[90vh] w-full flex justify-center items-center">
        <form onSubmit={handleLogin} className="flex flex-col gap-3 w-[280px]">
          <h1 className="w-full text-2xl">Login your account</h1>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="input text-gray-700 dark:text-gray-100 font-semibold bg-zinc-50 dark:bg-[#151515] border-none focus:outline-none"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="input py-5 text-gray-700 dark:text-gray-100 font-semibold bg-zinc-50 dark:bg-[#151515] border-none focus:outline-none"
          />
          <button
            disabled={isLogining}
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-1.5 rounded-lg cursor-pointer"
          >
            {isLogining ? ("Logining...") : ("login")}
          </button>
          <h3 className="w-full text-md">
            Did't have an account?{" "}
            <Link to="/signup" className="text-blue-900 underline cursor-p">
              Signup
            </Link>
          </h3>
        </form>
      </div>
    </>
  );
};

export default Login;

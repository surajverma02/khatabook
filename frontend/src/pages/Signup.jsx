import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

const Signup = () => {
  const { signup, isSigning } = useAuthStore();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const validateForm = ({ email, password, username }) => {
    if (!email || !password || !username)
      return toast.error("All fields are required");
    if (!/\S+@\S+\.\S+/.test(email)) return toast.error("Invalid email format");
    if (password.length < 6)
      return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const verified = validateForm(formData);
    if (verified === true) await signup(formData);
  };

  return (
    <>
      <div className="h-[90vh] w-full flex justify-center items-center">
        <form onSubmit={handleSignUp} className="flex flex-col gap-3 w-[280px]">
          <h1 className="w-full text-2xl">Create your account</h1>
          <input
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            type="text"
            placeholder="Username"
            className="input text-gray-700 dark:text-gray-100 font-semibold bg-zinc-50 dark:bg-[#151515] border-none focus:outline-none"
          />
          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type="email"
            placeholder="Email"
            className="input text-gray-700 dark:text-gray-100 font-semibold bg-zinc-50 dark:bg-[#151515] border-none focus:outline-none"
          />
          <input
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            type="password"
            placeholder="Password"
            className="input py-5 text-gray-700 dark:text-gray-100 font-semibold bg-zinc-50 dark:bg-[#151515] border-none focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-1.5 rounded-lg cursor-pointer"
          >
            {isSigning ? "Signing" : "Create"}
          </button>
          <h3 className="w-full text-md">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-900 underline cursor-p">
              Login
            </Link>
          </h3>
        </form>
      </div>
    </>
  );
};

export default Signup;

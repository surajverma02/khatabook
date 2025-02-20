import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="h-[90vh] w-full flex justify-center items-center">
        <form className="flex flex-col gap-3 w-[280px]">
          <h1 className="w-full text-2xl">Create your account</h1>
          <input
            type="text"
            placeholder="Username"
            className="input text-gray-700 dark:text-gray-100 font-semibold bg-zinc-50 dark:bg-[#151515] border-none focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="input text-gray-700 dark:text-gray-100 font-semibold bg-zinc-50 dark:bg-[#151515] border-none focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="input py-5 text-gray-700 dark:text-gray-100 font-semibold bg-zinc-50 dark:bg-[#151515] border-none focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-1.5 rounded-lg cursor-pointer"
          >
            Create
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

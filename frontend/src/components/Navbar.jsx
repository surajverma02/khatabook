import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const authUser = true;
  return (
    <>
      <div className="navbar px-10">
        <div className="flex-1">
          <a className="text-lg font-semibold">KhataBook</a>
        </div>
        <div className="flex-none">
          <ul className="flex">
            <li>
              <Link
                to="/"
                className="px-4 py-1.5 rounded-sm hover:bg-gray-50 dark:hover:bg-[#151515] cursor-pointer"
              >
                Home
              </Link>
            </li>
            {authUser && (
              <li>
                <Link
                  to="/create-hisaab"
                  className="px-4 py-1.5 rounded-sm hover:bg-gray-50 dark:hover:bg-[#151515] cursor-pointer"
                >
                  Create New Hisaab
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

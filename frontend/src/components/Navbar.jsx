import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  return (
    <>
      <div className="navbar flex-col gap-3 sm:flex-row sm:px-10">
        <div className="flex-1">
          <a className="text-lg font-semibold">KhataBook</a>
        </div>
        <div className="flex-none">
          <ul className="flex items-center">
            {authUser && (
              <>
                <li>
                  <Link
                    to="/"
                    className="px-2 py-1.5 rounded-sm hover:bg-gray-50 dark:hover:bg-[#151515] cursor-pointer"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/create-hisaab"
                    className="px-2 py-1.5 rounded-sm hover:bg-gray-50 dark:hover:bg-[#151515] cursor-pointer"
                  >
                    Create Hisaab
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="px-2 py-1.5 rounded-sm hover:bg-gray-50 dark:hover:bg-[#151515] cursor-pointer"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

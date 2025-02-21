import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const encrypted = true;
  return (
    <div className="pl-10 flex flex-col gap-5 pt-10">
      <div className="flex gap-2">
        <button className="bg-gray-300 text-[#353535] px-2 py-2 rounded-md flex items-center gap-2 focus:bg-blue-500 focus:text-white">
          <span>Filters</span>
          <img src="/icon/filter.svg" alt="hidden" className="h-5" />
        </button>
        <button className="bg-gray-300 text-[#353535] px-2 py-2 rounded-md flex items-center gap-2 focus:bg-blue-500 focus:text-white">
          <span>By date</span>
          <img src="/icon/date.svg" alt="hidden" className="h-5" />
        </button>
        <button className="bg-gray-300 text-[#353535] px-2 py-2 rounded-md flex items-center gap-2 focus:bg-blue-500 focus:text-white">
          <span>Newest First</span>
          <img
            src="/icon/arrow.svg"
            alt="hidden"
            className="h-4 text-red-500 stroke-current"
          />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-y-8">
        <div className="card w-96 bg-gray-100 dark:bg-gray-900 card-sm shadow-sm">
          <div className="card-body">
            <div className="w-full flex items-center">
              <div className=" flex gap-2 items-center">
                <span className="text-sm bg-blue-500 text-white px-1.5 py-1 rounded-md flex gap-1">
                  <img src="/icon/lock.svg" alt="" className="h-5" />
                  <button className="">Encrypted</button>
                </span>
                <span className="bg-gray-300 text-white p-1.5 rounded-md">
                  <img src="/icon/hide.png" alt="hidden" className="h-4" />
                </span>
              </div>
              <p className="text-gray-500 card-actions justify-end">
                Created on 12-07-2024
              </p>
            </div>
            <h2 className="text-xl font-semibold">Ghar ke khane ka hisaab</h2>
            <Link
              to="/hisaab"
              className="underline text-black/70 dark:text-white/70"
            >
              View Hisaab
            </Link>
          </div>
        </div>
        <div className="card w-96 bg-gray-100 dark:bg-gray-900 card-sm shadow-sm">
          <div className="card-body">
            <div className="w-full flex items-center">
              <div className=" flex gap-1.5 items-center">
                <span className="text-sm bg-emerald-500 text-white px-1.5 py-1 rounded-md flex gap-1">
                  <img src="/icon/unlock.svg" alt="" className="h-5" />
                  <button className="">Available</button>
                </span>
                <span className="bg-gray-300 text-white p-1.5 rounded-md">
                  <img src="/icon/view.png" alt="hidden" className="h-4" />
                </span>
              </div>
              <p className="text-gray-500 card-actions justify-end">
                Created on 12-07-2024
              </p>
            </div>
            <h2 className="text-xl font-semibold">Ghar ke khane ka hisaab</h2>
            <Link
              to="/hisaab"
              className="underline text-black/70 dark:text-white/70"
            >
              View Hisaab
            </Link>
          </div>
        </div>
        <div className="card w-96 bg-gray-100 dark:bg-gray-900 card-sm shadow-sm">
          <div className="card-body">
            <div className="w-full flex items-center">
              <div className=" flex gap-2 items-center">
                <span className="text-sm bg-blue-500 text-white px-1.5 py-1 rounded-md flex gap-1">
                  <img src="/icon/lock.svg" alt="" className="h-5" />
                  <button className="">Encrypted</button>
                </span>
                <span className="bg-gray-300 text-white p-1.5 rounded-md">
                  <img src="/icon/hide.png" alt="hidden" className="h-4" />
                </span>
              </div>
              <p className="text-gray-500 card-actions justify-end">
                Created on 12-07-2024
              </p>
            </div>
            <h2 className="text-xl font-semibold">Ghar ke khane ka hisaab</h2>
            <Link
              to="/hisaab"
              className="underline text-black/70 dark:text-white/70"
            >
              View Hisaab
            </Link>
          </div>
        </div>
        <div className="card w-96 bg-gray-100 dark:bg-gray-900 card-sm shadow-sm">
          <div className="card-body">
            <div className="w-full flex items-center">
              <div className=" flex gap-1.5 items-center">
                <span className="text-sm bg-emerald-500 text-white px-1.5 py-1 rounded-md flex gap-1">
                  <img src="/icon/unlock.svg" alt="" className="h-5" />
                  <button className="">Available</button>
                </span>
                <span className="bg-gray-300 text-white p-1.5 rounded-md">
                  <img src="/icon/view.png" alt="hidden" className="h-4" />
                </span>
              </div>
              <p className="text-gray-500 card-actions justify-end">
                Created on 12-07-2024
              </p>
            </div>
            <h2 className="text-xl font-semibold">Ghar ke khane ka hisaab</h2>
            <Link
              to="/hisaab"
              className="underline text-black/70 dark:text-white/70"
            >
              View Hisaab
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

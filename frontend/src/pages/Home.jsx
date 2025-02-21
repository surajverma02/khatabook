import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useHisaabStore } from "../stores/hisaabStore";
import toast from "react-hot-toast";

const Home = () => {
  const {
    hisaabs,
    getAllHisaabs,
    isHisaabFetching,
    selectedHisaab,
    setSelectedHisaab,
  } = useHisaabStore();

  const [passcode, setPasscode] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getAllHisaabs();
  }, [getAllHisaabs]);

  const handlePasscode = (e) => {
    e.preventDefault();
    if (!passcode) return toast.error("Passcode are required");
    if (!(passcode === selectedHisaab.passcode))
      return toast.error("Passcode is wrong");
    setPasscode("");
    navigate(`/hisaab/${selectedHisaab._id}`);
  };

  if (isHisaabFetching)
    return (
      <div className="w-full h-screen flex flex-col gap-3 justify-center items-center">
        <span className="loading loading-ring loading-xl"></span>
        <p className="text-xl sm:text-2xl font-bold text-cyan-500">
          Fetching Hisaabs
        </p>
      </div>
    );

  return (
    <div className="p-5 min-sm:flex flex justify-center">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {hisaabs.map((hisaab) => (
          <div
            key={hisaab._id}
            className="card max-xs:w-[95vw] w-108 sm:w-76 md:w-90 lg:w-80 xl:w-96 bg-gray-100 dark:bg-gray-900 card-sm shadow-sm"
          >
            <div className="card-body">
              <div className="w-full flex items-center">
                <div className="flex gap-2 items-center">
                  {hisaab.isEncrypted ? (
                    <>
                      <span className="text-sm bg-blue-500 text-white px-1.5 py-1 rounded-md flex gap-1">
                        <img src="/icon/lock.svg" alt="" className="h-5" />
                        <button className="">Encrypted</button>
                      </span>
                      <span className="bg-gray-300 max-xxs:hidden text-white p-1.5 rounded-md">
                        <img
                          src="/icon/hide.png"
                          alt="hidden"
                          className="h-4"
                        />
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-sm bg-emerald-500 text-white px-1.5 py-1 rounded-md flex gap-1">
                        <img src="/icon/unlock.svg" alt="" className="h-5" />
                        <button className="">Available</button>
                      </span>
                      <span className="bg-gray-300 max-xxs:hidden text-white p-1.5 rounded-md">
                        <img
                          src="/icon/view.png"
                          alt="hidden"
                          className="h-4"
                        />
                      </span>
                    </>
                  )}
                </div>
                <p className="text-gray-500 card-actions justify-end">
                  Created on {hisaab.date}
                </p>
              </div>
              <h2 className="text-xl font-semibold">{hisaab.title}</h2>
              {hisaab.isEncrypted ? (
                <a
                  onClick={() => setSelectedHisaab(hisaab)}
                  href="#my_modal_8"
                  className="underline text-black/70 dark:text-white/70"
                >
                  View Hisaab
                </a>
              ) : (
                <Link
                  to={`/hisaab/${hisaab._id}`}
                  onClick={() => setSelectedHisaab(hisaab)}
                  className="underline text-black/70 dark:text-white/70"
                >
                  View Hisaab
                </Link>
              )}
            </div>

            <div className="modal" role="dialog" id="my_modal_8">
              <div className="modal-box flex flex-col items-center gap-2">
                <img
                  src="/icon/secure.svg"
                  alt=""
                  className="h-16 p-3 bg-blue-200 rounded-full"
                />
                <h3 className="text-lg font-bold">Protected Hisaab</h3>
                <p className="text-sm text-center">
                  This hisaab is protected. Enter passcode to view!
                </p>
                <form
                  onSubmit={handlePasscode}
                  className="flex items-center p-1 bg-blue-500 rounded-full"
                >
                  <input
                    disabled
                    name="hisaabPasscode"
                    value={hisaab.passcode}
                    type="text"
                    className="hidden"
                  />
                  <input
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    type="text"
                    className="w-[90%] pl-3 text-black/80 py-1 bg-white rounded-l-full outline-none border-none"
                  />
                  <button type="submit" className="cursor-pointer">
                    <img
                      src="/icon/enter.svg"
                      alt=">"
                      className="h-8 rounded-full p-1"
                    />
                  </button>
                </form>
                <div className="">
                  <a href="#" className="btn rounded-full flex gap-1">
                    <span>Cancel</span>
                    <img src="/icon/cancel.svg" alt="X" className="h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {hisaabs.length <= 0 && (
          <div className="">
            <h1 className="text-3xl font-bold">Khatabook</h1>
            <p className="py-4">
              There is no hisaab yet. Create new hisaab to see!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

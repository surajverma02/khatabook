import React, { useState } from "react";
import { useHisaabStore } from "../stores/hisaabStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateHisaab = () => {
  const { createHisaab, isHisaabCreating } = useHisaabStore();
  const [hisaabData, setHisaabData] = useState({
    title: "",
    description: "",
    isEncrypted: false,
    passcode: "",
  });
  const navigate = useNavigate();

  const validateHisaab = (hisaabData) => {
    if (!hisaabData.title || !hisaabData.description)
      return toast.error("Title and description are required");
    if (hisaabData.isEncrypted && !hisaabData.passcode)
      return toast.error("Passcode are required to encrypt");

    return true;
  };

  const handleCreateHisaab = async (e) => {
    e.preventDefault();
    const valid = validateHisaab(hisaabData);
    if (valid === true) await createHisaab(hisaabData);
    setHisaabData({
      title: "",
      description: "",
      isEncrypted: false,
      passcode: "",
    })
    navigate("/");
  };

  return (
    <>
      <div className="w-1/2 pl-10 pt-10">
        <form onSubmit={handleCreateHisaab} className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">Create New Hisaab</h1>
          <input
            value={hisaabData.title}
            onChange={(e) =>
              setHisaabData({ ...hisaabData, title: e.target.value })
            }
            type="text"
            placeholder="Title"
            className="input w-2/3 text-gray-700 dark:text-gray-100 bg-zinc-100 dark:bg-[#151515] border-none focus:outline-none"
          />
          <textarea
            value={hisaabData.description}
            onChange={(e) =>
              setHisaabData({ ...hisaabData, description: e.target.value })
            }
            placeholder="Description"
            className="text-gray-700 text-sm bg-zinc-100 dark:text-gray-100 dark:bg-[#151515] border-none px-3 py-2 rounded-md outline-none"
            rows="12"
          ></textarea>
          <div className="flex justify-between px-5">
            <label className="flex gap-3 items-center">
              <input
                checked={hisaabData.isEncrypted}
                onChange={(e) =>
                  setHisaabData({
                    ...hisaabData,
                    isEncrypted: e.target.checked,
                  })
                }
                type="checkbox"
                className="h-3.5 w-3.5"
              />
              <span className="text-md"> Encrypt this file?</span>
            </label>
            <input
              disabled={!hisaabData.isEncrypted}
              value={hisaabData.passcode}
              onChange={(e) =>
                setHisaabData({ ...hisaabData, passcode: e.target.value })
              }
              type="text"
              placeholder="Passcode"
              className="input w-1/3 text-gray-700 dark:text-gray-100 dark:bg-[#151515] bg-zinc-100 border-none focus:outline-none"
            />
          </div>
          <div>
            <button
              disabled={isHisaabCreating}
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md cursor-pointer"
            >
              {isHisaabCreating ? "Creating hisaab ..." : "Create New Hisaab"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateHisaab;

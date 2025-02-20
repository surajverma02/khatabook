import React, { useState } from "react";

const CreateHisaab = () => {
  const [isDisabled, setIsDesabled] = useState(false);
  const [checked, setChecked] = useState(true);

  return (
    <>
      <div className="w-1/2 pl-10 pt-10">
        <form className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">Create New Hisaab</h1>
          <input
            type="email"
            placeholder="Title"
            className="input w-2/3 text-gray-700 dark:text-gray-100 bg-zinc-100 dark:bg-[#151515] border-none focus:outline-none"
          />
          <textarea
            placeholder="Description"
            className="text-gray-700 text-sm bg-zinc-100 dark:text-gray-100 dark:bg-[#151515] border-none px-3 py-2 rounded-md outline-none"
            rows="12"
          ></textarea>
          <div className="flex justify-between px-5">
            <label className="flex gap-3 items-center">
              <input type="checkbox" className="h-3.5 w-3.5" checked={checked} onClick={()=>{
                setChecked(!checked);
                setIsDesabled(!isDisabled)
              }} />
              <span className="text-md"> Encrypt this file?</span>
            </label>
            <input
              disabled={isDisabled}
              type="text"
              placeholder="Passcode"
              className="input w-1/3 text-gray-700 dark:text-gray-100 dark:bg-[#151515] bg-zinc-100 border-none focus:outline-none"
            />
          </div>
          <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md cursor-pointer"
          >
            Create New Hisaab
          </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateHisaab;

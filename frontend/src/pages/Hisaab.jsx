import React from "react";

const Hisaab = () => {
  const encrypted = false;
  return (
    <div className="pl-10 flex flex-col gap-5 pt-10">
      <div className="flex gap-8">
        <div className="flex gap-2 items-center">
          {encrypted ? (
            <>
              <span className="bg-blue-500 text-white px-3 py-1.5 rounded-md">
                Encrypted
              </span>
              <span className="bg-gray-300 text-white px-2 py-2 rounded-md">
                <img src="/icon/hide.png" alt="hidden" className="h-5" />
              </span>
            </>
          ) : (
            <>
              <span className="bg-blue-500 text-white px-3 py-1.5 rounded-md">
                UnEncrypted
              </span>
              <span className="bg-gray-300 text-white px-2 py-2 rounded-md">
                <img src="/icon/view.png" alt="hidden" className="h-5" />
              </span>
            </>
          )}
        </div>
        <div className="flex gap-2">
          <span className="bg-yellow-500 text-white px-3 py-1.5 rounded-md">
            Edit
          </span>
          <span className="bg-red-400 text-white px-3 py-1.5 rounded-md">
            Delete
          </span>
        </div>
      </div>
      <p className="text-gray-500">Created on 12-07-2024</p>
      <h2 className="text-2xl font-semibold">Ghar ke khaale ka hisaab</h2>
      <p className="w-1/2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab
        assumenda placeat iste exercitationem reiciendis! Architecto sunt totam
        velit sit corrupti consequatur obcaecati nesciunt minima earum libero,
        facere numquam accusantium.
      </p>
    </div>
  );
};

export default Hisaab;

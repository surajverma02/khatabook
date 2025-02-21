import React from "react";
import { useHisaabStore } from "../stores/hisaabStore";
import { useParams } from "react-router-dom";

const Hisaab = () => {
  const { hisaabs, deleteHisaab, isHisaabDeleting } = useHisaabStore();
  const { hissabId } = useParams();

  const hisaab = hisaabs.find((item) => item._id === hissabId);
  console.log(hisaab)

  return (
    <div className="pl-10 flex flex-col gap-5 pt-10">
      <div className="flex gap-8">
        <div className="flex gap-2 items-center">
          {hisaab.isEncrypted ? (
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
              <span className="bg-emerald-500 text-white px-3 py-1.5 rounded-md">
                Available
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
          <button onClick={() => deleteHisaab(hisaab._id)} disabled={isHisaabDeleting} className="bg-red-400 text-white px-3 py-1.5 rounded-md">
          Delete
          </button>
        </div>
      </div>
      <p className="text-gray-500">Created on {hisaab.date}</p>
      <h2 className="text-2xl font-semibold">{hisaab.title}</h2>
      <p className="w-1/2">{hisaab.description}</p>
    </div>
  );
};

export default Hisaab;

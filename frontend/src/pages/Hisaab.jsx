import React from "react";
import { useHisaabStore } from "../stores/hisaabStore";
import { Link } from "react-router-dom";

const Hisaab = () => {
  const { deleteHisaab, isHisaabDeleting, selectedHisaab } = useHisaabStore();

  return (
    <div className="p-5 sm:p-10 flex flex-col gap-3 sm:gap-5">
      <div className="flex gap-2 sm:gap-8">
        <div className="flex gap-1 sm:gap-2 items-center">
          {selectedHisaab.isEncrypted ? (
            <>
              <span className="bg-blue-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-md">
                Encrypted
              </span>
              <span className="bg-gray-300 text-white p-1.5 sm:p-2 rounded-md">
                <img src="/icon/hide.png" alt="hidden" className="h-5" />
              </span>
            </>
          ) : (
            <>
              <span className="bg-emerald-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-md">
                Available
              </span>
              <span className="bg-gray-300 text-white p-1.5 sm:p-2 rounded-md">
                <img src="/icon/view.png" alt="hidden" className="h-5" />
              </span>
            </>
          )}
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <Link to={`/update-hisaab/${selectedHisaab._id}`} className="bg-yellow-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-md">
            Edit
          </Link>
          <a
            href="#my_modal_8"
            className="btn bg-red-400 text-white px-2 sm:px-3 h-8.5 sm:h-9.5 rounded-md"
          >
            Delete
          </a>
        </div>
      </div>
      <p className="text-gray-500 text-sm sm:text-base">Created on {selectedHisaab.date}</p>
      <h2 className="text-lg sm:text-2xl font-semibold">{selectedHisaab.title}</h2>
      <p className="lg:w-1/2 text-sm sm:text-base">{selectedHisaab.description}</p>

      {/* Put this part before </body> tag */}
      <div className="modal" role="dialog" id="my_modal_8">
        <div className="modal-box flex flex-col items-center gap-2">
          <img
            src="/icon/warn.svg"
            alt=""
            className="h-16 p-3 bg-gray-300 dark:bg-black/70 rounded-full"
          />
          <h3 className="text-lg font-bold">Delete Hisaab</h3>
          <p className="text-sm text-center">
            You're going to delete the {selectedHisaab.title} hisaab. Are you
            sure?
          </p>
          <div className="modal-action">
            <a href="#" className="btn rounded-full">
              No, Keep It.
            </a>
            <Link to={"/"}>
            <button
              disabled={isHisaabDeleting}
              onClick={() => deleteHisaab(selectedHisaab._id)}
              className="btn bg-red-500 rounded-full text-white hover:bg-red-600"
            >
              Yes, Delete!
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hisaab;

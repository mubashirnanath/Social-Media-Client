import React from 'react';

function CommentsModal({ visible, onClose, comments }) {
  return (
    <>
      {/* <button
      className="bg-pink-500 text-white active:bg-pink-600 font-bold
       uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline
       -none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button"
      onClick={() => setShowModal(true)}
    >
      Open regular modal
    </button> */}
      {visible ? (
        <>
          <div className="fixed justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto mx-auto max-w-xl h-96 w-76">
              {/* content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* header */}
                <div className="flex items-center border p-5 text-center border-b border-solid border-slate-200 bg-white rounded-t">
                  <h3 className="text-3xl text-main justify-items-center font-semibold">
                    Comments
                  </h3>
                  <button
                    type="button"
                    className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={onClose}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 justify-self-end"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                {/* body */}
                <div className="p-4 overflow-y-auto">
                  <div className="md:w-96 w-full">
                    {comments?.comment?.map((comment) => (
                      <div className="border-b py-2 border-b-heavy-metal-300 flex justify-between w-full">
                        <div className="flex">
                          <div className="flex items-center ml-3">
                            <h3 className="font-bold text-lg">
                              {comment?.username}
                              <span className="px-2">:</span>
                            </h3>
                            <h4 className="text-sm leading-3">{comment?.comments}</h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* footer */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
    </>
  );
}

export default CommentsModal;

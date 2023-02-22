import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from './Avatar';

function QrCodeModal({ visible, onClose, link }) {
  const user = useSelector((state) => state.user);
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
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto mx-auto max-w-xl h-96">
              {/* content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-96 bg-white outline-none focus:outline-none">
                {/* header */}
                <div className="flex items-center p-5 text-center border-b border-solid border-slate-200 bg-white rounded-t">
                  <h3 className="text-3xl text-main justify-items-center text-center font-bold">
                    Scan here
                  </h3>
                  <button
                    type="button"
                    className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={onClose}
                  >
                    <span className="bg-transparent text-main  h-6 w-6 text-2xl block outline-none focus:outline-none">
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
                <div className="relative p-6 flex items-center">
                  <div className=" mx-auto">
                    <div className="flex gap-3 items center">
                      <Avatar img={user?.profile_img} />
                      <h1 className="font-bold text-xl text-main">{user?.username}</h1>
                    </div>
                    <img
                      className="h-52 justify-center"
                      src={link}
                      alt="qrcode"
                    />
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

export default QrCodeModal;

import React, { useState } from 'react';
import Avatar from './Avatar';
import Card from '../home/Card';
import EditProfileModal from './EditProfileModal';
import FollowModal from './FollowModal';

function HeadPart({ user, post }) {
  const [modal, setModal] = useState('');
  const activeElement = 'flex gap-2 px-2 text-main border-b-2 justify-center border-main shadow-md shadow-gray-300 font-bold';
  const nonActiveElement = 'flex gap-2';
  const [showModal, setShowModal] = useState(false);
  const [showFollowModal, setShowFollowModal] = useState(false);

  const handleOnClose = () => {
    setShowModal(false);
    setShowFollowModal(false);
  };
  // const handleFollowOnClose = () => setShowFollowModal(false);

  return (
    <Card>
      <div className="relative overflow-hidden rounded-md">
        <div className="h-36 overflow-hidden flex justify-center items-center">
          <img src={user?.cover_img} alt="" />
        </div>
        <div className="absolute top-24 left-6">
          <Avatar img={user?.profile_img} />
        </div>
        <div className="p-3">
          <div className="flex ml-36 items-center gap-2">
            <h1 className="text-2xl font-bold">{user?.username}</h1>
            <span>
              {user?.verified && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="blue"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              )}
            </span>
          </div>
          <div className="flex md:ml-auto mt-4">
            <div className="text-gray-500 w-1/3 leading-4 ml-36">
              <h1>{user?.bio}</h1>
            </div>
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="flex gap-1 items-center ml-auto bg-gray-500 md:p-1 p-2 rounded-md text-white"
            >
              <span className="hidden md:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              </span>
              <span className="text-sm md:text-lg">Edit Profile</span>
            </button>
          </div>
          <div className="flex mt-6 gap-3 justify-between px-16 md:px-40">
            <div className="cursor-pointer text-center">
              <h1 className="text-main font-bold text-2xl">
                {post ? post.length : 0}
              </h1>
              <h1 className="text-gray-500 font-semibol">posts</h1>
            </div>
            <div className="text-center cursor-pointer">
              <button
                type="button"
                onClick={() => {
                  setShowFollowModal(true);
                  setModal('Followers');
                }}
              >
                <h1 className="text-main font-bold text-2xl text-center">
                  {user?.followers ? user.followers?.length : 0}
                </h1>
                <h1 className="text-gray-500 font-semibold justify-self-center cursor-pointer">
                  followers
                </h1>
              </button>
            </div>
            <div className="cursor-pointer text-center">
              <button
                type="button"
                onClick={() => {
                  setShowFollowModal(true);
                  setModal('Following');
                }}
              >
                <h1 className="text-main font-bold text-2xl">
                  {user?.following ? user.following?.length : 0}
                </h1>
                <h1 className="text-gray-500 font-semibold">following</h1>
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex mt-5 justify-between px-10 py-0">
          <div className="">
            <button type="button" className={activeElement}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              Posts
            </button>
          </div>

          <div className="">
            <button
              type="button"
              className={nonActiveElement}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              Shorts
            </button>
          </div>

          <div>
            <button type="button" className={nonActiveElement}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
              Saved
            </button>
          </div>
        </div>
      </div>
      <EditProfileModal visible={showModal} onClose={handleOnClose} />
      <FollowModal
        visible={showFollowModal}
        value={modal}
        userId={user.userId}
        onClose={handleOnClose}
      />
    </Card>
  );
}

export default HeadPart;

/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { follow } from '../../../api/User/followRequest';
import Card from '../home/Card';
import Avatar from './Avatar';
import FollowModal from './FollowModal';

function UserHeadPart({ post, user }) {
  const currId = localStorage.getItem('userId');
  // const isFollower = user?.followers?.includes(currId);
  const [following, setFollowing] = useState(user?.followers?.includes(currId));
  const [showModal, setShowModal] = useState(false);
  const [modal, setModal] = useState('');
  const handleFollow = async (userId) => {
    const response = await follow(currId, userId);
    if (response.status) {
      setFollowing(true);
    } else {
      setFollowing(false);
    }
  };
  const handleOnClose = () => setShowModal(false);
  const activeElement = 'flex gap-2 px-2 text-main border-b-2 justify-center border-main shadow-md shadow-gray-300 font-bold';
  const nonActiveElement = 'flex gap-2';
  return (
    <Card>
      <div className="relative overflow-hidden rounded-md">
        <div className="h-36 overflow-hidden flex justify-center items-center">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt=""
          />
        </div>
        <div className="absolute top-24 left-6">
          <Avatar img={user?.profile_img} />
        </div>
        <div className="p-3">
          <div className="flex ml-36 items-center gap-2">
            <h1 className="text-2xl font-bold">{user?.username}</h1>
            <span>
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
            </span>
          </div>
          <div className="flex ml-auto">
            <div className="text-gray-500 w-1/3 leading-4 ml-36">
              <h1>{user?.bio}</h1>
            </div>
            {following ? (
              <button
                type="button"
                onClick={() => {
                  handleFollow(user?._id);
                }}
                className="flex gap-1 items-center ml-auto bg-gray-500 px-4 mr-7 rounded-md text-white"
              >
                <span className="text-lg">Following</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  handleFollow(user?._id);
                }}
                className="flex gap-1 items-center ml-auto bg-main px-4 mr-7 rounded-md text-white"
              >
                <span className="text-lg">Follow</span>
              </button>
            )}
          </div>
          <div className="ml-20 flex mt-6 gap-28 px-4">
            <div className="text-center">
              <h1 className="text-main font-bold text-2xl">
                {post ? post.length : 0}
              </h1>
              <h1 className="text-gray-500 font-semibol">posts</h1>
            </div>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setShowModal(true);
                  setModal('Followers');
                }}
              >
                <h1 className="text-main font-bold text-2xl text-center">
                  {user.followers ? user.followers?.length : 0}
                </h1>
                <h1 className="text-gray-500 font-semibold justify-self-center cursor-pointer">
                  followers
                </h1>
              </button>
            </div>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setShowModal(true);
                  setModal('Following');
                }}
              >
                <h1 className="text-main font-bold text-2xl">
                  {user.following?.length}
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
              //   onClick={dispatch(setShorts())}
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
      <FollowModal
        visible={showModal}
        value={modal}
        userId={user._id}
        onClose={handleOnClose}
      />
    </Card>
  );
}

export default UserHeadPart;

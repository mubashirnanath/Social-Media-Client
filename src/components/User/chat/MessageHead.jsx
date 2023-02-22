import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getUserDetails } from '../../../api/User/userRequest';

function MessageHead() {
  const [userData, setUserData] = useState(null);
  const { state } = useLocation();
  const currentUser = state.id;
  const chat = state.chats;
  // fetching data for head
  useEffect(() => {
    const userId = chat?.members.find((id) => id !== currentUser);
    const getUserData = async () => {
      const data = await getUserDetails(userId);
      setUserData(data);
    };
    if (chat !== null) getUserData();
  }, [chat]);
  return (
    <div className="bg-main w-full rounded-t-md  py-4 px-3">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <div className="text-white">
            <Link to="/message">
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
                  d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                />
              </svg>
            </Link>
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm shadow-gray-500 cursor-pointer">
            <img src={userData?.profile_img} alt="avatars" />
          </div>
          <div>
            <Link to="/profile">
              <h1 className="font-bold text-white text-lg">
                {userData?.username}
              </h1>
            </Link>
            <p className="text-sm text-white">online</p>
          </div>
        </div>
        <div className="flex gap-4 text-white">
          <span className="cursor-pointer">
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
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default MessageHead;

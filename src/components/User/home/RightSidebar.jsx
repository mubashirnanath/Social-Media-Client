/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { follow } from '../../../api/User/followRequest';
import Avatar from './Avatar';

function RightSidebar({ users }) {
  const [following, setFollowing] = useState(false);
  const currId = localStorage.getItem('userId');
  const handleFollow = async (userId) => {
    const response = await follow(currId, userId);
    if (response.status) {
      setFollowing(true);
    } else {
      setFollowing(false);
    }
  };
  return (
    <div className="flex items-center gap-2 py-5 px-2">
      <div>
        <Avatar img={users?.profile_img} />
      </div>
      <div className="px-2 font-semibold">
        <h2 className="text-lg">{users?.username}</h2>
        <p className="text-gray-400 p-0">{users?.email}</p>
      </div>
      <div className="ml-auto">
        {following ? (
          <button
            type="button"
            onClick={() => {
              handleFollow(users?._id);
            }}
            className="text-white bg-main p-1 rounded-md  px-3"
          >
            Following
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              handleFollow(users?._id);
            }}
            className="text-white bg-main p-1 rounded-md  px-3"
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
}

export default RightSidebar;

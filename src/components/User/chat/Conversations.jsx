import React, { useEffect, useState } from 'react';
import { getUserDetails } from '../../../api/User/userRequest';

function Conversations({ datas, currentUserId }) {
  const [userData, setUserData] = useState(null);
  const userId = datas?.members.find((id) => id !== currentUserId);
  useEffect(() => {
    const getUserData = async () => {
      const data = await getUserDetails(userId);
      setUserData(data);
    };
    getUserData();
  }, []);

  return (
    <div className="border bg-mains hover:bg-snow-drift-300">
      <div className="flex gap-4 px-2 py-2">
        <div className="w-12 rounded-full overflow-hidden shadow-sm shadow-gray-500 cursor-pointer">
          <img src={userData?.profile_img} alt="avatars" />
        </div>
        <div className="flex justify-between w-full">
          <div>
            <p className="font-bold">{userData?.username}</p>
            <p className="text-sm opacity-70">
              hello,what is your next plan...
            </p>
          </div>
          <div>
            <p className="text-sm">11:00 pm</p>
            <div className="rounded-full h-5 w-5 bg-red-600 ml-3">
              <p className="text-center text-sm text-white font-bold">1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conversations;

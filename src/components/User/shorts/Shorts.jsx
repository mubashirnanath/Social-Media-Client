import React from 'react';
import ReactPlayer from 'react-player';
import Avatar from '../home/Avatar';

function Shorts({ short }) {
  return (
    <div>
      {short?.map((shorts) => (
        <div className="flex mt-4">
          <div className="border border-main rounded-t-lg justify-center mx-auto">
            <div className="flex items-center gap-3 p-3">
              <Avatar img={shorts?.userId?.profile_img} />
              <h1 className="text-xl font-bold">{shorts?.userId?.username}</h1>
            </div>
            <ReactPlayer
              width="550px"
              height="450px"
              style={{ background: 'black', borderRadius: '20' }}
              url={shorts?.url}
              controls
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shorts;
